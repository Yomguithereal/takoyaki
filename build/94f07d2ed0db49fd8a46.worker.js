/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/workers/clustering.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Hash.js":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__("./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__("./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__("./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__("./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__("./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__("./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__("./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__("./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__("./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__("./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__("./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__("./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__("./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__("./node_modules/lodash/_Set.js"),
    noop = __webpack_require__("./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__("./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__("./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__("./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__("./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__("./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/mnemonist/multi-map.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Mnemonist MultiMap
 * ===================
 *
 * Implementation of a MultiMap with custom container.
 */
var Iterator = __webpack_require__("./node_modules/obliterator/iterator.js"),
    iterateOver = __webpack_require__("./node_modules/mnemonist/utils/iterate.js");

/**
 * MultiMap.
 *
 * @constructor
 */
function MultiMap(Container) {

  this.Container = Container || Array;
  this.items = new Map();
  this.clear();

  Object.defineProperty(this.items, 'constructor', {
    value: MultiMap,
    enumerable: false
  });
}

/**
 * Method used to clear the structure.
 *
 * @return {undefined}
 */
MultiMap.prototype.clear = function() {

  // Properties
  this.size = 0;
  this.dimension = 0;
  this.items.clear();
};

/**
 * Method used to set a value.
 *
 * @param  {any}      key   - Key.
 * @param  {any}      value - Value to add.
 * @return {MultiMap}
 */
MultiMap.prototype.set = function(key, value) {
  var container = this.items.get(key),
      sizeIncrease = 0;

  if (!container) {
    this.dimension++;
    container = new this.Container();
    this.items.set(key, container);
  }

  if (this.Container === Set) {
    sizeIncrease = +!container.has(value);
    container.add(value);
  }
  else {
    sizeIncrease = 1;
    container.push(value);
  }

  this.size += sizeIncrease;

  return this;
};

/**
 * Method used to delete the given key.
 *
 * @param  {any}     key - Key to delete.
 * @return {boolean}
 */
MultiMap.prototype.delete = function(key) {
  var container = this.items.get(key);

  if (container) {
    this.size -= (this.Container === Set ? container.size : container.length);
    this.dimension--;
  }

  this.items.delete(key);

  return !!container;
};

/**
 * Method used to return whether the given keys exists in the map.
 *
 * @param  {any}     key - Key to check.
 * @return {boolean}
 */
MultiMap.prototype.has = function(key) {
  return this.items.has(key);
};

/**
 * Method used to return the container stored at the given key or `undefined`.
 *
 * @param  {any}     key - Key to get.
 * @return {boolean}
 */
MultiMap.prototype.get = function(key) {
  return this.items.get(key);
};

/**
 * Method used to iterate over each of the key/value pairs.
 *
 * @param  {function}  callback - Function to call for each item.
 * @param  {object}    scope    - Optional scope.
 * @return {undefined}
 */
MultiMap.prototype.forEach = function(callback, scope) {
  scope = arguments.length > 1 ? scope : this;

  // Inner iteration function is created here to avoid creating it in the loop
  var key;
  function inner(value) {
    callback.call(scope, value, key);
  }

  this.items.forEach(function(container, k) {
    key = k;
    container.forEach(inner);
  });
};

/**
 * Method returning an iterator over the map's keys.
 *
 * @return {Iterator}
 */
MultiMap.prototype.keys = function() {
  return this.items.keys();
};

/**
 * Method returning an iterator over the map's keys.
 *
 * @return {Iterator}
 */
MultiMap.prototype.values = function() {
  var iterator = this.items.values(),
      inContainer = false,
      countainer,
      step,
      i,
      l;

  if (this.Container === Set)
    return new Iterator(function next() {
      if (!inContainer) {
        step = iterator.next();

        if (step.done)
          return {done: true};

        inContainer = true;
        countainer = step.value.values();
      }

      step = countainer.next();

      if (step.done) {
        inContainer = false;
        return next();
      }

      return {
        done: false,
        value: step.value
      };
    });

  return new Iterator(function next() {
    if (!inContainer) {
      step = iterator.next();

      if (step.done)
        return {done: true};

      inContainer = true;
      countainer = step.value;
      i = 0;
      l = countainer.length;
    }

    if (i >= l) {
      inContainer = false;
      return next();
    }

    return {
      done: false,
      value: countainer[i++]
    };
  });
};

/**
 * Method returning an iterator over the map's entries.
 *
 * @return {Iterator}
 */
MultiMap.prototype.entries = function() {
  var iterator = this.items.entries(),
      inContainer = false,
      countainer,
      step,
      key,
      i,
      l;

  if (this.Container === Set)
    return new Iterator(function next() {
      if (!inContainer) {
        step = iterator.next();

        if (step.done)
          return {done: true};

        inContainer = true;
        key = step.value[0];
        countainer = step.value[1].values();
      }

      step = countainer.next();

      if (step.done) {
        inContainer = false;
        return next();
      }

      return {
        done: false,
        value: [key, step.value]
      };
    });

  return new Iterator(function next() {
    if (!inContainer) {
      step = iterator.next();

      if (step.done)
        return {done: true};

      inContainer = true;
      key = step.value[0];
      countainer = step.value[1];
      i = 0;
      l = countainer.length;
    }

    if (i >= l) {
      inContainer = false;
      return next();
    }

    return {
      done: false,
      value: [key, countainer[i++]]
    };
  });
};

/**
 * Method returning an iterator over the map's containers.
 *
 * @return {Iterator}
 */
MultiMap.prototype.containers = function() {
  return this.items.values();
};

/**
 * Method returning an iterator over the map's associations.
 *
 * @return {Iterator}
 */
MultiMap.prototype.associations = function() {
  return this.items.entries();
};

/**
 * Attaching the #.entries method to Symbol.iterator if possible.
 */
if (typeof Symbol !== 'undefined')
  MultiMap.prototype[Symbol.iterator] = MultiMap.prototype.entries;

/**
 * Convenience known methods.
 */
MultiMap.prototype.inspect = function() {
  return this.items;
};
MultiMap.prototype.toJSON = function() {
  return this.items;
};

/**
 * Static @.from function taking an abitrary iterable & converting it into
 * a structure.
 *
 * @param  {Iterable} iterable  - Target iterable.
 * @param  {Class}    Container - Container.
 * @return {MultiMap}
 */
MultiMap.from = function(iterable, Container) {
  var map = new MultiMap(Container);

  iterateOver(iterable, function(value, key) {
    map.set(key, value);
  });

  return map;
};

/**
 * Exporting.
 */
module.exports = MultiMap;


/***/ }),

/***/ "./node_modules/mnemonist/utils/iterate.js":
/***/ (function(module, exports) {

/**
 * Mnemonist Iterate Function
 * ===========================
 *
 * Harmonized iteration over mixed targets.
 */

/**
 * Function used to iterate in a similar way over JavaScript iterables,
 * plain objects & arrays.
 *
 * @param  {any}      target - Iteration target.
 * @param  {function} callback - Iteration callback.
 */
function iterate(target, callback) {
  var iterator, k, i, l, s;

  // The target is an array
  if (Array.isArray(target) || typeof target === 'string') {
    for (i = 0, l = target.length; i < l; i++)
      callback(target[i], i);
    return;
  }

  // The target has a #.forEach method
  if (typeof target.forEach === 'function') {
    target.forEach(callback);
    return;
  }

  // The target is iterable
  if (typeof Symbol !== 'undefined' && Symbol.iterator in target)
    target = target[Symbol.iterator]();

  // The target is an iterator
  if (typeof target.next === 'function') {
    iterator = target;
    i = 0;

    while ((s = iterator.next(), !s.done)) {
      callback(s.value, i);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in target) {
    if (target.hasOwnProperty(k)) {
      callback(target[k], k);
    }
  }

  return;
}

/**
 * Function used to attempt to guess the length of the structure over which we
 * are going to iterate.
 *
 * @param  {any} target - Iteration target.
 * @return {number|undefined}
 */
iterate.guessLength = function(target) {
  if (typeof target.length === 'number')
    return target.length;

  if (typeof target.size === 'number')
    return target.size;

  return;
};

/**
 * Exporting.
 */
module.exports = iterate;


/***/ }),

/***/ "./node_modules/obliterator/iterator.js":
/***/ (function(module, exports) {

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator(next) {

  // Hiding the given function
  Object.defineProperty(this, '_next', {
    writable: false,
    enumerable: false,
    value: next
  });

  // Is the iterator complete?
  this.done = false;
}

/**
 * Next function.
 *
 * @return {object}
 */
Iterator.prototype.next = function() {
  if (this.done)
    return {done: true};

  var step = this._next();

  if (step.done)
    this.done = true;

  return step;
};

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator.prototype[Symbol.iterator] = function() {
    return this;
  };

/**
 * Returning an iterator of the given value.
 *
 * @param  {any} value - Value.
 * @return {Iterator}
 */
Iterator.of = function(value) {
  var consumed = false;

  return new Iterator(function() {
    if (consumed)
      return {done: true};

    consumed = true;
    return {value: value};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator.empty = function() {
  var iterator = new Iterator(null);
  iterator.done = true;

  return iterator;
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator.is = function(value) {
  if (value instanceof Iterator)
    return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
module.exports = Iterator;


/***/ }),

/***/ "./node_modules/pandemonium/random.js":
/***/ (function(module, exports) {

/**
 * Pandemonium Random
 * ===================
 *
 * Random function.
 */

/**
 * Creating a function returning a random integer such as a <= N <= b.
 *
 * @param  {function} rng - RNG function returning uniform random.
 * @return {function}     - The created function.
 */
function createRandom(rng) {

  /**
   * Random function.
   *
   * @param  {number} a - From.
   * @param  {number} b - To.
   * @return {number}
   */
  return function(a, b) {
    return a + Math.floor(rng() * (b - a + 1));
  };
}

/**
 * Default random using `Math.random`.
 */
var random = createRandom(Math.random);

/**
 * Exporting.
 */
random.createRandom = createRandom;
module.exports = random;


/***/ }),

/***/ "./node_modules/pandemonium/shuffle-in-place.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pandemonium Shuffle In Place
 * =============================
 *
 * Shuffle function applying the Fisher-Yates algorithm to the provided array.
 */
var createRandom = __webpack_require__("./node_modules/pandemonium/random.js").createRandom;

/**
 * Creating a function returning the given array shuffled.
 *
 * @param  {function} rng - The RNG to use.
 * @return {function}     - The created function.
 */
function createShuffleInPlace(rng) {
  var customRandom = createRandom(rng);

  /**
   * Function returning the shuffled array.
   *
   * @param  {array}  sequence - Target sequence.
   * @return {array}           - The shuffled sequence.
   */
  return function(sequence) {
    var length = sequence.length,
        lastIndex = length - 1;

    var index = -1;

    while (++index < length) {
      var r = customRandom(index, lastIndex),
          value = sequence[r];

      sequence[r] = sequence[index];
      sequence[index] = value;
    }
  };
}

/**
 * Default shuffle in place using `Math.random`.
 */
var shuffleInPlace = createShuffleInPlace(Math.random);

/**
 * Exporting.
 */
shuffleInPlace.createShuffleInPlace = createShuffleInPlace;
module.exports = shuffleInPlace;


/***/ }),

/***/ "./node_modules/talisman/clustering/record-linkage/abstract.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Talisman clustering/record-linkage/abstract
 * ============================================
 *
 * Abstract class used by every record-linkage clusterer to expose a same
 * interface.
 */

/**
 * Defaults.
 */
var DEFAULTS = {
  minClusterSize: 2
};

/**
 * Record Linkage Clusterer class.
 *
 * @constructor
 * @param {object} params - Clusterer parameters.
 * @param {array}  items  - Items to cluster.
 */

var RecordLinkageClusterer = function RecordLinkageClusterer(params, items) {
  _classCallCheck(this, RecordLinkageClusterer);

  if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') throw new Error('talisman/clustering/record-linkage: the given params should be an object.');

  if (!Array.isArray(items)) throw new Error('talisman/clustering/record-linkage: the given items should be an array.');

  // Properties
  this.items = items;
  this.params = {
    minClusterSize: params.minClusterSize || DEFAULTS.minClusterSize
  };
};

exports.default = RecordLinkageClusterer;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/clustering/record-linkage/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSimilarityPolymorphisms = handleSimilarityPolymorphisms;
exports.clustersFromArrayGraph = clustersFromArrayGraph;
exports.clustersFromSetGraph = clustersFromSetGraph;
/**
 * Talisman clustering/record-linkage/helpers
 * ===========================================
 *
 * Common function used throughout the clustering/record-linkage namespace.
 */

/**
 * Function handling distance/similarity & radius parameter polymorphisms.
 *
 * @param {RecordLinkageClusterer} target - Target instance.
 * @param {object}                 params - Parameters.
 */
function handleSimilarityPolymorphisms(target, params) {
  if ('radius' in params && typeof params.radius !== 'number') throw new Error('talisman/clustering/record-linkage: the given radius should be a number.');

  if (typeof params.distance !== 'function' && typeof params.similarity !== 'function') throw new Error('talisman/clustering/record-linkage: the clusterer should be given a distance or a similarity function.');

  if ('radius' in params) {
    target.radius = params.radius;

    if (params.distance) target.similarity = function (a, b) {
      return params.distance(a, b) <= target.radius;
    };else target.similarity = function (a, b) {
      return params.similarity(a, b) >= target.radius;
    };
  } else {

    if (params.distance) target.similarity = function (a, b) {
      return !params.distance(a, b);
    };else target.similarity = params.similarity;
  }
}

// NOTE: it is possible to sort the clusters by size beforehand to make
// the largest clusters possible, or even to order in reverse

// NOTE: since we'd want to sort by lenghts here, it's possible to use
// a linear time algorithm such as radix sort

// NOTE: should iterate on graph rather than on items & delete keys from the
// graph rather than having a set register

/**
 * Function returning a list of clusters from the given items & similarity
 * graph represented as an index of items to the array of neighbors.
 *
 * @param  {array}  items          - List of items.
 * @param  {object} graph          - Similarity graph.
 * @param  {number} minClusterSize - Minimum number of items in a cluster.
 */
function clustersFromArrayGraph(items, graph, minClusterSize) {
  var clusters = [],
      visited = new Set();

  var cluster = void 0;

  for (var i = 0, l = items.length; i < l; i++) {
    var item = items[i];

    if (visited.has(i)) continue;

    if (!graph[i]) continue;

    if (graph[i].length + 1 < minClusterSize) continue;

    cluster = new Array(graph[i].length + 1);
    cluster[0] = item;
    visited.add(i);

    // Adding neighbors to the cluster
    for (var j = 0, m = graph[i].length; j < m; j++) {
      var neighborIndex = graph[i][j],
          neighbor = items[neighborIndex];

      cluster[j + 1] = neighbor;
      visited.add(neighborIndex);
    }

    clusters.push(cluster);
  }

  return clusters;
}

/**
 * Function returning a list of clusters from the given items & similarity
 * graph represented as an index of items to the set of neighbors.
 *
 * @param  {array}  items          - List of items.
 * @param  {object} graph          - Similarity graph.
 * @param  {number} minClusterSize - Minimum number of items in a cluster.
 */
function clustersFromSetGraph(items, graph, minClusterSize) {
  var clusters = [],
      visited = new Set();

  var cluster = void 0;

  for (var i = 0, l = items.length; i < l; i++) {
    var item = items[i];

    if (visited.has(i)) continue;

    if (!graph[i]) continue;

    if (graph[i].size + 1 < minClusterSize) continue;

    cluster = new Array(graph[i].size + 1);
    cluster[0] = item;
    visited.add(i);

    // Adding neighbors to the cluster
    var iterator = graph[i].values();

    var step = void 0,
        j = 1;

    while ((step = iterator.next()) && !step.done) {
      var neighborIndex = step.value,
          neighbor = items[neighborIndex];

      cluster[j] = neighbor;
      visited.add(neighborIndex);
      j++;
    }

    clusters.push(cluster);
  }

  return clusters;
}

/***/ }),

/***/ "./node_modules/talisman/clustering/record-linkage/key-collision.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyCollisionClusterer = undefined;
exports.default = keyCollision;

var _abstract = __webpack_require__("./node_modules/talisman/clustering/record-linkage/abstract.js");

var _abstract2 = _interopRequireDefault(_abstract);

var _helpers = __webpack_require__("./node_modules/talisman/clustering/record-linkage/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Talisman clustering/record-linkage/key-collision
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * =================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Simple clustering algorithm running in linear time just applying a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * keying function to each data point and grouping them when the resulting
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * keys collide.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Key Collision Clusterer class.
 *
 * @constructor
 */
var KeyCollisionClusterer = exports.KeyCollisionClusterer = function (_RecordLinkageCluster) {
  _inherits(KeyCollisionClusterer, _RecordLinkageCluster);

  function KeyCollisionClusterer(params, items) {
    _classCallCheck(this, KeyCollisionClusterer);

    // Validating keyer
    var _this = _possibleConstructorReturn(this, _RecordLinkageCluster.call(this, params, items));

    _this.keyer = params.keys || params.key;
    _this.merge = params.merge || false;

    if (typeof _this.keyer !== 'function') throw new Error('talisman/clustering/record-linkage/key-collision: the given keyer is not a function.');
    return _this;
  }

  KeyCollisionClusterer.prototype.runWithMerge = function runWithMerge() {
    var map = Object.create(null);

    // Computing buckets map
    for (var i = 0, l = this.items.length; i < l; i++) {
      var item = this.items[i],
          keys = [].concat(this.keyer(item, i));

      for (var j = 0, m = keys.length; j < m; j++) {
        var key = keys[j];

        // If the key is falsy, we continue
        if (!key) continue;

        if (!map[key]) map[key] = new Set();
        map[key].add(i);
      }
    }

    // Computing graph
    // TODO: I sense that we can do better & faster
    var graph = Object.create(null);

    for (var _key in map) {
      var bucket = Array.from(map[_key]);

      for (var _i = 0, _l = bucket.length; _i < _l; _i++) {
        for (var _j = _i + 1; _j < _l; _j++) {
          graph[bucket[_i]] = graph[bucket[_i]] || new Set();
          graph[bucket[_i]].add(bucket[_j]);

          graph[bucket[_j]] = graph[bucket[_j]] || new Set();
          graph[bucket[_j]].add(bucket[_i]);
        }
      }
    }

    return (0, _helpers.clustersFromSetGraph)(this.items, graph, this.params.minClusterSize);
  };

  KeyCollisionClusterer.prototype.runWithoutMerge = function runWithoutMerge() {
    var map = Object.create(null);

    // Computing buckets map
    for (var i = 0, l = this.items.length; i < l; i++) {
      var item = this.items[i],
          keys = [].concat(this.keyer(item, i));

      for (var j = 0, m = keys.length; j < m; j++) {
        var key = keys[j];

        // If the key is falsy, we continue
        if (!key) continue;

        if (!map[key]) map[key] = new Set();
        map[key].add(item);
      }
    }

    // Retrieving clusters
    var clusters = [];

    for (var _key2 in map) {
      if (map[_key2].size >= this.params.minClusterSize) clusters.push(Array.from(map[_key2]));
    }

    return clusters;
  };

  KeyCollisionClusterer.prototype.run = function run() {
    if (this.merge) return this.runWithMerge();else return this.runWithoutMerge();
  };

  return KeyCollisionClusterer;
}(_abstract2.default);

/**
 * Shortcut function for the key collision clusterer.
 *
 * @param {object} params - Clusterer parameters.
 * @param {array}  items  - Items to cluster.
 */


function keyCollision(params, items) {
  var clusterer = new KeyCollisionClusterer(params, items);

  return clusterer.run();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/clustering/record-linkage/naive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NaiveClusterer = undefined;
exports.default = naive;

var _abstract = __webpack_require__("./node_modules/talisman/clustering/record-linkage/abstract.js");

var _abstract2 = _interopRequireDefault(_abstract);

var _helpers = __webpack_require__("./node_modules/talisman/clustering/record-linkage/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Talisman clustering/record-linkage/naive
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * =========================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Naive clustering working by performing the n(n-1)/2 distance calculations
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * between all relevant pairs. Time complexity of such a clustering is therefore
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * O(n^2), which is quite bad.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Note that the produced clusters are fuzzy.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Naive Clusterer class.
 *
 * @constructor
 */
var NaiveClusterer = exports.NaiveClusterer = function (_RecordLinkageCluster) {
  _inherits(NaiveClusterer, _RecordLinkageCluster);

  function NaiveClusterer(params, items) {
    _classCallCheck(this, NaiveClusterer);

    var _this = _possibleConstructorReturn(this, _RecordLinkageCluster.call(this, params, items));

    (0, _helpers.handleSimilarityPolymorphisms)(_this, params);
    return _this;
  }

  NaiveClusterer.prototype.run = function run() {
    var graph = {};

    // Iterating over the needed pairs
    for (var i = 0, l = this.items.length; i < l; i++) {
      var a = this.items[i];

      for (var j = i + 1; j < l; j++) {
        var b = this.items[j];

        if (this.similarity(a, b)) {
          graph[i] = graph[i] || [];
          graph[i].push(j);

          // NOTE: undirected link seems to be mandatory for it to work
          graph[j] = graph[j] || [];
          graph[j].push(i);
        }
      }
    }

    // Computing clusters
    return (0, _helpers.clustersFromArrayGraph)(this.items, graph, this.params.minClusterSize);
  };

  return NaiveClusterer;
}(_abstract2.default);

/**
 * Shortcut function for the naive clusterer.
 *
 * @param {object} params - Clusterer parameters.
 * @param {array}  items  - Items to cluster.
 */


function naive(params, items) {
  var clusterer = new NaiveClusterer(params, items);

  return clusterer.run();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/clustering/record-linkage/vp-tree.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPTreeClusterer = undefined;
exports.default = vpTree;

var _vpTree = __webpack_require__("./node_modules/talisman/node_modules/mnemonist/vp-tree.js");

var _vpTree2 = _interopRequireDefault(_vpTree);

var _abstract = __webpack_require__("./node_modules/talisman/clustering/record-linkage/abstract.js");

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Talisman clustering/record-linkage/vp-tree
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ===========================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Clustering method using a Vantage Point Tree (VPTree) to find the clusters
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * more efficiently.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Vantage Point Tree Clusterer class.
 *
 * @constructor
 */
var VPTreeClusterer = exports.VPTreeClusterer = function (_RecordLinkageCluster) {
  _inherits(VPTreeClusterer, _RecordLinkageCluster);

  function VPTreeClusterer(params, items) {
    _classCallCheck(this, VPTreeClusterer);

    // Validating radius
    var _this = _possibleConstructorReturn(this, _RecordLinkageCluster.call(this, params, items));

    if (typeof params.radius !== 'number') throw new Error('talisman/clustering/record-linkage/vp-tree: the given radius is not a number.');

    // Validating the distance function
    if (typeof params.distance !== 'function') throw new Error('talisman/clustering/record-linkage/vp-tree: the given distance is not a function.');

    // Properties
    _this.radius = params.radius;
    _this.distance = params.distance;
    return _this;
  }

  VPTreeClusterer.prototype.run = function run() {

    // Building the tree
    var tree = new _vpTree2.default(this.distance, this.items);

    // Retrieving the clusters
    var clusters = [],
        visited = new Set();

    for (var i = 0, l = this.items.length; i < l; i++) {
      var item = this.items[i];

      if (visited.has(item)) continue;

      var neighbors = tree.neighbors(this.radius, item);

      var cluster = new Array(neighbors.length);

      for (var j = 0, m = neighbors.length; j < m; j++) {
        visited.add(neighbors[j].item);
        cluster[j] = neighbors[j].item;
      }

      if (cluster.length >= this.params.minClusterSize) clusters.push(cluster);
    }

    return clusters;
  };

  return VPTreeClusterer;
}(_abstract2.default);

/**
 * Shortcut function for the vantage point tree clusterer.
 *
 * @param {object} params - Clusterer parameters.
 * @param {array}  items  - Items to cluster.
 */


function vpTree(params, items) {
  var clusterer = new VPTreeClusterer(params, items);

  return clusterer.run();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/helpers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findall = findall;
exports.seq = seq;
exports.squeeze = squeeze;
exports.translation = translation;
/* eslint no-cond-assign: 0 */
/**
 * Talisman helpers
 * =================
 *
 * Miscellaneous helper functions.
 */

/**
 * Function returning all the matches of a regular expression over the given
 * string.
 *
 * @param  {RegExp} pattern - The regular expression to apply.
 * @param  {string} string  - The string to match.
 * @return {array}          - An array of matches.
 */
function findall(pattern, string) {
  var matches = [];

  if (!pattern.global) {
    var result = pattern.exec(string);

    if (result) matches.push(result);

    return matches;
  }

  var match = void 0;
  while (match = pattern.exec(string)) {
    matches.push(match);
  } // Resetting state of the Regex for safety
  pattern.lastIndex = 0;

  return matches;
}

/**
 * Function normalizing the given variable into a proper array sequence.
 *
 * @param  {mixed} target - The variable to normalize as a sequence.
 * @return {array}        - The resulting sequence.
 */
function seq(target) {
  return typeof target === 'string' ? target.split('') : target;
}

/**
 * Function squeezing the given sequence by dropping consecutive duplicates.
 *
 * Note: the name was actually chosen to mimic Ruby's naming since I did not
 * find any equivalent in other standard libraries.
 *
 * @param  {mixed} target - The sequence to squeeze.
 * @return {array}        - The resulting sequence.
 */
function squeeze(target) {
  var isString = typeof target === 'string',
      sequence = seq(target),
      squeezed = [sequence[0]];

  for (var i = 1, l = sequence.length; i < l; i++) {
    if (sequence[i] !== sequence[i - 1]) squeezed.push(sequence[i]);
  }

  return isString ? squeezed.join('') : squeezed;
}

/**
 * Function creating an index of mapped letters.
 *
 * @param  {string} first  - First letters.
 * @param  {string} second - Second letters.
 * @return {object}        - The resulting index.
 */
function translation(first, second) {
  var index = {};

  first = first.split('');
  second = second.split('');

  if (first.length !== second.length) throw Error('talisman/helpers#translation: given strings don\'t have the same length.');

  for (var i = 0, l = first.length; i < l; i++) {
    index[first[i]] = second[i];
  }return index;
}

/***/ }),

/***/ "./node_modules/talisman/keyers/fingerprint.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: false
});
exports.nameFingerprint = exports.ngramsFingerprint = undefined;
exports.createKeyer = createKeyer;

var _fingerprint = __webpack_require__("./node_modules/talisman/tokenizers/fingerprint/index.js");

var _name = __webpack_require__("./node_modules/talisman/tokenizers/fingerprint/name.js");

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Talisman keyers/fingerprint
 * ============================
 *
 * Keyer based on the fingerprint tokenizer.
 */
function createKeyer(options) {
  options = options || {};

  var tokenizer = (0, _fingerprint.createTokenizer)(options);

  if (options.ngrams) return function (n, string) {
    return tokenizer(n, string).join('');
  };

  return function (string) {
    return tokenizer(string).join(' ');
  };
}

exports.default = createKeyer();


var ngramsFingerprint = createKeyer({ ngrams: true });

var nameFingerprint = function nameFingerprint(name) {
  return (0, _name2.default)(name).join(' ');
};

exports.ngramsFingerprint = ngramsFingerprint;
exports.nameFingerprint = nameFingerprint;
module.exports = exports['default'];
exports['default'].createKeyer = exports.createKeyer;
exports['default'].ngramsFingerprint = exports.ngramsFingerprint;
exports['default'].nameFingerprint = exports.nameFingerprint;

/***/ }),

/***/ "./node_modules/talisman/metrics/distance/levenshtein.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: false
});
exports.default = levenshtein;
exports.limited = limited;
/**
 * Talisman metrics/distance/levenshtein
 * ======================================
 *
 * Functions computing the Levenshtein distance.
 *
 * [Reference]: https://en.wikipedia.org/wiki/Levenshtein_distance
 *
 * [Article]:
 * Levenshtein, Vladimir I. (February 1966). "Binary codes capable of
 * correcting deletions, insertions, and reversals".
 * Soviet Physics Doklady 10 (8): 707–710.
 *
 * [Tags]: metric, string metric.
 */
var VECTOR = [],
    CODES = [];

/**
 * Function returning the Levenshtein distance between two sequences. This
 * version only works on strings and leverage the `.charCodeAt` method to
 * perform fast comparisons between 16 bits integers.
 *
 * @param  {string}  a - The first string to process.
 * @param  {string}  b - The second string to process.
 * @return {number}    - The Levenshtein distance between a & b.
 */
function levenshteinForStrings(a, b) {
  if (a === b) return 0;

  var tmp = a;

  // Swapping the strings so that the shorter string is the first one.
  if (a.length > b.length) {
    a = b;
    b = tmp;
  }

  var la = a.length,
      lb = b.length;

  if (!la) return lb;
  if (!lb) return la;

  // Ignoring common suffix
  // NOTE: ~- is a fast - 1 operation, it does not work on big number though
  while (la > 0 && a.charCodeAt(~-la) === b.charCodeAt(~-lb)) {
    la--;
    lb--;
  }

  if (!la) return lb;

  var start = 0;

  // Ignoring common prefix
  while (start < la && a.charCodeAt(start) === b.charCodeAt(start)) {
    start++;
  }la -= start;
  lb -= start;

  if (!la) return lb;

  var v0 = VECTOR;

  var i = 0;

  while (i < lb) {
    CODES[start + i] = b.charCodeAt(start + i);
    v0[i] = ++i;
  }

  var current = 0,
      left = void 0,
      above = void 0,
      charA = void 0,
      j = void 0;

  // Starting the nested loops
  for (i = 0; i < la; i++) {
    left = i;
    current = i + 1;

    charA = a.charCodeAt(start + i);

    for (j = 0; j < lb; j++) {
      above = current;

      current = left;
      left = v0[j];

      if (charA !== CODES[start + j]) {

        // Insertion
        if (left < current) current = left;

        // Deletion
        if (above < current) current = above;

        current++;
      }

      v0[j] = current;
    }
  }

  return current;
}

/**
 * Function returning the Levenshtein distance between two arbitrary sequences.
 *
 * @param  {mixed}  a - The first sequence to process.
 * @param  {mixed}  b - The second sequence to process.
 * @return {number}   - The Levenshtein distance between a & b.
 */
function levenshtein(a, b) {

  // If the sequences are string, we use the optimized version
  if (typeof a === 'string') return levenshteinForStrings(a, b);

  if (a === b) return 0;

  var tmp = a;

  // Swapping the strings so that the shorter string is the first one.
  if (a.length > b.length) {
    a = b;
    b = tmp;
  }

  var la = a.length,
      lb = b.length;

  if (!la) return lb;
  if (!lb) return la;

  // Ignoring common suffix
  // NOTE: ~- is a fast - 1 operation, it does not work on big number though
  while (la > 0 && a[~-la] === b[~-lb]) {
    la--;
    lb--;
  }

  if (!la) return lb;

  var start = 0;

  // Ignoring common prefix
  while (start < la && a[start] === b[start]) {
    start++;
  }la -= start;
  lb -= start;

  if (!la) return lb;

  var v0 = VECTOR;

  var i = 0;

  while (i < lb) {
    v0[i] = ++i;
  }var current = 0,
      left = void 0,
      above = void 0,
      charA = void 0,
      j = void 0;

  // Starting the nested loops
  for (i = 0; i < la; i++) {
    left = i;
    current = i + 1;

    charA = a[start + i];

    for (j = 0; j < lb; j++) {
      above = current;

      current = left;
      left = v0[j];

      if (charA !== b[start + j]) {

        // Insertion
        if (left < current) current = left;

        // Deletion
        if (above < current) current = above;

        current++;
      }

      v0[j] = current;
    }
  }

  return current;
}

/**
 * Function returning the Levenshtein distance between two sequences
 * but with a twist: this version will stop its computation if distance
 * exceed a given maximum and return Infinity. This version only works on
 * strings and leverage the `.charCodeAt` method to perform fast comparisons
 * between 16 bits integers.
 *
 * @param  {number} max - Maximum distance.
 * @param  {string} a   - The first string to process.
 * @param  {string} b   - The second string to process.
 * @return {number}     - The Levenshtein distance between a & b or Infinity.
 */
function limitedLevenshteinForStrings(max, a, b) {
  if (a === b) return 0;

  var tmp = a;

  // Swapping the strings so that the shorter string is the first one.
  if (a.length > b.length) {
    a = b;
    b = tmp;
  }

  var la = a.length,
      lb = b.length;

  if (!la) return lb > max ? Infinity : lb;
  if (!lb) return la > max ? Infinity : la;

  // Ignoring common suffix
  // NOTE: ~- is a fast - 1 operation, it does not work on big number though
  while (la > 0 && a.charCodeAt(~-la) === b.charCodeAt(~-lb)) {
    la--;
    lb--;
  }

  if (!la) return lb > max ? Infinity : lb;

  var start = 0;

  // Ignoring common prefix
  while (start < la && a.charCodeAt(start) === b.charCodeAt(start)) {
    start++;
  }la -= start;
  lb -= start;

  if (!la) return lb > max ? Infinity : lb;

  var diff = lb - la;

  if (max > lb) max = lb;else if (diff > max) return Infinity;

  var v0 = VECTOR;

  var i = 0;

  while (i < max) {
    CODES[start + i] = b.charCodeAt(start + i);
    v0[i] = ++i;
  }
  while (i < lb) {
    CODES[start + i] = b.charCodeAt(start + i++);
    v0[i] = max + 1;
  }

  var offset = max - diff,
      haveMax = max < lb;

  var jStart = 0,
      jEnd = max;

  var current = 0,
      left = void 0,
      above = void 0,
      charA = void 0,
      j = void 0;

  // Starting the nested loops
  for (i = 0; i < la; i++) {
    left = i;
    current = i + 1;

    charA = a.charCodeAt(start + i);
    jStart += i > offset ? 1 : 0;
    jEnd += jEnd < lb ? 1 : 0;

    for (j = jStart; j < jEnd; j++) {
      above = current;

      current = left;
      left = v0[j];

      if (charA !== CODES[start + j]) {

        // Insertion
        if (left < current) current = left;

        // Deletion
        if (above < current) current = above;

        current++;
      }

      v0[j] = current;
    }

    if (haveMax && v0[i + diff] > max) return Infinity;
  }

  return current <= max ? current : Infinity;
}

/**
 * Function returning the Levenshtein distance between two sequences
 * but with a twist: this version will stop its computation if distance
 * exceed a given maximum and return Infinity.
 *
 * @param  {number} max - Maximum distance.
 * @param  {mixed}  a   - The first sequence to process.
 * @param  {mixed}  b   - The second sequence to process.
 * @return {number}     - The Levenshtein distance between a & b or Infinity.
 */
function limited(max, a, b) {

  // If the sequences are string, we use the optimized version
  if (typeof a === 'string') return limitedLevenshteinForStrings(max, a, b);

  if (a === b) return 0;

  var tmp = a;

  // Swapping the strings so that the shorter string is the first one.
  if (a.length > b.length) {
    a = b;
    b = tmp;
  }

  var la = a.length,
      lb = b.length;

  if (!la) return lb > max ? Infinity : lb;
  if (!lb) return la > max ? Infinity : la;

  // Ignoring common suffix
  // NOTE: ~- is a fast - 1 operation, it does not work on big number though
  while (la > 0 && a[~-la] === b[~-lb]) {
    la--;
    lb--;
  }

  if (!la) return lb > max ? Infinity : lb;

  var start = 0;

  // Ignoring common prefix
  while (start < la && a[start] === b[start]) {
    start++;
  }la -= start;
  lb -= start;

  if (!la) return lb > max ? Infinity : lb;

  var diff = lb - la;

  if (max > lb) max = lb;else if (diff > max) return Infinity;

  var v0 = VECTOR;

  var i = 0;

  while (i < max) {
    v0[i] = ++i;
  }
  while (i < lb) {
    v0[i++] = max + 1;
  }

  var offset = max - diff,
      haveMax = max < lb;

  var jStart = 0,
      jEnd = max;

  var current = 0,
      left = void 0,
      above = void 0,
      charA = void 0,
      j = void 0;

  // Starting the nested loops
  for (i = 0; i < la; i++) {
    left = i;
    current = i + 1;

    charA = a[start + i];
    jStart += i > offset ? 1 : 0;
    jEnd += jEnd < lb ? 1 : 0;

    for (j = jStart; j < jEnd; j++) {
      above = current;

      current = left;
      left = v0[j];

      if (charA !== b[start + j]) {

        // Insertion
        if (left < current) current = left;

        // Deletion
        if (above < current) current = above;

        current++;
      }

      v0[j] = current;
    }

    if (haveMax && v0[i + diff] > max) return Infinity;
  }

  return current <= max ? current : Infinity;
}
module.exports = exports['default'];
exports['default'].limited = exports.limited;

/***/ }),

/***/ "./node_modules/talisman/node_modules/mnemonist/heap.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Mnemonist Binary Heap
 * ======================
 *
 * Binary heap implementation.
 */
var comparators = __webpack_require__("./node_modules/talisman/node_modules/mnemonist/utils/comparators.js"),
    iterateOver = __webpack_require__("./node_modules/talisman/node_modules/mnemonist/utils/iterate.js");

var DEFAULT_COMPARATOR = comparators.DEFAULT_COMPARATOR,
    reverseComparator = comparators.reverseComparator;

/**
 * Binary Minimum Heap.
 *
 * @constructor
 */
function Heap(comparator) {
  this.clear();
  this.comparator = comparator || DEFAULT_COMPARATOR;

  if (typeof this.comparator !== 'function')
    throw new Error('Heap.constructor: given comparator should be a function.');
}

/**
 * Method used to clear the heap.
 *
 * @return {undefined}
 */
Heap.prototype.clear = function() {

  // Properties
  this.items = [];
  this.size = 0;
};

/**
 * Function used to bubble up.
 *
 * @param {function} compare - Comparator function.
 * @param {array}    data    - Data to edit.
 * @param {number}   index   - Target index.
 */
function bubbleUp(compare, items, index) {
  // Item needing to be moved
  var item = items[index],
      parentIndex = ((index - 1) / 2) | 0;

  // Iterating
  while (index > 0 && compare(items[parentIndex], item) > 0) {
    items[index] = items[parentIndex];
    items[parentIndex] = item;
    index = parentIndex;
    parentIndex = ((index - 1) / 2) | 0;
  }
}

/**
 * Function used to sink down.
 *
 * @param {function} compare - Comparator function.
 * @param {array}    data    - Data to edit.
 * @param {number}   index   - Target index.
 */
function sinkDown(compare, items, index) {
  var size = items.length,
      item = items[index],
      left = 2 * index + 1,
      right = 2 * index + 2,
      min;

  if (right >= size) {
    if (left >= size)
      min = -1;
    else
      min = left;
  }
  else if (compare(items[left], items[right]) <= 0) {
    min = left;
  }
  else {
    min = right;
  }

  while (min >= 0 && compare(items[index], items[min]) > 0) {
    items[index] = items[min];
    items[min] = item;
    index = min;

    left = 2 * index + 1;
    right = 2 * index + 2;

    if (right >= size) {
      if (left >= size)
        min = -1;
      else
        min = left;
    }
    else if (compare(items[left], items[right]) <= 0) {
      min = left;
    }
    else {
      min = right;
    }
  }
}

/**
 * Method used to push an item into the heap.
 *
 * @param  {any}    item - Item to push.
 * @return {number}
 */
Heap.prototype.push = function(item) {
  this.items.push(item);
  bubbleUp(this.comparator, this.items, this.size);
  return ++this.size;
};

/**
 * Method used to retrieve the "first" item of the heap.
 *
 * @return {any}
 */
Heap.prototype.peek = function() {
  return this.items[0];
};

/**
 * Method used to retrieve & remove the "first" item of the heap.
 *
 * @return {any}
 */
Heap.prototype.pop = function() {
  if (!this.size)
    return undefined;

  var item = this.items[0],
      last = this.items.pop();

  this.size--;

  if (this.size) {
    this.items[0] = last;
    sinkDown(this.comparator, this.items, 0);
  }

  return item;
};

/**
 * Convenience known methods.
 */
Heap.prototype.inspect = function() {
  var proxy = {
    size: this.size
  };

  if (this.items.length)
    proxy.top = this.items[0];

  // Trick so that node displays the name of the constructor
  Object.defineProperty(proxy, 'constructor', {
    value: Heap,
    enumerable: false
  });

  return proxy;
};

/**
 * Binary Maximum Heap.
 *
 * @constructor
 */
function MaxHeap(comparator) {
  this.clear();
  this.comparator = comparator || DEFAULT_COMPARATOR;

  if (typeof this.comparator !== 'function')
    throw new Error('Heap.constructor: given comparator should be a function.');

  this.comparator = reverseComparator(this.comparator);
}

MaxHeap.prototype = Heap.prototype;

/**
 * Static @.from function taking an abitrary iterable & converting it into
 * a heap.
 *
 * @param  {Iterable} iterable   - Target iterable.
 * @param  {function} comparator - Custom comparator function.
 * @return {Heap}
 */
Heap.from = function(iterable, comparator) {
  var heap = new Heap(comparator);

  iterateOver(iterable, function(value) {
    heap.push(value);
  });

  return heap;
};

MaxHeap.from = function(iterable, comparator) {
  var heap = new MaxHeap(comparator);

  iterateOver(iterable, function(value) {
    heap.push(value);
  });

  return heap;
};

/**
 * Exporting.
 */
Heap.MinHeap = Heap;
Heap.MaxHeap = MaxHeap;
module.exports = Heap;


/***/ }),

/***/ "./node_modules/talisman/node_modules/mnemonist/utils/comparators.js":
/***/ (function(module, exports) {

/**
 * Mnemonist Heap Comparators
 * ===========================
 *
 * Default comparators & functions dealing with comparators reversing etc.
 */
var DEFAULT_COMPARATOR = function(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;

  return 0;
};

/**
 * Function used to reverse a comparator.
 */
function reverseComparator(comparator) {
  return function(a, b) {
    return comparator(b, a);
  };
}

/**
 * Exporting.
 */
exports.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR;
exports.reverseComparator = reverseComparator;


/***/ }),

/***/ "./node_modules/talisman/node_modules/mnemonist/utils/iterate.js":
/***/ (function(module, exports) {

/**
 * Mnemonist Iterate Function
 * ===========================
 *
 * Harmonized iteration over mixed targets.
 */

/**
 * Function used to iterate in a similar way over JavaScript iterables,
 * plain objects & arrays.
 *
 * @param  {any}      target - Iteration target.
 * @param  {function} callback - Iteration callback.
 */
module.exports = function iterate(target, callback) {
  var iterator, k, i, l, s;

  // The target is an array
  if (Array.isArray(target)) {
    for (i = 0, l = target.length; i < l; i++)
      callback(target[i], i);
    return;
  }

  // The target has a #.forEach method
  if (typeof target.forEach === 'function') {
    target.forEach(callback);
    return;
  }

  // The target is an iterator
  if (typeof target.next === 'function') {
    iterator = target;
    i = 0;

    while ((s = iterator.next(), !s.done)) {
      callback(s.value, i);
      i++;
    }

    return;
  }

  // The target is iterable
  if (typeof Symbol !== 'undefined' && Symbol.iterator in target) {
    iterator = target[Symbol.iterator]();

    while ((s = iterator.next(), !s.done))
      callback(s[0], s[1]);

    return;
  }

  // The target is a plain object
  for (k in target)
    callback(target[k], k);

  return;
};


/***/ }),

/***/ "./node_modules/talisman/node_modules/mnemonist/vp-tree.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Mnemonist Vantage Point Tree
 * =============================
 *
 * JavaScript implementation of the Vantage Point Tree storing the binary
 * tree as a flat byte array.
 *
 * Note that a VPTree has worst cases and is likely not to be perfectly
 * balanced because of median ambiguity. It is therefore not suitable
 * for hairballs and tiny datasets.
 *
 * [Reference]:
 * https://en.wikipedia.org/wiki/Vantage-point_tree
 */
var iterateOver = __webpack_require__("./node_modules/talisman/node_modules/mnemonist/utils/iterate.js"),
    Heap = __webpack_require__("./node_modules/talisman/node_modules/mnemonist/heap.js");

// TODO: implement better selection technique for the vantage point
// The one minimizing spread of sample using stdev is usually the accepted one

/**
 * Heap comparator used by the #.nearestNeighbors method.
 */
function comparator(a, b) {
  if (a.distance < b.distance)
    return 1;
  if (a.distance > b.distance)
    return -1;
  return 0;
}

/**
 * Function used to create the binary tree.
 *
 * @param  {function}     distance - Distance function to use.
 * @param  {array}        items    - Items to index (will be mutated).
 * @param  {array}        indexes  - Indexes of the items.
 * @return {Float64Array}          - The flat binary tree.
 */
function createBinaryTree(distance, items, indexes) {
  var N = indexes.length,
      C = 0,
      data = new Float64Array(N * 4),
      stack = [0, indexes],
      distances = [],
      sortedDistances = [],
      nodeIndex,
      currentIndexes,
      vantagePoint,
      medianIndex,
      mu,
      left,
      right,
      i,
      l,
      h;

  while (stack.length) {
    currentIndexes = stack.pop();
    nodeIndex = stack.pop();

    // Getting our vantage point
    vantagePoint = currentIndexes.pop();
    l = currentIndexes.length;

    // Storing vantage point
    data[nodeIndex] = vantagePoint;

    // If we only have few items left
    if (!l)
      continue;

    if (l === 1) {

      // We put remaining item to the right
      mu = distance(items[vantagePoint], items[currentIndexes[0]]);

      data[nodeIndex + 1] = mu;

      // Right
      C += 4;
      data[nodeIndex + 3] = C;
      data[C] = currentIndexes[0];

      continue;
    }

    // Computing distance from vantage point to other points
    distances.length = l;
    sortedDistances.length = l;

    for (i = 0; i < l; i++)
      distances[i] = distance(items[vantagePoint], items[currentIndexes[i]]);

    // Finding median of distances
    h = l / 2;
    sortedDistances = distances.slice().sort();
    medianIndex = h - 1;
    mu = (medianIndex === (medianIndex | 0)) ?
      (sortedDistances[medianIndex] + sortedDistances[medianIndex + 1]) / 2 :
      sortedDistances[Math.ceil(medianIndex)];

    // Storing mu
    data[nodeIndex + 1] = mu;

    // Dispatching the indexes left & right
    left = [];
    right = [];

    for (i = 0; i < l; i++) {
      if (distances[i] >= mu)
        right.push(currentIndexes[i]);
      else
        left.push(currentIndexes[i]);
    }

    // Right
    if (right.length) {
      C += 4;
      data[nodeIndex + 3] = C;
      stack.push(C);
      stack.push(right);
    }

    // Left
    if (left.length) {
      C += 4;
      data[nodeIndex + 2] = C;
      stack.push(C);
      stack.push(left);
    }
  }

  return data;
}

/**
 * VPTree.
 *
 * @constructor
 * @param {function} distance - Distance function to use.
 * @param {Iterable} items    - Items to store.
 */
function VPTree(distance, items) {
  if (typeof distance !== 'function')
    throw new Error('mnemonist/VPTree.constructor: given `distance` must be a function.');

  if (!items)
    throw new Error('mnemonist/VPTree.constructor: you must provide items to the tree. A VPTree cannot be updated after its creation.');

  // Properties
  this.distance = distance;
  this.items = [];

  var indexes = [],
      self = this,
      i = 0;

  iterateOver(items, function(value) {
    self.items.push(value);
    indexes.push(i++);
  });

  // Creating the binary tree
  this.size = indexes.length;
  this.data = createBinaryTree(distance, this.items, indexes);
}

/**
 * Function used to retrieve the k nearest neighbors of the query.
 *
 * @param  {number} k     - Number of neighbors to retrieve.
 * @param  {any}    query - The query.
 * @return {array}
 */
VPTree.prototype.nearestNeighbors = function(k, query) {
  var neighbors = new Heap(comparator),
      stack = [0],
      tau = Infinity,
      nodeIndex,
      itemIndex,
      vantagePoint,
      leftIndex,
      rightIndex,
      mu,
      d;

  while (stack.length) {
    nodeIndex = stack.pop();
    itemIndex = this.data[nodeIndex];
    vantagePoint = this.items[itemIndex];

    // Distance between query & the current vantage point
    d = this.distance(vantagePoint, query);

    if (d < tau) {
      neighbors.push({distance: d, item: vantagePoint});

      // Trimming
      if (neighbors.size > k)
        neighbors.pop();

      // Adjusting tau
      tau = neighbors.peek().distance;
    }

    leftIndex = this.data[nodeIndex + 2];
    rightIndex = this.data[nodeIndex + 3];

    // We are a leaf
    if (!leftIndex && !rightIndex)
      continue;

    mu = this.data[nodeIndex + 1];

    if (d < mu) {
      if (leftIndex && d < mu + tau)
        stack.push(leftIndex);
      if (rightIndex && d >= mu - tau) // ALT
        stack.push(rightIndex);
    }
    else {
      if (rightIndex && d >= mu - tau)
        stack.push(rightIndex);
      if (leftIndex && d < mu + tau) // ALT
        stack.push(leftIndex);
    }
  }

  var array = new Array(neighbors.size);

  for (var i = neighbors.size - 1; i >= 0; i--)
    array[i] = neighbors.pop();

  return array;
};

/**
 * Function used to retrieve every neighbors of query in the given radius.
 *
 * @param  {number} radius - Radius.
 * @param  {any}    query  - The query.
 * @return {array}
 */
VPTree.prototype.neighbors = function(radius, query) {
  var neighbors = [],
      stack = [0],
      nodeIndex,
      itemIndex,
      vantagePoint,
      leftIndex,
      rightIndex,
      mu,
      d;

  while (stack.length) {
    nodeIndex = stack.pop();
    itemIndex = this.data[nodeIndex];
    vantagePoint = this.items[itemIndex];

    // Distance between query & the current vantage point
    d = this.distance(vantagePoint, query);

    if (d <= radius)
      neighbors.push({distance: d, item: vantagePoint});

    leftIndex = this.data[nodeIndex + 2];
    rightIndex = this.data[nodeIndex + 3];

    // We are a leaf
    if (!leftIndex && !rightIndex)
      continue;

    mu = this.data[nodeIndex + 1];

    if (d < mu) {
      if (leftIndex && d < mu + radius)
        stack.push(leftIndex);
      if (rightIndex && d >= mu - radius) // Might not be necessary to test
        stack.push(rightIndex);
    }
    else {
      if (rightIndex && d >= mu - radius)
        stack.push(rightIndex);
      if (leftIndex && d < mu + radius) // Might not be necessary to test
        stack.push(leftIndex);
    }
  }

  return neighbors;
};

/**
 * Convenience known methods.
 */
VPTree.prototype.inspect = function() {
  var array = this.items.slice();

  // Trick so that node displays the name of the constructor
  Object.defineProperty(array, 'constructor', {
    value: VPTree,
    enumerable: false
  });

  return array;
};

/**
 * Static @.from function taking an abitrary iterable & converting it into
 * a tree.
 *
 * @param  {Iterable} iterable - Target iterable.
 * @param  {function} distance - Distance function to use.
 * @return {VPTree}
 */
VPTree.from = function(iterable, distance) {
  return new VPTree(distance, iterable);
};

/**
 * Exporting.
 */
module.exports = VPTree;


/***/ }),

