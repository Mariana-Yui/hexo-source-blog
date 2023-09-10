---
layout: post
title: standard-version源码分析
date: 2023-05-08 15:04:09
update: 2023-09-10 18:12:51
author: Mariana
banner_img: /imgs/banner/md/2023-05-08-standard-version-source-code-analysis.jpeg
index_img: /imgs/banner/md/2023-05-08-standard-version-source-code-analysis.jpeg
tags:
  - 源码分析
  - standard-version
categories:
  - 工程化
---

# 背景

最近又要搞个系统平台, 后续大小迭代通过版本号标识, 很自然地想到**CHANGELOG.md**, 调研后发现

# 使用教程

完整的配置参考[自动产出 changelog-第二节：自动产出](https://segmentfault.com/a/1190000039813329)

简单说下在自己项目中用到的配置:

## .versionrc

配置 CHANGELOG 的展示 format

````json
{
  "header": "# 更新历史 \n\n",
  "types": [
    {
      "type": "feat",
      "section": "✨ Features | 新功能",
      "hidden": false
    },
    {
      "type": "fix",
      "section": "🐛 Bug Fixes | Bug 修复",
      "hidden": false
    },
    {
      "type": "perf",
      "section": "⚡ Performance Improvements | 性能优化",
      "hidden": false
    },
    {
      "type": "revert",
      "section": "⏪ Reverts | 回退",
      "hidden": false
    },
    {
      "type": "chore",
      "section": "📦 Chores | 其他更新",
      "hidden": false
    },
    {
      "type": "docs",
      "section": "📝 Documentation | 文档",
      "hidden": false
    },
    {
      "type": "style",
      "section": "💄 Styles | 风格",
      "hidden": true
    },
    {
      "type": "refactor",
      "section": "♻ Code Refactoring | 代码重构",
      "hidden": false
    },
    {
      "type": "test",
      "section": "✅ Tests | 测试",
      "hidden": false
    },
    {
      "type": "build",
      "section": "👷‍ Build System | 构建",
      "hidden": false
    },
    {
      "type": "ci",
      "section": "🔧 Continuous Integration | CI 配置",
      "hidden": false
    }
  ]
}```

## package.json
配置skip, bump: 升级版本号, commit: 提交代码, tag: 打tag
```json
{
	"standard-version": {
	    "skip": {
	      "bump": false,
	      "commit": false,
	      "tag": false
	    }
	}
}
````

## 命令

指定`--release-as`为 patch, 每次升级递增小版本号(1.2.3 依次为大中小版本号); `--tag-prefix`为 wework-bot@ 指定 tag 的前缀, 不加前缀默认为 v, 因为该项目会打包为 docker 镜像, tag 会作为镜像版本, 所以这里需要加上前缀, 一般情况不需要加.

```
standard-version --release-as patch --tag-prefix wework-bot@
```

## 输出内容

按照以上配置执行命令后根据终端输出可以发现发生了以下行为:

1. 升级 package.json 版本号(如果没有指定`--first-release`第一次执行)
2. 生成 CHANGELOG.md(如果没有), 在开头加上距离上个 tag 之后的所有提交记录(符合提交规范的提交信息)
3. 提交本地上面涉及到的所有改动文件到远端
4. 打 tag 并提交远端

# 源码分析

明确了上述的配置以及命令输出内容, 就可以到源码中查看具体实现了, 我的建议是有目的性的去看源码, 因为**standard-version**这个工具中很多的功能例如项目中实际上根本没用到, 也就没有立刻理解的必要, 看源码的时候直接跳过就好.

首先在 package.json 中查看入口文件逻辑: **bin/cli.js**

```javascript
const standardVersion = require("../index");
const cmdParser = require("../command");
standardVersion(cmdParser.argv);
```

**./command.js**

yargs 指定的一系列参数, 会结合[conventional-changelog-config-spec](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md#conventional-changelog-configuration-spec-v210)预置的参数同意作为**standard-version**的可选参数.

```javascript
const spec = require("conventional-changelog-config-spec");
const yargs = require("yargs")
  .option("release-as", {
    alias: "r",
    describe:
      "Specify the release type manually (like npm version <major|minor|patch>)",
    requiresArg: true,
    string: true,
  })
  //...
  .config(getConfiguration())
  .pkgConf("standard-version");
//...
Object.keys(spec.properties).forEach((propertyKey) => {
  const property = spec.properties[propertyKey];
  yargs.option(propertyKey, {
    //...
  });
});
```

`--release-as`, `--tag-prefix`等参数就是这里注册的.
yargs.config(getConfiguration())注入了 **./lib/configuration.js** 的配置, 文件中指定了默认的配置文件名, 表明 yargs 初始化时会在项目根目录下查找这些文件, 注册给 yargs.

```javascript
const CONFIGURATION_FILES = [
  ".versionrc",
  ".versionrc.cjs",
  ".versionrc.json",
  ".versionrc.js",
];
```

**.config()**

> Tells the parser that if the option specified by `key` is passed in, it should be interpreted as a path to a JSON config file. The file is loaded and parsed, and its properties are set as arguments. Because the file is loaded using Node's require(), the filename MUST end in `.json` to be interpreted correctly.

根据 yargs 官网对**config(object)** api 的描述, 参数是 json 对象, 且对象 key 都会作为 yargs 的 key; 上述 **.versionrc** 中配置的**header**, **type** 等都可以通过 `yargs.header`, `yargs.type` 获取.

同时 yargs.pkgConf('standard-version')作用和.config()类似会在**package.json**中查询键名为 standard-version 的配置, 上述**package,json**中配置的 skip 也可以通过`yargs.skip.bump`, `yargs.skip.commit`, `yargs.skip.tag`获取.

**.pkg(key, [cwd])**

> Similar to [`config()`](https://github.com/yargs/yargs/blob/main/docs/api.md#config), indicates that yargs should interpret the object from the specified key in package.json as a configuration object.
> `cwd` can optionally be provided, the package.json will be read from this location.

**./index.js**

```javascript
module.exports = async function standardVersion(argv) {
  //...
  // 1. step1
  const args = Object.assign({}, defaults, argv);
  let pkg;
  for (const packageFile of args.packageFiles) {
    const updater = resolveUpdaterObjectFromArgument(packageFile);
    if (!updater) return;
    const pkgPath = path.resolve(process.cwd(), updater.filename);
    const contents = fs.readFileSync(pkgPath, "utf8");
    pkg = {
      version: updater.updater.readVersion(contents),
      private:
        typeof updater.updater.isPrivate === "function"
          ? updater.updater.isPrivate(contents)
          : false,
    };
    break;
  }
  // 2. step2
  let version;
  if (pkg) {
    version = pkg.version;
  } else if (args.gitTagFallback) {
    version = await latestSemverTag(args.tagPrefix);
  } else {
    throw new Error("no package file found");
  }
  // 核心逻辑
  const newVersion = await bump(args, version);
  await changelog(args, newVersion);
  await commit(args, newVersion);
  await tag(newVersion, pkg ? pkg.private : false, args);
};
```

运行命令时附带的参数以及 **.config()**. **.pkgConf()** 配置的参数都会作为函数的参数.
**./index.js** 函数除去一些校验逻辑, 主要做了两件事:

1. 结合 argv 和默认配置(位于 **./default.js**), 然后检索默认配置的**packageFiles**, 这里主要就是获取**package.json**中的 version 作为当前版本号. 可以看到遍历中存在 break, 找到文件就不会继续查询了.

   ```javascript
   defaults.packageFiles = ["package.json", "bower.json", "manifest.json"];
   ```

2. 核心逻辑

## 核心逻辑

### 2.1 更新版本号

```javascript
const newVersion = await bump(args, version);
```

**./lifecycles/bump.js**

```javascript
if (!args.firstRelease) {
  const releaseType = getReleaseType(
    args.prerelease,
    release.releaseType,
    version
  );
  newVersion =
    semver.valid(releaseType) ||
    semver.inc(version, releaseType, args.prerelease);
  updateConfigs(args, newVersion);
}
```

最关键的就上面这段逻辑, 如果是第一次发布(`--first-release`), 就不更新版本号, 否则根据`--release-as`更新, 这里用到了**semver**第三方库, 可以判断`--release-as`是否合法(**.valid()**), 根据`--release-as`自动判断生成新的版本号(**.inc()**), 完整使用参考[npm semver](https://www.npmjs.com/package/semver). 最后返回新的版本号.

### 2.2 生成 CHANGELOG

```javascript
await changelog(args, newVersion);
```

**./lifecycles/changelog.js**

```javascript
const START_OF_LAST_RELEASE_PATTERN = /(^#+ \[?[0-9]+\.[0-9]+\.[0-9]+|<a name=)/m

createIfMissing(args)
    const header = args.header

    let oldContent = args.dryRun ? '' : fs.readFileSync(args.infile, 'utf-8')
    const oldContentStart = oldContent.search(START_OF_LAST_RELEASE_PATTERN)
    if (oldContentStart !== -1) {
      oldContent = oldContent.substring(oldContentStart)
    }
    let content = ''
    const context = { version: newVersion }
    const changelogStream = conventionalChangelog({
      debug: args.verbose && console.info.bind(console, 'conventional-changelog'),
      preset: presetLoader(args),
      tagPrefix: args.tagPrefix
    }, context, { merges: null, path: args.path })
      .on('error', function (err) {
        return reject(err)
      })

    changelogStream.on('data', function (buffer) {
      content += buffer.toString()
    })

    changelogStream.on('end', function () {
      checkpoint(args, 'outputting changes to %s', [args.infile])
      writeFile(args, args.infile, header + '\n' + (content + oldContent).replace(/\n+$/, '\n'))
      return resolve()
    })
  })
```

上述关键逻辑, 如果**CHANGELOG.md**不存在则创建, 读取**CHANGELOG.md**, 根据**START_OF_LAST_RELEASE_PATTERN**正则匹配 log 内容的开头的`### [x.x.x]`, 从而获取旧的历史提交内容; 然后使用**conventional-changelog**第三方库获取上一次 tag 之后的所有提交, 并按照 **.versionrc** 中配置的 type 分类返回新的 CHANGELOG 内容, 这个库提供的函数返回 stream, 需要监听数据流事件, 参考[npm conventional-changelog](https://www.npmjs.com/package/conventional-changelog). 在`end`事件回调中将 yargs.header, 新内容, 正则匹配到的就内容拼接重新写入**CHANGELOG.md**
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1683808772259_563.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)
图: CHANGELOG.md 的内容格式

### 2.3 提交代码

```javascript
await commit(args, newVersion);
```

**./commit**

```javascript
if (!args.skip.changelog) {
  toAdd.push(args.infile);
}
Object.keys(bump.getUpdatedConfigs()).forEach(function (p) {
  toAdd.push(path.relative(process.cwd(), p));
});
await runExecFile(args, "git", ["add"].concat(toAdd));
await runExecFile(
  args,
  "git",
  ["commit"].concat(verify, sign, args.commitAll ? [] : toAdd, [
    "-m",
    `${formatCommitMessage(args.releaseCommitMessageFormat, newVersion)}`,
  ])
);
```

上述关键逻辑, 先获取上面两步修改的**package.json**(`bump.getUploadedConfigs()`), **CHANGELOG.md\***(`args.infile`), 然后就是执行**git add**和**git commit -m --no-verify**基本操作.
当时比较困惑的是 formatCommitMessage 哪来的, 你会发现查找源码并没有找到这个函数创建的地方, 这就要回到之前说的 **./command.js**最后将**conventional-changelog-config-spec**预置的属性合并到 args,
官方 api 中就能找到这个属性

#### releaseCommitMessageFormat (`string`)

> A string to be used to format the auto-generated release commit message.

默认值就是:

```
chore(release): {{currentTag}}
```

**./lib/format-commit-message.js**中会将`{{currentTag}}`替换为新的版本号

在 git log 中也能够看到这条 commit message:
![](https://dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1683877044866_1759.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

### 标记 tag

```javascript
await tag(newVersion, pkg ? pkg.private : false, args);
```

**./lib/lifecycles/tag.js**

```javascript
await runExecFile(args, "git", [
  "tag",
  tagOption,
  args.tagPrefix + newVersion,
  "-m",
  `${formatCommitMessage(args.releaseCommitMessageFormat, newVersion)}`,
]);
const currentBranch = await runExecFile("", "git", [
  "rev-parse",
  "--abbrev-ref",
  "HEAD",
]);
let message = "git push --follow-tags origin " + currentBranch.trim();
```

上述关键逻辑, 可以看到`--tag-prefix`配置此时就会作为**git tag**的前缀, 然后**git push --follow-tags origin branch**提交远端.
这里也收获一个小 tips: **git rev-parse --abbrev-ref HEAD** 获取当前分支名

# 总结

**standard-version** 源码总体不复杂, 但是还是能学习到**yargs**, **semver**, **conventional-changelog**库的使用以及工程化的操作, 🐮 的不行.

# reference

1. [自动产出 changelog-第二节：自动产出](https://segmentfault.com/a/1190000039813329)
2. [Conventional Changelog Configuration Spec (v2.1.0)](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md#releasecommitmessageformat-string)
3. [yargs api](https://github.com/yargs/yargs/blob/main/docs/api.md)
