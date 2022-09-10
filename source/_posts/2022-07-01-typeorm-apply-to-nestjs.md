---
layout: post
title: nestjs使用记录(一) - typeorm使用
date: 2022-07-01
author: Mariana
banner_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1655880121771_5768.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
index_img: //dev.azure.com/HealMSlin/8544be09-1224-4eb0-824b-90c4ec9d49ee/_apis/git/repositories/7a27a721-4c93-4ecf-8258-d5422217b60a/items?path=%2F1655880121771_5768.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0
tags:
  - nestjs
  - typeorm
---

# 背景

最近维护的许多 toB 系统都使用 typeorm 并大量使用其中的装饰器`decorator` 进行 db 的 CRUD, 忙里偷闲稍微记录一下

# 引言

文章会使用 的例子并结合自身项目开发中的内容讲解

# typeorm in nestjs

## 引入 db 配置

### 同步

```js
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'pass',
      port: 5432,
      database: 'shop',
      entities: [Product],
      subscribers: [ProductSubscriber],
      synchronize: true,
      autoLoadEntities: true,
      logger: 'advanced-console',
      logging: 'all'
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```

### 异步

异步需要传入一个函数, 例子中是`getTypeORMConfig`, 函数返回值和同步引入一直

```js
TypeOrmModule.forRootAsync({
  useFactory: getTypeORMConfig
});
```

## 引入 Entity 或 Repository

`Entity`是描述表结构的类, `Repository`是可以理解成自定义`Entity`, 可以在原有`Entity`基础上自定义方法

### Entity

`@CreateDateColumn`, `UpdateDateColumn` 特殊列，自动设置为实体的插入/更新时间。 不需要在此列中手动写入值，该值会自动设置
`@DeleteDateColumn` 会在`soft-delete`时自动设置, 暂时没用到

```js
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
```

### Repository

```js
@EntityRepository(Product) // 传入entity
export class DocumentRepository extends Repository<Prository> {
  async findDocuments() {}
  // ...custom function
}
```

### 引入

```js
// app.module.ts
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeORMConfig,
    }),
    TypeOrmModule.forFeature([  // 可以传入entity或repository
      DocumentRepository,
      HistoryRepository,
      SystemRepository,
      RetryRepository,
    ]),
  ],
})
```

## subscribe listener

typeorm 提供了一系列钩子监听各种操作并在操作之前/之后执行钩子中定义的方法, 看字面意思都知道这些钩子的触发时机, 就不一一介绍

- AfterLoad
- AfterInsert
- BeforeInsert
- AfterUpdate
- BeforeUpdate
- AfterRemove
- BeforeRemove

### 定义 subcriber

`listenTo`设置表示监听的 entity/repository, 不设置则表示监听所有 entity/repository

```js
import { EntitySubscriberInterface, EventSubscriber, UpdateEvent } from 'typeorm';
import { Product } from './product.entity';
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo(): any {
    return Product;
  }

  afterUpdate(event: UpdateEvent<Product>): Promise<any> | void {
    const priceGotUpdated = event.updatedColumns.find(
      (value) => value.propertyName,
      Product.prototype.price
    );
    if (priceGotUpdated) {
      if (Number(event.databaseEntity.price) !== event.entity.price) {
        Logger.log(
          `Price changed from 
        ${event.databaseEntity.price} to 
        ${event.entity.price}`,
          'Product Price Updated'
        );
      }
    }
  }
}
```

### 引入

```js
// app.module.ts
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeORMConfig,
    }),
    TypeOrmModule.forFeature([
      DocumentRepository,
      HistoryRepository,
      SystemRepository,
      RetryRepository,
    ]),
  ],
  providers: [DocumentSubscriber],
})
```

## 在 service 中使用 repository

1. 直接在构造函数中初始化

```js
// nestjs
export class ProductService {
  constructor(
    @InjectRepository(Template)
    private readonly templateRepository: Repository<Template>
  ) {}
}

// eggjs
export class ProductService {
  constructor(ctx: Context) {
    super(ctx);
    this.repo = getRepository(Template);
  }
}
```

2. 对方法使用`@Transaction`, `@TransactionRepository`

```js
@Transaction
public async create(
  @TransactionRepository(Template) templateRepository: Repository<Template>
) {
  actRepository.save(...)
}
```

# reference

1. [Subscribers a.k.a Entity Listeners of TypeORM on NestJS](https://medium.com/@Semyonic/subscribers-a-k-a-entity-listeners-of-typeorm-on-nestjs-a97ac75acc2d)