/***/ "./node_modules/talisman/phonetics/double-metaphone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doubleMetaphone;
/* eslint no-constant-condition: 0 */
/**
 * Talisman phonetics/double-metaphone
 * ====================================
 *
 * The double metaphone algorithm.
 *
 * [Reference]:
 * https://en.wikipedia.org/wiki/Metaphone#Double_Metaphone
 *
 * [Author]:
 * Lawrence Philips, 2000
 */

/**
 * Helpers.
 */
var STARTING_REGEX = /^GN|KN|PN|WR|PS$/;

var SLAVO_GERMANIC_REGEX = /W|K|CZ|WITZ/;

function isSlavoGermanic(string) {
  return SLAVO_GERMANIC_REGEX.test(string);
}

var VOWELS = new Set(['A', 'E', 'I', 'O', 'U', 'Y']);

function isVowel(string) {
  return string.length === 1 && VOWELS.has(string);
}

/**
 * Lookups.
 */
var CHSet1 = new Set(['HARAC', 'HARIS']),
    CHSet2 = new Set(['HOR', 'HYM', 'HIA', 'HEM']),
    CHSet3 = new Set(['VAN ', 'VON ']),
    CHSet4 = new Set(['ORCHES', 'ARCHIT', 'ORCHID']),
    ChSet5 = new Set(['T', 'S']),
    CHSet6 = new Set(['A', 'O', 'U', 'E']),
    CHSet7 = new Set(['L', 'R', 'N', 'M', 'B', 'H', 'F', 'V', 'W', ' ']),
    CSet1 = new Set(['CE', 'CI']);

