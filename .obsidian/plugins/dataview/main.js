"use strict";

var obsidian = require("obsidian");

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e &&
      typeof e !== "string" &&
      !Array.isArray(e) &&
      Object.keys(e).forEach(function (k) {
        if (k !== "default" && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(
            n,
            k,
            d.get
              ? d
              : {
                  enumerable: true,
                  get: function () {
                    return e[k];
                  },
                }
          );
        }
      });
  });
  return Object.freeze(n);
}

var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

function commonjsRequire(path) {
  throw new Error(
    'Could not dynamically require "' +
      path +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}

var luxon = {};

Object.defineProperty(luxon, "__esModule", { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (
    Array.isArray(o) ||
    (it = _unsupportedIterableToArray(o)) ||
    (allowArrayLike && o && typeof o.length === "number")
  ) {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length)
        return {
          done: true,
        };
      return {
        done: false,
        value: o[i++],
      };
    };
  }

  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/ (function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
})(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * @private
 */

var InvalidDateTimeError = /*#__PURE__*/ (function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return (
      _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this
    );
  }

  return InvalidDateTimeError;
})(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/ (function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return (
      _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this
    );
  }

  return InvalidIntervalError;
})(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/ (function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return (
      _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this
    );
  }

  return InvalidDurationError;
})(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/ (function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
})(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/ (function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
})(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/ (function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
})(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/ (function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
})(LuxonError);

/**
 * @private
 */
var n$1 = "numeric",
  s$2 = "short",
  l$2 = "long";
var DATE_SHORT = {
  year: n$1,
  month: n$1,
  day: n$1,
};
var DATE_MED = {
  year: n$1,
  month: s$2,
  day: n$1,
};
var DATE_MED_WITH_WEEKDAY = {
  year: n$1,
  month: s$2,
  day: n$1,
  weekday: s$2,
};
var DATE_FULL = {
  year: n$1,
  month: l$2,
  day: n$1,
};
var DATE_HUGE = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
};
var TIME_SIMPLE = {
  hour: n$1,
  minute: n$1,
};
var TIME_WITH_SECONDS = {
  hour: n$1,
  minute: n$1,
  second: n$1,
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: s$2,
};
var TIME_WITH_LONG_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: l$2,
};
var TIME_24_SIMPLE = {
  hour: n$1,
  minute: n$1,
  hourCycle: "h23",
};
var TIME_24_WITH_SECONDS = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
  timeZoneName: s$2,
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n$1,
  minute: n$1,
  second: n$1,
  hourCycle: "h23",
  timeZoneName: l$2,
};
var DATETIME_SHORT = {
  year: n$1,
  month: n$1,
  day: n$1,
  hour: n$1,
  minute: n$1,
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n$1,
  month: n$1,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
};
var DATETIME_MED = {
  year: n$1,
  month: s$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
};
var DATETIME_MED_WITH_SECONDS = {
  year: n$1,
  month: s$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n$1,
  month: s$2,
  day: n$1,
  weekday: s$2,
  hour: n$1,
  minute: n$1,
};
var DATETIME_FULL = {
  year: n$1,
  month: l$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  timeZoneName: s$2,
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n$1,
  month: l$2,
  day: n$1,
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: s$2,
};
var DATETIME_HUGE = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
  hour: n$1,
  minute: n$1,
  timeZoneName: l$2,
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n$1,
  month: l$2,
  day: n$1,
  weekday: l$2,
  hour: n$1,
  minute: n$1,
  second: n$1,
  timeZoneName: l$2,
};

/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var isNeg = input < 0;
  var padded;

  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }

  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  ); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 =
      (last +
        Math.floor(last / 4) -
        Math.floor(last / 100) +
        Math.floor(last / 400)) %
      7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = _extends(
    {
      timeZoneName: offsetFormat,
    },
    intlOpts
  );

  var parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
  return parsed ? parsed.value : null;
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError(
        "Value format " + format + " is out of range for property format"
      );
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

/**
 * @private
 */

var monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [].concat(monthsNarrow);

    case "short":
      return [].concat(monthsShort);

    case "long":
      return [].concat(monthsLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];

    default:
      return null;
  }
}
var weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [].concat(weekdaysNarrow);

    case "short":
      return [].concat(weekdaysShort);

    case "long":
      return [].concat(weekdaysLong);

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [].concat(erasNarrow);

    case "short":
      return [].concat(erasShort);

    case "long":
      return [].concat(erasLong);

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];
    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast
    ? fmtValue + " " + fmtUnit + " ago"
    : "in " + fmtValue + " " + fmtUnit;
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (
    var _iterator = _createForOfIteratorHelperLoose(splits), _step;
    !(_step = _iterator()).done;

  ) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS,
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/ (function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
      currentFull = "",
      bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull,
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull,
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull,
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = _extends({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter =
        this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      },
      formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = function meridiem() {
        return knownEnglish
          ? meridiemForDateTime(dt)
          : string(
              {
                hour: "numeric",
                hourCycle: "h12",
              },
              "dayperiod"
            );
      },
      month = function month(length, standalone) {
        return knownEnglish
          ? monthForDateTime(dt, length)
          : string(
              standalone
                ? {
                    month: length,
                  }
                : {
                    month: length,
                    day: "numeric",
                  },
              "month"
            );
      },
      weekday = function weekday(length, standalone) {
        return knownEnglish
          ? weekdayForDateTime(dt, length)
          : string(
              standalone
                ? {
                    weekday: length,
                  }
                : {
                    weekday: length,
                    month: "long",
                    day: "numeric",
                  },
              "weekday"
            );
      },
      maybeMacro = function maybeMacro(token) {
        var formatOpts = Formatter.macroTokenToFormatOpts(token);

        if (formatOpts) {
          return _this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = function era(length) {
        return knownEnglish
          ? eraForDateTime(dt, length)
          : string(
              {
                era: length,
              },
              "era"
            );
      },
      tokenToString = function tokenToString(token) {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return _this.num(dt.millisecond);

          case "u": // falls through

          case "SSS":
            return _this.num(dt.millisecond, 3);
          // seconds

          case "s":
            return _this.num(dt.second);

          case "ss":
            return _this.num(dt.second, 2);
          // fractional seconds

          case "uu":
            return _this.num(Math.floor(dt.millisecond / 10), 2);

          case "uuu":
            return _this.num(Math.floor(dt.millisecond / 100));
          // minutes

          case "m":
            return _this.num(dt.minute);

          case "mm":
            return _this.num(dt.minute, 2);
          // hours

          case "h":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

          case "hh":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

          case "H":
            return _this.num(dt.hour);

          case "HH":
            return _this.num(dt.hour, 2);
          // offset

          case "Z":
            // like +6
            return formatOffset({
              format: "narrow",
              allowZ: _this.opts.allowZ,
            });

          case "ZZ":
            // like +06:00
            return formatOffset({
              format: "short",
              allowZ: _this.opts.allowZ,
            });

          case "ZZZ":
            // like +0600
            return formatOffset({
              format: "techie",
              allowZ: _this.opts.allowZ,
            });

          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, {
              format: "short",
              locale: _this.loc.locale,
            });

          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, {
              format: "long",
              locale: _this.loc.locale,
            });
          // zone

          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems

          case "a":
            return meridiem();
          // dates

          case "d":
            return useDateTimeFormatter
              ? string(
                  {
                    day: "numeric",
                  },
                  "day"
                )
              : _this.num(dt.day);

          case "dd":
            return useDateTimeFormatter
              ? string(
                  {
                    day: "2-digit",
                  },
                  "day"
                )
              : _this.num(dt.day, 2);
          // weekdays - standalone

          case "c":
            // like 1
            return _this.num(dt.weekday);

          case "ccc":
            // like 'Tues'
            return weekday("short", true);

          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);

          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format

          case "E":
            // like 1
            return _this.num(dt.weekday);

          case "EEE":
            // like 'Tues'
            return weekday("short", false);

          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);

          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone

          case "L":
            // like 1
            return useDateTimeFormatter
              ? string(
                  {
                    month: "numeric",
                    day: "numeric",
                  },
                  "month"
                )
              : _this.num(dt.month);

          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string(
                  {
                    month: "2-digit",
                    day: "numeric",
                  },
                  "month"
                )
              : _this.num(dt.month, 2);

          case "LLL":
            // like Jan
            return month("short", true);

          case "LLLL":
            // like January
            return month("long", true);

          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format

          case "M":
            // like 1
            return useDateTimeFormatter
              ? string(
                  {
                    month: "numeric",
                  },
                  "month"
                )
              : _this.num(dt.month);

          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string(
                  {
                    month: "2-digit",
                  },
                  "month"
                )
              : _this.num(dt.month, 2);

          case "MMM":
            // like Jan
            return month("short", false);

          case "MMMM":
            // like January
            return month("long", false);

          case "MMMMM":
            // like J
            return month("narrow", false);
          // years

          case "y":
            // like 2014
            return useDateTimeFormatter
              ? string(
                  {
                    year: "numeric",
                  },
                  "year"
                )
              : _this.num(dt.year);

          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string(
                  {
                    year: "2-digit",
                  },
                  "year"
                )
              : _this.num(dt.year.toString().slice(-2), 2);

          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string(
                  {
                    year: "numeric",
                  },
                  "year"
                )
              : _this.num(dt.year, 4);

          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string(
                  {
                    year: "numeric",
                  },
                  "year"
                )
              : _this.num(dt.year, 6);
          // eras

          case "G":
            // like AD
            return era("short");

          case "GG":
            // like Anno Domini
            return era("long");

          case "GGGGG":
            return era("narrow");

          case "kk":
            return _this.num(dt.weekYear.toString().slice(-2), 2);

          case "kkkk":
            return _this.num(dt.weekYear, 4);

          case "W":
            return _this.num(dt.weekNumber);

          case "WW":
            return _this.num(dt.weekNumber, 2);

          case "o":
            return _this.num(dt.ordinal);

          case "ooo":
            return _this.num(dt.ordinal, 3);

          case "q":
            // like 1
            return _this.num(dt.quarter);

          case "qq":
            // like 01
            return _this.num(dt.quarter, 2);

          case "X":
            return _this.num(Math.floor(dt.ts / 1000));

          case "x":
            return _this.num(dt.ts);

          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(
    dur,
    fmt
  ) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case "S":
            return "millisecond";

          case "s":
            return "second";

          case "m":
            return "minute";

          case "h":
            return "hour";

          case "d":
            return "day";

          case "w":
            return "week";

          case "M":
            return "month";

          case "y":
            return "year";

          default:
            return null;
        }
      },
      tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);

          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(function (found, _ref) {
        var literal = _ref.literal,
          val = _ref.val;
        return literal ? found : found.concat(val);
      }, []),
      collapsed = dur.shiftTo.apply(
        dur,
        realTokens.map(tokenToField).filter(function (t) {
          return t;
        })
      );

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
})();

var Invalid = /*#__PURE__*/ (function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
})();

/**
 * @interface
 */

var Zone = /*#__PURE__*/ (function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */

  _createClass(Zone, [
    {
      key: "type",
      get:
        /**
         * The type of zone
         * @abstract
         * @type {string}
         */
        function get() {
          throw new ZoneIsAbstractError();
        },
      /**
       * The name of this zone.
       * @abstract
       * @type {string}
       */
    },
    {
      key: "name",
      get: function get() {
        throw new ZoneIsAbstractError();
      },
    },
    {
      key: "ianaName",
      get: function get() {
        return this.name;
      },
      /**
       * Returns whether the offset is known to be fixed for the whole year.
       * @abstract
       * @type {boolean}
       */
    },
    {
      key: "isUniversal",
      get: function get() {
        throw new ZoneIsAbstractError();
      },
    },
    {
      key: "isValid",
      get: function get() {
        throw new ZoneIsAbstractError();
      },
    },
  ]);

  return Zone;
})();

var singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var SystemZone = /*#__PURE__*/ (function (_Zone) {
  _inheritsLoose(SystemZone, _Zone);

  function SystemZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = SystemZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
      locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  };
  /** @override **/

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  };
  /** @override **/

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  };
  /** @override **/

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "system";
  };
  /** @override **/

  _createClass(
    SystemZone,
    [
      {
        key: "type",
        get:
          /** @override **/
          function get() {
            return "system";
          },
        /** @override **/
      },
      {
        key: "name",
        get: function get() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        },
        /** @override **/
      },
      {
        key: "isUniversal",
        get: function get() {
          return false;
        },
      },
      {
        key: "isValid",
        get: function get() {
          return true;
        },
      },
    ],
    [
      {
        key: "instance",
        get:
          /**
           * Get a singleton instance of the local zone
           * @return {SystemZone}
           */
          function get() {
            if (singleton$1 === null) {
              singleton$1 = new SystemZone();
            }

            return singleton$1;
          },
      },
    ]
  );

  return SystemZone;
})(Zone);

var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    fMonth = parsed[1],
    fDay = parsed[2],
    fYear = parsed[3],
    fadOrBc = parsed[4],
    fHour = parsed[5],
    fMinute = parsed[6],
    fSecond = parsed[7];
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
      type = _formatted$i.type,
      value = _formatted$i.value;
    var pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/ (function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  };
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  };
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return this.isValidZone(s);
  };
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */

  IANAZone.isValidZone = function isValidZone(zone) {
    if (!zone) {
      return false;
    }

    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone,
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/

  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
      locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  };
  /** @override **/

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  };
  /** @override **/

  _proto.offset = function offset(ts) {
    var date = new Date(ts);
    if (isNaN(date)) return NaN;
    var dtf = makeDTF(this.name);

    var _ref2 = dtf.formatToParts
        ? partsOffset(dtf, date)
        : hackyOffset(dtf, date),
      year = _ref2[0],
      month = _ref2[1],
      day = _ref2[2],
      adOrBc = _ref2[3],
      hour = _ref2[4],
      minute = _ref2[5],
      second = _ref2[6];

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    } // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat

    var adjustedHour = hour === 24 ? 0 : hour;
    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0,
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  };
  /** @override **/

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  };
  /** @override **/

  _createClass(IANAZone, [
    {
      key: "type",
      get: function get() {
        return "iana";
      },
      /** @override **/
    },
    {
      key: "name",
      get: function get() {
        return this.zoneName;
      },
      /** @override **/
    },
    {
      key: "isUniversal",
      get: function get() {
        return false;
      },
    },
    {
      key: "isValid",
      get: function get() {
        return this.valid;
      },
    },
  ]);

  return IANAZone;
})(Zone);

var singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/ (function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0
      ? FixedOffsetZone.utcInstance
      : new FixedOffsetZone(offset);
  };
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/

  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  };
  /** @override **/

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  };
  /** @override **/

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  };
  /** @override **/

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  };
  /** @override **/

  _createClass(
    FixedOffsetZone,
    [
      {
        key: "type",
        get: function get() {
          return "fixed";
        },
        /** @override **/
      },
      {
        key: "name",
        get: function get() {
          return this.fixed === 0
            ? "UTC"
            : "UTC" + formatOffset(this.fixed, "narrow");
        },
      },
      {
        key: "ianaName",
        get: function get() {
          if (this.fixed === 0) {
            return "Etc/UTC";
          } else {
            return "Etc/GMT" + formatOffset(-this.fixed, "narrow");
          }
        },
      },
      {
        key: "isUniversal",
        get: function get() {
          return true;
        },
      },
      {
        key: "isValid",
        get: function get() {
          return true;
        },
      },
    ],
    [
      {
        key: "utcInstance",
        get:
          /**
           * Get a singleton instance of UTC
           * @return {FixedOffsetZone}
           */
          function get() {
            if (singleton === null) {
              singleton = new FixedOffsetZone(0);
            }

            return singleton;
          },
      },
    ]
  );

  return FixedOffsetZone;
})(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/ (function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/

  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  };
  /** @override **/

  _proto.formatOffset = function formatOffset() {
    return "";
  };
  /** @override **/

  _proto.offset = function offset() {
    return NaN;
  };
  /** @override **/

  _proto.equals = function equals() {
    return false;
  };
  /** @override **/

  _createClass(InvalidZone, [
    {
      key: "type",
      get: function get() {
        return "invalid";
      },
      /** @override **/
    },
    {
      key: "name",
      get: function get() {
        return this.zoneName;
      },
      /** @override **/
    },
    {
      key: "isUniversal",
      get: function get() {
        return false;
      },
    },
    {
      key: "isValid",
      get: function get() {
        return false;
      },
    },
  ]);

  return InvalidZone;
})(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system") return defaultZone;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (
    typeof input === "object" &&
    input.offset &&
    typeof input.offset === "number"
  ) {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
    return Date.now();
  },
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  throwOnInvalid;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */

var Settings = /*#__PURE__*/ (function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [
    {
      key: "now",
      get:
        /**
         * Get the callback for returning the current timestamp.
         * @type {function}
         */
        function get() {
          return now;
        },
      /**
       * Set the callback for returning the current timestamp.
       * The function should return a number, which will be interpreted as an Epoch millisecond count
       * @type {function}
       * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
       * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
       */
      set: function set(n) {
        now = n;
      },
      /**
       * Set the default time zone to create DateTimes in. Does not affect existing instances.
       * Use the value "system" to reset this value to the system's time zone.
       * @type {string}
       */
    },
    {
      key: "defaultZone",
      get:
        /**
         * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
         * The default value is the system's time zone (the one set on the machine that runs this code).
         * @type {Zone}
         */
        function get() {
          return normalizeZone(defaultZone, SystemZone.instance);
        },
      /**
       * Get the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      set: function set(zone) {
        defaultZone = zone;
      },
    },
    {
      key: "defaultLocale",
      get: function get() {
        return defaultLocale;
      },
      /**
       * Set the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      set: function set(locale) {
        defaultLocale = locale;
      },
      /**
       * Get the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
    },
    {
      key: "defaultNumberingSystem",
      get: function get() {
        return defaultNumberingSystem;
      },
      /**
       * Set the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      set: function set(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
      },
      /**
       * Get the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
    },
    {
      key: "defaultOutputCalendar",
      get: function get() {
        return defaultOutputCalendar;
      },
      /**
       * Set the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      set: function set(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
      },
      /**
       * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
    },
    {
      key: "throwOnInvalid",
      get: function get() {
        return throwOnInvalid;
      },
      /**
       * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      set: function set(t) {
        throwOnInvalid = t;
      },
    },
  ]);

  return Settings;
})();

var _excluded = ["base"],
  _excluded2 = ["padTo", "floor"];

var intlLFCache = {};

function getCachedLF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlLFCache[key];

  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }

  return dtf;
}

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts;
  _opts.base;
  var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options

  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
      numberingSystem = _options.numberingSystem,
      calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += "-ca-" + outputCalendar;
    }

    if (numberingSystem) {
      localeStr += "-nu-" + numberingSystem;
    }

    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem ===
        "latn"
    );
  }
}
/**
 * @private
 */

var PolyNumberFormatter = /*#__PURE__*/ (function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    opts.padTo;
    opts.floor;
    var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      var intlOpts = _extends(
        {
          useGrouping: false,
        },
        opts
      );

      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
})();
/**
 * @private
 */

var PolyDateFormatter = /*#__PURE__*/ (function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    var z;

    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      var gmtOffset = -1 * (dt.offset / 60);
      var offsetZ =
        gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;

      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt =
            dt.offset === 0
              ? dt
              : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    var intlOpts = _extends({}, this.opts);

    if (z) {
      intlOpts.timeZone = z;
    }

    this.dtf = getCachedDTF(intl, intlOpts);
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    return this.dtf.format(this.dt.toJSDate());
  };

  _proto2.formatToParts = function formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    return this.dtf.resolvedOptions();
  };

  return PolyDateFormatter;
})();
/**
 * @private
 */

var PolyRelFormatter = /*#__PURE__*/ (function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = _extends(
      {
        style: "long",
      },
      opts
    );

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(
        unit,
        count,
        this.opts.numeric,
        this.opts.style !== "long"
      );
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
})();
/**
 * @private
 */

var Locale = /*#__PURE__*/ (function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(
      opts.locale,
      opts.numberingSystem,
      opts.outputCalendar,
      opts.defaultToEN
    );
  };

  Locale.create = function create(
    locale,
    numberingSystem,
    outputCalendar,
    defaultToEN
  ) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale; // the system locale is useful for human readable strings but annoying for parsing/formatting known formats

    var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(
      localeR,
      numberingSystemR,
      outputCalendarR,
      specifiedLocale
    );
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      locale = _ref.locale,
      numberingSystem = _ref.numberingSystem,
      outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
      parsedLocale = _parseLocaleString[0],
      parsedNumberingSystem = _parseLocaleString[1],
      parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(
      this.locale,
      this.numberingSystem,
      this.outputCalendar
    );
    this.weekdaysCache = {
      format: {},
      standalone: {},
    };
    this.monthsCache = {
      format: {},
      standalone: {},
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode() {
    var isActuallyEn = this.isEnglish();
    var hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(
      _extends({}, alts, {
        defaultToEN: true,
      })
    );
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(
      _extends({}, alts, {
        defaultToEN: false,
      })
    );
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format
          ? {
              month: length,
              day: "numeric",
            }
          : {
              month: length,
            },
        formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format
          ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          : {
              weekday: length,
            },
        formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(
      this,
      undefined,
      defaultOK,
      function () {
        return meridiems;
      },
      function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this3.meridiemCache) {
          var intl = {
            hour: "numeric",
            hourCycle: "h12",
          };
          _this3.meridiemCache = [
            DateTime.utc(2016, 11, 13, 9),
            DateTime.utc(2016, 11, 13, 19),
          ].map(function (dt) {
            return _this3.extract(dt, intl, "dayperiod");
          });
        }

        return _this3.meridiemCache;
      }
    );
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length,
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [
          DateTime.utc(-40, 1, 1),
          DateTime.utc(2017, 1, 1),
        ].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(
      this.intl,
      opts.forceSimple || this.fastNumbers,
      opts
    );
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.listFormatter = function listFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return getCachedLF(this.intl, opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  };

  _proto4.equals = function equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  };

  _createClass(Locale, [
    {
      key: "fastNumbers",
      get: function get() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers(this);
        }

        return this.fastNumbersCached;
      },
    },
  ]);

  return Locale;
})();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (
    var _len = arguments.length, regexes = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (
    var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors
      .reduce(
        function (_ref, ex) {
          var mergedVals = _ref[0],
            mergedZone = _ref[1],
            cursor = _ref[2];

          var _ex = ex(m, cursor),
            val = _ex[0],
            zone = _ex[1],
            next = _ex[2];

          return [_extends({}, mergedVals, val), zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (
    var _len3 = arguments.length,
      patterns = new Array(_len3 > 1 ? _len3 - 1 : 0),
      _key3 = 1;
    _key3 < _len3;
    _key3++
  ) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
      regex = _patterns$_i[0],
      extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (
    var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0;
    _key4 < _len4;
    _key4++
  ) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing

var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone =
  "(?:" + offsetRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?";
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + isoExtendedZone);
var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one

var sqlTimeRegex = RegExp(
  isoTimeBaseRegex.source +
    " ?(?:" +
    offsetRegex.source +
    "|(" +
    ianaRegex.source +
    "))?"
);
var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3]),
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
    fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing

var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration =
  /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
    yearStr = match[1],
    monthStr = match[2],
    weekStr = match[3],
    dayStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";
  var negativeSeconds = secondStr && secondStr[0] === "-";

  var maybeNegate = function maybeNegate(num, force) {
    if (force === void 0) {
      force = false;
    }

    return num !== undefined && (force || (num && hasNegativePrefix))
      ? -num
      : num;
  };

  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds),
    },
  ];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that

var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(
  weekdayStr,
  yearStr,
  monthStr,
  dayStr,
  hourStr,
  minuteStr,
  secondStr
) {
  var result = {
    year:
      yearStr.length === 2
        ? untruncateYear(parseInteger(yearStr))
        : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr),
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? weekdaysLong.indexOf(weekdayStr) + 1
        : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322

var rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
    dayStr = match[2],
    monthStr = match[3],
    yearStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    obsOffset = match[8],
    milOffset = match[9],
    offHourStr = match[10],
    offMinuteStr = match[11],
    result = fromStrings(
      weekdayStr,
      yearStr,
      monthStr,
      dayStr,
      hourStr,
      minuteStr,
      secondStr
    );
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
} // http date

var rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
    dayStr = match[2],
    monthStr = match[3],
    yearStr = match[4],
    hourStr = match[5],
    minuteStr = match[6],
    secondStr = match[7],
    result = fromStrings(
      weekdayStr,
      yearStr,
      monthStr,
      dayStr,
      hourStr,
      minuteStr,
      secondStr
    );
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
    monthStr = match[2],
    dayStr = match[3],
    hourStr = match[4],
    minuteStr = match[5],
    secondStr = match[6],
    yearStr = match[7],
    result = fromStrings(
      weekdayStr,
      yearStr,
      monthStr,
      dayStr,
      hourStr,
      minuteStr,
      secondStr
    );
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(
  isoYmdRegex,
  isoTimeExtensionRegex
);
var isoWeekWithTimeExtensionRegex = combineRegexes(
  isoWeekRegex,
  isoTimeExtensionRegex
);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(
  isoOrdinalRegex,
  isoTimeExtensionRegex
);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(
  sqlYmdRegex,
  sqlTimeExtensionRegex
);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}

var INVALID$2 = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: {
      minutes: 60,
      seconds: 60 * 60,
      milliseconds: 60 * 60 * 1000,
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1000,
    },
    seconds: {
      milliseconds: 1000,
    },
  },
  casualMatrix = _extends(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1000,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1000,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1000,
      },
    },
    lowOrderMatrix
  ),
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = _extends(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 24 * 60,
        seconds: daysInYearAccurate * 24 * 60 * 60,
        milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
      },
      quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: (daysInYearAccurate * 24) / 4,
        minutes: (daysInYearAccurate * 24 * 60) / 4,
        seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
        milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
      },
      months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 24 * 60,
        seconds: daysInMonthAccurate * 24 * 60 * 60,
        milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
      },
    },
    lowOrderMatrix
  ); // units ordered by size

var orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];
var reverseUnits = orderedUnits$1.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone$1(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters

function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1
        ? antiTrunc(raw)
        : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters

function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration#fromMillis}, {@link Duration#fromObject}, or {@link Duration#fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration.months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */

var Duration = /*#__PURE__*/ (function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */

  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(
      {
        milliseconds: count,
      },
      opts
    );
  };
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */

  Duration.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(
        "Duration.fromObject: argument expected to be an object, got " +
          (obj === null ? "null" : typeof obj)
      );
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
    });
  };
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */

  Duration.fromDurationLike = function fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(
        "Unknown duration argument " +
          durationLike +
          " of type " +
          typeof durationLike
      );
    }
  };
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
      parsed = _parseISODuration[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid(
        "unparsable",
        'the input "' + text + "\" can't be parsed as ISO 8601"
      );
    }
  };
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
      parsed = _parseISOTimeOnly[0];

    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid(
        "unparsable",
        'the input "' + text + "\" can't be parsed as ISO 8601"
      );
    }
  };
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError(
        "need to specify a reason the Duration is invalid"
      );
    }

    var invalid =
      reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid,
      });
    }
  };
  /**
   * @private
   */

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  };
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */

  Duration.isDuration = function isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  };
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = _extends({}, opts, {
      floor: opts.round !== false && opts.floor !== false,
    });

    return this.isValid
      ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID$2;
  };
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */

  _proto.toHuman = function toHuman(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    var l = orderedUnits$1
      .map(function (unit) {
        var val = _this.values[unit];

        if (isUndefined(val)) {
          return null;
        }

        return _this.loc
          .numberFormatter(
            _extends(
              {
                style: "unit",
                unitDisplay: "long",
              },
              opts,
              {
                unit: unit.slice(0, -1),
              }
            )
          )
          .format(val);
      })
      .filter(function (n) {
        return n;
      });
    return this.loc
      .listFormatter(
        _extends(
          {
            type: "conjunction",
            style: opts.listStyle || "narrow",
          },
          opts
        )
      )
      .format(l);
  };
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */

  _proto.toObject = function toObject() {
    if (!this.isValid) return {};
    return _extends({}, this.values);
  };
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (
      this.hours !== 0 ||
      this.minutes !== 0 ||
      this.seconds !== 0 ||
      this.milliseconds !== 0
    )
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  };
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = _extends(
      {
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended",
      },
      opts
    );
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (
      !opts.suppressSeconds ||
      value.seconds !== 0 ||
      value.milliseconds !== 0
    ) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  };
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */

  _proto.toJSON = function toJSON() {
    return this.toISO();
  };
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */

  _proto.toString = function toString() {
    return this.toISO();
  };
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  };
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  };
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration),
      result = {};

    for (
      var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step;
      !(_step = _iterator()).done;

    ) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(
      this,
      {
        values: result,
      },
      true
    );
  };
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  };
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (
      var _i = 0, _Object$keys = Object.keys(this.values);
      _i < _Object$keys.length;
      _i++
    ) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone$1(
      this,
      {
        values: result,
      },
      true
    );
  };
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  };
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */

  _proto.set = function set(values) {
    if (!this.isValid) return this;

    var mixed = _extends(
      {},
      this.values,
      normalizeObject(values, Duration.normalizeUnit)
    );

    return clone$1(this, {
      values: mixed,
    });
  };
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      locale = _ref.locale,
      numberingSystem = _ref.numberingSystem,
      conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem,
      }),
      opts = {
        loc: loc,
      };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone$1(this, opts);
  };
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  };
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(
      this,
      {
        values: vals,
      },
      true
    );
  };
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */

  _proto.shiftTo = function shiftTo() {
    for (
      var _len = arguments.length, units = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
      accumulated = {},
      vals = this.toObject();
    var lastUnit;

    for (
      var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2;
      !(_step2 = _iterator2()).done;

    ) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit

        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000; // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty

    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit
            ? accumulated[key]
            : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(
      this,
      {
        values: built,
      },
      true
    ).normalize();
  };
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (
      var _i2 = 0, _Object$keys2 = Object.keys(this.values);
      _i2 < _Object$keys2.length;
      _i2++
    ) {
      var k = _Object$keys2[_i2];
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }

    return clone$1(
      this,
      {
        values: negated,
      },
      true
    );
  };
  /**
   * Get the years.
   * @type {number}
   */

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (
      var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3;
      !(_step3 = _iterator3()).done;

    ) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [
    {
      key: "locale",
      get: function get() {
        return this.isValid ? this.loc.locale : null;
      },
      /**
       * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
       *
       * @type {string}
       */
    },
    {
      key: "numberingSystem",
      get: function get() {
        return this.isValid ? this.loc.numberingSystem : null;
      },
    },
    {
      key: "years",
      get: function get() {
        return this.isValid ? this.values.years || 0 : NaN;
      },
      /**
       * Get the quarters.
       * @type {number}
       */
    },
    {
      key: "quarters",
      get: function get() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      },
      /**
       * Get the months.
       * @type {number}
       */
    },
    {
      key: "months",
      get: function get() {
        return this.isValid ? this.values.months || 0 : NaN;
      },
      /**
       * Get the weeks
       * @type {number}
       */
    },
    {
      key: "weeks",
      get: function get() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      },
      /**
       * Get the days.
       * @type {number}
       */
    },
    {
      key: "days",
      get: function get() {
        return this.isValid ? this.values.days || 0 : NaN;
      },
      /**
       * Get the hours.
       * @type {number}
       */
    },
    {
      key: "hours",
      get: function get() {
        return this.isValid ? this.values.hours || 0 : NaN;
      },
      /**
       * Get the minutes.
       * @type {number}
       */
    },
    {
      key: "minutes",
      get: function get() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      },
      /**
       * Get the seconds.
       * @return {number}
       */
    },
    {
      key: "seconds",
      get: function get() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      },
      /**
       * Get the milliseconds.
       * @return {number}
       */
    },
    {
      key: "milliseconds",
      get: function get() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      },
      /**
       * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
       * on invalid DateTimes or Intervals.
       * @return {boolean}
       */
    },
    {
      key: "isValid",
      get: function get() {
        return this.invalid === null;
      },
      /**
       * Returns an error code if this Duration became invalid, or null if the Duration is valid
       * @return {string}
       */
    },
    {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      },
      /**
       * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
       * @type {string}
       */
    },
    {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      },
    },
  ]);

  return Duration;
})();

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      "The end of an interval must be after its start, but you had start=" +
        start.toISO() +
        " and end=" +
        end.toISO()
    );
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval#fromDateTimes}, {@link Interval#after}, {@link Interval#before}, or {@link Interval#fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */

var Interval = /*#__PURE__*/ (function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */

  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError(
        "need to specify a reason the Interval is invalid"
      );
    }

    var invalid =
      reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid,
      });
    }
  };
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
      builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  };
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */

  Interval.after = function after(start, duration) {
    var dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  };
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */

  Interval.before = function before(end, duration) {
    var dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  };
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
      s = _split[0],
      e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid(
      "unparsable",
      'the input "' + text + "\" can't be parsed as ISO 8601"
    );
  };
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */

  Interval.isInterval = function isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  };
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  };
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  };
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */

  _proto.hasSame = function hasSame(unit) {
    return this.isValid
      ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit)
      : false;
  };
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  };
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  };
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  };
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  };
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      start = _ref.start,
      end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  };
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (
      var _len = arguments.length, dateTimes = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes
        .map(friendlyDateTime)
        .filter(function (d) {
          return _this.contains(d);
        })
        .sort(),
      results = [];
    var s = this.s,
      i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  };
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */

  _proto.splitBy = function splitBy(duration) {
    var dur = Duration.fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
      idx = 1,
      next;
    var results = [];

    while (s < this.e) {
      var added = this.start.plus(
        dur.mapUnits(function (x) {
          return x * idx;
        })
      );
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  };
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  };
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  };
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  };
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  };
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  };
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  };
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  };
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  };
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals
        .sort(function (a, b) {
          return a.s - b.s;
        })
        .reduce(
          function (_ref2, item) {
            var sofar = _ref2[0],
              current = _ref2[1];

            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          },
          [[], null]
        ),
      found = _intervals$sort$reduc[0],
      final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  };
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
      currentCount = 0;

    var results = [],
      ends = intervals.map(function (i) {
        return [
          {
            time: i.s,
            type: "s",
          },
          {
            time: i.e,
            type: "e",
          },
        ];
      }),
      flattened = (_Array$prototype = Array.prototype).concat.apply(
        _Array$prototype,
        ends
      ),
      arr = flattened.sort(function (a, b) {
        return a.time - b.time;
      });

    for (
      var _iterator = _createForOfIteratorHelperLoose(arr), _step;
      !(_step = _iterator()).done;

    ) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  };
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */

  _proto.difference = function difference() {
    var _this2 = this;

    for (
      var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals))
      .map(function (i) {
        return _this2.intersection(i);
      })
      .filter(function (i) {
        return i && !i.isEmpty();
      });
  };
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  };
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  };
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  };
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  };
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
      _ref3$separator = _ref3.separator,
      separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return (
      "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat)
    );
  };
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  };
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [
    {
      key: "start",
      get: function get() {
        return this.isValid ? this.s : null;
      },
      /**
       * Returns the end of the Interval
       * @type {DateTime}
       */
    },
    {
      key: "end",
      get: function get() {
        return this.isValid ? this.e : null;
      },
      /**
       * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
       * @type {boolean}
       */
    },
    {
      key: "isValid",
      get: function get() {
        return this.invalidReason === null;
      },
      /**
       * Returns an error code if this Interval is invalid, or null if the Interval is valid
       * @type {string}
       */
    },
    {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      },
      /**
       * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
       * @type {string}
       */
    },
    {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      },
    },
  ]);

  return Interval;
})();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/ (function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12,
    });
    return (
      !zone.isUniversal &&
      proto.offset !==
        proto.set({
          month: 6,
        }).offset
    );
  };
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  };
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  };
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? null : _ref$locale,
      _ref$numberingSystem = _ref.numberingSystem,
      numberingSystem =
        _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
      _ref$locObj = _ref.locObj,
      locObj = _ref$locObj === void 0 ? null : _ref$locObj,
      _ref$outputCalendar = _ref.outputCalendar,
      outputCalendar =
        _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return (
      locObj || Locale.create(locale, numberingSystem, outputCalendar)
    ).months(length);
  };
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$locale = _ref2.locale,
      locale = _ref2$locale === void 0 ? null : _ref2$locale,
      _ref2$numberingSystem = _ref2.numberingSystem,
      numberingSystem =
        _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
      _ref2$locObj = _ref2.locObj,
      locObj = _ref2$locObj === void 0 ? null : _ref2$locObj,
      _ref2$outputCalendar = _ref2.outputCalendar,
      outputCalendar =
        _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return (
      locObj || Locale.create(locale, numberingSystem, outputCalendar)
    ).months(length, true);
  };
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$locale = _ref3.locale,
      locale = _ref3$locale === void 0 ? null : _ref3$locale,
      _ref3$numberingSystem = _ref3.numberingSystem,
      numberingSystem =
        _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem,
      _ref3$locObj = _ref3.locObj,
      locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(
      length
    );
  };
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
      _ref4$locale = _ref4.locale,
      locale = _ref4$locale === void 0 ? null : _ref4$locale,
      _ref4$numberingSystem = _ref4.numberingSystem,
      numberingSystem =
        _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem,
      _ref4$locObj = _ref4.locObj,
      locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;

    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(
      length,
      true
    );
  };
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
      _ref5$locale = _ref5.locale,
      locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  };
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
      _ref6$locale = _ref6.locale,
      locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  };
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */

  Info.features = function features() {
    return {
      relative: hasRelative(),
    };
  };

  return Info;
})();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
      return dt
        .toUTC(0, {
          keepLocalTime: true,
        })
        .startOf("day")
        .valueOf();
    },
    ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [
    [
      "years",
      function (a, b) {
        return b.year - a.year;
      },
    ],
    [
      "quarters",
      function (a, b) {
        return b.quarter - a.quarter;
      },
    ],
    [
      "months",
      function (a, b) {
        return b.month - a.month + (b.year - a.year) * 12;
      },
    ],
    [
      "weeks",
      function (a, b) {
        var days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
      unit = _differs$_i[0],
      differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus(
        ((_cursor$plus = {}), (_cursor$plus[unit] = delta), _cursor$plus)
      );

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus(
          ((_cursor$plus2 = {}),
          (_cursor$plus2[unit] = delta - 1),
          _cursor$plus2)
        );
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff(earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
    cursor = _highOrderDiffs[0],
    results = _highOrderDiffs[1],
    highWater = _highOrderDiffs[2],
    lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus(
        ((_cursor$plus3 = {}), (_cursor$plus3[lowestOrder] = 1), _cursor$plus3)
      );
    }

    if (highWater !== cursor) {
      results[lowestOrder] =
        (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(
      remainingMillis,
      opts
    )).shiftTo
      .apply(_Duration$fromMillis, lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
            min = _numberingSystemsUTF[0],
            max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    },
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "[ " + NBSP + "]";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return (
          strings.findIndex(function (i) {
            return stripInsensitivities(s) === stripInsensitivities(i);
          }) + startIndex
        );
      },
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
        m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups,
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    },
  };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
    two = digitRegex(loc, "{2}"),
    three = digitRegex(loc, "{3}"),
    four = digitRegex(loc, "{4}"),
    six = digitRegex(loc, "{6}"),
    oneOrTwo = digitRegex(loc, "{1,2}"),
    oneToThree = digitRegex(loc, "{1,3}"),
    oneToSix = digitRegex(loc, "{1,6}"),
    oneToNine = digitRegex(loc, "{1,9}"),
    twoToFour = digitRegex(loc, "{2,4}"),
    fourToSix = digitRegex(loc, "{4,6}"),
    literal = function literal(t) {
      return {
        regex: RegExp(escapeToken(t.val)),
        deser: function deser(_ref5) {
          var s = _ref5[0];
          return s;
        },
        literal: true,
      };
    },
    unitate = function unitate(t) {
      if (token.literal) {
        return literal(t);
      }

      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);

        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years

        case "y":
          return intUnit(oneToSix);

        case "yy":
          return intUnit(twoToFour, untruncateYear);

        case "yyyy":
          return intUnit(four);

        case "yyyyy":
          return intUnit(fourToSix);

        case "yyyyyy":
          return intUnit(six);
        // months

        case "M":
          return intUnit(oneOrTwo);

        case "MM":
          return intUnit(two);

        case "MMM":
          return oneOf(loc.months("short", true, false), 1);

        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);

        case "L":
          return intUnit(oneOrTwo);

        case "LL":
          return intUnit(two);

        case "LLL":
          return oneOf(loc.months("short", false, false), 1);

        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates

        case "d":
          return intUnit(oneOrTwo);

        case "dd":
          return intUnit(two);
        // ordinals

        case "o":
          return intUnit(oneToThree);

        case "ooo":
          return intUnit(three);
        // time

        case "HH":
          return intUnit(two);

        case "H":
          return intUnit(oneOrTwo);

        case "hh":
          return intUnit(two);

        case "h":
          return intUnit(oneOrTwo);

        case "mm":
          return intUnit(two);

        case "m":
          return intUnit(oneOrTwo);

        case "q":
          return intUnit(oneOrTwo);

        case "qq":
          return intUnit(two);

        case "s":
          return intUnit(oneOrTwo);

        case "ss":
          return intUnit(two);

        case "S":
          return intUnit(oneToThree);

        case "SSS":
          return intUnit(three);

        case "u":
          return simple(oneToNine);

        case "uu":
          return simple(oneOrTwo);

        case "uuu":
          return intUnit(one);
        // meridiem

        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)

        case "kkkk":
          return intUnit(four);

        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)

        case "W":
          return intUnit(oneOrTwo);

        case "WW":
          return intUnit(two);
        // weekdays

        case "E":
        case "c":
          return intUnit(one);

        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);

        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);

        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);

        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone

        case "Z":
        case "ZZ":
          return offset(
            new RegExp(
              "([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"
            ),
            2
          );

        case "ZZZ":
          return offset(
            new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"),
            2
          );
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are

        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);

        default:
          return literal(t);
      }
    };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
    value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value,
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units
    .map(function (u) {
      return u.regex;
    })
    .reduce(function (f, r) {
      return f + "(" + r.source + ")";
    }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(
            matches.slice(matchIndex, matchIndex + groups)
          );
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone = null;
  var specificOffset;

  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }

  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }

    specificOffset = matches.Z;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone, specificOffset];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(
    _Array$prototype,
    tokens.map(function (t) {
      return maybeExpandMacroToken(t, locale);
    })
  );
}
/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
    units = tokens.map(function (t) {
      return unitForToken(t, locale);
    }),
    disqualifyingUnit = units.find(function (t) {
      return t.invalidReason;
    });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason,
    };
  } else {
    var _buildRegex = buildRegex(units),
      regexString = _buildRegex[0],
      handlers = _buildRegex[1],
      regex = RegExp(regexString, "i"),
      _match = match(input, regex, handlers),
      rawMatches = _match[0],
      matches = _match[1],
      _ref6 = matches ? dateTimeFromMatches(matches) : [null, null, undefined],
      result = _ref6[0],
      zone = _ref6[1],
      specificOffset = _ref6[2];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone,
      specificOffset: specificOffset,
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
    result = _explainFromTokens.result,
    zone = _explainFromTokens.zone,
    specificOffset = _explainFromTokens.specificOffset,
    invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, specificOffset, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid(
    "unit out of range",
    "you specified " +
      value +
      " (of type " +
      typeof value +
      ") as a " +
      unit +
      ", which is invalid"
  );
}

function dayOfWeek(year, month, day) {
  var d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  var js = d.getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex(function (i) {
      return i < ordinal;
    }),
    day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day,
  };
}
/**
 * @private
 */

function gregorianToWeek(gregObj) {
  var year = gregObj.year,
    month = gregObj.month,
    day = gregObj.day,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return _extends(
    {
      weekYear: weekYear,
      weekNumber: weekNumber,
      weekday: weekday,
    },
    timeObject(gregObj)
  );
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
    weekNumber = weekData.weekNumber,
    weekday = weekData.weekday,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal.month,
    day = _uncomputeOrdinal.day;

  return _extends(
    {
      year: year,
      month: month,
      day: day,
    },
    timeObject(weekData)
  );
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
    month = gregData.month,
    day = gregData.day;
  var ordinal = computeOrdinal(year, month, day);
  return _extends(
    {
      year: year,
      ordinal: ordinal,
    },
    timeObject(gregData)
  );
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
    ordinal = ordinalData.ordinal;

  var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
    month = _uncomputeOrdinal2.month,
    day = _uncomputeOrdinal2.day;

  return _extends(
    {
      year: year,
      month: month,
      day: day,
    },
    timeObject(ordinalData)
  );
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
    validWeek = integerBetween(
      obj.weekNumber,
      1,
      weeksInWeekYear(obj.weekYear)
    ),
    validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
    validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
    validMonth = integerBetween(obj.month, 1, 12),
    validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
    minute = obj.minute,
    second = obj.second,
    millisecond = obj.millisecond;
  var validHour =
      integerBetween(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = integerBetween(minute, 0, 59),
    validSecond = integerBetween(second, 0, 59),
    validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid(
    "unsupported zone",
    'the zone "' + zone.name + '" is not supported'
  );
} // we cache week data on the DT object and this intermediates the cache

function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties

function clone(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime(
    _extends({}, current, alts, {
      old: current,
    })
  );
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)

function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset

  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time

  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset

function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
} // convert a calendar object to a epoch timestamp

function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs

function adjustTime(inst, dur) {
  var oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month =
      inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = _extends({}, inst.c, {
      year: year,
      month: month,
      day:
        Math.min(inst.c.day, daysInMonth(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    }),
    millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
    ts = _fixOffset[0],
    o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o,
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options

function parseDataToDateTime(
  parsed,
  parsedZone,
  opts,
  format,
  text,
  specificOffset
) {
  var setZone = opts.setZone,
    zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(
        parsed,
        _extends({}, opts, {
          zone: interpretationZone,
          specificOffset: specificOffset,
        })
      );
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new Invalid(
        "unparsable",
        'the input "' + text + "\" can't be parsed as " + format
      )
    );
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details

function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid
    ? Formatter.create(Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function _toISODate(o, extended) {
  var longFormat = o.c.year > 9999 || o.c.year < 0;
  var c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }

  return c;
}

function _toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  var c = padStart(o.c.hour);

  if (extended) {
    c += ":";
    c += padStart(o.c.minute);

    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }

  return c;
} // defaults for unspecified units in the supported calendars

var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  }; // Units in the supported calendars, sorted by bigness

var orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond",
  ]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.

function quickDT(obj, opts) {
  var zone = normalizeZone(opts.zone, Settings.defaultZone),
    loc = Locale.fromObject(opts),
    tsNow = Settings.now();
  var ts, o; // assume we have the higher-order units

  if (!isUndefined(obj.year)) {
    for (
      var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step;
      !(_step = _iterator()).done;

    ) {
      var u = _step.value;

      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    var offsetProvis = zone.offset(tsNow);

    var _objToTS = objToTS(obj, offsetProvis, zone);

    ts = _objToTS[0];
    o = _objToTS[1];
  } else {
    ts = tsNow;
  }

  return new DateTime({
    ts: ts,
    zone: zone,
    loc: loc,
    o: o,
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
    format = function format(c, unit) {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      var formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = function differ(unit) {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (
    var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2;
    !(_step2 = _iterator2()).done;

  ) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  var opts = {},
    args;

  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }

  return [opts, args];
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime#local}, {@link DateTime#utc}, and (most flexibly) {@link DateTime#fromObject}. To create one from a standard string format, use {@link DateTime#fromISO}, {@link DateTime#fromHTTP}, and {@link DateTime#fromRFC2822}. To create one from a custom string format, use {@link DateTime#fromFormat}. To create one from a native JS date, use {@link DateTime#fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */

var DateTime = /*#__PURE__*/ (function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
      o = null;

    if (!invalid) {
      var unchanged =
        config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref = [config.old.c, config.old.o];
        c = _ref[0];
        o = _ref[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */

    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */

  DateTime.now = function now() {
    return new DateTime({});
  };
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */

  DateTime.local = function local() {
    var _lastOpts = lastOpts(arguments),
      opts = _lastOpts[0],
      args = _lastOpts[1],
      year = args[0],
      month = args[1],
      day = args[2],
      hour = args[3],
      minute = args[4],
      second = args[5],
      millisecond = args[6];

    return quickDT(
      {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
      },
      opts
    );
  };
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */

  DateTime.utc = function utc() {
    var _lastOpts2 = lastOpts(arguments),
      opts = _lastOpts2[0],
      args = _lastOpts2[1],
      year = args[0],
      month = args[1],
      day = args[2],
      hour = args[3],
      minute = args[4],
      second = args[5],
      millisecond = args[6];

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT(
      {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
      },
      opts
    );
  };
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options),
    });
  };
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        "fromMillis requires a numerical input, but received a " +
          typeof milliseconds +
          " with value " +
          milliseconds
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  };
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  };
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */

  DateTime.fromObject = function fromObject(obj, opts) {
    if (opts === void 0) {
      opts = {};
    }

    obj = obj || {};
    var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
      offsetProvis = !isUndefined(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = normalizeObject(obj, normalizeUnit),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD =
        !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = Locale.fromObject(opts); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError(
        "Can't mix ordinal dates with month/day"
      );
    }

    var useWeekData =
      definiteWeekDef || (normalized.weekday && !containsGregor); // configure ourselves to deal with gregorian dates or week stuff

    var units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff

    var foundFirst = false;

    for (
      var _iterator3 = _createForOfIteratorHelperLoose(units), _step3;
      !(_step3 = _iterator3()).done;

    ) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range

    var higherOrderInvalid = useWeekData
        ? hasInvalidWeekData(normalized)
        : containsOrdinal
        ? hasInvalidOrdinalData(normalized)
        : hasInvalidGregorianData(normalized),
      invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time

    var gregorian = useWeekData
        ? weekToGregorian(normalized)
        : containsOrdinal
        ? ordinalToGregorian(normalized)
        : normalized,
      _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
      tsFinal = _objToTS2[0],
      offsetFinal = _objToTS2[1],
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc,
      }); // gregorian data + weekday serves only to validate

    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        "you can't specify both a weekday of " +
          normalized.weekday +
          " and a date of " +
          inst.toISO()
      );
    }

    return inst;
  };
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
      vals = _parseISODate[0],
      parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  };
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
      vals = _parseRFC2822Date[0],
      parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  };
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
      vals = _parseHTTPDate[0],
      parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  };
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError(
        "fromFormat requires an input string and a format"
      );
    }

    var _opts = opts,
      _opts$locale = _opts.locale,
      locale = _opts$locale === void 0 ? null : _opts$locale,
      _opts$numberingSystem = _opts.numberingSystem,
      numberingSystem =
        _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
      localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true,
      }),
      _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
      vals = _parseFromTokens[0],
      parsedZone = _parseFromTokens[1],
      specificOffset = _parseFromTokens[2],
      invalid = _parseFromTokens[3];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(
        vals,
        parsedZone,
        opts,
        "format " + fmt,
        text,
        specificOffset
      );
    }
  };
  /**
   * @deprecated use fromFormat instead
   */

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  };
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
      vals = _parseSQL[0],
      parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  };
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError(
        "need to specify a reason the DateTime is invalid"
      );
    }

    var invalid =
      reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid,
      });
    }
  };
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */

  DateTime.isDateTime = function isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }; // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  };
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(
        this.loc.clone(opts),
        opts
      ).resolvedOptions(this),
      locale = _Formatter$create$res.locale,
      numberingSystem = _Formatter$create$res.numberingSystem,
      calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar,
    };
  }; // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  };
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  };
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */

  _proto.setZone = function setZone(zone, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$keepLocalTime = _ref2.keepLocalTime,
      keepLocalTime =
        _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime,
      _ref2$keepCalendarTim = _ref2.keepCalendarTime,
      keepCalendarTime =
        _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone(this, {
        ts: newTS,
        zone: zone,
      });
    }
  };
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
      locale = _ref3.locale,
      numberingSystem = _ref3.numberingSystem,
      outputCalendar = _ref3.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar,
    });
    return clone(this, {
      loc: loc,
    });
  };
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale,
    });
  };
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit),
      settingWeekStuff =
        !isUndefined(normalized.weekYear) ||
        !isUndefined(normalized.weekNumber) ||
        !isUndefined(normalized.weekday),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD =
        !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError(
        "Can't mix ordinal dates with month/day"
      );
    }

    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(
        _extends({}, gregorianToWeek(this.c), normalized)
      );
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(
        _extends({}, gregorianToOrdinal(this.c), normalized)
      );
    } else {
      mixed = _extends({}, this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
      ts = _objToTS4[0],
      o = _objToTS4[1];

    return clone(this, {
      ts: ts,
      o: o,
    });
  };
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  };
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  };
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
      normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  };
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid
      ? this.plus(((_this$plus = {}), (_this$plus[unit] = 1), _this$plus))
          .startOf(unit)
          .minus(1)
      : this;
  }; // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid
      ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(
          this,
          fmt
        )
      : INVALID;
  };
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */

  _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
    if (formatOpts === void 0) {
      formatOpts = DATE_SHORT;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.isValid
      ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  };
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid
      ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */

  _proto.toISO = function toISO(_temp3) {
    var _ref4 = _temp3 === void 0 ? {} : _temp3,
      _ref4$format = _ref4.format,
      format = _ref4$format === void 0 ? "extended" : _ref4$format,
      _ref4$suppressSeconds = _ref4.suppressSeconds,
      suppressSeconds =
        _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds,
      _ref4$suppressMillise = _ref4.suppressMilliseconds,
      suppressMilliseconds =
        _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise,
      _ref4$includeOffset = _ref4.includeOffset,
      includeOffset =
        _ref4$includeOffset === void 0 ? true : _ref4$includeOffset,
      _ref4$extendedZone = _ref4.extendedZone,
      extendedZone = _ref4$extendedZone === void 0 ? false : _ref4$extendedZone;

    if (!this.isValid) {
      return null;
    }

    var ext = format === "extended";

    var c = _toISODate(this, ext);

    c += "T";
    c += _toISOTime(
      this,
      ext,
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      extendedZone
    );
    return c;
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */

  _proto.toISODate = function toISODate(_temp4) {
    var _ref5 = _temp4 === void 0 ? {} : _temp4,
      _ref5$format = _ref5.format,
      format = _ref5$format === void 0 ? "extended" : _ref5$format;

    if (!this.isValid) {
      return null;
    }

    return _toISODate(this, format === "extended");
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */

  _proto.toISOTime = function toISOTime(_temp5) {
    var _ref6 = _temp5 === void 0 ? {} : _temp5,
      _ref6$suppressMillise = _ref6.suppressMilliseconds,
      suppressMilliseconds =
        _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
      _ref6$suppressSeconds = _ref6.suppressSeconds,
      suppressSeconds =
        _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
      _ref6$includeOffset = _ref6.includeOffset,
      includeOffset =
        _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
      _ref6$includePrefix = _ref6.includePrefix,
      includePrefix =
        _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
      _ref6$extendedZone = _ref6.extendedZone,
      extendedZone = _ref6$extendedZone === void 0 ? false : _ref6$extendedZone,
      _ref6$format = _ref6.format,
      format = _ref6$format === void 0 ? "extended" : _ref6$format;

    if (!this.isValid) {
      return null;
    }

    var c = includePrefix ? "T" : "";
    return (
      c +
      _toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  };
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */

  _proto.toSQLDate = function toSQLDate() {
    if (!this.isValid) {
      return null;
    }

    return _toISODate(this, true);
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */

  _proto.toSQLTime = function toSQLTime(_temp6) {
    var _ref7 = _temp6 === void 0 ? {} : _temp6,
      _ref7$includeOffset = _ref7.includeOffset,
      includeOffset =
        _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
      _ref7$includeZone = _ref7.includeZone,
      includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone,
      _ref7$includeOffsetSp = _ref7.includeOffsetSpace,
      includeOffsetSpace =
        _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;

    var fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }

      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  };
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID;
  };
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  };
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  };
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  };
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */

  _proto.toUnixInteger = function toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  };
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */

  _proto.toJSON = function toJSON() {
    return this.toISO();
  };
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  };
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};

    var base = _extends({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  };
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }; // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }

    var durOpts = _extends(
      {
        locale: this.locale,
        numberingSystem: this.numberingSystem,
      },
      opts
    );

    var units = maybeArray(unit).map(Duration.normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  };
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  };
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  };
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var adjustedToZone = this.setZone(otherDateTime.zone, {
      keepLocalTime: true,
    });
    return (
      adjustedToZone.startOf(unit) <= inputMs &&
      inputMs <= adjustedToZone.endOf(unit)
    );
  };
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */

  _proto.equals = function equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  };
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base =
        options.base ||
        DateTime.fromObject(
          {},
          {
            zone: this.zone,
          }
        ),
      padding = options.padding
        ? this < base
          ? -options.padding
          : options.padding
        : 0;
    var units = ["years", "months", "days", "hours", "minutes", "seconds"];
    var unit = options.unit;

    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }

    return diffRelative(
      base,
      this.plus(padding),
      _extends({}, options, {
        numeric: "always",
        units: units,
        unit: unit,
      })
    );
  };
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(
      options.base ||
        DateTime.fromObject(
          {},
          {
            zone: this.zone,
          }
        ),
      this,
      _extends({}, options, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true,
      })
    );
  };
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */

  DateTime.min = function min() {
    for (
      var _len = arguments.length, dateTimes = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(
      dateTimes,
      function (i) {
        return i.valueOf();
      },
      Math.min
    );
  };
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */

  DateTime.max = function max() {
    for (
      var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(
      dateTimes,
      function (i) {
        return i.valueOf();
      },
      Math.max
    );
  }; // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
      _options$locale = _options.locale,
      locale = _options$locale === void 0 ? null : _options$locale,
      _options$numberingSys = _options.numberingSystem,
      numberingSystem =
        _options$numberingSys === void 0 ? null : _options$numberingSys,
      localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true,
      });
    return explainFromTokens(localeToUse, text, fmt);
  };
  /**
   * @deprecated use fromFormatExplain instead
   */

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  }; // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */

  _createClass(
    DateTime,
    [
      {
        key: "isValid",
        get: function get() {
          return this.invalid === null;
        },
        /**
         * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
         * @type {string}
         */
      },
      {
        key: "invalidReason",
        get: function get() {
          return this.invalid ? this.invalid.reason : null;
        },
        /**
         * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
         * @type {string}
         */
      },
      {
        key: "invalidExplanation",
        get: function get() {
          return this.invalid ? this.invalid.explanation : null;
        },
        /**
         * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
         *
         * @type {string}
         */
      },
      {
        key: "locale",
        get: function get() {
          return this.isValid ? this.loc.locale : null;
        },
        /**
         * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
         *
         * @type {string}
         */
      },
      {
        key: "numberingSystem",
        get: function get() {
          return this.isValid ? this.loc.numberingSystem : null;
        },
        /**
         * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
         *
         * @type {string}
         */
      },
      {
        key: "outputCalendar",
        get: function get() {
          return this.isValid ? this.loc.outputCalendar : null;
        },
        /**
         * Get the time zone associated with this DateTime.
         * @type {Zone}
         */
      },
      {
        key: "zone",
        get: function get() {
          return this._zone;
        },
        /**
         * Get the name of the time zone.
         * @type {string}
         */
      },
      {
        key: "zoneName",
        get: function get() {
          return this.isValid ? this.zone.name : null;
        },
        /**
         * Get the year
         * @example DateTime.local(2017, 5, 25).year //=> 2017
         * @type {number}
         */
      },
      {
        key: "year",
        get: function get() {
          return this.isValid ? this.c.year : NaN;
        },
        /**
         * Get the quarter
         * @example DateTime.local(2017, 5, 25).quarter //=> 2
         * @type {number}
         */
      },
      {
        key: "quarter",
        get: function get() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        },
        /**
         * Get the month (1-12).
         * @example DateTime.local(2017, 5, 25).month //=> 5
         * @type {number}
         */
      },
      {
        key: "month",
        get: function get() {
          return this.isValid ? this.c.month : NaN;
        },
        /**
         * Get the day of the month (1-30ish).
         * @example DateTime.local(2017, 5, 25).day //=> 25
         * @type {number}
         */
      },
      {
        key: "day",
        get: function get() {
          return this.isValid ? this.c.day : NaN;
        },
        /**
         * Get the hour of the day (0-23).
         * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
         * @type {number}
         */
      },
      {
        key: "hour",
        get: function get() {
          return this.isValid ? this.c.hour : NaN;
        },
        /**
         * Get the minute of the hour (0-59).
         * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
         * @type {number}
         */
      },
      {
        key: "minute",
        get: function get() {
          return this.isValid ? this.c.minute : NaN;
        },
        /**
         * Get the second of the minute (0-59).
         * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
         * @type {number}
         */
      },
      {
        key: "second",
        get: function get() {
          return this.isValid ? this.c.second : NaN;
        },
        /**
         * Get the millisecond of the second (0-999).
         * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
         * @type {number}
         */
      },
      {
        key: "millisecond",
        get: function get() {
          return this.isValid ? this.c.millisecond : NaN;
        },
        /**
         * Get the week year
         * @see https://en.wikipedia.org/wiki/ISO_week_date
         * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
         * @type {number}
         */
      },
      {
        key: "weekYear",
        get: function get() {
          return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
        },
        /**
         * Get the week number of the week year (1-52ish).
         * @see https://en.wikipedia.org/wiki/ISO_week_date
         * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
         * @type {number}
         */
      },
      {
        key: "weekNumber",
        get: function get() {
          return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
        },
        /**
         * Get the day of the week.
         * 1 is Monday and 7 is Sunday
         * @see https://en.wikipedia.org/wiki/ISO_week_date
         * @example DateTime.local(2014, 11, 31).weekday //=> 4
         * @type {number}
         */
      },
      {
        key: "weekday",
        get: function get() {
          return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
        },
        /**
         * Get the ordinal (meaning the day of the year)
         * @example DateTime.local(2017, 5, 25).ordinal //=> 145
         * @type {number|DateTime}
         */
      },
      {
        key: "ordinal",
        get: function get() {
          return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
        },
        /**
         * Get the human readable short month name, such as 'Oct'.
         * Defaults to the system's locale if no locale has been specified
         * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
         * @type {string}
         */
      },
      {
        key: "monthShort",
        get: function get() {
          return this.isValid
            ? Info.months("short", {
                locObj: this.loc,
              })[this.month - 1]
            : null;
        },
        /**
         * Get the human readable long month name, such as 'October'.
         * Defaults to the system's locale if no locale has been specified
         * @example DateTime.local(2017, 10, 30).monthLong //=> October
         * @type {string}
         */
      },
      {
        key: "monthLong",
        get: function get() {
          return this.isValid
            ? Info.months("long", {
                locObj: this.loc,
              })[this.month - 1]
            : null;
        },
        /**
         * Get the human readable short weekday, such as 'Mon'.
         * Defaults to the system's locale if no locale has been specified
         * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
         * @type {string}
         */
      },
      {
        key: "weekdayShort",
        get: function get() {
          return this.isValid
            ? Info.weekdays("short", {
                locObj: this.loc,
              })[this.weekday - 1]
            : null;
        },
        /**
         * Get the human readable long weekday, such as 'Monday'.
         * Defaults to the system's locale if no locale has been specified
         * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
         * @type {string}
         */
      },
      {
        key: "weekdayLong",
        get: function get() {
          return this.isValid
            ? Info.weekdays("long", {
                locObj: this.loc,
              })[this.weekday - 1]
            : null;
        },
        /**
         * Get the UTC offset of this DateTime in minutes
         * @example DateTime.now().offset //=> -240
         * @example DateTime.utc().offset //=> 0
         * @type {number}
         */
      },
      {
        key: "offset",
        get: function get() {
          return this.isValid ? +this.o : NaN;
        },
        /**
         * Get the short human name for the zone's current offset, for example "EST" or "EDT".
         * Defaults to the system's locale if no locale has been specified
         * @type {string}
         */
      },
      {
        key: "offsetNameShort",
        get: function get() {
          if (this.isValid) {
            return this.zone.offsetName(this.ts, {
              format: "short",
              locale: this.locale,
            });
          } else {
            return null;
          }
        },
        /**
         * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
         * Defaults to the system's locale if no locale has been specified
         * @type {string}
         */
      },
      {
        key: "offsetNameLong",
        get: function get() {
          if (this.isValid) {
            return this.zone.offsetName(this.ts, {
              format: "long",
              locale: this.locale,
            });
          } else {
            return null;
          }
        },
        /**
         * Get whether this zone's offset ever changes, as in a DST.
         * @type {boolean}
         */
      },
      {
        key: "isOffsetFixed",
        get: function get() {
          return this.isValid ? this.zone.isUniversal : null;
        },
        /**
         * Get whether the DateTime is in a DST.
         * @type {boolean}
         */
      },
      {
        key: "isInDST",
        get: function get() {
          if (this.isOffsetFixed) {
            return false;
          } else {
            return (
              this.offset >
                this.set({
                  month: 1,
                  day: 1,
                }).offset ||
              this.offset >
                this.set({
                  month: 5,
                }).offset
            );
          }
        },
        /**
         * Returns true if this DateTime is in a leap year, false otherwise
         * @example DateTime.local(2016).isInLeapYear //=> true
         * @example DateTime.local(2013).isInLeapYear //=> false
         * @type {boolean}
         */
      },
      {
        key: "isInLeapYear",
        get: function get() {
          return isLeapYear(this.year);
        },
        /**
         * Returns the number of days in this DateTime's month
         * @example DateTime.local(2016, 2).daysInMonth //=> 29
         * @example DateTime.local(2016, 3).daysInMonth //=> 31
         * @type {number}
         */
      },
      {
        key: "daysInMonth",
        get: function get() {
          return daysInMonth(this.year, this.month);
        },
        /**
         * Returns the number of days in this DateTime's year
         * @example DateTime.local(2016).daysInYear //=> 366
         * @example DateTime.local(2013).daysInYear //=> 365
         * @type {number}
         */
      },
      {
        key: "daysInYear",
        get: function get() {
          return this.isValid ? daysInYear(this.year) : NaN;
        },
        /**
         * Returns the number of weeks in this DateTime's year
         * @see https://en.wikipedia.org/wiki/ISO_week_date
         * @example DateTime.local(2004).weeksInWeekYear //=> 53
         * @example DateTime.local(2013).weeksInWeekYear //=> 52
         * @type {number}
         */
      },
      {
        key: "weeksInWeekYear",
        get: function get() {
          return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
        },
      },
    ],
    [
      {
        key: "DATE_SHORT",
        get: function get() {
          return DATE_SHORT;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
         * @type {Object}
         */
      },
      {
        key: "DATE_MED",
        get: function get() {
          return DATE_MED;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
         * @type {Object}
         */
      },
      {
        key: "DATE_MED_WITH_WEEKDAY",
        get: function get() {
          return DATE_MED_WITH_WEEKDAY;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'October 14, 1983'
         * @type {Object}
         */
      },
      {
        key: "DATE_FULL",
        get: function get() {
          return DATE_FULL;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
         * @type {Object}
         */
      },
      {
        key: "DATE_HUGE",
        get: function get() {
          return DATE_HUGE;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "TIME_SIMPLE",
        get: function get() {
          return TIME_SIMPLE;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "TIME_WITH_SECONDS",
        get: function get() {
          return TIME_WITH_SECONDS;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "TIME_WITH_SHORT_OFFSET",
        get: function get() {
          return TIME_WITH_SHORT_OFFSET;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "TIME_WITH_LONG_OFFSET",
        get: function get() {
          return TIME_WITH_LONG_OFFSET;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
         * @type {Object}
         */
      },
      {
        key: "TIME_24_SIMPLE",
        get: function get() {
          return TIME_24_SIMPLE;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
         * @type {Object}
         */
      },
      {
        key: "TIME_24_WITH_SECONDS",
        get: function get() {
          return TIME_24_WITH_SECONDS;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
         * @type {Object}
         */
      },
      {
        key: "TIME_24_WITH_SHORT_OFFSET",
        get: function get() {
          return TIME_24_WITH_SHORT_OFFSET;
        },
        /**
         * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
         * @type {Object}
         */
      },
      {
        key: "TIME_24_WITH_LONG_OFFSET",
        get: function get() {
          return TIME_24_WITH_LONG_OFFSET;
        },
        /**
         * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_SHORT",
        get: function get() {
          return DATETIME_SHORT;
        },
        /**
         * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_SHORT_WITH_SECONDS",
        get: function get() {
          return DATETIME_SHORT_WITH_SECONDS;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_MED",
        get: function get() {
          return DATETIME_MED;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_MED_WITH_SECONDS",
        get: function get() {
          return DATETIME_MED_WITH_SECONDS;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_MED_WITH_WEEKDAY",
        get: function get() {
          return DATETIME_MED_WITH_WEEKDAY;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_FULL",
        get: function get() {
          return DATETIME_FULL;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_FULL_WITH_SECONDS",
        get: function get() {
          return DATETIME_FULL_WITH_SECONDS;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_HUGE",
        get: function get() {
          return DATETIME_HUGE;
        },
        /**
         * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
         * @type {Object}
         */
      },
      {
        key: "DATETIME_HUGE_WITH_SECONDS",
        get: function get() {
          return DATETIME_HUGE_WITH_SECONDS;
        },
      },
    ]
  );

  return DateTime;
})();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (
    dateTimeish &&
    dateTimeish.valueOf &&
    isNumber(dateTimeish.valueOf())
  ) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(
      "Unknown datetime argument: " +
        dateTimeish +
        ", of type " +
        typeof dateTimeish
    );
  }
}

var VERSION = "2.4.0";

var DateTime_1 = (luxon.DateTime = DateTime);
var Duration_1 = (luxon.Duration = Duration);
var FixedOffsetZone_1 = (luxon.FixedOffsetZone = FixedOffsetZone);
var IANAZone_1 = (luxon.IANAZone = IANAZone);
var Info_1 = (luxon.Info = Info);
var Interval_1 = (luxon.Interval = Interval);
var InvalidZone_1 = (luxon.InvalidZone = InvalidZone);
var Settings_1 = (luxon.Settings = Settings);
var SystemZone_1 = (luxon.SystemZone = SystemZone);
var VERSION_1 = (luxon.VERSION = VERSION);
var Zone_1 = (luxon.Zone = Zone);

var Luxon = /*#__PURE__*/ _mergeNamespaces(
  {
    __proto__: null,
    DateTime: DateTime_1,
    Duration: Duration_1,
    FixedOffsetZone: FixedOffsetZone_1,
    IANAZone: IANAZone_1,
    Info: Info_1,
    Interval: Interval_1,
    InvalidZone: InvalidZone_1,
    Settings: Settings_1,
    SystemZone: SystemZone_1,
    VERSION: VERSION_1,
    Zone: Zone_1,
    default: luxon,
  },
  [luxon]
);

////////////////////
// Query Settings //
////////////////////
const DEFAULT_QUERY_SETTINGS = {
  renderNullAs: "\\-",
  taskCompletionTracking: false,
  taskCompletionText: "completion",
  warnOnEmptyResult: true,
  refreshEnabled: true,
  refreshInterval: 2500,
  defaultDateFormat: "MMMM dd, yyyy",
  defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
  maxRecursiveRenderDepth: 4,
  tableIdColumnName: "File",
  tableGroupColumnName: "Group",
};
const DEFAULT_EXPORT_SETTINGS = {
  allowHtml: true,
};
/** Default settings for dataview on install. */
const DEFAULT_SETTINGS = {
  ...DEFAULT_QUERY_SETTINGS,
  ...DEFAULT_EXPORT_SETTINGS,
  ...{
    inlineQueryPrefix: "=",
    inlineJsQueryPrefix: "$=",
    inlineQueriesInCodeblocks: true,
    enableDataviewJs: false,
    enableInlineDataviewJs: false,
    prettyRenderInlineFields: true,
  },
};

/** Functional return type for error handling. */
class Success {
  constructor(value) {
    this.value = value;
    this.successful = true;
  }
  map(f) {
    return new Success(f(this.value));
  }
  flatMap(f) {
    return f(this.value);
  }
  mapErr(f) {
    return this;
  }
  bimap(succ, _fail) {
    return this.map(succ);
  }
  orElse(_value) {
    return this.value;
  }
  cast() {
    return this;
  }
  orElseThrow(_message) {
    return this.value;
  }
}
/** Functional return type for error handling. */
class Failure {
  constructor(error) {
    this.error = error;
    this.successful = false;
  }
  map(_f) {
    return this;
  }
  flatMap(_f) {
    return this;
  }
  mapErr(f) {
    return new Failure(f(this.error));
  }
  bimap(_succ, fail) {
    return this.mapErr(fail);
  }
  orElse(value) {
    return value;
  }
  cast() {
    return this;
  }
  orElseThrow(message) {
    if (message) throw new Error(message(this.error));
    else throw new Error("" + this.error);
  }
}
/** Monadic 'Result' type which encapsulates whether a procedure succeeded or failed, as well as it's return value. */
var Result;
(function (Result) {
  /** Construct a new success result wrapping the given value. */
  function success(value) {
    return new Success(value);
  }
  Result.success = success;
  /** Construct a new failure value wrapping the given error. */
  function failure(error) {
    return new Failure(error);
  }
  Result.failure = failure;
  /** Join two results with a bi-function and return a new result. */
  function flatMap2(first, second, f) {
    if (first.successful) {
      if (second.successful) return f(first.value, second.value);
      else return failure(second.error);
    } else {
      return failure(first.error);
    }
  }
  Result.flatMap2 = flatMap2;
  /** Join two results with a bi-function and return a new result. */
  function map2(first, second, f) {
    return flatMap2(first, second, (a, b) => success(f(a, b)));
  }
  Result.map2 = map2;
})(Result || (Result = {}));

var parsimmon_umd_min = { exports: {} };

(function (module, exports) {
  !(function (n, t) {
    module.exports = t();
  })("undefined" != typeof self ? self : commonjsGlobal, function () {
    return (function (n) {
      var t = {};
      function r(e) {
        if (t[e]) return t[e].exports;
        var u = (t[e] = { i: e, l: !1, exports: {} });
        return n[e].call(u.exports, u, u.exports, r), (u.l = !0), u.exports;
      }
      return (
        (r.m = n),
        (r.c = t),
        (r.d = function (n, t, e) {
          r.o(n, t) ||
            Object.defineProperty(n, t, {
              configurable: !1,
              enumerable: !0,
              get: e,
            });
        }),
        (r.r = function (n) {
          Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (r.n = function (n) {
          var t =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (n, t) {
          return Object.prototype.hasOwnProperty.call(n, t);
        }),
        (r.p = ""),
        r((r.s = 0))
      );
    })([
      function (n, t, r) {
        function e(n) {
          if (!(this instanceof e)) return new e(n);
          this._ = n;
        }
        var u = e.prototype;
        function o(n, t) {
          for (var r = 0; r < n; r++) t(r);
        }
        function i(n, t, r) {
          return (
            (function (n, t) {
              o(t.length, function (r) {
                n(t[r], r, t);
              });
            })(function (r, e, u) {
              t = n(t, r, e, u);
            }, r),
            t
          );
        }
        function a(n, t) {
          return i(
            function (t, r, e, u) {
              return t.concat([n(r, e, u)]);
            },
            [],
            t
          );
        }
        function f(n, t) {
          var r = { v: 0, buf: t };
          return (
            o(n, function () {
              var n;
              r = {
                v: (r.v << 1) | ((n = r.buf), n[0] >> 7),
                buf: (function (n) {
                  var t = i(
                    function (n, t, r, e) {
                      return n.concat(
                        r === e.length - 1
                          ? Buffer.from([t, 0]).readUInt16BE(0)
                          : e.readUInt16BE(r)
                      );
                    },
                    [],
                    n
                  );
                  return Buffer.from(
                    a(function (n) {
                      return ((n << 1) & 65535) >> 8;
                    }, t)
                  );
                })(r.buf),
              };
            }),
            r
          );
        }
        function c() {
          return "undefined" != typeof Buffer;
        }
        function s() {
          if (!c())
            throw new Error(
              "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
            );
        }
        function l(n) {
          s();
          var t = i(
            function (n, t) {
              return n + t;
            },
            0,
            n
          );
          if (t % 8 != 0)
            throw new Error(
              "The bits [" +
                n.join(", ") +
                "] add up to " +
                t +
                " which is not an even number of bytes; the total should be divisible by 8"
            );
          var r,
            u = t / 8,
            o =
              ((r = function (n) {
                return n > 48;
              }),
              i(
                function (n, t) {
                  return n || (r(t) ? t : n);
                },
                null,
                n
              ));
          if (o)
            throw new Error(
              o + " bit range requested exceeds 48 bit (6 byte) Number max."
            );
          return new e(function (t, r) {
            var e = u + r;
            return e > t.length
              ? x(r, u.toString() + " bytes")
              : b(
                  e,
                  i(
                    function (n, t) {
                      var r = f(t, n.buf);
                      return { coll: n.coll.concat(r.v), buf: r.buf };
                    },
                    { coll: [], buf: t.slice(r, e) },
                    n
                  ).coll
                );
          });
        }
        function h(n, t) {
          return new e(function (r, e) {
            return (
              s(),
              e + t > r.length
                ? x(e, t + " bytes for " + n)
                : b(e + t, r.slice(e, e + t))
            );
          });
        }
        function p(n, t) {
          if (
            "number" != typeof (r = t) ||
            Math.floor(r) !== r ||
            t < 0 ||
            t > 6
          )
            throw new Error(n + " requires integer length in range [0, 6].");
          var r;
        }
        function d(n) {
          return (
            p("uintBE", n),
            h("uintBE(" + n + ")", n).map(function (t) {
              return t.readUIntBE(0, n);
            })
          );
        }
        function v(n) {
          return (
            p("uintLE", n),
            h("uintLE(" + n + ")", n).map(function (t) {
              return t.readUIntLE(0, n);
            })
          );
        }
        function g(n) {
          return (
            p("intBE", n),
            h("intBE(" + n + ")", n).map(function (t) {
              return t.readIntBE(0, n);
            })
          );
        }
        function m(n) {
          return (
            p("intLE", n),
            h("intLE(" + n + ")", n).map(function (t) {
              return t.readIntLE(0, n);
            })
          );
        }
        function y(n) {
          return n instanceof e;
        }
        function E(n) {
          return "[object Array]" === {}.toString.call(n);
        }
        function w(n) {
          return c() && Buffer.isBuffer(n);
        }
        function b(n, t) {
          return { status: !0, index: n, value: t, furthest: -1, expected: [] };
        }
        function x(n, t) {
          return (
            E(t) || (t = [t]),
            { status: !1, index: -1, value: null, furthest: n, expected: t }
          );
        }
        function B(n, t) {
          if (!t) return n;
          if (n.furthest > t.furthest) return n;
          var r =
            n.furthest === t.furthest
              ? (function (n, t) {
                  if (
                    (function () {
                      if (void 0 !== e._supportsSet) return e._supportsSet;
                      var n = "undefined" != typeof Set;
                      return (e._supportsSet = n), n;
                    })() &&
                    Array.from
                  ) {
                    for (var r = new Set(n), u = 0; u < t.length; u++)
                      r.add(t[u]);
                    var o = Array.from(r);
                    return o.sort(), o;
                  }
                  for (var i = {}, a = 0; a < n.length; a++) i[n[a]] = !0;
                  for (var f = 0; f < t.length; f++) i[t[f]] = !0;
                  var c = [];
                  for (var s in i) ({}.hasOwnProperty.call(i, s) && c.push(s));
                  return c.sort(), c;
                })(n.expected, t.expected)
              : t.expected;
          return {
            status: n.status,
            index: n.index,
            value: n.value,
            furthest: t.furthest,
            expected: r,
          };
        }
        var j = {};
        function S(n, t) {
          if (w(n)) return { offset: t, line: -1, column: -1 };
          n in j || (j[n] = {});
          for (var r = j[n], e = 0, u = 0, o = 0, i = t; i >= 0; ) {
            if (i in r) {
              (e = r[i].line), 0 === o && (o = r[i].lineStart);
              break;
            }
            ("\n" === n.charAt(i) ||
              ("\r" === n.charAt(i) && "\n" !== n.charAt(i + 1))) &&
              (u++, 0 === o && (o = i + 1)),
              i--;
          }
          var a = e + u,
            f = t - o;
          return (
            (r[t] = { line: a, lineStart: o }),
            { offset: t, line: a + 1, column: f + 1 }
          );
        }
        function _(n) {
          if (!y(n)) throw new Error("not a parser: " + n);
        }
        function L(n, t) {
          return "string" == typeof n ? n.charAt(t) : n[t];
        }
        function O(n) {
          if ("number" != typeof n) throw new Error("not a number: " + n);
        }
        function k(n) {
          if ("function" != typeof n) throw new Error("not a function: " + n);
        }
        function P(n) {
          if ("string" != typeof n) throw new Error("not a string: " + n);
        }
        var q = 2,
          A = 3,
          I = 8,
          F = 5 * I,
          M = 4 * I,
          z = "  ";
        function R(n, t) {
          return new Array(t + 1).join(n);
        }
        function U(n, t, r) {
          var e = t - n.length;
          return e <= 0 ? n : R(r, e) + n;
        }
        function W(n, t, r, e) {
          return { from: n - t > 0 ? n - t : 0, to: n + r > e ? e : n + r };
        }
        function D(n, t) {
          var r,
            e,
            u,
            o,
            f,
            c = t.index,
            s = c.offset,
            l = 1;
          if (s === n.length) return "Got the end of the input";
          if (w(n)) {
            var h = s - (s % I),
              p = s - h,
              d = W(h, F, M + I, n.length),
              v = a(
                function (n) {
                  return a(function (n) {
                    return U(n.toString(16), 2, "0");
                  }, n);
                },
                (function (n, t) {
                  var r = n.length,
                    e = [],
                    u = 0;
                  if (r <= t) return [n.slice()];
                  for (var o = 0; o < r; o++)
                    e[u] || e.push([]),
                      e[u].push(n[o]),
                      (o + 1) % t == 0 && u++;
                  return e;
                })(n.slice(d.from, d.to).toJSON().data, I)
              );
            (o = (function (n) {
              return 0 === n.from && 1 === n.to
                ? { from: n.from, to: n.to }
                : { from: n.from / I, to: Math.floor(n.to / I) };
            })(d)),
              (e = h / I),
              (r = 3 * p),
              p >= 4 && (r += 1),
              (l = 2),
              (u = a(function (n) {
                return n.length <= 4
                  ? n.join(" ")
                  : n.slice(0, 4).join(" ") + "  " + n.slice(4).join(" ");
              }, v)),
              (f = (8 * (o.to > 0 ? o.to - 1 : o.to)).toString(16).length) <
                2 && (f = 2);
          } else {
            var g = n.split(/\r\n|[\n\r\u2028\u2029]/);
            (r = c.column - 1),
              (e = c.line - 1),
              (o = W(e, q, A, g.length)),
              (u = g.slice(o.from, o.to)),
              (f = o.to.toString().length);
          }
          var m = e - o.from;
          return (
            w(n) &&
              (f = (8 * (o.to > 0 ? o.to - 1 : o.to)).toString(16).length) <
                2 &&
              (f = 2),
            i(
              function (t, e, u) {
                var i,
                  a = u === m,
                  c = a ? "> " : z;
                return (
                  (i = w(n)
                    ? U((8 * (o.from + u)).toString(16), f, "0")
                    : U((o.from + u + 1).toString(), f, " ")),
                  [].concat(
                    t,
                    [c + i + " | " + e],
                    a ? [z + R(" ", f) + " | " + U("", r, " ") + R("^", l)] : []
                  )
                );
              },
              [],
              u
            ).join("\n")
          );
        }
        function N(n, t) {
          return [
            "\n",
            "-- PARSING FAILED " + R("-", 50),
            "\n\n",
            D(n, t),
            "\n\n",
            ((r = t.expected),
            1 === r.length
              ? "Expected:\n\n" + r[0]
              : "Expected one of the following: \n\n" + r.join(", ")),
            "\n",
          ].join("");
          var r;
        }
        function G(n) {
          return void 0 !== n.flags
            ? n.flags
            : [
                n.global ? "g" : "",
                n.ignoreCase ? "i" : "",
                n.multiline ? "m" : "",
                n.unicode ? "u" : "",
                n.sticky ? "y" : "",
              ].join("");
        }
        function C() {
          for (
            var n = [].slice.call(arguments), t = n.length, r = 0;
            r < t;
            r += 1
          )
            _(n[r]);
          return e(function (r, e) {
            for (var u, o = new Array(t), i = 0; i < t; i += 1) {
              if (!(u = B(n[i]._(r, e), u)).status) return u;
              (o[i] = u.value), (e = u.index);
            }
            return B(b(e, o), u);
          });
        }
        function J() {
          var n = [].slice.call(arguments);
          if (0 === n.length)
            throw new Error("seqMap needs at least one argument");
          var t = n.pop();
          return (
            k(t),
            C.apply(null, n).map(function (n) {
              return t.apply(null, n);
            })
          );
        }
        function T() {
          var n = [].slice.call(arguments),
            t = n.length;
          if (0 === t) return Y("zero alternates");
          for (var r = 0; r < t; r += 1) _(n[r]);
          return e(function (t, r) {
            for (var e, u = 0; u < n.length; u += 1)
              if ((e = B(n[u]._(t, r), e)).status) return e;
            return e;
          });
        }
        function V(n, t) {
          return H(n, t).or(X([]));
        }
        function H(n, t) {
          return (
            _(n),
            _(t),
            J(n, t.then(n).many(), function (n, t) {
              return [n].concat(t);
            })
          );
        }
        function K(n) {
          P(n);
          var t = "'" + n + "'";
          return e(function (r, e) {
            var u = e + n.length,
              o = r.slice(e, u);
            return o === n ? b(u, o) : x(e, t);
          });
        }
        function Q(n, t) {
          !(function (n) {
            if (!(n instanceof RegExp)) throw new Error("not a regexp: " + n);
            for (var t = G(n), r = 0; r < t.length; r++) {
              var e = t.charAt(r);
              if ("i" !== e && "m" !== e && "u" !== e && "s" !== e)
                throw new Error('unsupported regexp flag "' + e + '": ' + n);
            }
          })(n),
            arguments.length >= 2 ? O(t) : (t = 0);
          var r = (function (n) {
              return RegExp("^(?:" + n.source + ")", G(n));
            })(n),
            u = "" + n;
          return e(function (n, e) {
            var o = r.exec(n.slice(e));
            if (o) {
              if (0 <= t && t <= o.length) {
                var i = o[0],
                  a = o[t];
                return b(e + i.length, a);
              }
              return x(e, "valid match group (0 to " + o.length + ") in " + u);
            }
            return x(e, u);
          });
        }
        function X(n) {
          return e(function (t, r) {
            return b(r, n);
          });
        }
        function Y(n) {
          return e(function (t, r) {
            return x(r, n);
          });
        }
        function Z(n) {
          if (y(n))
            return e(function (t, r) {
              var e = n._(t, r);
              return (e.index = r), (e.value = ""), e;
            });
          if ("string" == typeof n) return Z(K(n));
          if (n instanceof RegExp) return Z(Q(n));
          throw new Error("not a string, regexp, or parser: " + n);
        }
        function $(n) {
          return (
            _(n),
            e(function (t, r) {
              var e = n._(t, r),
                u = t.slice(r, e.index);
              return e.status ? x(r, 'not "' + u + '"') : b(r, null);
            })
          );
        }
        function nn(n) {
          return (
            k(n),
            e(function (t, r) {
              var e = L(t, r);
              return r < t.length && n(e)
                ? b(r + 1, e)
                : x(r, "a character/byte matching " + n);
            })
          );
        }
        function tn(n, t) {
          arguments.length < 2 && ((t = n), (n = void 0));
          var r = e(function (n, e) {
            return (r._ = t()._), r._(n, e);
          });
          return n ? r.desc(n) : r;
        }
        function rn() {
          return Y("fantasy-land/empty");
        }
        (u.parse = function (n) {
          if ("string" != typeof n && !w(n))
            throw new Error(
              ".parse must be called with a string or Buffer as its argument"
            );
          var t,
            r = this.skip(an)._(n, 0);
          return (
            (t = r.status
              ? { status: !0, value: r.value }
              : { status: !1, index: S(n, r.furthest), expected: r.expected }),
            delete j[n],
            t
          );
        }),
          (u.tryParse = function (n) {
            var t = this.parse(n);
            if (t.status) return t.value;
            var r = N(n, t),
              e = new Error(r);
            throw ((e.type = "ParsimmonError"), (e.result = t), e);
          }),
          (u.assert = function (n, t) {
            return this.chain(function (r) {
              return n(r) ? X(r) : Y(t);
            });
          }),
          (u.or = function (n) {
            return T(this, n);
          }),
          (u.trim = function (n) {
            return this.wrap(n, n);
          }),
          (u.wrap = function (n, t) {
            return J(n, this, t, function (n, t) {
              return t;
            });
          }),
          (u.thru = function (n) {
            return n(this);
          }),
          (u.then = function (n) {
            return (
              _(n),
              C(this, n).map(function (n) {
                return n[1];
              })
            );
          }),
          (u.many = function () {
            var n = this;
            return e(function (t, r) {
              for (var e = [], u = void 0; ; ) {
                if (!(u = B(n._(t, r), u)).status) return B(b(r, e), u);
                if (r === u.index)
                  throw new Error(
                    "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
                  );
                (r = u.index), e.push(u.value);
              }
            });
          }),
          (u.tieWith = function (n) {
            return (
              P(n),
              this.map(function (t) {
                if (
                  ((function (n) {
                    if (!E(n)) throw new Error("not an array: " + n);
                  })(t),
                  t.length)
                ) {
                  P(t[0]);
                  for (var r = t[0], e = 1; e < t.length; e++)
                    P(t[e]), (r += n + t[e]);
                  return r;
                }
                return "";
              })
            );
          }),
          (u.tie = function () {
            return this.tieWith("");
          }),
          (u.times = function (n, t) {
            var r = this;
            return (
              arguments.length < 2 && (t = n),
              O(n),
              O(t),
              e(function (e, u) {
                for (var o = [], i = void 0, a = void 0, f = 0; f < n; f += 1) {
                  if (((a = B((i = r._(e, u)), a)), !i.status)) return a;
                  (u = i.index), o.push(i.value);
                }
                for (; f < t && ((a = B((i = r._(e, u)), a)), i.status); f += 1)
                  (u = i.index), o.push(i.value);
                return B(b(u, o), a);
              })
            );
          }),
          (u.result = function (n) {
            return this.map(function () {
              return n;
            });
          }),
          (u.atMost = function (n) {
            return this.times(0, n);
          }),
          (u.atLeast = function (n) {
            return J(this.times(n), this.many(), function (n, t) {
              return n.concat(t);
            });
          }),
          (u.map = function (n) {
            k(n);
            var t = this;
            return e(function (r, e) {
              var u = t._(r, e);
              return u.status ? B(b(u.index, n(u.value)), u) : u;
            });
          }),
          (u.contramap = function (n) {
            k(n);
            var t = this;
            return e(function (r, e) {
              var u = t.parse(n(r.slice(e)));
              return u.status ? b(e + r.length, u.value) : u;
            });
          }),
          (u.promap = function (n, t) {
            return k(n), k(t), this.contramap(n).map(t);
          }),
          (u.skip = function (n) {
            return C(this, n).map(function (n) {
              return n[0];
            });
          }),
          (u.mark = function () {
            return J(en, this, en, function (n, t, r) {
              return { start: n, value: t, end: r };
            });
          }),
          (u.node = function (n) {
            return J(en, this, en, function (t, r, e) {
              return { name: n, value: r, start: t, end: e };
            });
          }),
          (u.sepBy = function (n) {
            return V(this, n);
          }),
          (u.sepBy1 = function (n) {
            return H(this, n);
          }),
          (u.lookahead = function (n) {
            return this.skip(Z(n));
          }),
          (u.notFollowedBy = function (n) {
            return this.skip($(n));
          }),
          (u.desc = function (n) {
            E(n) || (n = [n]);
            var t = this;
            return e(function (r, e) {
              var u = t._(r, e);
              return u.status || (u.expected = n), u;
            });
          }),
          (u.fallback = function (n) {
            return this.or(X(n));
          }),
          (u.ap = function (n) {
            return J(n, this, function (n, t) {
              return n(t);
            });
          }),
          (u.chain = function (n) {
            var t = this;
            return e(function (r, e) {
              var u = t._(r, e);
              return u.status ? B(n(u.value)._(r, u.index), u) : u;
            });
          }),
          (u.concat = u.or),
          (u.empty = rn),
          (u.of = X),
          (u["fantasy-land/ap"] = u.ap),
          (u["fantasy-land/chain"] = u.chain),
          (u["fantasy-land/concat"] = u.concat),
          (u["fantasy-land/empty"] = u.empty),
          (u["fantasy-land/of"] = u.of),
          (u["fantasy-land/map"] = u.map);
        var en = e(function (n, t) {
            return b(t, S(n, t));
          }),
          un = e(function (n, t) {
            return t >= n.length
              ? x(t, "any character/byte")
              : b(t + 1, L(n, t));
          }),
          on = e(function (n, t) {
            return b(n.length, n.slice(t));
          }),
          an = e(function (n, t) {
            return t < n.length ? x(t, "EOF") : b(t, null);
          }),
          fn = Q(/[0-9]/).desc("a digit"),
          cn = Q(/[0-9]*/).desc("optional digits"),
          sn = Q(/[a-z]/i).desc("a letter"),
          ln = Q(/[a-z]*/i).desc("optional letters"),
          hn = Q(/\s*/).desc("optional whitespace"),
          pn = Q(/\s+/).desc("whitespace"),
          dn = K("\r"),
          vn = K("\n"),
          gn = K("\r\n"),
          mn = T(gn, vn, dn).desc("newline"),
          yn = T(mn, an);
        (e.all = on),
          (e.alt = T),
          (e.any = un),
          (e.cr = dn),
          (e.createLanguage = function (n) {
            var t = {};
            for (var r in n)
              ({}.hasOwnProperty.call(n, r) &&
                (function (r) {
                  t[r] = tn(function () {
                    return n[r](t);
                  });
                })(r));
            return t;
          }),
          (e.crlf = gn),
          (e.custom = function (n) {
            return e(n(b, x));
          }),
          (e.digit = fn),
          (e.digits = cn),
          (e.empty = rn),
          (e.end = yn),
          (e.eof = an),
          (e.fail = Y),
          (e.formatError = N),
          (e.index = en),
          (e.isParser = y),
          (e.lazy = tn),
          (e.letter = sn),
          (e.letters = ln),
          (e.lf = vn),
          (e.lookahead = Z),
          (e.makeFailure = x),
          (e.makeSuccess = b),
          (e.newline = mn),
          (e.noneOf = function (n) {
            return nn(function (t) {
              return n.indexOf(t) < 0;
            }).desc("none of '" + n + "'");
          }),
          (e.notFollowedBy = $),
          (e.of = X),
          (e.oneOf = function (n) {
            for (var t = n.split(""), r = 0; r < t.length; r++)
              t[r] = "'" + t[r] + "'";
            return nn(function (t) {
              return n.indexOf(t) >= 0;
            }).desc(t);
          }),
          (e.optWhitespace = hn),
          (e.Parser = e),
          (e.range = function (n, t) {
            return nn(function (r) {
              return n <= r && r <= t;
            }).desc(n + "-" + t);
          }),
          (e.regex = Q),
          (e.regexp = Q),
          (e.sepBy = V),
          (e.sepBy1 = H),
          (e.seq = C),
          (e.seqMap = J),
          (e.seqObj = function () {
            for (
              var n,
                t = {},
                r = 0,
                u = ((n = arguments), Array.prototype.slice.call(n)),
                o = u.length,
                i = 0;
              i < o;
              i += 1
            ) {
              var a = u[i];
              if (!y(a)) {
                if (
                  E(a) &&
                  2 === a.length &&
                  "string" == typeof a[0] &&
                  y(a[1])
                ) {
                  var f = a[0];
                  if (Object.prototype.hasOwnProperty.call(t, f))
                    throw new Error("seqObj: duplicate key " + f);
                  (t[f] = !0), r++;
                  continue;
                }
                throw new Error(
                  "seqObj arguments must be parsers or [string, parser] array pairs."
                );
              }
            }
            if (0 === r)
              throw new Error(
                "seqObj expects at least one named parser, found zero"
              );
            return e(function (n, t) {
              for (var r, e = {}, i = 0; i < o; i += 1) {
                var a, f;
                if (
                  (E(u[i])
                    ? ((a = u[i][0]), (f = u[i][1]))
                    : ((a = null), (f = u[i])),
                  !(r = B(f._(n, t), r)).status)
                )
                  return r;
                a && (e[a] = r.value), (t = r.index);
              }
              return B(b(t, e), r);
            });
          }),
          (e.string = K),
          (e.succeed = X),
          (e.takeWhile = function (n) {
            return (
              k(n),
              e(function (t, r) {
                for (var e = r; e < t.length && n(L(t, e)); ) e++;
                return b(e, t.slice(r, e));
              })
            );
          }),
          (e.test = nn),
          (e.whitespace = pn),
          (e["fantasy-land/empty"] = rn),
          (e["fantasy-land/of"] = X),
          (e.Binary = {
            bitSeq: l,
            bitSeqObj: function (n) {
              s();
              var t = {},
                r = 0,
                e = a(function (n) {
                  if (E(n)) {
                    var e = n;
                    if (2 !== e.length)
                      throw new Error(
                        "[" +
                          e.join(", ") +
                          "] should be length 2, got length " +
                          e.length
                      );
                    if (
                      (P(e[0]),
                      O(e[1]),
                      Object.prototype.hasOwnProperty.call(t, e[0]))
                    )
                      throw new Error("duplicate key in bitSeqObj: " + e[0]);
                    return (t[e[0]] = !0), r++, e;
                  }
                  return O(n), [null, n];
                }, n);
              if (r < 1)
                throw new Error(
                  "bitSeqObj expects at least one named pair, got [" +
                    n.join(", ") +
                    "]"
                );
              var u = a(function (n) {
                return n[0];
              }, e);
              return l(
                a(function (n) {
                  return n[1];
                }, e)
              ).map(function (n) {
                return i(
                  function (n, t) {
                    return null !== t[0] && (n[t[0]] = t[1]), n;
                  },
                  {},
                  a(function (t, r) {
                    return [t, n[r]];
                  }, u)
                );
              });
            },
            byte: function (n) {
              if ((s(), O(n), n > 255))
                throw new Error(
                  "Value specified to byte constructor (" +
                    n +
                    "=0x" +
                    n.toString(16) +
                    ") is larger in value than a single byte."
                );
              var t = (n > 15 ? "0x" : "0x0") + n.toString(16);
              return e(function (r, e) {
                var u = L(r, e);
                return u === n ? b(e + 1, u) : x(e, t);
              });
            },
            buffer: function (n) {
              return h("buffer", n).map(function (n) {
                return Buffer.from(n);
              });
            },
            encodedString: function (n, t) {
              return h("string", t).map(function (t) {
                return t.toString(n);
              });
            },
            uintBE: d,
            uint8BE: d(1),
            uint16BE: d(2),
            uint32BE: d(4),
            uintLE: v,
            uint8LE: v(1),
            uint16LE: v(2),
            uint32LE: v(4),
            intBE: g,
            int8BE: g(1),
            int16BE: g(2),
            int32BE: g(4),
            intLE: m,
            int8LE: m(1),
            int16LE: m(2),
            int32LE: m(4),
            floatBE: h("floatBE", 4).map(function (n) {
              return n.readFloatBE(0);
            }),
            floatLE: h("floatLE", 4).map(function (n) {
              return n.readFloatLE(0);
            }),
            doubleBE: h("doubleBE", 8).map(function (n) {
              return n.readDoubleBE(0);
            }),
            doubleLE: h("doubleLE", 8).map(function (n) {
              return n.readDoubleLE(0);
            }),
          }),
          (n.exports = e);
      },
    ]);
  });
})(parsimmon_umd_min);

var emojiRegex = () => {
  // https://mths.be/emoji
  return /(?:[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?))/g;
};

/** Normalize a duration to all of the proper units. */
function normalizeDuration(dur) {
  if (dur === undefined || dur === null) return dur;
  return dur
    .shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    )
    .normalize();
}
/** Strip the time components of a date time object. */
function stripTime(dt) {
  if (dt === null || dt === undefined) return dt;
  return DateTime_1.fromObject({
    year: dt.year,
    month: dt.month,
    day: dt.day,
  });
}
/** Get the folder containing the given path (i.e., like computing 'path/..'). */
function getParentFolder(path) {
  return path.split("/").slice(0, -1).join("/");
}
/** Get the "title" for a file, by stripping other parts of the path as well as the extension. */
function getFileTitle(path) {
  if (path.includes("/")) path = path.substring(path.lastIndexOf("/") + 1);
  if (path.endsWith(".md")) path = path.substring(0, path.length - 3);
  return path;
}
/** Get the extension of a file from the file path. */
function getExtension(path) {
  if (!path.includes(".")) return "";
  return path.substring(path.lastIndexOf(".") + 1);
}
/** Parse all subtags out of the given tag. I.e., #hello/i/am would yield [#hello/i/am, #hello/i, #hello]. */
function extractSubtags(tag) {
  let result = [tag];
  while (tag.includes("/")) {
    tag = tag.substring(0, tag.lastIndexOf("/"));
    result.push(tag);
  }
  return result;
}
/** Try calling the given function; on failure, return the error message.  */
function tryOrPropogate(func) {
  try {
    return func();
  } catch (error) {
    return Result.failure("" + error + "\n\n" + error.stack);
  }
}
/** Try asynchronously calling the given function; on failure, return the error message. */
async function asyncTryOrPropogate(func) {
  try {
    return await func();
  } catch (error) {
    return Result.failure("" + error + "\n\n" + error.stack);
  }
}
/**
 * Escape regex characters in a string.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
/** A parsimmon parser which canonicalizes variable names while properly respecting emoji. */
const VAR_NAME_CANONICALIZER = parsimmon_umd_min.exports
  .alt(
    parsimmon_umd_min.exports.regex(new RegExp(emojiRegex(), "")),
    parsimmon_umd_min.exports
      .regex(/[0-9\p{Letter}_-]+/u)
      .map((str) => str.toLocaleLowerCase()),
    parsimmon_umd_min.exports.whitespace.map((_) => "-"),
    parsimmon_umd_min.exports.any.map((_) => "")
  )
  .many()
  .map((result) => result.join(""));
/** Convert an arbitrary variable name into something JS/query friendly. */
function canonicalizeVarName(name) {
  return VAR_NAME_CANONICALIZER.tryParse(name);
}
const HEADER_CANONICALIZER = parsimmon_umd_min.exports
  .alt(
    parsimmon_umd_min.exports.regex(new RegExp(emojiRegex(), "")),
    parsimmon_umd_min.exports.regex(/[0-9\p{Letter}_-]+/u),
    parsimmon_umd_min.exports.whitespace.map((_) => " "),
    parsimmon_umd_min.exports.any.map((_) => " ")
  )
  .many()
  .map((result) => {
    return result.join("").split(/\s+/).join(" ").trim();
  });
/**
 * Normalizes the text in a header to be something that is actually linkable to. This mimics
 * how Obsidian does it's normalization, collapsing repeated spaces and stripping out control characters.
 */
function normalizeHeaderForLink(header) {
  return HEADER_CANONICALIZER.tryParse(header);
}
/** Render a DateTime in a minimal format to save space. */
function renderMinimalDate(time, settings, locale) {
  // If there is no relevant time specified, fall back to just rendering the date.
  if (time.second == 0 && time.minute == 0 && time.hour == 0) {
    return time.toFormat(settings.defaultDateFormat, { locale });
  }
  return time.toFormat(settings.defaultDateTimeFormat, { locale });
}
/** Render a duration in a minimal format to save space. */
function renderMinimalDuration(dur) {
  dur = normalizeDuration(dur);
  // TODO: Luxon does not have multi-lingual/locale-aware duration rendering.
  let result = "";
  if (dur.years) result += `${dur.years} years, `;
  if (dur.months) result += `${dur.months} months, `;
  if (dur.weeks) result += `${dur.weeks} weeks, `;
  if (dur.days) result += `${dur.days} days, `;
  if (dur.hours) result += `${dur.hours} hours, `;
  if (dur.minutes) result += `${dur.minutes} minutes, `;
  if (dur.seconds) result += `${Math.round(dur.seconds)} seconds, `;
  if (dur.milliseconds) result += `${Math.round(dur.milliseconds)} ms, `;
  if (result.endsWith(", ")) result = result.substring(0, result.length - 2);
  return result;
}
/** Determine if two sets are equal in contents. */
function setsEqual(first, second) {
  if (first.size != second.size) return false;
  for (let elem of first) if (!second.has(elem)) return false;
  return true;
}

var Values;
(function (Values) {
  /** Convert an arbitary value into a reasonable, Markdown-friendly string if possible. */
  function toString(
    field,
    setting = DEFAULT_QUERY_SETTINGS,
    recursive = false
  ) {
    let wrapped = wrapValue(field);
    if (!wrapped) return setting.renderNullAs;
    switch (wrapped.type) {
      case "null":
        return setting.renderNullAs;
      case "string":
        return wrapped.value;
      case "number":
      case "boolean":
        return "" + wrapped.value;
      case "html":
        return wrapped.value.outerHTML;
      case "widget":
        return wrapped.value.markdown();
      case "link":
        return wrapped.value.markdown();
      case "function":
        return "<function>";
      case "array":
        let result = "";
        if (recursive) result += "[";
        result += wrapped.value
          .map((f) => toString(f, setting, true))
          .join(", ");
        if (recursive) result += "]";
        return result;
      case "object":
        return (
          "{ " +
          Object.entries(wrapped.value)
            .map((e) => e[0] + ": " + toString(e[1], setting, true))
            .join(", ") +
          " }"
        );
      case "date":
        if (
          wrapped.value.second == 0 &&
          wrapped.value.hour == 0 &&
          wrapped.value.minute == 0
        ) {
          return wrapped.value.toFormat(setting.defaultDateFormat);
        }
        return wrapped.value.toFormat(setting.defaultDateTimeFormat);
      case "duration":
        return renderMinimalDuration(wrapped.value);
    }
  }
  Values.toString = toString;
  /** Wrap a literal value so you can switch on it easily. */
  function wrapValue(val) {
    if (isNull(val)) return { type: "null", value: val };
    else if (isNumber(val)) return { type: "number", value: val };
    else if (isString(val)) return { type: "string", value: val };
    else if (isBoolean(val)) return { type: "boolean", value: val };
    else if (isDuration(val)) return { type: "duration", value: val };
    else if (isDate(val)) return { type: "date", value: val };
    else if (isWidget(val)) return { type: "widget", value: val };
    else if (isArray(val)) return { type: "array", value: val };
    else if (isLink(val)) return { type: "link", value: val };
    else if (isFunction(val)) return { type: "function", value: val };
    else if (isHtml(val)) return { type: "html", value: val };
    else if (isObject(val)) return { type: "object", value: val };
    else return undefined;
  }
  Values.wrapValue = wrapValue;
  /** Recursively map complex objects at the leaves. */
  function mapLeaves(val, func) {
    if (isObject(val)) {
      let result = {};
      for (let [key, value] of Object.entries(val))
        result[key] = mapLeaves(value, func);
      return result;
    } else if (isArray(val)) {
      let result = [];
      for (let value of val) result.push(mapLeaves(value, func));
      return result;
    } else {
      return func(val);
    }
  }
  Values.mapLeaves = mapLeaves;
  /** Compare two arbitrary JavaScript values. Produces a total ordering over ANY possible dataview value. */
  function compareValue(val1, val2, linkNormalizer) {
    var _a, _b;
    // Handle undefined/nulls first.
    if (val1 === undefined) val1 = null;
    if (val2 === undefined) val2 = null;
    if (val1 === null && val2 === null) return 0;
    else if (val1 === null) return -1;
    else if (val2 === null) return 1;
    // A non-null value now which we can wrap & compare on.
    let wrap1 = wrapValue(val1);
    let wrap2 = wrapValue(val2);
    if (wrap1 === undefined && wrap2 === undefined) return 0;
    else if (wrap1 === undefined) return -1;
    else if (wrap2 === undefined) return 1;
    // Short-circuit on different types or on reference equality.
    if (wrap1.type != wrap2.type) return wrap1.type.localeCompare(wrap2.type);
    if (wrap1.value === wrap2.value) return 0;
    switch (wrap1.type) {
      case "string":
        return wrap1.value.localeCompare(wrap2.value);
      case "number":
        if (wrap1.value < wrap2.value) return -1;
        else if (wrap1.value == wrap2.value) return 0;
        return 1;
      case "null":
        return 0;
      case "boolean":
        if (wrap1.value == wrap2.value) return 0;
        else return wrap1.value ? 1 : -1;
      case "link":
        let link1 = wrap1.value;
        let link2 = wrap2.value;
        let normalize =
          linkNormalizer !== null && linkNormalizer !== void 0
            ? linkNormalizer
            : (x) => x;
        // We can't compare by file name or display, since that would break link equality. Compare by path.
        let pathCompare = normalize(link1.path).localeCompare(
          normalize(link2.path)
        );
        if (pathCompare != 0) return pathCompare;
        // Then compare by type.
        let typeCompare = link1.type.localeCompare(link2.type);
        if (typeCompare != 0) return typeCompare;
        // Then compare by subpath existence.
        if (link1.subpath && !link2.subpath) return 1;
        if (!link1.subpath && link2.subpath) return -1;
        if (!link1.subpath && !link2.subpath) return 0;
        // Since both have a subpath, compare by subpath.
        return (
          (_a = link1.subpath) !== null && _a !== void 0 ? _a : ""
        ).localeCompare(
          (_b = link2.subpath) !== null && _b !== void 0 ? _b : ""
        );
      case "date":
        return wrap1.value < wrap2.value
          ? -1
          : wrap1.value.equals(wrap2.value)
          ? 0
          : 1;
      case "duration":
        return wrap1.value < wrap2.value
          ? -1
          : wrap1.value.equals(wrap2.value)
          ? 0
          : 1;
      case "array":
        let f1 = wrap1.value;
        let f2 = wrap2.value;
        for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
          let comp = compareValue(f1[index], f2[index]);
          if (comp != 0) return comp;
        }
        return f1.length - f2.length;
      case "object":
        let o1 = wrap1.value;
        let o2 = wrap2.value;
        let k1 = Array.from(Object.keys(o1));
        let k2 = Array.from(Object.keys(o2));
        k1.sort();
        k2.sort();
        let keyCompare = compareValue(k1, k2);
        if (keyCompare != 0) return keyCompare;
        for (let key of k1) {
          let comp = compareValue(o1[key], o2[key]);
          if (comp != 0) return comp;
        }
        return 0;
      case "widget":
      case "html":
      case "function":
        return 0;
    }
  }
  Values.compareValue = compareValue;
  /** Find the corresponding Dataveiw type for an arbitrary value. */
  function typeOf(val) {
    var _a;
    return (_a = wrapValue(val)) === null || _a === void 0 ? void 0 : _a.type;
  }
  Values.typeOf = typeOf;
  /** Determine if the given value is "truthy" (i.e., is non-null and has data in it). */
  function isTruthy(field) {
    let wrapped = wrapValue(field);
    if (!wrapped) return false;
    switch (wrapped.type) {
      case "number":
        return wrapped.value != 0;
      case "string":
        return wrapped.value.length > 0;
      case "boolean":
        return wrapped.value;
      case "link":
        return !!wrapped.value.path;
      case "date":
        return wrapped.value.toMillis() != 0;
      case "duration":
        return wrapped.value.as("seconds") != 0;
      case "object":
        return Object.keys(wrapped.value).length > 0;
      case "array":
        return wrapped.value.length > 0;
      case "null":
        return false;
      case "html":
      case "widget":
      case "function":
        return true;
    }
  }
  Values.isTruthy = isTruthy;
  /** Deep copy a field. */
  function deepCopy(field) {
    if (field === null || field === undefined) return field;
    if (Values.isArray(field)) {
      return [].concat(field.map((v) => deepCopy(v)));
    } else if (Values.isObject(field)) {
      let result = {};
      for (let [key, value] of Object.entries(field))
        result[key] = deepCopy(value);
      return result;
    } else {
      return field;
    }
  }
  Values.deepCopy = deepCopy;
  function isString(val) {
    return typeof val == "string";
  }
  Values.isString = isString;
  function isNumber(val) {
    return typeof val == "number";
  }
  Values.isNumber = isNumber;
  function isDate(val) {
    return val instanceof DateTime_1;
  }
  Values.isDate = isDate;
  function isDuration(val) {
    return val instanceof Duration_1;
  }
  Values.isDuration = isDuration;
  function isNull(val) {
    return val === null || val === undefined;
  }
  Values.isNull = isNull;
  function isArray(val) {
    return Array.isArray(val);
  }
  Values.isArray = isArray;
  function isBoolean(val) {
    return typeof val === "boolean";
  }
  Values.isBoolean = isBoolean;
  function isLink(val) {
    return val instanceof Link;
  }
  Values.isLink = isLink;
  function isWidget(val) {
    return val instanceof Widget;
  }
  Values.isWidget = isWidget;
  function isHtml(val) {
    if (typeof HTMLElement !== "undefined") {
      return val instanceof HTMLElement;
    } else {
      return false;
    }
  }
  Values.isHtml = isHtml;
  /** Checks if the given value is an object (and not any other dataview-recognized object-like type). */
  function isObject(val) {
    return (
      typeof val == "object" &&
      !isHtml(val) &&
      !isWidget(val) &&
      !isArray(val) &&
      !isDuration(val) &&
      !isDate(val) &&
      !isLink(val) &&
      val !== undefined &&
      !isNull(val)
    );
  }
  Values.isObject = isObject;
  function isFunction(val) {
    return typeof val == "function";
  }
  Values.isFunction = isFunction;
})(Values || (Values = {}));
///////////////
// Groupings //
///////////////
var Groupings;
(function (Groupings) {
  /** Determines if the given group entry is a standalone value, or a grouping of sub-entries. */
  function isElementGroup(entry) {
    return (
      Values.isObject(entry) &&
      Object.keys(entry).length == 2 &&
      "key" in entry &&
      "rows" in entry
    );
  }
  Groupings.isElementGroup = isElementGroup;
  /** Determines if the given array is a grouping array. */
  function isGrouping(entry) {
    for (let element of entry) if (!isElementGroup(element)) return false;
    return true;
  }
  Groupings.isGrouping = isGrouping;
  /** Count the total number of elements in a recursive grouping. */
  function count(elements) {
    if (isGrouping(elements)) {
      let result = 0;
      for (let subgroup of elements) result += count(subgroup.rows);
      return result;
    } else {
      return elements.length;
    }
  }
  Groupings.count = count;
})(Groupings || (Groupings = {}));
//////////
// LINK //
//////////
/** The Obsidian 'link', used for uniquely describing a file, header, or block. */
class Link {
  constructor(fields) {
    Object.assign(this, fields);
  }
  /** Create a link to a specific file. */
  static file(path, embed = false, display) {
    return new Link({
      path,
      embed,
      display,
      subpath: undefined,
      type: "file",
    });
  }
  static infer(linkpath, embed = false, display) {
    if (linkpath.includes("#^")) {
      let split = linkpath.split("#^");
      return Link.block(split[0], split[1], embed, display);
    } else if (linkpath.includes("#")) {
      let split = linkpath.split("#");
      return Link.header(split[0], split[1], embed, display);
    } else return Link.file(linkpath, embed, display);
  }
  /** Create a link to a specific file and header in that file. */
  static header(path, header, embed, display) {
    // Headers need to be normalized to alpha-numeric & with extra spacing removed.
    return new Link({
      path,
      embed,
      display,
      subpath: normalizeHeaderForLink(header),
      type: "header",
    });
  }
  /** Create a link to a specific file and block in that file. */
  static block(path, blockId, embed, display) {
    return new Link({
      path,
      embed,
      display,
      subpath: blockId,
      type: "block",
    });
  }
  static fromObject(object) {
    return new Link(object);
  }
  /** Checks for link equality (i.e., that the links are pointing to the same exact location). */
  equals(other) {
    if (other == undefined || other == null) return false;
    return (
      this.path == other.path &&
      this.type == other.type &&
      this.subpath == other.subpath
    );
  }
  /** Convert this link to it's markdown representation. */
  toString() {
    return this.markdown();
  }
  /** Convert this link to a raw object which is serialization-friendly. */
  toObject() {
    return {
      path: this.path,
      type: this.type,
      subpath: this.subpath,
      display: this.display,
      embed: this.embed,
    };
  }
  /** Update this link with a new path. */
  withPath(path) {
    return new Link(Object.assign({}, this, { path }));
  }
  /** Return a new link which points to the same location but with a new display value. */
  withDisplay(display) {
    return new Link(Object.assign({}, this, { display }));
  }
  /** Convert a file link into a link to a specific header. */
  withHeader(header) {
    return Link.header(this.path, header, this.embed, this.display);
  }
  /** Convert any link into a link to its file. */
  toFile() {
    return Link.file(this.path, this.embed, this.display);
  }
  /** Convert this link into an embedded link. */
  toEmbed() {
    if (this.embed) {
      return this;
    } else {
      let link = new Link(this);
      link.embed = true;
      return link;
    }
  }
  /** Convert this link into a non-embedded link. */
  fromEmbed() {
    if (!this.embed) {
      return this;
    } else {
      let link = new Link(this);
      link.embed = false;
      return link;
    }
  }
  /** Convert this link to markdown so it can be rendered. */
  markdown() {
    let result = (this.embed ? "!" : "") + "[[" + this.obsidianLink();
    if (this.display) {
      result += "|" + this.display;
    } else {
      result += "|" + getFileTitle(this.path);
      if (this.type == "header" || this.type == "block")
        result += " > " + this.subpath;
    }
    result += "]]";
    return result;
  }
  /** Convert the inner part of the link to something that Obsidian can open / understand. */
  obsidianLink() {
    var _a, _b;
    const escaped = this.path.replace("|", "\\|");
    if (this.type == "header")
      return (
        escaped +
        "#" +
        ((_a = this.subpath) === null || _a === void 0
          ? void 0
          : _a.replace("|", "\\|"))
      );
    if (this.type == "block")
      return (
        escaped +
        "#^" +
        ((_b = this.subpath) === null || _b === void 0
          ? void 0
          : _b.replace("|", "\\|"))
      );
    else return escaped;
  }
  /** The stripped name of the file this link points to. */
  fileName() {
    return getFileTitle(this.path).replace(".md", "");
  }
}
/////////////////
// WIDGET BASE //
/////////////////
/**
 * A trivial base class which just defines the '$widget' identifier type. Subtypes of
 * widget are responsible for adding whatever metadata is relevant. If you want your widget
 * to have rendering functionality (which you probably do), you should extend `RenderWidget`.
 */
class Widget {
  constructor($widget) {
    this.$widget = $widget;
  }
}
/** A trivial widget which renders a (key, value) pair, and allows accessing the key and value. */
class ListPairWidget extends Widget {
  constructor(key, value) {
    super("dataview:list-pair");
    this.key = key;
    this.value = value;
  }
  markdown() {
    return `${Values.toString(this.key)}: ${Values.toString(this.value)}`;
  }
}
/** A simple widget which renders an external link. */
class ExternalLinkWidget extends Widget {
  constructor(url, display) {
    super("dataview:external-link");
    this.url = url;
    this.display = display;
  }
  markdown() {
    var _a;
    return `[${
      (_a = this.display) !== null && _a !== void 0 ? _a : this.url
    }](${this.url})`;
  }
}
var Widgets;
(function (Widgets) {
  /** Create a list pair widget matching the given key and value. */
  function listPair(key, value) {
    return new ListPairWidget(key, value);
  }
  Widgets.listPair = listPair;
  /** Create an external link widget which renders an external Obsidian link. */
  function externalLink(url, display) {
    return new ExternalLinkWidget(url, display);
  }
  Widgets.externalLink = externalLink;
  /** Checks if the given widget is a list pair widget. */
  function isListPair(widget) {
    return widget.$widget === "dataview:list-pair";
  }
  Widgets.isListPair = isListPair;
  function isExternalLink(widget) {
    return widget.$widget === "dataview:external-link";
  }
  Widgets.isExternalLink = isExternalLink;
  /** Determines if the given widget is any kind of built-in widget with special rendering handling. */
  function isBuiltin(widget) {
    return isListPair(widget) || isExternalLink(widget);
  }
  Widgets.isBuiltin = isBuiltin;
})(Widgets || (Widgets = {}));

/** Implementation of DataArray, minus the dynamic variable access, which is implemented via proxy. */
class DataArrayImpl {
  constructor(values, settings, defaultComparator = Values.compareValue) {
    this.values = values;
    this.settings = settings;
    this.defaultComparator = defaultComparator;
    this.length = values.length;
  }
  static wrap(arr, settings, defaultComparator = Values.compareValue) {
    return new Proxy(
      new DataArrayImpl(arr, settings, defaultComparator),
      DataArrayImpl.ARRAY_PROXY
    );
  }
  lwrap(values) {
    return DataArrayImpl.wrap(values, this.settings, this.defaultComparator);
  }
  where(predicate) {
    return this.lwrap(this.values.filter(predicate));
  }
  filter(predicate) {
    return this.where(predicate);
  }
  map(f) {
    return this.lwrap(this.values.map(f));
  }
  flatMap(f) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
      let value = f(this.values[index], index, this.values);
      if (!value || value.length == 0) continue;
      for (let r of value) result.push(r);
    }
    return this.lwrap(result);
  }
  mutate(f) {
    for (let index = 0; index < this.values.length; index++) {
      f(this.values[index], index, this.values);
    }
    return this;
  }
  limit(count) {
    return this.lwrap(this.values.slice(0, count));
  }
  slice(start, end) {
    return this.lwrap(this.values.slice(start, end));
  }
  concat(other) {
    return this.lwrap(this.values.concat(other.values));
  }
  /** Return the first index of the given (optionally starting the search) */
  indexOf(element, fromIndex) {
    return this.findIndex(
      (e) => this.defaultComparator(e, element) == 0,
      fromIndex
    );
  }
  /** Return the first element that satisfies the given predicate. */
  find(pred) {
    let index = this.findIndex(pred);
    if (index == -1) return undefined;
    else return this.values[index];
  }
  findIndex(pred, fromIndex) {
    for (
      let index = fromIndex !== null && fromIndex !== void 0 ? fromIndex : 0;
      index < this.length;
      index++
    ) {
      if (pred(this.values[index], index, this.values)) return index;
    }
    return -1;
  }
  includes(element) {
    return this.indexOf(element, 0) != -1;
  }
  join(sep) {
    return this.map((s) => Values.toString(s, this.settings))
      .array()
      .join(sep !== null && sep !== void 0 ? sep : ", ");
  }
  sort(key, direction, comparator) {
    if (this.values.length == 0) return this;
    let realComparator =
      comparator !== null && comparator !== void 0
        ? comparator
        : this.defaultComparator;
    let realKey = key !== null && key !== void 0 ? key : (l) => l;
    // Associate each entry with it's index for the key function, and then do a normal sort.
    let copy = [].concat(this.array()).map((elem, index) => {
      return { index: index, value: elem };
    });
    copy.sort((a, b) => {
      let aKey = realKey(a.value, a.index, this.values);
      let bKey = realKey(b.value, b.index, this.values);
      return direction === "desc"
        ? -realComparator(aKey, bKey)
        : realComparator(aKey, bKey);
    });
    return this.lwrap(copy.map((e) => e.value));
  }
  sortInPlace(key, direction, comparator) {
    if (this.values.length == 0) return this;
    let realComparator =
      comparator !== null && comparator !== void 0
        ? comparator
        : this.defaultComparator;
    let realKey = key !== null && key !== void 0 ? key : (l) => l;
    this.values.sort((a, b) => {
      let aKey = realKey(a);
      let bKey = realKey(b);
      return direction == "desc"
        ? -realComparator(aKey, bKey)
        : realComparator(aKey, bKey);
    });
    return this;
  }
  groupBy(key, comparator) {
    if (this.values.length == 0) return this.lwrap([]);
    // JavaScript sucks and we can't make hash maps over arbitrary types (only strings/ints), so
    // we do a poor man algorithm where we SORT, followed by grouping.
    let intermediate = this.sort(key, "asc", comparator);
    comparator =
      comparator !== null && comparator !== void 0
        ? comparator
        : this.defaultComparator;
    let result = [];
    let currentRow = [intermediate[0]];
    let current = key(intermediate[0], 0, intermediate.values);
    for (let index = 1; index < intermediate.length; index++) {
      let newKey = key(intermediate[index], index, intermediate.values);
      if (comparator(current, newKey) != 0) {
        result.push({ key: current, rows: this.lwrap(currentRow) });
        current = newKey;
        currentRow = [intermediate[index]];
      } else {
        currentRow.push(intermediate[index]);
      }
    }
    result.push({ key: current, rows: this.lwrap(currentRow) });
    return this.lwrap(result);
  }
  groupIn(key, comparator) {
    if (Groupings.isGrouping(this.values)) {
      return this.map((v) => {
        return {
          key: v.key,
          rows: DataArray.wrap(v.rows, this.settings).groupIn(key, comparator),
        };
      });
    } else {
      return this.groupBy(key, comparator);
    }
  }
  distinct(key, comparator) {
    if (this.values.length == 0) return this;
    let realKey = key !== null && key !== void 0 ? key : (x) => x;
    // For similar reasons to groupBy, do a sort and take the first element of each block.
    let intermediate = this.map((x, index) => {
      return { key: realKey(x, index, this.values), value: x };
    }).sort((x) => x.key, "asc", comparator);
    comparator =
      comparator !== null && comparator !== void 0
        ? comparator
        : this.defaultComparator;
    let result = [intermediate[0].value];
    for (let index = 1; index < intermediate.length; index++) {
      if (
        comparator(intermediate[index - 1].key, intermediate[index].key) != 0
      ) {
        result.push(intermediate[index].value);
      }
    }
    return this.lwrap(result);
  }
  every(f) {
    return this.values.every(f);
  }
  some(f) {
    return this.values.some(f);
  }
  none(f) {
    return this.values.every((v, i, a) => !f(v, i, a));
  }
  first() {
    return this.values.length > 0 ? this.values[0] : undefined;
  }
  last() {
    return this.values.length > 0
      ? this.values[this.values.length - 1]
      : undefined;
  }
  to(key) {
    let result = [];
    for (let child of this.values) {
      let value = child[key];
      if (value === undefined || value === null) continue;
      if (Array.isArray(value) || DataArray.isDataArray(value))
        value.forEach((v) => result.push(v));
      else result.push(value);
    }
    return this.lwrap(result);
  }
  into(key) {
    let result = [];
    for (let child of this.values) {
      let value = child[key];
      if (value === undefined || value === null) continue;
      result.push(value);
    }
    return this.lwrap(result);
  }
  expand(key) {
    let result = [];
    let queue = [].concat(this.values);
    while (queue.length > 0) {
      let next = queue.pop();
      let value = next[key];
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) value.forEach((v) => queue.push(v));
      else if (value instanceof DataArrayImpl)
        value.forEach((v) => queue.push(v));
      else queue.push(value);
      result.push(next);
    }
    return this.lwrap(result);
  }
  forEach(f) {
    for (let index = 0; index < this.values.length; index++) {
      f(this.values[index], index, this.values);
    }
  }
  array() {
    return [].concat(this.values);
  }
  [Symbol.iterator]() {
    return this.values[Symbol.iterator]();
  }
  toString() {
    return "[" + this.values.join(", ") + "]";
  }
}
DataArrayImpl.ARRAY_FUNCTIONS = new Set([
  "where",
  "filter",
  "map",
  "flatMap",
  "mutate",
  "slice",
  "concat",
  "indexOf",
  "limit",
  "find",
  "findIndex",
  "includes",
  "join",
  "sort",
  "sortInPlace",
  "groupBy",
  "groupIn",
  "distinct",
  "every",
  "some",
  "none",
  "first",
  "last",
  "to",
  "into",
  "lwrap",
  "expand",
  "forEach",
  "length",
  "values",
  "array",
  "defaultComparator",
  "toString",
  "settings",
]);
DataArrayImpl.ARRAY_PROXY = {
  get: function (target, prop, reciever) {
    if (typeof prop === "symbol") return target[prop];
    else if (typeof prop === "number") return target.values[prop];
    else if (prop === "constructor") return target.values.constructor;
    else if (!isNaN(parseInt(prop))) return target.values[parseInt(prop)];
    else if (DataArrayImpl.ARRAY_FUNCTIONS.has(prop.toString()))
      return target[prop.toString()];
    return target.to(prop);
  },
};
/** Provides utility functions for generating data arrays. */
var DataArray;
(function (DataArray) {
  /** Create a new Dataview data array. */
  function wrap(raw, settings) {
    if (isDataArray(raw)) return raw;
    return DataArrayImpl.wrap(raw, settings);
  }
  DataArray.wrap = wrap;
  /** Create a new DataArray from an iterable object. */
  function from(raw, settings) {
    if (isDataArray(raw)) return raw;
    let data = [];
    for (let elem of raw) data.push(elem);
    return DataArrayImpl.wrap(data, settings);
  }
  DataArray.from = from;
  /** Return true if the given object is a data array. */
  function isDataArray(obj) {
    return obj instanceof DataArrayImpl;
  }
  DataArray.isDataArray = isDataArray;
})(DataArray || (DataArray = {}));
// A scary looking polyfill, sure, but it fixes up data array/array interop for us.
const oldArrayIsArray = Array.isArray;
Array.isArray = (arg) => {
  return oldArrayIsArray(arg) || DataArray.isDataArray(arg);
};

/** Test-environment-friendly function which fetches the current system locale. */
function currentLocale() {
  if (typeof window === "undefined") return "en-US";
  return window.navigator.language;
}

/** Render simple fields compactly, removing wrapping content like paragraph and span. */
async function renderCompactMarkdown(
  markdown,
  container,
  sourcePath,
  component
) {
  let subcontainer = container.createSpan();
  await obsidian.MarkdownRenderer.renderMarkdown(
    markdown,
    subcontainer,
    sourcePath,
    component
  );
  let paragraph = subcontainer.querySelector(":scope > p");
  if (subcontainer.children.length == 1 && paragraph) {
    while (paragraph.firstChild) {
      subcontainer.appendChild(paragraph.firstChild);
    }
    subcontainer.removeChild(paragraph);
  }
}
/** Render a pre block with an error in it; returns the element to allow for dynamic updating. */
function renderErrorPre(container, error) {
  let pre = container.createEl("pre", { cls: ["dataview", "dataview-error"] });
  pre.appendText(error);
  return pre;
}
/** Render a static codeblock. */
function renderCodeBlock(container, source, language) {
  let code = container.createEl("code", { cls: ["dataview"] });
  if (language) code.classList.add("language-" + language);
  code.appendText(source);
  return code;
}
/** Prettily render a value into a container with the given settings. */
async function renderValue(
  field,
  container,
  originFile,
  component,
  settings,
  expandList = false,
  context = "root",
  depth = 0
) {
  var _a, _b, _c;
  // Prevent infinite recursion.
  if (depth > settings.maxRecursiveRenderDepth) {
    container.appendText("...");
    return;
  }
  if (Values.isNull(field)) {
    await renderCompactMarkdown(
      settings.renderNullAs,
      container,
      originFile,
      component
    );
  } else if (Values.isDate(field)) {
    container.appendText(renderMinimalDate(field, settings, currentLocale()));
  } else if (Values.isDuration(field)) {
    container.appendText(renderMinimalDuration(field));
  } else if (
    Values.isString(field) ||
    Values.isBoolean(field) ||
    Values.isNumber(field)
  ) {
    await renderCompactMarkdown("" + field, container, originFile, component);
  } else if (Values.isLink(field)) {
    await renderCompactMarkdown(
      field.markdown(),
      container,
      originFile,
      component
    );
  } else if (Values.isHtml(field)) {
    container.appendChild(field);
  } else if (Values.isWidget(field)) {
    if (Widgets.isListPair(field)) {
      await renderValue(
        field.key,
        container,
        originFile,
        component,
        settings,
        expandList,
        context,
        depth
      );
      container.appendText(": ");
      await renderValue(
        field.value,
        container,
        originFile,
        component,
        settings,
        expandList,
        context,
        depth
      );
    } else if (Widgets.isExternalLink(field)) {
      let elem = document.createElement("a");
      elem.textContent =
        (_a = field.display) !== null && _a !== void 0 ? _a : field.url;
      elem.rel = "noopener";
      elem.target = "_blank";
      elem.classList.add("external-link");
      elem.href = field.url;
      container.appendChild(elem);
    } else {
      container.appendText(`<unknown widget '${field.$widget}>`);
    }
  } else if (Values.isFunction(field)) {
    container.appendText("<function>");
  } else if (Values.isArray(field) || DataArray.isDataArray(field)) {
    if (expandList) {
      let list = container.createEl("ul", {
        cls: [
          "dataview",
          "dataview-ul",
          context == "list"
            ? "dataview-result-list-ul"
            : "dataview-result-list-root-ul",
        ],
      });
      for (let child of field) {
        let li = list.createEl("li", { cls: "dataview-result-list-li" });
        await renderValue(
          child,
          li,
          originFile,
          component,
          settings,
          expandList,
          "list",
          depth + 1
        );
      }
    } else {
      if (field.length == 0) {
        container.appendText("<empty list>");
        return;
      }
      let span = container.createEl("span", {
        cls: ["dataview", "dataview-result-list-span"],
      });
      let first = true;
      for (let val of field) {
        if (first) first = false;
        else span.appendText(", ");
        await renderValue(
          val,
          span,
          originFile,
          component,
          settings,
          expandList,
          "list",
          depth + 1
        );
      }
    }
  } else if (Values.isObject(field)) {
    // Don't render classes in case they have recursive references; spoopy.
    if (
      ((_b =
        field === null || field === void 0 ? void 0 : field.constructor) ===
        null || _b === void 0
        ? void 0
        : _b.name) &&
      ((_c =
        field === null || field === void 0 ? void 0 : field.constructor) ===
        null || _c === void 0
        ? void 0
        : _c.name) != "Object"
    ) {
      container.appendText(`<${field.constructor.name}>`);
      return;
    }
    if (expandList) {
      let list = container.createEl("ul", {
        cls: ["dataview", "dataview-ul", "dataview-result-object-ul"],
      });
      for (let [key, value] of Object.entries(field)) {
        let li = list.createEl("li", {
          cls: ["dataview", "dataview-li", "dataview-result-object-li"],
        });
        li.appendText(key + ": ");
        await renderValue(
          value,
          li,
          originFile,
          component,
          settings,
          expandList,
          "list",
          depth + 1
        );
      }
    } else {
      if (Object.keys(field).length == 0) {
        container.appendText("<empty object>");
        return;
      }
      let span = container.createEl("span", {
        cls: ["dataview", "dataview-result-object-span"],
      });
      let first = true;
      for (let [key, value] of Object.entries(field)) {
        if (first) first = false;
        else span.appendText(", ");
        span.appendText(key + ": ");
        await renderValue(
          value,
          span,
          originFile,
          component,
          settings,
          expandList,
          "list",
          depth + 1
        );
      }
    }
  } else {
    container.appendText("Unrecognized: " + JSON.stringify(field));
  }
}

var papaparse_min = { exports: {} };

/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/

(function (module, exports) {
  !(function (e, t) {
    module.exports = t();
  })(commonjsGlobal, function s() {
    var f =
      "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : void 0 !== f
        ? f
        : {};
    var n = !f.document && !!f.postMessage,
      o = n && /blob:/i.test((f.location || {}).protocol),
      a = {},
      h = 0,
      b = {
        parse: function (e, t) {
          var i = (t = t || {}).dynamicTyping || !1;
          M(i) && ((t.dynamicTypingFunction = i), (i = {}));
          if (
            ((t.dynamicTyping = i),
            (t.transform = !!M(t.transform) && t.transform),
            t.worker && b.WORKERS_SUPPORTED)
          ) {
            var r = (function () {
              if (!b.WORKERS_SUPPORTED) return !1;
              var e =
                  ((i = f.URL || f.webkitURL || null),
                  (r = s.toString()),
                  b.BLOB_URL ||
                    (b.BLOB_URL = i.createObjectURL(
                      new Blob(["(", r, ")();"], { type: "text/javascript" })
                    ))),
                t = new f.Worker(e);
              var i, r;
              return (t.onmessage = _), (t.id = h++), (a[t.id] = t);
            })();
            return (
              (r.userStep = t.step),
              (r.userChunk = t.chunk),
              (r.userComplete = t.complete),
              (r.userError = t.error),
              (t.step = M(t.step)),
              (t.chunk = M(t.chunk)),
              (t.complete = M(t.complete)),
              (t.error = M(t.error)),
              delete t.worker,
              void r.postMessage({ input: e, config: t, workerId: r.id })
            );
          }
          var n = null;
          b.NODE_STREAM_INPUT,
            "string" == typeof e
              ? (n = t.download ? new l(t) : new p(t))
              : !0 === e.readable && M(e.read) && M(e.on)
              ? (n = new g(t))
              : ((f.File && e instanceof File) || e instanceof Object) &&
                (n = new c(t));
          return n.stream(e);
        },
        unparse: function (e, t) {
          var n = !1,
            _ = !0,
            m = ",",
            y = "\r\n",
            s = '"',
            a = s + s,
            i = !1,
            r = null,
            o = !1;
          !(function () {
            if ("object" != typeof t) return;
            "string" != typeof t.delimiter ||
              b.BAD_DELIMITERS.filter(function (e) {
                return -1 !== t.delimiter.indexOf(e);
              }).length ||
              (m = t.delimiter);
            ("boolean" == typeof t.quotes ||
              "function" == typeof t.quotes ||
              Array.isArray(t.quotes)) &&
              (n = t.quotes);
            ("boolean" != typeof t.skipEmptyLines &&
              "string" != typeof t.skipEmptyLines) ||
              (i = t.skipEmptyLines);
            "string" == typeof t.newline && (y = t.newline);
            "string" == typeof t.quoteChar && (s = t.quoteChar);
            "boolean" == typeof t.header && (_ = t.header);
            if (Array.isArray(t.columns)) {
              if (0 === t.columns.length)
                throw new Error("Option columns is empty");
              r = t.columns;
            }
            void 0 !== t.escapeChar && (a = t.escapeChar + s);
            ("boolean" == typeof t.escapeFormulae ||
              t.escapeFormulae instanceof RegExp) &&
              (o =
                t.escapeFormulae instanceof RegExp
                  ? t.escapeFormulae
                  : /^[=+\-@\t\r].*$/);
          })();
          var h = new RegExp(j(s), "g");
          "string" == typeof e && (e = JSON.parse(e));
          if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
          } else if ("object" == typeof e)
            return (
              "string" == typeof e.data && (e.data = JSON.parse(e.data)),
              Array.isArray(e.data) &&
                (e.fields || (e.fields = (e.meta && e.meta.fields) || r),
                e.fields ||
                  (e.fields = Array.isArray(e.data[0])
                    ? e.fields
                    : "object" == typeof e.data[0]
                    ? Object.keys(e.data[0])
                    : []),
                Array.isArray(e.data[0]) ||
                  "object" == typeof e.data[0] ||
                  (e.data = [e.data])),
              u(e.fields || [], e.data || [], i)
            );
          throw new Error("Unable to serialize unrecognized input");
          function u(e, t, i) {
            var r = "";
            "string" == typeof e && (e = JSON.parse(e)),
              "string" == typeof t && (t = JSON.parse(t));
            var n = Array.isArray(e) && 0 < e.length,
              s = !Array.isArray(t[0]);
            if (n && _) {
              for (var a = 0; a < e.length; a++)
                0 < a && (r += m), (r += v(e[a], a));
              0 < t.length && (r += y);
            }
            for (var o = 0; o < t.length; o++) {
              var h = n ? e.length : t[o].length,
                u = !1,
                f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
              if (
                (i &&
                  !n &&
                  (u =
                    "greedy" === i
                      ? "" === t[o].join("").trim()
                      : 1 === t[o].length && 0 === t[o][0].length),
                "greedy" === i && n)
              ) {
                for (var d = [], l = 0; l < h; l++) {
                  var c = s ? e[l] : l;
                  d.push(t[o][c]);
                }
                u = "" === d.join("").trim();
              }
              if (!u) {
                for (var p = 0; p < h; p++) {
                  0 < p && !f && (r += m);
                  var g = n && s ? e[p] : p;
                  r += v(t[o][g], p);
                }
                o < t.length - 1 && (!i || (0 < h && !f)) && (r += y);
              }
            }
            return r;
          }
          function v(e, t) {
            if (null == e) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
            var i = !1;
            o && "string" == typeof e && o.test(e) && ((e = "'" + e), (i = !0));
            var r = e.toString().replace(h, a);
            return (i =
              i ||
              !0 === n ||
              ("function" == typeof n && n(e, t)) ||
              (Array.isArray(n) && n[t]) ||
              (function (e, t) {
                for (var i = 0; i < t.length; i++)
                  if (-1 < e.indexOf(t[i])) return !0;
                return !1;
              })(r, b.BAD_DELIMITERS) ||
              -1 < r.indexOf(m) ||
              " " === r.charAt(0) ||
              " " === r.charAt(r.length - 1))
              ? s + r + s
              : r;
          }
        },
      };
    if (
      ((b.RECORD_SEP = String.fromCharCode(30)),
      (b.UNIT_SEP = String.fromCharCode(31)),
      (b.BYTE_ORDER_MARK = "\ufeff"),
      (b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK]),
      (b.WORKERS_SUPPORTED = !n && !!f.Worker),
      (b.NODE_STREAM_INPUT = 1),
      (b.LocalChunkSize = 10485760),
      (b.RemoteChunkSize = 5242880),
      (b.DefaultDelimiter = ","),
      (b.Parser = E),
      (b.ParserHandle = i),
      (b.NetworkStreamer = l),
      (b.FileStreamer = c),
      (b.StringStreamer = p),
      (b.ReadableStreamStreamer = g),
      f.jQuery)
    ) {
      var d = f.jQuery;
      d.fn.parse = function (o) {
        var i = o.config || {},
          h = [];
        return (
          this.each(function (e) {
            if (
              !(
                "INPUT" === d(this).prop("tagName").toUpperCase() &&
                "file" === d(this).attr("type").toLowerCase() &&
                f.FileReader
              ) ||
              !this.files ||
              0 === this.files.length
            )
              return !0;
            for (var t = 0; t < this.files.length; t++)
              h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i),
              });
          }),
          e(),
          this
        );
        function e() {
          if (0 !== h.length) {
            var e,
              t,
              i,
              r,
              n = h[0];
            if (M(o.before)) {
              var s = o.before(n.file, n.inputElem);
              if ("object" == typeof s) {
                if ("abort" === s.action)
                  return (
                    (e = "AbortError"),
                    (t = n.file),
                    (i = n.inputElem),
                    (r = s.reason),
                    void (M(o.error) && o.error({ name: e }, t, i, r))
                  );
                if ("skip" === s.action) return void u();
                "object" == typeof s.config &&
                  (n.instanceConfig = d.extend(n.instanceConfig, s.config));
              } else if ("skip" === s) return void u();
            }
            var a = n.instanceConfig.complete;
            (n.instanceConfig.complete = function (e) {
              M(a) && a(e, n.file, n.inputElem), u();
            }),
              b.parse(n.file, n.instanceConfig);
          } else M(o.complete) && o.complete();
        }
        function u() {
          h.splice(0, 1), e();
        }
      };
    }
    function u(e) {
      (this._handle = null),
        (this._finished = !1),
        (this._completed = !1),
        (this._halted = !1),
        (this._input = null),
        (this._baseIndex = 0),
        (this._partialLine = ""),
        (this._rowCount = 0),
        (this._start = 0),
        (this._nextChunk = null),
        (this.isFirstChunk = !0),
        (this._completeResults = { data: [], errors: [], meta: {} }),
        function (e) {
          var t = w(e);
          (t.chunkSize = parseInt(t.chunkSize)),
            e.step || e.chunk || (t.chunkSize = null);
          (this._handle = new i(t)),
            ((this._handle.streamer = this)._config = t);
        }.call(this, e),
        (this.parseChunk = function (e, t) {
          if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
            var i = this._config.beforeFirstChunk(e);
            void 0 !== i && (e = i);
          }
          (this.isFirstChunk = !1), (this._halted = !1);
          var r = this._partialLine + e;
          this._partialLine = "";
          var n = this._handle.parse(r, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var s = n.meta.cursor;
            this._finished ||
              ((this._partialLine = r.substring(s - this._baseIndex)),
              (this._baseIndex = s)),
              n && n.data && (this._rowCount += n.data.length);
            var a =
              this._finished ||
              (this._config.preview && this._rowCount >= this._config.preview);
            if (o)
              f.postMessage({ results: n, workerId: b.WORKER_ID, finished: a });
            else if (M(this._config.chunk) && !t) {
              if (
                (this._config.chunk(n, this._handle),
                this._handle.paused() || this._handle.aborted())
              )
                return void (this._halted = !0);
              (n = void 0), (this._completeResults = void 0);
            }
            return (
              this._config.step ||
                this._config.chunk ||
                ((this._completeResults.data =
                  this._completeResults.data.concat(n.data)),
                (this._completeResults.errors =
                  this._completeResults.errors.concat(n.errors)),
                (this._completeResults.meta = n.meta)),
              this._completed ||
                !a ||
                !M(this._config.complete) ||
                (n && n.meta.aborted) ||
                (this._config.complete(this._completeResults, this._input),
                (this._completed = !0)),
              a || (n && n.meta.paused) || this._nextChunk(),
              n
            );
          }
          this._halted = !0;
        }),
        (this._sendError = function (e) {
          M(this._config.error)
            ? this._config.error(e)
            : o &&
              this._config.error &&
              f.postMessage({ workerId: b.WORKER_ID, error: e, finished: !1 });
        });
    }
    function l(e) {
      var r;
      (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize),
        u.call(this, e),
        (this._nextChunk = n
          ? function () {
              this._readChunk(), this._chunkLoaded();
            }
          : function () {
              this._readChunk();
            }),
        (this.stream = function (e) {
          (this._input = e), this._nextChunk();
        }),
        (this._readChunk = function () {
          if (this._finished) this._chunkLoaded();
          else {
            if (
              ((r = new XMLHttpRequest()),
              this._config.withCredentials &&
                (r.withCredentials = this._config.withCredentials),
              n ||
                ((r.onload = v(this._chunkLoaded, this)),
                (r.onerror = v(this._chunkError, this))),
              r.open(
                this._config.downloadRequestBody ? "POST" : "GET",
                this._input,
                !n
              ),
              this._config.downloadRequestHeaders)
            ) {
              var e = this._config.downloadRequestHeaders;
              for (var t in e) r.setRequestHeader(t, e[t]);
            }
            if (this._config.chunkSize) {
              var i = this._start + this._config.chunkSize - 1;
              r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
            }
            try {
              r.send(this._config.downloadRequestBody);
            } catch (e) {
              this._chunkError(e.message);
            }
            n && 0 === r.status && this._chunkError();
          }
        }),
        (this._chunkLoaded = function () {
          4 === r.readyState &&
            (r.status < 200 || 400 <= r.status
              ? this._chunkError()
              : ((this._start += this._config.chunkSize
                  ? this._config.chunkSize
                  : r.responseText.length),
                (this._finished =
                  !this._config.chunkSize ||
                  this._start >=
                    (function (e) {
                      var t = e.getResponseHeader("Content-Range");
                      if (null === t) return -1;
                      return parseInt(t.substring(t.lastIndexOf("/") + 1));
                    })(r)),
                this.parseChunk(r.responseText)));
        }),
        (this._chunkError = function (e) {
          var t = r.statusText || e;
          this._sendError(new Error(t));
        });
    }
    function c(e) {
      var r, n;
      (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize),
        u.call(this, e);
      var s = "undefined" != typeof FileReader;
      (this.stream = function (e) {
        (this._input = e),
          (n = e.slice || e.webkitSlice || e.mozSlice),
          s
            ? (((r = new FileReader()).onload = v(this._chunkLoaded, this)),
              (r.onerror = v(this._chunkError, this)))
            : (r = new FileReaderSync()),
          this._nextChunk();
      }),
        (this._nextChunk = function () {
          this._finished ||
            (this._config.preview &&
              !(this._rowCount < this._config.preview)) ||
            this._readChunk();
        }),
        (this._readChunk = function () {
          var e = this._input;
          if (this._config.chunkSize) {
            var t = Math.min(
              this._start + this._config.chunkSize,
              this._input.size
            );
            e = n.call(e, this._start, t);
          }
          var i = r.readAsText(e, this._config.encoding);
          s || this._chunkLoaded({ target: { result: i } });
        }),
        (this._chunkLoaded = function (e) {
          (this._start += this._config.chunkSize),
            (this._finished =
              !this._config.chunkSize || this._start >= this._input.size),
            this.parseChunk(e.target.result);
        }),
        (this._chunkError = function () {
          this._sendError(r.error);
        });
    }
    function p(e) {
      var i;
      u.call(this, (e = e || {})),
        (this.stream = function (e) {
          return (i = e), this._nextChunk();
        }),
        (this._nextChunk = function () {
          if (!this._finished) {
            var e,
              t = this._config.chunkSize;
            return (
              t
                ? ((e = i.substring(0, t)), (i = i.substring(t)))
                : ((e = i), (i = "")),
              (this._finished = !i),
              this.parseChunk(e)
            );
          }
        });
    }
    function g(e) {
      u.call(this, (e = e || {}));
      var t = [],
        i = !0,
        r = !1;
      (this.pause = function () {
        u.prototype.pause.apply(this, arguments), this._input.pause();
      }),
        (this.resume = function () {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }),
        (this.stream = function (e) {
          (this._input = e),
            this._input.on("data", this._streamData),
            this._input.on("end", this._streamEnd),
            this._input.on("error", this._streamError);
        }),
        (this._checkIsFinished = function () {
          r && 1 === t.length && (this._finished = !0);
        }),
        (this._nextChunk = function () {
          this._checkIsFinished(),
            t.length ? this.parseChunk(t.shift()) : (i = !0);
        }),
        (this._streamData = v(function (e) {
          try {
            t.push(
              "string" == typeof e ? e : e.toString(this._config.encoding)
            ),
              i &&
                ((i = !1), this._checkIsFinished(), this.parseChunk(t.shift()));
          } catch (e) {
            this._streamError(e);
          }
        }, this)),
        (this._streamError = v(function (e) {
          this._streamCleanUp(), this._sendError(e);
        }, this)),
        (this._streamEnd = v(function () {
          this._streamCleanUp(), (r = !0), this._streamData("");
        }, this)),
        (this._streamCleanUp = v(function () {
          this._input.removeListener("data", this._streamData),
            this._input.removeListener("end", this._streamEnd),
            this._input.removeListener("error", this._streamError);
        }, this));
    }
    function i(m) {
      var a,
        o,
        h,
        r = Math.pow(2, 53),
        n = -r,
        s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        u =
          /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,
        t = this,
        i = 0,
        f = 0,
        d = !1,
        e = !1,
        l = [],
        c = { data: [], errors: [], meta: {} };
      if (M(m.step)) {
        var p = m.step;
        m.step = function (e) {
          if (((c = e), _())) g();
          else {
            if ((g(), 0 === c.data.length)) return;
            (i += e.data.length),
              m.preview && i > m.preview
                ? o.abort()
                : ((c.data = c.data[0]), p(c, t));
          }
        };
      }
      function y(e) {
        return "greedy" === m.skipEmptyLines
          ? "" === e.join("").trim()
          : 1 === e.length && 0 === e[0].length;
      }
      function g() {
        return (
          c &&
            h &&
            (k(
              "Delimiter",
              "UndetectableDelimiter",
              "Unable to auto-detect delimiting character; defaulted to '" +
                b.DefaultDelimiter +
                "'"
            ),
            (h = !1)),
          m.skipEmptyLines &&
            (c.data = c.data.filter(function (e) {
              return !y(e);
            })),
          _() &&
            (function () {
              if (!c) return;
              function e(e, t) {
                M(m.transformHeader) && (e = m.transformHeader(e, t)),
                  l.push(e);
              }
              if (Array.isArray(c.data[0])) {
                for (var t = 0; _() && t < c.data.length; t++)
                  c.data[t].forEach(e);
                c.data.splice(0, 1);
              } else c.data.forEach(e);
            })(),
          (function () {
            if (!c || (!m.header && !m.dynamicTyping && !m.transform)) return c;
            function e(e, t) {
              var i,
                r = m.header ? {} : [];
              for (i = 0; i < e.length; i++) {
                var n = i,
                  s = e[i];
                m.header && (n = i >= l.length ? "__parsed_extra" : l[i]),
                  m.transform && (s = m.transform(s, n)),
                  (s = v(n, s)),
                  "__parsed_extra" === n
                    ? ((r[n] = r[n] || []), r[n].push(s))
                    : (r[n] = s);
              }
              return (
                m.header &&
                  (i > l.length
                    ? k(
                        "FieldMismatch",
                        "TooManyFields",
                        "Too many fields: expected " +
                          l.length +
                          " fields but parsed " +
                          i,
                        f + t
                      )
                    : i < l.length &&
                      k(
                        "FieldMismatch",
                        "TooFewFields",
                        "Too few fields: expected " +
                          l.length +
                          " fields but parsed " +
                          i,
                        f + t
                      )),
                r
              );
            }
            var t = 1;
            !c.data.length || Array.isArray(c.data[0])
              ? ((c.data = c.data.map(e)), (t = c.data.length))
              : (c.data = e(c.data, 0));
            m.header && c.meta && (c.meta.fields = l);
            return (f += t), c;
          })()
        );
      }
      function _() {
        return m.header && 0 === l.length;
      }
      function v(e, t) {
        return (
          (i = e),
          m.dynamicTypingFunction &&
            void 0 === m.dynamicTyping[i] &&
            (m.dynamicTyping[i] = m.dynamicTypingFunction(i)),
          !0 === (m.dynamicTyping[i] || m.dynamicTyping)
            ? "true" === t ||
              "TRUE" === t ||
              ("false" !== t &&
                "FALSE" !== t &&
                ((function (e) {
                  if (s.test(e)) {
                    var t = parseFloat(e);
                    if (n < t && t < r) return !0;
                  }
                  return !1;
                })(t)
                  ? parseFloat(t)
                  : u.test(t)
                  ? new Date(t)
                  : "" === t
                  ? null
                  : t))
            : t
        );
        var i;
      }
      function k(e, t, i, r) {
        var n = { type: e, code: t, message: i };
        void 0 !== r && (n.row = r), c.errors.push(n);
      }
      (this.parse = function (e, t, i) {
        var r = m.quoteChar || '"';
        if (
          (m.newline ||
            (m.newline = (function (e, t) {
              e = e.substring(0, 1048576);
              var i = new RegExp(j(t) + "([^]*?)" + j(t), "gm"),
                r = (e = e.replace(i, "")).split("\r"),
                n = e.split("\n"),
                s = 1 < n.length && n[0].length < r[0].length;
              if (1 === r.length || s) return "\n";
              for (var a = 0, o = 0; o < r.length; o++) "\n" === r[o][0] && a++;
              return a >= r.length / 2 ? "\r\n" : "\r";
            })(e, r)),
          (h = !1),
          m.delimiter)
        )
          M(m.delimiter) &&
            ((m.delimiter = m.delimiter(e)), (c.meta.delimiter = m.delimiter));
        else {
          var n = (function (e, t, i, r, n) {
            var s, a, o, h;
            n = n || [",", "\t", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
            for (var u = 0; u < n.length; u++) {
              var f = n[u],
                d = 0,
                l = 0,
                c = 0;
              o = void 0;
              for (
                var p = new E({
                    comments: r,
                    delimiter: f,
                    newline: t,
                    preview: 10,
                  }).parse(e),
                  g = 0;
                g < p.data.length;
                g++
              )
                if (i && y(p.data[g])) c++;
                else {
                  var _ = p.data[g].length;
                  (l += _),
                    void 0 !== o
                      ? 0 < _ && ((d += Math.abs(_ - o)), (o = _))
                      : (o = _);
                }
              0 < p.data.length && (l /= p.data.length - c),
                (void 0 === a || d <= a) &&
                  (void 0 === h || h < l) &&
                  1.99 < l &&
                  ((a = d), (s = f), (h = l));
            }
            return { successful: !!(m.delimiter = s), bestDelimiter: s };
          })(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
          n.successful
            ? (m.delimiter = n.bestDelimiter)
            : ((h = !0), (m.delimiter = b.DefaultDelimiter)),
            (c.meta.delimiter = m.delimiter);
        }
        var s = w(m);
        return (
          m.preview && m.header && s.preview++,
          (a = e),
          (o = new E(s)),
          (c = o.parse(a, t, i)),
          g(),
          d ? { meta: { paused: !0 } } : c || { meta: { paused: !1 } }
        );
      }),
        (this.paused = function () {
          return d;
        }),
        (this.pause = function () {
          (d = !0),
            o.abort(),
            (a = M(m.chunk) ? "" : a.substring(o.getCharIndex()));
        }),
        (this.resume = function () {
          t.streamer._halted
            ? ((d = !1), t.streamer.parseChunk(a, !0))
            : setTimeout(t.resume, 3);
        }),
        (this.aborted = function () {
          return e;
        }),
        (this.abort = function () {
          (e = !0),
            o.abort(),
            (c.meta.aborted = !0),
            M(m.complete) && m.complete(c),
            (a = "");
        });
    }
    function j(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(e) {
      var S,
        O = (e = e || {}).delimiter,
        x = e.newline,
        I = e.comments,
        T = e.step,
        D = e.preview,
        A = e.fastMode,
        L = (S =
          void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar);
      if (
        (void 0 !== e.escapeChar && (L = e.escapeChar),
        ("string" != typeof O || -1 < b.BAD_DELIMITERS.indexOf(O)) && (O = ","),
        I === O)
      )
        throw new Error("Comment character same as delimiter");
      !0 === I
        ? (I = "#")
        : ("string" != typeof I || -1 < b.BAD_DELIMITERS.indexOf(I)) &&
          (I = !1),
        "\n" !== x && "\r" !== x && "\r\n" !== x && (x = "\n");
      var F = 0,
        z = !1;
      (this.parse = function (r, t, i) {
        if ("string" != typeof r) throw new Error("Input must be a string");
        var n = r.length,
          e = O.length,
          s = x.length,
          a = I.length,
          o = M(T),
          h = [],
          u = [],
          f = [],
          d = (F = 0);
        if (!r) return C();
        if (A || (!1 !== A && -1 === r.indexOf(S))) {
          for (var l = r.split(x), c = 0; c < l.length; c++) {
            if (((f = l[c]), (F += f.length), c !== l.length - 1))
              F += x.length;
            else if (i) return C();
            if (!I || f.substring(0, a) !== I) {
              if (o) {
                if (((h = []), k(f.split(O)), R(), z)) return C();
              } else k(f.split(O));
              if (D && D <= c) return (h = h.slice(0, D)), C(!0);
            }
          }
          return C();
        }
        for (
          var p = r.indexOf(O, F),
            g = r.indexOf(x, F),
            _ = new RegExp(j(L) + j(S), "g"),
            m = r.indexOf(S, F);
          ;

        )
          if (r[F] !== S)
            if (I && 0 === f.length && r.substring(F, F + a) === I) {
              if (-1 === g) return C();
              (F = g + s), (g = r.indexOf(x, F)), (p = r.indexOf(O, F));
            } else if (-1 !== p && (p < g || -1 === g))
              f.push(r.substring(F, p)), (F = p + e), (p = r.indexOf(O, F));
            else {
              if (-1 === g) break;
              if ((f.push(r.substring(F, g)), w(g + s), o && (R(), z)))
                return C();
              if (D && h.length >= D) return C(!0);
            }
          else
            for (m = F, F++; ; ) {
              if (-1 === (m = r.indexOf(S, m + 1)))
                return (
                  i ||
                    u.push({
                      type: "Quotes",
                      code: "MissingQuotes",
                      message: "Quoted field unterminated",
                      row: h.length,
                      index: F,
                    }),
                  E()
                );
              if (m === n - 1) return E(r.substring(F, m).replace(_, S));
              if (S !== L || r[m + 1] !== L) {
                if (S === L || 0 === m || r[m - 1] !== L) {
                  -1 !== p && p < m + 1 && (p = r.indexOf(O, m + 1)),
                    -1 !== g && g < m + 1 && (g = r.indexOf(x, m + 1));
                  var y = b(-1 === g ? p : Math.min(p, g));
                  if (r.substr(m + 1 + y, e) === O) {
                    f.push(r.substring(F, m).replace(_, S)),
                      r[(F = m + 1 + y + e)] !== S && (m = r.indexOf(S, F)),
                      (p = r.indexOf(O, F)),
                      (g = r.indexOf(x, F));
                    break;
                  }
                  var v = b(g);
                  if (r.substring(m + 1 + v, m + 1 + v + s) === x) {
                    if (
                      (f.push(r.substring(F, m).replace(_, S)),
                      w(m + 1 + v + s),
                      (p = r.indexOf(O, F)),
                      (m = r.indexOf(S, F)),
                      o && (R(), z))
                    )
                      return C();
                    if (D && h.length >= D) return C(!0);
                    break;
                  }
                  u.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: h.length,
                    index: F,
                  }),
                    m++;
                }
              } else m++;
            }
        return E();
        function k(e) {
          h.push(e), (d = F);
        }
        function b(e) {
          var t = 0;
          if (-1 !== e) {
            var i = r.substring(m + 1, e);
            i && "" === i.trim() && (t = i.length);
          }
          return t;
        }
        function E(e) {
          return (
            i ||
              (void 0 === e && (e = r.substring(F)),
              f.push(e),
              (F = n),
              k(f),
              o && R()),
            C()
          );
        }
        function w(e) {
          (F = e), k(f), (f = []), (g = r.indexOf(x, F));
        }
        function C(e) {
          return {
            data: h,
            errors: u,
            meta: {
              delimiter: O,
              linebreak: x,
              aborted: z,
              truncated: !!e,
              cursor: d + (t || 0),
            },
          };
        }
        function R() {
          T(C()), (h = []), (u = []);
        }
      }),
        (this.abort = function () {
          z = !0;
        }),
        (this.getCharIndex = function () {
          return F;
        });
    }
    function _(e) {
      var t = e.data,
        i = a[t.workerId],
        r = !1;
      if (t.error) i.userError(t.error, t.file);
      else if (t.results && t.results.data) {
        var n = {
          abort: function () {
            (r = !0),
              m(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          },
          pause: y,
          resume: y,
        };
        if (M(i.userStep)) {
          for (
            var s = 0;
            s < t.results.data.length &&
            (i.userStep(
              {
                data: t.results.data[s],
                errors: t.results.errors,
                meta: t.results.meta,
              },
              n
            ),
            !r);
            s++
          );
          delete t.results;
        } else
          M(i.userChunk) &&
            (i.userChunk(t.results, n, t.file), delete t.results);
      }
      t.finished && !r && m(t.workerId, t.results);
    }
    function m(e, t) {
      var i = a[e];
      M(i.userComplete) && i.userComplete(t), i.terminate(), delete a[e];
    }
    function y() {
      throw new Error("Not implemented.");
    }
    function w(e) {
      if ("object" != typeof e || null === e) return e;
      var t = Array.isArray(e) ? [] : {};
      for (var i in e) t[i] = w(e[i]);
      return t;
    }
    function v(e, t) {
      return function () {
        e.apply(t, arguments);
      };
    }
    function M(e) {
      return "function" == typeof e;
    }
    return (
      o &&
        (f.onmessage = function (e) {
          var t = e.data;
          void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
          if ("string" == typeof t.input)
            f.postMessage({
              workerId: b.WORKER_ID,
              results: b.parse(t.input, t.config),
              finished: !0,
            });
          else if (
            (f.File && t.input instanceof File) ||
            t.input instanceof Object
          ) {
            var i = b.parse(t.input, t.config);
            i &&
              f.postMessage({
                workerId: b.WORKER_ID,
                results: i,
                finished: !0,
              });
          }
        }),
      ((l.prototype = Object.create(u.prototype)).constructor = l),
      ((c.prototype = Object.create(u.prototype)).constructor = c),
      ((p.prototype = Object.create(p.prototype)).constructor = p),
      ((g.prototype = Object.create(u.prototype)).constructor = g),
      b
    );
  });
})(papaparse_min);

/** Utility methods for creating & comparing fields. */
var Fields;
(function (Fields) {
  function variable(name) {
    return { type: "variable", name };
  }
  Fields.variable = variable;
  function literal(value) {
    return { type: "literal", value };
  }
  Fields.literal = literal;
  function binaryOp(left, op, right) {
    return { type: "binaryop", left, op, right };
  }
  Fields.binaryOp = binaryOp;
  function index(obj, index) {
    return { type: "index", object: obj, index };
  }
  Fields.index = index;
  /** Converts a string in dot-notation-format into a variable which indexes. */
  function indexVariable(name) {
    let parts = name.split(".");
    let result = Fields.variable(parts[0]);
    for (let index = 1; index < parts.length; index++) {
      result = Fields.index(result, Fields.literal(parts[index]));
    }
    return result;
  }
  Fields.indexVariable = indexVariable;
  function lambda(args, value) {
    return { type: "lambda", arguments: args, value };
  }
  Fields.lambda = lambda;
  function func(func, args) {
    return { type: "function", func, arguments: args };
  }
  Fields.func = func;
  function list(values) {
    return { type: "list", values };
  }
  Fields.list = list;
  function object(values) {
    return { type: "object", values };
  }
  Fields.object = object;
  function negate(child) {
    return { type: "negated", child };
  }
  Fields.negate = negate;
  function isCompareOp(op) {
    return (
      op == "<=" ||
      op == "<" ||
      op == ">" ||
      op == ">=" ||
      op == "!=" ||
      op == "="
    );
  }
  Fields.isCompareOp = isCompareOp;
  Fields.NULL = Fields.literal(null);
})(Fields || (Fields = {}));

/** AST implementation for queries over data sources. */
/** Utility functions for creating and manipulating sources. */
var Sources;
(function (Sources) {
  /** Create a source which searches from a tag. */
  function tag(tag) {
    return { type: "tag", tag };
  }
  Sources.tag = tag;
  /** Create a source which fetches from a CSV file. */
  function csv(path) {
    return { type: "csv", path };
  }
  Sources.csv = csv;
  /** Create a source which searches for files under a folder prefix. */
  function folder(prefix) {
    return { type: "folder", folder: prefix };
  }
  Sources.folder = folder;
  /** Create a source which searches for files which link to/from a given file. */
  function link(file, incoming) {
    return {
      type: "link",
      file,
      direction: incoming ? "incoming" : "outgoing",
    };
  }
  Sources.link = link;
  /** Create a source which joins two sources by a logical operator (and/or). */
  function binaryOp(left, op, right) {
    return { type: "binaryop", left, op, right };
  }
  Sources.binaryOp = binaryOp;
  /** Create a source which takes the intersection of two sources. */
  function and(left, right) {
    return { type: "binaryop", left, op: "&", right };
  }
  Sources.and = and;
  /** Create a source which takes the union of two sources. */
  function or(left, right) {
    return { type: "binaryop", left, op: "|", right };
  }
  Sources.or = or;
  /** Create a source which negates the underlying source. */
  function negate(child) {
    return { type: "negate", child };
  }
  Sources.negate = negate;
  function empty() {
    return { type: "empty" };
  }
  Sources.empty = empty;
})(Sources || (Sources = {}));

/** Emoji regex without any additional flags. */
const EMOJI_REGEX = new RegExp(emojiRegex(), "");
/** Provides a lookup table for unit durations of the given type. */
const DURATION_TYPES = {
  year: Duration_1.fromObject({ years: 1 }),
  years: Duration_1.fromObject({ years: 1 }),
  yr: Duration_1.fromObject({ years: 1 }),
  yrs: Duration_1.fromObject({ years: 1 }),
  month: Duration_1.fromObject({ months: 1 }),
  months: Duration_1.fromObject({ months: 1 }),
  mo: Duration_1.fromObject({ months: 1 }),
  mos: Duration_1.fromObject({ months: 1 }),
  week: Duration_1.fromObject({ weeks: 1 }),
  weeks: Duration_1.fromObject({ weeks: 1 }),
  wk: Duration_1.fromObject({ weeks: 1 }),
  wks: Duration_1.fromObject({ weeks: 1 }),
  w: Duration_1.fromObject({ weeks: 1 }),
  day: Duration_1.fromObject({ days: 1 }),
  days: Duration_1.fromObject({ days: 1 }),
  d: Duration_1.fromObject({ days: 1 }),
  hour: Duration_1.fromObject({ hours: 1 }),
  hours: Duration_1.fromObject({ hours: 1 }),
  hr: Duration_1.fromObject({ hours: 1 }),
  hrs: Duration_1.fromObject({ hours: 1 }),
  h: Duration_1.fromObject({ hours: 1 }),
  minute: Duration_1.fromObject({ minutes: 1 }),
  minutes: Duration_1.fromObject({ minutes: 1 }),
  min: Duration_1.fromObject({ minutes: 1 }),
  mins: Duration_1.fromObject({ minutes: 1 }),
  m: Duration_1.fromObject({ minutes: 1 }),
  second: Duration_1.fromObject({ seconds: 1 }),
  seconds: Duration_1.fromObject({ seconds: 1 }),
  sec: Duration_1.fromObject({ seconds: 1 }),
  secs: Duration_1.fromObject({ seconds: 1 }),
  s: Duration_1.fromObject({ seconds: 1 }),
};
/** Shorthand for common dates (relative to right now). */
const DATE_SHORTHANDS = {
  now: () => DateTime_1.local(),
  today: () => DateTime_1.local().startOf("day"),
  yesterday: () =>
    DateTime_1.local()
      .startOf("day")
      .minus(Duration_1.fromObject({ days: 1 })),
  tomorrow: () =>
    DateTime_1.local()
      .startOf("day")
      .plus(Duration_1.fromObject({ days: 1 })),
  sow: () => DateTime_1.local().startOf("week"),
  "start-of-week": () => DateTime_1.local().startOf("week"),
  eow: () => DateTime_1.local().endOf("week"),
  "end-of-week": () => DateTime_1.local().endOf("week"),
  soy: () => DateTime_1.local().startOf("year"),
  "start-of-year": () => DateTime_1.local().startOf("year"),
  eoy: () => DateTime_1.local().endOf("year"),
  "end-of-year": () => DateTime_1.local().endOf("year"),
  som: () => DateTime_1.local().startOf("month"),
  "start-of-month": () => DateTime_1.local().startOf("month"),
  eom: () => DateTime_1.local().endOf("month"),
  "end-of-month": () => DateTime_1.local().endOf("month"),
};
/**
 * Keywords which cannot be used as variables directly. Use `row.<thing>` if it is a variable you have defined and want
 * to access.
 */
const KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
///////////////
// Utilities //
///////////////
/** Split on unescaped pipes in an inner link. */
function splitOnUnescapedPipe(link) {
  let pipe = -1;
  while ((pipe = link.indexOf("|", pipe + 1)) >= 0) {
    if (pipe > 0 && link[pipe - 1] == "\\") continue;
    return [
      link.substring(0, pipe).replace(/\\\|/g, "|"),
      link.substring(pipe + 1),
    ];
  }
  return [link.replace(/\\\|/g, "|"), undefined];
}
/** Attempt to parse the inside of a link to pull out display name, subpath, etc. */
function parseInnerLink(rawlink) {
  let [link, display] = splitOnUnescapedPipe(rawlink);
  return Link.infer(link, false, display);
}
/** Create a left-associative binary parser which parses the given sub-element and separator. Handles whitespace. */
function createBinaryParser(child, sep, combine) {
  return parsimmon_umd_min.exports.seqMap(
    child,
    parsimmon_umd_min.exports
      .seq(
        parsimmon_umd_min.exports.optWhitespace,
        sep,
        parsimmon_umd_min.exports.optWhitespace,
        child
      )
      .many(),
    (first, rest) => {
      if (rest.length == 0) return first;
      let node = combine(first, rest[0][1], rest[0][3]);
      for (let index = 1; index < rest.length; index++) {
        node = combine(node, rest[index][1], rest[index][3]);
      }
      return node;
    }
  );
}
function chainOpt(base, ...funcs) {
  return parsimmon_umd_min.exports.custom((success, failure) => {
    return (input, i) => {
      let result = base._(input, i);
      if (!result.status) return result;
      for (let func of funcs) {
        let next = func(result.value)._(input, result.index);
        if (!next.status) return result;
        result = next;
      }
      return result;
    };
  });
}
const EXPRESSION = parsimmon_umd_min.exports.createLanguage({
  // A floating point number; the decimal point is optional.
  number: (q) =>
    parsimmon_umd_min.exports
      .regexp(/-?[0-9]+(\.[0-9]+)?/)
      .map((str) => Number.parseFloat(str))
      .desc("number"),
  // A quote-surrounded string which supports escape characters ('\').
  string: (q) =>
    parsimmon_umd_min.exports
      .string('"')
      .then(
        parsimmon_umd_min.exports
          .alt(q.escapeCharacter, parsimmon_umd_min.exports.noneOf('"\\'))
          .atLeast(0)
          .map((chars) => chars.join(""))
      )
      .skip(parsimmon_umd_min.exports.string('"'))
      .desc("string"),
  escapeCharacter: (_) =>
    parsimmon_umd_min.exports
      .string("\\")
      .then(parsimmon_umd_min.exports.any)
      .map((escaped) => {
        // If we are escaping a backslash or a quote, pass in on in escaped form
        if (escaped === '"') return '"';
        if (escaped === "\\") return "\\";
        else return "\\" + escaped;
      }),
  // A boolean true/false value.
  bool: (_) =>
    parsimmon_umd_min.exports
      .regexp(/true|false|True|False/)
      .map((str) => str.toLowerCase() == "true")
      .desc("boolean ('true' or 'false')"),
  // A tag of the form '#stuff/hello-there'.
  tag: (_) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.string("#"),
        parsimmon_umd_min.exports
          .alt(
            parsimmon_umd_min.exports
              .regexp(/[\p{Letter}0-9_/-]/u)
              .desc("text"),
            parsimmon_umd_min.exports.regexp(EMOJI_REGEX).desc("text")
          )
          .many(),
        (start, rest) => start + rest.join("")
      )
      .desc("tag ('#hello/stuff')"),
  // A variable identifier, which is alphanumeric and must start with a letter or... emoji.
  identifier: (_) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.alt(
          parsimmon_umd_min.exports.regexp(/\p{Letter}/u),
          parsimmon_umd_min.exports.regexp(EMOJI_REGEX).desc("text")
        ),
        parsimmon_umd_min.exports
          .alt(
            parsimmon_umd_min.exports.regexp(/[0-9\p{Letter}_-]/u),
            parsimmon_umd_min.exports.regexp(EMOJI_REGEX).desc("text")
          )
          .many(),
        (first, rest) => first + rest.join("")
      )
      .desc("variable identifier"),
  // An Obsidian link of the form [[<link>]].
  link: (_) =>
    parsimmon_umd_min.exports
      .regexp(/\[\[([^\[\]]*?)\]\]/u, 1)
      .map((linkInner) => parseInnerLink(linkInner))
      .desc("file link"),
  // An embeddable link which can start with '!'. This overlaps with the normal negation operator, so it is only
  // provided for metadata parsing.
  embedLink: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.string("!").atMost(1),
        q.link,
        (p, l) => {
          if (p.length > 0) l.embed = true;
          return l;
        }
      )
      .desc("file link"),
  // Binary plus or minus operator.
  binaryPlusMinus: (_) =>
    parsimmon_umd_min.exports
      .regexp(/\+|-/)
      .map((str) => str)
      .desc("'+' or '-'"),
  // Binary times or divide operator.
  binaryMulDiv: (_) =>
    parsimmon_umd_min.exports
      .regexp(/\*|\/|%/)
      .map((str) => str)
      .desc("'*' or '/' or '%'"),
  // Binary comparison operator.
  binaryCompareOp: (_) =>
    parsimmon_umd_min.exports
      .regexp(/>=|<=|!=|>|<|=/)
      .map((str) => str)
      .desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
  // Binary boolean combination operator.
  binaryBooleanOp: (_) =>
    parsimmon_umd_min.exports
      .regexp(/and|or|&|\|/i)
      .map((str) => {
        if (str.toLowerCase() == "and") return "&";
        else if (str.toLowerCase() == "or") return "|";
        else return str;
      })
      .desc("'and' or 'or'"),
  // A date which can be YYYY-MM[-DDTHH:mm:ss].
  rootDate: (_) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.regexp(/\d{4}/),
        parsimmon_umd_min.exports.string("-"),
        parsimmon_umd_min.exports.regexp(/\d{2}/),
        (year, _, month) => {
          return DateTime_1.fromObject({
            year: Number.parseInt(year),
            month: Number.parseInt(month),
          });
        }
      )
      .desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
  dateShorthand: (_) =>
    parsimmon_umd_min.exports.alt(
      ...Object.keys(DATE_SHORTHANDS)
        .sort((a, b) => b.length - a.length)
        .map(parsimmon_umd_min.exports.string)
    ),
  date: (q) =>
    chainOpt(
      q.rootDate,
      (ym) =>
        parsimmon_umd_min.exports.seqMap(
          parsimmon_umd_min.exports.string("-"),
          parsimmon_umd_min.exports.regexp(/\d{2}/),
          (_, day) => ym.set({ day: Number.parseInt(day) })
        ),
      (ymd) =>
        parsimmon_umd_min.exports.seqMap(
          parsimmon_umd_min.exports.string("T"),
          parsimmon_umd_min.exports.regexp(/\d{2}/),
          (_, hour) => ymd.set({ hour: Number.parseInt(hour) })
        ),
      (ymdh) =>
        parsimmon_umd_min.exports.seqMap(
          parsimmon_umd_min.exports.string(":"),
          parsimmon_umd_min.exports.regexp(/\d{2}/),
          (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })
        ),
      (ymdhm) =>
        parsimmon_umd_min.exports.seqMap(
          parsimmon_umd_min.exports.string(":"),
          parsimmon_umd_min.exports.regexp(/\d{2}/),
          (_, second) => ymdhm.set({ second: Number.parseInt(second) })
        ),
      (ymdhms) =>
        parsimmon_umd_min.exports.alt(
          parsimmon_umd_min.exports.seqMap(
            parsimmon_umd_min.exports.string("."),
            parsimmon_umd_min.exports.regexp(/\d{3}/),
            (_, millisecond) =>
              ymdhms.set({ millisecond: Number.parseInt(millisecond) })
          ),
          parsimmon_umd_min.exports.succeed(ymdhms) // pass
        ),
      (dt) =>
        parsimmon_umd_min.exports.alt(
          parsimmon_umd_min.exports.seqMap(
            parsimmon_umd_min.exports
              .string("+")
              .or(parsimmon_umd_min.exports.string("-")),
            parsimmon_umd_min.exports.regexp(/\d{1,2}(:\d{2})?/),
            (pm, hr) => dt.setZone("UTC" + pm + hr, { keepLocalTime: true })
          ),
          parsimmon_umd_min.exports.seqMap(
            parsimmon_umd_min.exports.string("Z"),
            () => dt.setZone("utc", { keepLocalTime: true })
          ),
          parsimmon_umd_min.exports.seqMap(
            parsimmon_umd_min.exports.string("["),
            parsimmon_umd_min.exports.regexp(/[0-9A-Za-z+-\/]+/u),
            parsimmon_umd_min.exports.string("]"),
            (_a, zone, _b) => dt.setZone(zone, { keepLocalTime: true })
          )
        )
    )
      .assert((dt) => dt.isValid, "valid date")
      .desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
  // A date, plus various shorthand times of day it could be.
  datePlus: (q) =>
    parsimmon_umd_min.exports
      .alt(
        q.dateShorthand.map((d) => DATE_SHORTHANDS[d]()),
        q.date
      )
      .desc("date in format YYYY-MM[-DDTHH-MM-SS.MS] or in shorthand"),
  // A duration of time.
  durationType: (_) =>
    parsimmon_umd_min.exports.alt(
      ...Object.keys(DURATION_TYPES)
        .sort((a, b) => b.length - a.length)
        .map(parsimmon_umd_min.exports.string)
    ),
  duration: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        q.number,
        parsimmon_umd_min.exports.optWhitespace,
        q.durationType,
        (count, _, t) => DURATION_TYPES[t].mapUnits((x) => x * count)
      )
      .sepBy1(
        parsimmon_umd_min.exports
          .string(",")
          .trim(parsimmon_umd_min.exports.optWhitespace)
          .or(parsimmon_umd_min.exports.optWhitespace)
      )
      .map((durations) => durations.reduce((p, c) => p.plus(c)))
      .desc("duration like 4hr2min"),
  // A raw null value.
  rawNull: (_) => parsimmon_umd_min.exports.string("null"),
  // Source parsing.
  tagSource: (q) => q.tag.map((tag) => Sources.tag(tag)),
  csvSource: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports
        .string("csv(")
        .skip(parsimmon_umd_min.exports.optWhitespace),
      q.string,
      parsimmon_umd_min.exports.string(")"),
      (_1, path, _2) => Sources.csv(path)
    ),
  linkIncomingSource: (q) =>
    q.link.map((link) => Sources.link(link.path, true)),
  linkOutgoingSource: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports
        .string("outgoing(")
        .skip(parsimmon_umd_min.exports.optWhitespace),
      q.link,
      parsimmon_umd_min.exports.string(")"),
      (_1, link, _2) => Sources.link(link.path, false)
    ),
  folderSource: (q) => q.string.map((str) => Sources.folder(str)),
  parensSource: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.string("("),
      parsimmon_umd_min.exports.optWhitespace,
      q.source,
      parsimmon_umd_min.exports.optWhitespace,
      parsimmon_umd_min.exports.string(")"),
      (_1, _2, field, _3, _4) => field
    ),
  negateSource: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.alt(
        parsimmon_umd_min.exports.string("-"),
        parsimmon_umd_min.exports.string("!")
      ),
      q.atomSource,
      (_, source) => Sources.negate(source)
    ),
  atomSource: (q) =>
    parsimmon_umd_min.exports.alt(
      q.parensSource,
      q.negateSource,
      q.linkOutgoingSource,
      q.linkIncomingSource,
      q.folderSource,
      q.tagSource,
      q.csvSource
    ),
  binaryOpSource: (q) =>
    createBinaryParser(
      q.atomSource,
      q.binaryBooleanOp.map((s) => s),
      Sources.binaryOp
    ),
  source: (q) => q.binaryOpSource,
  // Field parsing.
  variableField: (q) =>
    q.identifier
      .chain((r) => {
        if (KEYWORDS.includes(r.toUpperCase())) {
          return parsimmon_umd_min.exports.fail(
            "Variable fields cannot be a keyword (" +
              KEYWORDS.join(" or ") +
              ")"
          );
        } else {
          return parsimmon_umd_min.exports.succeed(Fields.variable(r));
        }
      })
      .desc("variable"),
  numberField: (q) => q.number.map((val) => Fields.literal(val)).desc("number"),
  stringField: (q) => q.string.map((val) => Fields.literal(val)).desc("string"),
  boolField: (q) => q.bool.map((val) => Fields.literal(val)).desc("boolean"),
  dateField: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.string("date("),
        parsimmon_umd_min.exports.optWhitespace,
        q.datePlus,
        parsimmon_umd_min.exports.optWhitespace,
        parsimmon_umd_min.exports.string(")"),
        (prefix, _1, date, _2, postfix) => Fields.literal(date)
      )
      .desc("date"),
  durationField: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.string("dur("),
        parsimmon_umd_min.exports.optWhitespace,
        q.duration,
        parsimmon_umd_min.exports.optWhitespace,
        parsimmon_umd_min.exports.string(")"),
        (prefix, _1, dur, _2, postfix) => Fields.literal(dur)
      )
      .desc("duration"),
  nullField: (q) => q.rawNull.map((_) => Fields.NULL),
  linkField: (q) => q.link.map((f) => Fields.literal(f)),
  listField: (q) =>
    q.field
      .sepBy(
        parsimmon_umd_min.exports
          .string(",")
          .trim(parsimmon_umd_min.exports.optWhitespace)
      )
      .wrap(
        parsimmon_umd_min.exports
          .string("[")
          .skip(parsimmon_umd_min.exports.optWhitespace),
        parsimmon_umd_min.exports.optWhitespace.then(
          parsimmon_umd_min.exports.string("]")
        )
      )
      .map((l) => Fields.list(l))
      .desc("list ('[1, 2, 3]')"),
  objectField: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        q.identifier.or(q.string),
        parsimmon_umd_min.exports
          .string(":")
          .trim(parsimmon_umd_min.exports.optWhitespace),
        q.field,
        (name, _sep, value) => {
          return { name, value };
        }
      )
      .sepBy(
        parsimmon_umd_min.exports
          .string(",")
          .trim(parsimmon_umd_min.exports.optWhitespace)
      )
      .wrap(
        parsimmon_umd_min.exports
          .string("{")
          .skip(parsimmon_umd_min.exports.optWhitespace),
        parsimmon_umd_min.exports.optWhitespace.then(
          parsimmon_umd_min.exports.string("}")
        )
      )
      .map((vals) => {
        let res = {};
        for (let entry of vals) res[entry.name] = entry.value;
        return Fields.object(res);
      })
      .desc("object ('{ a: 1, b: 2 }')"),
  atomInlineField: (q) =>
    parsimmon_umd_min.exports.alt(
      q.date,
      q.duration.map((d) => normalizeDuration(d)),
      q.string,
      q.tag,
      q.embedLink,
      q.bool,
      q.number,
      q.rawNull
    ),
  inlineFieldList: (q) =>
    q.atomInlineField.sepBy(
      parsimmon_umd_min.exports
        .string(",")
        .trim(parsimmon_umd_min.exports.optWhitespace)
        .lookahead(q.atomInlineField)
    ),
  inlineField: (q) =>
    parsimmon_umd_min.exports.alt(
      parsimmon_umd_min.exports.seqMap(
        q.atomInlineField,
        parsimmon_umd_min.exports
          .string(",")
          .trim(parsimmon_umd_min.exports.optWhitespace),
        q.inlineFieldList,
        (f, _s, l) => [f].concat(l)
      ),
      q.atomInlineField
    ),
  atomField: (q) =>
    parsimmon_umd_min.exports.alt(
      // Place embed links above negated fields as they are the special parser case '![[thing]]' and are generally unambigious.
      q.embedLink.map((l) => Fields.literal(l)),
      q.negatedField,
      q.linkField,
      q.listField,
      q.objectField,
      q.lambdaField,
      q.parensField,
      q.boolField,
      q.numberField,
      q.stringField,
      q.dateField,
      q.durationField,
      q.nullField,
      q.variableField
    ),
  indexField: (q) =>
    parsimmon_umd_min.exports.seqMap(
      q.atomField,
      parsimmon_umd_min.exports
        .alt(q.dotPostfix, q.indexPostfix, q.functionPostfix)
        .many(),
      (obj, postfixes) => {
        let result = obj;
        for (let post of postfixes) {
          switch (post.type) {
            case "dot":
              result = Fields.index(result, Fields.literal(post.field));
              break;
            case "index":
              result = Fields.index(result, post.field);
              break;
            case "function":
              result = Fields.func(result, post.fields);
              break;
          }
        }
        return result;
      }
    ),
  negatedField: (q) =>
    parsimmon_umd_min.exports
      .seqMap(parsimmon_umd_min.exports.string("!"), q.indexField, (_, field) =>
        Fields.negate(field)
      )
      .desc("negated field"),
  parensField: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.string("("),
      parsimmon_umd_min.exports.optWhitespace,
      q.field,
      parsimmon_umd_min.exports.optWhitespace,
      parsimmon_umd_min.exports.string(")"),
      (_1, _2, field, _3, _4) => field
    ),
  lambdaField: (q) =>
    parsimmon_umd_min.exports.seqMap(
      q.identifier
        .sepBy(
          parsimmon_umd_min.exports
            .string(",")
            .trim(parsimmon_umd_min.exports.optWhitespace)
        )
        .wrap(
          parsimmon_umd_min.exports
            .string("(")
            .trim(parsimmon_umd_min.exports.optWhitespace),
          parsimmon_umd_min.exports
            .string(")")
            .trim(parsimmon_umd_min.exports.optWhitespace)
        ),
      parsimmon_umd_min.exports
        .string("=>")
        .trim(parsimmon_umd_min.exports.optWhitespace),
      q.field,
      (ident, _ignore, value) => {
        return { type: "lambda", arguments: ident, value };
      }
    ),
  dotPostfix: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.string("."),
      q.identifier,
      (_, field) => {
        return { type: "dot", field: field };
      }
    ),
  indexPostfix: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.string("["),
      parsimmon_umd_min.exports.optWhitespace,
      q.field,
      parsimmon_umd_min.exports.optWhitespace,
      parsimmon_umd_min.exports.string("]"),
      (_, _2, field, _3, _4) => {
        return { type: "index", field };
      }
    ),
  functionPostfix: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.string("("),
      parsimmon_umd_min.exports.optWhitespace,
      q.field.sepBy(
        parsimmon_umd_min.exports
          .string(",")
          .trim(parsimmon_umd_min.exports.optWhitespace)
      ),
      parsimmon_umd_min.exports.optWhitespace,
      parsimmon_umd_min.exports.string(")"),
      (_, _1, fields, _2, _3) => {
        return { type: "function", fields };
      }
    ),
  // The precedence hierarchy of operators - multiply/divide, add/subtract, compare, and then boolean operations.
  binaryMulDivField: (q) =>
    createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
  binaryPlusMinusField: (q) =>
    createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
  binaryCompareField: (q) =>
    createBinaryParser(
      q.binaryPlusMinusField,
      q.binaryCompareOp,
      Fields.binaryOp
    ),
  binaryBooleanField: (q) =>
    createBinaryParser(
      q.binaryCompareField,
      q.binaryBooleanOp,
      Fields.binaryOp
    ),
  binaryOpField: (q) => q.binaryBooleanField,
  field: (q) => q.binaryOpField,
});
/**
 * Attempt to parse a field from the given text, returning a string error if the
 * parse failed.
 */
function parseField(text) {
  try {
    return Result.success(EXPRESSION.field.tryParse(text));
  } catch (error) {
    return Result.failure("" + error);
  }
}

/** Parse inline fields and other embedded metadata in a line. */
/** The wrapper characters that can be used to define an inline field. */
const INLINE_FIELD_WRAPPERS = Object.freeze({
  "[": "]",
  "(": ")",
});
/**
 * Find a matching closing bracket that occurs at or after `start`, respecting nesting and escapes. If found,
 * returns the value contained within and the string index after the end of the value.
 */
function findClosing(line, start, open, close) {
  let nesting = 0;
  let escaped = false;
  for (let index = start; index < line.length; index++) {
    let char = line.charAt(index);
    // Allows for double escapes like '\\' to be rendered normally.
    if (char == "\\") {
      escaped = !escaped;
      continue;
    }
    // If escaped, ignore the next character for computing nesting, regardless of what it is.
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char == open) nesting++;
    else if (char == close) nesting--;
    // Only occurs if we are on a close character and trhere is no more nesting.
    if (nesting < 0)
      return {
        value: line.substring(start, index).trim(),
        endIndex: index + 1,
      };
    escaped = false;
  }
  return undefined;
}
/** Find the '::' separator in an inline field. */
function findSeparator(line, start) {
  let sep = line.indexOf("::", start);
  if (sep < 0) return undefined;
  return { key: line.substring(start, sep).trim(), valueIndex: sep + 2 };
}
/** Try to completely parse an inline field starting at the given position. Assuems `start` is on a wrapping character. */
function findSpecificInlineField(line, start) {
  let open = line.charAt(start);
  let key = findSeparator(line, start + 1);
  if (key === undefined) return undefined;
  // Fail the match if we find any separator characters (not allowed in keys).
  for (let sep of Object.keys(INLINE_FIELD_WRAPPERS).concat(
    Object.values(INLINE_FIELD_WRAPPERS)
  )) {
    if (key.key.includes(sep)) return undefined;
  }
  let value = findClosing(
    line,
    key.valueIndex,
    open,
    INLINE_FIELD_WRAPPERS[open]
  );
  if (value === undefined) return undefined;
  return {
    key: key.key,
    value: value.value,
    start: start,
    startValue: key.valueIndex,
    end: value.endIndex,
    wrapping: open,
  };
}
/** Parse a textual inline field value into something we can work with. */
function parseInlineValue(value) {
  // Empty inline values (i.e., no text) should map to null to match long-term Dataview semantics.
  // Null is also a more universal type to deal with than strings, since all functions accept nulls.
  if (value.trim() == "") return null;
  // The stripped literal field parser understands all of the non-array/non-object fields and can parse them for us.
  // Inline field objects are not currently supported; inline array objects have to be handled by the parser
  // separately.
  let inline = EXPRESSION.inlineField.parse(value);
  if (inline.status) return inline.value;
  else return value;
}
/** Extracts inline fields of the form '[key:: value]' from a line of text. This is done in a relatively
 * "robust" way to avoid failing due to bad nesting or other interfering Markdown symbols:
 *
 * - Look for any wrappers ('[' and '(') in the line, trying to parse whatever comes after it as an inline key::.
 * - If successful, scan until you find a matching end bracket, and parse whatever remains as an inline value.
 */
function extractInlineFields(line, includeTaskFields = false) {
  let fields = [];
  for (let wrapper of Object.keys(INLINE_FIELD_WRAPPERS)) {
    let foundIndex = line.indexOf(wrapper);
    while (foundIndex >= 0) {
      let parsedField = findSpecificInlineField(line, foundIndex);
      if (!parsedField) {
        foundIndex = line.indexOf(wrapper, foundIndex + 1);
        continue;
      }
      fields.push(parsedField);
      foundIndex = line.indexOf(wrapper, parsedField.end);
    }
  }
  if (includeTaskFields) fields = fields.concat(extractSpecialTaskFields(line));
  fields.sort((a, b) => a.start - b.start);
  return fields;
}
/** Validates that a raw field name has a valid form. */
const FULL_LINE_KEY_PART = parsimmon_umd_min.exports
  .alt(
    parsimmon_umd_min.exports.regexp(new RegExp(emojiRegex(), "u")),
    parsimmon_umd_min.exports.regexp(/[0-9\p{Letter}\w\s_/-]+/u)
  )
  .many()
  .map((parts) => parts.join(""));
parsimmon_umd_min.exports
  .regexp(/[^0-9\w\p{Letter}]*/u)
  .then(FULL_LINE_KEY_PART)
  .skip(parsimmon_umd_min.exports.regexp(/[_\*~`]*/u));
const CREATED_DATE_REGEX = /\u{2795}\s*(\d{4}-\d{2}-\d{2})/u;
const DUE_DATE_REGEX =
  /[\u{1F4C5}\u{1F4C6}\u{1F5D3}\u{FE0F}]{1,}\s*(\d{4}-\d{2}-\d{2})/u;
const DONE_DATE_REGEX = /\u{2705}\s*(\d{4}-\d{2}-\d{2})/u;
/** Parse special completed/due/done task fields which are marked via emoji. */
function extractSpecialTaskFields(line) {
  let results = [];
  let createdMatch = CREATED_DATE_REGEX.exec(line);
  if (createdMatch)
    results.push({
      key: "created",
      value: createdMatch[1],
      start: createdMatch.index,
      startValue: createdMatch.index + 1,
      end: createdMatch.index + createdMatch[0].length,
      wrapping: "emoji-shorthand",
    });
  let dueMatch = DUE_DATE_REGEX.exec(line);
  if (dueMatch)
    results.push({
      key: "due",
      value: dueMatch[1],
      start: dueMatch.index,
      startValue: dueMatch.index + 1,
      end: dueMatch.index + dueMatch[0].length,
      wrapping: "emoji-shorthand",
    });
  let completedMatch = DONE_DATE_REGEX.exec(line);
  if (completedMatch)
    results.push({
      key: "completion",
      value: completedMatch[1],
      start: completedMatch.index,
      startValue: completedMatch.index + 1,
      end: completedMatch.index + completedMatch[0].length,
      wrapping: "emoji-shorthand",
    });
  return results;
}
/** Sets or replaces the value of an inline field; if the value is 'undefined', deletes the key. */
function setInlineField(source, key, value) {
  let existing = extractInlineFields(source);
  let existingKeys = existing.filter((f) => f.key == key);
  // Don't do anything if there are duplicate keys OR the key already doesn't exist.
  if (existingKeys.length > 2 || (existingKeys.length == 0 && !value))
    return source;
  let existingKey = existingKeys[0];
  let annotation = value ? `[${key}:: ${value}]` : "";
  if (existingKey) {
    let prefix = source.substring(0, existingKey.start);
    let suffix = source.substring(existingKey.end);
    if (annotation) return `${prefix}${annotation}${suffix}`;
    else return `${prefix}${suffix.trimStart()}`;
  } else if (annotation) {
    return `${source.trimEnd()} ${annotation}`;
  }
  return source;
}

/** All extracted markdown file metadata obtained from a file. */
class PageMetadata {
  constructor(path, init) {
    this.path = path;
    this.fields = new Map();
    this.frontmatter = {};
    this.tags = new Set();
    this.aliases = new Set();
    this.links = [];
    Object.assign(this, init);
    this.lists = (this.lists || []).map((l) => new ListItem$1(l));
  }
  /** Canonicalize raw links and other data in partial data with normalizers, returning a completed object. */
  static canonicalize(data, linkNormalizer) {
    // Mutate the data for now, which is probably a bad idea but... all well.
    if (data.frontmatter) {
      data.frontmatter = Values.mapLeaves(data.frontmatter, (t) =>
        Values.isLink(t) ? linkNormalizer(t) : t
      );
    }
    if (data.fields) {
      for (let [key, value] of data.fields.entries()) {
        data.fields.set(
          key,
          Values.mapLeaves(value, (t) =>
            Values.isLink(t) ? linkNormalizer(t) : t
          )
        );
      }
    }
    if (data.lists) {
      for (let item of data.lists) {
        for (let [key, value] of item.fields.entries()) {
          item.fields.set(
            key,
            value.map((x) =>
              Values.mapLeaves(x, (t) =>
                Values.isLink(t) ? linkNormalizer(t) : t
              )
            )
          );
        }
      }
    }
    if (data.links) {
      data.links = data.links.map((l) => linkNormalizer(l));
    }
    // This is pretty ugly, but it's not possible to normalize on the worker thread that does parsing.
    // The best way to improve this is to instead just canonicalize the entire data object; I can try to
    // optimize `Values.mapLeaves` to only mutate if it actually changes things.
    return new PageMetadata(data.path, data);
  }
  /** The name (based on path) of this file. */
  name() {
    return getFileTitle(this.path);
  }
  /** The containing folder (based on path) of this file. */
  folder() {
    return getParentFolder(this.path);
  }
  /** The extension of this file (likely 'md'). */
  extension() {
    return getExtension(this.path);
  }
  /** Return a set of tags AND all of their parent tags (so #hello/yes would become #hello, #hello/yes). */
  fullTags() {
    let result = new Set();
    for (let tag of this.tags) {
      for (let subtag of extractSubtags(tag)) result.add(subtag);
    }
    return result;
  }
  /** Convert all links in this file to file links. */
  fileLinks() {
    let distinctPaths = new Set(this.links.map((l) => l.path));
    return Array.from(distinctPaths).map((l) => Link.file(l));
  }
  /** Map this metadata to a full object; uses the index for additional data lookups.  */
  serialize(index, cache) {
    // Convert list items via the canonicalization cache.
    let realCache =
      cache !== null && cache !== void 0
        ? cache
        : new ListSerializationCache(this.lists);
    let result = {
      file: {
        path: this.path,
        folder: this.folder(),
        name: this.name(),
        link: Link.file(this.path),
        outlinks: this.fileLinks(),
        inlinks: Array.from(index.links.getInverse(this.path)).map((l) =>
          Link.file(l)
        ),
        etags: Array.from(this.tags),
        tags: Array.from(this.fullTags()),
        aliases: Array.from(this.aliases),
        lists: this.lists.map((l) => realCache.get(l.line)),
        tasks: this.lists
          .filter((l) => !!l.task)
          .map((l) => realCache.get(l.line)),
        ctime: this.ctime,
        cday: stripTime(this.ctime),
        mtime: this.mtime,
        mday: stripTime(this.mtime),
        size: this.size,
        starred: index.starred.starred(this.path),
        frontmatter: Values.deepCopy(this.frontmatter),
        ext: this.extension(),
      },
    };
    // Add the current day if present.
    if (this.day) result.file.day = this.day;
    // Then append the computed fields.
    for (let [key, value] of this.fields.entries()) {
      if (key in result) continue; // Don't allow fields to override existing keys.
      result[key] = value;
    }
    return result;
  }
}
/** A list item inside of a list. */
class ListItem$1 {
  constructor(init) {
    Object.assign(this, init);
    this.fields = this.fields || new Map();
    this.tags = this.tags || new Set();
    this.children = this.children || [];
    this.links = this.links || [];
  }
  id() {
    return `${this.file().path}-${this.line}`;
  }
  file() {
    return this.link.toFile();
  }
  markdown() {
    if (this.task)
      return `${this.symbol} [${this.task.completed ? "x" : " "}] ${this.text}`;
    else return `${this.symbol} ${this.text}`;
  }
  created() {
    var _a, _b, _c;
    return (_c =
      (_b =
        (_a = this.fields.get("created")) !== null && _a !== void 0
          ? _a
          : this.fields.get("ctime")) !== null && _b !== void 0
        ? _b
        : this.fields.get("cday")) === null || _c === void 0
      ? void 0
      : _c[0];
  }
  due() {
    var _a, _b, _c;
    return (_c =
      (_b =
        (_a = this.fields.get("due")) !== null && _a !== void 0
          ? _a
          : this.fields.get("duetime")) !== null && _b !== void 0
        ? _b
        : this.fields.get("dueday")) === null || _c === void 0
      ? void 0
      : _c[0];
  }
  completed() {
    var _a, _b, _c, _d;
    return (_d =
      (_c =
        (_b =
          (_a = this.fields.get("completed")) !== null && _a !== void 0
            ? _a
            : this.fields.get("completion")) !== null && _b !== void 0
          ? _b
          : this.fields.get("comptime")) !== null && _c !== void 0
        ? _c
        : this.fields.get("compday")) === null || _d === void 0
      ? void 0
      : _d[0];
  }
  /** Create an API-friendly copy of this list item. De-duplication is done via the provided cache. */
  serialize(cache) {
    // Map children to their serialized/de-duplicated equivalents right away.
    let children = this.children
      .map((l) => cache.get(l))
      .filter((l) => l !== undefined);
    let result = {
      symbol: this.symbol,
      link: this.link,
      section: this.section,
      text: this.text,
      tags: Array.from(this.tags),
      line: this.line,
      lineCount: this.lineCount,
      list: this.list,
      outlinks: Array.from(this.links),
      path: this.link.path,
      children: children,
      task: !!this.task,
      annotated: this.fields.size > 0,
      position: Values.deepCopy(this.position),
      subtasks: children,
      real: !!this.task,
      header: this.section, // @deprecated, use 'item.section' instead.
    };
    if (this.parent) result.parent = this.parent;
    if (this.blockId) result.blockId = this.blockId;
    addFields(this.fields, result);
    if (this.task) {
      result.status = this.task.status;
      result.checked = this.task.checked;
      result.completed = this.task.completed;
      result.fullyCompleted = this.task.fullyCompleted;
      let created = this.created(),
        due = this.due(),
        completed = this.completed();
      if (created) result.created = Values.deepCopy(created);
      if (due) result.due = Values.deepCopy(due);
      if (completed) result.completion = Values.deepCopy(completed);
    }
    return result;
  }
}
//////////////////////////////////////////
// Conversion / Serialization Utilities //
//////////////////////////////////////////
/** De-duplicates list items across section metadata and page metadata. */
class ListSerializationCache {
  constructor(listItems) {
    this.listItems = {};
    this.cache = {};
    this.seen = new Set();
    for (let item of listItems) this.listItems[item.line] = item;
  }
  get(lineno) {
    if (lineno in this.cache) return this.cache[lineno];
    else if (this.seen.has(lineno)) {
      console.log(
        `Dataview: Encountered a circular list (line number ${lineno}; children ${this.listItems[
          lineno
        ].children.join(", ")})`
      );
      return undefined;
    }
    this.seen.add(lineno);
    let result = this.listItems[lineno].serialize(this);
    this.cache[lineno] = result;
    return result;
  }
}
function addFields(fields, target) {
  for (let [key, values] of fields.entries()) {
    if (key in target) continue;
    target[key] = values.length == 1 ? values[0] : values;
  }
  return target;
}

/** Importer for markdown documents. */
// TODO: Consider using an actual parser in leiu of a more expensive regex.
const LIST_ITEM_REGEX =
  /^[\s>]*(\d+\.|\d+\)|\*|-|\+)\s*(\[.{0,1}\])?\s*(.*)$/mu;
/** Recursively convert frontmatter into fields. We have to dance around YAML structure. */
function parseFrontmatter(value) {
  if (value == null) {
    return null;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      let result = [];
      for (let child of value) {
        result.push(parseFrontmatter(child));
      }
      return result;
    } else {
      let object = value;
      let result = {};
      for (let key in object) {
        result[key] = parseFrontmatter(object[key]);
      }
      return result;
    }
  } else if (typeof value === "number") {
    return value;
  } else if (typeof value === "boolean") {
    return value;
  } else if (typeof value === "string") {
    let dateParse = EXPRESSION.date.parse(value);
    if (dateParse.status) return dateParse.value;
    let durationParse = EXPRESSION.duration.parse(value);
    if (durationParse.status) return durationParse.value;
    let linkParse = EXPRESSION.embedLink.parse(value);
    if (linkParse.status) return linkParse.value;
    return value;
  }
  // Backup if we don't understand the type.
  return null;
}

/** Parse a CSV file into a collection of data rows. */
function parseCsv(content) {
  let parsed = papaparse_min.exports.parse(content, {
    header: true,
    skipEmptyLines: true,
    comments: "#",
    dynamicTyping: true,
  });
  let rows = [];
  for (let parsedRow of parsed.data) {
    let fields = parseFrontmatter(parsedRow);
    let result = {};
    for (let [key, value] of Object.entries(fields)) {
      result[key] = value;
      result[canonicalizeVarName(key)] = value;
    }
    rows.push(result);
  }
  return rows;
}

/** Simplifies passing dataview values across the JS web worker barrier. */
var Transferable;
(function (Transferable) {
  /** Convert a literal value to a serializer-friendly transferable value. */
  function transferable(value) {
    // Handle simple universal types first.
    if (value instanceof Map) {
      let copied = new Map();
      for (let [key, val] of value.entries())
        copied.set(transferable(key), transferable(val));
      return copied;
    } else if (value instanceof Set) {
      let copied = new Set();
      for (let val of value) copied.add(transferable(val));
      return copied;
    }
    let wrapped = Values.wrapValue(value);
    if (wrapped === undefined)
      throw Error("Unrecognized transferable value: " + value);
    switch (wrapped.type) {
      case "null":
      case "number":
      case "string":
      case "boolean":
        return wrapped.value;
      case "date":
        return {
          "___transfer-type": "date",
          value: transferable(wrapped.value.toObject()),
          options: { zone: wrapped.value.zoneName },
        };
      case "duration":
        return {
          "___transfer-type": "duration",
          value: transferable(wrapped.value.toObject()),
        };
      case "array":
        return wrapped.value.map((v) => transferable(v));
      case "link":
        return {
          "___transfer-type": "link",
          value: transferable(wrapped.value.toObject()),
        };
      case "object":
        let result = {};
        for (let [key, value] of Object.entries(wrapped.value))
          result[key] = transferable(value);
        return result;
    }
  }
  Transferable.transferable = transferable;
  /** Convert a transferable value back to a literal value we can work with. */
  function value(transferable) {
    if (transferable === null) {
      return null;
    } else if (transferable === undefined) {
      return undefined;
    } else if (transferable instanceof Map) {
      let real = new Map();
      for (let [key, val] of transferable.entries())
        real.set(value(key), value(val));
      return real;
    } else if (transferable instanceof Set) {
      let real = new Set();
      for (let val of transferable) real.add(value(val));
      return real;
    } else if (Array.isArray(transferable)) {
      return transferable.map((v) => value(v));
    } else if (typeof transferable === "object") {
      if ("___transfer-type" in transferable) {
        switch (transferable["___transfer-type"]) {
          case "date":
            let rawDate = DateTime_1.fromObject(value(transferable.value));
            let dateOpts = value(transferable.options);
            if (dateOpts.zone) rawDate.setZone(dateOpts.zone);
            return rawDate;
          case "duration":
            return Duration_1.fromObject(value(transferable.value));
          case "link":
            return Link.fromObject(value(transferable.value));
          default:
            throw Error(
              `Unrecognized transfer type '${transferable["___transfer-type"]}'`
            );
        }
      }
      let result = {};
      for (let [key, val] of Object.entries(transferable))
        result[key] = value(val);
      return result;
    }
    return transferable;
  }
  Transferable.value = value;
})(Transferable || (Transferable = {}));

var localforage$1 = { exports: {} };

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/

(function (module, exports) {
  (function (f) {
    {
      module.exports = f();
    }
  })(function () {
    return (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          var l = (n[o] = { exports: {} });
          t[o][0].call(
            l.exports,
            function (e) {
              var n = t[o][1][e];
              return s(n ? n : e);
            },
            l,
            l.exports,
            e,
            t,
            n,
            r
          );
        }
        return n[o].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o = 0; o < r.length; o++) s(r[o]);
      return s;
    })(
      {
        1: [
          function (_dereq_, module, exports) {
            (function (global) {
              var Mutation =
                global.MutationObserver || global.WebKitMutationObserver;

              var scheduleDrain;

              {
                if (Mutation) {
                  var called = 0;
                  var observer = new Mutation(nextTick);
                  var element = global.document.createTextNode("");
                  observer.observe(element, {
                    characterData: true,
                  });
                  scheduleDrain = function () {
                    element.data = called = ++called % 2;
                  };
                } else if (
                  !global.setImmediate &&
                  typeof global.MessageChannel !== "undefined"
                ) {
                  var channel = new global.MessageChannel();
                  channel.port1.onmessage = nextTick;
                  scheduleDrain = function () {
                    channel.port2.postMessage(0);
                  };
                } else if (
                  "document" in global &&
                  "onreadystatechange" in
                    global.document.createElement("script")
                ) {
                  scheduleDrain = function () {
                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                    var scriptEl = global.document.createElement("script");
                    scriptEl.onreadystatechange = function () {
                      nextTick();

                      scriptEl.onreadystatechange = null;
                      scriptEl.parentNode.removeChild(scriptEl);
                      scriptEl = null;
                    };
                    global.document.documentElement.appendChild(scriptEl);
                  };
                } else {
                  scheduleDrain = function () {
                    setTimeout(nextTick, 0);
                  };
                }
              }

              var draining;
              var queue = [];
              //named nextTick for less confusing stack traces
              function nextTick() {
                draining = true;
                var i, oldQueue;
                var len = queue.length;
                while (len) {
                  oldQueue = queue;
                  queue = [];
                  i = -1;
                  while (++i < len) {
                    oldQueue[i]();
                  }
                  len = queue.length;
                }
                draining = false;
              }

              module.exports = immediate;
              function immediate(task) {
                if (queue.push(task) === 1 && !draining) {
                  scheduleDrain();
                }
              }
            }.call(
              this,
              typeof commonjsGlobal !== "undefined"
                ? commonjsGlobal
                : typeof self !== "undefined"
                ? self
                : typeof window !== "undefined"
                ? window
                : {}
            ));
          },
          {},
        ],
        2: [
          function (_dereq_, module, exports) {
            var immediate = _dereq_(1);

            /* istanbul ignore next */
            function INTERNAL() {}

            var handlers = {};

            var REJECTED = ["REJECTED"];
            var FULFILLED = ["FULFILLED"];
            var PENDING = ["PENDING"];

            module.exports = Promise;

            function Promise(resolver) {
              if (typeof resolver !== "function") {
                throw new TypeError("resolver must be a function");
              }
              this.state = PENDING;
              this.queue = [];
              this.outcome = void 0;
              if (resolver !== INTERNAL) {
                safelyResolveThenable(this, resolver);
              }
            }

            Promise.prototype["catch"] = function (onRejected) {
              return this.then(null, onRejected);
            };
            Promise.prototype.then = function (onFulfilled, onRejected) {
              if (
                (typeof onFulfilled !== "function" &&
                  this.state === FULFILLED) ||
                (typeof onRejected !== "function" && this.state === REJECTED)
              ) {
                return this;
              }
              var promise = new this.constructor(INTERNAL);
              if (this.state !== PENDING) {
                var resolver =
                  this.state === FULFILLED ? onFulfilled : onRejected;
                unwrap(promise, resolver, this.outcome);
              } else {
                this.queue.push(
                  new QueueItem(promise, onFulfilled, onRejected)
                );
              }

              return promise;
            };
            function QueueItem(promise, onFulfilled, onRejected) {
              this.promise = promise;
              if (typeof onFulfilled === "function") {
                this.onFulfilled = onFulfilled;
                this.callFulfilled = this.otherCallFulfilled;
              }
              if (typeof onRejected === "function") {
                this.onRejected = onRejected;
                this.callRejected = this.otherCallRejected;
              }
            }
            QueueItem.prototype.callFulfilled = function (value) {
              handlers.resolve(this.promise, value);
            };
            QueueItem.prototype.otherCallFulfilled = function (value) {
              unwrap(this.promise, this.onFulfilled, value);
            };
            QueueItem.prototype.callRejected = function (value) {
              handlers.reject(this.promise, value);
            };
            QueueItem.prototype.otherCallRejected = function (value) {
              unwrap(this.promise, this.onRejected, value);
            };

            function unwrap(promise, func, value) {
              immediate(function () {
                var returnValue;
                try {
                  returnValue = func(value);
                } catch (e) {
                  return handlers.reject(promise, e);
                }
                if (returnValue === promise) {
                  handlers.reject(
                    promise,
                    new TypeError("Cannot resolve promise with itself")
                  );
                } else {
                  handlers.resolve(promise, returnValue);
                }
              });
            }

            handlers.resolve = function (self, value) {
              var result = tryCatch(getThen, value);
              if (result.status === "error") {
                return handlers.reject(self, result.value);
              }
              var thenable = result.value;

              if (thenable) {
                safelyResolveThenable(self, thenable);
              } else {
                self.state = FULFILLED;
                self.outcome = value;
                var i = -1;
                var len = self.queue.length;
                while (++i < len) {
                  self.queue[i].callFulfilled(value);
                }
              }
              return self;
            };
            handlers.reject = function (self, error) {
              self.state = REJECTED;
              self.outcome = error;
              var i = -1;
              var len = self.queue.length;
              while (++i < len) {
                self.queue[i].callRejected(error);
              }
              return self;
            };

            function getThen(obj) {
              // Make sure we only access the accessor once as required by the spec
              var then = obj && obj.then;
              if (
                obj &&
                (typeof obj === "object" || typeof obj === "function") &&
                typeof then === "function"
              ) {
                return function appyThen() {
                  then.apply(obj, arguments);
                };
              }
            }

            function safelyResolveThenable(self, thenable) {
              // Either fulfill, reject or reject with error
              var called = false;
              function onError(value) {
                if (called) {
                  return;
                }
                called = true;
                handlers.reject(self, value);
              }

              function onSuccess(value) {
                if (called) {
                  return;
                }
                called = true;
                handlers.resolve(self, value);
              }

              function tryToUnwrap() {
                thenable(onSuccess, onError);
              }

              var result = tryCatch(tryToUnwrap);
              if (result.status === "error") {
                onError(result.value);
              }
            }

            function tryCatch(func, value) {
              var out = {};
              try {
                out.value = func(value);
                out.status = "success";
              } catch (e) {
                out.status = "error";
                out.value = e;
              }
              return out;
            }

            Promise.resolve = resolve;
            function resolve(value) {
              if (value instanceof this) {
                return value;
              }
              return handlers.resolve(new this(INTERNAL), value);
            }

            Promise.reject = reject;
            function reject(reason) {
              var promise = new this(INTERNAL);
              return handlers.reject(promise, reason);
            }

            Promise.all = all;
            function all(iterable) {
              var self = this;
              if (
                Object.prototype.toString.call(iterable) !== "[object Array]"
              ) {
                return this.reject(new TypeError("must be an array"));
              }

              var len = iterable.length;
              var called = false;
              if (!len) {
                return this.resolve([]);
              }

              var values = new Array(len);
              var resolved = 0;
              var i = -1;
              var promise = new this(INTERNAL);

              while (++i < len) {
                allResolver(iterable[i], i);
              }
              return promise;
              function allResolver(value, i) {
                self.resolve(value).then(resolveFromAll, function (error) {
                  if (!called) {
                    called = true;
                    handlers.reject(promise, error);
                  }
                });
                function resolveFromAll(outValue) {
                  values[i] = outValue;
                  if (++resolved === len && !called) {
                    called = true;
                    handlers.resolve(promise, values);
                  }
                }
              }
            }

            Promise.race = race;
            function race(iterable) {
              var self = this;
              if (
                Object.prototype.toString.call(iterable) !== "[object Array]"
              ) {
                return this.reject(new TypeError("must be an array"));
              }

              var len = iterable.length;
              var called = false;
              if (!len) {
                return this.resolve([]);
              }

              var i = -1;
              var promise = new this(INTERNAL);

              while (++i < len) {
                resolver(iterable[i]);
              }
              return promise;
              function resolver(value) {
                self.resolve(value).then(
                  function (response) {
                    if (!called) {
                      called = true;
                      handlers.resolve(promise, response);
                    }
                  },
                  function (error) {
                    if (!called) {
                      called = true;
                      handlers.reject(promise, error);
                    }
                  }
                );
              }
            }
          },
          { 1: 1 },
        ],
        3: [
          function (_dereq_, module, exports) {
            (function (global) {
              if (typeof global.Promise !== "function") {
                global.Promise = _dereq_(2);
              }
            }.call(
              this,
              typeof commonjsGlobal !== "undefined"
                ? commonjsGlobal
                : typeof self !== "undefined"
                ? self
                : typeof window !== "undefined"
                ? window
                : {}
            ));
          },
          { 2: 2 },
        ],
        4: [
          function (_dereq_, module, exports) {
            var _typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  };

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function getIDB() {
              /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
              try {
                if (typeof indexedDB !== "undefined") {
                  return indexedDB;
                }
                if (typeof webkitIndexedDB !== "undefined") {
                  return webkitIndexedDB;
                }
                if (typeof mozIndexedDB !== "undefined") {
                  return mozIndexedDB;
                }
                if (typeof OIndexedDB !== "undefined") {
                  return OIndexedDB;
                }
                if (typeof msIndexedDB !== "undefined") {
                  return msIndexedDB;
                }
              } catch (e) {
                return;
              }
            }

            var idb = getIDB();

            function isIndexedDBValid() {
              try {
                // Initialize IndexedDB; fall back to vendor-prefixed versions
                // if needed.
                if (!idb || !idb.open) {
                  return false;
                }
                // We mimic PouchDB here;
                //
                // We test for openDatabase because IE Mobile identifies itself
                // as Safari. Oh the lulz...
                var isSafari =
                  typeof openDatabase !== "undefined" &&
                  /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                  !/Chrome/.test(navigator.userAgent) &&
                  !/BlackBerry/.test(navigator.platform);

                var hasFetch =
                  typeof fetch === "function" &&
                  fetch.toString().indexOf("[native code") !== -1;

                // Safari <10.1 does not meet our requirements for IDB support
                // (see: https://github.com/pouchdb/pouchdb/issues/5572).
                // Safari 10.1 shipped with fetch, we can use that to detect it.
                // Note: this creates issues with `window.fetch` polyfills and
                // overrides; see:
                // https://github.com/localForage/localForage/issues/856
                return (
                  (!isSafari || hasFetch) &&
                  typeof indexedDB !== "undefined" &&
                  // some outdated implementations of IDB that appear on Samsung
                  // and HTC Android devices <4.4 are missing IDBKeyRange
                  // See: https://github.com/mozilla/localForage/issues/128
                  // See: https://github.com/mozilla/localForage/issues/272
                  typeof IDBKeyRange !== "undefined"
                );
              } catch (e) {
                return false;
              }
            }

            // Abstracts constructing a Blob object, so it also works in older
            // browsers that don't support the native Blob constructor. (i.e.
            // old QtWebKit versions, at least).
            // Abstracts constructing a Blob object, so it also works in older
            // browsers that don't support the native Blob constructor. (i.e.
            // old QtWebKit versions, at least).
            function createBlob(parts, properties) {
              /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
              parts = parts || [];
              properties = properties || {};
              try {
                return new Blob(parts, properties);
              } catch (e) {
                if (e.name !== "TypeError") {
                  throw e;
                }
                var Builder =
                  typeof BlobBuilder !== "undefined"
                    ? BlobBuilder
                    : typeof MSBlobBuilder !== "undefined"
                    ? MSBlobBuilder
                    : typeof MozBlobBuilder !== "undefined"
                    ? MozBlobBuilder
                    : WebKitBlobBuilder;
                var builder = new Builder();
                for (var i = 0; i < parts.length; i += 1) {
                  builder.append(parts[i]);
                }
                return builder.getBlob(properties.type);
              }
            }

            // This is CommonJS because lie is an external dependency, so Rollup
            // can just ignore it.
            if (typeof Promise === "undefined") {
              // In the "nopromises" build this will just throw if you don't have
              // a global promise object, but it would throw anyway later.
              _dereq_(3);
            }
            var Promise$1 = Promise;

            function executeCallback(promise, callback) {
              if (callback) {
                promise.then(
                  function (result) {
                    callback(null, result);
                  },
                  function (error) {
                    callback(error);
                  }
                );
              }
            }

            function executeTwoCallbacks(promise, callback, errorCallback) {
              if (typeof callback === "function") {
                promise.then(callback);
              }

              if (typeof errorCallback === "function") {
                promise["catch"](errorCallback);
              }
            }

            function normalizeKey(key) {
              // Cast the key to a string, as that's all we can set as a key.
              if (typeof key !== "string") {
                console.warn(key + " used as a key, but it is not a string.");
                key = String(key);
              }

              return key;
            }

            function getCallback() {
              if (
                arguments.length &&
                typeof arguments[arguments.length - 1] === "function"
              ) {
                return arguments[arguments.length - 1];
              }
            }

            // Some code originally from async_storage.js in
            // [Gaia](https://github.com/mozilla-b2g/gaia).

            var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
            var supportsBlobs = void 0;
            var dbContexts = {};
            var toString = Object.prototype.toString;

            // Transaction Modes
            var READ_ONLY = "readonly";
            var READ_WRITE = "readwrite";

            // Transform a binary string to an array buffer, because otherwise
            // weird stuff happens when you try to work with the binary string directly.
            // It is known.
            // From http://stackoverflow.com/questions/14967647/ (continues on next line)
            // encode-decode-image-with-base64-breaks-image (2013-04-21)
            function _binStringToArrayBuffer(bin) {
              var length = bin.length;
              var buf = new ArrayBuffer(length);
              var arr = new Uint8Array(buf);
              for (var i = 0; i < length; i++) {
                arr[i] = bin.charCodeAt(i);
              }
              return buf;
            }

            //
            // Blobs are not supported in all versions of IndexedDB, notably
            // Chrome <37 and Android <5. In those versions, storing a blob will throw.
            //
            // Various other blob bugs exist in Chrome v37-42 (inclusive).
            // Detecting them is expensive and confusing to users, and Chrome 37-42
            // is at very low usage worldwide, so we do a hacky userAgent check instead.
            //
            // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
            // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
            // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
            //
            // Code borrowed from PouchDB. See:
            // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
            //
            function _checkBlobSupportWithoutCaching(idb) {
              return new Promise$1(function (resolve) {
                var txn = idb.transaction(
                  DETECT_BLOB_SUPPORT_STORE,
                  READ_WRITE
                );
                var blob = createBlob([""]);
                txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");

                txn.onabort = function (e) {
                  // If the transaction aborts now its due to not being able to
                  // write to the database, likely due to the disk being full
                  e.preventDefault();
                  e.stopPropagation();
                  resolve(false);
                };

                txn.oncomplete = function () {
                  var matchedChrome =
                    navigator.userAgent.match(/Chrome\/(\d+)/);
                  var matchedEdge = navigator.userAgent.match(/Edge\//);
                  // MS Edge pretends to be Chrome 42:
                  // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
                  resolve(
                    matchedEdge ||
                      !matchedChrome ||
                      parseInt(matchedChrome[1], 10) >= 43
                  );
                };
              })["catch"](function () {
                return false; // error, so assume unsupported
              });
            }

            function _checkBlobSupport(idb) {
              if (typeof supportsBlobs === "boolean") {
                return Promise$1.resolve(supportsBlobs);
              }
              return _checkBlobSupportWithoutCaching(idb).then(function (
                value
              ) {
                supportsBlobs = value;
                return supportsBlobs;
              });
            }

            function _deferReadiness(dbInfo) {
              var dbContext = dbContexts[dbInfo.name];

              // Create a deferred object representing the current database operation.
              var deferredOperation = {};

              deferredOperation.promise = new Promise$1(function (
                resolve,
                reject
              ) {
                deferredOperation.resolve = resolve;
                deferredOperation.reject = reject;
              });

              // Enqueue the deferred operation.
              dbContext.deferredOperations.push(deferredOperation);

              // Chain its promise to the database readiness.
              if (!dbContext.dbReady) {
                dbContext.dbReady = deferredOperation.promise;
              } else {
                dbContext.dbReady = dbContext.dbReady.then(function () {
                  return deferredOperation.promise;
                });
              }
            }

            function _advanceReadiness(dbInfo) {
              var dbContext = dbContexts[dbInfo.name];

              // Dequeue a deferred operation.
              var deferredOperation = dbContext.deferredOperations.pop();

              // Resolve its promise (which is part of the database readiness
              // chain of promises).
              if (deferredOperation) {
                deferredOperation.resolve();
                return deferredOperation.promise;
              }
            }

            function _rejectReadiness(dbInfo, err) {
              var dbContext = dbContexts[dbInfo.name];

              // Dequeue a deferred operation.
              var deferredOperation = dbContext.deferredOperations.pop();

              // Reject its promise (which is part of the database readiness
              // chain of promises).
              if (deferredOperation) {
                deferredOperation.reject(err);
                return deferredOperation.promise;
              }
            }

            function _getConnection(dbInfo, upgradeNeeded) {
              return new Promise$1(function (resolve, reject) {
                dbContexts[dbInfo.name] =
                  dbContexts[dbInfo.name] || createDbContext();

                if (dbInfo.db) {
                  if (upgradeNeeded) {
                    _deferReadiness(dbInfo);
                    dbInfo.db.close();
                  } else {
                    return resolve(dbInfo.db);
                  }
                }

                var dbArgs = [dbInfo.name];

                if (upgradeNeeded) {
                  dbArgs.push(dbInfo.version);
                }

                var openreq = idb.open.apply(idb, dbArgs);

                if (upgradeNeeded) {
                  openreq.onupgradeneeded = function (e) {
                    var db = openreq.result;
                    try {
                      db.createObjectStore(dbInfo.storeName);
                      if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                      }
                    } catch (ex) {
                      if (ex.name === "ConstraintError") {
                        console.warn(
                          'The database "' +
                            dbInfo.name +
                            '"' +
                            " has been upgraded from version " +
                            e.oldVersion +
                            " to version " +
                            e.newVersion +
                            ', but the storage "' +
                            dbInfo.storeName +
                            '" already exists.'
                        );
                      } else {
                        throw ex;
                      }
                    }
                  };
                }

                openreq.onerror = function (e) {
                  e.preventDefault();
                  reject(openreq.error);
                };

                openreq.onsuccess = function () {
                  var db = openreq.result;
                  db.onversionchange = function (e) {
                    // Triggered when the database is modified (e.g. adding an objectStore) or
                    // deleted (even when initiated by other sessions in different tabs).
                    // Closing the connection here prevents those operations from being blocked.
                    // If the database is accessed again later by this instance, the connection
                    // will be reopened or the database recreated as needed.
                    e.target.close();
                  };
                  resolve(db);
                  _advanceReadiness(dbInfo);
                };
              });
            }

            function _getOriginalConnection(dbInfo) {
              return _getConnection(dbInfo, false);
            }

            function _getUpgradedConnection(dbInfo) {
              return _getConnection(dbInfo, true);
            }

            function _isUpgradeNeeded(dbInfo, defaultVersion) {
              if (!dbInfo.db) {
                return true;
              }

              var isNewStore = !dbInfo.db.objectStoreNames.contains(
                dbInfo.storeName
              );
              var isDowngrade = dbInfo.version < dbInfo.db.version;
              var isUpgrade = dbInfo.version > dbInfo.db.version;

              if (isDowngrade) {
                // If the version is not the default one
                // then warn for impossible downgrade.
                if (dbInfo.version !== defaultVersion) {
                  console.warn(
                    'The database "' +
                      dbInfo.name +
                      '"' +
                      " can't be downgraded from version " +
                      dbInfo.db.version +
                      " to version " +
                      dbInfo.version +
                      "."
                  );
                }
                // Align the versions to prevent errors.
                dbInfo.version = dbInfo.db.version;
              }

              if (isUpgrade || isNewStore) {
                // If the store is new then increment the version (if needed).
                // This will trigger an "upgradeneeded" event which is required
                // for creating a store.
                if (isNewStore) {
                  var incVersion = dbInfo.db.version + 1;
                  if (incVersion > dbInfo.version) {
                    dbInfo.version = incVersion;
                  }
                }

                return true;
              }

              return false;
            }

            // encode a blob for indexeddb engines that don't support blobs
            function _encodeBlob(blob) {
              return new Promise$1(function (resolve, reject) {
                var reader = new FileReader();
                reader.onerror = reject;
                reader.onloadend = function (e) {
                  var base64 = btoa(e.target.result || "");
                  resolve({
                    __local_forage_encoded_blob: true,
                    data: base64,
                    type: blob.type,
                  });
                };
                reader.readAsBinaryString(blob);
              });
            }

            // decode an encoded blob
            function _decodeBlob(encodedBlob) {
              var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
              return createBlob([arrayBuff], { type: encodedBlob.type });
            }

            // is this one of our fancy encoded blobs?
            function _isEncodedBlob(value) {
              return value && value.__local_forage_encoded_blob;
            }

            // Specialize the default `ready()` function by making it dependent
            // on the current database operations. Thus, the driver will be actually
            // ready when it's been initialized (default) *and* there are no pending
            // operations on the database (initiated by some other instances).
            function _fullyReady(callback) {
              var self = this;

              var promise = self._initReady().then(function () {
                var dbContext = dbContexts[self._dbInfo.name];

                if (dbContext && dbContext.dbReady) {
                  return dbContext.dbReady;
                }
              });

              executeTwoCallbacks(promise, callback, callback);
              return promise;
            }

            // Try to establish a new db connection to replace the
            // current one which is broken (i.e. experiencing
            // InvalidStateError while creating a transaction).
            function _tryReconnect(dbInfo) {
              _deferReadiness(dbInfo);

              var dbContext = dbContexts[dbInfo.name];
              var forages = dbContext.forages;

              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                if (forage._dbInfo.db) {
                  forage._dbInfo.db.close();
                  forage._dbInfo.db = null;
                }
              }
              dbInfo.db = null;

              return _getOriginalConnection(dbInfo)
                .then(function (db) {
                  dbInfo.db = db;
                  if (_isUpgradeNeeded(dbInfo)) {
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                  }
                  return db;
                })
                .then(function (db) {
                  // store the latest db reference
                  // in case the db was upgraded
                  dbInfo.db = dbContext.db = db;
                  for (var i = 0; i < forages.length; i++) {
                    forages[i]._dbInfo.db = db;
                  }
                })
                ["catch"](function (err) {
                  _rejectReadiness(dbInfo, err);
                  throw err;
                });
            }

            // FF doesn't like Promises (micro-tasks) and IDDB store operations,
            // so we have to do it with callbacks
            function createTransaction(dbInfo, mode, callback, retries) {
              if (retries === undefined) {
                retries = 1;
              }

              try {
                var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
                callback(null, tx);
              } catch (err) {
                if (
                  retries > 0 &&
                  (!dbInfo.db ||
                    err.name === "InvalidStateError" ||
                    err.name === "NotFoundError")
                ) {
                  return Promise$1.resolve()
                    .then(function () {
                      if (
                        !dbInfo.db ||
                        (err.name === "NotFoundError" &&
                          !dbInfo.db.objectStoreNames.contains(
                            dbInfo.storeName
                          ) &&
                          dbInfo.version <= dbInfo.db.version)
                      ) {
                        // increase the db version, to create the new ObjectStore
                        if (dbInfo.db) {
                          dbInfo.version = dbInfo.db.version + 1;
                        }
                        // Reopen the database for upgrading.
                        return _getUpgradedConnection(dbInfo);
                      }
                    })
                    .then(function () {
                      return _tryReconnect(dbInfo).then(function () {
                        createTransaction(dbInfo, mode, callback, retries - 1);
                      });
                    })
                    ["catch"](callback);
                }

                callback(err);
              }
            }

            function createDbContext() {
              return {
                // Running localForages sharing a database.
                forages: [],
                // Shared database.
                db: null,
                // Database readiness (promise).
                dbReady: null,
                // Deferred operations on the database.
                deferredOperations: [],
              };
            }

            // Open the IndexedDB database (automatically creates one if one didn't
            // previously exist), using any options set in the config.
            function _initStorage(options) {
              var self = this;
              var dbInfo = {
                db: null,
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              }

              // Get the current context of the database;
              var dbContext = dbContexts[dbInfo.name];

              // ...or create a new context.
              if (!dbContext) {
                dbContext = createDbContext();
                // Register the new context in the global container.
                dbContexts[dbInfo.name] = dbContext;
              }

              // Register itself as a running localForage in the current context.
              dbContext.forages.push(self);

              // Replace the default `ready()` function with the specialized one.
              if (!self._initReady) {
                self._initReady = self.ready;
                self.ready = _fullyReady;
              }

              // Create an array of initialization states of the related localForages.
              var initPromises = [];

              function ignoreErrors() {
                // Don't handle errors here,
                // just makes sure related localForages aren't pending.
                return Promise$1.resolve();
              }

              for (var j = 0; j < dbContext.forages.length; j++) {
                var forage = dbContext.forages[j];
                if (forage !== self) {
                  // Don't wait for itself...
                  initPromises.push(forage._initReady()["catch"](ignoreErrors));
                }
              }

              // Take a snapshot of the related localForages.
              var forages = dbContext.forages.slice(0);

              // Initialize the connection process only when
              // all the related localForages aren't pending.
              return Promise$1.all(initPromises)
                .then(function () {
                  dbInfo.db = dbContext.db;
                  // Get the connection or open a new one without upgrade.
                  return _getOriginalConnection(dbInfo);
                })
                .then(function (db) {
                  dbInfo.db = db;
                  if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                  }
                  return db;
                })
                .then(function (db) {
                  dbInfo.db = dbContext.db = db;
                  self._dbInfo = dbInfo;
                  // Share the final connection amongst related localForages.
                  for (var k = 0; k < forages.length; k++) {
                    var forage = forages[k];
                    if (forage !== self) {
                      // Self is already up-to-date.
                      forage._dbInfo.db = dbInfo.db;
                      forage._dbInfo.version = dbInfo.version;
                    }
                  }
                });
            }

            function getItem(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_ONLY,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var req = store.get(key);

                          req.onsuccess = function () {
                            var value = req.result;
                            if (value === undefined) {
                              value = null;
                            }
                            if (_isEncodedBlob(value)) {
                              value = _decodeBlob(value);
                            }
                            resolve(value);
                          };

                          req.onerror = function () {
                            reject(req.error);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Iterate over all items stored in database.
            function iterate(iterator, callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_ONLY,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var req = store.openCursor();
                          var iterationNumber = 1;

                          req.onsuccess = function () {
                            var cursor = req.result;

                            if (cursor) {
                              var value = cursor.value;
                              if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                              }
                              var result = iterator(
                                value,
                                cursor.key,
                                iterationNumber++
                              );

                              // when the iterator callback returns any
                              // (non-`undefined`) value, then we stop
                              // the iteration immediately
                              if (result !== void 0) {
                                resolve(result);
                              } else {
                                cursor["continue"]();
                              }
                            } else {
                              resolve();
                            }
                          };

                          req.onerror = function () {
                            reject(req.error);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);

              return promise;
            }

            function setItem(key, value, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                var dbInfo;
                self
                  .ready()
                  .then(function () {
                    dbInfo = self._dbInfo;
                    if (toString.call(value) === "[object Blob]") {
                      return _checkBlobSupport(dbInfo.db).then(function (
                        blobSupport
                      ) {
                        if (blobSupport) {
                          return value;
                        }
                        return _encodeBlob(value);
                      });
                    }
                    return value;
                  })
                  .then(function (value) {
                    createTransaction(
                      self._dbInfo,
                      READ_WRITE,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );

                          // The reason we don't _save_ null is because IE 10 does
                          // not support saving the `null` type in IndexedDB. How
                          // ironic, given the bug below!
                          // See: https://github.com/mozilla/localForage/issues/161
                          if (value === null) {
                            value = undefined;
                          }

                          var req = store.put(value, key);

                          transaction.oncomplete = function () {
                            // Cast to undefined so the value passed to
                            // callback/promise is the same as what one would get out
                            // of `getItem()` later. This leads to some weirdness
                            // (setItem('foo', undefined) will return `null`), but
                            // it's not my fault localStorage is our baseline and that
                            // it's weird.
                            if (value === undefined) {
                              value = null;
                            }

                            resolve(value);
                          };
                          transaction.onabort = transaction.onerror =
                            function () {
                              var err = req.error
                                ? req.error
                                : req.transaction.error;
                              reject(err);
                            };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function removeItem(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_WRITE,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          // We use a Grunt task to make this safe for IE and some
                          // versions of Android (including those used by Cordova).
                          // Normally IE won't like `.delete()` and will insist on
                          // using `['delete']()`, but we have a build step that
                          // fixes this for us now.
                          var req = store["delete"](key);
                          transaction.oncomplete = function () {
                            resolve();
                          };

                          transaction.onerror = function () {
                            reject(req.error);
                          };

                          // The request will be also be aborted if we've exceeded our storage
                          // space.
                          transaction.onabort = function () {
                            var err = req.error
                              ? req.error
                              : req.transaction.error;
                            reject(err);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function clear(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_WRITE,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var req = store.clear();

                          transaction.oncomplete = function () {
                            resolve();
                          };

                          transaction.onabort = transaction.onerror =
                            function () {
                              var err = req.error
                                ? req.error
                                : req.transaction.error;
                              reject(err);
                            };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function length(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_ONLY,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var req = store.count();

                          req.onsuccess = function () {
                            resolve(req.result);
                          };

                          req.onerror = function () {
                            reject(req.error);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function key(n, callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                if (n < 0) {
                  resolve(null);

                  return;
                }

                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_ONLY,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var advanced = false;
                          var req = store.openKeyCursor();

                          req.onsuccess = function () {
                            var cursor = req.result;
                            if (!cursor) {
                              // this means there weren't enough keys
                              resolve(null);

                              return;
                            }

                            if (n === 0) {
                              // We have the first key, return it if that's what they
                              // wanted.
                              resolve(cursor.key);
                            } else {
                              if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                              } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                              }
                            }
                          };

                          req.onerror = function () {
                            reject(req.error);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function keys(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    createTransaction(
                      self._dbInfo,
                      READ_ONLY,
                      function (err, transaction) {
                        if (err) {
                          return reject(err);
                        }

                        try {
                          var store = transaction.objectStore(
                            self._dbInfo.storeName
                          );
                          var req = store.openKeyCursor();
                          var keys = [];

                          req.onsuccess = function () {
                            var cursor = req.result;

                            if (!cursor) {
                              resolve(keys);
                              return;
                            }

                            keys.push(cursor.key);
                            cursor["continue"]();
                          };

                          req.onerror = function () {
                            reject(req.error);
                          };
                        } catch (e) {
                          reject(e);
                        }
                      }
                    );
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function dropInstance(options, callback) {
              callback = getCallback.apply(this, arguments);

              var currentConfig = this.config();
              options = (typeof options !== "function" && options) || {};
              if (!options.name) {
                options.name = options.name || currentConfig.name;
                options.storeName =
                  options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;
              if (!options.name) {
                promise = Promise$1.reject("Invalid arguments");
              } else {
                var isCurrentDb =
                  options.name === currentConfig.name && self._dbInfo.db;

                var dbPromise = isCurrentDb
                  ? Promise$1.resolve(self._dbInfo.db)
                  : _getOriginalConnection(options).then(function (db) {
                      var dbContext = dbContexts[options.name];
                      var forages = dbContext.forages;
                      dbContext.db = db;
                      for (var i = 0; i < forages.length; i++) {
                        forages[i]._dbInfo.db = db;
                      }
                      return db;
                    });

                if (!options.storeName) {
                  promise = dbPromise.then(function (db) {
                    _deferReadiness(options);

                    var dbContext = dbContexts[options.name];
                    var forages = dbContext.forages;

                    db.close();
                    for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                    }

                    var dropDBPromise = new Promise$1(function (
                      resolve,
                      reject
                    ) {
                      var req = idb.deleteDatabase(options.name);

                      req.onerror = function () {
                        var db = req.result;
                        if (db) {
                          db.close();
                        }
                        reject(req.error);
                      };

                      req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn(
                          'dropInstance blocked for database "' +
                            options.name +
                            '" until all open connections are closed'
                        );
                      };

                      req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                          db.close();
                        }
                        resolve(db);
                      };
                    });

                    return dropDBPromise
                      .then(function (db) {
                        dbContext.db = db;
                        for (var i = 0; i < forages.length; i++) {
                          var _forage = forages[i];
                          _advanceReadiness(_forage._dbInfo);
                        }
                      })
                      ["catch"](function (err) {
                        (_rejectReadiness(options, err) || Promise$1.resolve())[
                          "catch"
                        ](function () {});
                        throw err;
                      });
                  });
                } else {
                  promise = dbPromise.then(function (db) {
                    if (!db.objectStoreNames.contains(options.storeName)) {
                      return;
                    }

                    var newVersion = db.version + 1;

                    _deferReadiness(options);

                    var dbContext = dbContexts[options.name];
                    var forages = dbContext.forages;

                    db.close();
                    for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                      forage._dbInfo.version = newVersion;
                    }

                    var dropObjectPromise = new Promise$1(function (
                      resolve,
                      reject
                    ) {
                      var req = idb.open(options.name, newVersion);

                      req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                      };

                      req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                      };

                      req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                      };
                    });

                    return dropObjectPromise
                      .then(function (db) {
                        dbContext.db = db;
                        for (var j = 0; j < forages.length; j++) {
                          var _forage2 = forages[j];
                          _forage2._dbInfo.db = db;
                          _advanceReadiness(_forage2._dbInfo);
                        }
                      })
                      ["catch"](function (err) {
                        (_rejectReadiness(options, err) || Promise$1.resolve())[
                          "catch"
                        ](function () {});
                        throw err;
                      });
                  });
                }
              }

              executeCallback(promise, callback);
              return promise;
            }

            var asyncStorage = {
              _driver: "asyncStorage",
              _initStorage: _initStorage,
              _support: isIndexedDBValid(),
              iterate: iterate,
              getItem: getItem,
              setItem: setItem,
              removeItem: removeItem,
              clear: clear,
              length: length,
              key: key,
              keys: keys,
              dropInstance: dropInstance,
            };

            function isWebSQLValid() {
              return typeof openDatabase === "function";
            }

            // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
            // it to Base64, so this is how we store it to prevent very strange errors with less
            // verbose ways of binary <-> string data storage.
            var BASE_CHARS =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            var BLOB_TYPE_PREFIX = "~~local_forage_type~";
            var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

            var SERIALIZED_MARKER = "__lfsc__:";
            var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

            // OMG the serializations!
            var TYPE_ARRAYBUFFER = "arbf";
            var TYPE_BLOB = "blob";
            var TYPE_INT8ARRAY = "si08";
            var TYPE_UINT8ARRAY = "ui08";
            var TYPE_UINT8CLAMPEDARRAY = "uic8";
            var TYPE_INT16ARRAY = "si16";
            var TYPE_INT32ARRAY = "si32";
            var TYPE_UINT16ARRAY = "ur16";
            var TYPE_UINT32ARRAY = "ui32";
            var TYPE_FLOAT32ARRAY = "fl32";
            var TYPE_FLOAT64ARRAY = "fl64";
            var TYPE_SERIALIZED_MARKER_LENGTH =
              SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

            var toString$1 = Object.prototype.toString;

            function stringToBuffer(serializedString) {
              // Fill the string into a ArrayBuffer.
              var bufferLength = serializedString.length * 0.75;
              var len = serializedString.length;
              var i;
              var p = 0;
              var encoded1, encoded2, encoded3, encoded4;

              if (serializedString[serializedString.length - 1] === "=") {
                bufferLength--;
                if (serializedString[serializedString.length - 2] === "=") {
                  bufferLength--;
                }
              }

              var buffer = new ArrayBuffer(bufferLength);
              var bytes = new Uint8Array(buffer);

              for (i = 0; i < len; i += 4) {
                encoded1 = BASE_CHARS.indexOf(serializedString[i]);
                encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
                encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
                encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

                /*jslint bitwise: true */
                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
              }
              return buffer;
            }

            // Converts a buffer to a string to store, serialized, in the backend
            // storage library.
            function bufferToString(buffer) {
              // base64-arraybuffer
              var bytes = new Uint8Array(buffer);
              var base64String = "";
              var i;

              for (i = 0; i < bytes.length; i += 3) {
                /*jslint bitwise: true */
                base64String += BASE_CHARS[bytes[i] >> 2];
                base64String +=
                  BASE_CHARS[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
                base64String +=
                  BASE_CHARS[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
                base64String += BASE_CHARS[bytes[i + 2] & 63];
              }

              if (bytes.length % 3 === 2) {
                base64String =
                  base64String.substring(0, base64String.length - 1) + "=";
              } else if (bytes.length % 3 === 1) {
                base64String =
                  base64String.substring(0, base64String.length - 2) + "==";
              }

              return base64String;
            }

            // Serialize a value, afterwards executing a callback (which usually
            // instructs the `setItem()` callback/promise to be executed). This is how
            // we store binary data with localStorage.
            function serialize(value, callback) {
              var valueType = "";
              if (value) {
                valueType = toString$1.call(value);
              }

              // Cannot use `value instanceof ArrayBuffer` or such here, as these
              // checks fail when running the tests using casper.js...
              //
              // TODO: See why those tests fail and use a better solution.
              if (
                value &&
                (valueType === "[object ArrayBuffer]" ||
                  (value.buffer &&
                    toString$1.call(value.buffer) === "[object ArrayBuffer]"))
              ) {
                // Convert binary arrays to a string and prefix the string with
                // a special marker.
                var buffer;
                var marker = SERIALIZED_MARKER;

                if (value instanceof ArrayBuffer) {
                  buffer = value;
                  marker += TYPE_ARRAYBUFFER;
                } else {
                  buffer = value.buffer;

                  if (valueType === "[object Int8Array]") {
                    marker += TYPE_INT8ARRAY;
                  } else if (valueType === "[object Uint8Array]") {
                    marker += TYPE_UINT8ARRAY;
                  } else if (valueType === "[object Uint8ClampedArray]") {
                    marker += TYPE_UINT8CLAMPEDARRAY;
                  } else if (valueType === "[object Int16Array]") {
                    marker += TYPE_INT16ARRAY;
                  } else if (valueType === "[object Uint16Array]") {
                    marker += TYPE_UINT16ARRAY;
                  } else if (valueType === "[object Int32Array]") {
                    marker += TYPE_INT32ARRAY;
                  } else if (valueType === "[object Uint32Array]") {
                    marker += TYPE_UINT32ARRAY;
                  } else if (valueType === "[object Float32Array]") {
                    marker += TYPE_FLOAT32ARRAY;
                  } else if (valueType === "[object Float64Array]") {
                    marker += TYPE_FLOAT64ARRAY;
                  } else {
                    callback(new Error("Failed to get type for BinaryArray"));
                  }
                }

                callback(marker + bufferToString(buffer));
              } else if (valueType === "[object Blob]") {
                // Conver the blob to a binaryArray and then to a string.
                var fileReader = new FileReader();

                fileReader.onload = function () {
                  // Backwards-compatible prefix for the blob type.
                  var str =
                    BLOB_TYPE_PREFIX +
                    value.type +
                    "~" +
                    bufferToString(this.result);

                  callback(SERIALIZED_MARKER + TYPE_BLOB + str);
                };

                fileReader.readAsArrayBuffer(value);
              } else {
                try {
                  callback(JSON.stringify(value));
                } catch (e) {
                  console.error(
                    "Couldn't convert value into a JSON string: ",
                    value
                  );

                  callback(null, e);
                }
              }
            }

            // Deserialize data we've inserted into a value column/field. We place
            // special markers into our strings to mark them as encoded; this isn't
            // as nice as a meta field, but it's the only sane thing we can do whilst
            // keeping localStorage support intact.
            //
            // Oftentimes this will just deserialize JSON content, but if we have a
            // special marker (SERIALIZED_MARKER, defined above), we will extract
            // some kind of arraybuffer/binary data/typed array out of the string.
            function deserialize(value) {
              // If we haven't marked this string as being specially serialized (i.e.
              // something other than serialized JSON), we can just return it and be
              // done with it.
              if (
                value.substring(0, SERIALIZED_MARKER_LENGTH) !==
                SERIALIZED_MARKER
              ) {
                return JSON.parse(value);
              }

              // The following code deals with deserializing some kind of Blob or
              // TypedArray. First we separate out the type of data we're dealing
              // with from the data itself.
              var serializedString = value.substring(
                TYPE_SERIALIZED_MARKER_LENGTH
              );
              var type = value.substring(
                SERIALIZED_MARKER_LENGTH,
                TYPE_SERIALIZED_MARKER_LENGTH
              );

              var blobType;
              // Backwards-compatible blob type serialization strategy.
              // DBs created with older versions of localForage will simply not have the blob type.
              if (
                type === TYPE_BLOB &&
                BLOB_TYPE_PREFIX_REGEX.test(serializedString)
              ) {
                var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                blobType = matcher[1];
                serializedString = serializedString.substring(
                  matcher[0].length
                );
              }
              var buffer = stringToBuffer(serializedString);

              // Return the right type based on the code/type set during
              // serialization.
              switch (type) {
                case TYPE_ARRAYBUFFER:
                  return buffer;
                case TYPE_BLOB:
                  return createBlob([buffer], { type: blobType });
                case TYPE_INT8ARRAY:
                  return new Int8Array(buffer);
                case TYPE_UINT8ARRAY:
                  return new Uint8Array(buffer);
                case TYPE_UINT8CLAMPEDARRAY:
                  return new Uint8ClampedArray(buffer);
                case TYPE_INT16ARRAY:
                  return new Int16Array(buffer);
                case TYPE_UINT16ARRAY:
                  return new Uint16Array(buffer);
                case TYPE_INT32ARRAY:
                  return new Int32Array(buffer);
                case TYPE_UINT32ARRAY:
                  return new Uint32Array(buffer);
                case TYPE_FLOAT32ARRAY:
                  return new Float32Array(buffer);
                case TYPE_FLOAT64ARRAY:
                  return new Float64Array(buffer);
                default:
                  throw new Error("Unkown type: " + type);
              }
            }

            var localforageSerializer = {
              serialize: serialize,
              deserialize: deserialize,
              stringToBuffer: stringToBuffer,
              bufferToString: bufferToString,
            };

            /*
             * Includes code from:
             *
             * base64-arraybuffer
             * https://github.com/niklasvh/base64-arraybuffer
             *
             * Copyright (c) 2012 Niklas von Hertzen
             * Licensed under the MIT license.
             */

            function createDbTable(t, dbInfo, callback, errorCallback) {
              t.executeSql(
                "CREATE TABLE IF NOT EXISTS " +
                  dbInfo.storeName +
                  " " +
                  "(id INTEGER PRIMARY KEY, key unique, value)",
                [],
                callback,
                errorCallback
              );
            }

            // Open the WebSQL database (automatically creates one if one didn't
            // previously exist), using any options set in the config.
            function _initStorage$1(options) {
              var self = this;
              var dbInfo = {
                db: null,
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] =
                    typeof options[i] !== "string"
                      ? options[i].toString()
                      : options[i];
                }
              }

              var dbInfoPromise = new Promise$1(function (resolve, reject) {
                // Open the database; the openDatabase API will automatically
                // create it for us if it doesn't exist.
                try {
                  dbInfo.db = openDatabase(
                    dbInfo.name,
                    String(dbInfo.version),
                    dbInfo.description,
                    dbInfo.size
                  );
                } catch (e) {
                  return reject(e);
                }

                // Create our key/value table if it doesn't exist.
                dbInfo.db.transaction(function (t) {
                  createDbTable(
                    t,
                    dbInfo,
                    function () {
                      self._dbInfo = dbInfo;
                      resolve();
                    },
                    function (t, error) {
                      reject(error);
                    }
                  );
                }, reject);
              });

              dbInfo.serializer = localforageSerializer;
              return dbInfoPromise;
            }

            function tryExecuteSql(
              t,
              dbInfo,
              sqlStatement,
              args,
              callback,
              errorCallback
            ) {
              t.executeSql(
                sqlStatement,
                args,
                callback,
                function (t, error) {
                  if (error.code === error.SYNTAX_ERR) {
                    t.executeSql(
                      "SELECT name FROM sqlite_master " +
                        "WHERE type='table' AND name = ?",
                      [dbInfo.storeName],
                      function (t, results) {
                        if (!results.rows.length) {
                          // if the table is missing (was deleted)
                          // re-create it table and retry
                          createDbTable(
                            t,
                            dbInfo,
                            function () {
                              t.executeSql(
                                sqlStatement,
                                args,
                                callback,
                                errorCallback
                              );
                            },
                            errorCallback
                          );
                        } else {
                          errorCallback(t, error);
                        }
                      },
                      errorCallback
                    );
                  } else {
                    errorCallback(t, error);
                  }
                },
                errorCallback
              );
            }

            function getItem$1(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "SELECT * FROM " +
                          dbInfo.storeName +
                          " WHERE key = ? LIMIT 1",
                        [key],
                        function (t, results) {
                          var result = results.rows.length
                            ? results.rows.item(0).value
                            : null;

                          // Check to see if this is serialized content we need to
                          // unpack.
                          if (result) {
                            result = dbInfo.serializer.deserialize(result);
                          }

                          resolve(result);
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function iterate$1(iterator, callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;

                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "SELECT * FROM " + dbInfo.storeName,
                        [],
                        function (t, results) {
                          var rows = results.rows;
                          var length = rows.length;

                          for (var i = 0; i < length; i++) {
                            var item = rows.item(i);
                            var result = item.value;

                            // Check to see if this is serialized content
                            // we need to unpack.
                            if (result) {
                              result = dbInfo.serializer.deserialize(result);
                            }

                            result = iterator(result, item.key, i + 1);

                            // void(0) prevents problems with redefinition
                            // of `undefined`.
                            if (result !== void 0) {
                              resolve(result);
                              return;
                            }
                          }

                          resolve();
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function _setItem(key, value, callback, retriesLeft) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    // The localStorage API doesn't return undefined values in an
                    // "expected" way, so undefined is always cast to null in all
                    // drivers. See: https://github.com/mozilla/localForage/pull/42
                    if (value === undefined) {
                      value = null;
                    }

                    // Save the original value to pass to the callback.
                    var originalValue = value;

                    var dbInfo = self._dbInfo;
                    dbInfo.serializer.serialize(value, function (value, error) {
                      if (error) {
                        reject(error);
                      } else {
                        dbInfo.db.transaction(
                          function (t) {
                            tryExecuteSql(
                              t,
                              dbInfo,
                              "INSERT OR REPLACE INTO " +
                                dbInfo.storeName +
                                " " +
                                "(key, value) VALUES (?, ?)",
                              [key, value],
                              function () {
                                resolve(originalValue);
                              },
                              function (t, error) {
                                reject(error);
                              }
                            );
                          },
                          function (sqlError) {
                            // The transaction failed; check
                            // to see if it's a quota error.
                            if (sqlError.code === sqlError.QUOTA_ERR) {
                              // We reject the callback outright for now, but
                              // it's worth trying to re-run the transaction.
                              // Even if the user accepts the prompt to use
                              // more storage on Safari, this error will
                              // be called.
                              //
                              // Try to re-run the transaction.
                              if (retriesLeft > 0) {
                                resolve(
                                  _setItem.apply(self, [
                                    key,
                                    originalValue,
                                    callback,
                                    retriesLeft - 1,
                                  ])
                                );
                                return;
                              }
                              reject(sqlError);
                            }
                          }
                        );
                      }
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function setItem$1(key, value, callback) {
              return _setItem.apply(this, [key, value, callback, 1]);
            }

            function removeItem$1(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "DELETE FROM " + dbInfo.storeName + " WHERE key = ?",
                        [key],
                        function () {
                          resolve();
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Deletes every item in the table.
            // TODO: Find out if this resets the AUTO_INCREMENT number.
            function clear$1(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "DELETE FROM " + dbInfo.storeName,
                        [],
                        function () {
                          resolve();
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Does a simple `COUNT(key)` to get the number of items stored in
            // localForage.
            function length$1(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      // Ahhh, SQL makes this one soooooo easy.
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "SELECT COUNT(key) as c FROM " + dbInfo.storeName,
                        [],
                        function (t, results) {
                          var result = results.rows.item(0).c;
                          resolve(result);
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Return the key located at key index X; essentially gets the key from a
            // `WHERE id = ?`. This is the most efficient way I can think to implement
            // this rarely-used (in my experience) part of the API, but it can seem
            // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
            // the ID of each key will change every time it's updated. Perhaps a stored
            // procedure for the `setItem()` SQL would solve this problem?
            // TODO: Don't change ID on `setItem()`.
            function key$1(n, callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "SELECT key FROM " +
                          dbInfo.storeName +
                          " WHERE id = ? LIMIT 1",
                        [n + 1],
                        function (t, results) {
                          var result = results.rows.length
                            ? results.rows.item(0).key
                            : null;
                          resolve(result);
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function keys$1(callback) {
              var self = this;

              var promise = new Promise$1(function (resolve, reject) {
                self
                  .ready()
                  .then(function () {
                    var dbInfo = self._dbInfo;
                    dbInfo.db.transaction(function (t) {
                      tryExecuteSql(
                        t,
                        dbInfo,
                        "SELECT key FROM " + dbInfo.storeName,
                        [],
                        function (t, results) {
                          var keys = [];

                          for (var i = 0; i < results.rows.length; i++) {
                            keys.push(results.rows.item(i).key);
                          }

                          resolve(keys);
                        },
                        function (t, error) {
                          reject(error);
                        }
                      );
                    });
                  })
                  ["catch"](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // https://www.w3.org/TR/webdatabase/#databases
            // > There is no way to enumerate or delete the databases available for an origin from this API.
            function getAllStoreNames(db) {
              return new Promise$1(function (resolve, reject) {
                db.transaction(
                  function (t) {
                    t.executeSql(
                      "SELECT name FROM sqlite_master " +
                        "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                      [],
                      function (t, results) {
                        var storeNames = [];

                        for (var i = 0; i < results.rows.length; i++) {
                          storeNames.push(results.rows.item(i).name);
                        }

                        resolve({
                          db: db,
                          storeNames: storeNames,
                        });
                      },
                      function (t, error) {
                        reject(error);
                      }
                    );
                  },
                  function (sqlError) {
                    reject(sqlError);
                  }
                );
              });
            }

            function dropInstance$1(options, callback) {
              callback = getCallback.apply(this, arguments);

              var currentConfig = this.config();
              options = (typeof options !== "function" && options) || {};
              if (!options.name) {
                options.name = options.name || currentConfig.name;
                options.storeName =
                  options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;
              if (!options.name) {
                promise = Promise$1.reject("Invalid arguments");
              } else {
                promise = new Promise$1(function (resolve) {
                  var db;
                  if (options.name === currentConfig.name) {
                    // use the db reference of the current instance
                    db = self._dbInfo.db;
                  } else {
                    db = openDatabase(options.name, "", "", 0);
                  }

                  if (!options.storeName) {
                    // drop all database tables
                    resolve(getAllStoreNames(db));
                  } else {
                    resolve({
                      db: db,
                      storeNames: [options.storeName],
                    });
                  }
                }).then(function (operationInfo) {
                  return new Promise$1(function (resolve, reject) {
                    operationInfo.db.transaction(
                      function (t) {
                        function dropTable(storeName) {
                          return new Promise$1(function (resolve, reject) {
                            t.executeSql(
                              "DROP TABLE IF EXISTS " + storeName,
                              [],
                              function () {
                                resolve();
                              },
                              function (t, error) {
                                reject(error);
                              }
                            );
                          });
                        }

                        var operations = [];
                        for (
                          var i = 0, len = operationInfo.storeNames.length;
                          i < len;
                          i++
                        ) {
                          operations.push(
                            dropTable(operationInfo.storeNames[i])
                          );
                        }

                        Promise$1.all(operations)
                          .then(function () {
                            resolve();
                          })
                          ["catch"](function (e) {
                            reject(e);
                          });
                      },
                      function (sqlError) {
                        reject(sqlError);
                      }
                    );
                  });
                });
              }

              executeCallback(promise, callback);
              return promise;
            }

            var webSQLStorage = {
              _driver: "webSQLStorage",
              _initStorage: _initStorage$1,
              _support: isWebSQLValid(),
              iterate: iterate$1,
              getItem: getItem$1,
              setItem: setItem$1,
              removeItem: removeItem$1,
              clear: clear$1,
              length: length$1,
              key: key$1,
              keys: keys$1,
              dropInstance: dropInstance$1,
            };

            function isLocalStorageValid() {
              try {
                return (
                  typeof localStorage !== "undefined" &&
                  "setItem" in localStorage &&
                  // in IE8 typeof localStorage.setItem === 'object'
                  !!localStorage.setItem
                );
              } catch (e) {
                return false;
              }
            }

            function _getKeyPrefix(options, defaultConfig) {
              var keyPrefix = options.name + "/";

              if (options.storeName !== defaultConfig.storeName) {
                keyPrefix += options.storeName + "/";
              }
              return keyPrefix;
            }

            // Check if localStorage throws when saving an item
            function checkIfLocalStorageThrows() {
              var localStorageTestKey = "_localforage_support_test";

              try {
                localStorage.setItem(localStorageTestKey, true);
                localStorage.removeItem(localStorageTestKey);

                return false;
              } catch (e) {
                return true;
              }
            }

            // Check if localStorage is usable and allows to save an item
            // This method checks if localStorage is usable in Safari Private Browsing
            // mode, or in any other case where the available quota for localStorage
            // is 0 and there wasn't any saved items yet.
            function _isLocalStorageUsable() {
              return !checkIfLocalStorageThrows() || localStorage.length > 0;
            }

            // Config the localStorage backend, using options set in the config.
            function _initStorage$2(options) {
              var self = this;
              var dbInfo = {};
              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              }

              dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

              if (!_isLocalStorageUsable()) {
                return Promise$1.reject();
              }

              self._dbInfo = dbInfo;
              dbInfo.serializer = localforageSerializer;

              return Promise$1.resolve();
            }

            // Remove all keys from the datastore, effectively destroying all data in
            // the app's key/value store!
            function clear$2(callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var keyPrefix = self._dbInfo.keyPrefix;

                for (var i = localStorage.length - 1; i >= 0; i--) {
                  var key = localStorage.key(i);

                  if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                  }
                }
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Retrieve an item from the store. Unlike the original async_storage
            // library in Gaia, we don't modify return values at all. If a key's value
            // is `undefined`, we pass that value to the callback function.
            function getItem$2(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var result = localStorage.getItem(dbInfo.keyPrefix + key);

                // If a result was found, parse it from the serialized
                // string into a JS object. If result isn't truthy, the key
                // is likely undefined and we'll pass it straight to the
                // callback.
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }

                return result;
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Iterate over all items in the store.
            function iterate$2(iterator, callback) {
              var self = this;

              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var keyPrefix = dbInfo.keyPrefix;
                var keyPrefixLength = keyPrefix.length;
                var length = localStorage.length;

                // We use a dedicated iterator instead of the `i` variable below
                // so other keys we fetch in localStorage aren't counted in
                // the `iterationNumber` argument passed to the `iterate()`
                // callback.
                //
                // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
                var iterationNumber = 1;

                for (var i = 0; i < length; i++) {
                  var key = localStorage.key(i);
                  if (key.indexOf(keyPrefix) !== 0) {
                    continue;
                  }
                  var value = localStorage.getItem(key);

                  // If a result was found, parse it from the serialized
                  // string into a JS object. If result isn't truthy, the
                  // key is likely undefined and we'll pass it straight
                  // to the iterator.
                  if (value) {
                    value = dbInfo.serializer.deserialize(value);
                  }

                  value = iterator(
                    value,
                    key.substring(keyPrefixLength),
                    iterationNumber++
                  );

                  if (value !== void 0) {
                    return value;
                  }
                }
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Same as localStorage's key() method, except takes a callback.
            function key$2(n, callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var result;
                try {
                  result = localStorage.key(n);
                } catch (error) {
                  result = null;
                }

                // Remove the prefix from the key, if a key is found.
                if (result) {
                  result = result.substring(dbInfo.keyPrefix.length);
                }

                return result;
              });

              executeCallback(promise, callback);
              return promise;
            }

            function keys$2(callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                var length = localStorage.length;
                var keys = [];

                for (var i = 0; i < length; i++) {
                  var itemKey = localStorage.key(i);
                  if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                    keys.push(itemKey.substring(dbInfo.keyPrefix.length));
                  }
                }

                return keys;
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Supply the number of keys in the datastore to the callback function.
            function length$2(callback) {
              var self = this;
              var promise = self.keys().then(function (keys) {
                return keys.length;
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Remove an item from the store, nice and simple.
            function removeItem$2(key, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = self.ready().then(function () {
                var dbInfo = self._dbInfo;
                localStorage.removeItem(dbInfo.keyPrefix + key);
              });

              executeCallback(promise, callback);
              return promise;
            }

            // Set a key's value and run an optional callback once the value is set.
            // Unlike Gaia's implementation, the callback function is passed the value,
            // in case you want to operate on that value only after you're sure it
            // saved, or something like that.
            function setItem$2(key, value, callback) {
              var self = this;

              key = normalizeKey(key);

              var promise = self.ready().then(function () {
                // Convert undefined values to null.
                // https://github.com/mozilla/localForage/pull/42
                if (value === undefined) {
                  value = null;
                }

                // Save the original value to pass to the callback.
                var originalValue = value;

                return new Promise$1(function (resolve, reject) {
                  var dbInfo = self._dbInfo;
                  dbInfo.serializer.serialize(value, function (value, error) {
                    if (error) {
                      reject(error);
                    } else {
                      try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                      } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (
                          e.name === "QuotaExceededError" ||
                          e.name === "NS_ERROR_DOM_QUOTA_REACHED"
                        ) {
                          reject(e);
                        }
                        reject(e);
                      }
                    }
                  });
                });
              });

              executeCallback(promise, callback);
              return promise;
            }

            function dropInstance$2(options, callback) {
              callback = getCallback.apply(this, arguments);

              options = (typeof options !== "function" && options) || {};
              if (!options.name) {
                var currentConfig = this.config();
                options.name = options.name || currentConfig.name;
                options.storeName =
                  options.storeName || currentConfig.storeName;
              }

              var self = this;
              var promise;
              if (!options.name) {
                promise = Promise$1.reject("Invalid arguments");
              } else {
                promise = new Promise$1(function (resolve) {
                  if (!options.storeName) {
                    resolve(options.name + "/");
                  } else {
                    resolve(_getKeyPrefix(options, self._defaultConfig));
                  }
                }).then(function (keyPrefix) {
                  for (var i = localStorage.length - 1; i >= 0; i--) {
                    var key = localStorage.key(i);

                    if (key.indexOf(keyPrefix) === 0) {
                      localStorage.removeItem(key);
                    }
                  }
                });
              }

              executeCallback(promise, callback);
              return promise;
            }

            var localStorageWrapper = {
              _driver: "localStorageWrapper",
              _initStorage: _initStorage$2,
              _support: isLocalStorageValid(),
              iterate: iterate$2,
              getItem: getItem$2,
              setItem: setItem$2,
              removeItem: removeItem$2,
              clear: clear$2,
              length: length$2,
              key: key$2,
              keys: keys$2,
              dropInstance: dropInstance$2,
            };

            var sameValue = function sameValue(x, y) {
              return (
                x === y ||
                (typeof x === "number" &&
                  typeof y === "number" &&
                  isNaN(x) &&
                  isNaN(y))
              );
            };

            var includes = function includes(array, searchElement) {
              var len = array.length;
              var i = 0;
              while (i < len) {
                if (sameValue(array[i], searchElement)) {
                  return true;
                }
                i++;
              }

              return false;
            };

            var isArray =
              Array.isArray ||
              function (arg) {
                return Object.prototype.toString.call(arg) === "[object Array]";
              };

            // Drivers are stored here when `defineDriver()` is called.
            // They are shared across all instances of localForage.
            var DefinedDrivers = {};

            var DriverSupport = {};

            var DefaultDrivers = {
              INDEXEDDB: asyncStorage,
              WEBSQL: webSQLStorage,
              LOCALSTORAGE: localStorageWrapper,
            };

            var DefaultDriverOrder = [
              DefaultDrivers.INDEXEDDB._driver,
              DefaultDrivers.WEBSQL._driver,
              DefaultDrivers.LOCALSTORAGE._driver,
            ];

            var OptionalDriverMethods = ["dropInstance"];

            var LibraryMethods = [
              "clear",
              "getItem",
              "iterate",
              "key",
              "keys",
              "length",
              "removeItem",
              "setItem",
            ].concat(OptionalDriverMethods);

            var DefaultConfig = {
              description: "",
              driver: DefaultDriverOrder.slice(),
              name: "localforage",
              // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
              // we can use without a prompt.
              size: 4980736,
              storeName: "keyvaluepairs",
              version: 1.0,
            };

            function callWhenReady(localForageInstance, libraryMethod) {
              localForageInstance[libraryMethod] = function () {
                var _args = arguments;
                return localForageInstance.ready().then(function () {
                  return localForageInstance[libraryMethod].apply(
                    localForageInstance,
                    _args
                  );
                });
              };
            }

            function extend() {
              for (var i = 1; i < arguments.length; i++) {
                var arg = arguments[i];

                if (arg) {
                  for (var _key in arg) {
                    if (arg.hasOwnProperty(_key)) {
                      if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                      } else {
                        arguments[0][_key] = arg[_key];
                      }
                    }
                  }
                }
              }

              return arguments[0];
            }

            var LocalForage = (function () {
              function LocalForage(options) {
                _classCallCheck(this, LocalForage);

                for (var driverTypeKey in DefaultDrivers) {
                  if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                    var driver = DefaultDrivers[driverTypeKey];
                    var driverName = driver._driver;
                    this[driverTypeKey] = driverName;

                    if (!DefinedDrivers[driverName]) {
                      // we don't need to wait for the promise,
                      // since the default drivers can be defined
                      // in a blocking manner
                      this.defineDriver(driver);
                    }
                  }
                }

                this._defaultConfig = extend({}, DefaultConfig);
                this._config = extend({}, this._defaultConfig, options);
                this._driverSet = null;
                this._initDriver = null;
                this._ready = false;
                this._dbInfo = null;

                this._wrapLibraryMethodsWithReady();
                this.setDriver(this._config.driver)["catch"](function () {});
              }

              // Set any config values for localForage; can be called anytime before
              // the first API call (e.g. `getItem`, `setItem`).
              // We loop through options so we don't overwrite existing config
              // values.

              LocalForage.prototype.config = function config(options) {
                // If the options argument is an object, we use it to set values.
                // Otherwise, we return either a specified config value or all
                // config values.
                if (
                  (typeof options === "undefined"
                    ? "undefined"
                    : _typeof(options)) === "object"
                ) {
                  // If localforage is ready and fully initialized, we can't set
                  // any new configuration values. Instead, we return an error.
                  if (this._ready) {
                    return new Error(
                      "Can't call config() after localforage " +
                        "has been used."
                    );
                  }

                  for (var i in options) {
                    if (i === "storeName") {
                      options[i] = options[i].replace(/\W/g, "_");
                    }

                    if (i === "version" && typeof options[i] !== "number") {
                      return new Error("Database version must be a number.");
                    }

                    this._config[i] = options[i];
                  }

                  // after all config options are set and
                  // the driver option is used, try setting it
                  if ("driver" in options && options.driver) {
                    return this.setDriver(this._config.driver);
                  }

                  return true;
                } else if (typeof options === "string") {
                  return this._config[options];
                } else {
                  return this._config;
                }
              };

              // Used to define a custom driver, shared across all instances of
              // localForage.

              LocalForage.prototype.defineDriver = function defineDriver(
                driverObject,
                callback,
                errorCallback
              ) {
                var promise = new Promise$1(function (resolve, reject) {
                  try {
                    var driverName = driverObject._driver;
                    var complianceError = new Error(
                      "Custom driver not compliant; see " +
                        "https://mozilla.github.io/localForage/#definedriver"
                    );

                    // A driver name should be defined and not overlap with the
                    // library-defined, default drivers.
                    if (!driverObject._driver) {
                      reject(complianceError);
                      return;
                    }

                    var driverMethods = LibraryMethods.concat("_initStorage");
                    for (var i = 0, len = driverMethods.length; i < len; i++) {
                      var driverMethodName = driverMethods[i];

                      // when the property is there,
                      // it should be a method even when optional
                      var isRequired = !includes(
                        OptionalDriverMethods,
                        driverMethodName
                      );
                      if (
                        (isRequired || driverObject[driverMethodName]) &&
                        typeof driverObject[driverMethodName] !== "function"
                      ) {
                        reject(complianceError);
                        return;
                      }
                    }

                    var configureMissingMethods =
                      function configureMissingMethods() {
                        var methodNotImplementedFactory =
                          function methodNotImplementedFactory(methodName) {
                            return function () {
                              var error = new Error(
                                "Method " +
                                  methodName +
                                  " is not implemented by the current driver"
                              );
                              var promise = Promise$1.reject(error);
                              executeCallback(
                                promise,
                                arguments[arguments.length - 1]
                              );
                              return promise;
                            };
                          };

                        for (
                          var _i = 0, _len = OptionalDriverMethods.length;
                          _i < _len;
                          _i++
                        ) {
                          var optionalDriverMethod = OptionalDriverMethods[_i];
                          if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] =
                              methodNotImplementedFactory(optionalDriverMethod);
                          }
                        }
                      };

                    configureMissingMethods();

                    var setDriverSupport = function setDriverSupport(support) {
                      if (DefinedDrivers[driverName]) {
                        console.info(
                          "Redefining LocalForage driver: " + driverName
                        );
                      }
                      DefinedDrivers[driverName] = driverObject;
                      DriverSupport[driverName] = support;
                      // don't use a then, so that we can define
                      // drivers that have simple _support methods
                      // in a blocking manner
                      resolve();
                    };

                    if ("_support" in driverObject) {
                      if (
                        driverObject._support &&
                        typeof driverObject._support === "function"
                      ) {
                        driverObject._support().then(setDriverSupport, reject);
                      } else {
                        setDriverSupport(!!driverObject._support);
                      }
                    } else {
                      setDriverSupport(true);
                    }
                  } catch (e) {
                    reject(e);
                  }
                });

                executeTwoCallbacks(promise, callback, errorCallback);
                return promise;
              };

              LocalForage.prototype.driver = function driver() {
                return this._driver || null;
              };

              LocalForage.prototype.getDriver = function getDriver(
                driverName,
                callback,
                errorCallback
              ) {
                var getDriverPromise = DefinedDrivers[driverName]
                  ? Promise$1.resolve(DefinedDrivers[driverName])
                  : Promise$1.reject(new Error("Driver not found."));

                executeTwoCallbacks(getDriverPromise, callback, errorCallback);
                return getDriverPromise;
              };

              LocalForage.prototype.getSerializer = function getSerializer(
                callback
              ) {
                var serializerPromise = Promise$1.resolve(
                  localforageSerializer
                );
                executeTwoCallbacks(serializerPromise, callback);
                return serializerPromise;
              };

              LocalForage.prototype.ready = function ready(callback) {
                var self = this;

                var promise = self._driverSet.then(function () {
                  if (self._ready === null) {
                    self._ready = self._initDriver();
                  }

                  return self._ready;
                });

                executeTwoCallbacks(promise, callback, callback);
                return promise;
              };

              LocalForage.prototype.setDriver = function setDriver(
                drivers,
                callback,
                errorCallback
              ) {
                var self = this;

                if (!isArray(drivers)) {
                  drivers = [drivers];
                }

                var supportedDrivers = this._getSupportedDrivers(drivers);

                function setDriverToConfig() {
                  self._config.driver = self.driver();
                }

                function extendSelfWithDriver(driver) {
                  self._extend(driver);
                  setDriverToConfig();

                  self._ready = self._initStorage(self._config);
                  return self._ready;
                }

                function initDriver(supportedDrivers) {
                  return function () {
                    var currentDriverIndex = 0;

                    function driverPromiseLoop() {
                      while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self
                          .getDriver(driverName)
                          .then(extendSelfWithDriver)
                          ["catch"](driverPromiseLoop);
                      }

                      setDriverToConfig();
                      var error = new Error(
                        "No available storage method found."
                      );
                      self._driverSet = Promise$1.reject(error);
                      return self._driverSet;
                    }

                    return driverPromiseLoop();
                  };
                }

                // There might be a driver initialization in progress
                // so wait for it to finish in order to avoid a possible
                // race condition to set _dbInfo
                var oldDriverSetDone =
                  this._driverSet !== null
                    ? this._driverSet["catch"](function () {
                        return Promise$1.resolve();
                      })
                    : Promise$1.resolve();

                this._driverSet = oldDriverSetDone
                  .then(function () {
                    var driverName = supportedDrivers[0];
                    self._dbInfo = null;
                    self._ready = null;

                    return self.getDriver(driverName).then(function (driver) {
                      self._driver = driver._driver;
                      setDriverToConfig();
                      self._wrapLibraryMethodsWithReady();
                      self._initDriver = initDriver(supportedDrivers);
                    });
                  })
                  ["catch"](function () {
                    setDriverToConfig();
                    var error = new Error("No available storage method found.");
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                  });

                executeTwoCallbacks(this._driverSet, callback, errorCallback);
                return this._driverSet;
              };

              LocalForage.prototype.supports = function supports(driverName) {
                return !!DriverSupport[driverName];
              };

              LocalForage.prototype._extend = function _extend(
                libraryMethodsAndProperties
              ) {
                extend(this, libraryMethodsAndProperties);
              };

              LocalForage.prototype._getSupportedDrivers =
                function _getSupportedDrivers(drivers) {
                  var supportedDrivers = [];
                  for (var i = 0, len = drivers.length; i < len; i++) {
                    var driverName = drivers[i];
                    if (this.supports(driverName)) {
                      supportedDrivers.push(driverName);
                    }
                  }
                  return supportedDrivers;
                };

              LocalForage.prototype._wrapLibraryMethodsWithReady =
                function _wrapLibraryMethodsWithReady() {
                  // Add a stub for each driver API method that delays the call to the
                  // corresponding driver method until localForage is ready. These stubs
                  // will be replaced by the driver methods as soon as the driver is
                  // loaded, so there is no performance impact.
                  for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                    callWhenReady(this, LibraryMethods[i]);
                  }
                };

              LocalForage.prototype.createInstance = function createInstance(
                options
              ) {
                return new LocalForage(options);
              };

              return LocalForage;
            })();

            // The actual localForage object that we expose as a module or via a
            // global. It's extended by pulling in one of our other libraries.

            var localforage_js = new LocalForage();

            module.exports = localforage_js;
          },
          { 3: 3 },
        ],
      },
      {},
      [4]
    )(4);
  });
})(localforage$1);

var localforage = localforage$1.exports;

/** Simpler wrapper for a file-backed cache for arbitrary metadata. */
class LocalStorageCache {
  constructor(appId, version) {
    this.appId = appId;
    this.version = version;
    this.persister = localforage.createInstance({
      name: "dataview/cache/" + appId,
      driver: [localforage.INDEXEDDB],
      description:
        "Cache metadata about files and sections in the dataview index.",
    });
  }
  /** Drop the entire cache instance and re-create a new fresh instance. */
  async recreate() {
    await localforage.dropInstance({ name: "dataview/cache/" + this.appId });
    this.persister = localforage.createInstance({
      name: "dataview/cache/" + this.appId,
      driver: [localforage.INDEXEDDB],
      description:
        "Cache metadata about files and sections in the dataview index.",
    });
  }
  /** Load file metadata by path. */
  async loadFile(path) {
    return this.persister.getItem(this.fileKey(path)).then((raw) => {
      let result = raw;
      if (result) result.data = Transferable.value(result.data);
      return result;
    });
  }
  /** Store file metadata by path. */
  async storeFile(path, data) {
    await this.persister.setItem(this.fileKey(path), {
      version: this.version,
      time: Date.now(),
      data: Transferable.transferable(data),
    });
  }
  /** Drop old file keys that no longer exist. */
  async synchronize(existing) {
    let keys = new Set(await this.allFiles());
    for (let exist of existing) keys.delete(exist);
    // Any keys remaining after deleting existing keys are non-existent keys that should be cleared from cache.
    for (let key of keys) await this.persister.removeItem(this.fileKey(key));
    return keys;
  }
  /** Obtain a list of all metadata keys. */
  async allKeys() {
    return this.persister.keys();
  }
  /** Obtain a list of all persisted files. */
  async allFiles() {
    let keys = await this.allKeys();
    return keys.filter((k) => k.startsWith("file:")).map((k) => k.substring(5));
  }
  fileKey(path) {
    return "file:" + path;
  }
}

function decodeBase64(base64, enableUnicode) {
  var binaryString = atob(base64);
  if (enableUnicode) {
    var binaryView = new Uint8Array(binaryString.length);
    for (var i = 0, n = binaryString.length; i < n; ++i) {
      binaryView[i] = binaryString.charCodeAt(i);
    }
    return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
  }
  return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
  var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
  var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
  var source = decodeBase64(base64, enableUnicode);
  var start = source.indexOf("\n", 10) + 1;
  var body =
    source.substring(start) +
    (sourcemap ? "//# sourceMappingURL=" + sourcemap : "");
  var blob = new Blob([body], { type: "application/javascript" });
  return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
  var url;
  return function WorkerFactory(options) {
    url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
    return new Worker(url, options);
  };
}

var WorkerFactory = createBase64WorkerFactory(
  null,
  false
);
/* eslint-enable */

/** Controls and creates Dataview file importers, allowing for asynchronous loading and parsing of files. */
/** Multi-threaded file parser which debounces rapid file requests automatically. */
class FileImporter extends obsidian.Component {
  constructor(numWorkers, vault, metadataCache) {
    super();
    this.numWorkers = numWorkers;
    this.vault = vault;
    this.metadataCache = metadataCache;
    this.workers = [];
    this.busy = [];
    this.reloadQueue = [];
    this.reloadSet = new Set();
    this.callbacks = new Map();
    for (let index = 0; index < numWorkers; index++) {
      let worker = new WorkerFactory({
        name: "Dataview Indexer " + (index + 1),
      });
      worker.onmessage = (evt) =>
        this.finish(evt.data.path, Transferable.value(evt.data.result), index);
      this.workers.push(worker);
      this.register(() => worker.terminate());
      this.busy.push(false);
    }
  }
  /**
   * Queue the given file for reloading. Multiple reload requests for the same file in a short time period will be de-bounced
   * and all be resolved by a single actual file reload.
   */
  reload(file) {
    let promise = new Promise((resolve, reject) => {
      var _a;
      if (this.callbacks.has(file.path))
        (_a = this.callbacks.get(file.path)) === null || _a === void 0
          ? void 0
          : _a.push([resolve, reject]);
      else this.callbacks.set(file.path, [[resolve, reject]]);
    });
    // De-bounce repeated requests for the same file.
    if (this.reloadSet.has(file.path)) return promise;
    this.reloadSet.add(file.path);
    // Immediately run this task if there are available workers; otherwise, add it to the queue.
    let workerId = this.nextAvailableWorker();
    if (workerId !== undefined) {
      this.send(file, workerId);
    } else {
      this.reloadQueue.push(file);
    }
    return promise;
  }
  /** Finish the parsing of a file, potentially queueing a new file. */
  finish(path, data, index) {
    var _a;
    // Cache the callbacks before we do book-keeping.
    let calls = [].concat(
      (_a = this.callbacks.get(path)) !== null && _a !== void 0 ? _a : []
    );
    // Book-keeping to clear metadata & allow the file to be re-loaded again.
    this.reloadSet.delete(path);
    this.callbacks.delete(path);
    // Notify the queue this file is available for new work.
    this.busy[index] = false;
    // Queue a new job onto this worker.
    let job = this.reloadQueue.shift();
    if (job !== undefined) this.send(job, index);
    // Resolve promises to let users know this file has finished.
    if ("$error" in data) {
      for (let [_, reject] of calls) reject(data["$error"]);
    } else {
      for (let [callback, _] of calls) callback(data);
    }
  }
  /** Send a new task to the given worker ID. */
  send(file, workerId) {
    this.busy[workerId] = true;
    this.vault.cachedRead(file).then((c) =>
      this.workers[workerId].postMessage({
        path: file.path,
        contents: c,
        stat: file.stat,
        metadata: this.metadataCache.getFileCache(file),
      })
    );
  }
  /** Find the next available, non-busy worker; return undefined if all workers are busy. */
  nextAvailableWorker() {
    let index = this.busy.indexOf(false);
    return index == -1 ? undefined : index;
  }
}

/** Stores various indices on all files in the vault to make dataview generation fast. */
/** Aggregate index which has several sub-indices and will initialize all of them. */
class FullIndex extends obsidian.Component {
  /** Construct a new index using the app data and a current data version. */
  constructor(app, indexVersion, onChange) {
    super();
    this.app = app;
    this.indexVersion = indexVersion;
    this.onChange = onChange;
    this.initialized = false;
    this.vault = app.vault;
    this.metadataCache = app.metadataCache;
    this.persister = new LocalStorageCache(app.appId || "shared", indexVersion);
    this.pages = new Map();
    this.tags = new IndexMap();
    this.etags = new IndexMap();
    this.links = new IndexMap();
    this.revision = 0;
    // Handles asynchronous reloading of files on web workers.
    this.addChild(
      (this.importer = new FileImporter(2, this.vault, this.metadataCache))
    );
    // Prefix listens to file creation/deletion/rename, and not modifies, so we let it set up it's own listeners.
    this.addChild(
      (this.prefix = PrefixIndex.create(this.vault, () => this.touch()))
    );
    // The CSV cache also needs to listen to filesystem events for cache invalidation.
    this.addChild((this.csv = new CsvCache(this.vault)));
    // The starred cache fetches starred entries semi-regularly via an interval.
    this.addChild(
      (this.starred = new StarredCache(this.app, () => this.touch()))
    );
  }
  /** Generate a full index from the given vault. */
  static create(app, indexVersion, onChange) {
    return new FullIndex(app, indexVersion, onChange);
  }
  /** Trigger a metadata event on the metadata cache. */
  trigger(...args) {
    this.metadataCache.trigger("dataview:metadata-change", ...args);
  }
  /** "Touch" the index, incrementing the revision number and causing downstream views to reload. */
  touch() {
    this.revision += 1;
    this.onChange();
  }
  /** Runs through the whole vault to set up initial file metadata. */
  initialize() {
    // The metadata cache is updated on initial file index and file loads.
    this.registerEvent(
      this.metadataCache.on("resolve", (file) => this.reload(file))
    );
    // Renames do not set off the metadata cache; catch these explicitly.
    this.registerEvent(this.vault.on("rename", this.rename, this));
    // File creation does cause a metadata change, but deletes do not. Clear the caches for this.
    this.registerEvent(
      this.vault.on("delete", (af) => {
        if (!(af instanceof obsidian.TFile) || !PathFilters.markdown(af.path))
          return;
        let file = af;
        this.pages.delete(file.path);
        this.tags.delete(file.path);
        this.etags.delete(file.path);
        this.links.delete(file.path);
        this.touch();
        this.trigger("delete", file);
      })
    );
    // Asynchronously initialize actual content in the background.
    this._initialize(this.vault.getMarkdownFiles());
  }
  /** Drops the local storage cache and re-indexes all files; this should generally be used if you expect cache issues. */
  async reinitialize() {
    await this.persister.recreate();
    const files = this.vault.getMarkdownFiles();
    const start = Date.now();
    let promises = files.map((file) => this.reload(file));
    await Promise.all(promises);
    console.log(
      `Dataview: re-initialized index with ${files.length} files (${
        (Date.now() - start) / 1000.0
      }s)`
    );
  }
  /** Internal asynchronous initializer. */
  async _initialize(files) {
    let reloadStart = Date.now();
    let promises = files.map((l) => this.reload(l));
    let results = await Promise.all(promises);
    let cached = 0,
      skipped = 0;
    for (let item of results) {
      if (item.skipped) {
        skipped += 1;
        continue;
      }
      if (item.cached) cached += 1;
    }
    this.initialized = true;
    this.metadataCache.trigger("dataview:index-ready");
    console.log(
      `Dataview: all ${files.length} files have been indexed in ${
        (Date.now() - reloadStart) / 1000.0
      }s (${cached} cached, ${skipped} skipped).`
    );
    // Drop keys for files which do not exist anymore.
    let remaining = await this.persister.synchronize(files.map((l) => l.path));
    if (remaining.size > 0) {
      console.log(
        `Dataview: Dropped cache entries for ${remaining.size} deleted files.`
      );
    }
  }
  rename(file, oldPath) {
    if (!(file instanceof obsidian.TFile) || !PathFilters.markdown(file.path))
      return;
    if (this.pages.has(oldPath)) {
      const oldMeta = this.pages.get(oldPath);
      this.pages.delete(oldPath);
      if (oldMeta) {
        oldMeta.path = file.path;
        this.pages.set(file.path, oldMeta);
      }
    }
    this.tags.rename(oldPath, file.path);
    this.links.rename(oldPath, file.path);
    this.etags.rename(oldPath, file.path);
    this.touch();
    this.trigger("rename", file, oldPath);
  }
  /** Queue a file for reloading; this is done asynchronously in the background and may take a few seconds. */
  async reload(file) {
    if (!PathFilters.markdown(file.path))
      return { cached: false, skipped: true };
    // The first load of a file is attempted from persisted cache; subsequent loads just use the importer.
    if (this.pages.has(file.path) || this.initialized) {
      await this.import(file);
      return { cached: false, skipped: false };
    } else {
      // Check the cache for the latest data; if it is out of date or non-existent, then reload.
      return this.persister.loadFile(file.path).then(async (cached) => {
        if (
          !cached ||
          cached.time < file.stat.mtime ||
          cached.version != this.indexVersion
        ) {
          // This cache value is out of data, reload via the importer and update the cache.
          // We will skip files with no active file metadata - they will be caught by a later reload
          // via the 'resolve' metadata event.
          let fileCache = this.metadataCache.getFileCache(file);
          if (fileCache === undefined || fileCache === null)
            return { cached: false, skipped: true };
          await this.import(file);
          return { cached: false, skipped: false };
        } else {
          // Use the cached data since it is up to date and on the same version.
          this.finish(file, cached.data);
          return { cached: true, skipped: false };
        }
      });
    }
  }
  /** Import a file directly from disk, skipping the cache. */
  async import(file) {
    return this.importer.reload(file).then((r) => {
      this.finish(file, r);
      this.persister.storeFile(file.path, r);
    });
  }
  /** Finish the reloading of file metadata by adding it to in memory indexes. */
  finish(file, parsed) {
    let meta = PageMetadata.canonicalize(parsed, (link) => {
      let realPath = this.metadataCache.getFirstLinkpathDest(
        link.path,
        file.path
      );
      if (realPath) return link.withPath(realPath.path);
      else return link;
    });
    this.pages.set(file.path, meta);
    this.tags.set(file.path, meta.fullTags());
    this.etags.set(file.path, meta.tags);
    this.links.set(file.path, new Set(meta.links.map((l) => l.path)));
    this.touch();
    this.trigger("update", file);
  }
}
/** Indexes files by their full prefix - essentially a simple prefix tree. */
class PrefixIndex extends obsidian.Component {
  constructor(vault, updateRevision) {
    super();
    this.vault = vault;
    this.updateRevision = updateRevision;
  }
  static create(vault, updateRevision) {
    return new PrefixIndex(vault, updateRevision);
  }
  *walk(folder, filter) {
    for (const file of folder.children) {
      if (file instanceof obsidian.TFolder) {
        yield* this.walk(file, filter);
      } else if (filter ? filter(file.path) : true) {
        yield file.path;
      }
    }
  }
  /** Get the list of all files under the given path. */
  get(prefix, filter) {
    let folder = this.vault.getAbstractFileByPath(prefix || "/");
    return new Set(
      folder instanceof obsidian.TFolder ? this.walk(folder, filter) : []
    );
  }
  /** Determines if the given path exists in the prefix index. */
  pathExists(path) {
    return this.vault.getAbstractFileByPath(path || "/") != null;
  }
  /** Determines if the given prefix exists in the prefix index. */
  nodeExists(prefix) {
    return (
      this.vault.getAbstractFileByPath(prefix || "/") instanceof
      obsidian.TFolder
    );
  }
  /**
   * Use the in-memory prefix index to convert a relative path to an absolute one.
   */
  resolveRelative(path, origin) {
    if (!origin) return path;
    else if (path.startsWith("/")) return path.substring(1);
    let relativePath = getParentFolder(origin) + "/" + path;
    if (this.pathExists(relativePath)) return relativePath;
    else return path;
  }
}
/** Simple path filters which filter file types. */
var PathFilters;
(function (PathFilters) {
  function csv(path) {
    return path.toLowerCase().endsWith(".csv");
  }
  PathFilters.csv = csv;
  function markdown(path) {
    let lcPath = path.toLowerCase();
    return lcPath.endsWith(".md") || lcPath.endsWith(".markdown");
  }
  PathFilters.markdown = markdown;
})(PathFilters || (PathFilters = {}));
/**
 * Caches in-use CSVs to make high-frequency reloads (such as actively looking at a document
 * that uses CSV) fast.
 */
class CsvCache extends obsidian.Component {
  constructor(vault) {
    super();
    this.vault = vault;
    this.cache = new Map();
    // Force-flush the cache on CSV file deletions or modifications.
    this.registerEvent(
      this.vault.on("modify", (file) => {
        if (file instanceof obsidian.TFile && PathFilters.csv(file.path))
          this.cache.delete(file.path);
      })
    );
    this.registerEvent(
      this.vault.on("delete", (file) => {
        if (file instanceof obsidian.TFile && PathFilters.csv(file.path))
          this.cache.delete(file.path);
      })
    );
  }
  /** Load a CSV file from the cache, doing a fresh load if it has not been loaded. */
  async get(path) {
    // Clear old entries on every fresh load, since the path being loaded may be stale.
    this.clearOldEntries();
    let existing = this.cache.get(path);
    if (existing) return Result.success(existing.data);
    else {
      let value = await this.loadInternal(path);
      if (value.successful)
        this.cache.set(path, { data: value.value, loadTime: DateTime_1.now() });
      return value;
    }
  }
  /** Do the actual raw loading of a CSV path (which is either local or an HTTP request). */
  async loadInternal(path) {
    // Allow http://, https://, and file:// prefixes which use AJAX.
    if (
      path.startsWith("http://") ||
      path.startsWith("https://") ||
      path.startsWith("file://")
    ) {
      try {
        let result = await fetch(path, {
          method: "GET",
          mode: "no-cors",
          redirect: "follow",
        });
        return Result.success(parseCsv(await result.text()));
      } catch (ex) {
        return Result.failure("" + ex + "\n\n" + ex.stack);
      }
    }
    // Otherwise, assume it is a fully-qualified file path.
    try {
      let fileData = await this.vault.adapter.read(path);
      return Result.success(parseCsv(fileData));
    } catch (ex) {
      return Result.failure(`Failed to load data from path '${path}'.`);
    }
  }
  /** Clear old entries in the cache (as measured by insertion time). */
  clearOldEntries() {
    let currentTime = DateTime_1.now();
    let keysToRemove = new Set();
    for (let [key, value] of this.cache.entries()) {
      let entryAge = Math.abs(
        currentTime.diff(value.loadTime, "seconds").seconds
      );
      if (entryAge > CsvCache.CACHE_EXPIRY_SECONDS) keysToRemove.add(key);
    }
    keysToRemove.forEach((key) => this.cache.delete(key));
  }
}
CsvCache.CACHE_EXPIRY_SECONDS = 5 * 60;
/** Optional connector to the Obsidian 'Starred' plugin which allows for efficiently querying if a file is starred or not. */
class StarredCache extends obsidian.Component {
  constructor(app, onUpdate) {
    super();
    this.app = app;
    this.onUpdate = onUpdate;
    this.stars = StarredCache.fetch(this.app);
    this.registerInterval(
      window.setInterval(() => this.reload(), StarredCache.REFRESH_INTERVAL)
    );
    const initialHandler = window.setTimeout(
      () => this.reload(),
      StarredCache.INITIAL_DELAY
    );
    this.register(() => window.clearTimeout(initialHandler));
  }
  /** Determines if the given path is starred. */
  starred(path) {
    return this.stars.has(path);
  }
  reload() {
    let newStars = StarredCache.fetch(this.app);
    if (!setsEqual(this.stars, newStars)) {
      this.stars = newStars;
      this.onUpdate();
    }
  }
  /** Fetch all starred files from the stars plugin, if present. */
  static fetch(app) {
    var _a, _b, _c, _d;
    let items =
      (_d =
        (_c =
          (_b =
            (_a =
              app === null || app === void 0 ? void 0 : app.internalPlugins) ===
              null || _a === void 0
              ? void 0
              : _a.plugins) === null || _b === void 0
            ? void 0
            : _b.starred) === null || _c === void 0
          ? void 0
          : _c.instance) === null || _d === void 0
        ? void 0
        : _d.items;
    if (items == undefined) return new Set();
    return new Set(items.filter((l) => l.type === "file").map((l) => l.path));
  }
}
/** Initial delay before checking the cache; we need to wait for it to asynchronously load the initial stars. */
StarredCache.INITIAL_DELAY = 4 * 1000;
/** How frequently to check for star updates. */
StarredCache.REFRESH_INTERVAL = 30 * 1000;
/** A generic index which indexes variables of the form key -> value[], allowing both forward and reverse lookups. */
class IndexMap {
  /** Create a new, empty index map. */
  constructor() {
    this.map = new Map();
    this.invMap = new Map();
  }
  /** Returns all values for the given key.  (This is unused except for tests - does it really need to be here?) */
  get(key) {
    let result = this.map.get(key);
    if (result) {
      return new Set(result);
    } else {
      return new Set();
    }
  }
  /** Returns all keys that reference the given key. Mutating the returned set is not allowed. */
  getInverse(value) {
    return this.invMap.get(value) || IndexMap.EMPTY_SET;
  }
  /** Sets the key to the given values; this will delete the old mapping for the key if one was present. */
  set(key, values) {
    var _a, _b;
    if (!values.size) {
      // no need to store if no values
      this.delete(key);
      return this;
    }
    let oldValues = this.map.get(key);
    if (oldValues) {
      for (let value of oldValues) {
        // Only delete the ones we're not adding back
        if (!values.has(key))
          (_a = this.invMap.get(value)) === null || _a === void 0
            ? void 0
            : _a.delete(key);
      }
    }
    this.map.set(key, values);
    for (let value of values) {
      if (!this.invMap.has(value)) this.invMap.set(value, new Set([key]));
      else
        (_b = this.invMap.get(value)) === null || _b === void 0
          ? void 0
          : _b.add(key);
    }
    return this;
  }
  /** Clears all values for the given key so they can be re-added. */
  delete(key) {
    var _a;
    let oldValues = this.map.get(key);
    if (!oldValues) return false;
    this.map.delete(key);
    for (let value of oldValues) {
      (_a = this.invMap.get(value)) === null || _a === void 0
        ? void 0
        : _a.delete(key);
    }
    return true;
  }
  /** Rename all references to the given key to a new value. */
  rename(oldKey, newKey) {
    let oldValues = this.map.get(oldKey);
    if (!oldValues) return false;
    this.delete(oldKey);
    this.set(newKey, oldValues);
    return true;
  }
  /** Clear the entire index. */
  clear() {
    this.map.clear();
    this.invMap.clear();
  }
}
IndexMap.EMPTY_SET = Object.freeze(new Set());

/** Collect data matching a source query. */
/** Find source paths which match the given source. */
function matchingSourcePaths(source, index, originFile = "") {
  var _a;
  switch (source.type) {
    case "empty":
      return Result.success(new Set());
    case "tag":
      return Result.success(index.tags.getInverse(source.tag));
    case "csv":
      return Result.success(
        new Set([index.prefix.resolveRelative(source.path, originFile)])
      );
    case "folder":
      // Prefer loading from the folder at the given path.
      if (index.prefix.nodeExists(source.folder))
        return Result.success(
          index.prefix.get(source.folder, PathFilters.markdown)
        );
      // But allow for loading individual files if they exist.
      if (index.prefix.pathExists(source.folder))
        return Result.success(new Set([source.folder]));
      else if (index.prefix.pathExists(source.folder + ".md"))
        return Result.success(new Set([source.folder + ".md"]));
      // For backwards-compat, return an empty result even if the folder does not exist.
      return Result.success(new Set());
    case "link":
      let fullPath =
        (_a = index.metadataCache.getFirstLinkpathDest(
          source.file,
          originFile
        )) === null || _a === void 0
          ? void 0
          : _a.path;
      if (!fullPath) {
        // Look in links which includes unresolved links
        return Result.success(index.links.getInverse(source.file));
      }
      if (source.direction === "incoming") {
        // To find all incoming links (i.e., things that link to this), use the index that Obsidian provides.
        // TODO: Use an actual index so this isn't a fullscan.
        let resolved = index.metadataCache.resolvedLinks;
        let incoming = new Set();
        for (let [key, value] of Object.entries(resolved)) {
          if (fullPath in value) incoming.add(key);
        }
        return Result.success(incoming);
      } else {
        let resolved = index.metadataCache.resolvedLinks;
        if (!(fullPath in resolved))
          return Result.failure(
            `Could not find file "${source.file}" during link lookup - does it exist?`
          );
        return Result.success(
          new Set(Object.keys(index.metadataCache.resolvedLinks[fullPath]))
        );
      }
    case "binaryop":
      return Result.flatMap2(
        matchingSourcePaths(source.left, index, originFile),
        matchingSourcePaths(source.right, index, originFile),
        (left, right) => {
          if (source.op == "&") {
            let result = new Set();
            for (let elem of right) {
              if (left.has(elem)) result.add(elem);
            }
            return Result.success(result);
          } else if (source.op == "|") {
            let result = new Set(left);
            for (let elem of right) result.add(elem);
            return Result.success(result);
          } else {
            return Result.failure(`Unrecognized operator '${source.op}'.`);
          }
        }
      );
    case "negate":
      return matchingSourcePaths(source.child, index, originFile).map(
        (child) => {
          // TODO: This is obviously very inefficient. Can be improved by complicating the
          // return type of this function & optimizing 'and' / 'or'.
          let allFiles = new Set(
            index.vault.getMarkdownFiles().map((f) => f.path)
          );
          child.forEach((f) => allFiles.delete(f));
          return allFiles;
        }
      );
  }
}
/** Convert a path to the data for that path; usually markdown pages, but could also be other file types (like CSV).  */
async function resolvePathData(path, index) {
  if (PathFilters.csv(path)) return resolveCsvData(path, index);
  else return resolveMarkdownData(path, index);
}
// TODO: We shouldn't be doing path normalization here relative to an origin file,
/** Convert a CSV path to the data in the CSV (in dataview format). */
async function resolveCsvData(path, index) {
  let rawData = await index.csv.get(path);
  return rawData.map((rows) => {
    return rows.map((row, index) => {
      return {
        id: `${path}#${index}`,
        data: row,
      };
    });
  });
}
/** Convert a path pointing to a markdown page, into the associated metadata. */
function resolveMarkdownData(path, index) {
  let page = index.pages.get(path);
  if (!page) return Result.success([]);
  return Result.success([
    {
      id: Link.file(path),
      data: page.serialize(index),
    },
  ]);
}
/** Resolve a source to the collection of data rows that it matches. */
async function resolveSource(source, index, originFile = "") {
  let paths = matchingSourcePaths(source, index, originFile);
  if (!paths.successful) return Result.failure(paths.error);
  let result = [];
  for (let path of paths.value) {
    let resolved = await resolvePathData(path, index);
    if (!resolved.successful) return resolved;
    for (let val of resolved.value) result.push(val);
  }
  return Result.success(result);
}

/** Default function implementations for the expression evaluator. */
/**
 * Allows for the creation of functions that check the number and type of their arguments, and dispatch
 * to different implemenations based on the types of the inputs.
 */
class FunctionBuilder {
  constructor(name) {
    this.name = name;
    this.variants = [];
    this.vectorized = {};
  }
  /** Add a general function variant which accepts any number of arguments of any type. */
  vararg(impl) {
    this.variants.push({ args: [], varargs: true, impl });
    return this;
  }
  /** Add a function variant which takes in a single argument. */
  add1(argType, impl) {
    this.variants.push({
      args: [argType],
      varargs: false,
      impl: (c, ...rest) => impl(rest[0], c),
    });
    return this;
  }
  /** Add a function variant which takes in two typed arguments. */
  add2(arg1, arg2, impl) {
    this.variants.push({
      args: [arg1, arg2],
      varargs: false,
      impl: (c, ...rest) => impl(rest[0], rest[1], c),
    });
    return this;
  }
  /** Add a function variant which takes in three typed arguments. */
  add3(arg1, arg2, arg3, impl) {
    this.variants.push({
      args: [arg1, arg2, arg3],
      varargs: false,
      impl: (c, ...rest) => impl(rest[0], rest[1], rest[2], c),
    });
    return this;
  }
  /** Add vectorized variants which accept the given number of arguments and delegate. */
  vectorize(numArgs, positions) {
    this.vectorized[numArgs] = positions;
    return this;
  }
  /** Return a function which checks the number and type of arguments, passing them on to the first matching variant. */
  build() {
    let self = (context, ...args) => {
      let types = [];
      for (let arg of args) {
        let argType = Values.typeOf(arg);
        if (!argType)
          throw Error(`Unrecognized argument type for argument '${arg}'`);
        types.push(argType);
      }
      // Handle vectorization, possibly in multiple fields.
      if (this.vectorized[types.length]) {
        let vectorizedPositions = this.vectorized[types.length].filter(
          (k) => types[k] == "array"
        );
        if (vectorizedPositions.length > 0) {
          let minLength = vectorizedPositions
            .map((p) => args[p].length)
            .reduce((p, c) => Math.min(p, c));
          // Call the subfunction for each element in the longest array.
          // If you call a vectorized function with different-length arrays,
          // the output is limited by the length of the shortest array.
          let result = [];
          for (let vpos = 0; vpos < minLength; vpos++) {
            let subargs = [];
            for (let index = 0; index < args.length; index++) {
              if (vectorizedPositions.includes(index)) {
                let arr = args[index];
                subargs.push(arr[vpos]);
              } else {
                subargs.push(args[index]);
              }
            }
            result.push(self(context, ...subargs));
          }
          return result;
        }
      }
      outer: for (let variant of this.variants) {
        if (variant.varargs) return variant.impl(context, ...args);
        if (variant.args.length != types.length) continue;
        for (let index = 0; index < variant.args.length; index++) {
          if (variant.args[index] != "*" && variant.args[index] != types[index])
            continue outer;
        }
        return variant.impl(context, ...args);
      }
      throw Error(
        `No implementation of '${this.name}' found for arguments: ${types.join(
          ", "
        )}`
      );
    };
    return self;
  }
}
/** Utilities for managing function implementations. */
var Functions;
(function (Functions) {
  /** Bind a context to a function implementation, yielding a function which does not need the context argument. */
  function bind(func, context) {
    return (...args) => func(context, ...args);
  }
  Functions.bind = bind;
  /** Bind a context to all functions in the given map, yielding a new map of bound functions. */
  function bindAll(funcs, context) {
    let result = {};
    for (let [key, func] of Object.entries(funcs)) {
      result[key] = Functions.bind(func, context);
    }
    return result;
  }
  Functions.bindAll = bindAll;
})(Functions || (Functions = {}));
/**
 * Collection of all defined functions; defined here so that they can be called from within dataview,
 * and test code.
 */
var DefaultFunctions;
(function (DefaultFunctions) {
  DefaultFunctions.typeOf = new FunctionBuilder("type")
    .add1("array", (_) => "array")
    .add1("boolean", (_) => "boolean")
    .add1("date", (_) => "date")
    .add1("duration", (_) => "duration")
    .add1("function", (_) => "function")
    .add1("widget", (_) => "widget")
    .add1("link", (_) => "link")
    .add1("null", (_) => "null")
    .add1("number", (_) => "number")
    .add1("object", (_) => "object")
    .add1("string", (_) => "string")
    .add1("*", (_) => "unknown")
    .build();
  /** Compute the length of a data type. */
  DefaultFunctions.length = new FunctionBuilder("length")
    .add1("array", (a) => a.length)
    .add1("object", (a) => Object.keys(a).length)
    .add1("string", (a) => a.length)
    .add1("null", (_a) => 0)
    .build();
  /** List constructor function. */
  DefaultFunctions.list = (_context, ...args) => args;
  /** Object constructor function. */
  DefaultFunctions.object = (_context, ...args) => {
    if (args.length % 2 != 0)
      throw Error("object() requires an even number of arguments");
    let result = {};
    for (let index = 0; index < args.length; index += 2) {
      let key = args[index];
      if (!Values.isString(key))
        throw Error(
          "keys should be of type string for object(key1, value1, ...)"
        );
      result[key] = args[index + 1];
    }
    return result;
  };
  /** Internal link constructor function. */
  DefaultFunctions.link = new FunctionBuilder("link")
    .add1("string", (a, c) => Link.file(c.linkHandler.normalize(a), false))
    .add1("link", (a) => a)
    .add1("null", (_a) => null)
    .vectorize(1, [0])
    .add2("string", "string", (t, d, c) =>
      Link.file(c.linkHandler.normalize(t), false, d)
    )
    .add3("string", "string", "boolean", (t, d, e, c) =>
      Link.file(c.linkHandler.normalize(t), e, d)
    )
    .add2("link", "string", (t, d) => t.withDisplay(d))
    .add2("null", "*", () => null)
    .add2("*", "null", (t, _n, c) => DefaultFunctions.link(c, t))
    .vectorize(2, [0, 1])
    .build();
  /** Embed and un-embed a link. */
  DefaultFunctions.embed = new FunctionBuilder("embed")
    .add1("link", (l) => l.toEmbed())
    .vectorize(1, [0])
    .add2("link", "boolean", (l, e, c) => (e ? l.toEmbed() : l.fromEmbed()))
    .add1("null", () => null)
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .vectorize(2, [0, 1])
    .build();
  /** External link constructor function. */
  DefaultFunctions.elink = new FunctionBuilder("elink")
    .add2("string", "string", (a, d) => Widgets.externalLink(a, d))
    .add2("string", "null", (s, _n, c) => DefaultFunctions.elink(c, s, s))
    .add2("null", "*", () => null)
    .vectorize(2, [0])
    .add1("string", (a, c) => DefaultFunctions.elink(c, a, a))
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  /** Date constructor function. */
  DefaultFunctions.date = new FunctionBuilder("date")
    .add1("string", (str) => {
      let parsedDate = EXPRESSION.datePlus.parse(str);
      if (parsedDate.status) return parsedDate.value;
      else return null;
    })
    .add1("date", (d) => d)
    .add1("link", (link, c) => {
      var _c, _d;
      // Try to parse from the display...
      if (link.display) {
        let parsedDate = EXPRESSION.date.parse(link.display);
        if (parsedDate.status) return parsedDate.value;
      }
      // Then try to parse from the path...
      let parsedDate = EXPRESSION.date.parse(link.path);
      if (parsedDate.status) return parsedDate.value;
      // Then pull it from the file.
      let resolved = c.linkHandler.resolve(link.path);
      if (
        resolved &&
        ((_c =
          resolved === null || resolved === void 0 ? void 0 : resolved.file) ===
          null || _c === void 0
          ? void 0
          : _c.day)
      ) {
        return (_d =
          resolved === null || resolved === void 0 ? void 0 : resolved.file) ===
          null || _d === void 0
          ? void 0
          : _d.day;
      }
      return null;
    })
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  /** Duration constructor function. */
  DefaultFunctions.dur = new FunctionBuilder("dur")
    .add1("string", (str) => {
      let parsedDur = EXPRESSION.duration.parse(str.trim());
      if (parsedDur.status) return parsedDur.value;
      else return null;
    })
    .add1("duration", (d) => d)
    .add1("null", (d) => d)
    .vectorize(1, [0])
    .build();
  /** Format a date using a luxon/moment-style date format. */
  DefaultFunctions.dateformat = new FunctionBuilder("dateformat")
    .add2("date", "string", (date, format) =>
      date.toFormat(format, { locale: currentLocale() })
    )
    .add2("null", "string", (_nul, _format) => null)
    .vectorize(2, [0])
    .build();
  DefaultFunctions.localtime = new FunctionBuilder("localtime")
    .add1("date", (d) => d.toLocal())
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  const NUMBER_REGEX = /-?[0-9]+(\.[0-9]+)?/;
  /** Number constructor function. */
  DefaultFunctions.number = new FunctionBuilder("number")
    .add1("number", (a) => a)
    .add1("string", (str) => {
      let match = NUMBER_REGEX.exec(str);
      if (match) return Number.parseFloat(match[0]);
      else return null;
    })
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  /**
   * Convert any value to a reasonable internal string representation. Most useful for dates, strings, numbers, and
   * so on.
   */
  DefaultFunctions.string = new FunctionBuilder("string")
    .add1("*", (a, ctx) => Values.toString(a, ctx.settings))
    .build();
  DefaultFunctions.round = new FunctionBuilder("round")
    .add1("number", (n) => Math.round(n))
    .add1("null", () => null)
    .vectorize(1, [0])
    .add2("number", "number", (n, p) => {
      if (p <= 0) return Math.round(n);
      return parseFloat(n.toFixed(p));
    })
    .add2("number", "null", (n) => Math.round(n))
    .add2("null", "*", () => null)
    .vectorize(2, [0])
    .build();
  DefaultFunctions.min = new FunctionBuilder("min")
    .add2("*", "null", (a, _n) => a)
    .add2("null", "*", (_n, a) => a)
    .add2("*", "*", (a, b, ctx) =>
      Values.compareValue(a, b, ctx.linkHandler.normalize) <= 0 ? a : b
    )
    .add1("array", (a, ctx) => DefaultFunctions.min(ctx, ...a))
    .vararg((ctx, ...args) =>
      args.length == 0
        ? null
        : args.reduce((p, c) => DefaultFunctions.min(ctx, p, c))
    )
    .build();
  DefaultFunctions.max = new FunctionBuilder("max")
    .add2("*", "null", (a, _n) => a)
    .add2("null", "*", (_n, a) => a)
    .add2("*", "*", (a, b, ctx) =>
      Values.compareValue(a, b, ctx.linkHandler.normalize) > 0 ? a : b
    )
    .add1("array", (a, ctx) => DefaultFunctions.max(ctx, ...a))
    .vararg((ctx, ...args) =>
      args.length == 0
        ? null
        : args.reduce((p, c) => DefaultFunctions.max(ctx, p, c))
    )
    .build();
  DefaultFunctions.minby = new FunctionBuilder("minby")
    .add2("array", "function", (arr, func, ctx) => {
      if (arr.length == 0) return null;
      let values = arr.map((v) => {
        return { value: v, mapped: func(ctx, v) };
      });
      let filtered = values.filter((v) => !Values.isNull(v.mapped));
      if (filtered.length == 0) return arr[0];
      return filtered.reduce((p, c) => {
        if (
          Values.compareValue(p.mapped, c.mapped, ctx.linkHandler.normalize) <=
          0
        )
          return p;
        else return c;
      }).value;
    })
    .add2("null", "function", (_arr, _func, _ctx) => null)
    .build();
  DefaultFunctions.maxby = new FunctionBuilder("maxby")
    .add2("array", "function", (arr, func, ctx) => {
      if (arr.length == 0) return null;
      let values = arr.map((v) => {
        return { value: v, mapped: func(ctx, v) };
      });
      let filtered = values.filter((v) => !Values.isNull(v.mapped));
      if (filtered.length == 0) return arr[0];
      return filtered.reduce((p, c) => {
        if (
          Values.compareValue(p.mapped, c.mapped, ctx.linkHandler.normalize) > 0
        )
          return p;
        else return c;
      }).value;
    })
    .add2("null", "function", (_arr, _func, _ctx) => null)
    .build();
  DefaultFunctions.striptime = new FunctionBuilder("striptime")
    .add1("date", (d) =>
      DateTime_1.fromObject({ year: d.year, month: d.month, day: d.day })
    )
    .add1("null", (_n) => null)
    .vectorize(1, [0])
    .build();
  // Default contains, which looks through data structures recursively.
  DefaultFunctions.contains = new FunctionBuilder("contains")
    .add2("array", "*", (l, elem, context) =>
      l.some((e) => DefaultFunctions.contains(context, e, elem))
    )
    .add2("string", "string", (haystack, needle) => haystack.includes(needle))
    .add2("object", "string", (obj, key) => key in obj)
    .add2("*", "*", (elem1, elem2, context) =>
      context
        .evaluate(
          Fields.binaryOp(Fields.literal(elem1), "=", Fields.literal(elem2))
        )
        .orElseThrow()
    )
    .vectorize(2, [1])
    .build();
  // Case insensitive version of contains.
  DefaultFunctions.icontains = new FunctionBuilder("icontains")
    .add2("array", "*", (l, elem, context) =>
      l.some((e) => DefaultFunctions.icontains(context, e, elem))
    )
    .add2("string", "string", (haystack, needle) =>
      haystack.toLocaleLowerCase().includes(needle.toLocaleLowerCase())
    )
    .add2("object", "string", (obj, key) => key in obj)
    .add2("*", "*", (elem1, elem2, context) =>
      context
        .evaluate(
          Fields.binaryOp(Fields.literal(elem1), "=", Fields.literal(elem2))
        )
        .orElseThrow()
    )
    .vectorize(2, [1])
    .build();
  // "exact" contains, does not look recursively.
  DefaultFunctions.econtains = new FunctionBuilder("econtains")
    .add2("array", "*", (l, elem, context) =>
      l.some((e) =>
        context
          .evaluate(
            Fields.binaryOp(Fields.literal(elem), "=", Fields.literal(e))
          )
          .orElseThrow()
      )
    )
    .add2("string", "string", (haystack, needle) => haystack.includes(needle))
    .add2("object", "string", (obj, key) => key in obj)
    .add2("*", "*", (elem1, elem2, context) =>
      context
        .evaluate(
          Fields.binaryOp(Fields.literal(elem1), "=", Fields.literal(elem2))
        )
        .orElseThrow()
    )
    .vectorize(2, [1])
    .build();
  // Case insensitive contains which looks for exact word matches (i.e., boundry-to-boundry match).
  DefaultFunctions.containsword = new FunctionBuilder("containsword")
    .add2(
      "string",
      "string",
      (hay, needle) =>
        !!hay.match(new RegExp(".*\\b" + escapeRegex(needle) + "\\b.*", "i"))
    )
    .add2("null", "*", (_a, _b) => null)
    .add2("*", "null", (_a, _b) => null)
    .vectorize(2, [0, 1])
    .build();
  /** Extract 0 or more keys from a given object via indexing. */
  DefaultFunctions.extract = (context, ...args) => {
    if (args.length == 0)
      return "extract(object, key1, ...) requires at least 1 argument";
    // Manually handle vectorization in the first argument.
    let object = args[0];
    if (Values.isArray(object))
      return object.map((v) =>
        DefaultFunctions.extract(context, v, ...args.slice(1))
      );
    let result = {};
    for (let index = 1; index < args.length; index++) {
      let key = args[index];
      if (!Values.isString(key))
        throw Error(
          "extract(object, key1, ...) must be called with string keys"
        );
      result[key] = context
        .evaluate(Fields.index(Fields.literal(object), Fields.literal(key)))
        .orElseThrow();
    }
    return result;
  };
  // Reverse aan array or string.
  DefaultFunctions.reverse = new FunctionBuilder("reverse")
    .add1("array", (l) => {
      let result = [];
      for (let index = l.length - 1; index >= 0; index--) result.push(l[index]);
      return result;
    })
    .add1("string", (l) => {
      let result = "";
      for (let c = 0; c < l.length; c++) result += l[l.length - c - 1];
      return result;
    })
    .add1("*", (e) => e)
    .build();
  // Sort an array; if given two arguments, sorts by the key returned.
  DefaultFunctions.sort = new FunctionBuilder("sort")
    .add1("array", (list, context) =>
      DefaultFunctions.sort(context, list, (_ctx, a) => a)
    )
    .add2("array", "function", (list, key, context) => {
      let result = [].concat(list);
      result.sort((a, b) => {
        let akey = key(context, a);
        let bkey = key(context, b);
        let le = context
          .evaluate(
            Fields.binaryOp(Fields.literal(akey), "<", Fields.literal(bkey))
          )
          .orElseThrow();
        if (Values.isTruthy(le)) return -1;
        let eq = context
          .evaluate(
            Fields.binaryOp(Fields.literal(akey), "=", Fields.literal(bkey))
          )
          .orElseThrow();
        if (Values.isTruthy(eq)) return 0;
        return 1;
      });
      return result;
    })
    .add1("*", (e) => e)
    .build();
  DefaultFunctions.regexmatch = new FunctionBuilder("regexmatch")
    .add2("string", "string", (pattern, field) => {
      if (!pattern.startsWith("^") && !pattern.endsWith("$"))
        pattern = "^" + pattern + "$";
      return !!field.match(pattern);
    })
    .add2("null", "*", (_n, _a) => false)
    .add2("*", "null", (_a, _n) => false)
    .vectorize(2, [0, 1])
    .build();
  DefaultFunctions.regexreplace = new FunctionBuilder("regexreplace")
    .add3("string", "string", "string", (field, pat, rep) => {
      try {
        let reg = new RegExp(pat, "g");
        return field.replace(reg, rep);
      } catch (ex) {
        throw Error(`Invalid regexp '${pat}' in regexreplace`);
      }
    })
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(3, [0, 1, 2])
    .build();
  DefaultFunctions.lower = new FunctionBuilder("lower")
    .add1("string", (s) => s.toLocaleLowerCase())
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  DefaultFunctions.upper = new FunctionBuilder("upper")
    .add1("string", (s) => s.toLocaleUpperCase())
    .add1("null", () => null)
    .vectorize(1, [0])
    .build();
  DefaultFunctions.replace = new FunctionBuilder("replace")
    .add3("string", "string", "string", (str, pat, repr) =>
      str.split(pat).join(repr)
    )
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(3, [0, 1, 2])
    .build();
  // Ensure undefined matches turn into empty strings for split/2 and split/3.
  const splitImpl = (str, delim, limit) =>
    str.split(new RegExp(delim), limit).map((str) => str || "");
  /** Split a string on a given string. */
  DefaultFunctions.split = new FunctionBuilder("split")
    .add2("string", "string", (string, splitter) => splitImpl(string, splitter))
    .add3("string", "string", "number", (string, splitter, limit) =>
      splitImpl(string, splitter, limit)
    )
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .add3("*", "*", "null", () => null)
    .add3("*", "null", "*", () => null)
    .add3("null", "*", "*", () => null)
    .build();
  DefaultFunctions.startswith = new FunctionBuilder("startswith")
    .add2("string", "string", (str, starting) => str.startsWith(starting))
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .vectorize(2, [0, 1])
    .build();
  DefaultFunctions.endswith = new FunctionBuilder("endswith")
    .add2("string", "string", (str, ending) => str.endsWith(ending))
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .vectorize(2, [0, 1])
    .build();
  DefaultFunctions.padleft = new FunctionBuilder("padleft")
    .add2("string", "number", (str, len) => str.padStart(len, " "))
    .add3("string", "number", "string", (str, len, padding) =>
      str.padStart(len, padding)
    )
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(2, [0, 1])
    .vectorize(3, [0, 1, 2])
    .build();
  DefaultFunctions.padright = new FunctionBuilder("padright")
    .add2("string", "number", (str, len) => str.padEnd(len, " "))
    .add3("string", "number", "string", (str, len, padding) =>
      str.padEnd(len, padding)
    )
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(2, [0, 1])
    .vectorize(3, [0, 1, 2])
    .build();
  DefaultFunctions.substring = new FunctionBuilder("substring")
    .add2("string", "number", (str, start) => str.substring(start))
    .add3("string", "number", "number", (str, start, end) =>
      str.substring(start, end)
    )
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(2, [0, 1])
    .vectorize(3, [0, 1, 2])
    .build();
  DefaultFunctions.truncate = new FunctionBuilder("truncate")
    .add3("string", "number", "string", (str, length, suffix) => {
      if (str.length > length - suffix.length) {
        return str.substring(0, Math.max(0, length - suffix.length)) + suffix;
      } else {
        return str;
      }
    })
    .add2("string", "number", (str, length, ctx) =>
      DefaultFunctions.truncate(ctx, str, length, "...")
    )
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .add3("null", "*", "*", () => null)
    .add3("*", "null", "*", () => null)
    .add3("*", "*", "null", () => null)
    .vectorize(2, [0, 1])
    .vectorize(3, [0, 1, 2])
    .build();
  DefaultFunctions.fdefault = new FunctionBuilder("default")
    .add2("*", "*", (v, bk) => (Values.isNull(v) ? bk : v))
    .vectorize(2, [0, 1])
    .build();
  DefaultFunctions.ldefault = new FunctionBuilder("ldefault")
    .add2("*", "*", (v, bk) => (Values.isNull(v) ? bk : v))
    .build();
  DefaultFunctions.choice = new FunctionBuilder("choice")
    .add3("*", "*", "*", (b, left, right) =>
      Values.isTruthy(b) ? left : right
    )
    .vectorize(3, [0])
    .build();
  DefaultFunctions.reduce = new FunctionBuilder("reduce")
    .add2("array", "string", (lis, op, context) => {
      if (lis.length == 0) return null;
      if (
        op != "+" &&
        op != "-" &&
        op != "*" &&
        op != "/" &&
        op != "&" &&
        op != "|"
      )
        throw Error(
          "reduce(array, op) supports '+', '-', '/', '*', '&', and '|'"
        );
      let value = lis[0];
      for (let index = 1; index < lis.length; index++) {
        value = context
          .evaluate(
            Fields.binaryOp(
              Fields.literal(value),
              op,
              Fields.literal(lis[index])
            )
          )
          .orElseThrow();
      }
      return value;
    })
    .add2("array", "function", (lis, op, context) => {
      if (lis.length == 0) return null;
      let value = lis[0];
      for (let index = 1; index < lis.length; index++) {
        // Skip null values to reduce the pain of summing over fields that may or may not exist.
        if (Values.isNull(lis[index])) continue;
        value = op(context, value, lis[index]);
      }
      return value;
    })
    .add2("null", "*", () => null)
    .add2("*", "null", () => null)
    .vectorize(2, [1])
    .build();
  DefaultFunctions.sum = new FunctionBuilder("sum")
    .add1("array", (arr, c) => DefaultFunctions.reduce(c, arr, "+"))
    .add1("*", (e) => e)
    .build();
  DefaultFunctions.product = new FunctionBuilder("product")
    .add1("array", (arr, c) => DefaultFunctions.reduce(c, arr, "*"))
    .add1("*", (e) => e)
    .build();
  DefaultFunctions.join = new FunctionBuilder("join")
    .add2("array", "string", (arr, sep, ctx) =>
      arr.map((e) => Values.toString(e, ctx.settings)).join(sep)
    )
    .add2("array", "null", (arr, _s, context) =>
      DefaultFunctions.join(context, arr, ", ")
    )
    .add2("*", "string", (elem, sep, ctx) =>
      Values.toString(elem, ctx.settings)
    )
    .add1("array", (arr, context) => DefaultFunctions.join(context, arr, ", "))
    .add1("*", (e, ctx) => Values.toString(e, ctx.settings))
    .vectorize(2, [1])
    .build();
  DefaultFunctions.any = new FunctionBuilder("any")
    .add1("array", (arr) => arr.some((v) => Values.isTruthy(v)))
    .add2("array", "function", (arr, f, ctx) =>
      arr.some((v) => Values.isTruthy(f(ctx, v)))
    )
    .vararg((_ctx, ...args) => args.some((v) => Values.isTruthy(v)))
    .build();
  DefaultFunctions.all = new FunctionBuilder("all")
    .add1("array", (arr) => arr.every((v) => Values.isTruthy(v)))
    .add2("array", "function", (arr, f, ctx) =>
      arr.every((v) => Values.isTruthy(f(ctx, v)))
    )
    .vararg((_ctx, ...args) => args.every((v) => Values.isTruthy(v)))
    .build();
  DefaultFunctions.none = new FunctionBuilder("all")
    .add1("array", (arr) => !arr.some((v) => Values.isTruthy(v)))
    .add2(
      "array",
      "function",
      (arr, f, ctx) => !arr.some((v) => Values.isTruthy(f(ctx, v)))
    )
    .vararg((_ctx, ...args) => !args.some((v) => Values.isTruthy(v)))
    .build();
  DefaultFunctions.filter = new FunctionBuilder("filter")
    .add2("array", "function", (arr, f, ctx) =>
      arr.filter((v) => Values.isTruthy(f(ctx, v)))
    )
    .add2("null", "*", () => null)
    .build();
  DefaultFunctions.map = new FunctionBuilder("map")
    .add2("array", "function", (arr, f, ctx) => arr.map((v) => f(ctx, v)))
    .add2("null", "*", () => null)
    .build();
  DefaultFunctions.nonnull = new FunctionBuilder("nonnull")
    .vararg((_ctx, ...args) => args.filter((v) => Values.typeOf(v) != "null"))
    .build();
  /** Gets an object containing a link's own properties */
  DefaultFunctions.meta = new FunctionBuilder("meta")
    .add1("link", (link) => {
      var _c, _d;
      return {
        display: (_c = link.display) !== null && _c !== void 0 ? _c : null,
        embed: link.embed,
        path: link.path,
        subpath: (_d = link.subpath) !== null && _d !== void 0 ? _d : null,
        type: link.type,
      };
    })
    .build();
})(DefaultFunctions || (DefaultFunctions = {}));
/** Default function implementations for the expression evaluator. */
const DEFAULT_FUNCTIONS = {
  // Constructors.
  list: DefaultFunctions.list,
  array: DefaultFunctions.list,
  link: DefaultFunctions.link,
  embed: DefaultFunctions.embed,
  elink: DefaultFunctions.elink,
  date: DefaultFunctions.date,
  dur: DefaultFunctions.dur,
  dateformat: DefaultFunctions.dateformat,
  localtime: DefaultFunctions.localtime,
  number: DefaultFunctions.number,
  string: DefaultFunctions.string,
  object: DefaultFunctions.object,
  typeof: DefaultFunctions.typeOf,
  // Math Operations.
  round: DefaultFunctions.round,
  min: DefaultFunctions.min,
  max: DefaultFunctions.max,
  minby: DefaultFunctions.minby,
  maxby: DefaultFunctions.maxby,
  // String operations.
  regexreplace: DefaultFunctions.regexreplace,
  regexmatch: DefaultFunctions.regexmatch,
  replace: DefaultFunctions.replace,
  lower: DefaultFunctions.lower,
  upper: DefaultFunctions.upper,
  split: DefaultFunctions.split,
  startswith: DefaultFunctions.startswith,
  endswith: DefaultFunctions.endswith,
  padleft: DefaultFunctions.padleft,
  padright: DefaultFunctions.padright,
  substring: DefaultFunctions.substring,
  truncate: DefaultFunctions.truncate,
  // Date Operations.
  striptime: DefaultFunctions.striptime,
  // List operations.
  length: DefaultFunctions.length,
  contains: DefaultFunctions.contains,
  icontains: DefaultFunctions.icontains,
  econtains: DefaultFunctions.econtains,
  containsword: DefaultFunctions.containsword,
  reverse: DefaultFunctions.reverse,
  sort: DefaultFunctions.sort,
  // Aggregation operations like reduce.
  reduce: DefaultFunctions.reduce,
  join: DefaultFunctions.join,
  sum: DefaultFunctions.sum,
  product: DefaultFunctions.product,
  all: DefaultFunctions.all,
  any: DefaultFunctions.any,
  none: DefaultFunctions.none,
  filter: DefaultFunctions.filter,
  map: DefaultFunctions.map,
  nonnull: DefaultFunctions.nonnull,
  // Object/Utility operations.
  extract: DefaultFunctions.extract,
  default: DefaultFunctions.fdefault,
  ldefault: DefaultFunctions.ldefault,
  choice: DefaultFunctions.choice,
  meta: DefaultFunctions.meta,
};

/** Provides a global dispatch table for evaluating binary operators, including comparison. */
/** Provides implementations for binary operators on two types using a registry. */
class BinaryOpHandler {
  constructor() {
    this.map = new Map();
  }
  static create() {
    return new BinaryOpHandler();
  }
  register(left, op, right, func) {
    this.map.set(BinaryOpHandler.repr(op, left, right), func);
    return this;
  }
  registerComm(left, op, right, func) {
    return this.register(left, op, right, func).register(
      right,
      op,
      left,
      (a, b, ctx) => func(b, a, ctx)
    );
  }
  /** Implement a comparison function. */
  compare(type, compare) {
    return this.register(type, "<", type, (a, b, ctx) => compare(a, b, ctx) < 0)
      .register(type, "<=", type, (a, b, ctx) => compare(a, b, ctx) <= 0)
      .register(type, ">", type, (a, b, ctx) => compare(a, b, ctx) > 0)
      .register(type, ">=", type, (a, b, ctx) => compare(a, b, ctx) >= 0)
      .register(type, "=", type, (a, b, ctx) => compare(a, b, ctx) == 0)
      .register(type, "!=", type, (a, b, ctx) => compare(a, b, ctx) != 0);
  }
  /** Attempt to evaluate the given binary operator on the two literal fields. */
  evaluate(op, left, right, ctx) {
    let leftType = Values.typeOf(left);
    let rightType = Values.typeOf(right);
    if (!leftType) return Result.failure(`Unrecognized value '${left}'`);
    else if (!rightType) return Result.failure(`Unrecognized value '${right}'`);
    let handler = this.map.get(BinaryOpHandler.repr(op, leftType, rightType));
    if (handler) return Result.success(handler(left, right, ctx));
    // Right-'*' fallback:
    let handler2 = this.map.get(BinaryOpHandler.repr(op, leftType, "*"));
    if (handler2) return Result.success(handler2(left, right, ctx));
    // Left-'*' fallback:
    let handler3 = this.map.get(BinaryOpHandler.repr(op, "*", rightType));
    if (handler3) return Result.success(handler3(left, right, ctx));
    // Double '*' fallback.
    let handler4 = this.map.get(BinaryOpHandler.repr(op, "*", "*"));
    if (handler4) return Result.success(handler4(left, right, ctx));
    return Result.failure(
      `No implementation found for '${leftType} ${op} ${rightType}'`
    );
  }
  /** Create a string representation of the given triplet for unique lookup in the map. */
  static repr(op, left, right) {
    return `${left},${op},${right}`;
  }
}
/** Configure and create a binary OP handler with the given parameters. */
function createBinaryOps(linkNormalizer) {
  return (
    BinaryOpHandler.create()
      // TODO: Consider not using a universal comparison function.
      .compare("*", (a, b) => Values.compareValue(a, b, linkNormalizer))
      // Global boolean operations.
      .register(
        "*",
        "&",
        "*",
        (a, b) => Values.isTruthy(a) && Values.isTruthy(b)
      )
      .register(
        "*",
        "|",
        "*",
        (a, b) => Values.isTruthy(a) || Values.isTruthy(b)
      )
      // Number implementations.
      .register("number", "+", "number", (a, b) => a + b)
      .register("number", "-", "number", (a, b) => a - b)
      .register("number", "*", "number", (a, b) => a * b)
      .register("number", "/", "number", (a, b) => a / b)
      .register("number", "%", "number", (a, b) => a % b)
      // String implementations.
      .register(
        "string",
        "+",
        "*",
        (a, b, ctx) => a + Values.toString(b, ctx.settings)
      )
      .register(
        "*",
        "+",
        "string",
        (a, b, ctx) => Values.toString(a, ctx.settings) + b
      )
      .registerComm("string", "*", "number", (a, b) =>
        b < 0 ? "" : a.repeat(b)
      )
      // Date Operations.
      .register("date", "-", "date", (a, b) => {
        return normalizeDuration(
          a.diff(b, [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds",
            "milliseconds",
          ])
        );
      })
      .register("date", "-", "duration", (a, b) => a.minus(b))
      .registerComm("date", "+", "duration", (a, b) => a.plus(b))
      // Duration Operations.
      .register("duration", "+", "duration", (a, b) =>
        normalizeDuration(a.plus(b))
      )
      .register("duration", "-", "duration", (a, b) =>
        normalizeDuration(a.minus(b))
      )
      .register("duration", "/", "number", (a, b) =>
        normalizeDuration(a.mapUnits((x) => x / b))
      )
      .registerComm("duration", "*", "number", (a, b) =>
        normalizeDuration(a.mapUnits((x) => x * b))
      )
      // Array operations.
      .register("array", "+", "array", (a, b) => [].concat(a).concat(b))
      // Object operations.
      .register("object", "+", "object", (a, b) => Object.assign({}, a, b))
      // Null handling operators.
      .register("null", "+", "null", (_a, _b) => null)
      .register("null", "-", "null", (_a, _b) => null)
      .register("null", "*", "null", (_a, _b) => null)
      .register("null", "/", "null", (_a, _b) => null)
      .register("null", "%", "null", (_a, _b) => null)
  );
}

/** Core implementation of the query language evaluation engine. */
/**
 * Evaluation context that expressions can be evaluated in. Includes global state, as well as available functions and a handler
 * for binary operators.
 */
class Context {
  /**
   * Create a new context with the given namespace of globals, as well as optionally with custom binary operator, function,
   * and link handlers.
   */
  constructor(
    linkHandler,
    settings,
    globals = {},
    binaryOps = createBinaryOps(linkHandler.normalize),
    functions = DEFAULT_FUNCTIONS
  ) {
    this.linkHandler = linkHandler;
    this.settings = settings;
    this.globals = globals;
    this.binaryOps = binaryOps;
    this.functions = functions;
  }
  /** Set a global value in this context. */
  set(name, value) {
    this.globals[name] = value;
    return this;
  }
  /** Get the value of a global variable by name. Returns null if not present. */
  get(name) {
    var _a;
    return (_a = this.globals[name]) !== null && _a !== void 0 ? _a : null;
  }
  /** Try to evaluate an arbitary field in this context, raising an exception on failure. */
  tryEvaluate(field, data = {}) {
    return this.evaluate(field, data).orElseThrow();
  }
  /** Evaluate an arbitrary field in this context. */
  evaluate(field, data = {}) {
    var _a, _b;
    switch (field.type) {
      case "literal":
        return Result.success(field.value);
      case "variable":
        if (field.name in data) return Result.success(data[field.name]);
        else if (field.name in this.globals)
          return Result.success(this.globals[field.name]);
        else return Result.success(null);
      case "negated":
        return this.evaluate(field.child, data).map((s) => !Values.isTruthy(s));
      case "binaryop":
        return Result.flatMap2(
          this.evaluate(field.left, data),
          this.evaluate(field.right, data),
          (a, b) => this.binaryOps.evaluate(field.op, a, b, this)
        );
      case "list":
        let result = [];
        for (let child of field.values) {
          let subeval = this.evaluate(child, data);
          if (!subeval.successful) return subeval;
          result.push(subeval.value);
        }
        return Result.success(result);
      case "object":
        let objResult = {};
        for (let [key, child] of Object.entries(field.values)) {
          let subeval = this.evaluate(child, data);
          if (!subeval.successful) return subeval;
          objResult[key] = subeval.value;
        }
        return Result.success(objResult);
      case "lambda":
        // Just relying on JS to capture 'data' for us implicitly; unsure
        // if this is correct thing to do. Could cause wierd behaviors.
        return Result.success((ctx, ...args) => {
          let copy = Object.assign({}, data);
          for (
            let arg = 0;
            arg < Math.min(args.length, field.arguments.length);
            arg++
          ) {
            copy[field.arguments[arg]] = args[arg];
          }
          return ctx.evaluate(field.value, copy).orElseThrow();
        });
      case "function":
        let rawFunc =
          field.func.type == "variable"
            ? Result.success(field.func.name)
            : this.evaluate(field.func, data);
        if (!rawFunc.successful) return rawFunc;
        let func = rawFunc.value;
        let args = [];
        for (let arg of field.arguments) {
          let resolved = this.evaluate(arg, data);
          if (!resolved.successful) return resolved;
          args.push(resolved.value);
        }
        let call;
        if (Values.isFunction(func)) call = func;
        else if (Values.isString(func) && func in this.functions)
          call = this.functions[func];
        else if (Values.isString(func))
          return Result.failure(`Unrecognized function name '${func}'`);
        else
          return Result.failure(
            `Cannot call type '${Values.typeOf(func)}' as a function`
          );
        try {
          return Result.success(call(this, ...args));
        } catch (e) {
          return Result.failure(e.message);
        }
      case "index":
        // TODO: Will move this out to an 'primitives' module and add more content to it.
        let literalIndex = this.evaluate(field.index, data);
        let checkedIndex = literalIndex.flatMap((s) =>
          Values.isString(s) || Values.isNumber(s) || Values.isNull(s)
            ? Result.success(s)
            : Result.failure("Can only index with a string or number")
        );
        if (!checkedIndex.successful) return checkedIndex;
        let index = checkedIndex.value;
        if (Values.isNull(index)) return Result.success(null);
        let checkedObject =
          field.object.type == "variable" && field.object.name == "row"
            ? Result.success(Object.assign({}, this.globals, data))
            : this.evaluate(field.object, data);
        if (!checkedObject.successful) return checkedObject;
        let object = Values.wrapValue(checkedObject.value);
        if (!object)
          return Result.failure("Unrecognized object to index into: " + object);
        switch (object.type) {
          case "object":
            if (!Values.isString(index))
              return Result.failure(
                'can only index into objects with strings (a.b or a["b"])'
              );
            return Result.success(
              (_a = object.value[index]) !== null && _a !== void 0 ? _a : null
            );
          case "link":
            if (!Values.isString(index))
              return Result.failure(
                'can only index into links with strings (a.b or a["b"])'
              );
            let linkValue = this.linkHandler.resolve(object.value.path);
            if (Values.isNull(linkValue)) return Result.success(null);
            return Result.success(
              (_b = linkValue[index]) !== null && _b !== void 0 ? _b : null
            );
          case "array":
            if (Values.isNumber(index)) {
              if (index >= object.value.length || index < 0)
                return Result.success(null);
              else return Result.success(object.value[index]);
            } else if (Values.isString(index)) {
              let result = [];
              for (let value of object.value) {
                let next = this.evaluate(
                  Fields.index(Fields.literal(value), Fields.literal(index))
                );
                if (!next.successful) continue;
                result.push(next.value);
              }
              return Result.success(result);
            } else {
              return Result.failure(
                "Array indexing requires either a number (to get a specific element), or a string (to map all elements inside the array)"
              );
            }
          case "string":
            if (!Values.isNumber(index))
              return Result.failure(
                "string indexing requires a numeric index (string[index])"
              );
            if (index >= object.value.length || index < 0)
              return Result.success(null);
            return Result.success(object.value[index]);
          case "date":
            if (!Values.isString(index))
              return Result.failure(
                "date indexing requires a string representing the unit"
              );
            switch (index) {
              case "year":
                return Result.success(object.value.year);
              case "month":
                return Result.success(object.value.month);
              case "weekyear":
                return Result.success(object.value.weekNumber);
              case "week":
                return Result.success(Math.floor(object.value.day / 7) + 1);
              case "weekday":
                return Result.success(object.value.weekday);
              case "day":
                return Result.success(object.value.day);
              case "hour":
                return Result.success(object.value.hour);
              case "minute":
                return Result.success(object.value.minute);
              case "second":
                return Result.success(object.value.second);
              case "millisecond":
                return Result.success(object.value.millisecond);
              default:
                return Result.success(null);
            }
          case "duration":
            if (!Values.isString(index))
              return Result.failure(
                "duration indexing requires a string representing the unit"
              );
            switch (index) {
              case "year":
              case "years":
                return Result.success(object.value.shiftTo("years").years);
              case "month":
              case "months":
                return Result.success(object.value.shiftTo("months").months);
              case "weeks":
                return Result.success(object.value.shiftTo("weeks").weeks);
              case "day":
              case "days":
                return Result.success(object.value.shiftTo("days").days);
              case "hour":
              case "hours":
                return Result.success(object.value.shiftTo("hours").hours);
              case "minute":
              case "minutes":
                return Result.success(object.value.shiftTo("minutes").minutes);
              case "second":
              case "seconds":
                return Result.success(object.value.shiftTo("seconds").seconds);
              case "millisecond":
              case "milliseconds":
                return Result.success(
                  object.value.shiftTo("milliseconds").milliseconds
                );
              default:
                return Result.success(null);
            }
          default:
            return Result.success(null);
        }
    }
  }
}

function iden(x) {
  return x;
}
/** Shared execution code which just takes in arbitrary data, runs operations over it, and returns it + per-row errors. */
function executeCore(rows, context, ops) {
  let diagnostics = [];
  let identMeaning = { type: "path" };
  let startTime = Date.now();
  for (let op of ops) {
    let opStartTime = Date.now();
    let incomingRows = rows.length;
    let errors = [];
    switch (op.type) {
      case "where":
        let whereResult = [];
        for (let index = 0; index < rows.length; index++) {
          let row = rows[index];
          let value = context.evaluate(op.clause, row.data);
          if (!value.successful) errors.push({ index, message: value.error });
          else if (Values.isTruthy(value.value)) whereResult.push(row);
        }
        rows = whereResult;
        break;
      case "sort":
        let sortFields = op.fields;
        let taggedData = [];
        outer: for (let index = 0; index < rows.length; index++) {
          let row = rows[index];
          let rowSorts = [];
          for (let sIndex = 0; sIndex < sortFields.length; sIndex++) {
            let value = context.evaluate(sortFields[sIndex].field, row.data);
            if (!value.successful) {
              errors.push({ index, message: value.error });
              continue outer;
            }
            rowSorts.push(value.value);
          }
          taggedData.push({ data: row, fields: rowSorts });
        }
        // Sort rows by the sort fields, and then return the finished result.
        taggedData.sort((a, b) => {
          for (let index = 0; index < sortFields.length; index++) {
            let factor = sortFields[index].direction === "ascending" ? 1 : -1;
            let le = context.binaryOps
              .evaluate("<", a.fields[index], b.fields[index], context)
              .orElse(false);
            if (Values.isTruthy(le)) return factor * -1;
            let ge = context.binaryOps
              .evaluate(">", a.fields[index], b.fields[index], context)
              .orElse(false);
            if (Values.isTruthy(ge)) return factor * 1;
          }
          return 0;
        });
        rows = taggedData.map((v) => v.data);
        break;
      case "limit":
        let limiting = context.evaluate(op.amount);
        if (!limiting.successful)
          return Result.failure(
            "Failed to execute 'limit' statement: " + limiting.error
          );
        if (!Values.isNumber(limiting.value))
          return Result.failure(
            `Failed to execute 'limit' statement: limit should be a number, but got '${Values.typeOf(
              limiting.value
            )}' (${limiting.value})`
          );
        rows = rows.slice(0, limiting.value);
        break;
      case "group":
        let groupData = [];
        for (let index = 0; index < rows.length; index++) {
          let value = context.evaluate(op.field.field, rows[index].data);
          if (!value.successful) {
            errors.push({ index, message: value.error });
            continue;
          }
          groupData.push({ data: rows[index], key: value.value });
        }
        // Sort by the key, which we will group on shortly.
        groupData.sort((a, b) => {
          let le = context.binaryOps
            .evaluate("<", a.key, b.key, context)
            .orElse(false);
          if (Values.isTruthy(le)) return -1;
          let ge = context.binaryOps
            .evaluate(">", a.key, b.key, context)
            .orElse(false);
          if (Values.isTruthy(ge)) return 1;
          return 0;
        });
        // Then walk through and find fields that are equal.
        let finalGroupData = [];
        if (groupData.length > 0)
          finalGroupData.push({
            key: groupData[0].key,
            rows: [groupData[0].data.data],
            [op.field.name]: groupData[0].key,
          });
        for (let index = 1; index < groupData.length; index++) {
          let curr = groupData[index],
            prev = groupData[index - 1];
          if (
            context.binaryOps
              .evaluate("=", curr.key, prev.key, context)
              .orElse(false)
          ) {
            finalGroupData[finalGroupData.length - 1].rows.push(curr.data.data);
          } else {
            finalGroupData.push({
              key: curr.key,
              rows: [curr.data.data],
              [op.field.name]: curr.key,
            });
          }
        }
        rows = finalGroupData.map((d) => {
          return { id: d.key, data: d };
        });
        identMeaning = { type: "group", name: op.field.name, on: identMeaning };
        break;
      case "flatten":
        let flattenResult = [];
        for (let index = 0; index < rows.length; index++) {
          let row = rows[index];
          let value = context.evaluate(op.field.field, row.data);
          if (!value.successful) {
            errors.push({ index, message: value.error });
            continue;
          }
          let datapoints = Values.isArray(value.value)
            ? value.value
            : [value.value];
          for (let v of datapoints) {
            let copy = Values.deepCopy(row);
            copy.data[op.field.name] = v;
            flattenResult.push(copy);
          }
        }
        rows = flattenResult;
        if (identMeaning.type == "group" && identMeaning.name == op.field.name)
          identMeaning = identMeaning.on;
        break;
      default:
        return Result.failure("Unrecognized query operation '" + op.type + "'");
    }
    if (errors.length >= incomingRows && incomingRows > 0) {
      return Result.failure(`Every row during operation '${
        op.type
      }' failed with an error; first ${Math.min(3, errors.length)}:\n
                ${errors
                  .slice(0, 3)
                  .map((d) => "- " + d.message)
                  .join("\n")}`);
    }
    diagnostics.push({
      incomingRows,
      errors,
      outgoingRows: rows.length,
      timeMs: Date.now() - opStartTime,
    });
  }
  return Result.success({
    data: rows,
    idMeaning: identMeaning,
    ops,
    diagnostics,
    timeMs: Date.now() - startTime,
  });
}
/** Expanded version of executeCore which adds an additional "extraction" step to the pipeline. */
function executeCoreExtract(rows, context, ops, fields) {
  let internal = executeCore(rows, context, ops);
  if (!internal.successful) return internal;
  let core = internal.value;
  let startTime = Date.now();
  let errors = [];
  let res = [];
  outer: for (let index = 0; index < core.data.length; index++) {
    let page = { id: core.data[index].id, data: {} };
    for (let [name, field] of Object.entries(fields)) {
      let value = context.evaluate(field, core.data[index].data);
      if (!value.successful) {
        errors.push({ index: index, message: value.error });
        continue outer;
      }
      page.data[name] = value.value;
    }
    res.push(page);
  }
  if (errors.length >= core.data.length && core.data.length > 0) {
    return Result.failure(`Every row during final data extraction failed with an error; first ${Math.max(
      errors.length,
      3
    )}:\n
            ${errors
              .slice(0, 3)
              .map((d) => "- " + d.message)
              .join("\n")}`);
  }
  let execTime = Date.now() - startTime;
  return Result.success({
    data: res,
    idMeaning: core.idMeaning,
    diagnostics: core.diagnostics.concat([
      {
        timeMs: execTime,
        incomingRows: core.data.length,
        outgoingRows: res.length,
        errors,
      },
    ]),
    ops: core.ops.concat([{ type: "extract", fields }]),
    timeMs: core.timeMs + execTime,
  });
}
/** Execute a list-based query, returning the final results. */
async function executeList(query, index, origin, settings) {
  var _a, _b;
  // Start by collecting all of the files that match the 'from' queries.
  let fileset = await resolveSource(query.source, index, origin);
  if (!fileset.successful) return Result.failure(fileset.error);
  // Extract information about the origin page to add to the root context.
  let rootContext = new Context(defaultLinkHandler(index, origin), settings, {
    this:
      (_b =
        (_a = index.pages.get(origin)) === null || _a === void 0
          ? void 0
          : _a.serialize(index)) !== null && _b !== void 0
        ? _b
        : {},
  });
  let targetField = query.header.format;
  let showId = query.header.showId;
  let fields = targetField ? { target: targetField } : {};
  return executeCoreExtract(
    fileset.value,
    rootContext,
    query.operations,
    fields
  ).map((core) => {
    let data;
    if (showId && targetField) {
      data = core.data.map((p) => {
        var _a;
        return Widgets.listPair(
          p.id,
          (_a = p.data["target"]) !== null && _a !== void 0 ? _a : null
        );
      });
    } else if (targetField) {
      data = core.data.map((p) => {
        var _a;
        return (_a = p.data["target"]) !== null && _a !== void 0 ? _a : null;
      });
    } else {
      data = core.data.map((p) => p.id);
    }
    return { primaryMeaning: core.idMeaning, core, data };
  });
}
/** Execute a table query. */
async function executeTable(query, index, origin, settings) {
  var _a, _b;
  // Start by collecting all of the files that match the 'from' queries.
  let fileset = await resolveSource(query.source, index, origin);
  if (!fileset.successful) return Result.failure(fileset.error);
  // Extract information about the origin page to add to the root context.
  let rootContext = new Context(defaultLinkHandler(index, origin), settings, {
    this:
      (_b =
        (_a = index.pages.get(origin)) === null || _a === void 0
          ? void 0
          : _a.serialize(index)) !== null && _b !== void 0
        ? _b
        : {},
  });
  let targetFields = query.header.fields;
  let showId = query.header.showId;
  let fields = {};
  for (let field of targetFields) fields[field.name] = field.field;
  return executeCoreExtract(
    fileset.value,
    rootContext,
    query.operations,
    fields
  ).map((core) => {
    if (showId) {
      const idName =
        core.idMeaning.type === "group"
          ? settings.tableGroupColumnName
          : settings.tableIdColumnName;
      let names = [idName].concat(targetFields.map((f) => f.name));
      let data = core.data.map((p) =>
        [p.id].concat(targetFields.map((f) => p.data[f.name]))
      );
      return { core, names, data, idMeaning: core.idMeaning };
    } else {
      let names = targetFields.map((f) => f.name);
      let data = core.data.map((p) => targetFields.map((f) => p.data[f.name]));
      return { core, names, data, idMeaning: core.idMeaning };
    }
  });
}
/** Maps a raw core execution result to a task grouping which is much easier to render. */
function extractTaskGroupings(id, rows) {
  switch (id.type) {
    case "path":
      return rows;
    case "group":
      let key = id.name;
      return rows.map((r) =>
        iden({
          key: r[key],
          rows: extractTaskGroupings(id.on, r.rows),
        })
      );
  }
}
/** Execute a task query, returning all matching tasks. */
async function executeTask(query, origin, index, settings) {
  var _a, _b;
  let fileset = matchingSourcePaths(query.source, index, origin);
  if (!fileset.successful) return Result.failure(fileset.error);
  // Collect tasks from pages which match.
  let incomingTasks = [];
  for (let path of fileset.value) {
    let page = index.pages.get(path);
    if (!page) continue;
    let pageData = page.serialize(index);
    let pageTasks = pageData.file.tasks.map((t) => {
      const tcopy = Values.deepCopy(t);
      // Add page data to this copy.
      for (let [key, value] of Object.entries(pageData)) {
        if (key in tcopy) continue;
        tcopy[key] = value;
      }
      return { id: `${pageData.path}#${t.line}`, data: tcopy };
    });
    for (let task of pageTasks) incomingTasks.push(task);
  }
  // Extract information about the origin page to add to the root context.
  let rootContext = new Context(defaultLinkHandler(index, origin), settings, {
    this:
      (_b =
        (_a = index.pages.get(origin)) === null || _a === void 0
          ? void 0
          : _a.serialize(index)) !== null && _b !== void 0
        ? _b
        : {},
  });
  return executeCore(incomingTasks, rootContext, query.operations).map(
    (core) => {
      return {
        core,
        tasks: extractTaskGroupings(
          core.idMeaning,
          core.data.map((r) => r.data)
        ),
      };
    }
  );
}
/** Execute a single field inline a file, returning the evaluated result. */
function executeInline(field, origin, index, settings) {
  var _a, _b;
  return new Context(defaultLinkHandler(index, origin), settings, {
    this:
      (_b =
        (_a = index.pages.get(origin)) === null || _a === void 0
          ? void 0
          : _a.serialize(index)) !== null && _b !== void 0
        ? _b
        : {},
  }).evaluate(field);
}
/** The default link resolver used when creating contexts. */
function defaultLinkHandler(index, origin) {
  return {
    resolve: (link) => {
      let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
      if (!realFile) return null;
      let realPage = index.pages.get(realFile.path);
      if (!realPage) return null;
      return realPage.serialize(index);
    },
    normalize: (link) => {
      var _a;
      let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
      return (_a =
        realFile === null || realFile === void 0 ? void 0 : realFile.path) !==
        null && _a !== void 0
        ? _a
        : link;
    },
    exists: (link) => {
      let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
      return !!realFile;
    },
  };
}
/** Execute a calendar-based query, returning the final results. */
async function executeCalendar(query, index, origin, settings) {
  var _a, _b;
  // Start by collecting all of the files that match the 'from' queries.
  let fileset = await resolveSource(query.source, index, origin);
  if (!fileset.successful) return Result.failure(fileset.error);
  // Extract information about the origin page to add to the root context.
  let rootContext = new Context(defaultLinkHandler(index, origin), settings, {
    this:
      (_b =
        (_a = index.pages.get(origin)) === null || _a === void 0
          ? void 0
          : _a.serialize(index)) !== null && _b !== void 0
        ? _b
        : {},
  });
  let targetField = query.header.field.field;
  let fields = {
    target: targetField,
    link: Fields.indexVariable("file.link"),
  };
  return executeCoreExtract(
    fileset.value,
    rootContext,
    query.operations,
    fields
  ).map((core) => {
    let data = core.data.map((p) =>
      iden({
        date: p.data["target"],
        link: p.data["link"],
      })
    );
    return { core, data };
  });
}

function compareVersions(v1, v2) {
  // validate input and split into segments
  const n1 = validateAndParse(v1);
  const n2 = validateAndParse(v2);

  // pop off the patch
  const p1 = n1.pop();
  const p2 = n2.pop();

  // validate numbers
  const r = compareSegments(n1, n2);
  if (r !== 0) return r;

  // validate pre-release
  if (p1 && p2) {
    return compareSegments(p1.split("."), p2.split("."));
  } else if (p1 || p2) {
    return p1 ? -1 : 1;
  }

  return 0;
}

const validate = (v) =>
  typeof v === "string" && /^[v\d]/.test(v) && semver.test(v);

const compare = (v1, v2, operator) => {
  // validate input operator
  assertValidOperator(operator);

  // since result of compareVersions can only be -1 or 0 or 1
  // a simple map can be used to replace switch
  const res = compareVersions(v1, v2);

  return operatorResMap[operator].includes(res);
};

const satisfies = (v, r) => {
  // if no range operator then "="
  const m = r.match(/^([<>=~^]+)/);
  const op = m ? m[1] : "=";

  // if gt/lt/eq then operator compare
  if (op !== "^" && op !== "~") return compare(v, r, op);

  // else range of either "~" or "^" is assumed
  const [v1, v2, v3] = validateAndParse(v);
  const [r1, r2, r3] = validateAndParse(r);
  if (compareStrings(v1, r1) !== 0) return false;
  if (op === "^") {
    return compareSegments([v2, v3], [r2, r3]) >= 0;
  }
  if (compareStrings(v2, r2) !== 0) return false;
  return compareStrings(v3, r3) >= 0;
};

// export CJS style for parity
compareVersions.validate = validate;
compareVersions.compare = compare;
compareVersions.sastisfies = satisfies;

const semver =
  /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

const validateAndParse = (v) => {
  if (typeof v !== "string") {
    throw new TypeError("Invalid argument expected string");
  }
  const match = v.match(semver);
  if (!match) {
    throw new Error(`Invalid argument not valid semver ('${v}' received)`);
  }
  match.shift();
  return match;
};

const isWildcard = (s) => s === "*" || s === "x" || s === "X";

const tryParse = (v) => {
  const n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};

const forceType = (a, b) =>
  typeof a !== typeof b ? [String(a), String(b)] : [a, b];

const compareStrings = (a, b) => {
  if (isWildcard(a) || isWildcard(b)) return 0;
  const [ap, bp] = forceType(tryParse(a), tryParse(b));
  if (ap > bp) return 1;
  if (ap < bp) return -1;
  return 0;
};

const compareSegments = (a, b) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const r = compareStrings(a[i] || 0, b[i] || 0);
    if (r !== 0) return r;
  }
  return 0;
};

const operatorResMap = {
  ">": [1],
  ">=": [0, 1],
  "=": [0],
  "<=": [-1, 0],
  "<": [-1],
};

const allowedOperators = Object.keys(operatorResMap);

const assertValidOperator = (op) => {
  if (typeof op !== "string") {
    throw new TypeError(
      `Invalid operator type, expected string but got ${typeof op}`
    );
  }
  if (allowedOperators.indexOf(op) === -1) {
    throw new Error(
      `Invalid operator, expected one of ${allowedOperators.join("|")}`
    );
  }
};

var n,
  l$1,
  u$1,
  t$1,
  o$1,
  r$1,
  f$1,
  e$1 = {},
  c$1 = [],
  s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$1(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function h$1(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function v$1(l, u, i) {
  var t,
    o,
    r,
    f = {};
  for (r in u)
    "key" == r ? (t = u[r]) : "ref" == r ? (o = u[r]) : (f[r] = u[r]);
  if (
    (arguments.length > 2 &&
      (f.children = arguments.length > 3 ? n.call(arguments, 2) : i),
    "function" == typeof l && null != l.defaultProps)
  )
    for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return y$1(l, f, t, o, null);
}
function y$1(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u$1 : r,
  };
  return null == r && null != l$1.vnode && l$1.vnode(f), f;
}
function p$1() {
  return { current: null };
}
function d$1(n) {
  return n.children;
}
function _$1(n, l) {
  (this.props = n), (this.context = l);
}
function k$2(n, l) {
  if (null == l) return n.__ ? k$2(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++)
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? k$2(n) : null;
}
function b$1(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    return b$1(n);
  }
}
function m$1(n) {
  ((!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++) ||
    r$1 !== l$1.debounceRendering) &&
    ((r$1 = l$1.debounceRendering) || o$1)(g$2);
}
function g$2() {
  for (var n; (g$2.__r = t$1.length); )
    (n = t$1.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    })),
      (t$1 = []),
      n.some(function (n) {
        var l, u, i, t, o, r;
        n.__d &&
          ((o = (t = (l = n).__v).__e),
          (r = l.__P) &&
            ((u = []),
            ((i = a$1({}, t)).__v = t.__v + 1),
            j$2(
              r,
              t,
              i,
              l.__n,
              void 0 !== r.ownerSVGElement,
              null != t.__h ? [o] : null,
              u,
              null == o ? k$2(t) : o,
              t.__h
            ),
            z$1(u, t),
            t.__e != o && b$1(t)));
      });
}
function w$2(n, l, u, i, t, o, r, f, s, a) {
  var h,
    v,
    p,
    _,
    b,
    m,
    g,
    w = (i && i.__k) || c$1,
    A = w.length;
  for (u.__k = [], h = 0; h < l.length; h++)
    if (
      null !=
      (_ = u.__k[h] =
        null == (_ = l[h]) || "boolean" == typeof _
          ? null
          : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _
          ? y$1(null, _, null, null, _)
          : Array.isArray(_)
          ? y$1(d$1, { children: _ }, null, null, null)
          : _.__b > 0
          ? y$1(_.type, _.props, _.key, null, _.__v)
          : _)
    ) {
      if (
        ((_.__ = u),
        (_.__b = u.__b + 1),
        null === (p = w[h]) || (p && _.key == p.key && _.type === p.type))
      )
        w[h] = void 0;
      else
        for (v = 0; v < A; v++) {
          if ((p = w[v]) && _.key == p.key && _.type === p.type) {
            w[v] = void 0;
            break;
          }
          p = null;
        }
      j$2(n, _, (p = p || e$1), t, o, r, f, s, a),
        (b = _.__e),
        (v = _.ref) &&
          p.ref != v &&
          (g || (g = []),
          p.ref && g.push(p.ref, null, _),
          g.push(v, _.__c || b, _)),
        null != b
          ? (null == m && (m = b),
            "function" == typeof _.type && _.__k === p.__k
              ? (_.__d = s = x$2(_, s, n))
              : (s = P$1(n, _, p, w, b, s)),
            "function" == typeof u.type && (u.__d = s))
          : s && p.__e == s && s.parentNode != n && (s = k$2(p));
    }
  for (u.__e = m, h = A; h--; )
    null != w[h] &&
      ("function" == typeof u.type &&
        null != w[h].__e &&
        w[h].__e == u.__d &&
        (u.__d = k$2(i, h + 1)),
      N$1(w[h], w[h]));
  if (g) for (h = 0; h < g.length; h++) M$1(g[h], g[++h], g[++h]);
}
function x$2(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++)
    (i = t[o]) &&
      ((i.__ = n),
      (l =
        "function" == typeof i.type
          ? x$2(i, l, u)
          : P$1(u, i, i, t, i.__e, l)));
  return l;
}
function A$2(n, l) {
  return (
    (l = l || []),
    null == n ||
      "boolean" == typeof n ||
      (Array.isArray(n)
        ? n.some(function (n) {
            A$2(n, l);
          })
        : l.push(n)),
    l
  );
}
function P$1(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) (r = l.__d), (l.__d = void 0);
  else if (null == u || t != o || null == t.parentNode)
    n: if (null == o || o.parentNode !== n) n.appendChild(t), (r = null);
    else {
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2)
        if (f == t) break n;
      n.insertBefore(t, o), (r = o);
    }
  return void 0 !== r ? r : t.nextSibling;
}
function C$1(n, l, u, i, t) {
  var o;
  for (o in u)
    "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);
  for (o in l)
    (t && "function" != typeof l[o]) ||
      "children" === o ||
      "key" === o ||
      "value" === o ||
      "checked" === o ||
      u[o] === l[o] ||
      H$1(n, o, l[o], u[o], i);
}
function $$1(n, l, u) {
  "-" === l[0]
    ? n.setProperty(l, u)
    : (n[l] =
        null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px");
}
function H$1(n, l, u, i, t) {
  var o;
  n: if ("style" === l)
    if ("string" == typeof u) n.style.cssText = u;
    else {
      if (("string" == typeof i && (n.style.cssText = i = ""), i))
        for (l in i) (u && l in u) || $$1(n.style, l, "");
      if (u) for (l in u) (i && u[l] === i[l]) || $$1(n.style, l, u[l]);
    }
  else if ("o" === l[0] && "n" === l[1])
    (o = l !== (l = l.replace(/Capture$/, ""))),
      (l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
      n.l || (n.l = {}),
      (n.l[l + o] = u),
      u
        ? i || n.addEventListener(l, o ? T$2 : I$1, o)
        : n.removeEventListener(l, o ? T$2 : I$1, o);
  else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "href" !== l &&
      "list" !== l &&
      "form" !== l &&
      "tabIndex" !== l &&
      "download" !== l &&
      l in n
    )
      try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
    "function" == typeof u ||
      (null != u && (!1 !== u || ("a" === l[0] && "r" === l[1]))
        ? n.setAttribute(l, u)
        : n.removeAttribute(l));
  }
}
function I$1(n) {
  this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
}
function T$2(n) {
  this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
}
function j$2(n, u, i, t, o, r, f, e, c) {
  var s,
    h,
    v,
    y,
    p,
    k,
    b,
    m,
    g,
    x,
    A,
    P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h &&
    ((c = i.__h), (e = u.__e = i.__e), (u.__h = null), (r = [e])),
    (s = l$1.__b) && s(u);
  try {
    n: if ("function" == typeof P) {
      if (
        ((m = u.props),
        (g = (s = P.contextType) && t[s.__c]),
        (x = s ? (g ? g.props.value : s.__) : t),
        i.__c
          ? (b = (h = u.__c = i.__c).__ = h.__E)
          : ("prototype" in P && P.prototype.render
              ? (u.__c = h = new P(m, x))
              : ((u.__c = h = new _$1(m, x)),
                (h.constructor = P),
                (h.render = O$1)),
            g && g.sub(h),
            (h.props = m),
            h.state || (h.state = {}),
            (h.context = x),
            (h.__n = t),
            (v = h.__d = !0),
            (h.__h = [])),
        null == h.__s && (h.__s = h.state),
        null != P.getDerivedStateFromProps &&
          (h.__s == h.state && (h.__s = a$1({}, h.__s)),
          a$1(h.__s, P.getDerivedStateFromProps(m, h.__s))),
        (y = h.props),
        (p = h.state),
        v)
      )
        null == P.getDerivedStateFromProps &&
          null != h.componentWillMount &&
          h.componentWillMount(),
          null != h.componentDidMount && h.__h.push(h.componentDidMount);
      else {
        if (
          (null == P.getDerivedStateFromProps &&
            m !== y &&
            null != h.componentWillReceiveProps &&
            h.componentWillReceiveProps(m, x),
          (!h.__e &&
            null != h.shouldComponentUpdate &&
            !1 === h.shouldComponentUpdate(m, h.__s, x)) ||
            u.__v === i.__v)
        ) {
          (h.props = m),
            (h.state = h.__s),
            u.__v !== i.__v && (h.__d = !1),
            (h.__v = u),
            (u.__e = i.__e),
            (u.__k = i.__k),
            u.__k.forEach(function (n) {
              n && (n.__ = u);
            }),
            h.__h.length && f.push(h);
          break n;
        }
        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x),
          null != h.componentDidUpdate &&
            h.__h.push(function () {
              h.componentDidUpdate(y, p, k);
            });
      }
      (h.context = x),
        (h.props = m),
        (h.state = h.__s),
        (s = l$1.__r) && s(u),
        (h.__d = !1),
        (h.__v = u),
        (h.__P = n),
        (s = h.render(h.props, h.state, h.context)),
        (h.state = h.__s),
        null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())),
        v ||
          null == h.getSnapshotBeforeUpdate ||
          (k = h.getSnapshotBeforeUpdate(y, p)),
        (A =
          null != s && s.type === d$1 && null == s.key ? s.props.children : s),
        w$2(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c),
        (h.base = u.__e),
        (u.__h = null),
        h.__h.length && f.push(h),
        b && (h.__E = h.__ = null),
        (h.__e = !1);
    } else
      null == r && u.__v === i.__v
        ? ((u.__k = i.__k), (u.__e = i.__e))
        : (u.__e = L$1(i.__e, u, i, t, o, r, f, c));
    (s = l$1.diffed) && s(u);
  } catch (n) {
    (u.__v = null),
      (c || null != r) &&
        ((u.__e = e), (u.__h = !!c), (r[r.indexOf(e)] = null)),
      l$1.__e(n, u, i);
  }
}
function z$1(n, u) {
  l$1.__c && l$1.__c(u, n),
    n.some(function (u) {
      try {
        (n = u.__h),
          (u.__h = []),
          n.some(function (n) {
            n.call(u);
          });
      } catch (n) {
        l$1.__e(n, u.__v);
      }
    });
}
function L$1(l, u, i, t, o, r, f, c) {
  var s,
    a,
    v,
    y = i.props,
    p = u.props,
    d = u.type,
    _ = 0;
  if (("svg" === d && (o = !0), null != r))
    for (; _ < r.length; _++)
      if (
        (s = r[_]) &&
        "setAttribute" in s == !!d &&
        (d ? s.localName === d : 3 === s.nodeType)
      ) {
        (l = s), (r[_] = null);
        break;
      }
  if (null == l) {
    if (null === d) return document.createTextNode(p);
    (l = o
      ? document.createElementNS("http://www.w3.org/2000/svg", d)
      : document.createElement(d, p.is && p)),
      (r = null),
      (c = !1);
  }
  if (null === d) y === p || (c && l.data === p) || (l.data = p);
  else {
    if (
      ((r = r && n.call(l.childNodes)),
      (a = (y = i.props || e$1).dangerouslySetInnerHTML),
      (v = p.dangerouslySetInnerHTML),
      !c)
    ) {
      if (null != r)
        for (y = {}, _ = 0; _ < l.attributes.length; _++)
          y[l.attributes[_].name] = l.attributes[_].value;
      (v || a) &&
        ((v && ((a && v.__html == a.__html) || v.__html === l.innerHTML)) ||
          (l.innerHTML = (v && v.__html) || ""));
    }
    if ((C$1(l, p, y, o, c), v)) u.__k = [];
    else if (
      ((_ = u.props.children),
      w$2(
        l,
        Array.isArray(_) ? _ : [_],
        u,
        i,
        t,
        o && "foreignObject" !== d,
        r,
        f,
        r ? r[0] : i.__k && k$2(i, 0),
        c
      ),
      null != r)
    )
      for (_ = r.length; _--; ) null != r[_] && h$1(r[_]);
    c ||
      ("value" in p &&
        void 0 !== (_ = p.value) &&
        (_ !== l.value ||
          ("progress" === d && !_) ||
          ("option" === d && _ !== y.value)) &&
        H$1(l, "value", _, y.value, !1),
      "checked" in p &&
        void 0 !== (_ = p.checked) &&
        _ !== l.checked &&
        H$1(l, "checked", _, y.checked, !1));
  }
  return l;
}
function M$1(n, u, i) {
  try {
    "function" == typeof n ? n(u) : (n.current = u);
  } catch (n) {
    l$1.__e(n, i);
  }
}
function N$1(n, u, i) {
  var t, o;
  if (
    (l$1.unmount && l$1.unmount(n),
    (t = n.ref) && ((t.current && t.current !== n.__e) || M$1(t, null, u)),
    null != (t = n.__c))
  ) {
    if (t.componentWillUnmount)
      try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
    t.base = t.__P = null;
  }
  if ((t = n.__k))
    for (o = 0; o < t.length; o++)
      t[o] && N$1(t[o], u, "function" != typeof n.type);
  i || null == n.__e || h$1(n.__e), (n.__e = n.__d = void 0);
}
function O$1(n, l, u) {
  return this.constructor(n, u);
}
function S$1(u, i, t) {
  var o, r, f;
  l$1.__ && l$1.__(u, i),
    (r = (o = "function" == typeof t) ? null : (t && t.__k) || i.__k),
    (f = []),
    j$2(
      i,
      (u = ((!o && t) || i).__k = v$1(d$1, null, [u])),
      r || e$1,
      e$1,
      void 0 !== i.ownerSVGElement,
      !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null,
      f,
      !o && t ? t : r ? r.__e : i.firstChild,
      o
    ),
    z$1(f, u);
}
function q$1(n, l) {
  S$1(n, l, q$1);
}
function B$1(l, u, i) {
  var t,
    o,
    r,
    f = a$1({}, l.props);
  for (r in u)
    "key" == r ? (t = u[r]) : "ref" == r ? (o = u[r]) : (f[r] = u[r]);
  return (
    arguments.length > 2 &&
      (f.children = arguments.length > 3 ? n.call(arguments, 2) : i),
    y$1(l.type, f, t || l.key, o || l.ref, null)
  );
}
function D$1(n, l) {
  var u = {
    __c: (l = "__cC" + f$1++),
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return (
        this.getChildContext ||
          ((u = []),
          ((i = {})[l] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value && u.some(m$1);
          }),
          (this.sub = function (n) {
            u.push(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function () {
              u.splice(u.indexOf(n), 1), l && l.call(n);
            };
          })),
        n.children
      );
    },
  };
  return (u.Provider.__ = u.Consumer.contextType = u);
}
(n = c$1.slice),
  (l$1 = {
    __e: function (n, l, u, i) {
      for (var t, o, r; (l = l.__); )
        if ((t = l.__c) && !t.__)
          try {
            if (
              ((o = t.constructor) &&
                null != o.getDerivedStateFromError &&
                (t.setState(o.getDerivedStateFromError(n)), (r = t.__d)),
              null != t.componentDidCatch &&
                (t.componentDidCatch(n, i || {}), (r = t.__d)),
              r)
            )
              return (t.__E = t);
          } catch (l) {
            n = l;
          }
      throw n;
    },
  }),
  (u$1 = 0),
  (_$1.prototype.setState = function (n, l) {
    var u;
    (u =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = a$1({}, this.state))),
      "function" == typeof n && (n = n(a$1({}, u), this.props)),
      n && a$1(u, n),
      null != n && this.__v && (l && this.__h.push(l), m$1(this));
  }),
  (_$1.prototype.forceUpdate = function (n) {
    this.__v && ((this.__e = !0), n && this.__h.push(n), m$1(this));
  }),
  (_$1.prototype.render = d$1),
  (t$1 = []),
  (o$1 =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (g$2.__r = 0),
  (f$1 = 0);

var t,
  u,
  r,
  o = 0,
  i = [],
  c = l$1.__b,
  f = l$1.__r,
  e = l$1.diffed,
  a = l$1.__c,
  v = l$1.unmount;
function l(t, r) {
  l$1.__h && l$1.__h(u, t, o || r), (o = 0);
  var i = u.__H || (u.__H = { __: [], __h: [] });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function m(n) {
  return (o = 1), p(w$1, n);
}
function p(n, r, o) {
  var i = l(t++, 2);
  return (
    (i.t = n),
    i.__c ||
      ((i.__ = [
        o ? o(r) : w$1(void 0, r),
        function (n) {
          var t = i.t(i.__[0], n);
          i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
        },
      ]),
      (i.__c = u)),
    i.__
  );
}
function y(r, o) {
  var i = l(t++, 3);
  !l$1.__s && k$1(i.__H, o) && ((i.__ = r), (i.__H = o), u.__H.__h.push(i));
}
function d(r, o) {
  var i = l(t++, 4);
  !l$1.__s && k$1(i.__H, o) && ((i.__ = r), (i.__H = o), u.__h.push(i));
}
function h(n) {
  return (
    (o = 5),
    _(function () {
      return { current: n };
    }, [])
  );
}
function s(n, t, u) {
  (o = 6),
    d(
      function () {
        return "function" == typeof n
          ? (n(t()),
            function () {
              return n(null);
            })
          : n
          ? ((n.current = t()),
            function () {
              return (n.current = null);
            })
          : void 0;
      },
      null == u ? u : u.concat(n)
    );
}
function _(n, u) {
  var r = l(t++, 7);
  return k$1(r.__H, u) && ((r.__ = n()), (r.__H = u), (r.__h = n)), r.__;
}
function A$1(n, t) {
  return (
    (o = 8),
    _(function () {
      return n;
    }, t)
  );
}
function F$1(n) {
  var r = u.context[n.__c],
    o = l(t++, 9);
  return (
    (o.c = n),
    r ? (null == o.__ && ((o.__ = !0), r.sub(u)), r.props.value) : n.__
  );
}
function T$1(t, u) {
  l$1.useDebugValue && l$1.useDebugValue(u ? u(t) : t);
}
function x$1() {
  for (var t; (t = i.shift()); )
    if (t.__P)
      try {
        t.__H.__h.forEach(g$1), t.__H.__h.forEach(j$1), (t.__H.__h = []);
      } catch (u) {
        (t.__H.__h = []), l$1.__e(u, t.__v);
      }
}
(l$1.__b = function (n) {
  (u = null), c && c(n);
}),
  (l$1.__r = function (n) {
    f && f(n), (t = 0);
    var r = (u = n.__c).__H;
    r && (r.__h.forEach(g$1), r.__h.forEach(j$1), (r.__h = []));
  }),
  (l$1.diffed = function (t) {
    e && e(t);
    var o = t.__c;
    o &&
      o.__H &&
      o.__H.__h.length &&
      ((1 !== i.push(o) && r === l$1.requestAnimationFrame) ||
        (
          (r = l$1.requestAnimationFrame) ||
          function (n) {
            var t,
              u = function () {
                clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
              },
              r = setTimeout(u, 100);
            b && (t = requestAnimationFrame(u));
          }
        )(x$1)),
      (u = null);
  }),
  (l$1.__c = function (t, u) {
    u.some(function (t) {
      try {
        t.__h.forEach(g$1),
          (t.__h = t.__h.filter(function (n) {
            return !n.__ || j$1(n);
          }));
      } catch (r) {
        u.some(function (n) {
          n.__h && (n.__h = []);
        }),
          (u = []),
          l$1.__e(r, t.__v);
      }
    }),
      a && a(t, u);
  }),
  (l$1.unmount = function (t) {
    v && v(t);
    var u,
      r = t.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          g$1(n);
        } catch (n) {
          u = n;
        }
      }),
      u && l$1.__e(u, r.__v));
  });
var b = "function" == typeof requestAnimationFrame;
function g$1(n) {
  var t = u,
    r = n.__c;
  "function" == typeof r && ((n.__c = void 0), r()), (u = t);
}
function j$1(n) {
  var t = u;
  (n.__c = n.__()), (u = t);
}
function k$1(n, t) {
  return (
    !n ||
    n.length !== t.length ||
    t.some(function (t, u) {
      return t !== n[u];
    })
  );
}
function w$1(n, t) {
  return "function" == typeof t ? t(n) : t;
}

function C(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function S(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n) {
  this.props = n;
}
function g(n, t) {
  function e(n) {
    var e = this.props.ref,
      r = e == n.ref;
    return (
      !r && e && (e.call ? e(null) : (e.current = null)),
      t ? !t(this.props, n) || !r : S(this.props, n)
    );
  }
  function r(t) {
    return (this.shouldComponentUpdate = e), v$1(n, t);
  }
  return (
    (r.displayName = "Memo(" + (n.displayName || n.name) + ")"),
    (r.prototype.isReactComponent = !0),
    (r.__f = !0),
    r
  );
}
((E.prototype = new _$1()).isPureReactComponent = !0),
  (E.prototype.shouldComponentUpdate = function (n, t) {
    return S(this.props, n) || S(this.state, t);
  });
var w = l$1.__b;
l$1.__b = function (n) {
  n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
    w && w(n);
};
var R =
  ("undefined" != typeof Symbol &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function x(n) {
  function t(t) {
    var e = C({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return (
    (t.$$typeof = R),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")"),
    t
  );
}
var N = function (n, t) {
    return null == n ? null : A$2(A$2(n).map(t));
  },
  k = {
    map: N,
    forEach: N,
    count: function (n) {
      return n ? A$2(n).length : 0;
    },
    only: function (n) {
      var t = A$2(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: A$2,
  },
  A = l$1.__e;
l$1.__e = function (n, t, e, r) {
  if (n.then)
    for (var u, o = t; (o = o.__); )
      if ((u = o.__c) && u.__c)
        return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
  A(n, t, e, r);
};
var O = l$1.unmount;
function L() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function U(n) {
  var t = n.__.__c;
  return t && t.__e && t.__e(n);
}
function F(n) {
  var t, e, r;
  function u(u) {
    if (
      (t ||
        (t = n()).then(
          function (n) {
            e = n.default || n;
          },
          function (n) {
            r = n;
          }
        ),
      r)
    )
      throw r;
    if (!e) throw t;
    return v$1(e, u);
  }
  return (u.displayName = "Lazy"), (u.__f = !0), u;
}
function M() {
  (this.u = null), (this.o = null);
}
(l$1.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
}),
  ((L.prototype = new _$1()).__c = function (n, t) {
    var e = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = U(r.__v),
      o = !1,
      i = function () {
        o || ((o = !0), (e.__R = null), u ? u(l) : l());
      };
    e.__R = i;
    var l = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var n = r.state.__e;
            r.__v.__k[0] = (function n(t, e, r) {
              return (
                t &&
                  ((t.__v = null),
                  (t.__k =
                    t.__k &&
                    t.__k.map(function (t) {
                      return n(t, e, r);
                    })),
                  t.__c &&
                    t.__c.__P === e &&
                    (t.__e && r.insertBefore(t.__e, t.__d),
                    (t.__c.__e = !0),
                    (t.__c.__P = r))),
                t
              );
            })(n, n.__c.__P, n.__c.__O);
          }
          var t;
          for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); )
            t.forceUpdate();
        }
      },
      f = !0 === t.__h;
    r.__u++ || f || r.setState({ __e: (r.__b = r.__v.__k[0]) }), n.then(i, i);
  }),
  (L.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (L.prototype.render = function (n, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function n(t, e, r) {
          return (
            t &&
              (t.__c &&
                t.__c.__H &&
                (t.__c.__H.__.forEach(function (n) {
                  "function" == typeof n.__c && n.__c();
                }),
                (t.__c.__H = null)),
              null != (t = C({}, t)).__c &&
                (t.__c.__P === r && (t.__c.__P = e), (t.__c = null)),
              (t.__k =
                t.__k &&
                t.__k.map(function (t) {
                  return n(t, e, r);
                }))),
            t
          );
        })(this.__b, e, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var u = t.__e && v$1(d$1, null, n.fallback);
    return u && (u.__h = null), [v$1(d$1, null, t.__e ? null : n.children), u];
  });
var T = function (n, t, e) {
  if (
    (++e[1] === e[0] && n.o.delete(t),
    n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size))
  )
    for (e = n.u; e; ) {
      for (; e.length > 3; ) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
};
function D(n) {
  return (
    (this.getChildContext = function () {
      return n.context;
    }),
    n.children
  );
}
function I(n) {
  var t = this,
    e = n.i;
  (t.componentWillUnmount = function () {
    S$1(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== e && t.componentWillUnmount(),
    n.__v
      ? (t.l ||
          ((t.i = e),
          (t.l = {
            nodeType: 1,
            parentNode: e,
            childNodes: [],
            appendChild: function (n) {
              this.childNodes.push(n), t.i.appendChild(n);
            },
            insertBefore: function (n, e) {
              this.childNodes.push(n), t.i.appendChild(n);
            },
            removeChild: function (n) {
              this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
                t.i.removeChild(n);
            },
          })),
        S$1(v$1(D, { context: t.context }, n.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function W(n, t) {
  var e = v$1(I, { __v: n, i: t });
  return (e.containerInfo = t), e;
}
((M.prototype = new _$1()).__e = function (n) {
  var t = this,
    e = U(t.__v),
    r = t.o.get(n);
  return (
    r[0]++,
    function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
      };
      e ? e(o) : o();
    }
  );
}),
  (M.prototype.render = function (n) {
    (this.u = null), (this.o = new Map());
    var t = A$2(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--; ) this.o.set(t[e], (this.u = [1, 0, this.u]));
    return n.children;
  }),
  (M.prototype.componentDidUpdate = M.prototype.componentDidMount =
    function () {
      var n = this;
      this.o.forEach(function (t, e) {
        T(n, e, t);
      });
    });
var P =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    60103,
  V =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  j = "undefined" != typeof document,
  z = function (n) {
    return (
      "undefined" != typeof Symbol && "symbol" == typeof Symbol()
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(n);
  };
function B(n, t, e) {
  return (
    null == t.__k && (t.textContent = ""),
    S$1(n, t),
    "function" == typeof e && e(),
    n ? n.__c : null
  );
}
function $(n, t, e) {
  return q$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
(_$1.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (n) {
    Object.defineProperty(_$1.prototype, n, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + n];
      },
      set: function (t) {
        Object.defineProperty(this, n, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var H = l$1.event;
function Z() {}
function Y() {
  return this.cancelBubble;
}
function q() {
  return this.defaultPrevented;
}
l$1.event = function (n) {
  return (
    H && (n = H(n)),
    (n.persist = Z),
    (n.isPropagationStopped = Y),
    (n.isDefaultPrevented = q),
    (n.nativeEvent = n)
  );
};
var G,
  J = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  K = l$1.vnode;
l$1.vnode = function (n) {
  var t = n.type,
    e = n.props,
    r = e;
  if ("string" == typeof t) {
    var u = -1 === t.indexOf("-");
    for (var o in ((r = {}), e)) {
      var i = e[o];
      (j && "children" === o && "noscript" === t) ||
        ("value" === o && "defaultValue" in e && null == i) ||
        ("defaultValue" === o && "value" in e && null == e.value
          ? (o = "value")
          : "download" === o && !0 === i
          ? (i = "")
          : /ondoubleclick/i.test(o)
          ? (o = "ondblclick")
          : /^onchange(textarea|input)/i.test(o + t) && !z(e.type)
          ? (o = "oninput")
          : /^onfocus$/i.test(o)
          ? (o = "onfocusin")
          : /^onblur$/i.test(o)
          ? (o = "onfocusout")
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
          ? (o = o.toLowerCase())
          : u && V.test(o)
          ? (o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase())
          : null === i && (i = void 0),
        (r[o] = i));
    }
    "select" == t &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = -1 != r.value.indexOf(n.props.value);
      })),
      "select" == t &&
        null != r.defaultValue &&
        (r.value = A$2(e.children).forEach(function (n) {
          n.props.selected = r.multiple
            ? -1 != r.defaultValue.indexOf(n.props.value)
            : r.defaultValue == n.props.value;
        })),
      (n.props = r),
      e.class != e.className &&
        ((J.enumerable = "className" in e),
        null != e.className && (r.class = e.className),
        Object.defineProperty(r, "className", J));
  }
  (n.$$typeof = P), K && K(n);
};
var Q = l$1.__r;
l$1.__r = function (n) {
  Q && Q(n), (G = n.__c);
};
var X = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (n) {
        return G.__n[n.__c].props.value;
      },
    },
  },
};
function tn(n) {
  return v$1.bind(null, n);
}
function en(n) {
  return !!n && n.$$typeof === P;
}
function rn(n) {
  return en(n) ? B$1.apply(null, arguments) : n;
}
function un(n) {
  return !!n.__k && (S$1(null, n), !0);
}
function on(n) {
  return (n && (n.base || (1 === n.nodeType && n))) || null;
}
var ln = function (n, t) {
    return n(t);
  },
  fn = function (n, t) {
    return n(t);
  };
var React = {
  useState: m,
  useReducer: p,
  useEffect: y,
  useLayoutEffect: d,
  useRef: h,
  useImperativeHandle: s,
  useMemo: _,
  useCallback: A$1,
  useContext: F$1,
  useDebugValue: T$1,
  version: "17.0.2",
  Children: k,
  render: B,
  hydrate: $,
  unmountComponentAtNode: un,
  createPortal: W,
  createElement: v$1,
  createContext: D$1,
  createFactory: tn,
  cloneElement: rn,
  createRef: p$1,
  Fragment: d$1,
  isValidElement: en,
  findDOMNode: on,
  Component: _$1,
  PureComponent: E,
  memo: g,
  forwardRef: x,
  flushSync: fn,
  unstable_batchedUpdates: ln,
  StrictMode: d$1,
  Suspense: L,
  SuspenseList: M,
  lazy: F,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X,
};

const IMAGE_EXTENSIONS = Object.freeze(
  new Set([
    ".tif",
    ".tiff",
    ".gif",
    ".png",
    ".apng",
    ".avif",
    ".jpg",
    ".jpeg",
    ".jfif",
    ".pjepg",
    ".pjp",
    ".svg",
    ".webp",
    ".bmp",
    ".ico",
    ".cur",
  ])
);
/** Determines if the given link points to an embedded image. */
function isImageEmbed(link) {
  if (!link.path.contains(".")) return false;
  let extension = link.path.substring(link.path.lastIndexOf("."));
  return link.type == "file" && link.embed && IMAGE_EXTENSIONS.has(extension);
}
/** Extract text of the form 'WxH' or 'W' from the display of a link. */
function extractImageDimensions(link) {
  if (!link.display) return undefined;
  let match = /^(\d+)x(\d+)$/iu.exec(link.display);
  if (match) return [parseInt(match[1]), parseInt(match[2])];
  let match2 = /^(\d+)/.exec(link.display);
  if (match2) return [parseInt(match2[1])];
  // No match.
  return undefined;
}

/** Provides core preact / rendering utilities for all view types. */
const DataviewContext = D$1(undefined);
/** Hacky preact component which wraps Obsidian's markdown renderer into a neat component. */
function RawMarkdown({
  content,
  sourcePath,
  inline = true,
  style,
  cls,
  onClick,
}) {
  const container = h(null);
  const component = F$1(DataviewContext).component;
  y(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    obsidian.MarkdownRenderer.renderMarkdown(
      content,
      container.current,
      sourcePath,
      component
    ).then(() => {
      if (!container.current || !inline) return;
      // Unwrap any created paragraph elements if we are inline.
      let paragraph = container.current.querySelector("p");
      while (paragraph) {
        let children = paragraph.childNodes;
        paragraph.replaceWith(...Array.from(children));
        paragraph = container.current.querySelector("p");
      }
    });
  }, [content, sourcePath, container.current]);
  return v$1("span", {
    ref: container,
    style: style,
    class: cls,
    onClick: onClick,
  });
}
/** Hacky preact component which wraps Obsidian's markdown renderer into a neat component. */
const Markdown = React.memo(RawMarkdown);
/** Embeds an HTML element in the react DOM. */
function RawEmbedHtml({ element }) {
  const container = h(null);
  y(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    container.current.appendChild(element);
  }, [container.current, element]);
  return v$1("span", { ref: container });
}
/** Embeds an HTML element in the react DOM. */
const EmbedHtml = React.memo(RawEmbedHtml);
/** Intelligently render an arbitrary literal value. */
function RawLit({ value, sourcePath, inline = false, depth = 0 }) {
  var _a, _b, _c;
  const context = F$1(DataviewContext);
  // Short-circuit if beyond the maximum render depth.
  if (depth >= context.settings.maxRecursiveRenderDepth)
    return v$1(d$1, null, "...");
  if (Values.isNull(value) || value === undefined) {
    return v$1(Markdown, {
      content: context.settings.renderNullAs,
      sourcePath: sourcePath,
    });
  } else if (Values.isString(value)) {
    return v$1(Markdown, { content: value, sourcePath: sourcePath });
  } else if (Values.isNumber(value)) {
    return v$1(d$1, null, "" + value);
  } else if (Values.isBoolean(value)) {
    return v$1(d$1, null, "" + value);
  } else if (Values.isDate(value)) {
    return v$1(
      d$1,
      null,
      renderMinimalDate(value, context.settings, currentLocale())
    );
  } else if (Values.isDuration(value)) {
    return v$1(d$1, null, renderMinimalDuration(value));
  } else if (Values.isLink(value)) {
    // Special case handling of image/video/etc embeddings to bypass the Obsidian API not working.
    if (isImageEmbed(value)) {
      let realFile = context.app.metadataCache.getFirstLinkpathDest(
        value.path,
        sourcePath
      );
      if (!realFile)
        return v$1(Markdown, {
          content: value.markdown(),
          sourcePath: sourcePath,
        });
      let dimensions = extractImageDimensions(value);
      let resourcePath = context.app.vault.getResourcePath(realFile);
      if (dimensions && dimensions.length == 2)
        return v$1("img", {
          alt: value.path,
          src: resourcePath,
          width: dimensions[0],
          height: dimensions[1],
        });
      else if (dimensions && dimensions.length == 1)
        return v$1("img", {
          alt: value.path,
          src: resourcePath,
          width: dimensions[0],
        });
      else return v$1("img", { alt: value.path, src: resourcePath });
    }
    return v$1(Markdown, { content: value.markdown(), sourcePath: sourcePath });
  } else if (Values.isHtml(value)) {
    return v$1(EmbedHtml, { element: value });
  } else if (Values.isWidget(value)) {
    if (Widgets.isListPair(value)) {
      return v$1(
        d$1,
        null,
        v$1(Lit, { value: value.key, sourcePath: sourcePath }),
        ":",
        " ",
        v$1(Lit, { value: value.value, sourcePath: sourcePath })
      );
    } else if (Widgets.isExternalLink(value)) {
      return v$1(
        "a",
        {
          href: value.url,
          rel: "noopener",
          target: "_blank",
          class: "external-link",
        },
        (_a = value.display) !== null && _a !== void 0 ? _a : value.url
      );
    } else {
      return v$1("b", null, "<unknown widget '", value.$widget, "'>");
    }
  } else if (Values.isFunction(value)) {
    return v$1(d$1, null, "<function>");
  } else if (Values.isArray(value) || DataArray.isDataArray(value)) {
    if (!inline) {
      return v$1(
        "ul",
        { class: "dataview dataview-ul dataview-result-list-ul" },
        value.map((subvalue) =>
          v$1(
            "li",
            { class: "dataview-result-list-li" },
            v$1(Lit, {
              value: subvalue,
              sourcePath: sourcePath,
              inline: inline,
              depth: depth + 1,
            })
          )
        )
      );
    } else {
      if (value.length == 0) return v$1(d$1, null, "<Empty List>");
      return v$1(
        "span",
        { class: "dataview dataview-result-list-span" },
        value.map((subvalue, index) =>
          v$1(
            d$1,
            null,
            index == 0 ? "" : ", ",
            v$1(Lit, {
              value: subvalue,
              sourcePath: sourcePath,
              inline: inline,
              depth: depth + 1,
            })
          )
        )
      );
    }
  } else if (Values.isObject(value)) {
    // Don't render classes in case they have recursive references; spoopy.
    if (
      ((_b =
        value === null || value === void 0 ? void 0 : value.constructor) ===
        null || _b === void 0
        ? void 0
        : _b.name) &&
      ((_c =
        value === null || value === void 0 ? void 0 : value.constructor) ===
        null || _c === void 0
        ? void 0
        : _c.name) != "Object"
    ) {
      return v$1(d$1, null, "<", value.constructor.name, ">");
    }
    if (!inline) {
      return v$1(
        "ul",
        { class: "dataview dataview-ul dataview-result-object-ul" },
        Object.entries(value).map(([key, value]) =>
          v$1(
            "li",
            { class: "dataview dataview-li dataview-result-object-li" },
            key,
            ": ",
            v$1(Lit, {
              value: value,
              sourcePath: sourcePath,
              inline: inline,
              depth: depth + 1,
            })
          )
        )
      );
    } else {
      if (Object.keys(value).length == 0)
        return v$1(d$1, null, "<Empty Object>");
      return v$1(
        "span",
        { class: "dataview dataview-result-object-span" },
        Object.entries(value).map(([key, value], index) =>
          v$1(
            d$1,
            null,
            index == 0 ? "" : ", ",
            key,
            ": ",
            v$1(Lit, {
              value: value,
              sourcePath: sourcePath,
              inline: inline,
              depth: depth + 1,
            })
          )
        )
      );
    }
  }
  return v$1(d$1, null, "<Unrecognized: ", JSON.stringify(value), ">");
}
/** Intelligently render an arbitrary literal value. */
const Lit = React.memo(RawLit);
/** Render a simple nice looking error box in a code style. */
function ErrorPre(props, {}) {
  return v$1("pre", { class: "dataview dataview-error" }, props.children);
}
/** Render a pretty centered error message in a box. */
function ErrorMessage({ message }) {
  return v$1(
    "div",
    { class: "dataview dataview-error-box" },
    v$1("p", { class: "dataview dataview-error-message" }, message)
  );
}
/**
 * Complex convienence hook which calls `compute` every time the index updates, updating the current state.
 */
function useIndexBackedState(
  container,
  app,
  settings,
  index,
  initial,
  compute
) {
  let [initialized, setInitialized] = m(false);
  let [state, updateState] = m(initial);
  let [lastReload, setLastReload] = m(index.revision);
  // Initial setup to queue fetching the correct state.
  if (!initialized) {
    setLastReload(index.revision);
    setInitialized(true);
    compute().then(updateState);
  }
  // Updated on every container re-create; automatically updates state.
  y(() => {
    const refreshOperation = () => {
      if (
        lastReload != index.revision &&
        container.isShown() &&
        settings.refreshEnabled
      ) {
        compute().then(updateState);
        setLastReload(index.revision);
      }
    };
    // Refresh after index changes stop.
    let workEvent = app.workspace.on(
      "dataview:refresh-views",
      refreshOperation
    );
    // ...or when the DOM is shown (sidebar expands, tab selected, nodes scrolled into view).
    let nodeEvent = container.onNodeInserted(refreshOperation);
    return () => {
      app.workspace.offref(workEvent);
      nodeEvent();
    };
  }, [container, lastReload]);
  return state;
}
/** A trivial wrapper which allows a react component to live for the duration of a `MarkdownRenderChild`. */
class ReactRenderer extends obsidian.MarkdownRenderChild {
  constructor(init, element) {
    super(init.container);
    this.init = init;
    this.element = element;
  }
  onload() {
    const context = Object.assign({}, { component: this }, this.init);
    S$1(
      v$1(DataviewContext.Provider, { value: context }, this.element),
      this.containerEl
    );
  }
  onunload() {
    un(this.containerEl);
  }
}

/** JSX component which renders a task element recursively. */
function TaskItem({ item }) {
  var _a;
  let context = F$1(DataviewContext);
  // Navigate to the given task on click.
  const onClicked = (evt) => {
    // Skip this event if a link was pressed.
    if (
      evt.target != null &&
      evt.target != undefined &&
      evt.target.tagName == "A"
    ) {
      return;
    }
    evt.stopPropagation();
    const selectionState = {
      eState: {
        cursor: {
          from: { line: item.line, ch: item.position.start.col },
          to: {
            line: item.line + item.lineCount - 1,
            ch: item.position.end.col,
          },
        },
        line: item.line,
      },
    };
    context.app.workspace.openLinkText(
      item.link.toFile().obsidianLink(),
      item.path,
      evt.ctrlKey,
      selectionState
    );
  };
  // Check/uncheck trhe task in the original file.
  const onChecked = (evt) => {
    evt.stopPropagation();
    const completed = evt.currentTarget.checked;
    const status = completed ? "x" : " ";
    // Update data-task on the parent element (css style)
    const parent = evt.currentTarget.parentElement;
    parent === null || parent === void 0
      ? void 0
      : parent.setAttribute("data-task", status);
    let updatedText = undefined;
    if (context.settings.taskCompletionTracking)
      updatedText = setTaskCompletion(
        item.text,
        context.settings.taskCompletionText,
        completed
      );
    rewriteTask(context.app.vault, item, status, updatedText);
  };
  const checked = item.status !== " ";
  return v$1(
    "li",
    {
      class: "dataview task-list-item" + (checked ? " is-checked" : ""),
      onClick: onClicked,
      "data-task": item.status,
    },
    v$1("input", {
      class: "dataview task-list-item-checkbox",
      type: "checkbox",
      checked: checked,
      onClick: onChecked,
    }),
    v$1(Markdown, {
      inline: true,
      content: (_a = item.visual) !== null && _a !== void 0 ? _a : item.text,
      sourcePath: item.path,
    }),
    item.children.length > 0 && v$1(TaskList, { items: item.children })
  );
}
/** JSX component which renders a plain list item recursively. */
function ListItem({ item }) {
  var _a;
  return v$1(
    "li",
    { class: "dataview task-list-basic-item" },
    v$1(Markdown, {
      inline: true,
      content: (_a = item.visual) !== null && _a !== void 0 ? _a : item.text,
      sourcePath: item.path,
    }),
    item.children.length > 0 && v$1(TaskList, { items: item.children })
  );
}
/** JSX component which renders a list of task items recursively. */
function TaskList({ items }) {
  const settings = F$1(DataviewContext).settings;
  if (items.length == 0 && settings.warnOnEmptyResult)
    return v$1(ErrorMessage, {
      message: "Dataview: No results to show for task query.",
    });
  let [nest, _mask] = nestItems(items);
  return v$1(
    "ul",
    { class: "contains-task-list" },
    nest.map((item) =>
      item.task
        ? v$1(TaskItem, { key: listId(item), item: item })
        : v$1(ListItem, { key: listId(item), item: item })
    )
  );
}
/** JSX component which recursively renders grouped tasks. */
function TaskGrouping({ items, sourcePath }) {
  const isGrouping = items.length > 0 && Groupings.isGrouping(items);
  return v$1(
    d$1,
    null,
    isGrouping &&
      items.map((item) =>
        v$1(
          d$1,
          { key: item.key },
          v$1(
            "h4",
            null,
            v$1(Lit, { value: item.key, sourcePath: sourcePath }),
            v$1(
              "span",
              { class: "dataview small-text" },
              Groupings.count(item.rows)
            )
          ),
          v$1(
            "div",
            { class: "dataview result-group" },
            v$1(TaskGrouping, { items: item.rows, sourcePath: sourcePath })
          )
        )
      ),
    !isGrouping && v$1(TaskList, { items: items })
  );
}
/**
 * Pure view over (potentially grouped) tasks and list items which allows for checking/unchecking tasks and manipulating
 * the task view.
 */
function TaskView({ query, sourcePath }) {
  let context = F$1(DataviewContext);
  let items = useIndexBackedState(
    context.container,
    context.app,
    context.settings,
    context.index,
    { state: "loading" },
    async () => {
      let result = await asyncTryOrPropogate(() =>
        executeTask(query, sourcePath, context.index, context.settings)
      );
      if (!result.successful)
        return { state: "error", error: result.error, sourcePath };
      else return { state: "ready", items: result.value.tasks };
    }
  );
  if (items.state == "loading")
    return v$1(d$1, null, v$1(ErrorPre, null, "Loading"));
  else if (items.state == "error")
    return v$1(d$1, null, v$1(ErrorPre, null, "Dataview: ", items.error));
  return v$1(
    "div",
    { class: "dataview dataview-container" },
    v$1(TaskGrouping, { items: items.items, sourcePath: sourcePath })
  );
}
function createTaskView(init, query, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(TaskView, { query: query, sourcePath: sourcePath })
  );
}
function createFixedTaskView(init, items, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(TaskGrouping, { items: items, sourcePath: sourcePath })
  );
}
/////////////////////////
// Task De-Duplication //
/////////////////////////
function listId(item) {
  return item.path + ":" + item.line;
}
function parentListId(item) {
  return item.path + ":" + item.parent;
}
/** Compute a map of all task IDs -> tasks. */
function enumerateChildren(item, output) {
  if (!output.has(listId(item))) output.set(listId(item), item);
  for (let child of item.children) enumerateChildren(child, output);
  return output;
}
/** Replace basic tasks with tasks from a lookup map. Retains the original order of the list. */
function replaceChildren(elements, lookup) {
  return elements.map((element) => {
    element.children = replaceChildren(element.children, lookup);
    const id = listId(element);
    const map = lookup.get(id);
    if (map) return map;
    else return element;
  });
}
/**
 * Removes tasks from a list if they are already present by being a child of another task. Fixes child pointers.
 * Retains original order of input list.
 */
function nestItems(raw) {
  let elements = new Map();
  let mask = new Set();
  for (let elem of raw) {
    let id = listId(elem);
    elements.set(id, elem);
    mask.add(id);
  }
  // List all elements & their children in the lookup map.
  for (let elem of raw) enumerateChildren(elem, elements);
  let roots = raw.filter(
    (elem) =>
      elem.parent == undefined ||
      elem.parent == null ||
      !elements.has(parentListId(elem))
  );
  return [replaceChildren(roots, elements), mask];
}
/**
 * Recursively removes tasks from each subgroup if they are already present by being a child of another task.
 * Fixes child pointers. Retains original order of input list.
 */
function nestGroups(raw) {
  if (Groupings.isGrouping(raw)) {
    return raw.map((g) => {
      return { key: g.key, rows: nestGroups(g.rows) };
    });
  } else {
    return nestItems(raw)[0];
  }
}
///////////////////////
// Task Manipulation //
///////////////////////
/** Trim empty ending lines. */
function trimEndingLines(text) {
  let parts = text.split(/\r?\n/u);
  let trim = parts.length - 1;
  while (trim > 0 && parts[trim].trim() == "") trim--;
  return parts.join("\n");
}
/** Set the task completion key on check. */
function setTaskCompletion(originalText, completionKey, complete) {
  if (!complete)
    return trimEndingLines(
      setInlineField(originalText, completionKey, undefined)
    );
  let parts = originalText.split(/\r?\n/u);
  parts[parts.length - 1] = setInlineField(
    parts[parts.length - 1],
    completionKey,
    DateTime_1.now().toISODate()
  );
  return parts.join("\n");
}
/** Rewrite a task with the given completion status and new text. */
async function rewriteTask(vault, task, desiredStatus, desiredText) {
  if (
    desiredStatus == task.status &&
    (desiredText == undefined || desiredText == task.text)
  )
    return;
  desiredStatus = desiredStatus == "" ? " " : desiredStatus;
  let rawFiletext = await vault.adapter.read(task.path);
  let hasRN = rawFiletext.contains("\r");
  let filetext = rawFiletext.split(/\r?\n/u);
  if (filetext.length < task.line) return;
  let match = LIST_ITEM_REGEX.exec(filetext[task.line]);
  if (!match || match[2].length == 0) return;
  let taskTextParts = task.text.split("\n");
  if (taskTextParts[0].trim() != match[3].trim()) return;
  // We have a positive match here at this point, so go ahead and do the rewrite of the status.
  let initialSpacing = /^[\s>]*/u.exec(filetext[task.line])[0];
  if (desiredText) {
    let desiredParts = desiredText.split("\n");
    let newTextLines = [
      `${initialSpacing}${task.symbol} [${desiredStatus}] ${desiredParts[0]}`,
    ].concat(desiredParts.slice(1).map((l) => initialSpacing + "\t" + l));
    filetext.splice(task.line, task.lineCount, ...newTextLines);
  } else {
    filetext[task.line] = `${initialSpacing}${
      task.symbol
    } [${desiredStatus}] ${taskTextParts[0].trim()}`;
  }
  let newText = filetext.join(hasRN ? "\r\n" : "\n");
  await vault.adapter.write(task.path, newText);
}

function ListGrouping({ items, sourcePath }) {
  return v$1(
    "ul",
    { class: "dataview list-view-ul" },
    items.map((item) =>
      v$1("li", null, v$1(Lit, { value: item, sourcePath: sourcePath }))
    )
  );
}
/** Pure view over list elements.  */
function ListView({ query, sourcePath }) {
  let context = F$1(DataviewContext);
  let items = useIndexBackedState(
    context.container,
    context.app,
    context.settings,
    context.index,
    { state: "loading" },
    async () => {
      let result = await asyncTryOrPropogate(() =>
        executeList(query, context.index, sourcePath, context.settings)
      );
      if (!result.successful)
        return { state: "error", error: result.error, sourcePath };
      return { state: "ready", items: result.value.data };
    }
  );
  if (items.state == "loading")
    return v$1(d$1, null, v$1(ErrorPre, null, "Loading..."));
  else if (items.state == "error")
    return v$1(
      d$1,
      null,
      " ",
      v$1(ErrorPre, null, "Dataview: ", items.error),
      " "
    );
  if (items.items.length == 0 && context.settings.warnOnEmptyResult)
    return v$1(ErrorMessage, {
      message: "Dataview: No results to show for list query.",
    });
  return v$1(ListGrouping, { items: items.items, sourcePath: sourcePath });
}
function createListView(init, query, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(ListView, { query: query, sourcePath: sourcePath })
  );
}
function createFixedListView(init, elements, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(ListGrouping, { items: elements, sourcePath: sourcePath })
  );
}

/** Simple table over headings and corresponding values. */
function TableGrouping({ headings, values, sourcePath }) {
  let settings = F$1(DataviewContext).settings;
  return v$1(
    d$1,
    null,
    v$1(
      "table",
      { class: "dataview table-view-table" },
      v$1(
        "thead",
        { class: "table-view-thead" },
        v$1(
          "tr",
          { class: "table-view-tr-header" },
          headings.map((heading, index) =>
            v$1(
              "th",
              { class: "table-view-th" },
              v$1(Markdown, { sourcePath: sourcePath, content: heading }),
              index == 0 &&
                v$1("span", { class: "dataview small-text" }, values.length)
            )
          )
        )
      ),
      v$1(
        "tbody",
        { class: "table-view-tbody" },
        values.map((row) =>
          v$1(
            "tr",
            null,
            row.map((element) =>
              v$1(
                "td",
                null,
                v$1(Lit, { value: element, sourcePath: sourcePath })
              )
            )
          )
        )
      )
    ),
    settings.warnOnEmptyResult &&
      values.length == 0 &&
      v$1(ErrorMessage, {
        message: "Dataview: No results to show for table query.",
      })
  );
}
/** Pure view over list elements.  */
function TableView({ query, sourcePath }) {
  let context = F$1(DataviewContext);
  let items = useIndexBackedState(
    context.container,
    context.app,
    context.settings,
    context.index,
    { state: "loading" },
    async () => {
      let result = await asyncTryOrPropogate(() =>
        executeTable(query, context.index, sourcePath, context.settings)
      );
      if (!result.successful) return { state: "error", error: result.error };
      return {
        state: "ready",
        headings: result.value.names,
        values: result.value.data,
      };
    }
  );
  if (items.state == "loading")
    return v$1(d$1, null, v$1(ErrorPre, null, "Loading..."));
  else if (items.state == "error")
    return v$1(
      d$1,
      null,
      " ",
      v$1(ErrorPre, null, "Dataview: ", items.error),
      " "
    );
  return v$1(TableGrouping, {
    headings: items.headings,
    values: items.values,
    sourcePath: sourcePath,
  });
}
function createTableView(init, query, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(TableView, { query: query, sourcePath: sourcePath })
  );
}
function createFixedTableView(init, headings, values, sourcePath) {
  return new ReactRenderer(
    init,
    v$1(TableGrouping, {
      values: values,
      headings: headings,
      sourcePath: sourcePath,
    })
  );
}

/** Utility functions for quickly creating fields. */
var QueryFields;
(function (QueryFields) {
  function named(name, field) {
    return { name, field };
  }
  QueryFields.named = named;
  function sortBy(field, dir) {
    return { field, direction: dir };
  }
  QueryFields.sortBy = sortBy;
})(QueryFields || (QueryFields = {}));

/** Return a new parser which executes the underlying parser and returns it's raw string representation. */
function captureRaw(base) {
  return parsimmon_umd_min.exports.custom((success, failure) => {
    return (input, i) => {
      let result = base._(input, i);
      if (!result.status) return result;
      return Object.assign({}, result, {
        value: [result.value, input.substring(i, result.index)],
      });
    };
  });
}
/** Strip newlines and excess whitespace out of text. */
function stripNewlines(text) {
  return text
    .split(/[\r\n]+/)
    .map((t) => t.trim())
    .join("");
}
/** A parsimmon-powered parser-combinator implementation of the query language. */
const QUERY_LANGUAGE = parsimmon_umd_min.exports.createLanguage({
  // Simple atom parsing, like words, identifiers, numbers.
  queryType: (q) =>
    parsimmon_umd_min.exports
      .alt(parsimmon_umd_min.exports.regexp(/TABLE|LIST|TASK|CALENDAR/i))
      .map((str) => str.toLowerCase())
      .desc("query type ('TABLE', 'LIST', 'TASK', or 'CALENDAR')"),
  explicitNamedField: (q) =>
    parsimmon_umd_min.exports.seqMap(
      EXPRESSION.field.skip(parsimmon_umd_min.exports.whitespace),
      parsimmon_umd_min.exports
        .regexp(/AS/i)
        .skip(parsimmon_umd_min.exports.whitespace),
      EXPRESSION.identifier.or(EXPRESSION.string),
      (field, _as, ident) => QueryFields.named(ident, field)
    ),
  namedField: (q) =>
    parsimmon_umd_min.exports.alt(
      q.explicitNamedField,
      captureRaw(EXPRESSION.field).map(([value, text]) =>
        QueryFields.named(stripNewlines(text), value)
      )
    ),
  sortField: (q) =>
    parsimmon_umd_min.exports.seqMap(
      EXPRESSION.field.skip(parsimmon_umd_min.exports.optWhitespace),
      parsimmon_umd_min.exports
        .regexp(/ASCENDING|DESCENDING|ASC|DESC/i)
        .atMost(1),
      (field, dir) => {
        let direction = dir.length == 0 ? "ascending" : dir[0].toLowerCase();
        if (direction == "desc") direction = "descending";
        if (direction == "asc") direction = "ascending";
        return {
          field: field,
          direction: direction,
        };
      }
    ),
  headerClause: (q) =>
    q.queryType
      .skip(parsimmon_umd_min.exports.whitespace)
      .chain((qtype) => {
        switch (qtype) {
          case "table":
            return parsimmon_umd_min.exports.seqMap(
              parsimmon_umd_min.exports
                .regexp(/WITHOUT\s+ID/i)
                .skip(parsimmon_umd_min.exports.optWhitespace)
                .atMost(1),
              parsimmon_umd_min.exports.sepBy(
                q.namedField,
                parsimmon_umd_min.exports
                  .string(",")
                  .trim(parsimmon_umd_min.exports.optWhitespace)
              ),
              (withoutId, fields) => {
                return { type: "table", fields, showId: withoutId.length == 0 };
              }
            );
          case "list":
            return parsimmon_umd_min.exports.seqMap(
              parsimmon_umd_min.exports
                .regexp(/WITHOUT\s+ID/i)
                .skip(parsimmon_umd_min.exports.optWhitespace)
                .atMost(1),
              EXPRESSION.field.atMost(1),
              (withoutId, format) => {
                return {
                  type: "list",
                  format: format.length == 1 ? format[0] : undefined,
                  showId: withoutId.length == 0,
                };
              }
            );
          case "task":
            return parsimmon_umd_min.exports.succeed({ type: "task" });
          case "calendar":
            return parsimmon_umd_min.exports.seqMap(q.namedField, (field) => {
              return {
                type: "calendar",
                showId: true,
                field,
              };
            });
          default:
            return parsimmon_umd_min.exports.fail(
              `Unrecognized query type '${qtype}'`
            );
        }
      })
      .desc("TABLE or LIST or TASK or CALENDAR"),
  fromClause: (q) =>
    parsimmon_umd_min.exports.seqMap(
      parsimmon_umd_min.exports.regexp(/FROM/i),
      parsimmon_umd_min.exports.whitespace,
      EXPRESSION.source,
      (_1, _2, source) => source
    ),
  whereClause: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.regexp(/WHERE/i),
        parsimmon_umd_min.exports.whitespace,
        EXPRESSION.field,
        (where, _, field) => {
          return { type: "where", clause: field };
        }
      )
      .desc("WHERE <expression>"),
  sortByClause: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.regexp(/SORT/i),
        parsimmon_umd_min.exports.whitespace,
        q.sortField.sepBy1(
          parsimmon_umd_min.exports
            .string(",")
            .trim(parsimmon_umd_min.exports.optWhitespace)
        ),
        (sort, _1, fields) => {
          return { type: "sort", fields };
        }
      )
      .desc("SORT field [ASC/DESC]"),
  limitClause: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports.regexp(/LIMIT/i),
        parsimmon_umd_min.exports.whitespace,
        EXPRESSION.field,
        (limit, _1, field) => {
          return { type: "limit", amount: field };
        }
      )
      .desc("LIMIT <value>"),
  flattenClause: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports
          .regexp(/FLATTEN/i)
          .skip(parsimmon_umd_min.exports.whitespace),
        q.namedField,
        (_, field) => {
          return { type: "flatten", field };
        }
      )
      .desc("FLATTEN <value> [AS <name>]"),
  groupByClause: (q) =>
    parsimmon_umd_min.exports
      .seqMap(
        parsimmon_umd_min.exports
          .regexp(/GROUP BY/i)
          .skip(parsimmon_umd_min.exports.whitespace),
        q.namedField,
        (_, field) => {
          return { type: "group", field };
        }
      )
      .desc("GROUP BY <value> [AS <name>]"),
  // Full query parsing.
  clause: (q) =>
    parsimmon_umd_min.exports.alt(
      q.fromClause,
      q.whereClause,
      q.sortByClause,
      q.limitClause,
      q.groupByClause,
      q.flattenClause
    ),
  query: (q) =>
    parsimmon_umd_min.exports.seqMap(
      q.headerClause.trim(parsimmon_umd_min.exports.optWhitespace),
      q.fromClause.trim(parsimmon_umd_min.exports.optWhitespace).atMost(1),
      q.clause.trim(parsimmon_umd_min.exports.optWhitespace).many(),
      (header, from, clauses) => {
        return {
          header,
          source: from.length == 0 ? Sources.folder("") : from[0],
          operations: clauses,
          settings: DEFAULT_QUERY_SETTINGS,
        };
      }
    ),
});
/**
 * Attempt to parse a query from the given query text, returning a string error
 * if the parse failed.
 */
function parseQuery(text) {
  try {
    let query = QUERY_LANGUAGE.query.tryParse(text);
    return Result.success(query);
  } catch (error) {
    return Result.failure("" + error);
  }
}

function noop() {}
function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];
  return tar;
}
function is_promise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a
    ? b == b
    : a !== b || (a && typeof a === "object") || typeof a === "function";
}
function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn
    ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
    : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === undefined) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot(
  slot,
  slot_definition,
  ctx,
  $$scope,
  dirty,
  get_slot_changes_fn,
  get_slot_context_fn
) {
  const slot_changes = get_slot_changes(
    slot_definition,
    $$scope,
    dirty,
    get_slot_changes_fn
  );
  if (slot_changes) {
    const slot_context = get_slot_context(
      slot_definition,
      ctx,
      $$scope,
      get_slot_context_fn
    );
    slot.p(slot_context, slot_changes);
  }
}
function null_to_empty(value) {
  return value == null ? "" : value;
}

function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function children(element) {
  return Array.from(element.childNodes);
}
function set_data(text, data) {
  data = "" + data;
  if (text.wholeText !== data) text.data = data;
}
function toggle_class(element, name, toggle) {
  element.classList[toggle ? "add" : "remove"](name);
}

let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
  if (flushing) return;
  flushing = true;
  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros, // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

function handle_promise(promise, info) {
  const token = (info.token = {});
  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks) info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(
      (value) => {
        set_current_component(current_component);
        update(info.then, 1, info.value, value);
        set_current_component(null);
      },
      (error) => {
        set_current_component(current_component);
        update(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      }
    );
    // if we previously had a then/catch block, destroy it
    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = promise;
  }
}
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function update_keyed_each(
  old_blocks,
  dirty,
  get_key,
  dynamic,
  ctx,
  list,
  lookup,
  node,
  destroy,
  create_each_block,
  next,
  get_context
) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--) old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, (new_blocks[i] = block));
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = new Set();
  const did_move = new Set();
  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }
  while (n) insert(new_blocks[n - 1]);
  return new_blocks;
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }
  return update;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null
    ? spread_props
    : {};
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
}
function init(
  component,
  options,
  instance,
  create_fragment,
  not_equal,
  props,
  dirty = [-1]
) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = (component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
  });
  let ready = false;
  $$.ctx = instance
    ? instance(component, options.props || {}, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
          if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }
        return ret;
      })
    : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  // `false` as a special case of no DOM component
  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(
      component,
      options.target,
      options.anchor,
      options.customElement
    );
    flush();
  }
  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}

/**
 * dateUID is a way of weekly identifying daily/weekly/monthly notes.
 * They are prefixed with the granularity to avoid ambiguity.
 */
function getDateUID(date, granularity = "day") {
  const ts = date.clone().startOf(granularity).format();
  return `${granularity}-${ts}`;
}
var getDateUID_1 = getDateUID;

/* src/components/Dot.svelte generated by Svelte v3.35.0 */

function add_css$5() {
  var style = element("style");
  style.id = "svelte-1widvzq-style";
  style.textContent =
    ".dot.svelte-1widvzq,.hollow.svelte-1widvzq{display:inline-block;height:6px;width:6px;margin:0 1px}.filled.svelte-1widvzq{fill:var(--color-dot)}.active.filled.svelte-1widvzq{fill:var(--text-on-accent)}.hollow.svelte-1widvzq{fill:none;stroke:var(--color-dot)}.active.hollow.svelte-1widvzq{fill:none;stroke:var(--text-on-accent)}";
  append(document.head, style);
}

// (14:0) {:else}
function create_else_block$1(ctx) {
  let svg;
  let circle;
  let svg_class_value;

  return {
    c() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      attr(circle, "cx", "3");
      attr(circle, "cy", "3");
      attr(circle, "r", "2");
      attr(
        svg,
        "class",
        (svg_class_value =
          "" +
          (null_to_empty(`hollow ${/*className*/ ctx[0]}`) + " svelte-1widvzq"))
      );
      attr(svg, "viewBox", "0 0 6 6");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      toggle_class(svg, "active", /*isActive*/ ctx[2]);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, circle);
    },
    p(ctx, dirty) {
      if (
        dirty & /*className*/ 1 &&
        svg_class_value !==
          (svg_class_value =
            "" +
            (null_to_empty(`hollow ${/*className*/ ctx[0]}`) +
              " svelte-1widvzq"))
      ) {
        attr(svg, "class", svg_class_value);
      }

      if (dirty & /*className, isActive*/ 5) {
        toggle_class(svg, "active", /*isActive*/ ctx[2]);
      }
    },
    d(detaching) {
      if (detaching) detach(svg);
    },
  };
}

// (6:0) {#if isFilled}
function create_if_block$2(ctx) {
  let svg;
  let circle;
  let svg_class_value;

  return {
    c() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      attr(circle, "cx", "3");
      attr(circle, "cy", "3");
      attr(circle, "r", "2");
      attr(
        svg,
        "class",
        (svg_class_value =
          "" +
          (null_to_empty(`dot filled ${/*className*/ ctx[0]}`) +
            " svelte-1widvzq"))
      );
      attr(svg, "viewBox", "0 0 6 6");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      toggle_class(svg, "active", /*isActive*/ ctx[2]);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, circle);
    },
    p(ctx, dirty) {
      if (
        dirty & /*className*/ 1 &&
        svg_class_value !==
          (svg_class_value =
            "" +
            (null_to_empty(`dot filled ${/*className*/ ctx[0]}`) +
              " svelte-1widvzq"))
      ) {
        attr(svg, "class", svg_class_value);
      }

      if (dirty & /*className, isActive*/ 5) {
        toggle_class(svg, "active", /*isActive*/ ctx[2]);
      }
    },
    d(detaching) {
      if (detaching) detach(svg);
    },
  };
}

function create_fragment$6(ctx) {
  let if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (/*isFilled*/ ctx[1]) return create_if_block$2;
    return create_else_block$1;
  }

  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);

  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx, [dirty]) {
      if (
        current_block_type === (current_block_type = select_block_type(ctx)) &&
        if_block
      ) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    },
  };
}

function instance$6($$self, $$props, $$invalidate) {
  let { className = "" } = $$props;
  let { isFilled } = $$props;
  let { isActive } = $$props;

  $$self.$$set = ($$props) => {
    if ("className" in $$props)
      $$invalidate(0, (className = $$props.className));
    if ("isFilled" in $$props) $$invalidate(1, (isFilled = $$props.isFilled));
    if ("isActive" in $$props) $$invalidate(2, (isActive = $$props.isActive));
  };

  return [className, isFilled, isActive];
}

class Dot extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-1widvzq-style")) add_css$5();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      className: 0,
      isFilled: 1,
      isActive: 2,
    });
  }
}

/* src/components/MetadataResolver.svelte generated by Svelte v3.35.0 */

const get_default_slot_changes_1 = (dirty) => ({});
const get_default_slot_context_1 = (ctx) => ({ metadata: null });
const get_default_slot_changes = (dirty) => ({
  metadata: dirty & /*metadata*/ 1,
});
const get_default_slot_context = (ctx) => ({
  metadata: /*resolvedMeta*/ ctx[3],
});

// (11:0) {:else}
function create_else_block(ctx) {
  let current;
  const default_slot_template = /*#slots*/ ctx[2].default;
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/ ctx[1],
    get_default_slot_context_1
  );

  return {
    c() {
      if (default_slot) default_slot.c();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty & /*$$scope*/ 2) {
          update_slot(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/ ctx[1],
            dirty,
            get_default_slot_changes_1,
            get_default_slot_context_1
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    },
  };
}

// (7:0) {#if metadata}
function create_if_block$1(ctx) {
  let await_block_anchor;
  let promise;
  let current;

  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 3,
    blocks: [, , ,],
  };

  handle_promise((promise = /*metadata*/ ctx[0]), info);

  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, (info.anchor = anchor));
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;

      if (
        dirty & /*metadata*/ 1 &&
        promise !== (promise = /*metadata*/ ctx[0]) &&
        handle_promise(promise, info)
      );
      else {
        const child_ctx = ctx.slice();
        child_ctx[3] = info.resolved;
        info.block.p(child_ctx, dirty);
      }
    },
    i(local) {
      if (current) return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    },
  };
}

// (1:0) <svelte:options immutable />  <script lang="ts">; export let metadata; </script>  {#if metadata}
function create_catch_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop,
  };
}

// (8:37)      <slot metadata="{resolvedMeta}
function create_then_block(ctx) {
  let current;
  const default_slot_template = /*#slots*/ ctx[2].default;
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/ ctx[1],
    get_default_slot_context
  );

  return {
    c() {
      if (default_slot) default_slot.c();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty & /*$$scope, metadata*/ 3) {
          update_slot(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/ ctx[1],
            dirty,
            get_default_slot_changes,
            get_default_slot_context
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    },
  };
}

// (1:0) <svelte:options immutable />  <script lang="ts">; export let metadata; </script>  {#if metadata}
function create_pending_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop,
  };
}

function create_fragment$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block];
  const if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (/*metadata*/ ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] =
    if_block_creators[current_block_type_index](ctx);

  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();

        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });

        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] =
            if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    },
  };
}

function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;

  let { metadata } = $$props;

  $$self.$$set = ($$props) => {
    if ("metadata" in $$props) $$invalidate(0, (metadata = $$props.metadata));
    if ("$$scope" in $$props) $$invalidate(1, ($$scope = $$props.$$scope));
  };

  return [metadata, $$scope, slots];
}

class MetadataResolver extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, not_equal, {
      metadata: 0,
    });
  }
}

function isMacOS() {
  return navigator.appVersion.indexOf("Mac") !== -1;
}
function isMetaPressed(e) {
  return isMacOS() ? e.metaKey : e.ctrlKey;
}
function getDaysOfWeek(..._args) {
  return window.moment.weekdaysShort(true);
}
function isWeekend(date) {
  return date.isoWeekday() === 6 || date.isoWeekday() === 7;
}
function getStartOfWeek(days) {
  return days[0].weekday(0);
}
/**
 * Generate a 2D array of daily information to power
 * the calendar view.
 */
function getMonth(displayedMonth, ..._args) {
  const locale = window.moment().locale();
  const month = [];
  let week;
  const startOfMonth = displayedMonth.clone().locale(locale).date(1);
  const startOffset = startOfMonth.weekday();
  let date = startOfMonth.clone().subtract(startOffset, "days");
  for (let _day = 0; _day < 42; _day++) {
    if (_day % 7 === 0) {
      week = {
        days: [],
        weekNum: date.week(),
      };
      month.push(week);
    }
    week.days.push(date);
    date = date.clone().add(1, "days");
  }
  return month;
}

/* src/components/Day.svelte generated by Svelte v3.35.0 */

function add_css$4() {
  var style = element("style");
  style.id = "svelte-q3wqg9-style";
  style.textContent =
    ".day.svelte-q3wqg9{background-color:var(--color-background-day);border-radius:4px;color:var(--color-text-day);cursor:pointer;font-size:0.8em;height:100%;padding:4px;position:relative;text-align:center;transition:background-color 0.1s ease-in, color 0.1s ease-in;vertical-align:baseline}.day.svelte-q3wqg9:hover{background-color:var(--interactive-hover)}.day.active.svelte-q3wqg9:hover{background-color:var(--interactive-accent-hover)}.adjacent-month.svelte-q3wqg9{opacity:0.25}.today.svelte-q3wqg9{color:var(--color-text-today)}.day.svelte-q3wqg9:active,.active.svelte-q3wqg9,.active.today.svelte-q3wqg9{color:var(--text-on-accent);background-color:var(--interactive-accent)}.dot-container.svelte-q3wqg9{display:flex;flex-wrap:wrap;justify-content:center;line-height:6px;min-height:6px}";
  append(document.head, style);
}

function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}

// (36:8) {#each metadata.dots as dot}
function create_each_block$2(ctx) {
  let dot;
  let current;
  const dot_spread_levels = [/*dot*/ ctx[11]];
  let dot_props = {};

  for (let i = 0; i < dot_spread_levels.length; i += 1) {
    dot_props = assign(dot_props, dot_spread_levels[i]);
  }

  dot = new Dot({ props: dot_props });

  return {
    c() {
      create_component(dot.$$.fragment);
    },
    m(target, anchor) {
      mount_component(dot, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const dot_changes =
        dirty & /*metadata*/ 128
          ? get_spread_update(dot_spread_levels, [
              get_spread_object(/*dot*/ ctx[11]),
            ])
          : {};

      dot.$set(dot_changes);
    },
    i(local) {
      if (current) return;
      transition_in(dot.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dot.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dot, detaching);
    },
  };
}

// (22:2) <MetadataResolver metadata="{metadata}" let:metadata>
function create_default_slot$1(ctx) {
  let div1;
  let t0_value = /*date*/ ctx[0].format("D") + "";
  let t0;
  let t1;
  let div0;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  let each_value = /*metadata*/ ctx[7].dots;
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(
      get_each_context$2(ctx, each_value, i)
    );
  }

  const out = (i) =>
    transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });

  let div1_levels = [
    {
      class: (div1_class_value = `day ${
        /*metadata*/ ctx[7].classes.join(" ")
      }`),
    },
    /*metadata*/ ctx[7].dataAttributes || {},
  ];

  let div1_data = {};

  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }

  return {
    c() {
      div1 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(div0, "class", "dot-container svelte-q3wqg9");
      set_attributes(div1, div1_data);
      toggle_class(
        div1,
        "active",
        /*selectedId*/ ctx[6] === getDateUID_1(/*date*/ ctx[0], "day")
      );
      toggle_class(
        div1,
        "adjacent-month",
        !(/*date*/ ctx[0].isSame(/*displayedMonth*/ ctx[5], "month"))
      );
      toggle_class(
        div1,
        "today",
        /*date*/ ctx[0].isSame(/*today*/ ctx[4], "day")
      );
      toggle_class(div1, "svelte-q3wqg9", true);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, t0);
      append(div1, t1);
      append(div1, div0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }

      current = true;

      if (!mounted) {
        dispose = [
          listen(div1, "click", function () {
            if (is_function(/*onClick*/ ctx[2] && /*click_handler*/ ctx[8]))
              /*onClick*/ (ctx[2] && /*click_handler*/ ctx[8]).apply(
                this,
                arguments
              );
          }),
          listen(div1, "contextmenu", function () {
            if (
              is_function(
                /*onContextMenu*/ ctx[3] && /*contextmenu_handler*/ ctx[9]
              )
            )
              /*onContextMenu*/ (
                ctx[3] && /*contextmenu_handler*/ ctx[9]
              ).apply(this, arguments);
          }),
          listen(div1, "pointerover", function () {
            if (
              is_function(/*onHover*/ ctx[1] && /*pointerover_handler*/ ctx[10])
            )
              /*onHover*/ (ctx[1] && /*pointerover_handler*/ ctx[10]).apply(
                this,
                arguments
              );
          }),
        ];

        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        (!current || dirty & /*date*/ 1) &&
        t0_value !== (t0_value = /*date*/ ctx[0].format("D") + "")
      )
        set_data(t0, t0_value);

      if (dirty & /*metadata*/ 128) {
        each_value = /*metadata*/ ctx[7].dots;
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      set_attributes(
        div1,
        (div1_data = get_spread_update(div1_levels, [
          (!current ||
            (dirty & /*metadata*/ 128 &&
              div1_class_value !==
                (div1_class_value = `day ${
                  /*metadata*/ ctx[7].classes.join(" ")
                }`))) && { class: div1_class_value },
          dirty & /*metadata*/ 128 &&
            /*metadata*/ (ctx[7].dataAttributes || {}),
        ]))
      );

      toggle_class(
        div1,
        "active",
        /*selectedId*/ ctx[6] === getDateUID_1(/*date*/ ctx[0], "day")
      );
      toggle_class(
        div1,
        "adjacent-month",
        !(/*date*/ ctx[0].isSame(/*displayedMonth*/ ctx[5], "month"))
      );
      toggle_class(
        div1,
        "today",
        /*date*/ ctx[0].isSame(/*today*/ ctx[4], "day")
      );
      toggle_class(div1, "svelte-q3wqg9", true);
    },
    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(div1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    },
  };
}

function create_fragment$4(ctx) {
  let td;
  let metadataresolver;
  let current;

  metadataresolver = new MetadataResolver({
    props: {
      metadata: /*metadata*/ ctx[7],
      $$slots: {
        default: [
          create_default_slot$1,
          ({ metadata }) => ({ 7: metadata }),
          ({ metadata }) => (metadata ? 128 : 0),
        ],
      },
      $$scope: { ctx },
    },
  });

  return {
    c() {
      td = element("td");
      create_component(metadataresolver.$$.fragment);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      mount_component(metadataresolver, td, null);
      current = true;
    },
    p(ctx, [dirty]) {
      const metadataresolver_changes = {};
      if (dirty & /*metadata*/ 128)
        metadataresolver_changes.metadata = /*metadata*/ ctx[7];

      if (
        dirty &
        /*$$scope, metadata, selectedId, date, displayedMonth, today, onClick, onContextMenu, onHover*/ 16639
      ) {
        metadataresolver_changes.$$scope = { dirty, ctx };
      }

      metadataresolver.$set(metadataresolver_changes);
    },
    i(local) {
      if (current) return;
      transition_in(metadataresolver.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(metadataresolver.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(td);
      destroy_component(metadataresolver);
    },
  };
}

function instance$4($$self, $$props, $$invalidate) {
  let { date } = $$props;
  let { metadata } = $$props;
  let { onHover } = $$props;
  let { onClick } = $$props;
  let { onContextMenu } = $$props;
  let { today } = $$props;
  let { displayedMonth = null } = $$props;
  let { selectedId = null } = $$props;
  const click_handler = (e) => onClick(date, isMetaPressed(e));
  const contextmenu_handler = (e) => onContextMenu(date, e);
  const pointerover_handler = (e) => onHover(date, e.target, isMetaPressed(e));

  $$self.$$set = ($$props) => {
    if ("date" in $$props) $$invalidate(0, (date = $$props.date));
    if ("metadata" in $$props) $$invalidate(7, (metadata = $$props.metadata));
    if ("onHover" in $$props) $$invalidate(1, (onHover = $$props.onHover));
    if ("onClick" in $$props) $$invalidate(2, (onClick = $$props.onClick));
    if ("onContextMenu" in $$props)
      $$invalidate(3, (onContextMenu = $$props.onContextMenu));
    if ("today" in $$props) $$invalidate(4, (today = $$props.today));
    if ("displayedMonth" in $$props)
      $$invalidate(5, (displayedMonth = $$props.displayedMonth));
    if ("selectedId" in $$props)
      $$invalidate(6, (selectedId = $$props.selectedId));
  };

  return [
    date,
    onHover,
    onClick,
    onContextMenu,
    today,
    displayedMonth,
    selectedId,
    metadata,
    click_handler,
    contextmenu_handler,
    pointerover_handler,
  ];
}

class Day extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-q3wqg9-style")) add_css$4();

    init(this, options, instance$4, create_fragment$4, not_equal, {
      date: 0,
      metadata: 7,
      onHover: 1,
      onClick: 2,
      onContextMenu: 3,
      today: 4,
      displayedMonth: 5,
      selectedId: 6,
    });
  }
}

/* src/components/Arrow.svelte generated by Svelte v3.35.0 */

function add_css$3() {
  var style = element("style");
  style.id = "svelte-156w7na-style";
  style.textContent =
    ".arrow.svelte-156w7na.svelte-156w7na{align-items:center;cursor:pointer;display:flex;justify-content:center;width:24px}.arrow.is-mobile.svelte-156w7na.svelte-156w7na{width:32px}.right.svelte-156w7na.svelte-156w7na{transform:rotate(180deg)}.arrow.svelte-156w7na svg.svelte-156w7na{color:var(--color-arrow);height:16px;width:16px}";
  append(document.head, style);
}

function create_fragment$3(ctx) {
  let div;
  let svg;
  let path;
  let mounted;
  let dispose;

  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "fill", "currentColor");
      attr(
        path,
        "d",
        "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      );
      attr(svg, "focusable", "false");
      attr(svg, "role", "img");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 320 512");
      attr(svg, "class", "svelte-156w7na");
      attr(div, "class", "arrow svelte-156w7na");
      attr(div, "aria-label", /*tooltip*/ ctx[1]);
      toggle_class(div, "is-mobile", /*isMobile*/ ctx[3]);
      toggle_class(div, "right", /*direction*/ ctx[2] === "right");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, svg);
      append(svg, path);

      if (!mounted) {
        dispose = listen(div, "click", function () {
          if (is_function(/*onClick*/ ctx[0]))
            /*onClick*/ ctx[0].apply(this, arguments);
        });

        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;

      if (dirty & /*tooltip*/ 2) {
        attr(div, "aria-label", /*tooltip*/ ctx[1]);
      }

      if (dirty & /*direction*/ 4) {
        toggle_class(div, "right", /*direction*/ ctx[2] === "right");
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(div);
      mounted = false;
      dispose();
    },
  };
}

function instance$3($$self, $$props, $$invalidate) {
  let { onClick } = $$props;
  let { tooltip } = $$props;
  let { direction } = $$props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let isMobile = window.app.isMobile;

  $$self.$$set = ($$props) => {
    if ("onClick" in $$props) $$invalidate(0, (onClick = $$props.onClick));
    if ("tooltip" in $$props) $$invalidate(1, (tooltip = $$props.tooltip));
    if ("direction" in $$props)
      $$invalidate(2, (direction = $$props.direction));
  };

  return [onClick, tooltip, direction, isMobile];
}

class Arrow extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-156w7na-style")) add_css$3();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      onClick: 0,
      tooltip: 1,
      direction: 2,
    });
  }
}

/* src/components/Nav.svelte generated by Svelte v3.35.0 */

function add_css$2() {
  var style = element("style");
  style.id = "svelte-1vwr9dd-style";
  style.textContent =
    ".nav.svelte-1vwr9dd.svelte-1vwr9dd{align-items:center;display:flex;margin:0.6em 0 1em;padding:0 8px;width:100%}.nav.is-mobile.svelte-1vwr9dd.svelte-1vwr9dd{padding:0}.title.svelte-1vwr9dd.svelte-1vwr9dd{color:var(--color-text-title);font-size:1.5em;margin:0}.is-mobile.svelte-1vwr9dd .title.svelte-1vwr9dd{font-size:1.3em}.month.svelte-1vwr9dd.svelte-1vwr9dd{font-weight:500;text-transform:capitalize}.year.svelte-1vwr9dd.svelte-1vwr9dd{color:var(--interactive-accent)}.right-nav.svelte-1vwr9dd.svelte-1vwr9dd{display:flex;justify-content:center;margin-left:auto}.reset-button.svelte-1vwr9dd.svelte-1vwr9dd{cursor:pointer;border-radius:4px;color:var(--text-muted);font-size:0.7em;font-weight:600;letter-spacing:1px;margin:0 4px;padding:0px 4px;text-transform:uppercase}.is-mobile.svelte-1vwr9dd .reset-button.svelte-1vwr9dd{display:none}";
  append(document.head, style);
}

function create_fragment$2(ctx) {
  let div2;
  let h3;
  let span0;
  let t0_value = /*displayedMonth*/ ctx[0].format("MMM") + "";
  let t0;
  let t1;
  let span1;
  let t2_value = /*displayedMonth*/ ctx[0].format("YYYY") + "";
  let t2;
  let t3;
  let div1;
  let arrow0;
  let t4;
  let div0;
  let t6;
  let arrow1;
  let current;
  let mounted;
  let dispose;

  arrow0 = new Arrow({
    props: {
      direction: "left",
      onClick: /*decrementDisplayedMonth*/ ctx[3],
      tooltip: "Previous Month",
    },
  });

  arrow1 = new Arrow({
    props: {
      direction: "right",
      onClick: /*incrementDisplayedMonth*/ ctx[2],
      tooltip: "Next Month",
    },
  });

  return {
    c() {
      div2 = element("div");
      h3 = element("h3");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = text(t2_value);
      t3 = space();
      div1 = element("div");
      create_component(arrow0.$$.fragment);
      t4 = space();
      div0 = element("div");
      div0.textContent = `${/*todayDisplayStr*/ ctx[4]}`;
      t6 = space();
      create_component(arrow1.$$.fragment);
      attr(span0, "class", "month svelte-1vwr9dd");
      attr(span1, "class", "year svelte-1vwr9dd");
      attr(h3, "class", "title svelte-1vwr9dd");
      attr(div0, "class", "reset-button svelte-1vwr9dd");
      attr(div1, "class", "right-nav svelte-1vwr9dd");
      attr(div2, "class", "nav svelte-1vwr9dd");
      toggle_class(div2, "is-mobile", /*isMobile*/ ctx[5]);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, h3);
      append(h3, span0);
      append(span0, t0);
      append(h3, t1);
      append(h3, span1);
      append(span1, t2);
      append(div2, t3);
      append(div2, div1);
      mount_component(arrow0, div1, null);
      append(div1, t4);
      append(div1, div0);
      append(div1, t6);
      mount_component(arrow1, div1, null);
      current = true;

      if (!mounted) {
        dispose = [
          listen(h3, "click", function () {
            if (is_function(/*resetDisplayedMonth*/ ctx[1]))
              /*resetDisplayedMonth*/ ctx[1].apply(this, arguments);
          }),
          listen(div0, "click", function () {
            if (is_function(/*resetDisplayedMonth*/ ctx[1]))
              /*resetDisplayedMonth*/ ctx[1].apply(this, arguments);
          }),
        ];

        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (
        (!current || dirty & /*displayedMonth*/ 1) &&
        t0_value !== (t0_value = /*displayedMonth*/ ctx[0].format("MMM") + "")
      )
        set_data(t0, t0_value);
      if (
        (!current || dirty & /*displayedMonth*/ 1) &&
        t2_value !== (t2_value = /*displayedMonth*/ ctx[0].format("YYYY") + "")
      )
        set_data(t2, t2_value);
      const arrow0_changes = {};
      if (dirty & /*decrementDisplayedMonth*/ 8)
        arrow0_changes.onClick = /*decrementDisplayedMonth*/ ctx[3];
      arrow0.$set(arrow0_changes);
      const arrow1_changes = {};
      if (dirty & /*incrementDisplayedMonth*/ 4)
        arrow1_changes.onClick = /*incrementDisplayedMonth*/ ctx[2];
      arrow1.$set(arrow1_changes);
    },
    i(local) {
      if (current) return;
      transition_in(arrow0.$$.fragment, local);
      transition_in(arrow1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(arrow0.$$.fragment, local);
      transition_out(arrow1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div2);
      destroy_component(arrow0);
      destroy_component(arrow1);
      mounted = false;
      run_all(dispose);
    },
  };
}

function instance$2($$self, $$props, $$invalidate) {
  let { displayedMonth } = $$props;
  let { today } = $$props;
  let { resetDisplayedMonth } = $$props;
  let { incrementDisplayedMonth } = $$props;
  let { decrementDisplayedMonth } = $$props;

  // Get the word 'Today' but localized to the current language
  const todayDisplayStr = today.calendar().split(/\d|\s/)[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let isMobile = window.app.isMobile;

  $$self.$$set = ($$props) => {
    if ("displayedMonth" in $$props)
      $$invalidate(0, (displayedMonth = $$props.displayedMonth));
    if ("today" in $$props) $$invalidate(6, (today = $$props.today));
    if ("resetDisplayedMonth" in $$props)
      $$invalidate(1, (resetDisplayedMonth = $$props.resetDisplayedMonth));
    if ("incrementDisplayedMonth" in $$props)
      $$invalidate(
        2,
        (incrementDisplayedMonth = $$props.incrementDisplayedMonth)
      );
    if ("decrementDisplayedMonth" in $$props)
      $$invalidate(
        3,
        (decrementDisplayedMonth = $$props.decrementDisplayedMonth)
      );
  };

  return [
    displayedMonth,
    resetDisplayedMonth,
    incrementDisplayedMonth,
    decrementDisplayedMonth,
    todayDisplayStr,
    isMobile,
    today,
  ];
}

class Nav extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-1vwr9dd-style")) add_css$2();

    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      displayedMonth: 0,
      today: 6,
      resetDisplayedMonth: 1,
      incrementDisplayedMonth: 2,
      decrementDisplayedMonth: 3,
    });
  }
}

/* src/components/WeekNum.svelte generated by Svelte v3.35.0 */

function add_css$1() {
  var style = element("style");
  style.id = "svelte-egt0yd-style";
  style.textContent =
    "td.svelte-egt0yd{border-right:1px solid var(--background-modifier-border)}.week-num.svelte-egt0yd{background-color:var(--color-background-weeknum);border-radius:4px;color:var(--color-text-weeknum);cursor:pointer;font-size:0.65em;height:100%;padding:4px;text-align:center;transition:background-color 0.1s ease-in, color 0.1s ease-in;vertical-align:baseline}.week-num.svelte-egt0yd:hover{background-color:var(--interactive-hover)}.week-num.active.svelte-egt0yd:hover{background-color:var(--interactive-accent-hover)}.active.svelte-egt0yd{color:var(--text-on-accent);background-color:var(--interactive-accent)}.dot-container.svelte-egt0yd{display:flex;flex-wrap:wrap;justify-content:center;line-height:6px;min-height:6px}";
  append(document.head, style);
}

function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}

// (35:8) {#each metadata.dots as dot}
function create_each_block$1(ctx) {
  let dot;
  let current;
  const dot_spread_levels = [/*dot*/ ctx[11]];
  let dot_props = {};

  for (let i = 0; i < dot_spread_levels.length; i += 1) {
    dot_props = assign(dot_props, dot_spread_levels[i]);
  }

  dot = new Dot({ props: dot_props });

  return {
    c() {
      create_component(dot.$$.fragment);
    },
    m(target, anchor) {
      mount_component(dot, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const dot_changes =
        dirty & /*metadata*/ 64
          ? get_spread_update(dot_spread_levels, [
              get_spread_object(/*dot*/ ctx[11]),
            ])
          : {};

      dot.$set(dot_changes);
    },
    i(local) {
      if (current) return;
      transition_in(dot.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dot.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dot, detaching);
    },
  };
}

// (24:2) <MetadataResolver metadata="{metadata}" let:metadata>
function create_default_slot(ctx) {
  let div1;
  let t0;
  let t1;
  let div0;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  let each_value = /*metadata*/ ctx[6].dots;
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(
      get_each_context$1(ctx, each_value, i)
    );
  }

  const out = (i) =>
    transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });

  return {
    c() {
      div1 = element("div");
      t0 = text(/*weekNum*/ ctx[0]);
      t1 = space();
      div0 = element("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(div0, "class", "dot-container svelte-egt0yd");
      attr(
        div1,
        "class",
        (div1_class_value =
          "" +
          (null_to_empty(`week-num ${/*metadata*/ ctx[6].classes.join(" ")}`) +
            " svelte-egt0yd"))
      );
      toggle_class(
        div1,
        "active",
        /*selectedId*/ ctx[5] === getDateUID_1(/*days*/ ctx[1][0], "week")
      );
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, t0);
      append(div1, t1);
      append(div1, div0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }

      current = true;

      if (!mounted) {
        dispose = [
          listen(div1, "click", function () {
            if (is_function(/*onClick*/ ctx[3] && /*click_handler*/ ctx[8]))
              /*onClick*/ (ctx[3] && /*click_handler*/ ctx[8]).apply(
                this,
                arguments
              );
          }),
          listen(div1, "contextmenu", function () {
            if (
              is_function(
                /*onContextMenu*/ ctx[4] && /*contextmenu_handler*/ ctx[9]
              )
            )
              /*onContextMenu*/ (
                ctx[4] && /*contextmenu_handler*/ ctx[9]
              ).apply(this, arguments);
          }),
          listen(div1, "pointerover", function () {
            if (
              is_function(/*onHover*/ ctx[2] && /*pointerover_handler*/ ctx[10])
            )
              /*onHover*/ (ctx[2] && /*pointerover_handler*/ ctx[10]).apply(
                this,
                arguments
              );
          }),
        ];

        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & /*weekNum*/ 1) set_data(t0, /*weekNum*/ ctx[0]);

      if (dirty & /*metadata*/ 64) {
        each_value = /*metadata*/ ctx[6].dots;
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }

      if (
        !current ||
        (dirty & /*metadata*/ 64 &&
          div1_class_value !==
            (div1_class_value =
              "" +
              (null_to_empty(
                `week-num ${/*metadata*/ ctx[6].classes.join(" ")}`
              ) +
                " svelte-egt0yd")))
      ) {
        attr(div1, "class", div1_class_value);
      }

      if (dirty & /*metadata, selectedId, getDateUID, days*/ 98) {
        toggle_class(
          div1,
          "active",
          /*selectedId*/ ctx[5] === getDateUID_1(/*days*/ ctx[1][0], "week")
        );
      }
    },
    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(div1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    },
  };
}

function create_fragment$1(ctx) {
  let td;
  let metadataresolver;
  let current;

  metadataresolver = new MetadataResolver({
    props: {
      metadata: /*metadata*/ ctx[6],
      $$slots: {
        default: [
          create_default_slot,
          ({ metadata }) => ({ 6: metadata }),
          ({ metadata }) => (metadata ? 64 : 0),
        ],
      },
      $$scope: { ctx },
    },
  });

  return {
    c() {
      td = element("td");
      create_component(metadataresolver.$$.fragment);
      attr(td, "class", "svelte-egt0yd");
    },
    m(target, anchor) {
      insert(target, td, anchor);
      mount_component(metadataresolver, td, null);
      current = true;
    },
    p(ctx, [dirty]) {
      const metadataresolver_changes = {};
      if (dirty & /*metadata*/ 64)
        metadataresolver_changes.metadata = /*metadata*/ ctx[6];

      if (
        dirty &
        /*$$scope, metadata, selectedId, days, onClick, startOfWeek, onContextMenu, onHover, weekNum*/ 16639
      ) {
        metadataresolver_changes.$$scope = { dirty, ctx };
      }

      metadataresolver.$set(metadataresolver_changes);
    },
    i(local) {
      if (current) return;
      transition_in(metadataresolver.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(metadataresolver.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(td);
      destroy_component(metadataresolver);
    },
  };
}

function instance$1($$self, $$props, $$invalidate) {
  let { weekNum } = $$props;
  let { days } = $$props;
  let { metadata } = $$props;
  let { onHover } = $$props;
  let { onClick } = $$props;
  let { onContextMenu } = $$props;
  let { selectedId = null } = $$props;
  let startOfWeek;
  const click_handler = (e) => onClick(startOfWeek, isMetaPressed(e));
  const contextmenu_handler = (e) => onContextMenu(days[0], e);
  const pointerover_handler = (e) =>
    onHover(startOfWeek, e.target, isMetaPressed(e));

  $$self.$$set = ($$props) => {
    if ("weekNum" in $$props) $$invalidate(0, (weekNum = $$props.weekNum));
    if ("days" in $$props) $$invalidate(1, (days = $$props.days));
    if ("metadata" in $$props) $$invalidate(6, (metadata = $$props.metadata));
    if ("onHover" in $$props) $$invalidate(2, (onHover = $$props.onHover));
    if ("onClick" in $$props) $$invalidate(3, (onClick = $$props.onClick));
    if ("onContextMenu" in $$props)
      $$invalidate(4, (onContextMenu = $$props.onContextMenu));
    if ("selectedId" in $$props)
      $$invalidate(5, (selectedId = $$props.selectedId));
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*days*/ 2) {
      $$invalidate(7, (startOfWeek = getStartOfWeek(days)));
    }
  };

  return [
    weekNum,
    days,
    onHover,
    onClick,
    onContextMenu,
    selectedId,
    metadata,
    startOfWeek,
    click_handler,
    contextmenu_handler,
    pointerover_handler,
  ];
}

class WeekNum extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-egt0yd-style")) add_css$1();

    init(this, options, instance$1, create_fragment$1, not_equal, {
      weekNum: 0,
      days: 1,
      metadata: 6,
      onHover: 2,
      onClick: 3,
      onContextMenu: 4,
      selectedId: 5,
    });
  }
}

async function metadataReducer(promisedMetadata) {
  const meta = {
    dots: [],
    classes: [],
    dataAttributes: {},
  };
  const metas = await Promise.all(promisedMetadata);
  return metas.reduce(
    (acc, meta) => ({
      classes: [...acc.classes, ...(meta.classes || [])],
      dataAttributes: Object.assign(acc.dataAttributes, meta.dataAttributes),
      dots: [...acc.dots, ...(meta.dots || [])],
    }),
    meta
  );
}
function getDailyMetadata(sources, date, ..._args) {
  return metadataReducer(
    sources.map((source) => source.getDailyMetadata(date))
  );
}
function getWeeklyMetadata(sources, date, ..._args) {
  return metadataReducer(
    sources.map((source) => source.getWeeklyMetadata(date))
  );
}

/* src/components/Calendar.svelte generated by Svelte v3.35.0 */

function add_css() {
  var style = element("style");
  style.id = "svelte-pcimu8-style";
  style.textContent =
    ".container.svelte-pcimu8{--color-background-heading:transparent;--color-background-day:transparent;--color-background-weeknum:transparent;--color-background-weekend:transparent;--color-dot:var(--text-muted);--color-arrow:var(--text-muted);--color-button:var(--text-muted);--color-text-title:var(--text-normal);--color-text-heading:var(--text-muted);--color-text-day:var(--text-normal);--color-text-today:var(--interactive-accent);--color-text-weeknum:var(--text-muted)}.container.svelte-pcimu8{padding:0 8px}.container.is-mobile.svelte-pcimu8{padding:0}th.svelte-pcimu8{text-align:center}.weekend.svelte-pcimu8{background-color:var(--color-background-weekend)}.calendar.svelte-pcimu8{border-collapse:collapse;width:100%}th.svelte-pcimu8{background-color:var(--color-background-heading);color:var(--color-text-heading);font-size:0.6em;letter-spacing:1px;padding:4px;text-transform:uppercase}";
  append(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  return child_ctx;
}

// (55:6) {#if showWeekNums}
function create_if_block_2(ctx) {
  let col;

  return {
    c() {
      col = element("col");
    },
    m(target, anchor) {
      insert(target, col, anchor);
    },
    d(detaching) {
      if (detaching) detach(col);
    },
  };
}

// (58:6) {#each month[1].days as date}
function create_each_block_3(ctx) {
  let col;

  return {
    c() {
      col = element("col");
      attr(col, "class", "svelte-pcimu8");
      toggle_class(col, "weekend", isWeekend(/*date*/ ctx[27]));
    },
    m(target, anchor) {
      insert(target, col, anchor);
    },
    p(ctx, dirty) {
      if (dirty & /*isWeekend, month*/ 16384) {
        toggle_class(col, "weekend", isWeekend(/*date*/ ctx[27]));
      }
    },
    d(detaching) {
      if (detaching) detach(col);
    },
  };
}

// (64:8) {#if showWeekNums}
function create_if_block_1(ctx) {
  let th;

  return {
    c() {
      th = element("th");
      th.textContent = "W";
      attr(th, "class", "svelte-pcimu8");
    },
    m(target, anchor) {
      insert(target, th, anchor);
    },
    d(detaching) {
      if (detaching) detach(th);
    },
  };
}

// (67:8) {#each daysOfWeek as dayOfWeek}
function create_each_block_2(ctx) {
  let th;
  let t_value = /*dayOfWeek*/ ctx[24] + "";
  let t;

  return {
    c() {
      th = element("th");
      t = text(t_value);
      attr(th, "class", "svelte-pcimu8");
    },
    m(target, anchor) {
      insert(target, th, anchor);
      append(th, t);
    },
    p(ctx, dirty) {
      if (
        dirty & /*daysOfWeek*/ 32768 &&
        t_value !== (t_value = /*dayOfWeek*/ ctx[24] + "")
      )
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) detach(th);
    },
  };
}

// (75:10) {#if showWeekNums}
function create_if_block(ctx) {
  let weeknum;
  let current;

  const weeknum_spread_levels = [
    /*week*/ ctx[18],
    {
      metadata: getWeeklyMetadata(
        /*sources*/ ctx[8],
        /*week*/ ctx[18].days[0],
        /*today*/ ctx[10]
      ),
    },
    { onClick: /*onClickWeek*/ ctx[7] },
    {
      onContextMenu: /*onContextMenuWeek*/ ctx[5],
    },
    { onHover: /*onHoverWeek*/ ctx[3] },
    { selectedId: /*selectedId*/ ctx[9] },
  ];

  let weeknum_props = {};

  for (let i = 0; i < weeknum_spread_levels.length; i += 1) {
    weeknum_props = assign(weeknum_props, weeknum_spread_levels[i]);
  }

  weeknum = new WeekNum({ props: weeknum_props });

  return {
    c() {
      create_component(weeknum.$$.fragment);
    },
    m(target, anchor) {
      mount_component(weeknum, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const weeknum_changes =
        dirty &
        /*month, getWeeklyMetadata, sources, today, onClickWeek, onContextMenuWeek, onHoverWeek, selectedId*/ 18344
          ? get_spread_update(weeknum_spread_levels, [
              dirty & /*month*/ 16384 && get_spread_object(/*week*/ ctx[18]),
              dirty & /*getWeeklyMetadata, sources, month, today*/ 17664 && {
                metadata: getWeeklyMetadata(
                  /*sources*/ ctx[8],
                  /*week*/ ctx[18].days[0],
                  /*today*/ ctx[10]
                ),
              },
              dirty & /*onClickWeek*/ 128 && {
                onClick: /*onClickWeek*/ ctx[7],
              },
              dirty & /*onContextMenuWeek*/ 32 && {
                onContextMenu: /*onContextMenuWeek*/ ctx[5],
              },
              dirty & /*onHoverWeek*/ 8 && { onHover: /*onHoverWeek*/ ctx[3] },
              dirty & /*selectedId*/ 512 && {
                selectedId: /*selectedId*/ ctx[9],
              },
            ])
          : {};

      weeknum.$set(weeknum_changes);
    },
    i(local) {
      if (current) return;
      transition_in(weeknum.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(weeknum.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(weeknum, detaching);
    },
  };
}

// (85:10) {#each week.days as day (day.format())}
function create_each_block_1(key_1, ctx) {
  let first;
  let day;
  let current;

  day = new Day({
    props: {
      date: /*day*/ ctx[21],
      today: /*today*/ ctx[10],
      displayedMonth: /*displayedMonth*/ ctx[0],
      onClick: /*onClickDay*/ ctx[6],
      onContextMenu: /*onContextMenuDay*/ ctx[4],
      onHover: /*onHoverDay*/ ctx[2],
      metadata: getDailyMetadata(
        /*sources*/ ctx[8],
        /*day*/ ctx[21],
        /*today*/ ctx[10]
      ),
      selectedId: /*selectedId*/ ctx[9],
    },
  });

  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(day.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(day, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const day_changes = {};
      if (dirty & /*month*/ 16384) day_changes.date = /*day*/ ctx[21];
      if (dirty & /*today*/ 1024) day_changes.today = /*today*/ ctx[10];
      if (dirty & /*displayedMonth*/ 1)
        day_changes.displayedMonth = /*displayedMonth*/ ctx[0];
      if (dirty & /*onClickDay*/ 64)
        day_changes.onClick = /*onClickDay*/ ctx[6];
      if (dirty & /*onContextMenuDay*/ 16)
        day_changes.onContextMenu = /*onContextMenuDay*/ ctx[4];
      if (dirty & /*onHoverDay*/ 4) day_changes.onHover = /*onHoverDay*/ ctx[2];
      if (dirty & /*sources, month, today*/ 17664)
        day_changes.metadata = getDailyMetadata(
          /*sources*/ ctx[8],
          /*day*/ ctx[21],
          /*today*/ ctx[10]
        );
      if (dirty & /*selectedId*/ 512)
        day_changes.selectedId = /*selectedId*/ ctx[9];
      day.$set(day_changes);
    },
    i(local) {
      if (current) return;
      transition_in(day.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(day.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(first);
      destroy_component(day, detaching);
    },
  };
}

// (73:6) {#each month as week (week.weekNum)}
function create_each_block(key_1, ctx) {
  let tr;
  let t0;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t1;
  let current;
  let if_block = /*showWeekNums*/ ctx[1] && create_if_block(ctx);
  let each_value_1 = /*week*/ ctx[18].days;
  const get_key = (ctx) => /*day*/ ctx[21].format();

  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(
      key,
      (each_blocks[i] = create_each_block_1(key, child_ctx))
    );
  }

  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      if (if_block) if_block.c();
      t0 = space();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      t1 = space();
      this.first = tr;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      if (if_block) if_block.m(tr, null);
      append(tr, t0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tr, null);
      }

      append(tr, t1);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;

      if (/*showWeekNums*/ ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty & /*showWeekNums*/ 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(tr, t0);
        }
      } else if (if_block) {
        group_outros();

        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });

        check_outros();
      }

      if (
        dirty &
        /*month, today, displayedMonth, onClickDay, onContextMenuDay, onHoverDay, getDailyMetadata, sources, selectedId*/ 18261
      ) {
        each_value_1 = /*week*/ ctx[18].days;
        group_outros();
        each_blocks = update_keyed_each(
          each_blocks,
          dirty,
          get_key,
          1,
          ctx,
          each_value_1,
          each_1_lookup,
          tr,
          outro_and_destroy_block,
          create_each_block_1,
          t1,
          get_each_context_1
        );
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);

      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },
    o(local) {
      transition_out(if_block);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(tr);
      if (if_block) if_block.d();

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    },
  };
}

function create_fragment(ctx) {
  let div;
  let nav;
  let t0;
  let table;
  let colgroup;
  let t1;
  let t2;
  let thead;
  let tr;
  let t3;
  let t4;
  let tbody;
  let each_blocks = [];
  let each2_lookup = new Map();
  let current;

  nav = new Nav({
    props: {
      today: /*today*/ ctx[10],
      displayedMonth: /*displayedMonth*/ ctx[0],
      incrementDisplayedMonth: /*incrementDisplayedMonth*/ ctx[11],
      decrementDisplayedMonth: /*decrementDisplayedMonth*/ ctx[12],
      resetDisplayedMonth: /*resetDisplayedMonth*/ ctx[13],
    },
  });

  let if_block0 = /*showWeekNums*/ ctx[1] && create_if_block_2();
  let each_value_3 = /*month*/ ctx[14][1].days;
  let each_blocks_2 = [];

  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_2[i] = create_each_block_3(
      get_each_context_3(ctx, each_value_3, i)
    );
  }

  let if_block1 = /*showWeekNums*/ ctx[1] && create_if_block_1();
  let each_value_2 = /*daysOfWeek*/ ctx[15];
  let each_blocks_1 = [];

  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_1[i] = create_each_block_2(
      get_each_context_2(ctx, each_value_2, i)
    );
  }

  let each_value = /*month*/ ctx[14];
  const get_key = (ctx) => /*week*/ ctx[18].weekNum;

  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each2_lookup.set(key, (each_blocks[i] = create_each_block(key, child_ctx)));
  }

  return {
    c() {
      div = element("div");
      create_component(nav.$$.fragment);
      t0 = space();
      table = element("table");
      colgroup = element("colgroup");
      if (if_block0) if_block0.c();
      t1 = space();

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }

      t2 = space();
      thead = element("thead");
      tr = element("tr");
      if (if_block1) if_block1.c();
      t3 = space();

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }

      t4 = space();
      tbody = element("tbody");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      attr(table, "class", "calendar svelte-pcimu8");
      attr(div, "id", "calendar-container");
      attr(div, "class", "container svelte-pcimu8");
      toggle_class(div, "is-mobile", /*isMobile*/ ctx[16]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(nav, div, null);
      append(div, t0);
      append(div, table);
      append(table, colgroup);
      if (if_block0) if_block0.m(colgroup, null);
      append(colgroup, t1);

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(colgroup, null);
      }

      append(table, t2);
      append(table, thead);
      append(thead, tr);
      if (if_block1) if_block1.m(tr, null);
      append(tr, t3);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(tr, null);
      }

      append(table, t4);
      append(table, tbody);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }

      current = true;
    },
    p(ctx, [dirty]) {
      const nav_changes = {};
      if (dirty & /*today*/ 1024) nav_changes.today = /*today*/ ctx[10];
      if (dirty & /*displayedMonth*/ 1)
        nav_changes.displayedMonth = /*displayedMonth*/ ctx[0];
      nav.$set(nav_changes);

      if (/*showWeekNums*/ ctx[1]) {
        if (if_block0);
        else {
          if_block0 = create_if_block_2();
          if_block0.c();
          if_block0.m(colgroup, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (dirty & /*isWeekend, month*/ 16384) {
        each_value_3 = /*month*/ ctx[14][1].days;
        let i;

        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx, each_value_3, i);

          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_3(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(colgroup, null);
          }
        }

        for (; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].d(1);
        }

        each_blocks_2.length = each_value_3.length;
      }

      if (/*showWeekNums*/ ctx[1]) {
        if (if_block1);
        else {
          if_block1 = create_if_block_1();
          if_block1.c();
          if_block1.m(tr, t3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty & /*daysOfWeek*/ 32768) {
        each_value_2 = /*daysOfWeek*/ ctx[15];
        let i;

        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);

          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_2(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(tr, null);
          }
        }

        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }

        each_blocks_1.length = each_value_2.length;
      }

      if (
        dirty &
        /*month, today, displayedMonth, onClickDay, onContextMenuDay, onHoverDay, getDailyMetadata, sources, selectedId, getWeeklyMetadata, onClickWeek, onContextMenuWeek, onHoverWeek, showWeekNums*/ 18431
      ) {
        each_value = /*month*/ ctx[14];
        group_outros();
        each_blocks = update_keyed_each(
          each_blocks,
          dirty,
          get_key,
          1,
          ctx,
          each_value,
          each2_lookup,
          tbody,
          outro_and_destroy_block,
          create_each_block,
          null,
          get_each_context
        );
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(nav.$$.fragment, local);

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },
    o(local) {
      transition_out(nav.$$.fragment, local);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(div);
      destroy_component(nav);
      if (if_block0) if_block0.d();
      destroy_each(each_blocks_2, detaching);
      if (if_block1) if_block1.d();
      destroy_each(each_blocks_1, detaching);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    },
  };
}

function instance($$self, $$props, $$invalidate) {
  let { localeData } = $$props;
  let { showWeekNums = false } = $$props;
  let { onHoverDay } = $$props;
  let { onHoverWeek } = $$props;
  let { onContextMenuDay } = $$props;
  let { onContextMenuWeek } = $$props;
  let { onClickDay } = $$props;
  let { onClickWeek } = $$props;
  let { sources = [] } = $$props;
  let { selectedId } = $$props;
  let { today = window.moment() } = $$props;
  let { displayedMonth = today } = $$props;
  let month;
  let daysOfWeek;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let isMobile = window.app.isMobile;

  function incrementDisplayedMonth() {
    $$invalidate(0, (displayedMonth = displayedMonth.clone().add(1, "month")));
  }

  function decrementDisplayedMonth() {
    $$invalidate(
      0,
      (displayedMonth = displayedMonth.clone().subtract(1, "month"))
    );
  }

  function resetDisplayedMonth() {
    $$invalidate(0, (displayedMonth = today.clone()));
  }

  $$self.$$set = ($$props) => {
    if ("localeData" in $$props)
      $$invalidate(17, (localeData = $$props.localeData));
    if ("showWeekNums" in $$props)
      $$invalidate(1, (showWeekNums = $$props.showWeekNums));
    if ("onHoverDay" in $$props)
      $$invalidate(2, (onHoverDay = $$props.onHoverDay));
    if ("onHoverWeek" in $$props)
      $$invalidate(3, (onHoverWeek = $$props.onHoverWeek));
    if ("onContextMenuDay" in $$props)
      $$invalidate(4, (onContextMenuDay = $$props.onContextMenuDay));
    if ("onContextMenuWeek" in $$props)
      $$invalidate(5, (onContextMenuWeek = $$props.onContextMenuWeek));
    if ("onClickDay" in $$props)
      $$invalidate(6, (onClickDay = $$props.onClickDay));
    if ("onClickWeek" in $$props)
      $$invalidate(7, (onClickWeek = $$props.onClickWeek));
    if ("sources" in $$props) $$invalidate(8, (sources = $$props.sources));
    if ("selectedId" in $$props)
      $$invalidate(9, (selectedId = $$props.selectedId));
    if ("today" in $$props) $$invalidate(10, (today = $$props.today));
    if ("displayedMonth" in $$props)
      $$invalidate(0, (displayedMonth = $$props.displayedMonth));
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*displayedMonth, localeData*/ 131073) {
      $$invalidate(14, (month = getMonth(displayedMonth, localeData)));
    }

    if ($$self.$$.dirty & /*today, localeData*/ 132096) {
      $$invalidate(15, (daysOfWeek = getDaysOfWeek(today, localeData)));
    }
  };

  return [
    displayedMonth,
    showWeekNums,
    onHoverDay,
    onHoverWeek,
    onContextMenuDay,
    onContextMenuWeek,
    onClickDay,
    onClickWeek,
    sources,
    selectedId,
    today,
    incrementDisplayedMonth,
    decrementDisplayedMonth,
    resetDisplayedMonth,
    month,
    daysOfWeek,
    isMobile,
    localeData,
  ];
}

class Calendar extends SvelteComponent {
  constructor(options) {
    super();
    if (!document.getElementById("svelte-pcimu8-style")) add_css();

    init(this, options, instance, create_fragment, not_equal, {
      localeData: 17,
      showWeekNums: 1,
      onHoverDay: 2,
      onHoverWeek: 3,
      onContextMenuDay: 4,
      onContextMenuWeek: 5,
      onClickDay: 6,
      onClickWeek: 7,
      sources: 8,
      selectedId: 9,
      today: 10,
      displayedMonth: 0,
      incrementDisplayedMonth: 11,
      decrementDisplayedMonth: 12,
      resetDisplayedMonth: 13,
    });
  }

  get incrementDisplayedMonth() {
    return this.$$.ctx[11];
  }

  get decrementDisplayedMonth() {
    return this.$$.ctx[12];
  }

  get resetDisplayedMonth() {
    return this.$$.ctx[13];
  }
}

/** Generic code for embedded Dataviews. */
class DataviewRefreshableRenderer extends obsidian.MarkdownRenderChild {
  constructor(container, index, app, settings) {
    super(container);
    this.container = container;
    this.index = index;
    this.app = app;
    this.settings = settings;
    this.maybeRefresh = () => {
      // If the index revision has changed recently, then queue a reload.
      // But only if we're mounted in the DOM and auto-refreshing is active.
      if (
        this.lastReload != this.index.revision &&
        this.container.isShown() &&
        this.settings.refreshEnabled
      ) {
        this.lastReload = this.index.revision;
        this.render();
      }
    };
    this.lastReload = 0;
  }
  onload() {
    this.render();
    this.lastReload = this.index.revision;
    // Refresh after index changes stop.
    this.registerEvent(
      this.app.workspace.on("dataview:refresh-views", this.maybeRefresh)
    );
    // ...or when the DOM is shown (sidebar expands, tab selected, nodes scrolled into view).
    this.register(this.container.onNodeInserted(this.maybeRefresh));
  }
}

class DataviewCalendarRenderer extends DataviewRefreshableRenderer {
  constructor(query, container, index, origin, settings, app) {
    super(container, index, app, settings);
    this.query = query;
    this.container = container;
    this.index = index;
    this.origin = origin;
    this.settings = settings;
    this.app = app;
  }
  async render() {
    var _a;
    this.container.innerHTML = "";
    let maybeResult = await asyncTryOrPropogate(() =>
      executeCalendar(this.query, this.index, this.origin, this.settings)
    );
    if (!maybeResult.successful) {
      renderErrorPre(this.container, "Dataview: " + maybeResult.error);
      return;
    } else if (
      maybeResult.value.data.length == 0 &&
      this.settings.warnOnEmptyResult
    ) {
      renderErrorPre(this.container, "Dataview: Query returned 0 results.");
      return;
    }
    let dateMap = new Map();
    for (let data of maybeResult.value.data) {
      const dot = {
        color: "default",
        className: "note",
        isFilled: true,
        link: data.link,
      };
      const d = data.date.toFormat("yyyyLLdd");
      if (!dateMap.has(d)) {
        dateMap.set(d, [dot]);
      } else {
        (_a = dateMap.get(d)) === null || _a === void 0 ? void 0 : _a.push(dot);
      }
    }
    const querySource = {
      getDailyMetadata: async (date) => {
        return {
          dots: dateMap.get(date.format("YYYYMMDD")) || [],
        };
      },
    };
    const sources = [querySource];
    const renderer = this;
    this.calendar = new Calendar({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      target: this.container,
      props: {
        onHoverDay(date, targetEl) {
          const vals = dateMap.get(date.format("YYYYMMDD"));
          if (!vals || vals.length == 0) {
            return;
          }
          if ((vals === null || vals === void 0 ? void 0 : vals.length) == 0) {
            return;
          }
          renderer.app.workspace.trigger(
            "link-hover",
            {},
            targetEl,
            vals[0].link.path,
            vals[0].link.path
          );
        },
        onClickDay: async (date) => {
          const vals = dateMap.get(date.format("YYYYMMDD"));
          if (!vals || vals.length == 0) {
            return;
          }
          if ((vals === null || vals === void 0 ? void 0 : vals.length) == 0) {
            return;
          }
          const file = renderer.app.metadataCache.getFirstLinkpathDest(
            vals[0].link.path,
            ""
          );
          if (file == null) {
            return;
          }
          const leaf = renderer.app.workspace.getUnpinnedLeaf();
          await leaf.openFile(file, { active: true });
        },
        showWeekNums: false,
        sources,
      },
    });
  }
  onClose() {
    if (this.calendar) {
      this.calendar.$destroy();
    }
    return Promise.resolve();
  }
}

/** Fancy wrappers for the JavaScript API, used both by external plugins AND by the dataview javascript view. */
/** Asynchronous API calls related to file / system IO. */
class DataviewInlineIOApi {
  constructor(api, currentFile) {
    this.api = api;
    this.currentFile = currentFile;
  }
  /** Load the contents of a CSV asynchronously, returning a data array of rows (or undefined if it does not exist). */
  async csv(path, originFile) {
    return this.api.csv(path, originFile || this.currentFile);
  }
  /** Asynchronously load the contents of any link or path in an Obsidian vault. */
  async load(path, originFile) {
    return this.api.load(path, originFile || this.currentFile);
  }
  /** Normalize a link or path relative to an optional origin file. Returns a textual fully-qualified-path. */
  normalize(path, originFile) {
    return this.api.normalize(path, originFile || this.currentFile);
  }
}
class DataviewInlineApi {
  constructor(api, component, container, currentFilePath) {
    var _a, _b;
    /** Value utilities which allow for type-checking and comparisons. */
    this.value = Values;
    /** Widget utility functions for creating built-in widgets. */
    this.widget = Widgets;
    /** Re-exporting of luxon for people who can't easily require it. Sorry! */
    this.luxon = Luxon;
    this.index = api.index;
    this.app = api.app;
    this.settings = api.settings;
    this.component = component;
    this.container = container;
    this.currentFilePath = currentFilePath;
    this.api = api;
    this.io = new DataviewInlineIOApi(this.api.io, this.currentFilePath);
    // Set up the evaluation context with variables from the current file.
    let fileMeta =
      (_b =
        (_a = this.index.pages.get(this.currentFilePath)) === null ||
        _a === void 0
          ? void 0
          : _a.serialize(this.index)) !== null && _b !== void 0
        ? _b
        : {};
    this.evaluationContext = new Context(
      defaultLinkHandler(this.index, this.currentFilePath),
      this.settings,
      {
        this: fileMeta,
      }
    );
    this.func = Functions.bindAll(DEFAULT_FUNCTIONS, this.evaluationContext);
  }
  /////////////////////////////
  // Index + Data Collection //
  /////////////////////////////
  /** Return an array of paths (as strings) corresponding to pages which match the query. */
  pagePaths(query) {
    return this.api.pagePaths(query, this.currentFilePath);
  }
  /** Map a page path to the actual data contained within that page. */
  page(path) {
    return this.api.page(path, this.currentFilePath);
  }
  /** Return an array of page objects corresponding to pages which match the query. */
  pages(query) {
    return this.api.pages(query, this.currentFilePath);
  }
  /** Return the information about the current page. */
  current() {
    return this.page(this.currentFilePath);
  }
  ///////////////////////////////
  // Dataview Query Evaluation //
  ///////////////////////////////
  /** Execute a Dataview query, returning the results in programmatic form. */
  async query(source, originFile, settings) {
    return this.api.query(
      source,
      originFile !== null && originFile !== void 0
        ? originFile
        : this.currentFilePath,
      settings
    );
  }
  /** Error-throwing version of {@link query}. */
  async tryQuery(source, originFile, settings) {
    return this.api.tryQuery(
      source,
      originFile !== null && originFile !== void 0
        ? originFile
        : this.currentFilePath,
      settings
    );
  }
  /** Execute a Dataview query, returning the results in Markdown. */
  async queryMarkdown(source, originFile, settings) {
    return this.api.queryMarkdown(
      source,
      originFile !== null && originFile !== void 0
        ? originFile
        : this.currentFilePath,
      settings
    );
  }
  /** Error-throwing version of {@link queryMarkdown}. */
  async tryQueryMarkdown(source, originFile, settings) {
    return this.api.tryQueryMarkdown(
      source,
      originFile !== null && originFile !== void 0
        ? originFile
        : this.currentFilePath,
      settings
    );
  }
  /**
   * Evaluate a dataview expression (like '2 + 2' or 'link("hello")'), returning the evaluated result.
   * This takes an optional second argument which provides definitions for variables, such as:
   *
   * ```
   * dv.evaluate("x + 6", { x: 2 }) = 8
   * dv.evaluate('link(target)', { target: "Okay" }) = [[Okay]]
   * ```
   *
   * Note that `this` is implicitly available and refers to the current file.
   *
   * This method returns a Result type instead of throwing an error; you can check the result of the
   * execution via `result.successful` and obtain `result.value` or `result.error` resultingly. If
   * you'd rather this method throw on an error, use `dv.tryEvaluate`.
   */
  evaluate(expression, context) {
    let field = EXPRESSION.field.parse(expression);
    if (!field.status)
      return Result.failure(`Failed to parse expression "${expression}"`);
    return this.evaluationContext.evaluate(field.value, context);
  }
  /** Error-throwing version of `dv.evaluate`. */
  tryEvaluate(expression, context) {
    return this.evaluate(expression, context).orElseThrow();
  }
  /** Execute a Dataview query and embed it into the current view. */
  async execute(source) {
    this.api.execute(
      source,
      this.container,
      this.component,
      this.currentFilePath
    );
  }
  /** Execute a DataviewJS query and embed it into the current view. */
  async executeJs(code) {
    this.api.executeJs(
      code,
      this.container,
      this.component,
      this.currentFilePath
    );
  }
  /////////////
  // Utility //
  /////////////
  /**
   * Convert an input element or array into a Dataview data-array. If the input is already a data array,
   * it is returned unchanged.
   */
  array(raw) {
    return this.api.array(raw);
  }
  /** Return true if theg given value is a javascript array OR a dataview data array. */
  isArray(raw) {
    return this.api.isArray(raw);
  }
  /** Return true if the given value is a dataview data array; this returns FALSE for plain JS arrays. */
  isDataArray(raw) {
    return DataArray.isDataArray(raw);
  }
  /** Create a dataview file link to the given path. */
  fileLink(path, embed = false, display) {
    return Link.file(path, embed, display);
  }
  /** Create a dataview section link to the given path. */
  sectionLink(path, section, embed = false, display) {
    return Link.header(path, section, embed, display);
  }
  /** Create a dataview block link to the given path. */
  blockLink(path, blockId, embed = false, display) {
    return Link.block(path, blockId, embed, display);
  }
  /** Attempt to extract a date from a string, link or date. */
  date(pathlike) {
    return this.api.date(pathlike);
  }
  /** Attempt to extract a duration from a string or duration. */
  duration(dur) {
    return this.api.duration(dur);
  }
  /** Parse a raw textual value into a complex Dataview type, if possible. */
  parse(value) {
    return this.api.parse(value);
  }
  /** Convert a basic JS type into a Dataview type by parsing dates, links, durations, and so on. */
  literal(value) {
    return this.api.literal(value);
  }
  /** Deep clone the given literal, returning a new literal which is independent of the original. */
  clone(value) {
    return Values.deepCopy(value);
  }
  /**
   * Compare two arbitrary JavaScript values using Dataview's default comparison rules. Returns a negative value if
   * a < b, 0 if a = b, and a positive value if a > b.
   */
  compare(a, b) {
    return Values.compareValue(a, b);
  }
  /** Return true if the two given JavaScript values are equal using Dataview's default comparison rules. */
  equal(a, b) {
    return this.compare(a, b) == 0;
  }
  /////////////////////////
  // Rendering Functions //
  /////////////////////////
  /** Render an HTML element, containing arbitrary text. */
  el(el, text, { container = this.container, ...options } = {}) {
    let wrapped = Values.wrapValue(text);
    if (wrapped === null || wrapped === undefined) {
      return container.createEl(el, Object.assign({ text }, options));
    }
    let _el = container.createEl(el, options);
    renderValue(
      wrapped.value,
      _el,
      this.currentFilePath,
      this.component,
      this.settings,
      true
    );
    return _el;
  }
  /** Render an HTML header; the level can be anything from 1 - 6. */
  header(level, text, options) {
    let header = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" }[
      level
    ];
    if (!header)
      throw Error(
        `Unrecognized level '${level}' (expected 1, 2, 3, 4, 5, or 6)`
      );
    return this.el(header, text, options);
  }
  /** Render an HTML paragraph, containing arbitrary text. */
  paragraph(text, options) {
    return this.el("p", text, options);
  }
  /** Render an inline span, containing arbitrary text. */
  span(text, options) {
    return this.el("span", text, options);
  }
  /**
   * Render HTML from the output of a template "view" saved as a file in the vault.
   * Takes a filename and arbitrary input data.
   */
  async view(viewName, input) {
    // Look for `${viewName}.js` first, then for `${viewName}/view.js`.
    let simpleViewFile = this.app.metadataCache.getFirstLinkpathDest(
      viewName + ".js",
      this.currentFilePath
    );
    if (simpleViewFile) {
      let contents = await this.app.vault.read(simpleViewFile);
      if (contents.contains("await"))
        contents = "(async () => { " + contents + " })()";
      let func = new Function("dv", "input", contents);
      try {
        // This may directly render, in which case it will likely return undefined or null.
        let result = await Promise.resolve(func(this, input));
        if (result)
          await renderValue(
            result,
            this.container,
            this.currentFilePath,
            this.component,
            this.settings,
            true
          );
      } catch (ex) {
        renderErrorPre(
          this.container,
          `Dataview: Failed to execute view '${simpleViewFile.path}'.\n\n${ex}`
        );
      }
      return;
    }
    // No `{viewName}.js`, so look for a folder instead.
    let viewPath = `${viewName}/view.js`;
    let viewFile = this.app.metadataCache.getFirstLinkpathDest(
      viewPath,
      this.currentFilePath
    );
    if (!viewFile) {
      renderErrorPre(
        this.container,
        `Dataview: custom view not found for '${viewPath}' or '${viewName}.js'.`
      );
      return;
    }
    let viewContents = await this.app.vault.read(viewFile);
    if (viewContents.contains("await"))
      viewContents = "(async () => { " + viewContents + " })()";
    let viewFunction = new Function("dv", "input", viewContents);
    try {
      let result = await Promise.resolve(viewFunction(this, input));
      if (result)
        await renderValue(
          result,
          this.container,
          this.currentFilePath,
          this.component,
          this.settings,
          true
        );
    } catch (ex) {
      renderErrorPre(
        this.container,
        `Dataview: Error while executing view '${viewFile.path}'.\n\n${ex}`
      );
    }
    // Check for optional CSS.
    let cssFile = this.app.metadataCache.getFirstLinkpathDest(
      `${viewName}/view.css`,
      this.currentFilePath
    );
    if (!cssFile) return;
    let cssContents = await this.app.vault.read(cssFile);
    this.container.createEl("style", {
      text: cssContents,
      attr: { scope: " " },
    });
  }
  /** Render a dataview list of the given values. */
  list(values) {
    return this.api.list(
      values,
      this.container,
      this.component,
      this.currentFilePath
    );
  }
  /** Render a dataview table with the given headers, and the 2D array of values. */
  table(headers, values) {
    return this.api.table(
      headers,
      values,
      this.container,
      this.component,
      this.currentFilePath
    );
  }
  /** Render a dataview task view with the given tasks. */
  taskList(tasks, groupByFile = true) {
    return this.api.taskList(
      tasks,
      groupByFile,
      this.container,
      this.component,
      this.currentFilePath
    );
  }
  ////////////////////////
  // Markdown Rendering //
  ////////////////////////
  /** Render a table directly to markdown, returning the markdown. */
  markdownTable(headers, values, settings) {
    return this.api.markdownTable(headers, values, settings);
  }
  /** Render a list directly to markdown, returning the markdown. */
  markdownList(values, settings) {
    return this.api.markdownList(values, settings);
  }
  /** Render at ask list directly to markdown, returning the markdown. */
  markdownTaskList(values, settings) {
    return this.api.markdownTaskList(values, settings);
  }
}
/**
 * Evaluate a script where 'this' for the script is set to the given context. Allows you to define global variables.
 */
function evalInContext(script, context) {
  return function () {
    return eval(script);
  }.call(context);
}
/**
 * Evaluate a script possibly asynchronously, if the script contains `async/await` blocks.
 */
async function asyncEvalInContext(script, context) {
  if (script.includes("await")) {
    return evalInContext("(async () => { " + script + " })()", context);
  } else {
    return Promise.resolve(evalInContext(script, context));
  }
}

class DataviewJSRenderer extends DataviewRefreshableRenderer {
  constructor(api, script, container, origin) {
    super(container, api.index, api.app, api.settings);
    this.api = api;
    this.script = script;
    this.container = container;
    this.origin = origin;
  }
  async render() {
    this.container.innerHTML = "";
    if (!this.settings.enableDataviewJs) {
      this.containerEl.innerHTML = "";
      renderErrorPre(
        this.container,
        "Dataview JS queries are disabled. You can enable them in the Dataview settings."
      );
      return;
    }
    // Assume that the code is javascript, and try to eval it.
    try {
      await asyncEvalInContext(
        DataviewJSRenderer.PREAMBLE + this.script,
        new DataviewInlineApi(this.api, this, this.container, this.origin)
      );
    } catch (e) {
      this.containerEl.innerHTML = "";
      renderErrorPre(this.container, "Evaluation Error: " + e.stack);
    }
  }
}
DataviewJSRenderer.PREAMBLE = "const dataview = this;const dv = this;";
/** Inline JS renderer accessible using '=$' by default. */
class DataviewInlineJSRenderer extends DataviewRefreshableRenderer {
  constructor(api, script, container, target, origin) {
    super(container, api.index, api.app, api.settings);
    this.api = api;
    this.script = script;
    this.container = container;
    this.target = target;
    this.origin = origin;
  }
  async render() {
    var _a;
    (_a = this.errorbox) === null || _a === void 0 ? void 0 : _a.remove();
    if (
      !this.settings.enableDataviewJs ||
      !this.settings.enableInlineDataviewJs
    ) {
      let temp = document.createElement("span");
      temp.innerText = "(disabled; enable in settings)";
      this.target.replaceWith(temp);
      this.target = temp;
      return;
    }
    // Assume that the code is javascript, and try to eval it.
    try {
      let temp = document.createElement("span");
      let result = await asyncEvalInContext(
        DataviewInlineJSRenderer.PREAMBLE + this.script,
        new DataviewInlineApi(this.api, this, temp, this.origin)
      );
      this.target.replaceWith(temp);
      this.target = temp;
      if (result === undefined) return;
      renderValue(result, temp, this.origin, this, this.settings, false);
    } catch (e) {
      this.errorbox = this.container.createEl("div");
      renderErrorPre(
        this.errorbox,
        "Dataview (for inline JS query '" + this.script + "'): " + e
      );
    }
  }
}
DataviewInlineJSRenderer.PREAMBLE = "const dataview = this;const dv=this;";

////////////
// Tables //
////////////
/** Render a table of literals to Markdown. */
function markdownTable(headers, values, settings) {
  if (values.length > 0 && headers.length != values[0].length)
    throw new Error(
      `The number of headers (${headers.length}) must match the number of columns (${values[0].length})`
    );
  settings =
    settings !== null && settings !== void 0 ? settings : DEFAULT_SETTINGS;
  const mvalues = [];
  const maxLengths = Array.from(headers, (v) => escapeTable(v).length);
  // Pre-construct the table in memory so we can size columns.
  for (let row = 0; row < values.length; row++) {
    const current = [];
    for (let col = 0; col < values[row].length; col++) {
      const text = tableLiteral(values[row][col], settings.allowHtml, settings);
      current.push(text);
      maxLengths[col] = Math.max(maxLengths[col], text.length);
    }
    mvalues.push(current);
  }
  // Then construct the actual table...
  // Append the header fields first.
  let table = `| ${headers
    .map((v, i) => padright(escapeTable(v), " ", maxLengths[i]))
    .join(" | ")} |\n`;
  // Then the separating column.
  table += `| ${maxLengths.map((i) => padright("", "-", i)).join(" | ")} |\n`;
  // Then the data colunns.
  for (let row = 0; row < values.length; row++) {
    table += `| ${mvalues[row]
      .map((v, i) => padright(v, " ", maxLengths[i]))
      .join(" | ")} |\n`;
  }
  return table;
}
/** Convert a value to a Markdown-friendly string. */
function tableLiteral(value, allowHtml = true, settings) {
  return escapeTable(rawTableLiteral(value, allowHtml, settings));
}
/** Convert a value to a Markdown-friendly string; does not do escaping. */
function rawTableLiteral(value, allowHtml = true, settings) {
  if (!allowHtml) return Values.toString(value, settings);
  if (Values.isArray(value)) {
    return `<ul>${value
      .map((v) => "<li>" + tableLiteral(v, allowHtml, settings) + "</li>")
      .join("")}</ul>`;
  } else if (Values.isObject(value)) {
    const inner = Object.entries(value)
      .map(([k, v]) => {
        return `<li><b>${tableLiteral(
          k,
          allowHtml,
          settings
        )}</b>: ${tableLiteral(v, allowHtml, settings)}</li>`;
      })
      .join("");
    return `<ul>${inner}</ul>`;
  } else {
    return Values.toString(value, settings);
  }
}
/** Don't need to import a library for this one... */
function padright(text, padding, length) {
  if (text.length >= length) return text;
  return text + padding.repeat(length - text.length);
}
/** Escape bars inside table content to prevent it from messing up table rows. */
function escapeTable(text) {
  return text.split(/(?!\\)\|/i).join("\\|");
}
///////////
// Lists //
///////////
/** Render a list of literal elements to a markdown list. */
function markdownList(values, settings) {
  return markdownListRec(values, settings, 0);
}
/** Internal recursive function which renders markdown lists. */
function markdownListRec(input, settings, depth = 0) {
  if (Values.isArray(input)) {
    let result = depth == 0 ? "" : "\n";
    for (let value of input) {
      result += "    ".repeat(depth) + "- ";
      result += markdownListRec(value, settings, depth);
      result += "\n";
    }
    return result;
  } else if (Values.isObject(input)) {
    let result = depth == 0 ? "" : "\n";
    for (let [key, value] of Object.entries(input)) {
      result += "    ".repeat(depth) + "- ";
      result += Values.toString(key) + ": ";
      result += markdownListRec(value, settings, depth);
      result += "\n";
    }
    return result;
  } else if (Values.isWidget(input) && Widgets.isListPair(input)) {
    return `${Values.toString(input.key)}: ${markdownListRec(
      input.value,
      settings,
      depth + 1
    )}`;
  }
  return Values.toString(input);
}
///////////
// Tasks //
///////////
/** Render the result of a task query to markdown. */
function markdownTaskList(tasks, settings, depth = 0) {
  var _a;
  if (Groupings.isGrouping(tasks)) {
    let result = "";
    for (let element of tasks) {
      result +=
        "#".repeat(depth + 1) + " " + Values.toString(element.key) + "\n\n";
      result += markdownTaskList(element.rows, settings, depth + 1);
    }
    return result;
  } else {
    let result = "";
    for (let element of tasks) {
      result += "    ".repeat(depth) + "- ";
      if (Groupings.isElementGroup(element));
      else {
        if (element.task) {
          result += `[${element.status}] ${((_a = element.visual) !== null &&
          _a !== void 0
            ? _a
            : element.text
          )
            .split("\n")
            .join(" ")}\n`;
        }
        result += markdownTaskList(element.children, settings, depth + 1);
      }
    }
    return result;
  }
}

/** The general, externally accessible plugin API (available at `app.plugins.plugins.dataview.api` or as global `DataviewAPI`). */
/** Asynchronous API calls related to file / system IO. */
class DataviewIOApi {
  constructor(api) {
    this.api = api;
  }
  /** Load the contents of a CSV asynchronously, returning a data array of rows (or undefined if it does not exist). */
  async csv(path, originFile) {
    if (!Values.isLink(path) && !Values.isString(path)) {
      throw Error(
        `dv.io.csv only handles string or link paths; was provided type '${typeof path}'.`
      );
    }
    let data = await this.api.index.csv.get(this.normalize(path, originFile));
    if (data.successful) return DataArray.from(data.value, this.api.settings);
    else
      throw Error(
        `Could not find CSV for path '${path}' (relative to origin '${
          originFile !== null && originFile !== void 0 ? originFile : "/"
        }')`
      );
  }
  /** Asynchronously load the contents of any link or path in an Obsidian vault. */
  async load(path, originFile) {
    if (!Values.isLink(path) && !Values.isString(path)) {
      throw Error(
        `dv.io.load only handles string or link paths; was provided type '${typeof path}'.`
      );
    }
    let existingFile = this.api.index.vault.getAbstractFileByPath(
      this.normalize(path, originFile)
    );
    if (!existingFile || !(existingFile instanceof obsidian.TFile))
      return undefined;
    return this.api.index.vault.cachedRead(existingFile);
  }
  /** Normalize a link or path relative to an optional origin file. Returns a textual fully-qualified-path. */
  normalize(path, originFile) {
    let realPath;
    if (Values.isLink(path)) realPath = path.path;
    else realPath = path;
    return this.api.index.prefix.resolveRelative(realPath, originFile);
  }
}
/** Global API for accessing the Dataview API, executing dataview queries, and  */
class DataviewApi {
  constructor(app, index, settings, verNum) {
    this.app = app;
    this.index = index;
    this.settings = settings;
    this.verNum = verNum;
    /** Value utility functions for comparisons and type-checking. */
    this.value = Values;
    /** Widget utility functions for creating built-in widgets. */
    this.widget = Widgets;
    /** Re-exporting of luxon for people who can't easily require it. Sorry! */
    this.luxon = Luxon;
    /** Utilities to check the current Dataview version and comapre it to SemVer version ranges. */
    this.version = (() => {
      const { verNum: version } = this;
      return {
        get current() {
          return version;
        },
        compare: (op, ver) => compare(version, ver, op),
        satisfies: (range) => satisfies(version, range),
      };
    })();
    this.evaluationContext = new Context(
      defaultLinkHandler(index, ""),
      settings
    );
    this.func = Functions.bindAll(DEFAULT_FUNCTIONS, this.evaluationContext);
    this.io = new DataviewIOApi(this);
  }
  /////////////////////////////
  // Index + Data Collection //
  /////////////////////////////
  /** Return an array of paths (as strings) corresponding to pages which match the query. */
  pagePaths(query, originFile) {
    let source;
    try {
      if (!query || query.trim() === "") source = Sources.folder("");
      else source = EXPRESSION.source.tryParse(query);
    } catch (ex) {
      throw new Error(`Failed to parse query in 'pagePaths': ${ex}`);
    }
    return matchingSourcePaths(source, this.index, originFile)
      .map((s) => DataArray.from(s, this.settings))
      .orElseThrow();
  }
  /** Map a page path to the actual data contained within that page. */
  page(path, originFile) {
    if (!(typeof path === "string") && !Values.isLink(path)) {
      throw Error(
        "dv.page only handles string and link paths; was provided type '" +
          typeof path +
          "'"
      );
    }
    let rawPath = path instanceof Link ? path.path : path;
    let normPath = this.app.metadataCache.getFirstLinkpathDest(
      rawPath,
      originFile !== null && originFile !== void 0 ? originFile : ""
    );
    if (!normPath) return undefined;
    let pageObject = this.index.pages.get(normPath.path);
    if (!pageObject) return undefined;
    return this._addDataArrays(pageObject.serialize(this.index));
  }
  /** Return an array of page objects corresponding to pages which match the source query. */
  pages(query, originFile) {
    return this.pagePaths(query, originFile).flatMap((p) => {
      let res = this.page(p, originFile);
      return res ? [res] : [];
    });
  }
  /** Remaps important metadata to add data arrays.  */
  _addDataArrays(pageObject) {
    // Remap the "file" metadata entries to be data arrays.
    for (let [key, value] of Object.entries(pageObject.file)) {
      if (Array.isArray(value))
        pageObject.file[key] = DataArray.wrap(value, this.settings);
    }
    return pageObject;
  }
  /////////////
  // Utility //
  /////////////
  /**
   * Convert an input element or array into a Dataview data-array. If the input is already a data array,
   * it is returned unchanged.
   */
  array(raw) {
    if (DataArray.isDataArray(raw)) return raw;
    if (Array.isArray(raw)) return DataArray.wrap(raw, this.settings);
    return DataArray.wrap([raw], this.settings);
  }
  /** Return true if the given value is a javascript array OR a dataview data array. */
  isArray(raw) {
    return DataArray.isDataArray(raw) || Array.isArray(raw);
  }
  /** Return true if the given value is a dataview data array; this returns FALSE for plain JS arrays. */
  isDataArray(raw) {
    return DataArray.isDataArray(raw);
  }
  /** Create a dataview file link to the given path. */
  fileLink(path, embed = false, display) {
    return Link.file(path, embed, display);
  }
  /** Create a dataview section link to the given path. */
  sectionLink(path, section, embed = false, display) {
    return Link.header(path, section, embed, display);
  }
  /** Create a dataview block link to the given path. */
  blockLink(path, blockId, embed = false, display) {
    return Link.block(path, blockId, embed, display);
  }
  /** Attempt to extract a date from a string, link or date. */
  date(pathlike) {
    return this.func.date(pathlike);
  }
  /** Attempt to extract a duration from a string or duration. */
  duration(str) {
    return this.func.dur(str);
  }
  /** Parse a raw textual value into a complex Dataview type, if possible. */
  parse(value) {
    let raw = EXPRESSION.inlineField.parse(value);
    if (raw.status) return raw.value;
    else return value;
  }
  /** Convert a basic JS type into a Dataview type by parsing dates, links, durations, and so on. */
  literal(value) {
    return parseFrontmatter(value);
  }
  /** Deep clone the given literal, returning a new literal which is independent of the original. */
  clone(value) {
    return Values.deepCopy(value);
  }
  /**
   * Compare two arbitrary JavaScript values using Dataview's default comparison rules. Returns a negative value if
   * a < b, 0 if a = b, and a positive value if a > b.
   */
  compare(a, b) {
    return Values.compareValue(
      a,
      b,
      this.evaluationContext.linkHandler.normalize
    );
  }
  /** Return true if the two given JavaScript values are equal using Dataview's default comparison rules. */
  equal(a, b) {
    return this.compare(a, b) == 0;
  }
  ///////////////////////////////
  // Dataview Query Evaluation //
  ///////////////////////////////
  /**
   * Execute an arbitrary Dataview query, returning a query result which:
   *
   * 1. Indicates the type of query,
   * 2. Includes the raw AST of the parsed query.
   * 3. Includes the output in the form relevant to that query type.
   *
   * List queries will return a list of objects ({ id, value }); table queries return a header array
   * and a 2D array of values; and task arrays return a Grouping<Task> type which allows for recursive
   * task nesting.
   */
  async query(source, originFile, settings) {
    const query =
      typeof source === "string" ? parseQuery(source) : Result.success(source);
    if (!query.successful) return query.cast();
    const header = query.value.header;
    switch (header.type) {
      case "calendar":
        const cres = await executeCalendar(
          query.value,
          this.index,
          originFile !== null && originFile !== void 0 ? originFile : "",
          this.settings
        );
        if (!cres.successful) return cres.cast();
        return Result.success({ type: "calendar", values: cres.value.data });
      case "task":
        const tasks = await executeTask(
          query.value,
          originFile !== null && originFile !== void 0 ? originFile : "",
          this.index,
          this.settings
        );
        if (!tasks.successful) return tasks.cast();
        return Result.success({ type: "task", values: tasks.value.tasks });
      case "list":
        if (
          (settings === null || settings === void 0
            ? void 0
            : settings.forceId) !== undefined
        )
          header.showId = settings.forceId;
        const lres = await executeList(
          query.value,
          this.index,
          originFile !== null && originFile !== void 0 ? originFile : "",
          this.settings
        );
        if (!lres.successful) return lres.cast();
        // TODO: WITHOUT ID probably shouldn't exist, or should be moved to the engine itself.
        // For now, until I fix it up in an upcoming refactor, we re-implement the behavior here.
        return Result.success({
          type: "list",
          values: lres.value.data,
          primaryMeaning: lres.value.primaryMeaning,
        });
      case "table":
        if (
          (settings === null || settings === void 0
            ? void 0
            : settings.forceId) !== undefined
        )
          header.showId = settings.forceId;
        const tres = await executeTable(
          query.value,
          this.index,
          originFile !== null && originFile !== void 0 ? originFile : "",
          this.settings
        );
        if (!tres.successful) return tres.cast();
        return Result.success({
          type: "table",
          values: tres.value.data,
          headers: tres.value.names,
          idMeaning: tres.value.idMeaning,
        });
    }
  }
  /** Error-throwing version of {@link query}. */
  async tryQuery(source, originFile, settings) {
    return (await this.query(source, originFile, settings)).orElseThrow();
  }
  /** Execute an arbitrary dataview query, returning the results in well-formatted markdown. */
  async queryMarkdown(source, originFile, settings) {
    const result = await this.query(source, originFile, settings);
    if (!result.successful) return result.cast();
    switch (result.value.type) {
      case "list":
        return Result.success(this.markdownList(result.value.values, settings));
      case "table":
        return Result.success(
          this.markdownTable(
            result.value.headers,
            result.value.values,
            settings
          )
        );
      case "task":
        return Result.success(
          this.markdownTaskList(result.value.values, settings)
        );
      case "calendar":
        return Result.failure("Cannot render calendar queries to markdown.");
    }
  }
  /** Error-throwing version of {@link queryMarkdown}. */
  async tryQueryMarkdown(source, originFile, settings) {
    return (
      await this.queryMarkdown(source, originFile, settings)
    ).orElseThrow();
  }
  /**
   * Evaluate a dataview expression (like '2 + 2' or 'link("hello")'), returning the evaluated result.
   * This takes an optional second argument which provides definitions for variables, such as:
   *
   * ```
   * dv.evaluate("x + 6", { x: 2 }) = 8
   * dv.evaluate('link(target)', { target: "Okay" }) = [[Okay]]
   * ```
   *
   * This method returns a Result type instead of throwing an error; you can check the result of the
   * execution via `result.successful` and obtain `result.value` or `result.error` resultingly. If
   * you'd rather this method throw on an error, use `dv.tryEvaluate`.
   */
  evaluate(expression, context) {
    let field = EXPRESSION.field.parse(expression);
    if (!field.status)
      return Result.failure(`Failed to parse expression "${expression}"`);
    return this.evaluationContext.evaluate(field.value, context);
  }
  /** Error-throwing version of `dv.evaluate`. */
  tryEvaluate(expression, context) {
    return this.evaluate(expression, context).orElseThrow();
  }
  ///////////////
  // Rendering //
  ///////////////
  /**
   * Execute the given query, rendering results into the given container using the components lifecycle.
   * Your component should be a *real* component which calls onload() on it's child components at some point,
   * or a MarkdownPostProcessorContext!
   *
   * Note that views made in this way are live updating and will automatically clean themselves up when
   * the component is unloaded or the container is removed.
   */
  async execute(source, container, component, filePath) {
    if (isDataviewDisabled(filePath)) {
      renderCodeBlock(container, source);
      return;
    }
    let maybeQuery = tryOrPropogate(() => parseQuery(source));
    // In case of parse error, just render the error.
    if (!maybeQuery.successful) {
      renderErrorPre(container, "Dataview: " + maybeQuery.error);
      return;
    }
    let query = maybeQuery.value;
    let init = {
      app: this.app,
      settings: this.settings,
      index: this.index,
      container,
    };
    switch (query.header.type) {
      case "task":
        component.addChild(createTaskView(init, query, filePath));
        break;
      case "list":
        component.addChild(createListView(init, query, filePath));
        break;
      case "table":
        component.addChild(createTableView(init, query, filePath));
        break;
      case "calendar":
        component.addChild(
          new DataviewCalendarRenderer(
            query,
            container,
            this.index,
            filePath,
            this.settings,
            this.app
          )
        );
        break;
    }
  }
  /**
   * Execute the given DataviewJS query, rendering results into the given container using the components lifecycle.
   * See {@link execute} for general rendering semantics.
   */
  async executeJs(code, container, component, filePath) {
    if (isDataviewDisabled(filePath)) {
      renderCodeBlock(container, code, "javascript");
      return;
    }
    component.addChild(new DataviewJSRenderer(this, code, container, filePath));
  }
  /** Render a dataview list of the given values. */
  async list(values, container, component, filePath) {
    if (!values) return;
    if (
      values !== undefined &&
      values !== null &&
      !Array.isArray(values) &&
      !DataArray.isDataArray(values)
    )
      values = Array.from(values);
    // Append a child div, since React will keep re-rendering otherwise.
    let subcontainer = container.createEl("div");
    component.addChild(
      createFixedListView(
        {
          app: this.app,
          settings: this.settings,
          index: this.index,
          container: subcontainer,
        },
        values,
        filePath
      )
    );
  }
  /** Render a dataview table with the given headers, and the 2D array of values. */
  async table(headers, values, container, component, filePath) {
    if (!headers) headers = [];
    if (!values) values = [];
    if (!Array.isArray(headers) && !DataArray.isDataArray(headers))
      headers = Array.from(headers);
    // Append a child div, since React will keep re-rendering otherwise.
    let subcontainer = container.createEl("div");
    component.addChild(
      createFixedTableView(
        {
          app: this.app,
          settings: this.settings,
          index: this.index,
          container: subcontainer,
        },
        headers,
        values,
        filePath
      )
    );
  }
  /** Render a dataview task view with the given tasks. */
  async taskList(
    tasks,
    groupByFile = true,
    container,
    component,
    filePath = ""
  ) {
    let groupedTasks =
      !Groupings.isGrouping(tasks) && groupByFile
        ? this.array(tasks).groupBy((t) => Link.file(t.path))
        : tasks;
    // Append a child div, since React will override several task lists otherwise.
    let taskContainer = container.createEl("div");
    component.addChild(
      createFixedTaskView(
        {
          app: this.app,
          settings: this.settings,
          index: this.index,
          container: taskContainer,
        },
        groupedTasks,
        filePath
      )
    );
  }
  /** Render an arbitrary value into a container. */
  async renderValue(value, container, component, filePath, inline = false) {
    return renderValue(
      value,
      container,
      filePath,
      component,
      this.settings,
      inline
    );
  }
  /////////////////
  // Data Export //
  /////////////////
  /** Render data to a markdown table. */
  markdownTable(headers, values, settings) {
    if (!headers) headers = [];
    if (!values) values = [];
    const combined = Object.assign({}, this.settings, settings);
    return markdownTable(headers, values, combined);
  }
  /** Render data to a markdown list. */
  markdownList(values, settings) {
    if (!values) values = [];
    const combined = Object.assign({}, this.settings, settings);
    return markdownList(values, combined);
  }
  /** Render tasks or list items to a markdown task list. */
  markdownTaskList(values, settings) {
    if (!values) values = [];
    const sparse = nestGroups(values);
    const combined = Object.assign({}, this.settings, settings);
    return markdownTaskList(sparse, combined);
  }
}
/** Determines if source-path has a `?no-dataview` annotation that disables dataview. */
function isDataviewDisabled(sourcePath) {
  let questionLocation = sourcePath.lastIndexOf("?");
  if (questionLocation == -1) return false;
  return sourcePath.substring(questionLocation).contains("no-dataview");
}

/** Refreshable renderer which renders inline instead of in a div. */
class DataviewInlineRenderer extends DataviewRefreshableRenderer {
  constructor(
    field,
    fieldText,
    container,
    target,
    index,
    origin,
    settings,
    app
  ) {
    super(container, index, app, settings);
    this.field = field;
    this.fieldText = fieldText;
    this.container = container;
    this.target = target;
    this.index = index;
    this.origin = origin;
    this.settings = settings;
    this.app = app;
  }
  async render() {
    var _a;
    (_a = this.errorbox) === null || _a === void 0 ? void 0 : _a.remove();
    let result = tryOrPropogate(() =>
      executeInline(this.field, this.origin, this.index, this.settings)
    );
    if (!result.successful) {
      this.errorbox = this.container.createEl("div");
      renderErrorPre(
        this.errorbox,
        "Dataview (for inline query '" + this.fieldText + "'): " + result.error
      );
    } else {
      let temp = document.createElement("span");
      temp.addClasses(["dataview", "dataview-inline-query"]);
      await renderValue(
        result.value,
        temp,
        this.origin,
        this,
        this.settings,
        false
      );
      this.target.replaceWith(temp);
    }
  }
}

/** Replaces raw textual inline fields in text containers with pretty HTML equivalents. */
async function replaceInlineFields(ctx, init) {
  let inlineFields = extractInlineFields(init.container.innerHTML);
  if (inlineFields.length == 0) return;
  let component = new obsidian.MarkdownRenderChild(init.container);
  ctx.addChild(component);
  // Iterate through the raw HTML and replace inline field matches with corresponding rendered values.
  let result = init.container.innerHTML;
  for (let x = inlineFields.length - 1; x >= 0; x--) {
    let field = inlineFields[x];
    let renderContainer = document.createElement("span");
    renderContainer.addClasses(["dataview", "inline-field"]);
    // Block inline fields render the key, parenthesis ones do not.
    if (field.wrapping == "[") {
      const key = renderContainer.createSpan({
        cls: ["dataview", "inline-field-key"],
        attr: {
          "data-dv-key": field.key,
          "data-dv-norm-key": canonicalizeVarName(field.key),
        },
      });
      // Explicitly set the inner HTML to respect any key formatting that we should carry over.
      key.innerHTML = field.key;
      renderContainer.createSpan({
        cls: ["dataview", "inline-field-value"],
        attr: { id: "dataview-inline-field-" + x },
      });
    } else {
      renderContainer.createSpan({
        cls: ["dataview", "inline-field-standalone-value"],
        attr: { id: "dataview-inline-field-" + x },
      });
    }
    result =
      result.slice(0, field.start) +
      renderContainer.outerHTML +
      result.slice(field.end);
  }
  // Use a <template> block to render this HTML properly to nodes.
  const template = document.createElement("template");
  template.innerHTML = result;
  // Replace the container children with the new rendered children.
  // TODO: Replace this with a dom-to-dom diff to reduce the actual amount of updates.
  init.container.replaceChildren(...template.content.childNodes);
  for (let index = 0; index < inlineFields.length; index++) {
    const box = init.container.querySelector("#dataview-inline-field-" + index);
    if (!box) continue;
    const context = Object.assign({}, init, {
      container: box,
      component: component,
    });
    S$1(
      v$1(
        DataviewContext.Provider,
        { value: context },
        v$1(Lit, {
          value: parseInlineValue(inlineFields[index].value),
          inline: true,
          sourcePath: ctx.sourcePath,
        })
      ),
      box
    );
  }
}

class DataviewPlugin extends obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.debouncedRefresh = () => null;
  }
  async onload() {
    var _a;
    // Settings initialization; write defaults first time around.
    this.settings = Object.assign(
      DEFAULT_SETTINGS,
      (_a = await this.loadData()) !== null && _a !== void 0 ? _a : {}
    );
    this.addSettingTab(new GeneralSettingsTab(this.app, this));
    this.index = this.addChild(
      FullIndex.create(this.app, this.manifest.version, () => {
        if (this.settings.refreshEnabled) this.debouncedRefresh();
      })
    );
    // Set up automatic (intelligent) view refreshing that debounces.
    this.updateRefreshSettings();
    // From this point onwards the dataview API is fully functional (even if the index needs to do some background indexing).
    this.api = new DataviewApi(
      this.app,
      this.index,
      this.settings,
      this.manifest.version
    );
    // Register API to global window object.
    (window["DataviewAPI"] = this.api) &&
      this.register(() => delete window["DataviewAPI"]);
    // Dataview query language code blocks.
    this.registerPriorityCodeblockPostProcessor(
      "dataview",
      -100,
      async (source, el, ctx) => this.dataview(source, el, ctx, ctx.sourcePath)
    );
    // DataviewJS codeblocks.
    this.registerPriorityCodeblockPostProcessor(
      "dataviewjs",
      -100,
      async (source, el, ctx) =>
        this.dataviewjs(source, el, ctx, ctx.sourcePath)
    );
    // Dataview inline queries.
    this.registerPriorityMarkdownPostProcessor(-100, async (el, ctx) => {
      this.dataviewInline(el, ctx, ctx.sourcePath);
    });
    // Dataview inline-inline query fancy rendering. Runs at a low priority; should apply to Dataview views.
    this.registerPriorityMarkdownPostProcessor(100, async (el, ctx) => {
      // Allow for lame people to disable the pretty rendering.
      if (
        !this.settings.prettyRenderInlineFields ||
        isDataviewDisabled(ctx.sourcePath)
      )
        return;
      // Handle p, header elements explicitly (opt-in rather than opt-out for now).
      for (let p of el.findAllSelf("p,h1,h2,h3,h4,h5,h6,li,span,th,td")) {
        const init = {
          app: this.app,
          index: this.index,
          settings: this.settings,
          container: p,
        };
        await replaceInlineFields(ctx, init);
      }
    });
    // Dataview "force refresh" operation.
    this.addCommand({
      id: "dataview-force-refresh-views",
      name: "Force Refresh All Views and Blocks",
      callback: () => {
        this.index.revision += 1;
        this.app.workspace.trigger("dataview:refresh-views");
      },
    });
    this.addCommand({
      id: "dataview-drop-cache",
      name: "Drop All Cached File Metadata",
      callback: () => {
        this.index.reinitialize();
      },
    });
    // Run index initialization, which actually traverses the vault to index files.
    if (!this.app.workspace.layoutReady) {
      this.app.workspace.onLayoutReady(async () => this.index.initialize());
    } else {
      this.index.initialize();
    }
    // Not required anymore, though holding onto it for backwards-compatibility.
    this.app.metadataCache.trigger("dataview:api-ready", this.api);
    console.log(
      `Dataview: version ${this.manifest.version} (requires obsidian ${this.manifest.minAppVersion})`
    );
  }
  updateRefreshSettings() {
    this.debouncedRefresh = obsidian.debounce(
      () => this.app.workspace.trigger("dataview:refresh-views"),
      this.settings.refreshInterval,
      true
    );
  }
  onunload() {}
  /** Register a markdown post processor with the given priority. */
  registerPriorityMarkdownPostProcessor(priority, processor) {
    let registered = this.registerMarkdownPostProcessor(processor);
    registered.sortOrder = priority;
  }
  /** Register a markdown codeblock post processor with the given priority. */
  registerPriorityCodeblockPostProcessor(language, priority, processor) {
    let registered = this.registerMarkdownCodeBlockProcessor(
      language,
      processor
    );
    registered.sortOrder = priority;
  }
  /**
   * Based on the source, generate a dataview view. This works by doing an initial parsing pass, and then adding
   * a long-lived view object to the given component for life-cycle management.
   */
  async dataview(source, el, component, sourcePath) {
    this.api.execute(source, el, component, sourcePath);
  }
  /** Generate a DataviewJS view running the given source in the given element. */
  async dataviewjs(source, el, component, sourcePath) {
    this.api.executeJs(source, el, component, sourcePath);
  }
  /** Render all dataview inline expressions in the given element. */
  async dataviewInline(el, component, sourcePath) {
    if (isDataviewDisabled(sourcePath)) return;
    // Search for <code> blocks inside this element; for each one, look for things of the form `= ...`.
    let codeblocks = el.querySelectorAll("code");
    for (let index = 0; index < codeblocks.length; index++) {
      let codeblock = codeblocks.item(index);
      // Skip code inside of pre elements if not explicitly enabled.
      if (
        codeblock.parentElement &&
        codeblock.parentElement.nodeName.toLowerCase() == "pre" &&
        !this.settings.inlineQueriesInCodeblocks
      )
        continue;
      let text = codeblock.innerText.trim();
      if (
        this.settings.inlineJsQueryPrefix.length > 0 &&
        text.startsWith(this.settings.inlineJsQueryPrefix)
      ) {
        let code = text
          .substring(this.settings.inlineJsQueryPrefix.length)
          .trim();
        if (code.length == 0) continue;
        component.addChild(
          new DataviewInlineJSRenderer(
            this.api,
            code,
            el,
            codeblock,
            sourcePath
          )
        );
      } else if (
        this.settings.inlineQueryPrefix.length > 0 &&
        text.startsWith(this.settings.inlineQueryPrefix)
      ) {
        let potentialField = text
          .substring(this.settings.inlineQueryPrefix.length)
          .trim();
        if (potentialField.length == 0) continue;
        let field = tryOrPropogate(() => parseField(potentialField));
        if (!field.successful) {
          let errorBlock = el.createEl("div");
          renderErrorPre(
            errorBlock,
            `Dataview (inline field '${potentialField}'): ${field.error}`
          );
        } else {
          let fieldValue = field.value;
          component.addChild(
            new DataviewInlineRenderer(
              fieldValue,
              text,
              el,
              codeblock,
              this.index,
              sourcePath,
              this.settings,
              this.app
            )
          );
        }
      }
    }
  }
  /** Update plugin settings. */
  async updateSettings(settings) {
    Object.assign(this.settings, settings);
    this.updateRefreshSettings();
    await this.saveData(this.settings);
  }
  /** @deprecated Call the given callback when the dataview API has initialized. */
  withApi(callback) {
    callback(this.api);
  }
  /**
   * Create an API element localized to the given path, with lifecycle management managed by the given component.
   * The API will output results to the given HTML element.
   */
  localApi(path, component, el) {
    return new DataviewInlineApi(this.api, component, el, path);
  }
}
/** All of the dataview settings in a single, nice tab. */
class GeneralSettingsTab extends obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "General Settings" });
    new obsidian.Setting(this.containerEl)
      .setName("Enable JavaScript Queries")
      .setDesc("Enable or disable executing DataviewJS queries.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableDataviewJs)
          .onChange(
            async (value) =>
              await this.plugin.updateSettings({ enableDataviewJs: value })
          )
      );
    new obsidian.Setting(this.containerEl)
      .setName("Enable Inline JavaScript Queries")
      .setDesc(
        "Enable or disable executing inline DataviewJS queries. Requires that DataviewJS queries are enabled."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableInlineDataviewJs)
          .onChange(
            async (value) =>
              await this.plugin.updateSettings({
                enableInlineDataviewJs: value,
              })
          )
      );
    new obsidian.Setting(this.containerEl)
      .setName("Enable Inline Field Highlighting")
      .setDesc(
        "Enables or disables visual highlighting / pretty rendering for inline fields."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.prettyRenderInlineFields)
          .onChange(
            async (value) =>
              await this.plugin.updateSettings({
                prettyRenderInlineFields: value,
              })
          )
      );
    this.containerEl.createEl("h2", { text: "Codeblock Settings" });
    new obsidian.Setting(this.containerEl)
      .setName("Inline Query Prefix")
      .setDesc(
        "The prefix to inline queries (to mark them as Dataview queries). Defaults to '='."
      )
      .addText((text) =>
        text
          .setPlaceholder("=")
          .setValue(this.plugin.settings.inlineQueryPrefix)
          .onChange(async (value) => {
            if (value.length == 0) return;
            await this.plugin.updateSettings({ inlineQueryPrefix: value });
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("JavaScript Inline Query Prefix")
      .setDesc(
        "The prefix to JavaScript inline queries (to mark them as DataviewJS queries). Defaults to '$='."
      )
      .addText((text) =>
        text
          .setPlaceholder("$=")
          .setValue(this.plugin.settings.inlineJsQueryPrefix)
          .onChange(async (value) => {
            if (value.length == 0) return;
            await this.plugin.updateSettings({ inlineJsQueryPrefix: value });
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Codeblock Inline Queries")
      .setDesc(
        "If enabled, inline queries will also be evaluated inside full codeblocks."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.inlineQueriesInCodeblocks)
          .onChange(
            async (value) =>
              await this.plugin.updateSettings({
                inlineQueriesInCodeblocks: value,
              })
          )
      );
    this.containerEl.createEl("h2", { text: "View Settings" });
    this.containerEl.createEl("h3", { text: "General" });
    new obsidian.Setting(this.containerEl)
      .setName("Warn on Empty Result")
      .setDesc(
        "If set, queries which return 0 results will render a warning message."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.warnOnEmptyResult)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ warnOnEmptyResult: value });
            this.plugin.index.touch();
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Render Null As")
      .setDesc(
        "What null/non-existent should show up as in tables, by default. This supports Markdown notation."
      )
      .addText((text) =>
        text
          .setPlaceholder("-")
          .setValue(this.plugin.settings.renderNullAs)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ renderNullAs: value });
            this.plugin.index.touch();
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Automatic View Refreshing")
      .setDesc(
        "If enabled, views will automatically refresh when files in your vault change; this can negatively affect" +
          " some functionality like embeds in views, so turn it off if such functionality is not working."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.refreshEnabled)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ refreshEnabled: value });
            this.plugin.index.touch();
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Refresh Interval")
      .setDesc(
        "How long to wait (in milliseconds) for files to stop changing before updating views."
      )
      .addText((text) =>
        text
          .setPlaceholder("500")
          .setValue("" + this.plugin.settings.refreshInterval)
          .onChange(async (value) => {
            let parsed = parseInt(value);
            if (isNaN(parsed)) return;
            parsed = parsed < 100 ? 100 : parsed;
            await this.plugin.updateSettings({ refreshInterval: parsed });
          })
      );
    let dformat = new obsidian.Setting(this.containerEl)
      .setName("Date Format")
      .setDesc(
        "The default date format (see Luxon date format options)." +
          " Currently: " +
          DateTime_1.now().toFormat(this.plugin.settings.defaultDateFormat, {
            locale: currentLocale(),
          })
      )
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_QUERY_SETTINGS.defaultDateFormat)
          .setValue(this.plugin.settings.defaultDateFormat)
          .onChange(async (value) => {
            dformat.setDesc(
              "The default date format (see Luxon date format options)." +
                " Currently: " +
                DateTime_1.now().toFormat(value, { locale: currentLocale() })
            );
            await this.plugin.updateSettings({ defaultDateFormat: value });
            this.plugin.index.touch();
          })
      );
    let dtformat = new obsidian.Setting(this.containerEl)
      .setName("Date + Time Format")
      .setDesc(
        "The default date and time format (see Luxon date format options)." +
          " Currently: " +
          DateTime_1.now().toFormat(
            this.plugin.settings.defaultDateTimeFormat,
            { locale: currentLocale() }
          )
      )
      .addText((text) =>
        text
          .setPlaceholder(DEFAULT_QUERY_SETTINGS.defaultDateTimeFormat)
          .setValue(this.plugin.settings.defaultDateTimeFormat)
          .onChange(async (value) => {
            dtformat.setDesc(
              "The default date and time format (see Luxon date format options)." +
                " Currently: " +
                DateTime_1.now().toFormat(value, { locale: currentLocale() })
            );
            await this.plugin.updateSettings({ defaultDateTimeFormat: value });
            this.plugin.index.touch();
          })
      );
    this.containerEl.createEl("h3", { text: "Table Settings" });
    new obsidian.Setting(this.containerEl)
      .setName("Primary Column Name")
      .setDesc(
        "The name of the default ID column in tables; this is the auto-generated first column that links to the source file."
      )
      .addText((text) =>
        text
          .setPlaceholder("File")
          .setValue(this.plugin.settings.tableIdColumnName)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ tableIdColumnName: value });
            this.plugin.index.touch();
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Grouped Column Name")
      .setDesc(
        "The name of the default ID column in tables, when the table is on grouped data; this is the auto-generated first column" +
          "that links to the source file/group."
      )
      .addText((text) =>
        text
          .setPlaceholder("Group")
          .setValue(this.plugin.settings.tableGroupColumnName)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ tableGroupColumnName: value });
            this.plugin.index.touch();
          })
      );
    this.containerEl.createEl("h3", { text: "Task Settings" });
    new obsidian.Setting(this.containerEl)
      .setName("Automatic Task Completion Tracking")
      .setDesc(
        "If enabled, Dataview will automatically append tasks with their completion date when they are checked in Dataview views."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.taskCompletionTracking)
          .onChange(async (value) => {
            await this.plugin.updateSettings({ taskCompletionTracking: value });
          })
      );
    new obsidian.Setting(this.containerEl)
      .setName("Automatic Task Completion Field")
      .setDesc(
        "Text used as inline field key to track task completion date when toggling a task's checkbox in a dataview view."
      )
      .addText((text) =>
        text
          .setValue(this.plugin.settings.taskCompletionText)
          .onChange(async (value) => {
            await this.plugin.updateSettings({
              taskCompletionText: value.trim(),
            });
          })
      );
  }
}

module.exports = DataviewPlugin;