var LOOKUPS = {
  B: function B(string, pos) {
    return ['P', 'P', string.substr(pos + 1, 1) === 'B' ? 2 : 1];
  },
  CH: function CH(string, pos) {
    if (pos && string.substr(pos, 4) === 'CHAE') {
      return ['K', 'X', 2];
    } else if (!pos && (CHSet1.has(string.substr(pos + 1, 5)) || CHSet2.has(string.substr(pos + 1, 3))) && string.substr(0, 5) !== 'CHORE') {
      return ['K', 'K', 2];
    } else if (CHSet3.has(string.substr(0, 4)) || string.substr(0, 3) === 'SCH' || CHSet4.has(string.substr(pos - 2, 6)) || ChSet5.has(string.substr(pos + 2, 1)) || (!pos || CHSet6.has(string.substr(pos - 1, 1))) && CHSet7.has(string.substr(pos + 2, 1))) {
      return ['K', 'K', 2];
    } else if (pos) {
      return [string.substr(0, 2) === 'MC' ? 'K' : 'X', 'K', 2];
    }

    return ['X', 'X', 2];
  },
  CC: function CC(string, pos) {
    if (/^I|E|H$/.test(string.substr(pos + 2, 1)) && string.substr(pos + 2, 2) !== 'HU') {
      if (pos === 1 && string.substr(pos - 1, 1) === 'A' || /^UCCE(E|S)$/.test(string.substr(pos - 1, 5))) {
        return [['K', 'S'], ['K', 'S'], 3];
      } else {
        return ['X', 'X', 3];
      }
    }

    return ['K', 'K', 2];
  },
  C: function C(string, pos) {
    if (pos > 1 && isVowel(string.substr(pos - 2, 1)) && string.substr(pos - 1, 3) === 'ACH' && string.substr(pos + 2, 1) !== 'I' && (string.substr(pos + 2, 1) !== 'E' || /^(B|M)ACHER$/.test(string.substr(pos - 2, 6)))) {
      return ['K', 'K', 2];
    }

    if (!pos && string.substr(pos, 6) === 'CAESAR') {
      return ['S', 'S', 2];
    }

    if (string.substr(pos, 4) === 'CHIA') {
      return ['K', 'K', 2];
    }

    if (string.substr(pos, 2) === 'CH') {
      return LOOKUPS.CH(string, pos);
    }

    if (string.substr(pos, 2) === 'CZ' && string.substr(pos - 2, 4) !== 'WICZ') {
      return ['S', 'X', 2];
    }

    if (string.substr(pos + 1, 3) === 'CIA') {
      return ['X', 'X', 3];
    }

    if (string.substr(pos, 2) === 'CC' && !(pos === 1 || string.substr(0, 1) === 'M')) {
      return LOOKUPS.CC(string, pos);
    }

    if (/^C(K|G|Q)$/.test(string.substr(pos, 2))) {
      return ['K', 'K', 2];
    }

    if (/^C(I|E|Y)$/.test(string.substr(pos, 2))) {
      return ['S', /^CI(O|E|A)$/.test(string.substr(pos, 3)) ? 'X' : 'S', 2];
    }

    if (/^ (C|Q|G)$/.test(string.substr(pos + 1, 2))) {
      return ['K', 'K', 3];
    }

    var offset = 1;

    if (/^C|K|Q$/.test(string.substr(pos + 1, 1)) && !CSet1.has(string.substr(pos + 1, 2))) {
      offset = 2;
    }

    return ['K', 'K', offset];
  },
  Ç: function _() {
    return ['S', 'S', 1];
  },
  D: function D(string, pos) {
    if (string.substr(pos, 2) === 'DG') {
      return (/^I|E|Y$/.test(string.substr(pos + 2, 1)) ? ['J', 'J', 3] : [['T', 'K'], ['T', 'K'], 2]
      );
    }

    return ['T', 'T', /^D(T|D)$/.test(string.substr(pos, 2)) ? 2 : 1];
  },
  F: function F(string, pos) {
    return ['F', 'F', string.substr(pos + 1, 1) === 'F' ? 2 : 1];
  },
  GH: function GH(string, pos) {
    if (pos && !isVowel(string.substr(pos - 1, 1))) {
      return ['K', 'K', 2];
    }

    if (!pos) {
      return string.substr(pos + 2, 1) === 'I' ? ['J', 'J', 2] : ['K', 'K', 2];
    }

    if (pos > 1 && /^B|H|D$/.test(string.substr(pos - 2, 1)) || pos > 2 && /^B|H|D$/.test(string.substr(pos - 3, 1)) || pos > 3 && /^B|H$/.test(string.substr(pos - 4, 1))) {
      return [null, null, 2];
    }

    if (pos > 2 && string.substr(pos - 1, 1) === 'U' && /^C|G|L|R|T$/.test(string.substr(pos - 3, 1))) {
      return ['F', 'F', 2];
    }

    if (pos && string.substr(pos - 1, 1) !== 'I') {
      return ['K', 'K', 2];
    }

    return [null, null, 2];
  },
  GN: function GN(string, pos) {
    if (pos === 1 && isVowel(string.substr(0, 1)) && !isSlavoGermanic(string)) {
      return [['K', 'N'], 'N', 2];
    }

    if (string.substr(pos + 2, 2) !== 'EY' && string.substr(pos + 1, 1) !== 'Y' && !isSlavoGermanic(string)) {
      return ['N', ['K', 'N'], 2];
    }

    return [['K', 'N'], ['K', 'N'], 2];
  },
  G: function G(string, pos) {
    var nextLetter = string.substr(pos + 1, 1),
        nextPair = string.substr(pos + 1, 2);

    if (nextLetter === 'H') {
      return LOOKUPS.GH(string, pos);
    }

    if (nextLetter === 'N') {
      return LOOKUPS.GN(string, pos);
    }

    if (nextPair === 'LI' && !isSlavoGermanic(string)) {
      return [['K', 'L'], 'L', 2];
    }

    if (!pos && (nextLetter === 'Y' || /^(E(S|P|B|L|Y|I|R)|I(B|L|N|E))$/.test(nextPair))) {
      return ['K', 'J', 2];
    }

    if ((nextPair === 'ER' || nextLetter === 'Y') && !/^(D|R|M)ANGER$/.test(string.substr(0, 6)) && !/^E|I$/.test(string.substr(pos - 1, 1)) && !/^(R|O)GY$/.test(string.substr(pos - 1, 3))) {
      return ['K', 'J', 2];
    }

    if (/^E|I|Y$/.test(nextLetter) || /^(A|O)GGI$/.test(string.substr(pos - 1, 4))) {

      if (/^V(A|O)N /.test(string.substr(0, 4)) || string.substr(0, 3) === 'SCH' || string.substr(pos + 1, 2 === 'ET')) {
        return ['K', 'K', 2];
      }

      return string.substr(pos + 1, 4) === 'IER ' ? ['J', 'J', 2] : ['J', 'K', 2];
    }

    return ['K', 'K', nextLetter === 'G' ? 2 : 1];
  },
  H: function H(string, pos) {
    if ((!pos || isVowel(string.substr(pos - 1, 1))) && isVowel(string.substr(pos + 1, 1))) {
      return ['H', 'H', 2];
    }

    return [null, null, 1];
  },
  J: function J(string, pos, lastIndex) {
    if (string.substr(pos, 4) === 'JOSE' || string.substr(0, 4) === 'SAN ') {

      if (!pos && string.substr(pos + 4, 1) === ' ' || string.substr(0, 4) === 'SAN ') {
        return ['H', 'H', 1];
      }

      return ['J', 'H', 1];
    }

    var offset = string.substr(pos + 1, 1) === 'J' ? 2 : 1;

    if (!pos && string.substr(pos, 4) !== 'JOSE') {
      return ['J', 'A', offset];
    }

    if (isVowel(string.substr(pos - 1, 1)) && !isSlavoGermanic(string) && /^A|O$/.test(string.substr(pos + 1, 1))) {
      return ['J', 'H', offset];
    }

    if (lastIndex === pos) {
      return ['J', null, offset];
    }

    if (!/^L|T|K|S|N|M|B|Z$/.test(string.substr(pos + 1, 1)) && !/^S|K|L$/.test(string.substr(pos - 1, 1))) {
      return ['J', 'J', offset];
    }

    return [null, null, offset];
  },
  K: function K(string, pos) {
    return ['K', 'K', string.substr(pos + 1, 1) === 'K' ? 2 : 1];
  },
  L: function L(string, pos, lastIndex, length) {
    if (string.substr(pos + 1, 1) === 'L') {

      if (pos === length - 3 && /^(ILL(O|A)|ALLE)$/.test(string.substr(pos - 1, 4)) || /^(A|O)S$/.test(string.substr(lastIndex - 1, 2) || /^A|O$/.test(string.substr(lastIndex, 1))) && string.substr(pos - 1, 4) === 'ALLE') {
        return ['L', null, 2];
      }

      return ['L', 'L', 2];
    }

    return ['L', 'L', 1];
  },
  M: function M(string, pos, lastIndex) {
    if (string.substr(pos - 1, 3) === 'UMB' && (pos === lastIndex - 1 || string.substr(pos + 2, 2) === 'ER') || string.substr(pos + 1, 1) === 'M') {
      return ['M', 'M', 2];
    }

    return ['M', 'M', 1];
  },
  N: function N(string, pos) {
    return ['N', 'N', string.substr(pos + 1, 1) === 'N' ? 2 : 1];
  },
  Ñ: function _() {
    return ['N', 'N', 1];
  },
  P: function P(string, pos) {
    if (string.substr(pos + 1, 1) === 'H') {
      return ['F', 'F', 2];
    }

    return ['P', 'P', /^P|B$/.test(string.substr(pos + 1, 1)) ? 2 : 1];
  },
  Q: function Q(string, pos) {
    return ['K', 'K', string.substr(pos + 1, 1) === 'Q' ? 2 : 1];
  },
  R: function R(string, pos, lastIndex) {
    var offset = string.substr(pos + 1, 1) === 'R' ? 2 : 1;

    if (pos === lastIndex && !isSlavoGermanic(string) && string.substr(pos - 2, 2) === 'IE' && !/^M(E|A)$/.test(string.substr(pos - 4, 2))) {
      return [null, 'R', offset];
    }

    return ['R', 'R', offset];
  },
  SH: function SH(string, pos) {
    return (/^H(EIM|OEK|OLM|OLZ)$/.test(string.substr(pos + 1, 4)) ? ['S', 'S', 2] : ['X', 'X', 2]
    );
  },
  SC: function SC(string, pos) {
    if (string.substr(pos + 2, 1) === 'H') {
      if (/^OO|ER|EN|UY|ED|EM$/.test(string.substr(pos + 3, 2))) {
        return [/^E(R|N)$/.test(string.substr(pos + 3, 2)) ? 'X' : ['S', 'K'], ['S', 'K'], 3];
      }

      return ['X', !pos && !isVowel(string.substr(3, 1)) && string.substr(pos + 3, 1) !== 'W' ? 'S' : 'X', 3];
    }

    if (/^I|E|Y$/.test(string.substr(pos + 2, 1))) {
      return ['S', 'S', 3];
    }

    return [['S', 'K'], ['S', 'K'], 3];
  },
  S: function S(string, pos, lastIndex) {
    if (/^(I|Y)SL$/.test(string.substr(pos - 1, 3))) {
      return [null, null, 1];
    }

    if (!pos && string.substr(pos, 5) === 'SUGAR') {
      return ['X', 'S', 1];
    }

    if (string.substr(pos, 2) === 'SH') {
      return LOOKUPS.SH(string, pos);
    }

    if (/^SI(O|A)$/.test(string.substr(pos, 3)) || string.substr(pos, 4) === 'SIAN') {
      return ['S', isSlavoGermanic(string) ? 'S' : 'X', 3];
    }

    if (!pos && /^M|N|L|W$/.test(string.substr(pos + 1, 1)) || string.substr(pos + 1, 1) === 'Z') {
      return ['S', 'X', string.substr(pos + 1, 1) === 'Z' ? 2 : 1];
    }

    if (string.substr(pos, 2) === 'SC') {
      return LOOKUPS.SC(string, pos);
    }

    return [!(lastIndex === pos && /^(A|O)I$/.test(string.substr(pos - 2, 2))) ? 'S' : null, 'S', /^S|Z$/.test(string.substr(pos + 1, 1)) ? 2 : 1];
  },
  TH: function TH(string, pos) {
    if (/^(O|A)M$/.test(string.substr(pos + 2, 2)) || /^V(A|O)N /.test(string.substr(0, 4)) || string.substr(0, 3) === 'SCH') {
      return ['T', 'T', 2];
    }

    return ['0', 'T', 2];
  },
  T: function T(string, pos) {
    if (string.substr(pos, 4) === 'TION' || /^T(IA|CH)$/.test(string.substr(pos, 3))) {
      return ['X', 'X', 3];
    }

    if (string.substr(pos, 2) === 'TH' || string.substr(pos, 3) === 'TTH') {
      return LOOKUPS.TH(string, pos);
    }

    return ['T', 'T', /^T|D$/.test(string.substr(pos + 1, 1)) ? 2 : 1];
  },
  V: function V(string, pos) {
    return ['F', 'F', string.substr(pos + 1, 1) === 'V' ? 2 : 1];
  },
  W: function W(string, pos, lastIndex) {
    if (string.substr(pos, 2) === 'WR') {
      return ['R', 'R', 2];
    }

    var primary = [],
        secondary = [];

    if (!pos && isVowel(string.substr(pos + 1, 1) || string.substr(pos, 2) === 'WH')) {
      primary.push('A');
      secondary.push(isVowel(string.substr(pos + 1, 1)) ? 'F' : 'A');
    }

    if (pos === lastIndex && isVowel(string.substr(pos - 1, 1)) || string.substr(0, 3) === 'SCH' || /^EWSKI|EWSKY|OWSKI|OWSKY$/.test(string.substr(pos - 1, 5))) {
      return [primary, secondary.concat('F'), 1];
    }

    if (/^WI(C|T)Z$/.test(string.substr(pos, 4))) {
      return [primary.concat(['T', 'S']), secondary.concat(['F', 'X']), 4];
    }

    return [primary, secondary, 1];
  },
  X: function X(string, pos, lastIndex) {
    if (!pos) {
      return ['S', 'S', 1];
    }

    var offset = /^C|X$"/.test(string.substr(pos + 1, 1)) ? 2 : 1;

    if (pos === lastIndex && /^(I|E)AU$/.test(string.substr(pos - 3, 3)) || /^(A|O)U$/.test(string.substr(pos - 2, 2))) {
      return [null, null, offset];
    }

    return [['K', 'S'], ['K', 'S'], offset];
  },
  Z: function Z(string, pos) {
    if (string.substr(pos + 1, 1) === 'H') {
      return ['J', 'J', 2];
    }

    var offset = string.substr(pos + 1, 1) === 'Z' ? 2 : 1;

    if (/^Z(O|I|A)$/.test(string.substr(pos + 1, 2)) || pos && isSlavoGermanic(string) && string.substr(pos - 1, 1) === 'T') {
      return ['S', ['T', 'S'], offset];
    }

    return ['S', 'S', offset];
  }
};

/**
 * Function taking a single word and computing its double metaphone code.
 *
 * @param  {string}  word - The word to process.
 * @return {array}        - The double metaphone codes.
 *
 * @throws {Error} The function expects the word to be a string.
 */
function doubleMetaphone(word) {
  if (typeof word !== 'string') throw Error('talisman/phonetics/doubleMetaphone: the given word is not a string.');

  // Preparing the word
  var preparedWord = word.toUpperCase() + '     ';

  // Defining the start position & finding necessary indexes
  var startPosition = STARTING_REGEX.test(preparedWord.slice(0, 2)) ? 1 : 0,
      length = word.length,
      lastIndex = length - 1;

  // Codes
  var primary = [],
      secondary = [];

  // Iterating
  var pos = startPosition;

  while (true) {

    if (pos > length || primary.length >= 4 && secondary.length >= 4) break;

    // Lookup the current letter
    var letter = preparedWord[pos];

    var offset = 1;

    // Vowel lookup
    if (isVowel(letter)) {
      if (!pos) {
        primary.push('A');
        secondary.push('A');
      }
    }

    // Consonant lookup
    var method = LOOKUPS[letter];

    if (method) {
      var _method = method(preparedWord, pos, lastIndex, length),
          _method$ = _method[0],
          one = _method$ === undefined ? null : _method$,
          _method$2 = _method[1],
          two = _method$2 === undefined ? null : _method$2,
          _method$3 = _method[2],
          newOffset = _method$3 === undefined ? 1 : _method$3;

      offset = newOffset;

      if (one) primary = primary.concat(one);
      if (two) secondary = secondary.concat(two);
    }

    // Incrementing position
    pos += offset;
  }

  return [primary.join('').slice(0, 4), secondary.join('').slice(0, 4)];
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/phonetics/metaphone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = metaphone;

var _deburr = __webpack_require__("./node_modules/lodash/deburr.js");

var _deburr2 = _interopRequireDefault(_deburr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Series of rules to apply.
 */
var RULES = [[/([bcdfhjklmnpqrstvwxyz])\1+/g, '$1'], [/^ae/g, 'E'], [/^[gkp]n/g, 'N'], [/^wr/g, 'R'], [/^x/g, 'S'], [/^wh/g, 'W'], [/mb$/g, 'M'], [/(?!^)sch/g, 'SK'], [/th/g, '0'], [/t?ch|sh/g, 'X'], [/c(?=ia)/g, 'X'], [/[st](?=i[ao])/g, 'X'], [/s?c(?=[iey])/g, 'S'], [/[cq]/g, 'K'], [/dg(?=[iey])/g, 'J'], [/d/g, 'T'], [/g(?=h[^aeiou])/g, ''], [/gn(ed)?/g, 'N'], [/([^g]|^)g(?=[iey])/g, '$1J'], [/g+/g, 'K'], [/ph/g, 'F'], [/([aeiou])h(?=\b|[^aeiou])/g, '$1'], [/[wy](?![aeiou])/g, ''], [/z/g, 'S'], [/v/g, 'F'], [/(?!^)[aeiou]+/g, '']];

/**
 * Function taking a single word and computing its metaphone code.
 *
 * @param  {string}  word - The word to process.
 * @return {string}       - The metaphone code.
 *
 * @throws {Error} The function expects the word to be a string.
 */
/**
 * Talisman phonetics/metaphone
 * =============================
 *
 * The metaphone algorithm.
 *
 * [Reference]:
 * https://en.wikipedia.org/wiki/Metaphone
 *
 * [Author]:
 * Lawrence Philips, 1990
 */
function metaphone(word) {
  if (typeof word !== 'string') throw Error('talisman/phonetics/metaphone: the given word is not a string.');

  // Deburring the string & dropping any non-alphabetical character
  var code = (0, _deburr2.default)(word).toLowerCase().replace(/[^a-z]/g, '');

  // Applying the rules
  for (var i = 0, l = RULES.length; i < l; i++) {
    code = code.replace(RULES[i][0], RULES[i][1]);
  }return code.toUpperCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/regexp/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegexp = escapeRegexp;
exports.createFuzzyPattern = createFuzzyPattern;
/**
 * Talisman regexp
 * ================
 *
 * Some RegExp-related helpers.
 */

/**
 * Function escaping a string for insertion in a regular expression.
 *
 * @param  {string} string - The string to escape.
 * @return {string}        - The escaped string.
 */
var RE = /([|\\{}()[\]^$+*?.\-])/g;

function escapeRegexp(string) {
  return string.replace(RE, '\\$1');
}

/**
 * Function creating a fuzzy matching pattern from the given query.
 *
 * @param  {string} string - The string to escape.
 * @return {string}        - The created pattern.
 */
function createFuzzyPattern(query) {
  return query.split('').map(function (character) {
    return '(' + escapeRegexp(character) + ')';
  }).join('.*?');
}

/***/ }),

/***/ "./node_modules/talisman/stemmers/french/carry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = carry;
/**
 * Talisman stemmers/french/carry
 * ===============================
 *
 * The Carry stemmer for the French language.
 *
 * [Reference]:
 * http://www.otlet-institute.org/docs/Carry.pdf
 *
 * [Article]:
 * Carry, un algorithme de désuffixation pour le français. M. Paternostre,
 * P. Francq, J. Lamoral, D. Wartel et M. Saerens. 2002
 *
 * [Note]:
 * This algorithm has been edited to handle some more cases and is thus
 * lightly different from the original paper (modifications by Guillaume
 * Plique).
 */

/**
 * Constants.
 */
var VOWELS = 'aeiouyâàëéêèïîôûùœæ',
    V = '[' + VOWELS + ']',
    C = '[^' + VOWELS + ']';

var LC = new RegExp('^' + C + '+'),
    TV = new RegExp(V + '+$'),
    M = new RegExp('(' + V + '+' + C + '+)');

/**
 * Helpers.
 */
function computeM(string) {

  // Removing leading consonants
  string = string.replace(LC, '').replace(TV, '');

  return (string.match(M) || []).length;
}

/**
 * Rules.
 */
var STEP1 = [[0, 'issaient'], [0, 'ellement', 'el'], [0, 'issement'], [0, 'alement', 'al'], [0, 'eraient'], [0, 'iraient'], [0, 'eassent'], [0, 'ussent'], [0, 'amment'], [0, 'emment'], [0, 'issant'], [0, 'issent'], [0, 'assent'], [0, 'eaient'], [0, 'issait'], [0, 'èrent'], [0, 'erent'], [0, 'irent'], [0, 'erait'], [0, 'irait'], [0, 'iront'], [0, 'eront'], [0, 'ement'], [0, 'aient'], [0, 'îrent'], [0, 'eont'], [0, 'eant'], [0, 'eait'], [0, 'ient'], [0, 'ent'], [0, 'ont'], [0, 'ant'], [0, 'eât'], [0, 'ait'], [0, 'at'], [0, 'ât'], [0, 'it'], [0, 'ît'], [0, 't'], [0, 'uction'], [1, 'ication'], [1, 'iation'], [1, 'ation'], [0, 'ition'], [0, 'tion'], [1, 'ateur'], [1, 'teur'], [0, 'eur'], [0, 'ier'], [0, 'er'], [0, 'ir'], [0, 'r'], [0, 'eassiez'], [0, 'issiez'], [0, 'assiez'], [0, 'ussiez'], [0, 'issez'], [0, 'assez'], [0, 'eriez'], [0, 'iriez'], [0, 'erez'], [0, 'irez'], [0, 'iez'], [0, 'ez'], [0, 'erai'], [0, 'irai'], [0, 'eai'], [0, 'ai'], [0, 'i'], [0, 'ira'], [0, 'era'], [0, 'ea'], [0, 'a'], [0, 'f', 'v'], [0, 'yeux', 'oeil'], [0, 'eux'], [0, 'aux', 'al'], [0, 'x'], [0, 'issante'], [1, 'atrice'], // Added
[0, 'eresse'], [0, 'eante'], [0, 'easse'], [0, 'eure'], [0, 'esse'], [0, 'asse'], [0, 'ance'], [0, 'ence'], [0, 'aise'], [0, 'euse'], [0, 'oise', 'o'], [0, 'isse'], [0, 'ante'], [0, 'ouse', 'ou'], [0, 'ière'], [0, 'ete'], [0, 'ète'], [0, 'iere'], [0, 'aire'], [1, 'ure'], [0, 'erie'], [0, 'étude'], [0, 'etude'], [0, 'itude'], [0, 'ade'], [0, 'isme'], [0, 'age'], [0, 'trice'], [0, 'cque', 'c'], [0, 'que', 'c'], [0, 'eille', 'eil'], [0, 'elle'], [0, 'able'], [0, 'iste'], [0, 'ulle', 'ul'], [0, 'gue', 'g'], [0, 'ette'], [0, 'nne', 'n'], [0, 'itée'], [0, 'ité'], [0, 'té'], [0, 'ée'], [0, 'é'], [0, 'usse'], [0, 'aise'], [0, 'ate'], [0, 'ite'], [0, 'ee'], [0, 'e'], [0, 'issements'], [0, 'issantes'], [1, 'ications'], [0, 'eassions'], [0, 'eresses'], [0, 'issions'], [0, 'assions'], [1, 'atrices'], // Added
[1, 'iations'], [0, 'issants'], [0, 'ussions'], [0, 'ements'], [0, 'eantes'], [0, 'issons'], [0, 'assons'], [0, 'easses'], [0, 'études'], [0, 'etudes'], [0, 'itudes'], [0, 'issais'], [0, 'trices'], [0, 'eilles', 'eil'], [0, 'irions'], [0, 'erions'], [1, 'ateurs'], [1, 'ations'], [0, 'usses'], [0, 'tions'], [0, 'ances'], [0, 'entes'], [1, 'teurs'], [0, 'eants'], [0, 'ables'], [0, 'irons'], [0, 'irais'], [0, 'ences'], [0, 'ients'], [0, 'ieres'], [0, 'eures'], [0, 'aires'], [0, 'erons'], [0, 'esses'], [0, 'euses'], [0, 'ulles', 'ul'], [0, 'cques', 'c'], [0, 'elles'], [0, 'ables'], [0, 'istes'], [0, 'aises'], [0, 'asses'], [0, 'isses'], [0, 'oises', 'o'], [0, 'tions'], [0, 'ouses', 'ou'], [0, 'ières'], [0, 'eries'], [0, 'antes'], [0, 'ismes'], [0, 'erais'], [0, 'eâtes'], [0, 'eâmes'], [0, 'itées'], [0, 'ettes'], [0, 'ages'], [0, 'eurs'], [0, 'ents'], [0, 'ètes'], [0, 'etes'], [0, 'ions'], [0, 'ités'], [0, 'ites'], [0, 'ates'], [0, 'âtes'], [0, 'îtes'], [0, 'eurs'], [0, 'iers'], [0, 'iras'], [0, 'eras'], [1, 'ures'], [0, 'ants'], [0, 'îmes'], [0, 'ûmes'], [0, 'âmes'], [0, 'ades'], [0, 'eais'], [0, 'eons'], [0, 'ques', 'c'], [0, 'gues', 'g'], [0, 'nnes', 'n'], [0, 'ttes'], [0, 'îtes'], [0, 'tés'], [0, 'ons'], [0, 'ais'], [0, 'ées'], [0, 'ees'], [0, 'ats'], [0, 'eas'], [0, 'ts'], [0, 'rs'], [0, 'as'], [0, 'es'], [0, 'fs', 'v'], [0, 'és'], [0, 'is'], [0, 's'], [0, 'eau'], [0, 'au']];

var STEP2 = [[1, 'ation'], [1, 'ition'], [1, 'tion'], [1, 'ent'], [1, 'el'], [0, 'i']];

var STEP3 = [[0, 'll', 'l'], [0, 'mm', 'm'], [0, 'nn', 'n'], [0, 'pp', 'p'], [0, 'tt', 't'], [0, 'ss', 's'], [0, 'y'], [0, 't'], [0, 'qu', 'c']];

/**
 * Function used to apply a set of rules to the current stem.
 *
 * @param  {string} stem - Target stem.
 * @return {string}      - The resulting stem.
 */
function applyRules(rules, stem) {

  for (var i = 0, l = rules.length; i < l; i++) {
    var _rules$i = rules[i],
        min = _rules$i[0],
        pattern = _rules$i[1],
        _rules$i$ = _rules$i[2],
        replacement = _rules$i$ === undefined ? '' : _rules$i$;


    if (stem.slice(-pattern.length) === pattern) {
      var newStem = stem.slice(0, -pattern.length) + replacement,
          m = computeM(newStem);

      if (m <= min) continue;

      return newStem;
    }
  }

  return stem;
}

/**
 * Function stemming the given world using the Carry algorithm for the French
 * language.
 *
 * @param  {string} word - The word to stem.
 * @return {string}      - The resulting stem.
 */
function carry(word) {
  var stem = word.toLowerCase();

  stem = applyRules(STEP1, stem);
  stem = applyRules(STEP2, stem);
  stem = applyRules(STEP3, stem);

  return stem;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/tokenizers/fingerprint/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: false
});
exports.ngramsFingerprint = undefined;
exports.createTokenizer = createTokenizer;

var _deburr = __webpack_require__("./node_modules/lodash/deburr.js");

var _deburr2 = _interopRequireDefault(_deburr);

var _uniq = __webpack_require__("./node_modules/lodash/uniq.js");

var _uniq2 = _interopRequireDefault(_uniq);

var _ngrams = __webpack_require__("./node_modules/talisman/tokenizers/ngrams/index.js");

var _ngrams2 = _interopRequireDefault(_ngrams);

var _regexp = __webpack_require__("./node_modules/talisman/regexp/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constants.
 */
/* eslint no-control-regex: 0 */
/**
 * Talisman tokenizers/fingerprint
 * ================================
 *
 * Fingerprint tokenizer aiming at outputing meaningful sorted tokens for the
 * given string which can later be used for similarity measures.
 */
var WHITESPACE = /\s+/g,
    DIGITS = /\d/g,
    PUNCTUATION_CONTROL = new RegExp('[\\u2000-\\u206F\\u2E00-\\u2E7F\'!"#$%&()*+,\\-.\\/:;<=>?@\\[\\]^_`{|}~\\x00-\\x08\\x0A-\\x1F\\x7F]', 'g');

/**
 * Defaults.
 */
var DEFAULTS = {
  digits: true,
  minTokenSize: 1,
  ngrams: false,
  sort: true,
  split: null,
  stopwords: null
};

/**
 * Tokenizer function factory aiming at building the required function.
 *
 * @param  {object}   options        - Possible options:
 * @param  {boolean}    digits       - Whether to keep digits.
 * @param  {number}     minTokenSize - Minimum token size.
 * @param  {number}     ngrams       - Tokenize ngrams rather than words.
 * @param  {array}      split        - List of token-splitting characters.
 * @param  {array}      stopwords    - List of stopwords.
 * @return {function}                - The tokenizer function.
 */
function createTokenizer(options) {
  options = options || {};

  var ngramsTokenize = options.ngrams || DEFAULTS.ngrams,
      stripDigits = options.digits === false || !DEFAULTS.digits,
      minTokenSize = options.minTokenSize || DEFAULTS.minTokenSize,
      dontSort = options.sort === false;

  var stopwords = options.stopwords || DEFAULTS.stopwords;

  // Compiling stopwords
  if (stopwords) stopwords = new RegExp('(?:' + stopwords.map(function (word) {
    return '\\b' + (0, _regexp.escapeRegexp)(word) + '\\b';
  }).join('|') + ')', 'gi');

  var split = options.split || DEFAULTS.split;

  // Compiling split
  if (split) split = new RegExp('[' + (0, _regexp.escapeRegexp)(split.join('')) + ']', 'g');

  var sizeFilter = void 0;
  if (minTokenSize > 1) sizeFilter = new RegExp('\\b\\S{1,' + minTokenSize + '}\\b', 'g');

  // Returning the function
  return function (n, string) {

    if (!ngramsTokenize) string = n;

    //-- Splitting
    if (split) string = string.replace(split, ' ');

    //-- Stopwords
    if (stopwords) string = string.replace(stopwords, '');

    //-- Digits
    if (stripDigits) string = string.replace(DIGITS, '');

    //-- Case normalization
    string = string.toLowerCase();

    //-- Minimum token size
    if (sizeFilter) string = string.replace(sizeFilter, '');

    //-- Dropping punctuation & control characters
    string = string.replace(PUNCTUATION_CONTROL, '');

    //-- Deburring
    string = (0, _deburr2.default)(string);

    //-- Trimming
    string = string.trim();

    //-- Tokenizing
    var tokens = void 0;

    if (!ngramsTokenize) tokens = string.split(WHITESPACE);else tokens = (0, _ngrams2.default)(n, string.replace(WHITESPACE, ''));

    //-- Keeping only unique tokens
    tokens = (0, _uniq2.default)(tokens);

    //-- Sorting tokens
    if (!dontSort) tokens.sort();

    return tokens;
  };
}

exports.default = createTokenizer();
var ngramsFingerprint = exports.ngramsFingerprint = createTokenizer({ ngrams: true });
module.exports = exports['default'];
exports['default'].createTokenizer = exports.createTokenizer;
exports['default'].ngramsFingerprint = exports.ngramsFingerprint;

/***/ }),

/***/ "./node_modules/talisman/tokenizers/fingerprint/name.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nameFingerprint;

var _ = __webpack_require__("./node_modules/talisman/tokenizers/fingerprint/index.js");

var _helpers = __webpack_require__("./node_modules/talisman/helpers/index.js");

/**
 * Talisman tokenizers/fingerprint/name
 * =====================================
 *
 * Variant of the fingerprint tokenizer but with opinionated options and
 * transformations known to work better with occidental names.
 */
var RULES = [

// McCallister / MacCallister
[/\bmc(?=\w)/g, 'mac'], [/\b(ma?c\s+)(?=\w)/g, 'mac'],

// Lee / Li
[/\blee\b/g, 'li'],

// Moussorgski / Moussorgsky
[/ski\b/g, 'sky'],

// Van Hoff / Von Hoff
[/\bvan\b/g, 'von'],

// Doerk / Dörk
[/ö/g, 'oe'],

// Düring / Duering
[/ü/g, 'ue']];

var OPTIONS = {
  digits: false,
  split: ['-'],
  stopwords: [

  // Articles
  'the', 'le', 'la',

  // Title
  'dr', 'mgr', 'prof', 'md', 'phd', 'sir', 'lord',

  // Civility
  'mr', 'mrs', 'ms', 'mme', 'mlle', 'jr', 'junior', 'sr', 'senior']
};

var tokenizer = (0, _.createTokenizer)(OPTIONS);

/**
 * Function returning the fingerprint of the given name.
 *
 * @param  {string} name - Target name.
 * @param  {array}
 */
function nameFingerprint(name) {
  name = name.toLowerCase();

  // Applying rules
  for (var i = 0, l = RULES.length; i < l; i++) {
    name = name.replace(RULES[i][0], RULES[i][1]);
  }return tokenizer(name).map(_helpers.squeeze);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/talisman/tokenizers/ngrams/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: false
});
exports.default = ngrams;
/**
 * Talisman tokenizers/ngrams
 * ===========================
 *
 * Functions related to ngrams' computation.
 *
 * [Reference]: https://en.wikipedia.org/wiki/N-gram
 */

/**
 * Function taking a sequence and computing its ngrams.
 *
 * @param  {number}   n         - Nb of elements in the subsequence.
 * @param  {mixed}    sequence  - The sequence to process.
 * @return {array}              - The array of resulting ngrams.
 *
 * @throws {Error} The function expects a positive n > 0.
 */
function ngrams(n, sequence) {
  if (n < 1) throw Error('talisman/tokenizers/ngrams: first argument should be a positive integer > 0.');

  var isString = typeof sequence === 'string';

  var subsequences = [];

  for (var i = 0, l = sequence.length; i < l - n + 1; i++) {
    var subsequence = [];

    for (var j = 0; j < n; j++) {
      subsequence.push(sequence[i + j]);
    }subsequences.push(isString ? subsequence.join('') : subsequence);
  }

  return subsequences;
}

/**
 * Creating popular aliases.
 */
var bigrams = ngrams.bind(null, 2),
    trigrams = ngrams.bind(null, 3),
    quadrigrams = ngrams.bind(null, 4);

exports.bigrams = bigrams;
exports.trigrams = trigrams;
exports.quadrigrams = quadrigrams;
module.exports = exports['default'];
exports['default'].bigrams = exports.bigrams;
exports['default'].trigrams = exports.trigrams;
exports['default'].quadrigrams = exports.quadrigrams;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/definitions/clusterers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyCollision = __webpack_require__("./node_modules/talisman/clustering/record-linkage/key-collision.js");

var _keyCollision2 = _interopRequireDefault(_keyCollision);

var _naive = __webpack_require__("./node_modules/talisman/clustering/record-linkage/naive.js");

var _naive2 = _interopRequireDefault(_naive);

var _vpTree = __webpack_require__("./node_modules/talisman/clustering/record-linkage/vp-tree.js");

var _vpTree2 = _interopRequireDefault(_vpTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  keyCollision: {
    label: 'Key Collision',
    description: 'TODO: description',
    scalability: 'high',
    complexity: 'O(n)',
    shuffle: false,
    needMetric: false,
    build: function build(_ref) {
      var preprocessor = _ref.preprocessor;

      return function (items) {
        return (0, _keyCollision2.default)({ key: preprocessor }, items);
      };
    },
    estimate: function estimate(nb) {
      return nb;
    }
  },
  vpTree: {
    label: 'Vantage Point Tree',
    description: 'TODO: description',
    scalability: 'medium',
    complexity: 'O(n log(n))',
    shuffle: true,
    needMetric: true,
    trueMetrics: true,
    build: function build(_ref2) {
      var metric = _ref2.metric,
          radius = _ref2.radius;

      return function (items) {
        return (0, _vpTree2.default)({ distance: metric, radius: radius }, items);
      };
    },
    estimate: function estimate(nb) {
      return nb * Math.log2(nb);
    }
  },
  naive: {
    label: 'Naive',
    description: 'TODO: description',
    scalability: 'low',
    complexity: 'O(n²)',
    shuffle: false,
    needMetric: true,
    build: function build(_ref3) {
      var metric = _ref3.metric,
          radius = _ref3.radius;

      return function (items) {
        return (0, _naive2.default)({ distance: metric, radius: radius }, items);
      };
    },
    estimate: function estimate(nb) {
      return nb * (nb - 1) / 2;
    }
  }
}; /**
    * Takoyaki Clusterer Definitions
    * ===============================
    *
    * Definining the clustering methods that can be used by Takoyaki.
    */

/***/ }),

/***/ "./src/definitions/metrics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _levenshtein = __webpack_require__("./node_modules/talisman/metrics/distance/levenshtein.js");

var _levenshtein2 = _interopRequireDefault(_levenshtein);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  levenshtein: {
    label: 'Levenshtein distance',
    description: 'You know it...',
    build: function build() {
      return _levenshtein2.default;
    }
  }
}; /**
    * Takoyaki Metrics Definitions
    * =============================
    *
    * Definining the distance metrics that can be used by Takoyaki.
    */

/***/ }),

/***/ "./src/definitions/preprocessors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPreprocessorChain = buildPreprocessorChain;

var _fingerprint = __webpack_require__("./node_modules/talisman/keyers/fingerprint.js");

var _fingerprint2 = _interopRequireDefault(_fingerprint);

var _metaphone = __webpack_require__("./node_modules/talisman/phonetics/metaphone.js");

var _metaphone2 = _interopRequireDefault(_metaphone);

var _doubleMetaphone = __webpack_require__("./node_modules/talisman/phonetics/double-metaphone.js");

var _doubleMetaphone2 = _interopRequireDefault(_doubleMetaphone);

var _carry = __webpack_require__("./node_modules/talisman/stemmers/french/carry.js");

var _carry2 = _interopRequireDefault(_carry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Definitions
/**
 * Takoyaki Preprocessors Definitions
 * ===================================
 *
 * Definining the preprocessors that can be used by Takoyaki.
 */

// Normalizers
var preprocessors = {
  fingerprint: {
    label: 'String fingerprint',
    description: '\n      Computes the fingerprint of the given string by removing anything\n      superfluous to its meaning.<br><br>This includes trimming, lowercasing, dropping\n      punctation & control characters, splitting the string into word tokens,\n      dropping duplicate words, sorting the tokens alphabetically to finally\n      re-join them with spacing as well as dropping the accents.\n    ',
    category: 'normalizer',
    build: function build() {
      return _fingerprint2.default;
    }
  },
  metaphone: {
    label: 'Metaphone',
    description: 'Computes the metaphone code (i.e. symbolic phonetic representation) of the given string.',
    category: 'phonetics',
    tokenizer: true,
    build: function build() {
      return _metaphone2.default;
    }
  },
  doubleMetaphone: {
    label: 'Double Metaphone',
    description: '\n      An improvement of the original metaphone algorithm yielding two possible\n      encodings.<br><br>Note that it won\'t produce codes longer that 4 characters.\n    ',
    category: 'phonetics',
    build: function build() {
      return _doubleMetaphone2.default;
    }
  },
  carry: {
    label: 'Carry',
    description: 'Carry is a French version of the famous Porter stemmer.',
    category: 'stemmer',
    language: 'fr',
    build: function build() {
      return _carry2.default;
    }
  }
};

// Stemmers


// Phonetics
exports.default = preprocessors;

// Helper

function buildPreprocessorChain(list) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!list || !list.length) return function (x) {
    return x;
  };

  var fns = list.map(function (id) {
    var _preprocessors$id;

    return (_preprocessors$id = preprocessors[id]).build.apply(_preprocessors$id, args);
  });

  return function (value) {
    var _loop = function _loop(i, l) {
      if (Array.isArray(value)) value = value.map(function (v) {
        return fns[i](v);
      });else value = fns[i](value);
    };

    for (var i = 0, l = fns.length; i < l; i++) {
      _loop(i, l);
    }

    return value;
  };
}

/***/ }),

/***/ "./src/workers/clustering.worker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mnemonist_multi_map__ = __webpack_require__("./node_modules/mnemonist/multi-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mnemonist_multi_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mnemonist_multi_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pandemonium_shuffle_in_place__ = __webpack_require__("./node_modules/pandemonium/shuffle-in-place.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pandemonium_shuffle_in_place___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pandemonium_shuffle_in_place__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definitions_preprocessors__ = __webpack_require__("./src/definitions/preprocessors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definitions_preprocessors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__definitions_preprocessors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definitions_clusterers__ = __webpack_require__("./src/definitions/clusterers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__definitions_clusterers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__definitions_clusterers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definitions_metrics__ = __webpack_require__("./src/definitions/metrics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definitions_metrics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__definitions_metrics__);
/**
 * Takoyaki Clusterer Worker
 * ==========================
 *
 * WebWorker designed to run the cluster computations without freezing the UI.
 */






/**
 * Helpers.
 */
function clusterComparator(a, b) {
  if (a.rows.length > b.rows.length)
    return -1;
  else if (a.rows.length < b.rows.length)
    return 1;
  return 0;
}

/**
 * Process outline.
 */
function performClustering(values, recipe) {
  const clustererDefinition = __WEBPACK_IMPORTED_MODULE_3__definitions_clusterers___default.a[recipe.clusterer],
        metricDefinition = __WEBPACK_IMPORTED_MODULE_4__definitions_metrics___default.a[recipe.metric];

  //-- 1) Preprocessing & mapping unique values
  const metric = metricDefinition && metricDefinition.build();

  let preprocessor;

  if (recipe.preprocessor)
    preprocessor = Object(__WEBPACK_IMPORTED_MODULE_2__definitions_preprocessors__["buildPreprocessorChain"])(recipe.preprocessor);

  const map = new __WEBPACK_IMPORTED_MODULE_0_mnemonist_multi_map___default.a();

  for (let i = 0, l = values.length; i < l; i++)
    map.set(values[i], i);

  //-- 2) Retrieving & shuffling values
  const items = [...map.keys()];

  if (clustererDefinition.shuffle)
    __WEBPACK_IMPORTED_MODULE_1_pandemonium_shuffle_in_place___default()(items);

  //-- 3) Building clusterer & computing the clusters
  const clusterer = clustererDefinition.build({
    metric,
    preprocessor,
    radius: 2
  });

  const clusters = clusterer(items);

  //-- 4) Expanding clusters to rows
  const expandedClusters = new Array(clusters.length);

  for (let i = 0, l = clusters.length; i < l; i++) {
    const cluster = clusters[i],
          groups = [];

    let totalNbRows = 0;

    for (let j = 0, m = cluster.length; j < m; j++) {
      const rows = map.get(cluster[j]);

      groups.push({
        value: cluster[j],
        rows
      });

      totalNbRows += rows.length;
    }

    expandedClusters[i] = {
      key: i,
      groups: groups.sort(clusterComparator),
      nbRows: totalNbRows,
      harmonized: false,
      harmonizedValue: groups[0].value
    };
  }

  return expandedClusters;
}

/**
 * Message listener.
 */
function onMessage(data) {
  const values = data.values,
        recipe = data.recipe;

  const clusters = performClustering(values, recipe);

  return self.postMessage({clusters});
}

/**
 * Listening.
 */
self.addEventListener('message', e => onMessage(e.data));


/***/ })

/******/ });