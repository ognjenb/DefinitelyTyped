// Type definitions for Lo-Dash
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>, Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var _: _.LoDashStatic;

declare module _ {
    interface LoDashStatic {
        /**
        * Creates a lodash object which wraps the given value to enable intuitive method chaining.
        *
        * In addition to Lo-Dash methods, wrappers also have the following Array methods:
        * concat, join, pop, push, reverse, shift, slice, sort, splice, and unshift
        *
        * Chaining is supported in custom builds as long as the value method is implicitly or
        * explicitly included in the build.
        *
        * The chainable wrapper functions are:
        * after, assign, bind, bindAll, bindKey, chain, chunk, compact, compose, concat, countBy,
        * createCallback, curry, debounce, defaults, defer, delay, difference, filter, flatten,
        * forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, functions, groupBy,
        * indexBy, initial, intersection, invert, invoke, keys, map, max, memoize, merge, min,
        * object, omit, once, pairs, partial, partialRight, pick, pluck, pull, push, range, reject,
        * remove, rest, reverse, sample, shuffle, slice, sort, sortBy, splice, tap, throttle, times,
        * toArray, transform, union, uniq, unshift, unzip, values, where, without, wrap, and zip
        *
        * The non-chainable wrapper functions are:
        * clone, cloneDeep, contains, escape, every, find, findIndex, findKey, findLast,
        * findLastIndex, findLastKey, has, identity, indexOf, isArguments, isArray, isBoolean,
        * isDate, isElement, isEmpty, isEqual, isFinite, isFunction, isNaN, isNull, isNumber,
        * isObject, isPlainObject, isRegExp, isString, isUndefined, join, lastIndexOf, mixin,
        * noConflict, parseInt, pop, random, reduce, reduceRight, result, shift, size, some,
        * sortedIndex, runInContext, template, unescape, uniqueId, and value
        *
        * The wrapper functions first and last return wrapped values when n is provided, otherwise
        * they return unwrapped values.
        *
        * Explicit chaining can be enabled by using the _.chain method.
        **/
        (value: number): LoDashWrapper<number>;
        (value: string): LoDashStringWrapper;
        (value: boolean): LoDashWrapper<boolean>;
        (value: Array<number>): LoDashNumberArrayWrapper;
        <T>(value: Array<T>): LoDashArrayWrapper<T>;
        <T extends {}>(value: T): LoDashObjectWrapper<T>;
        (value: any): LoDashWrapper<any>;

        /**
        * The semantic version number.
        **/
        VERSION: string;

        /**
        * An object used to flag environments features.
        **/
        support: Support;

        /**
        * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
        * (ERB). Change the following template settings to use alternative delimiters.
        **/
        templateSettings: TemplateSettings;
    }

    /**
    * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby
    * (ERB). Change the following template settings to use alternative delimiters.
    **/
    interface TemplateSettings {
        /**
        * The "escape" delimiter.
        **/
        escape?: RegExp;

        /**
        * The "evaluate" delimiter.
        **/
        evaluate?: RegExp;

        /**
        * An object to import into the template as local variables.
        **/
        imports?: Dictionary<any>;

        /**
        * The "interpolate" delimiter.
        **/
        interpolate?: RegExp;

        /**
        * Used to reference the data object in the template text.
        **/
        variable?: string;
    }

    /**
     * Creates a cache object to store key/value pairs.
     */
    interface MapCache {
        /**
         * Removes `key` and its value from the cache.
         * @param key The key of the value to remove.
         * @return Returns `true` if the entry was removed successfully, else `false`.
         */
        delete(key: string): boolean;

        /**
         * Gets the cached value for `key`.
         * @param key The key of the value to get.
         * @return Returns the cached value.
         */
        get(key: string): any;

        /**
         * Checks if a cached value for `key` exists.
         * @param key The key of the entry to check.
         * @return Returns `true` if an entry for `key` exists, else `false`.
         */
        has(key: string): boolean;

        /**
         * Sets `value` to `key` of the cache.
         * @param key The key of the value to cache.
         * @param value The value to cache.
         * @return Returns the cache object.
         */
        set(key: string, value: any): _.Dictionary<any>;
    }

    /**
    * An object used to flag environments features.
    **/
    interface Support {
        /**
        * Detect if an arguments object's [[Class]] is resolvable (all but Firefox < 4, IE < 9).
        **/
        argsClass: boolean;

        /**
        * Detect if arguments objects are Object objects (all but Narwhal and Opera < 10.5).
        **/
        argsObject: boolean;

        /**
        * Detect if name or message properties of Error.prototype are enumerable by default.
        * (IE < 9, Safari < 5.1)
        **/
        enumErrorProps: boolean;

        /**
        * Detect if prototype properties are enumerable by default.
        *
        * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1 (if the prototype or a property on the
        * prototype has been set) incorrectly set the [[Enumerable]] value of a function’s prototype property to true.
        **/
        enumPrototypes: boolean;

        /**
        * Detect if Function#bind exists and is inferred to be fast (all but V8).
        **/
        fastBind: boolean;

        /**
        * Detect if functions can be decompiled by Function#toString (all but PS3 and older Opera
        * mobile browsers & avoided in Windows 8 apps).
        **/
        funcDecomp: boolean;

        /**
        * Detect if Function#name is supported (all but IE).
        **/
        funcNames: boolean;

        /**
        * Detect if arguments object indexes are non-enumerable (Firefox < 4, IE < 9, PhantomJS,
        * Safari < 5.1).
        **/
        nonEnumArgs: boolean;

        /**
        * Detect if properties shadowing those on Object.prototype are non-enumerable.
        *
        * In IE < 9 an objects own properties, shadowing non-enumerable ones, are made
        * non-enumerable as well (a.k.a the JScript [[DontEnum]] bug).
        **/
        nonEnumShadows: boolean;

        /**
        * Detect if own properties are iterated after inherited properties (all but IE < 9).
        **/
        ownLast: boolean;

        /**
        * Detect if Array#shift and Array#splice augment array-like objects correctly.
        *
        * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array shift() and splice()
        * functions that fail to remove the last element, value[0], of array-like objects even
        * though the length property is set to 0. The shift() method is buggy in IE 8 compatibility
        * mode, while splice() is buggy regardless of mode in IE < 9 and buggy in compatibility mode
        * in IE 9.
        **/
        spliceObjects: boolean;

        /**
        * Detect lack of support for accessing string characters by index.
        *
        * IE < 8 can't access characters by index and IE 8 can only access characters by index on
        * string literals.
        **/
        unindexedChars: boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
        * Produces the toString result of the wrapped value.
        * @return Returns the string result.
        **/
        toString(): string;

        /**
        * Executes the chained sequence to extract the unwrapped value.
        * @return Returns the resolved unwrapped value.
        **/
        value(): T;

        /**
        * @see _.value
        **/
        run(): T;

        /**
        * @see _.value
        **/
        toJSON(): T;

        /**
        * @see _.value
        **/
        valueOf(): T;
    }

    interface LoDashWrapper<T> extends LoDashWrapperBase<T, LoDashWrapper<T>> { }

    interface LoDashStringWrapper extends LoDashWrapper<string> { }

    interface LoDashObjectWrapper<T> extends LoDashWrapperBase<T, LoDashObjectWrapper<T>> { }

    interface LoDashArrayWrapper<T> extends LoDashWrapperBase<T[], LoDashArrayWrapper<T>> {
        concat(...items: Array<T|Array<T>>): LoDashArrayWrapper<T>;
        join(seperator?: string): string;
        pop(): T;
        push(...items: T[]): LoDashArrayWrapper<T>;
        reverse(): LoDashArrayWrapper<T>;
        shift(): T;
        sort(compareFn?: (a: T, b: T) => number): LoDashArrayWrapper<T>;
        splice(start: number): LoDashArrayWrapper<T>;
        splice(start: number, deleteCount: number, ...items: any[]): LoDashArrayWrapper<T>;
        unshift(...items: T[]): LoDashArrayWrapper<T>;
    }

    interface LoDashNumberArrayWrapper extends LoDashArrayWrapper<number> { }

    //_.chain
    interface LoDashStatic {
        /**
        * Creates a lodash object that wraps the given value with explicit method chaining enabled.
        * @param value The value to wrap.
        * @return The wrapper object.
        **/
        chain(value: number): LoDashWrapper<number>;
        chain(value: string): LoDashWrapper<string>;
        chain(value: boolean): LoDashWrapper<boolean>;
        chain<T>(value: Array<T>): LoDashArrayWrapper<T>;
        chain<T extends {}>(value: T): LoDashObjectWrapper<T>;
        chain(value: any): LoDashWrapper<any>;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
        * Enables explicit method chaining on the wrapper object.
        * @see _.chain
        * @return The wrapper object.
        **/
        chain(): TWrapper;
    }

    //_.tap
    interface LoDashStatic {
        /**
        * Invokes interceptor with the value as the first argument and then returns value. The
        * purpose of this method is to "tap into" a method chain in order to perform operations on
        * intermediate results within the chain.
        * @param value The value to provide to interceptor
        * @param interceptor The function to invoke.
        * @return value
        **/
        tap<T>(
            value: T,
            interceptor: (value: T) => void): T;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
        * @see _.tap
        **/
        tap(interceptor: (value: T) => void): TWrapper;
    }

    /*********
     * Array *
     *********/

    //_.chunk
    interface LoDashStatic {
        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(
            array: List<T>,
            size?: number
        ): T[][];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): LoDashArrayWrapper<T[]>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.chunk
         */
        chunk<TResult>(size?: number): LoDashArrayWrapper<TResult[]>;
    }

    //_.compact
    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return (Array) Returns the new array of filtered values.
         */
        compact<T>(array?: List<T>): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.compact
         */
        compact(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.compact
         */
        compact<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.difference
    interface LoDashStatic {
        /**
         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        difference<T>(
            array: T[]|List<T>,
            ...values: (T[]|List<T>)[]
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.difference
         */
        difference(...values: (T[]|List<T>)[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.difference
         */
        difference<TValue>(...values: (TValue[]|List<TValue>)[]): LoDashArrayWrapper<TValue>;
    }

    //_.drop
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: T[]|List<T>, n?: number): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.drop
         */
        drop<TResult>(n?: number): LoDashArrayWrapper<TResult>;
    }

    //_.dropRight
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        dropRight<T>(
            array: List<T>,
            n?: number
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.dropRight
         */
        dropRight<TResult>(n?: number): LoDashArrayWrapper<TResult>;
    }

    //_.dropRightWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
         * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * match the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        dropRightWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashArrayWrapper<TValue>;
    }

    //_.dropWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
         * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        dropWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere>(
            predicate?: TWhere
        ): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.dropWhile
         */
        dropWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashArrayWrapper<TValue>;
    }

    //_.findIndex
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W, T>(
            array: List<T>,
            predicate?: W
        ): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.findIndex
         */
        findIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findIndex
         */
        findIndex<W>(
            predicate?: W
        ): number;
    }

    //_.findLastIndex
    interface LoDashStatic {
        /**
         * This method is like _.findIndex except that it iterates over elements of collection from right to left.
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The function invoked per iteration.
         * @return Returns the index of the found element, else -1.
         */
        findLastIndex<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W, T>(
            array: List<T>,
            predicate?: W
        ): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex(
            predicate?: string,
            thisArg?: any
        ): number;

        /**
         * @see _.findLastIndex
         */
        findLastIndex<W>(
            predicate?: W
        ): number;
    }

    //_.first
    interface LoDashStatic {
        /**
         * Gets the first element of array.
         *
         * @alias _.head
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        first<T>(array: List<T>): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.first
         */
        first(): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.first
         */
        first<TResult>(): TResult;
    }

    interface MaybeNestedList<T> extends List<T|List<T>> { }
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> { }
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> { }
    interface RecursiveList<T> extends List<T|RecursiveList<T>> { }

    //_.flatten
    interface LoDashStatic {
        /**
         * Flattens a nested array a single level.
         *
         * _.flatten(x) is equivalent to _.flatten(x, false);
         *
         * @param array The array to flatten.
         * @return `array` flattened.
         **/
        flatten<T>(array: MaybeNestedList<T>): T[];

        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it is only
         * flattened a single level.
         *
         * If you know whether or not this should be recursively at compile time, you typically want to use a
         * version without a boolean parameter (i.e. `_.flatten(x)` or `_.flattenDeep(x)`).
         *
         * @param array The array to flatten.
         * @param deep Specify a deep flatten.
         * @return `array` flattened.
         **/
        flatten<T>(array: RecursiveList<T>, isDeep: boolean): List<T> | RecursiveList<T>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.flatten
         **/
        flatten<T>(): LoDashArrayWrapper<any>;

        /**
         * @see _.flatten
         **/
        flatten<T>(isShallow: boolean): LoDashArrayWrapper<any>;
    }

    //_.flattenDeep
    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: RecursiveArray<T>): T[];

        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T>): T[];

        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(array: RecursiveList<T>): any[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<TResult>(): LoDashArrayWrapper<TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.head
    interface LoDashStatic {
        /**
         * @see _.first
         */
        head<T>(array: List<T>): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.first
         */
        head(): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.first
         */
        head<TResult>(): TResult;
    }

    //_.indexOf
    interface LoDashStatic {
        /**
         * Gets the index at which the first occurrence of value is found in array using SameValueZero for equality
         * comparisons. If fromIndex is negative, it’s used as the offset from the end of array. If array is sorted
         * providing true for fromIndex performs a faster binary search.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return The index to search from or true to perform a binary search on a sorted array.
         */
        indexOf<T>(
            array: List<T>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf(
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.indexOf
         */
        indexOf<TValue>(
            value: TValue,
            fromIndex?: boolean|number
        ): number;
    }

    //_.initial
    interface LoDashStatic {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: T[]|List<T>): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.initial
         */
        initial(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.initial
         */
        initial<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.intersection
    interface LoDashStatic {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: (T[]|List<T>)[]): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashArrayWrapper<TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.intersection
         */
        intersection<TResult>(...arrays: (TResult[]|List<TResult>)[]): LoDashArrayWrapper<TResult>;
    }

    //_.last
    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T>): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.last
         */
        last(): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.last
         */
        last<T>(): T;
    }

    //_.lastIndexOf
    interface LoDashStatic {
        /**
         * This method is like _.indexOf except that it iterates over elements of array from right to left.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return Returns the index of the matched value, else -1.
         */
        lastIndexOf<T>(
            array: List<T>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf<TResult>(
            value: TResult,
            fromIndex?: boolean|number
        ): number;
    }

    //_.object
    interface LoDashStatic {
        /**
         * @see _.zipObject
         */
        object<TValues, TResult extends {}>(
            props: List<StringRepresentable>,
            values?: List<TValues>
        ): TResult;

        /**
         * @see _.zipObject
         */
        object<TResult extends {}>(
            props: List<StringRepresentable>,
            values?: List<any>
        ): TResult;

        /**
         * @see _.zipObject
         */
        object(
            props: List<StringRepresentable>,
            values?: List<any>
        ): _.Dictionary<any>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.zipObject
         */
        object<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        object<TResult extends {}>(
            values?: List<any>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        object(
            values?: List<any>
        ): _.LoDashObjectWrapper<_.Dictionary<any>>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.zipObject
         */
        object<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        object<TResult extends {}>(
            values?: List<any>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        object(
            values?: List<any>
        ): _.LoDashObjectWrapper<_.Dictionary<any>>;
    }

    //_.pull
    interface LoDashStatic {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(
            array: T[],
            ...values: T[]
        ): T[];

        /**
         * @see _.pull
         */
        pull<T>(
            array: List<T>,
            ...values: T[]
        ): List<T>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.pull
         */
        pull<TValue>(...values: TValue[]): LoDashObjectWrapper<List<TValue>>;
    }

    //_.pullAt
    interface LoDashStatic {
        /**
         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
         * Indexes may be specified as an array of indexes or as individual arguments.
         *
         * Note: Unlike _.at, this method mutates array.
         *
         * @param array The array to modify.
         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
         * @return Returns the new array of removed elements.
         */
        pullAt<T>(
            array: T[]|List<T>,
            ...indexes: (number|number[])[]
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: (number|number[])[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.pullAt
         */
        pullAt<TValue>(...indexes: (number|number[])[]): LoDashArrayWrapper<TValue>;
    }

    //_.remove
    interface LoDashStatic {
        /**
         * Removes all elements from array that predicate returns truthy for and returns an array of the removed
         * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * Note: Unlike _.filter, this method mutates array.
         *
         * @param array The array to modify.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new array of removed elements.
         */
        remove<T>(
            array: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T[];

        /**
         * @see _.remove
         */
        remove<T>(
            array: List<T>,
            predicate?: string,
            thisArg?: any
        ): T[];

        /**
         * @see _.remove
         */
        remove<W, T>(
            array: List<T>,
            predicate?: W
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.remove
         */
        remove(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.remove
         */
        remove<W>(
            predicate?: W
        ): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: ListIterator<TResult, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<TResult>(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.remove
         */
        remove<W, TResult>(
            predicate?: W
        ): LoDashArrayWrapper<TResult>;
    }

    //_.rest
    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @alias _.tail
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        rest<T>(array: List<T>): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.rest
         */
        rest(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.rest
         */
        rest<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.slice
    interface LoDashStatic {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        slice<T>(
            array: T[],
            start?: number,
            end?: number
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.slice
         */
        slice(
            start?: number,
            end?: number
        ): LoDashArrayWrapper<T>;
    }

    //_.sortedIndex
    interface LoDashStatic {
        /**
        * Uses a binary search to determine the smallest index at which a value should be inserted
        * into a given sorted array in order to maintain the sort order of the array. If a callback
        * is provided it will be executed for value and each element of array to compute their sort
        * ranking. The callback is bound to thisArg and invoked with one argument; (value).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false.
        * @param array The sorted list.
        * @param value The value to determine its index within `list`.
        * @param callback Iterator to compute the sort ranking of each value, optional.
        * @return The index at which value should be inserted into array.
        **/
        sortedIndex<T, TSort>(
            array: Array<T>,
            value: T,
            callback?: (x: T) => TSort,
            thisArg?: any): number;

        /**
        * @see _.sortedIndex
        **/
        sortedIndex<T, TSort>(
            array: List<T>,
            value: T,
            callback?: (x: T) => TSort,
            thisArg?: any): number;

        /**
        * @see _.sortedIndex
        * @param pluckValue the _.pluck style callback
        **/
        sortedIndex<T>(
            array: Array<T>,
            value: T,
            pluckValue: string): number;

        /**
        * @see _.sortedIndex
        * @param pluckValue the _.pluck style callback
        **/
        sortedIndex<T>(
            array: List<T>,
            value: T,
            pluckValue: string): number;

        /**
        * @see _.sortedIndex
        * @param pluckValue the _.where style callback
        **/
        sortedIndex<W, T>(
            array: Array<T>,
            value: T,
            whereValue: W): number;

        /**
        * @see _.sortedIndex
        * @param pluckValue the _.where style callback
        **/
        sortedIndex<W, T>(
            array: List<T>,
            value: T,
            whereValue: W): number;
    }

    //_.tail
    interface LoDashStatic {
        /**
         * @see _.rest
         */
        tail<T>(array: List<T>): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.rest
         */
        tail(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.rest
         */
        tail<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.take
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        take<T>(
            array: List<T>,
            n?: number
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.take
         */
        take(n?: number): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.take
         */
        take<TResult>(n?: number): LoDashArrayWrapper<TResult>;
    }

    //_.takeRight
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        takeRight<T>(
            array: T[]|List<T>,
            n?: number
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.takeRight
         */
        takeRight<TResult>(n?: number): LoDashArrayWrapper<TResult>;
    }

    //_.takeRightWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        takeRightWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere>(
            predicate?: TWhere
        ): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashArrayWrapper<TValue>;
    }

    //_.takeWhile
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        takeWhile<TValue>(
            array: List<TValue>,
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            array: List<TValue>,
            predicate?: string,
            thisArg?: any
        ): TValue[];

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere, TValue>(
            array: List<TValue>,
            predicate?: TWhere
        ): TValue[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<T>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere>(
            predicate?: TWhere
        ): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: ListIterator<TValue, boolean>,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TValue>(
            predicate?: string,
            thisArg?: any
        ): LoDashArrayWrapper<TValue>;

        /**
         * @see _.takeWhile
         */
        takeWhile<TWhere, TValue>(
            predicate?: TWhere
        ): LoDashArrayWrapper<TValue>;
    }

    //_.union
    interface LoDashStatic {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        union<T>(...arrays: List<T>[]): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.union
         */
        union(...arrays: List<T>[]): LoDashArrayWrapper<T>;

        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.union
         */
        union<T>(...arrays: List<T>[]): LoDashArrayWrapper<T>;
    }

    //_.uniq
    interface LoDashStatic {
        /**
        * Creates a duplicate-value-free version of an array using strict equality for comparisons,
        * i.e. ===. If the array is sorted, providing true for isSorted will use a faster algorithm.
        * If a callback is provided each element of array is passed through the callback before
        * uniqueness is computed. The callback is bound to thisArg and invoked with three arguments;
        * (value, index, array).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false.
        * @param array Array to remove duplicates from.
        * @param isSorted True if `array` is already sorted, optiona, default = false.
        * @param iterator Transform the elements of `array` before comparisons for uniqueness.
        * @param context 'this' object in `iterator`, optional.
        * @return Copy of `array` where all elements are unique.
        **/
        uniq<T, TSort>(array: Array<T>, isSorted?: boolean): T[];

        /**
        * @see _.uniq
        **/
        uniq<T, TSort>(array: List<T>, isSorted?: boolean): T[];

        /**
        * @see _.uniq
        **/
        uniq<T, TSort>(
            array: Array<T>,
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        uniq<T, TSort>(
            array: List<T>,
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        uniq<T, TSort>(
            array: Array<T>,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        uniq<T, TSort>(
            array: List<T>,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq<T>(
            array: Array<T>,
            isSorted: boolean,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq<T>(
            array: List<T>,
            isSorted: boolean,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq<T>(
            array: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq<T>(
            array: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W, T>(
            array: Array<T>,
            isSorted: boolean,
            whereValue: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W, T>(
            array: List<T>,
            isSorted: boolean,
            whereValue: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W, T>(
            array: Array<T>,
            whereValue: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W, T>(
            array: List<T>,
            whereValue: W): T[];

        /**
        * @see _.uniq
        **/
        unique<T>(array: Array<T>, isSorted?: boolean): T[];

        /**
        * @see _.uniq
        **/
        unique<T>(array: List<T>, isSorted?: boolean): T[];

        /**
        * @see _.uniq
        **/
        unique<T, TSort>(
            array: Array<T>,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        unique<T, TSort>(
            array: List<T>,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        unique<T, TSort>(
            array: Array<T>,
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        **/
        unique<T, TSort>(
            array: List<T>,
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique<T>(
            array: Array<T>,
            isSorted: boolean,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique<T>(
            array: List<T>,
            isSorted: boolean,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique<T>(
            array: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique<T>(
            array: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W, T>(
            array: Array<T>,
            whereValue?: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W, T>(
            array: List<T>,
            whereValue?: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W, T>(
            array: Array<T>,
            isSorted: boolean,
            whereValue?: W): T[];

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W, T>(
            array: List<T>,
            isSorted: boolean,
            whereValue?: W): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.uniq
        **/
        uniq<TSort>(isSorted?: boolean): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        **/
        uniq<TSort>(
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        **/
        uniq<TSort>(
            callback: ListIterator<T, TSort>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq(
            isSorted: boolean,
            pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        uniq(pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W>(
            isSorted: boolean,
            whereValue: W): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        uniq<W>(
            whereValue: W): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        **/
        unique<TSort>(isSorted?: boolean): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        **/
        unique<TSort>(
            isSorted: boolean,
            callback: ListIterator<T, TSort>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        **/
        unique<TSort>(
            callback: ListIterator<T, TSort>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique(
            isSorted: boolean,
            pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param pluckValue _.pluck style callback
        **/
        unique(pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W>(
            isSorted: boolean,
            whereValue: W): LoDashArrayWrapper<T>;

        /**
        * @see _.uniq
        * @param whereValue _.where style callback
        **/
        unique<W>(
            whereValue: W): LoDashArrayWrapper<T>;
    }

    //_.unzipWith
    interface LoDashStatic {
        /**
         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         *
         * @param array The array of grouped elements to process.
         * @param iteratee The function to combine regrouped values.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new array of regrouped elements.
         */
        unzipWith<TArray, TResult>(
            array: List<List<TArray>>,
            iteratee?: MemoIterator<TArray, TResult>,
            thisArg?: any
        ): TResult[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TArr, TResult>(
            iteratee?: MemoIterator<TArr, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TArr, TResult>(
            iteratee?: MemoIterator<TArr, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;
    }

    //_.without
    interface LoDashStatic {
        /**
         * Creates an array excluding all provided values using SameValueZero for equality comparisons.
         *
         * @param array The array to filter.
         * @param values The values to exclude.
         * @return Returns the new array of filtered values.
         */
        without<T>(
            array: T[]|List<T>,
            ...values: T[]
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.without
         */
        without<TValue>(...values: TValue[]): LoDashArrayWrapper<TValue>;
    }

    //_.xor
    interface LoDashStatic {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: List<T>[]): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: List<T>[]): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.xor
         */
        xor<TValue>(...arrays: List<TValue>[]): LoDashArrayWrapper<TValue>;
    }

    //_.zip
    interface LoDashStatic {
        /**
        * Creates an array of grouped elements, the first of which contains the first
        * elements of the given arrays, the second of which contains the second elements
        * of the given arrays, and so on.
        * @param arrays Arrays to process.
        * @return A new array of grouped elements.
        **/
        zip(...arrays: any[][]): any[][];

        /**
        * @see _.zip
        **/
        zip(...arrays: any[]): any[];

        /**
        * @see _.zip
        **/
        unzip(...arrays: any[][]): any[][];

        /**
        * @see _.zip
        **/
        unzip(...arrays: any[]): any[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.zip
        **/
        zip(...arrays: any[][]): _.LoDashArrayWrapper<any[][]>;

        /**
        * @see _.zip
        **/
        unzip(...arrays: any[]): _.LoDashArrayWrapper<any[][]>;
    }

    //_.zipObject
    interface LoDashStatic {
        /**
         * The inverse of _.pairs; this method returns an object composed from arrays of property names and values.
         * Provide either a single two dimensional array, e.g. [[key1, value1], [key2, value2]] or two arrays, one of
         * property names and one of corresponding values.
         *
         * @alias _.object
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<TValues, TResult extends {}>(
            props: List<StringRepresentable>,
            values?: List<TValues>
        ): TResult;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            props: List<StringRepresentable>,
            values?: List<any>
        ): TResult;

        /**
         * @see _.zipObject
         */
        zipObject(
            props: List<StringRepresentable>,
            values?: List<any>
        ): _.Dictionary<any>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashObjectWrapper<_.Dictionary<any>>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.zipObject
         */
        zipObject<TValues, TResult extends {}>(
            values?: List<TValues>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject<TResult extends {}>(
            values?: List<any>
        ): _.LoDashObjectWrapper<TResult>;

        /**
         * @see _.zipObject
         */
        zipObject(
            values?: List<any>
        ): _.LoDashObjectWrapper<_.Dictionary<any>>;
    }

    //_.zipWith
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param {...Array} [arrays] The arrays to process.
         * @param {Function} [iteratee] The function to combine grouped values.
         * @param {*} [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        zipWith<TResult>(...args: any[]): TResult[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...args: any[]): LoDashArrayWrapper<TResult>;
    }

    /*********
     * Chain *
     *********/

    //_.thru
    interface LoDashStatic {
        /**
         * This method is like _.tap except that it returns the result of interceptor.
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @param thisArg The this binding of interceptor.
         * @return Returns the result of interceptor.
         */
        thru<T, TResult>(
            value: T,
            interceptor: (value: T) => TResult,
            thisArg?: any): TResult;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.thru
         */
        thru<TResult extends number>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends string>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends boolean>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult extends Object>(
            interceptor: (value: T) => TResult,
            thisArg?: any): LoDashObjectWrapper<TResult>;

        /**
         * @see _.thru
         */
        thru<TResult>(
            interceptor: (value: T) => TResult[],
            thisArg?: any): LoDashArrayWrapper<TResult>;
    }

    // _.prototype.commit
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * Executes the chained sequence and returns the wrapped result.
         *
         * @return Returns the new lodash wrapper instance.
         */
        commit(): TWrapper;
    }

    //_.prototype.plant
    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * Creates a clone of the chained sequence planting value as the wrapped value.
         * @param value The value to plant as the wrapped value.
         * @return Returns the new lodash wrapper instance.
         */
        plant(value: number): LoDashWrapper<number>;

        /**
         * @see _.plant
         */
        plant(value: string): LoDashStringWrapper;

        /**
         * @see _.plant
         */
        plant(value: boolean): LoDashWrapper<boolean>;

        /**
         * @see _.plant
         */
        plant(value: number[]): LoDashNumberArrayWrapper;

        /**
         * @see _.plant
         */
        plant<T>(value: T[]): LoDashArrayWrapper<T>;

        /**
         * @see _.plant
         */
        plant<T extends {}>(value: T): LoDashObjectWrapper<T>;

        /**
         * @see _.plant
         */
        plant(value: any): LoDashWrapper<any>;
    }

    /**************
     * Collection *
     **************/

    //_.all
    interface LoDashStatic {
        /**
         * @see _.every
         */
        all<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.every
         */
        all(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.every
         */
        all<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        all<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    //_.any
    interface LoDashStatic {
        /**
         * @see _.some
         */
        any<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.some
         */
        any(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.some
         */
        any<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        any<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    //_.at
    interface LoDashStatic {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param collection The collection to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(
            collection: List<T>|Dictionary<T>,
            ...props: Array<number|string|Array<number|string>>
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.at
         */
        at(...props: Array<number|string|Array<number|string>>): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.at
         */
        at<TResult>(...props: Array<number|string|Array<number|string>>): LoDashArrayWrapper<TResult>;
    }

    //_.collect
    interface LoDashStatic {
        /**
         * @see _.map
         */
        collect<T, TResult>(
            collection: List<T>,
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        collect<T extends {}, TResult>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        collect<T, TResult>(
            collection: List<T>,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        collect<T, TResult>(
            collection: Dictionary<T>,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        collect<T, TObject extends {}>(
            collection: List<T>,
            iteratee?: TObject
        ): boolean[];

        /**
         * @see _.map
         */
        collect<T, TObject extends {}>(
            collection: Dictionary<T>,
            iteratee?: TObject
        ): boolean[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.map
         */
        collect<TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        collect<TResult>(
            iteratee?: string
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        collect<TObject extends {}>(
            iteratee?: TObject
        ): LoDashArrayWrapper<boolean>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.map
         */
        collect<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult>|DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        collect<TValue, TResult>(
            iteratee?: string
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        collect<TObject extends {}>(
            iteratee?: TObject
        ): LoDashArrayWrapper<boolean>;
    }

    //_.contains
    interface LoDashStatic {
        /**
        * Checks if a given value is present in a collection using strict equality for comparisons,
        * i.e. ===. If fromIndex is negative, it is used as the offset from the end of the collection.
        * @param collection The collection to iterate over.
        * @param target The value to check for.
        * @param fromIndex The index to search from.
        * @return True if the target element is found, else false.
        **/
        contains<T>(
            collection: Array<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        contains<T>(
            collection: List<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        * @param dictionary The dictionary to iterate over.
        * @param value The value in the dictionary to search for.
        **/
        contains<T>(
            dictionary: Dictionary<T>,
            value: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        * @param searchString the string to search
        * @param targetString the string to search for
        **/
        contains(
            searchString: string,
            targetString: string,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        include<T>(
            collection: Array<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        include<T>(
            collection: List<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        include<T>(
            dictionary: Dictionary<T>,
            value: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        include(
            searchString: string,
            targetString: string,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        includes<T>(
            collection: Array<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        includes<T>(
            collection: List<T>,
            target: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        includes<T>(
            dictionary: Dictionary<T>,
            value: T,
            fromIndex?: number): boolean;

        /**
        * @see _.contains
        **/
        includes(
            searchString: string,
            targetString: string,
            fromIndex?: number): boolean;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.contains
         **/
        contains(target: T, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        include(target: T, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        includes(target: T, fromIndex?: number): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.contains
         **/
        contains<TValue>(target: TValue, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        include<TValue>(target: TValue, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        includes<TValue>(target: TValue, fromIndex?: number): boolean;
    }

    interface LoDashStringWrapper {
        /**
         * @see _.contains
         **/
        contains(target: string, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        include(target: string, fromIndex?: number): boolean;

        /**
         * @see _.contains
         **/
        includes(target: string, fromIndex?: number): boolean;
    }

    //_.countBy
    interface LoDashStatic {
        /**
        * Creates an object composed of keys generated from the results of running each element
        * of collection through the callback. The corresponding value of each key is the number
        * of times the key was returned by the callback. The callback is bound to thisArg and
        * invoked with three arguments; (value, index|key, collection).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return Returns the composed aggregate object.
        **/
        countBy<T>(
            collection: Array<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): Dictionary<number>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy<T>(
            collection: List<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): Dictionary<number>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy<T>(
            collection: Dictionary<T>,
            callback?: DictionaryIterator<T, any>,
            thisArg?: any): Dictionary<number>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy<T>(
            collection: Array<T>,
            callback: string,
            thisArg?: any): Dictionary<number>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy<T>(
            collection: List<T>,
            callback: string,
            thisArg?: any): Dictionary<number>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy<T>(
            collection: Dictionary<T>,
            callback: string,
            thisArg?: any): Dictionary<number>;
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.countBy
        **/
        countBy(
            callback?: ListIterator<T, any>,
            thisArg?: any): LoDashObjectWrapper<Dictionary<number>>;

        /**
        * @see _.countBy
        * @param callback Function name
        **/
        countBy(
            callback: string,
            thisArg?: any): LoDashObjectWrapper<Dictionary<number>>;
    }

    //_.detect
    interface LoDashStatic {
        /**
         * @see _.find
         */
        detect<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        detect<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        detect<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        detect<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.find
         */
        detect(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        detect(
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        detect<TObject extends {}>(
            predicate?: TObject
        ): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.find
         */
        detect<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        detect<TResult>(
            predicate?: string,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        detect<TObject extends {}, TResult>(
            predicate?: TObject
        ): TResult;
    }

    //_.every
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for all elements of collection. The predicate is bound to thisArg and
         * invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @alias _.all
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns true if all elements pass the predicate check, else false.
         */
        every<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.every
         */
        every(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.every
         */
        every<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.every
         */
        every<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    //_.fill
    interface LoDashStatic {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array (Array): The array to fill.
         * @param value (*): The value to fill array with.
         * @param [start=0] (number): The start position.
         * @param [end=array.length] (number): The end position.
         * @return (Array): Returns array.
         */
        fill<TResult>(
            array: any[],
            value: any,
            start?: number,
            end?: number): TResult[];

        /**
         * @see _.fill
         */
        fill<TResult>(
            array: List<any>,
            value: any,
            start?: number,
            end?: number): List<TResult>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.fill
         */
        fill<TResult>(
            value: TResult,
            start?: number,
            end?: number): LoDashArrayWrapper<TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.fill
         */
        fill<TResult>(
            value: TResult,
            start?: number,
            end?: number): LoDashObjectWrapper<List<TResult>>;
    }

    //_.filter
    interface LoDashStatic {
        /**
        * Iterates over elements of a collection, returning an array of all elements the
        * identity function returns truey for.
        *
        * @param collection The collection to iterate over.
        * @return Returns a new array of elements that passed the callback check.
        **/
        filter<T>(
            collection: (Array<T>|List<T>)): T[];

        /**
        * Iterates over elements of a collection, returning an array of all elements the
        * callback returns truey for. The callback is bound to thisArg and invoked with three
        * arguments; (value, index|key, collection).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param context The this binding of callback.
        * @return Returns a new array of elements that passed the callback check.
        **/
        filter<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        **/
        filter<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        **/
        filter<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<T>(
            collection: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<T>(
            collection: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<T>(
            collection: Dictionary<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<W, T>(
            collection: Array<T>,
            whereValue: W): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<W, T>(
            collection: List<T>,
            whereValue: W): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T[];

        /**
        * @see _.filter
        **/
        select<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        **/
        select<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        **/
        select<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<T>(
            collection: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<T>(
            collection: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<T>(
            collection: Dictionary<T>,
            pluckValue: string): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<W, T>(
            collection: Array<T>,
            whereValue: W): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<W, T>(
            collection: List<T>,
            whereValue: W): T[];

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.filter
        **/
        filter(): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        **/
        filter(
            callback: ListIterator<T, boolean>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter(
            pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        filter<W>(
            whereValue: W): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        **/
        select(
            callback: ListIterator<T, boolean>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select(
            pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.filter
        * @param pluckValue _.pluck style callback
        **/
        select<W>(
            whereValue: W): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.filter
        **/
        filter<T extends {}>(
            callback: ObjectIterator<T, boolean>,
            thisArg?: any): LoDashObjectWrapper<T>;
    }

    //_.find
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning the first element predicate returns truthy for.
         * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @alias _.detect
         *
         * @param collection The collection to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the matched element, else undefined.
         */
        find<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.find
         */
        find(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find(
            predicate?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.find
         */
        find<TObject extends {}>(
            predicate?: TObject
        ): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.find
         */
        find<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        find<TResult>(
            predicate?: string,
            thisArg?: any
        ): TResult;

        /**
         * @see _.find
         */
        find<TObject extends {}, TResult>(
            predicate?: TObject
        ): TResult;
    }

    //_.findWhere
    interface LoDashStatic {
        /**
        * @see _.find
        **/
        findWhere<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findWhere<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findWhere<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        * @param _.matches style callback
        **/
        findWhere<W, T>(
            collection: Array<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.matches style callback
        **/
        findWhere<W, T>(
            collection: List<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.matches style callback
        **/
        findWhere<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.property style callback
        **/
        findWhere<T>(
            collection: Array<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.property style callback
        **/
        findWhere<T>(
            collection: List<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.property style callback
        **/
        findWhere<T>(
            collection: Dictionary<T>,
            pluckValue: string): T;
    }

    //_.findLast
    interface LoDashStatic {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return The found element, else undefined.
        **/
        findLast<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findLast<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        **/
        findLast<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: Array<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: List<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.pluck style callback
        **/
        findLast<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: Array<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: List<T>,
            pluckValue: string): T;

        /**
        * @see _.find
        * @param _.where style callback
        **/
        findLast<T>(
            collection: Dictionary<T>,
            pluckValue: string): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.findLast
        */
        findLast(
            callback: ListIterator<T, boolean>,
            thisArg?: any): T;
        /**
        * @see _.findLast
        * @param _.where style callback
        */
        findLast<W>(
            whereValue: W): T;

        /**
        * @see _.findLast
        * @param _.where style callback
        */
        findLast(
            pluckValue: string): T;
    }

    //_.forEach
    interface LoDashStatic {
        /**
        * Iterates over elements of a collection, executing the callback for each element.
        * The callback is bound to thisArg and invoked with three arguments; (value, index|key,
        * collection). Callbacks may exit iteration early by explicitly returning false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        **/
        forEach<T>(
            collection: Array<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): Array<T>;

        /**
        * @see _.forEach
        **/
        forEach<T>(
            collection: List<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): List<T>;

        /**
        * @see _.forEach
        **/
        forEach<T extends {}>(
            object: Dictionary<T>,
            callback: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.each
        **/
        forEach<T extends {}, TValue>(
            object: T,
            callback: ObjectIterator<TValue, void>,
            thisArg?: any): T

        /**
        * @see _.forEach
        **/
        each<T>(
            collection: Array<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): Array<T>;

        /**
        * @see _.forEach
        **/
        each<T>(
            collection: List<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): List<T>;

        /**
        * @see _.forEach
        * @param object The object to iterate over
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        **/
        each<T extends {}>(
            object: Dictionary<T>,
            callback: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.each
        **/
        each<T extends {}, TValue>(
            object: T,
            callback: ObjectIterator<TValue, void>,
            thisArg?: any): T
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.forEach
        **/
        forEach(
            callback: ListIterator<T, void>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.forEach
        **/
        each(
            callback: ListIterator<T, void>,
            thisArg?: any): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forEach
        **/
        forEach<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): LoDashObjectWrapper<T>;

        /**
        * @see _.forEach
        **/
        each<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): LoDashObjectWrapper<T>;
    }

    //_.forEachRight
    interface LoDashStatic {
        /**
        * This method is like _.forEach except that it iterates over elements of a
        * collection from right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        **/
        forEachRight<T>(
            collection: Array<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): Array<T>;

        /**
        * @see _.forEachRight
        **/
        forEachRight<T>(
            collection: List<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): List<T>;

        /**
        * @see _.forEachRight
        **/
        forEachRight<T extends {}>(
            object: Dictionary<T>,
            callback: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.forEachRight
        **/
        eachRight<T>(
            collection: Array<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): Array<T>;

        /**
        * @see _.forEachRight
        **/
        eachRight<T>(
            collection: List<T>,
            callback: ListIterator<T, void>,
            thisArg?: any): List<T>;

        /**
        * @see _.forEachRight
        * @param object The object to iterate over
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        **/
        eachRight<T extends {}>(
            object: Dictionary<T>,
            callback: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.forEachRight
        **/
        forEachRight(
            callback: ListIterator<T, void>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.forEachRight
        **/
        eachRight(
            callback: ListIterator<T, void>,
            thisArg?: any): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forEachRight
        **/
        forEachRight<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): LoDashObjectWrapper<Dictionary<T>>;

        /**
        * @see _.forEachRight
        * @param object The object to iterate over
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        **/
        eachRight<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): LoDashObjectWrapper<Dictionary<T>>;
    }

    //_.groupBy
    interface LoDashStatic {
        /**
        * Creates an object composed of keys generated from the results of running each element
        * of a collection through the callback. The corresponding value of each key is an array
        * of the elements responsible for generating the key. The callback is bound to thisArg
        * and invoked with three arguments; (value, index|key, collection).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return Returns the composed aggregate object.
        **/
        groupBy<T>(
            collection: Array<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): Dictionary<T[]>;

        /**
        * @see _.groupBy
        **/
        groupBy<T>(
            collection: List<T>,
            callback?: ListIterator<T, any>,
            thisArg?: any): Dictionary<T[]>;

        /**
        * @see _.groupBy
        * @param pluckValue _.pluck style callback
        **/
        groupBy<T>(
            collection: Array<T>,
            pluckValue: string): Dictionary<T[]>;

        /**
        * @see _.groupBy
        * @param pluckValue _.pluck style callback
        **/
        groupBy<T>(
            collection: List<T>,
            pluckValue: string): Dictionary<T[]>;

        /**
        * @see _.groupBy
        * @param whereValue _.where style callback
        **/
        groupBy<W, T>(
            collection: Array<T>,
            whereValue: W): Dictionary<T[]>;

        /**
        * @see _.groupBy
        * @param whereValue _.where style callback
        **/
        groupBy<W, T>(
            collection: List<T>,
            whereValue: W): Dictionary<T[]>;

        /**
        * @see _.groupBy
        **/
        groupBy<T>(
            collection: Dictionary<T>,
            callback?: DictionaryIterator<T, any>,
            thisArg?: any): Dictionary<T[]>;

        /**
        * @see _.groupBy
        * @param pluckValue _.pluck style callback
        **/
        groupBy<TValue>(
            collection: Dictionary<TValue>,
            pluckValue: string): Dictionary<TValue[]>;

        /**
        * @see _.groupBy
        * @param whereValue _.where style callback
        **/
        groupBy<W, TValue>(
            collection: Dictionary<TValue>,
            whereValue: W): Dictionary<TValue[]>;
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.groupBy
        **/
        groupBy(
            callback: ListIterator<T, any>,
            thisArg?: any): _.LoDashObjectWrapper<_.Dictionary<T[]>>;

        /**
        * @see _.groupBy
        **/
        groupBy(
            pluckValue: string): _.LoDashObjectWrapper<_.Dictionary<T[]>>;

        /**
        * @see _.groupBy
        **/
        groupBy<W>(
            whereValue: W): _.LoDashObjectWrapper<_.Dictionary<T[]>>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.groupBy
        **/
        groupBy<TValue>(
            callback: ListIterator<TValue, any>,
            thisArg?: any): _.LoDashObjectWrapper<_.Dictionary<TValue[]>>;

        /**
        * @see _.groupBy
        **/
        groupBy<TValue>(
            pluckValue: string): _.LoDashObjectWrapper<_.Dictionary<TValue[]>>;

        /**
        * @see _.groupBy
        **/
        groupBy<W, TValue>(
            whereValue: W): _.LoDashObjectWrapper<_.Dictionary<TValue[]>>;
    }

    //_.indexBy
    interface LoDashStatic {
        /**
        * Creates an object composed of keys generated from the results of running each element
        * of the collection through the given callback. The corresponding value of each key is
        * the last element responsible for generating the key. The callback is bound to thisArg
        * and invoked with three arguments; (value, index|key, collection).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will return
        * true for elements that have the properties of the given object, else false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return Returns the composed aggregate object.
        **/
        indexBy<T>(
            list: Array<T>,
            iterator: ListIterator<T, any>,
            context?: any): Dictionary<T>;

        /**
        * @see _.indexBy
        **/
        indexBy<T>(
            list: List<T>,
            iterator: ListIterator<T, any>,
            context?: any): Dictionary<T>;

        /**
        * @see _.indexBy
        * @param pluckValue _.pluck style callback
        **/
        indexBy<T>(
            collection: Array<T>,
            pluckValue: string): Dictionary<T>;

        /**
        * @see _.indexBy
        * @param pluckValue _.pluck style callback
        **/
        indexBy<T>(
            collection: List<T>,
            pluckValue: string): Dictionary<T>;

        /**
        * @see _.indexBy
        * @param whereValue _.where style callback
        **/
        indexBy<W, T>(
            collection: Array<T>,
            whereValue: W): Dictionary<T>;

        /**
        * @see _.indexBy
        * @param whereValue _.where style callback
        **/
        indexBy<W, T>(
            collection: List<T>,
            whereValue: W): Dictionary<T>;
    }

    //_.invoke
    interface LoDashStatic {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
        **/
        invoke<T extends {}>(
            collection: Array<T>,
            methodName: string,
            ...args: any[]): any;

        /**
        * @see _.invoke
        **/
        invoke<T extends {}>(
            collection: List<T>,
            methodName: string,
            ...args: any[]): any;

        /**
        * @see _.invoke
        **/
        invoke<T extends {}>(
            collection: Dictionary<T>,
            methodName: string,
            ...args: any[]): any;

        /**
        * @see _.invoke
        **/
        invoke<T extends {}>(
            collection: Array<T>,
            method: Function,
            ...args: any[]): any;

        /**
        * @see _.invoke
        **/
        invoke<T extends {}>(
            collection: List<T>,
            method: Function,
            ...args: any[]): any;

        /**
        * @see _.invoke
        **/
        invoke<T extends {}>(
            collection: Dictionary<T>,
            method: Function,
            ...args: any[]): any;
    }

    //_.map
    interface LoDashStatic {
        /**
         * Creates an array of values by running each element in collection through iteratee. The iteratee is bound to
         * thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
         * _.reject, and _.some.
         *
         * The guarded methods are:
         * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
         * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
         * sample, some, sum, uniq, and words
         *
         * @alias _.collect
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped array.
         */
        map<T, TResult>(
            collection: List<T>,
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        map<T extends {}, TResult>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TResult>,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: List<T>,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: Dictionary<T>,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TObject extends {}>(
            collection: List<T>,
            iteratee?: TObject
        ): boolean[];

        /**
         * @see _.map
         */
        map<T, TObject extends {}>(
            collection: Dictionary<T>,
            iteratee?: TObject
        ): boolean[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: string
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashArrayWrapper<boolean>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult>|DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: string
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashArrayWrapper<boolean>;
    }

    //_.ceil
    interface LoDashStatic {
        /**
         * Calculates n rounded up to precision.
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        ceil(n: number, precision?: number): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }

    //_.floor
    interface LoDashStatic {
        /**
         * Calculates n rounded down to precision.
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        floor(n: number, precision?: number): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }

    //_.round
    interface LoDashStatic {
        /**
         * Calculates n rounded to precision.
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        round(n: number, precision?: number): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }

    //_.sum
    interface LoDashStatic {
        /**
        * Gets the sum of the values in collection.
        *
        * @param collection The collection to iterate over.
        * @param iteratee The function invoked per iteration.
        * @param thisArg The this binding of iteratee.
        * @return Returns the sum.
        **/
        sum(
            collection: Array<number>): number;

        /**
        * @see _.sum
        **/
        sum(
            collection: List<number>): number;

        /**
        * @see _.sum
        **/
        sum(
            collection: Dictionary<number>): number;

        /**
        * @see _.sum
        **/
        sum<T>(
            collection: Array<T>,
            iteratee: ListIterator<T, number>,
            thisArg?: any): number;

        /**
        * @see _.sum
        **/
        sum<T>(
            collection: List<T>,
            iteratee: ListIterator<T, number>,
            thisArg?: any): number;

        /**
        * @see _.sum
        **/
        sum<T>(
            collection: Dictionary<T>,
            iteratee: ObjectIterator<T, number>,
            thisArg?: any): number;

        /**
        * @see _.sum
        * @param property _.property callback shorthand.
        **/
        sum<T>(
            collection: Array<T>,
            property: string): number;

        /**
        * @see _.sum
        * @param property _.property callback shorthand.
        **/
        sum<T>(
            collection: List<T>,
            property: string): number;

        /**
        * @see _.sum
        * @param property _.property callback shorthand.
        **/
        sum<T>(
            collection: Dictionary<T>,
            property: string): number;
    }

    interface LoDashNumberArrayWrapper {
        /**
        * @see _.sum
        **/
        sum(): number;

        /**
        * @see _.sum
        **/
        sum(
            iteratee: ListIterator<number, number>,
            thisArg?: any): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.sum
        **/
        sum(): number;

        /**
        * @see _.sum
        **/
        sum(
            iteratee: ListIterator<T, number>,
            thisArg?: any): number;

        /**
        * @see _.sum
        * @param property _.property callback shorthand.
        **/
        sum(
            property: string): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.sum
        **/
        sum(): number;

        /**
        * @see _.sum
        **/
        sum(
            iteratee: ObjectIterator<any, number>,
            thisArg?: any): number;

        /**
        * @see _.sum
        * @param property _.property callback shorthand.
        **/
        sum(
            property: string): number;
    }

    //_.pluck
    interface LoDashStatic {
        /**
        * Retrieves the value of a specified property from all elements in the collection.
        * @param collection The collection to iterate over.
        * @param property The property to pluck.
        * @return A new array of property values.
        **/
        pluck<T extends {}>(
            collection: Array<T>,
            property: string|string[]): any[];

        /**
        * @see _.pluck
        **/
        pluck<T extends {}>(
            collection: List<T>,
            property: string|string[]): any[];

        /**
        * @see _.pluck
        **/
        pluck<T extends {}>(
            collection: Dictionary<T>,
            property: string|string[]): any[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.pluck
        **/
        pluck<TResult>(
            property: string): LoDashArrayWrapper<TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.pluck
        **/
        pluck<TResult>(
            property: string): LoDashArrayWrapper<TResult>;
    }

    //_.partition
    interface LoDashStatic {
        /**
        * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
        * while the second of which contains elements predicate returns falsey for.
        * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
        *
        * If a property name is provided for predicate the created _.property style callback
        * returns the property value of the given element.
        *
        * If a value is also provided for thisArg the created _.matchesProperty style callback
        * returns true for elements that have a matching property value, else false.
        *
        * If an object is provided for predicate the created _.matches style callback returns
        * true for elements that have the properties of the given object, else false.
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of predicate.
        * @return Returns the array of grouped elements.
        **/
        partition<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T[][];

        /**
         * @see _.partition
         **/
        partition<W, T>(
            collection: List<T>,
            whereValue: W): T[][];

        /**
         * @see _.partition
         **/
        partition<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: List<T>,
            path: string,
            srcValue: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            path: string,
            srcValue: any): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: List<T>,
            pluckValue: string): T[][];

        /**
         * @see _.partition
         **/
        partition<T>(
            collection: Dictionary<T>,
            pluckValue: string): T[][];
    }

    interface LoDashStringWrapper {
        /**
         * @see _.partition
         */
        partition(
            callback: ListIterator<string, boolean>,
            thisArg?: any): LoDashArrayWrapper<string[]>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.partition
         */
        partition(
            callback: ListIterator<T, boolean>,
            thisArg?: any): LoDashArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition<W>(
            whereValue: W): LoDashArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition(
            path: string,
            srcValue: any): LoDashArrayWrapper<T[]>;
        /**
         * @see _.partition
         */
        partition(
            pluckValue: string): LoDashArrayWrapper<T[]>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.partition
         */
        partition<TResult>(
            callback: ListIterator<TResult, boolean>,
            thisArg?: any): LoDashArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            callback: DictionaryIterator<TResult, boolean>,
            thisArg?: any): LoDashArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<W, TResult>(
            whereValue: W): LoDashArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            path: string,
            srcValue: any): LoDashArrayWrapper<TResult[]>;

        /**
         * @see _.partition
         */
        partition<TResult>(
            pluckValue: string): LoDashArrayWrapper<TResult[]>;
    }

    //_.reduce
    interface LoDashStatic {
        /**
        * Reduces a collection to a value which is the accumulated result of running each
        * element in the collection through the callback, where each successive callback execution
        * consumes the return value of the previous execution. If accumulator is not provided the
        * first element of the collection will be used as the initial accumulator value. The callback
        * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @param thisArg The this binding of callback.
        * @return Returns the accumulated value.
        **/
        reduce<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;
    }

    interface LoDashArrayWrapper<T> {
         /**
        * @see _.reduce
        **/
        reduce<TResult>(
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<TResult>(
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<TResult>(
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<TResult>(
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<TResult>(
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<TResult>(
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;
    }

    interface LoDashObjectWrapper<T> {
         /**
        * @see _.reduce
        **/
        reduce<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        reduce<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        inject<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduce
        **/
        foldl<TValue, TResult>(
            callback: MemoIterator<TValue, TResult>,
            thisArg?: any): TResult;
    }

    //_.reduceRight
    interface LoDashStatic {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @param thisArg The this binding of callback.
        * @return The accumulated value.
        **/
        reduceRight<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            accumulator: TResult,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: Array<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: List<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;

        /**
        * @see _.reduceRight
        **/
        foldr<T, TResult>(
            collection: Dictionary<T>,
            callback: MemoIterator<T, TResult>,
            thisArg?: any): TResult;
    }

    //_.reject
    interface LoDashStatic {
        /**
        * The opposite of _.filter this method returns the elements of a collection that
        * the callback does not return truey for.
        *
        * If a property name is provided for callback the created "_.pluck" style callback
        * will return the property value of the given element.
        *
        * If an object is provided for callback the created "_.where" style callback will
        * return true for elements that have the properties of the given object, else false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return A new array of elements that failed the callback check.
        **/
        reject<T>(
            collection: Array<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.reject
        **/
        reject<T>(
            collection: List<T>,
            callback: ListIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.reject
        **/
        reject<T>(
            collection: Dictionary<T>,
            callback: DictionaryIterator<T, boolean>,
            thisArg?: any): T[];

        /**
        * @see _.reject
        * @param pluckValue _.pluck style callback
        **/
        reject<T>(
            collection: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.reject
        * @param pluckValue _.pluck style callback
        **/
        reject<T>(
            collection: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.reject
        * @param pluckValue _.pluck style callback
        **/
        reject<T>(
            collection: Dictionary<T>,
            pluckValue: string): T[];

        /**
        * @see _.reject
        * @param whereValue _.where style callback
        **/
        reject<W, T>(
            collection: Array<T>,
            whereValue: W): T[];

        /**
        * @see _.reject
        * @param whereValue _.where style callback
        **/
        reject<W, T>(
            collection: List<T>,
            whereValue: W): T[];

        /**
        * @see _.reject
        * @param whereValue _.where style callback
        **/
        reject<W, T>(
            collection: Dictionary<T>,
            whereValue: W): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.reject
        **/
        reject(
            callback: ListIterator<T, boolean>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.reject
        * @param pluckValue _.pluck style callback
        **/
        reject(pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.reject
        * @param whereValue _.where style callback
        **/
        reject<W>(whereValue: W): LoDashArrayWrapper<T>;
    }

    //_.sample
    interface LoDashStatic {
        /**
        * Retrieves a random element or n random elements from a collection.
        * @param collection The collection to sample.
        * @return Returns the random sample(s) of collection.
        **/
        sample<T>(collection: Array<T>): T;

        /**
        * @see _.sample
        **/
        sample<T>(collection: List<T>): T;

        /**
        * @see _.sample
        **/
        sample<T>(collection: Dictionary<T>): T;

        /**
        * @see _.sample
        * @param n The number of elements to sample.
        **/
        sample<T>(collection: Array<T>, n: number): T[];

        /**
        * @see _.sample
        * @param n The number of elements to sample.
        **/
        sample<T>(collection: List<T>, n: number): T[];

        /**
        * @see _.sample
        * @param n The number of elements to sample.
        **/
        sample<T>(collection: Dictionary<T>, n: number): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.sample
         **/
        sample(n: number): LoDashArrayWrapper<T>;

        /**
         * @see _.sample
         **/
        sample(): LoDashWrapper<T>;
    }

    //_.shuffle
    interface LoDashStatic {
        /**
        * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
        * See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
        * @param collection The collection to shuffle.
        * @return Returns a new shuffled collection.
        **/
        shuffle<T>(collection: Array<T>): T[];

        /**
        * @see _.shuffle
        **/
        shuffle<T>(collection: List<T>): T[];

        /**
        * @see _.shuffle
        **/
        shuffle<T>(collection: Dictionary<T>): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.shuffle
         **/
        shuffle(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.shuffle
         **/
        shuffle(): LoDashArrayWrapper<T>;
    }

    //_.size
    interface LoDashStatic {
        /**
        * Gets the size of the collection by returning collection.length for arrays and array-like
        * objects or the number of own enumerable properties for objects.
        * @param collection The collection to inspect.
        * @return collection.length
        **/
        size<T>(collection: Array<T>): number;

        /**
        * @see _.size
        **/
        size<T>(collection: List<T>): number;

        /**
        * @see _.size
        * @param object The object to inspect
        * @return The number of own enumerable properties.
        **/
        size<T extends {}>(object: T): number;

        /**
        * @see _.size
        * @param aString The string to inspect
        * @return The length of aString
        **/
        size(aString: string): number;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.size
         **/
        size(): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.size
         **/
        size(): number;
    }

    //_.some
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for any element of collection. The function returns as soon as it finds
         * a passing value and does not iterate over the entire collection. The predicate is bound to thisArg and
         * invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @alias _.any
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns true if any element passes the predicate check, else false.
         */
        some<T>(
            collection: List<T>,
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: Dictionary<T>,
            predicate?: DictionaryIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<T>(
            collection: List<T>|Dictionary<T>,
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            predicate?: TObject
        ): boolean;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.some
         */
        some(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.some
         */
        some<TResult>(
            predicate?: ListIterator<TResult, boolean>|DictionaryIterator<TResult, boolean>,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some(
            predicate?: string,
            thisArg?: any
        ): boolean;

        /**
         * @see _.some
         */
        some<TObject extends {}>(
            predicate?: TObject
        ): boolean;
    }

    //_.sortBy
    interface LoDashStatic {
        /**
        * Creates an array of elements, sorted in ascending order by the results of running each
        * element in a collection through the callback. This method performs a stable sort, that
        * is, it will preserve the original sort order of equal elements. The callback is bound
        * to thisArg and invoked with three arguments; (value, index|key, collection).
        *
        * If a property name is provided for callback the created "_.pluck" style callback will
        * return the property value of the given element.
        *
        * If a value is also provided for thisArg the created "_.matchesProperty" style callback
        * returns true for elements that have a matching property value, else false.
        *
        * If an object is provided for an iteratee the created "_.matches" style callback returns
        * true for elements that have the properties of the given object, else false.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return A new array of sorted elements.
        **/
        sortBy<T, TSort>(
            collection: Array<T>,
            iteratee?: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.sortBy
        **/
        sortBy<T, TSort>(
            collection: List<T>,
            iteratee?: ListIterator<T, TSort>,
            thisArg?: any): T[];

        /**
        * @see _.sortBy
        * @param pluckValue _.pluck style callback
        **/
        sortBy<T>(
            collection: Array<T>,
            pluckValue: string): T[];

        /**
        * @see _.sortBy
        * @param pluckValue _.pluck style callback
        **/
        sortBy<T>(
            collection: List<T>,
            pluckValue: string): T[];

        /**
        * @see _.sortBy
        * @param whereValue _.where style callback
        **/
        sortBy<W, T>(
            collection: Array<T>,
            whereValue: W): T[];

        /**
        * @see _.sortBy
        * @param whereValue _.where style callback
        **/
        sortBy<W, T>(
            collection: List<T>,
            whereValue: W): T[];

        /**
         * Sorts by all the given arguments, using either ListIterator, pluckValue, or whereValue foramts
         * @param args The rules by which to sort
         */
        sortByAll<T>(
            collection: (Array<T>|List<T>),
            ...args: (ListIterator<T, boolean>|Object|string)[]
        ): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.sortBy
        **/
        sortBy<TSort>(
            iteratee?: ListIterator<T, TSort>,
            thisArg?: any): LoDashArrayWrapper<T>;

        /**
        * @see _.sortBy
        * @param pluckValue _.pluck style callback
        **/
        sortBy(pluckValue: string): LoDashArrayWrapper<T>;

        /**
        * @see _.sortBy
        * @param whereValue _.where style callback
        **/
        sortBy<W>(whereValue: W): LoDashArrayWrapper<T>;

        /**
         * Sorts by all the given arguments, using either ListIterator, pluckValue, or whereValue foramts
         * @param args The rules by which to sort
         */
        sortByAll(...args: (ListIterator<T, boolean>|Object|string)[]): LoDashArrayWrapper<T>;
    }

    //_.sortByAll
    interface LoDashStatic {
        /**
        * This method is like "_.sortBy" except that it can sort by multiple iteratees or
        * property names.
        *
        * If a property name is provided for an iteratee the created "_.property" style callback
        * returns the property value of the given element.
        *
        * If a value is also provided for thisArg the created "_.matchesProperty" style callback
        * returns true for elements that have a matching property value, else false.
        *
        * If an object is provided for an iteratee the created "_.matches" style callback returns
        * true for elements that have the properties of the given object, else false.
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return A new array of sorted elements.
        **/
        sortByAll<T>(
            collection: Array<T>,
            iteratees: (ListIterator<T, any>|string|Object)[]): T[];

        /**
        * @see _.sortByAll
        **/
        sortByAll<T>(
            collection: List<T>,
            iteratees: (ListIterator<T, any>|string|Object)[]): T[];

        /**
        * @see _.sortByAll
        **/
        sortByAll<T>(
            collection: Array<T>,
            ...iteratees: (ListIterator<T, any>|string|Object)[]): T[];

        /**
        * @see _.sortByAll
        **/
        sortByAll<T>(
            collection: List<T>,
            ...iteratees: (ListIterator<T, any>|string|Object)[]): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.sortByAll
        **/
        sortByAll(
            iteratees: (ListIterator<T, any>|string|Object)[]): LoDashArrayWrapper<T>;

        /**
        * @see _.sortByAll
        **/
        sortByAll(
            ...iteratees: (ListIterator<T, any>|string|Object)[]): LoDashArrayWrapper<T>;
    }

    //_.sortByOrder
    interface LoDashStatic {
        /**
        * This method is like "_.sortByAll" except that it allows specifying the sort orders of the
        * iteratees to sort by. If orders is unspecified, all values are sorted in ascending order.
        * Otherwise, a value is sorted in ascending order if its corresponding order is "asc", and
        * descending if "desc".
        *
        * If a property name is provided for an iteratee the created "_.property" style callback
        * returns the property value of the given element.
        *
        * If an object is provided for an iteratee the created "_.matches" style callback returns
        * true for elements that have the properties of the given object, else false.
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return A new array of sorted elements.
        **/
        sortByOrder<T>(
            collection: Array<T>,
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: boolean[]): T[];

        /**
        * @see _.sortByOrder
        **/
        sortByOrder<T>(
            collection: List<T>,
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: boolean[]): T[];

        /**
        * @see _.sortByOrder
        **/
        sortByOrder<T>(
            collection: Array<T>,
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: string[]): T[];

        /**
        * @see _.sortByOrder
        **/
        sortByOrder<T>(
            collection: List<T>,
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: string[]): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.sortByOrder
        **/
        sortByOrder(
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: boolean[]): LoDashArrayWrapper<T>;

        /**
        * @see _.sortByOrder
        **/
        sortByOrder(
            iteratees: (ListIterator<T, any>|string|Object)[],
            orders?: string[]): LoDashArrayWrapper<T>;
    }

    //_.where
    interface LoDashStatic {
        /**
        * Performs a deep comparison of each element in a collection to the given properties
        * object, returning an array of all elements that have equivalent property values.
        * @param collection The collection to iterate over.
        * @param properties The object of property values to filter by.
        * @return A new array of elements that have the given properties.
        **/
        where<T, U extends {}>(
            list: Array<T>,
            properties: U): T[];

        /**
        * @see _.where
        **/
        where<T, U extends {}>(
            list: List<T>,
            properties: U): T[];

        /**
        * @see _.where
        **/
        where<T, U extends {}>(
            list: Dictionary<T>,
            properties: U): T[];
    }

    interface LoDashArrayWrapper<T> {
        /**
        * @see _.where
        **/
        where<U extends {}>(properties: U): LoDashArrayWrapper<T>;
    }

    /********
     * Date *
     ********/

    //_.now
    interface LoDashStatic {
        /**
        * Gets the number of milliseconds that have elapsed since the Unix epoch
        * (1 January 1970 00:00:00 UTC).
        * @return The number of milliseconds.
        **/
        now(): number;
    }

    /*************
     * Functions *
     *************/

    //_.after
    interface LoDashStatic {
        /**
        * Creates a function that executes func, with the this binding and arguments of the
        * created function, only after being called n times.
        * @param n The number of times the function must be called before func is executed.
        * @param func The function to restrict.
        * @return The new restricted function.
        **/
        after(
            n: number,
            func: Function): Function;
    }

    interface LoDashWrapper<T> {
        /**
        * @see _.after
        **/
        after(func: Function): LoDashObjectWrapper<Function>;
    }

    //_.ary
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @param guard Enables use as a callback for functions like `_.map`.
         * @returns Returns the new function.
         */
        ary<TResult extends Function>(func: Function, n?: number, guard?: Object): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.ary
         */
        ary<TResult extends Function>(n?: number, guard?: Object): LoDashObjectWrapper<TResult>;
    }

    //_.backflow
    interface LoDashStatic {
        /**
         * @see _.flowRight
         */
        backflow<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.flowRight
         **/
        backflow<TResult extends Function>(...funcs: Function[]): LoDashObjectWrapper<TResult>;
    }

    //_.before
    interface LoDashStatic {
        /**
         * Creates a function that invokes func, with the this binding and arguments of the created function, while
         * it is called less than n times. Subsequent calls to the created function return the result of the last func
         * invocation.
         * @param n The number of calls at which func is no longer invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        before<TFunc extends Function>(n: number, func: TFunc): TFunc;
    }

    interface LoDashWrapper<T> {
        /**
         * @sed _.before
         */
        before<TFunc extends Function>(func: TFunc): TFunc;
    }

    //_.bind
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes func with the this binding of thisArg
        * and prepends any additional bind arguments to those provided to the bound function.
        * @param func The function to bind.
        * @param thisArg The this binding of func.
        * @param args Arguments to be partially applied.
        * @return The new bound function.
        **/
        bind(
            func: Function,
            thisArg: any,
            ...args: any[]): (...args: any[]) => any;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.bind
        **/
        bind(
            thisArg: any,
            ...args: any[]): LoDashObjectWrapper<(...args: any[]) => any>;
    }

    //_.bindAll
    interface LoDashStatic {
        /**
        * Binds methods of an object to the object itself, overwriting the existing method. Method
        * names may be specified as individual arguments or as arrays of method names. If no method
        * names are provided all the function properties of object will be bound.
        * @param object The object to bind and assign the bound methods to.
        * @param methodNames The object method names to bind, specified as individual method names
        * or arrays of method names.
        * @return object
        **/
        bindAll<T>(
            object: T,
            ...methodNames: string[]): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.bindAll
        **/
        bindAll(...methodNames: string[]): LoDashWrapper<T>;
    }

    //_.bindKey
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes the method at object[key] and prepends any
        * additional bindKey arguments to those provided to the bound function. This method differs
        * from _.bind by allowing bound functions to reference methods that will be redefined or don't
        * yet exist. See http://michaux.ca/articles/lazy-function-definition-pattern.
        * @param object The object the method belongs to.
        * @param key The key of the method.
        * @param args Arguments to be partially applied.
        * @return The new bound function.
        **/
        bindKey<T>(
            object: T,
            key: string,
            ...args: any[]): Function;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.bindKey
        **/
        bindKey(
            key: string,
            ...args: any[]): LoDashObjectWrapper<Function>;
    }

    //_.compose
    interface LoDashStatic {
        /**
         * @see _.flowRight
         */
        compose<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.flowRight
         */
        compose<TResult extends Function>(...funcs: Function[]): LoDashObjectWrapper<TResult>;
    }

    //_.createCallback
    interface LoDashStatic {
        /**
        * Produces a callback bound to an optional thisArg. If func is a property name the created
        * callback will return the property value for a given element. If func is an object the created
        * callback will return true for elements that contain the equivalent object properties,
        * otherwise it will return false.
        * @param func The value to convert to a callback.
        * @param thisArg The this binding of the created callback.
        * @param argCount The number of arguments the callback accepts.
        * @return A callback function.
        **/
        createCallback(
            func: string,
            thisArg?: any,
            argCount?: number): () => any;

        /**
        * @see _.createCallback
        **/
        createCallback(
            func: Dictionary<any>,
            thisArg?: any,
            argCount?: number): () => boolean;
    }

    interface LoDashWrapper<T> {
        /**
        * @see _.createCallback
        **/
        createCallback(
            thisArg?: any,
            argCount?: number): LoDashObjectWrapper<() => any>;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.createCallback
        **/
        createCallback(
            thisArg?: any,
            argCount?: number): LoDashObjectWrapper<() => any>;
    }

    //_.curry
    interface LoDashStatic {
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, R>(func: (t1: T1) => R):
            CurriedFunction1<T1, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, R>(func: (t1: T1, t2: T2) => R):
            CurriedFunction2<T1, T2, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R):
            CurriedFunction3<T1, T2, T3, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R):
            CurriedFunction4<T1, T2, T3, T4, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curry<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R):
            CurriedFunction5<T1, T2, T3, T4, T5, R>;
        /**
         * Creates a function that accepts one or more arguments of func that when called either invokes func returning
         * its result, if all func arguments have been provided, or returns a function that accepts one or more of the
         * remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curry<TResult extends Function>(
          func: Function,
          arity?: number): TResult;
    }

    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.curry
        **/
        curry<TResult extends Function>(arity?: number): LoDashObjectWrapper<TResult>;
    }

    //_.curryRight
    interface LoDashStatic {
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, R>(func: (t1: T1) => R):
            CurriedFunction1<T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, R>(func: (t1: T1, t2: T2) => R):
            CurriedFunction2<T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R):
            CurriedFunction3<T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R):
            CurriedFunction4<T4, T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @return Returns the new curried function.
         */
        curryRight<T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R):
            CurriedFunction5<T5, T4, T3, T2, T1, R>;
        /**
         * This method is like _.curry except that arguments are applied to func in the manner of _.partialRight
         * instead of _.partial.
         * @param func The function to curry.
         * @param arity The arity of func.
         * @return Returns the new curried function.
         */
        curryRight<TResult extends Function>(
          func: Function,
          arity?: number): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.curryRight
         **/
        curryRight<TResult extends Function>(arity?: number): LoDashObjectWrapper<TResult>;
    }

    //_.debounce
    interface LoDashStatic {
        /**
        * Creates a function that will delay the execution of func until after wait milliseconds have
        * elapsed since the last time it was invoked. Provide an options object to indicate that func
        * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
        * to the debounced function will return the result of the last func call.
        *
        * Note: If leading and trailing options are true func will be called on the trailing edge of
        * the timeout only if the the debounced function is invoked more than once during the wait
        * timeout.
        * @param func The function to debounce.
        * @param wait The number of milliseconds to delay.
        * @param options The options object.
        * @param options.leading Specify execution on the leading edge of the timeout.
        * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
        * @param options.trailing Specify execution on the trailing edge of the timeout.
        * @return The new debounced function.
        **/
        debounce<T extends Function>(
            func: T,
            wait: number,
            options?: DebounceSettings): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.debounce
        **/
        debounce(
            wait: number,
            options?: DebounceSettings): LoDashObjectWrapper<Function>;
    }

    interface DebounceSettings {
        /**
        * Specify execution on the leading edge of the timeout.
        **/
        leading?: boolean;

        /**
        * The maximum time func is allowed to be delayed before it's called.
        **/
        maxWait?: number;

        /**
        * Specify execution on the trailing edge of the timeout.
        **/
        trailing?: boolean;
    }

    //_.defer
    interface LoDashStatic {
        /**
        * Defers executing the func function until the current call stack has cleared. Additional
        * arguments will be provided to func when it is invoked.
        * @param func The function to defer.
        * @param args Arguments to invoke the function with.
        * @return The timer id.
        **/
        defer(
            func: Function,
            ...args: any[]): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.defer
        **/
        defer(...args: any[]): LoDashWrapper<number>;
    }

    //_.delay
    interface LoDashStatic {
        /**
        * Executes the func function after wait milliseconds. Additional arguments will be provided
        * to func when it is invoked.
        * @param func The function to delay.
        * @param wait The number of milliseconds to delay execution.
        * @param args Arguments to invoke the function with.
        * @return The timer id.
        **/
        delay(
            func: Function,
            wait: number,
            ...args: any[]): number;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.delay
        **/
        delay(
            wait: number,
            ...args: any[]): LoDashWrapper<number>;
    }

    //_.flow
    interface LoDashStatic {
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flow<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.flow
         **/
        flow<TResult extends Function>(...funcs: Function[]): LoDashObjectWrapper<TResult>;
    }

    //_.flowRight
    interface LoDashStatic {
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flowRight<TResult extends Function>(...funcs: Function[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.flowRight
         **/
        flowRight<TResult extends Function>(...funcs: Function[]): LoDashObjectWrapper<TResult>;
    }

    //_.memoize
    interface MemoizedFunction extends Function {
        cache: MapCache;
    }

    interface LoDashStatic {
        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         * @param func The function to have its output memoized.
         * @param resolver The function to resolve the cache key.
         * @return Returns the new memoizing function.
         */
        memoize<TResult extends MemoizedFunction>(
            func: Function,
            resolver?: Function): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.memoize
         */
        memoize<TResult extends MemoizedFunction>(resolver?: Function): LoDashObjectWrapper<TResult>;
    }

    //_.modArgs
    interface LoDashStatic {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        modArgs<T extends Function, TResult extends Function>(
            func: T,
            ...transforms: Function[]
        ): TResult;

        /**
         * @see _.modArgs
         */
        modArgs<T extends Function, TResult extends Function>(
            func: T,
            transforms: Function[]
        ): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.modArgs
         */
        modArgs<TResult extends Function>(...transforms: Function[]): LoDashObjectWrapper<TResult>;

        /**
         * @see _.modArgs
         */
        modArgs<TResult extends Function>(transforms: Function[]): LoDashObjectWrapper<TResult>;
    }

    //_.negate
    interface LoDashStatic {
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        negate<T extends Function>(predicate: T): (...args: any[]) => boolean;

        /**
         * @see _.negate
         */
        negate<T extends Function, TResult extends Function>(predicate: T): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.negate
         */
        negate(): LoDashObjectWrapper<(...args: any[]) => boolean>;

        /**
         * @see _.negate
         */
        negate<TResult extends Function>(): LoDashObjectWrapper<TResult>;
    }

    //_.once
    interface LoDashStatic {
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */

        once<T extends Function>(func: T): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.once
         */
        once(): LoDashObjectWrapper<T>;
    }

    //_.partial
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes func with any additional partial arguments
        * prepended to those provided to the new function. This method is similar to _.bind except
        * it does not alter the this binding.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partial(
            func: Function,
            ...args: any[]): Function;
    }

    //_.partialRight
    interface LoDashStatic {
        /**
        * This method is like _.partial except that partial arguments are appended to those provided
        * to the new function.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
        **/
        partialRight(
            func: Function,
            ...args: any[]): Function;
    }

    //_.rearg
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with arguments arranged according to the specified indexes where the
         * argument value at the first index is provided as the first argument, the argument value at the second index
         * is provided as the second argument, and so on.
         * @param func The function to rearrange arguments for.
         * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
         * @return Returns the new function.
         */
        rearg<TResult extends Function>(func: Function, indexes: number[]): TResult;

        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(func: Function, ...indexes: number[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(indexes: number[]): LoDashObjectWrapper<TResult>;

        /**
         * @see _.rearg
         */
        rearg<TResult extends Function>(...indexes: number[]): LoDashObjectWrapper<TResult>;
    }

    //_.restParam
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        restParam<TResult extends Function>(func: Function, start?: number): TResult;

        /**
         * @see _.restParam
         */
        restParam<TResult extends Function, TFunc extends Function>(func: TFunc, start?: number): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.restParam
         */
        restParam<TResult extends Function>(start?: number): LoDashObjectWrapper<TResult>;
    }

    //_.spread
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        spread<TResult extends Function>(func: Function): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.spread
         */
        spread<TResult extends Function>(): LoDashObjectWrapper<TResult>;
    }


    //_.throttle
    interface LoDashStatic {
        /**
        * Creates a function that, when executed, will only call the func function at most once per
        * every wait milliseconds. Provide an options object to indicate that func should be invoked
        * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
        * function will return the result of the last func call.
        *
        * Note: If leading and trailing options are true func will be called on the trailing edge of
        * the timeout only if the the throttled function is invoked more than once during the wait timeout.
        * @param func The function to throttle.
        * @param wait The number of milliseconds to throttle executions to.
        * @param options The options object.
        * @param options.leading Specify execution on the leading edge of the timeout.
        * @param options.trailing Specify execution on the trailing edge of the timeout.
        * @return The new throttled function.
        **/
        throttle<T extends Function>(
            func: T,
            wait: number,
            options?: ThrottleSettings): T;
    }

    interface ThrottleSettings {

        /**
        * If you'd like to disable the leading-edge call, pass this as false.
        **/
        leading?: boolean;

        /**
        * If you'd like to disable the execution on the trailing-edge, pass false.
        **/
        trailing?: boolean;
    }

    //_.wrap
    interface LoDashStatic {
        /**
        * Creates a function that provides value to the wrapper function as its first argument.
        * Additional arguments provided to the function are appended to those provided to the
        * wrapper function. The wrapper is executed with the this binding of the created function.
        * @param value The value to wrap.
        * @param wrapper The wrapper function.
        * @return The new function.
        **/
        wrap(
            value: any,
            wrapper: (func: Function, ...args: any[]) => any): Function;
    }

    /********
     * Lang *
     ********/

    //_.clone
    interface LoDashStatic {
        /**
         * Creates a clone of value. If isDeep is true nested objects are cloned, otherwise they are assigned by
         * reference. If customizer is provided it’s invoked to produce the cloned values. If customizer returns
         * undefined cloning is handled by the method instead. The customizer is bound to thisArg and invoked with up
         * to three argument; (value [, index|key, object]).
         * Note: This method is loosely based on the structured clone algorithm. The enumerable properties of arguments
         * objects and objects created by constructors other than Object are cloned to plain Object objects. An empty
         * object is returned for uncloneable values such as functions, DOM nodes, Maps, Sets, and WeakMaps.
         * @param value The value to clone.
         * @param isDeep Specify a deep clone.
         * @param customizer The function to customize cloning values.
         * @param thisArg The this binding of customizer.
         * @return Returns the cloned value.
         */
        clone<T>(
            value: T,
            isDeep?: boolean,
            customizer?: (value: any) => any,
            thisArg?: any): T;

        /**
         * @see _.clone
         */
        clone<T>(
            value: T,
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.clone
         */
        clone(
            isDeep?: boolean,
            customizer?: (value: any) => any,
            thisArg?: any): T;

        /**
         * @see _.clone
         */
        clone(
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.clone
         */
        clone(
            isDeep?: boolean,
            customizer?: (value: any) => any,
            thisArg?: any): T[];

        /**
         * @see _.clone
         */
        clone(
            customizer?: (value: any) => any,
            thisArg?: any): T[];
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.clone
         */
        clone(
            isDeep?: boolean,
            customizer?: (value: any) => any,
            thisArg?: any): T;

        /**
         * @see _.clone
         */
        clone(
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    //_.cloneDeep
    interface LoDashStatic {
        /**
         * Creates a deep clone of value. If customizer is provided it’s invoked to produce the cloned values. If
         * customizer returns undefined cloning is handled by the method instead. The customizer is bound to thisArg
         * and invoked with up to three argument; (value [, index|key, object]).
         * Note: This method is loosely based on the structured clone algorithm. The enumerable properties of arguments
         * objects and objects created by constructors other than Object are cloned to plain Object objects. An empty
         * object is returned for uncloneable values such as functions, DOM nodes, Maps, Sets, and WeakMaps.
         * @param value The value to deep clone.
         * @param customizer The function to customize cloning values.
         * @param thisArg The this binding of customizer.
         * @return Returns the deep cloned value.
         */
        cloneDeep<T>(
            value: T,
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(
            customizer?: (value: any) => any,
            thisArg?: any): T[];
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(
            customizer?: (value: any) => any,
            thisArg?: any): T;
    }

    //_.gt
    interface LoDashStatic {
        /**
         * Checks if value is greater than other.
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        gt(value: any, other: any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }

    //_.gte
    interface LoDashStatic {
        /**
         * Checks if value is greater than or equal to other.
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        gte(value: any, other: any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }

    //_.isArguments
    interface LoDashStatic {
        /**
         * Checks if value is classified as an arguments object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArguments(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }

    //_.isArray
    interface LoDashStatic {
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         **/
        isArray(value?: any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }

    //_.isBoolean
    interface LoDashStatic {
        /**
         * Checks if value is classified as a boolean primitive or object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         **/
        isBoolean(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }

    //_.isDate
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         **/
        isDate(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }

    //_.isElement
    interface LoDashStatic {
        /**
         * Checks if value is a DOM element.
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        isElement(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }

    //_.isEmpty
    interface LoDashStatic {
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         **/
        isEmpty(value?: any[]|Dictionary<any>|string|any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }

    //_.isError
    interface LoDashStatic {
        /**
         * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
         * object.
         * @param value The value to check.
         * @return Returns true if value is an error object, else false.
         */
        isError(value: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }

    //_.isFinite
    interface LoDashStatic {
        /**
         * Checks if value is a finite primitive number.
         * Note: This method is based on Number.isFinite.
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         **/
        isFinite(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }

    //_.isFunction
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Function object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         **/
        isFunction(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }

    //_.isMatch
    interface isMatchCustomizer {
        (value: any, other: any, indexOrKey?: number|string): boolean;
    }

    interface LoDashStatic {
        /**
         * Performs a deep comparison between object and source to determine if object contains equivalent property
         * values. If customizer is provided it’s invoked to compare values. If customizer returns undefined
         * comparisons are handled by the method instead. The customizer is bound to thisArg and invoked with three
         * arguments: (value, other, index|key).
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param customizer The function to customize value comparisons.
         * @param thisArg The this binding of customizer.
         * @return Returns true if object is a match, else false.
         */
        isMatch(object: Object, source: Object, customizer?: isMatchCustomizer, thisArg?: any): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.isMatch
         */
        isMatch(source: Object, customizer?: isMatchCustomizer, thisArg?: any): boolean;
    }

    //_.isNaN
    interface LoDashStatic {
        /**
         * Checks if value is NaN.
         * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
         * @param value The value to check.
         * @return Returns true if value is NaN, else false.
         */
        isNaN(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }

    //_.isNative
    interface LoDashStatic {
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         * @retrun Returns true if value is a native function, else false.
         */
        isNative(value: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isNative
         */
        isNative(): boolean;
    }

    //_.isNull
    interface LoDashStatic {
        /**
         * Checks if value is null.
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         **/
        isNull(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isNull
         */
        isNull(): boolean;
    }

    //_.isNumber
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Number primitive or object.
         * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isNumber(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isNumber
         */
        isNumber(): boolean;
    }

    //_.isObject
    interface LoDashStatic {
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         **/
        isObject(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isObject
         */
        isObject(): boolean;
    }

    //_.isPlainObject
    interface LoDashStatic {
        /**
         * Checks if value is a plain object, that is, an object created by the Object constructor or one with a
         * [[Prototype]] of null.
         *
         * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.
         *
         * @param value The value to check.
         * @return Returns true if value is a plain object, else false.
         */
        isPlainObject(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): boolean;
    }

    //_.isRegExp
    interface LoDashStatic {
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isRegExp(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isRegExp
         */
        isRegExp(): boolean;
    }

    //_.isString
    interface LoDashStatic {
        /**
         * Checks if value is classified as a String primitive or object.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         **/
        isString(value?: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isString
         */
        isString(): boolean;
    }

    //_.isTypedArray
    interface LoDashStatic {
        /**
         * Checks if value is classified as a typed array.
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isTypedArray(value: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): boolean;
    }

    //_.isUndefined
    interface LoDashStatic {
        /**
         * Checks if value is undefined.
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         **/
        isUndefined(value: any): boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * see _.isUndefined
         */
        isUndefined(): boolean;
    }

    //_.lt
    interface LoDashStatic {
        /**
         * Checks if value is less than other.
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        lt(value: any, other: any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.lt
         */
        lt(other: any): boolean;
    }

    //_.lte
    interface LoDashStatic {
        /**
         * Checks if value is less than or equal to other.
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than or equal to other, else false.
         */
        lte(value: any, other: any): boolean;
    }

    interface LoDashWrapperBase<T,TWrapper> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }

    //_.toArray
    interface LoDashStatic {
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        toArray(value: string): string[];

        /**
         * @see _.toArray
         */
        toArray<T>(value: List<T>|Dictionary<T>): T[];

        /**
         * @see _.toArray
         */
        toArray<TValue, TResult>(value: TValue): TResult[];

        /**
         * @see _.toArray
         */
        toArray<TValue>(value: TValue): any[];

        /**
         * @see _.toArray
         */
        toArray(value?: any): any[];
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashArrayWrapper<TResult>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray(): LoDashArrayWrapper<T>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.toArray
         */
        toArray<TResult>(): LoDashArrayWrapper<TResult>;
    }

    //_.toPlainObject
    interface LoDashStatic {
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        toPlainObject<TResult extends {}>(value?: any): TResult;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject<TResult extends {}>(): LoDashObjectWrapper<TResult>;
    }

    /********
     * Math *
     ********/

    //_.add
    interface LoDashStatic {
        /**
         * Adds two numbers.
         * @param augend The first number to add.
         * @param addend The second number to add.
         * @return Returns the sum.
         */
        add(augend: number, addend: number): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }

    //_.max
    interface LoDashStatic {
        /**
         * Gets the maximum value of collection. If collection is empty or falsey -Infinity is returned. If an iteratee
         * function is provided it’s invoked for each value in collection to generate the criterion by which the value
         * is ranked. The iteratee is bound to thisArg and invoked with three arguments: (value, index, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the maximum value.
         */
        max<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.max
         */
        max(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<TObject extends {}>(
            whereValue?: TObject
        ): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.max
         */
        max<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<T>(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.max
         */
        max<TObject extends {}, T>(
            whereValue?: TObject
        ): T;
    }

    //_.min
    interface LoDashStatic {
        /**
         * Gets the minimum value of collection. If collection is empty or falsey Infinity is returned. If an iteratee
         * function is provided it’s invoked for each value in collection to generate the criterion by which the value
         * is ranked. The iteratee is bound to thisArg and invoked with three arguments: (value, index, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the minimum value.
         */
        min<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.min
         */
        min(
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<TObject extends {}>(
            whereValue?: TObject
        ): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.min
         */
        min<T>(
            iteratee?: ListIterator<T, any>|DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<T>(
            iteratee?: string,
            thisArg?: any
        ): T;

        /**
         * @see _.min
         */
        min<TObject extends {}, T>(
            whereValue?: TObject
        ): T;
    }

    /**********
     * Number *
     **********/

    //_.inRange
    interface LoDashStatic {
        /**
         * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
         * with start then set to 0.
         * @param n The number to check.
         * @param start The start of the range.
         * @param end The end of the range.
         * @return Returns true if n is in the range, else false.
         */
        inRange(n: number, start: number, end: number): boolean;


        /**
         * @see _.inRange
         */
        inRange(n: number, end: number): boolean;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.inRange
         */
        inRange(start: number, end: number): boolean;

        /**
         * @see _.inRange
         */
        inRange(end: number): boolean;
    }

    //_.random
    interface LoDashStatic {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        random(
            min?: number,
            max?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            min?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(floating?: boolean): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.random
         */
        random(
            max?: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(floating?: boolean): number;
    }

    /**********
     * Object *
     **********/

    //_.assign
    interface LoDashStatic {
        /**
        * Assigns own enumerable properties of source object(s) to the destination object. Subsequent
        * sources will overwrite property assignments of previous sources. If a callback is provided
        * it will be executed to produce the assigned values. The callback is bound to thisArg and
        * invoked with two arguments; (objectValue, sourceValue).
        * @param object The destination object.
        * @param s1-8 The source object(s)
        * @param callback The function to customize merging properties.
        * @param thisArg The this binding of callback.
        * @return The destination object.
        **/
        assign<P, T, S1, Value, Result>(
            object: T,
            s1: S1,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        assign<P, T, S1, S2, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        assign<P, T, S1, S2, S3, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        assign<P, T, S1, S2, S3, S4, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        extend<P, T, S1, Value, Result>(
            object: T,
            s1: S1,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        extend<P, T, S1, S2, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        extend<P, T, S1, S2, S3, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;

        /**
        * @see _.assign
        **/
        extend<P, T, S1, S2, S3, S4, Value, Result>(
            object: T,
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): Result;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.assign
        **/
        assign<S1, Value, TResult>(
            s1: S1,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;

        /**
        * @see _.assign
        **/
        assign<S1, S2, Value, TResult>(
            s1: S1,
            s2: S2,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        assign<S1, S2, S3, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        assign<S1, S2, S3, S4, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        assign<S1, S2, S3, S4, S5, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            s5: S5,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;

        /**
        * @see _.assign
        **/
        extend<S1, Value, TResult>(
            s1: S1,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;

        /**
        * @see _.assign
        **/
        extend<S1, S2, Value, TResult>(
            s1: S1,
            s2: S2,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        extend<S1, S2, S3, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        extend<S1, S2, S3, S4, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;
        /**
        * @see _.assign
        **/
        extend<S1, S2, S3, S4, S5, Value, TResult>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
            s5: S5,
            callback?: (objectValue: Value, sourceValue: Value) => Value,
            thisArg?: any): TResult;

    }

    //_.create
    interface LoDashStatic {
        /**
         * Creates an object that inherits from the given prototype object. If a properties object is provided its own
         * enumerable properties are assigned to the created object.
         * @param prototype The object to inherit from.
         * @param properties The properties to assign to the object.
         * @return Returns the new object.
         */
        create<TResult extends {}>(prototype: Object, properties?: Object): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.create
         */
        create<TResult extends {}>(properties?: Object): LoDashObjectWrapper<TResult>;
    }

    //_.defaults
    interface LoDashStatic {
        /**
        * Assigns own enumerable properties of source object(s) to the destination object for all
        * destination properties that resolve to undefined. Once a property is set, additional defaults
        * of the same property will be ignored.
        * @param object The destination object.
        * @param sources The source objects.
        * @return The destination object.
        **/
        defaults<T, TResult>(
            object: T,
            ...sources: any[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.defaults
        **/
        defaults<T, TResult>(...sources: any[]): LoDashObjectWrapper<TResult>
    }

    //_.defaultsDeep
    interface LoDashStatic {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        defaultsDeep<T, TResult>(
            object: T,
            ...sources: any[]): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep<TResult>(...sources: any[]): LoDashObjectWrapper<TResult>
    }

    //_.findKey
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the key of the first element predicate returns truthy for
         * instead of the element itself.
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the key of the matched element, else undefined.
         */
        findKey<TValues, TObject>(
            object: TObject,
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TObject>(
            object: TObject,
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TObject>(
            object: TObject,
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TWhere extends Dictionary<any>, TObject>(
            object: TObject,
            predicate?: TWhere
        ): string;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.findKey
         */
        findKey<TValues>(
            predicate?: DictionaryIterator<TValues, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: ObjectIterator<any, boolean>,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey(
            predicate?: string,
            thisArg?: any
        ): string;

        /**
         * @see _.findKey
         */
        findKey<TWhere extends Dictionary<any>>(
            predicate?: TWhere
        ): string;
    }

    //_.findLastKey
    interface LoDashStatic {
        /**
        * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
        * @param object The object to search.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return The key of the found element, else undefined.
        **/
        findLastKey(
            object: any,
            callback: (value: any) => boolean,
            thisArg?: any): string;

        /**
        * @see _.findLastKey
        * @param pluckValue _.pluck style callback
        **/
        findLastKey(
            object: any,
            pluckValue: string): string;

        /**
        * @see _.findLastKey
        * @param whereValue _.where style callback
        **/
        findLastKey<W extends Dictionary<any>, T>(
            object: T,
            whereValue: W): string;
    }

    //_.forIn
    interface LoDashStatic {
        /**
        * Iterates over own and inherited enumerable properties of an object, executing the callback for
        * each property. The callback is bound to thisArg and invoked with three arguments; (value, key,
        * object). Callbacks may exit iteration early by explicitly returning false.
        * @param object The object to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return object
        **/
        forIn<T>(
            object: Dictionary<T>,
            callback?: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.forIn
        **/
        forIn<T>(
            object: T,
            callback?: ObjectIterator<any, void>,
            thisArg?: any): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forIn
        **/
        forIn<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): _.LoDashObjectWrapper<T>;
    }

    //_.forInRight
    interface LoDashStatic {
        /**
        * This method is like _.forIn except that it iterates over elements of a collection in the
        * opposite order.
        * @param object The object to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return object
        **/
        forInRight<T extends {}>(
            object: Dictionary<T>,
            callback?: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.forInRight
        **/
        forInRight<T extends {}>(
            object: T,
            callback?: ObjectIterator<T, void>,
            thisArg?: any): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forInRight
        **/
        forInRight<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): _.LoDashObjectWrapper<T>;
    }

    //_.forOwn
    interface LoDashStatic {
        /**
        * Iterates over own enumerable properties of an object, executing the callback for each
        * property. The callback is bound to thisArg and invoked with three arguments; (value, key,
        * object). Callbacks may exit iteration early by explicitly returning false.
        * @param object The object to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return object
        **/
        forOwn<T extends {}>(
            object: Dictionary<T>,
            callback?: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;

        /**
        * @see _.forOwn
        **/
        forOwn<T extends {}>(
            object: T,
            callback?: ObjectIterator<any, void>,
            thisArg?: any): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forOwn
        **/
        forOwn<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): _.LoDashObjectWrapper<T>;
    }

    //_.forOwnRight
    interface LoDashStatic {
        /**
        * This method is like _.forOwn except that it iterates over elements of a collection in the
        * opposite order.
        * @param object The object to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of callback.
        * @return object
        **/
        forOwnRight<T extends {}>(
            object: Dictionary<T>,
            callback?: DictionaryIterator<T, void>,
            thisArg?: any): Dictionary<T>;
        /**
        * @see _.forOwnRight
        **/
        forOwnRight<T extends {}>(
            object: T,
            callback?: ObjectIterator<any, void>,
            thisArg?: any): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.forOwnRight
        **/
        forOwnRight<T extends {}>(
            callback: ObjectIterator<T, void>,
            thisArg?: any): _.LoDashObjectWrapper<T>;
    }

    //_.functions
    interface LoDashStatic {
        /**
        * Creates a sorted array of property names of all enumerable properties, own and inherited, of
        * object that have function values.
        * @param object The object to inspect.
        * @return An array of property names that have function values.
        **/
        functions(object: any): string[];

        /**
        * @see _functions
        **/
        methods(object: any): string[];
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.functions
        **/
        functions(): _.LoDashArrayWrapper<string>;

        /**
        * @see _.functions
        **/
        methods(): _.LoDashArrayWrapper<string>;
    }

    //_.get
    interface LoDashStatic {
        /**
         * Gets the property value at path of object. If the resolved
         * value is undefined the defaultValue is used in its place.
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         **/
        get<TResult>(object: Object,
               path: string|number|boolean|Array<string|number|boolean>,
               defaultValue?:TResult
        ): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.get
         **/
        get<TResult>(path: string|number|boolean|Array<string|number|boolean>,
                     defaultValue?: TResult
        ): TResult;
    }

    //_.has
    interface LoDashStatic {
        /**
         * Checks if path is a direct property.
         *
         * @param object The object to query.
         * @param path The path to check.
         * @return Returns true if path is a direct property, else false.
         */
        has(object: any, path: string|number|boolean|Array<string|number|boolean>): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.has
         */
        has(path: string|number|boolean|Array<string|number|boolean>): boolean;
    }

    //_.invert
    interface LoDashStatic {
        /**
         * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
         * subsequent values overwrite property assignments of previous values unless multiValue is true.
         *
         * @param object The object to invert.
         * @param multiValue Allow multiple values per key.
         * @return Returns the new inverted object.
         */
        invert<T extends {}, TResult extends {}>(object: T, multiValue?: boolean): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.invert
         */
        invert<TResult extends {}>(multiValue?: boolean): LoDashObjectWrapper<TResult>;
    }

    //_.isEqual
    interface EqCustomizer {
        (value: any, other: any, indexOrKey?: number|string): boolean;
    }

    interface LoDashStatic {
        /**
         * Performs a deep comparison between two values to determine if they are equivalent. If customizer is
         * provided it is invoked to compare values. If customizer returns undefined comparisons are handled
         * by the method instead. The customizer is bound to thisArg and invoked with three
         * arguments: (value, other [, index|key]).
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param callback The function to customize value comparisons.
         * @param thisArg The this binding of customizer.
         * @return True if the values are equivalent, else false.
         */
        isEqual(value?: any,
                other?: any,
                callback?: EqCustomizer,
                thisArg?: any): boolean;

        /**
         * @see _.isEqual
         */
        eq(value?: any,
           other?: any,
           callback?: EqCustomizer,
           thisArg?: any): boolean;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.isEqual
         */
        isEqual(other?: any,
                callback?: EqCustomizer,
                thisArg?: any): boolean;

        /**
         * @see _.isEqual
         */
        eq(other?: any,
           callback?: EqCustomizer,
           thisArg?: any): boolean;

    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.isEqual
         */
        isEqual(other?: any,
                callback?: EqCustomizer,
                thisArg?: any): boolean;

        /**
         * @see _.isEqual
         */
        eq(other?: any,
           callback?: EqCustomizer,
           thisArg?: any): boolean;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.isEqual
         */
        isEqual(other?: any,
                callback?: EqCustomizer,
                thisArg?: any): boolean;

        /**
         * @see _.isEqual
         */
        eq(other?: any,
           callback?: EqCustomizer,
           thisArg?: any): boolean;
    }

    //_.keys
    interface LoDashStatic {
        /**
        * Creates an array composed of the own enumerable property names of an object.
        * @param object The object to inspect.
        * @return An array of property names.
        **/
        keys(object?: any): string[];
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.keys
        **/
        keys(): LoDashArrayWrapper<string>
    }

    //_.keysIn
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         * @param object The object to query.
         * @return An array of property names.
         **/
        keysIn(object?: any): string[];
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.keysIn
         **/
        keysIn(): LoDashArrayWrapper<string>
    }

    //_.mapKeys
    interface LoDashStatic {
        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped object.
         */
        mapKeys<T, TKey>(
            object: List<T>,
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T, TKey>(
            object: Dictionary<T>,
            iteratee?: DictionaryIterator<T, TKey>,
            thisArg?: any
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T, TObject extends {}>(
            object: List<T>|Dictionary<T>,
            iteratee?: TObject
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            object: List<T>|Dictionary<T>,
            iteratee?: string
        ): Dictionary<T>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TKey>(
            iteratee?: ListIterator<T, TKey>,
            thisArg?: any
        ): LoDashObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TObject extends {}>(
            iteratee?: TObject
        ): LoDashObjectWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            iteratee?: string
        ): LoDashObjectWrapper<Dictionary<T>>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TKey>(
            iteratee?: ListIterator<TResult, TKey>|DictionaryIterator<TResult, TKey>,
            thisArg?: any
        ): LoDashObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult, TObject extends {}>(
            iteratee?: TObject
        ): LoDashObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<TResult>(
            iteratee?: string
        ): LoDashObjectWrapper<Dictionary<TResult>>;
    }

    //_.mapValues
    interface LoDashStatic {
        /**
        * Creates an object with the same keys as object and values generated by running each own
        * enumerable property of object through iteratee. The iteratee function is bound to thisArg
        * and invoked with three arguments: (value, key, object).
        *
        * If a property name is provided iteratee the created "_.property" style callback returns
        * the property value of the given element.
        *
        * If a value is also provided for thisArg the creted "_.matchesProperty" style callback returns
        * true for elements that have a matching property value, else false;.
        *
        * If an object is provided for iteratee the created "_.matches" style callback returns true
        * for elements that have the properties of the given object, else false.
        *
        * @param {Object} object The object to iterate over.
        * @param {Function|Object|string} [iteratee=_.identity]  The function invoked per iteration.
        * @param {Object} [thisArg] The `this` binding of `iteratee`.
        * @return {Object} Returns the new mapped object.
        */
        mapValues<T, TResult>(obj: Dictionary<T>, callback: ObjectIterator<T, TResult>, thisArg?: any): Dictionary<TResult>;
        mapValues<T>(obj: Dictionary<T>, where: Dictionary<T>): Dictionary<boolean>;
        mapValues<T, TMapped>(obj: T, pluck: string): TMapped;
        mapValues<T>(obj: T, callback: ObjectIterator<any, any>, thisArg?: any): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.mapValues
         * TValue is the type of the property values of T.
         * TResult is the type output by the ObjectIterator function
         */
        mapValues<TValue, TResult>(callback: ObjectIterator<TValue, TResult>, thisArg?: any): LoDashObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the property specified by pluck.
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(pluck: string): LoDashObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties on the object specified by pluck.
         * T should be a Dictionary<Dictionary<Dictionary<TResult>>>
         */
        mapValues<TResult>(pluck: string, where: Dictionary<TResult>): LoDashArrayWrapper<Dictionary<boolean>>;

        /**
         * @see _.mapValues
         * TResult is the type of the properties of each object in the values of T
         * T should be a Dictionary<Dictionary<TResult>>
         */
        mapValues<TResult>(where: Dictionary<TResult>): LoDashArrayWrapper<boolean>;
    }

    //_.merge
    interface MergeCustomizer {
        (value: any, srcValue: any, key?: string, object?: Object, source?: Object): any;
    }

    interface LoDashStatic {
        /**
         * Recursively merges own enumerable properties of the source object(s), that don’t resolve to undefined into
         * the destination object. Subsequent sources overwrite property assignments of previous sources. If customizer
         * is provided it’s invoked to produce the merged values of the destination and source properties. If
         * customizer returns undefined merging is handled by the method instead. The customizer is bound to thisArg
         * and invoked with five arguments: (objectValue, sourceValue, key, object, source).
         *
         * @param object The destination object.
         * @param source The source objects.
         * @param customizer The function to customize assigned values.
         * @param thisArg The this binding of customizer.
         * @return Returns object.
         */
        merge<TObject, TSource, TResult>(
            object: TObject,
            source: TSource,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TResult>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TResult>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): TResult;

        /**
         * @see _.merge
         */
        merge<TObject, TResult>(
            object: TObject,
            ...otherArgs: any[]
        ): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.merge
         */
        merge<TSource, TResult>(
            source: TSource,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TResult>(
            source1: TSource1,
            source2: TSource2,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TResult>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4, TResult>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer?: MergeCustomizer,
            thisArg?: any
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.merge
         */
        merge<TResult>(
            ...otherArgs: any[]
        ): LoDashObjectWrapper<TResult>;
    }

    //_.omit
    interface LoDashStatic {
        /**
        * Creates a shallow clone of object excluding the specified properties. Property names may be
        * specified as individual arguments or as arrays of property names. If a callback is provided
        * it will be executed for each property of object omitting the properties the callback returns
        * truey for. The callback is bound to thisArg and invoked with three arguments; (value, key,
        * object).
        * @param object The source object.
        * @param keys The properties to omit.
        * @return An object without the omitted properties.
        **/
        omit<Omitted, T>(
            object: T,
            ...keys: string[]): Omitted;

        /**
        * @see _.omit
        **/
        omit<Omitted, T>(
            object: T,
            keys: string[]): Omitted;

        /**
        * @see _.omit
        **/
        omit<Omitted, T>(
            object: T,
            callback: ObjectIterator<any, boolean>,
            thisArg?: any): Omitted;
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.omit
        **/
        omit<Omitted>(
            ...keys: string[]): LoDashObjectWrapper<Omitted>;

        /**
        * @see _.omit
        **/
        omit<Omitted>(
            keys: string[]): LoDashObjectWrapper<Omitted>;

        /**
        * @see _.omit
        **/
        omit<Omitted>(
            callback: ObjectIterator<any, boolean>,
            thisArg?: any): LoDashObjectWrapper<Omitted>;
    }

    //_.pairs
    interface LoDashStatic {
        /**
        * Creates a two dimensional array of an object's key-value pairs,
        * i.e. [[key1, value1], [key2, value2]].
        * @param object The object to inspect.
        * @return Aew array of key-value pairs.
        **/
        pairs(object?: any): any[][];
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.pairs
        **/
        pairs(): LoDashArrayWrapper<any[]>;
    }

    //_.pick
    interface LoDashStatic {
        /**
         * Creates an object composed of the picked object properties. Property names may be specified as individual
         * arguments or as arrays of property names. If predicate is provided it’s invoked for each property of object
         * picking the properties predicate returns truthy for. The predicate is bound to thisArg and invoked with
         * three arguments: (value, key, object).
         *
         * @param object The source object.
         * @param predicate The function invoked per iteration or property names to pick, specified as individual
         * property names or arrays of property names.
         * @param thisArg The this binding of predicate.
         * @return An object composed of the picked properties.
         */
        pick<TResult extends Object, T extends Object>(
            object: T,
            predicate: ObjectIterator<any, boolean>,
            thisArg?: any
        ): TResult;

        /**
         * @see _.pick
         */
        pick<TResult extends Object, T extends Object>(
            object: T,
            ...predicate: Array<string|number|boolean|Array<string|number|boolean>>
        ): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.pick
         */
        pick<TResult extends Object>(
            predicate: ObjectIterator<any, boolean>,
            thisArg?: any
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.pick
         */
        pick<TResult extends Object>(
            ...predicate: Array<string|number|boolean|Array<string|number|boolean>>
        ): LoDashObjectWrapper<TResult>;
    }

    //_.result
    interface LoDashStatic {
        /**
         * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
         * of its parent object and its result is returned.
         *
         * @param object The object to query.
         * @param path The path of the property to resolve.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        result<TObject, TResult>(
            object: TObject,
            path: number|string|boolean|Array<number|string|boolean>,
            defaultValue?: TResult
        ): TResult;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: number|string|boolean|Array<number|string|boolean>,
            defaultValue?: TResult
        ): TResult;
    }

    //_.set
    interface LoDashStatic {
        /**
         * Sets the property value of path on object. If a portion of path does not exist it’s created.
         *
         * @param object The object to augment.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @return Returns object.
         */
        set<T>(
            object: T,
            path: StringRepresentable|StringRepresentable[],
            value: any
        ): T;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.set
         */
        set(
            path: StringRepresentable|StringRepresentable[],
            value: any
        ): LoDashObjectWrapper<T>;
    }

    //_.transform
    interface LoDashStatic {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(
            object: T[],
            iteratee?: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): TResult[];

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: T[],
            iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee?: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): TResult[];
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(
            iteratee?: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.transform
         */
        transform<TResult>(
            iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): LoDashObjectWrapper<Dictionary<TResult>>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>,
            thisArg?: any
        ): LoDashObjectWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            iteratee?: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[],
            thisArg?: any
        ): LoDashArrayWrapper<TResult>;
    }

    //_.values
    interface LoDashStatic {
        /**
        * Creates an array of the own enumerable property values of object.
        * @param object The object to query.
        * @return Returns an array of property values.
        **/
        values<T>(object?: any): T[];
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.values
        **/
        values<TResult>(): LoDashObjectWrapper<TResult[]>;
    }

    //_.valuesIn
    interface LoDashStatic {
        /**
        * Creates an array of the own and inherited enumerable property values of object.
        * @param object The object to query.
        * @return Returns the array of property values.
        **/
        valuesIn<T>(object?: any): T[];
    }

    interface LoDashObjectWrapper<T> {
        /**
        * @see _.valuesIn
        **/
        valuesIn<TResult>(): LoDashObjectWrapper<TResult[]>;
    }

    /**********
     * String *
     **********/

    //_.camelCase
    interface LoDashStatic {
        /**
         * Converts string to camel case.
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        camelCase(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.camelCase
         */
        camelCase(): string;
    }

    //_.capitalize
    interface LoDashStatic {
        capitalize(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.capitalize
         */
        capitalize(): string;
    }

    //_.deburr
    interface LoDashStatic {
        /**
         * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
         * diacritical marks.
         * @param string The string to deburr.
         * @return Returns the deburred string.
         */
        deburr(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.deburr
         */
        deburr(): string;
    }

    //_.endsWith
    interface LoDashStatic {
        /**
         * Checks if string ends with the given target string.
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string ends with target, else false.
         */
        endsWith(string?: string, target?: string, position?: number): boolean;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.endsWith
         */
        endsWith(target?: string, position?: number): boolean;
    }

    // _.escape
    interface LoDashStatic {
        /**
         * Converts the characters "&", "<", ">", '"', "'", and "`", in string to their corresponding HTML entities.
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escape(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.escape
         */
        escape(): string;
    }

    // _.escapeRegExp
    interface LoDashStatic {
        /**
         * Escapes the RegExp special characters "\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "[", "]",
         * "{" and "}" in string.
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        escapeRegExp(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.escapeRegExp
         */
        escapeRegExp(): string;
    }

    //_.kebabCase
    interface LoDashStatic {
        /**
         * Converts string to kebab case.
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        kebabCase(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.kebabCase
         */
        kebabCase(): string;
    }

    interface LoDashStatic {
        /**
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        pad(string?: string, length?: number, chars?: string): string;
    }

    //_.pad
    interface LoDashWrapper<T> {
        /**
         * @see _.pad
         */
        pad(length?: number, chars?: string): string;
    }

    //_.padLeft
    interface LoDashStatic {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padLeft(string?: string, length?: number, chars?: string): string;
    }

    //_.padLeft
    interface LoDashWrapper<T> {
        /**
         * @see _.padLeft
         */
        padLeft(length?: number, chars?: string): string;
    }

    //_.padRight
    interface LoDashStatic {
        /**
         * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padRight(string?: string, length?: number, chars?: string): string;
    }

    //_.padRight
    interface LoDashWrapper<T> {
        /**
         * @see _.padRight
         */
        padRight(length?: number, chars?: string): string;
    }

    //_.parseInt
    interface LoDashStatic {
        /**
         * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used
         * unless value is a hexadecimal, in which case a radix of 16 is used.
         * Note: This method aligns with the ES5 implementation of parseInt.
         * @param string The string to convert.
         * @param radix The radix to interpret value by.
         * @return Returns the converted integer.
         */
        parseInt(string: string, radix?: number): number;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }

    //_.repeat
    interface LoDashStatic {
        /**
         * Repeats the given string n times.
         * @param string The string to repeat.
         * @param n The number of times to repeat the string.
         * @return Returns the repeated string.
         */
        repeat(string?: string, n?: number): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }

    //_.snakeCase
    interface LoDashStatic {
        /**
         * Converts string to snake case.
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        snakeCase(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }

    //_.startCase
    interface LoDashStatic {
        /**
         * Converts string to start case.
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        startCase(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.startCase
         */
        startCase(): string;
    }

    //_.startsWith
    interface LoDashStatic {
        /**
         * Checks if string starts with the given target string.
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string starts with target, else false.
         */
        startsWith(string?: string, target?: string, position?: number): boolean;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.startsWith
         */
        startsWith(target?: string, position?: number): boolean;
    }

    //_.template
    interface TemplateExecutor {
        (data?: Object): string;
        source: string;
    }

    interface LoDashStatic {
        /**
         * Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
         * HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
         * delimiters. Data properties may be accessed as free variables in the template. If a setting object is
         * provided it takes precedence over _.templateSettings values.
         *
         * Note: In the development build _.template utilizes
         * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
         * debugging.
         *
         * For more information on precompiling templates see
         * [lodash's custom builds documentation](https://lodash.com/custom-builds).
         *
         * For more information on Chrome extension sandboxes see
         * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
         *
         * @param string The template string.
         * @param options The options object.
         * @param options.escape The HTML "escape" delimiter.
         * @param options.evaluate The "evaluate" delimiter.
         * @param options.imports An object to import into the template as free variables.
         * @param options.interpolate The "interpolate" delimiter.
         * @param options.variable The data object variable name.
         * @return Returns the compiled template function.
         */
        template(
            string: string,
            options?: TemplateSettings): TemplateExecutor;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.template
         */
        template(options?: TemplateSettings): TemplateExecutor;
    }

    //_.trim
    interface LoDashStatic {
        /**
         * Removes leading and trailing whitespace or specified characters from string.
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trim(string?: string, chars?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.trim
         */
        trim(chars?: string): string;
    }

    //_.trimLeft
    interface LoDashStatic {
        /**
         * Removes leading whitespace or specified characters from string.
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimLeft(string?: string, chars?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.trimLeft
         */
        trimLeft(chars?: string): string;
    }

    //_.trimRight
    interface LoDashStatic {
        /**
         * Removes trailing whitespace or specified characters from string.
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        trimRight(string?: string, chars?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.trimRight
         */
        trimRight(chars?: string): string;
    }

    //_.trunc
    interface TruncOptions {
        /** The maximum string length. */
        length?: number;
        /** The string to indicate text is omitted. */
        omission?: string;
        /** The separator pattern to truncate to. */
        separator?: string|RegExp;
    }

    interface LoDashStatic {
        /**
         * Truncates string if it’s longer than the given maximum string length. The last characters of the truncated
         * string are replaced with the omission string which defaults to "…".
         * @param string The string to truncate.
         * @param options The options object or maximum string length.
         * @return Returns the truncated string.
         */
        trunc(string?: string, options?: TruncOptions|number): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.trunc
         */
        trunc(options?: TruncOptions|number): string;
    }

    //_.unescape
    interface LoDashStatic {
        /**
         * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
         * in string to their corresponding characters.
         * @param string The string to unescape.
         * @return Returns the unescaped string.
         */
        unescape(string?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.unescape
         */
        unescape(): string;
    }

    //_.words
    interface LoDashStatic {
        /**
         * Splits string into an array of its words.
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of string.
         */
        words(string?: string, pattern?: string|RegExp): string[];
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.words
         */
        words(pattern?: string|RegExp): string[];
    }

    /***********
     * Utility *
     ***********/

    //_.attempt
    interface LoDashStatic {
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        attempt<TResult>(func: (...args: any[]) => TResult): TResult|Error;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(): TResult|Error;
    }

    //_.callback
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of thisArg and arguments of the created function.
         * If func is a property name the created callback returns the property value for a given element. If func is
         * an object the created callback returns true for elements that contain the equivalent object properties,
         * otherwise it returns false.
         *
         * @param func The value to convert to a callback.
         * @param thisArg The this binding of func.
         * @result Returns the callback.
         */
        callback<TResult>(
            func: Function,
            thisArg?: any
        ): (...args: any[]) => TResult;

        /**
         * @see _.callback
         */
        callback<TResult>(
            func: string,
            thisArg?: any
        ): (object: any) => TResult;

        /**
         * @see _.callback
         */
        callback(
            func: Object,
            thisArg?: any
        ): (object: any) => boolean;

        /**
         * @see _.callback
         */
        callback<TResult>(): (value: TResult) => TResult;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.callback
         */
        callback<TResult>(thisArg?: any): LoDashObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.callback
         */
        callback(thisArg?: any): LoDashObjectWrapper<(object: any) => boolean>;

        /**
         * @see _.callback
         */
        callback<TResult>(thisArg?: any): LoDashObjectWrapper<(...args: any[]) => TResult>;
    }

    //_.identity
    interface LoDashStatic {
        /**
         * This method returns the first argument provided to it.
         * @param value Any value.
         * @return Returns value.
         */
        identity<T>(value?: T): T;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T[];
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.identity
         */
        identity(): T;
    }

    //_.iteratee
    interface LoDashStatic {
        /**
         * @see _.callback
         */
        iteratee<TResult>(
            func: Function,
            thisArg?: any
        ): (...args: any[]) => TResult;

        /**
         * @see _.callback
         */
        iteratee<TResult>(
            func: string,
            thisArg?: any
        ): (object: any) => TResult;

        /**
         * @see _.callback
         */
        iteratee(
            func: Object,
            thisArg?: any
        ): (object: any) => boolean;

        /**
         * @see _.callback
         */
        iteratee<TResult>(): (value: TResult) => TResult;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.callback
         */
        iteratee<TResult>(thisArg?: any): LoDashObjectWrapper<(object: any) => TResult>;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.callback
         */
        iteratee(thisArg?: any): LoDashObjectWrapper<(object: any) => boolean>;

        /**
         * @see _.callback
         */
        iteratee<TResult>(thisArg?: any): LoDashObjectWrapper<(...args: any[]) => TResult>;
    }

    //_.matches
    interface LoDashStatic {
        /**
         * Creates a function that performs a deep comparison between a given object and source, returning true if the
         * given object has equivalent property values, else false.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own
         * or inherited property value see _.matchesProperty.
         *
         * @param source The object of property values to match.
         * @return Returns the new function.
         */
        matches<T>(
            source: T
        ): (value: any) => boolean;

        /**
         * @see _.matches
         */
        matches<T, V>(
            source: T
        ): (value: V) => boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.matches
         */
        matches<V>(): LoDashObjectWrapper<(value: V) => boolean>;
    }

    //_.matchesProperty
    interface LoDashStatic {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        matchesProperty<T>(
            path: StringRepresentable|StringRepresentable[],
            srcValue: T
        ): (value: any) => boolean;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(
            path: StringRepresentable|StringRepresentable[],
            srcValue: T
        ): (value: V) => boolean;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashObjectWrapper<(value: any) => boolean>;

        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashObjectWrapper<(value: Value) => boolean>;
    }

    //_.method
    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
         * to the invoked method.
         * @param path The path of the method to invoke.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        method<TResult>(path: string, ...args: any[]): (object: any) => TResult;

        /**
         * @see _.method
         */
        method<TResult>(path: any[], ...args: any[]): (object: any) => TResult;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashWrapper<(object: any) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashWrapper<(object: any) => TResult>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashWrapper<(object: any) => TResult>;

        /**
         * @see _.method
         */
        method<TResult>(...args: any[]): LoDashWrapper<(object: any) => TResult>;
    }

    //_.methodOf
    interface LoDashStatic {
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        methodOf<TResult>(object: Object, ...args: any[]): (path: string | any[]) => TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.methodOf
         */
        methodOf<TResult>(...args: any[]): LoDashObjectWrapper<(path: string | any[]) => TResult>;
    }

    //_.mixin
    interface MixinOptions {
        chain?: boolean;
    }

    interface LoDashStatic {
        /**
         * Adds all own enumerable function properties of a source object to the destination object. If object is a
         * function then methods are added to its prototype as well.
         *
         * Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
         * the original.
         *
         * @param object The destination object.
         * @param source The object of functions to add.
         * @param options The options object.
         * @param options.chain Specify whether the functions added are chainable.
         * @return Returns object.
         */
        mixin<TResult, TObject>(
            object: TObject,
            source: Dictionary<Function>,
            options?: MixinOptions
        ): TResult;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): TResult;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): LoDashObjectWrapper<TResult>;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            options?: MixinOptions
        ): LoDashObjectWrapper<TResult>;
    }

    //_.noConflict
    interface LoDashStatic {
        /**
         * Reverts the _ variable to its previous value and returns a reference to the lodash function.
         *
         * @return Returns the lodash function.
         */
        noConflict(): typeof _;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }

    //_.noop
    interface LoDashStatic {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         * @return undefined
         */
        noop(...args: any[]): void;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }

    //_.property
    interface LoDashStatic {
        /**
         * Creates a function that returns the property value at path on a given object.
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: string|string[]): (obj: TObj) => TResult;
    }

    interface LoDashStringWrapper {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashObjectWrapper<(obj: TObj) => TResult>;
    }

    interface LoDashArrayWrapper<T> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): LoDashObjectWrapper<(obj: TObj) => TResult>;
    }

    //_.propertyOf
    interface LoDashStatic {
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         * @param object The object to query.
         * @return Returns the new function.
         */
        propertyOf<T extends {}>(object: T): (path: string|string[]) => any;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashObjectWrapper<(path: string|string[]) => any>;
    }

    //_.range
    interface LoDashStatic {
        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @return Returns a new range array.
         */
        range(
            start: number,
            end: number,
            step?: number): number[];

        /**
         * @see _.range
         */
        range(
            end: number,
            step?: number): number[];
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number): LoDashArrayWrapper<number>;
    }

    //_.runInContext
    interface LoDashStatic {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        runInContext(context?: Object): typeof _;
    }

    interface LoDashObjectWrapper<T> {
        /**
         * @see _.runInContext
         */
        runInContext(): typeof _;
    }

    //_.times
    interface LoDashStatic {
        /**
         * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee is
         * bound to thisArg and invoked with one argument; (index).
         *
         * @param n The number of times to invoke iteratee.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the array of results.
         */
        times<TResult>(
            n: number,
            iteratee: (num: number) => TResult,
            thisArg?: any
        ): TResult[];

        /**
         * @see _.times
         */
        times(n: number): number[];
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult,
            thisArgs?: any
        ): LoDashArrayWrapper<TResult>;

        /**
         * @see _.times
         */
        times(): LoDashArrayWrapper<number>;
    }

    //_.uniqueId
    interface LoDashStatic {
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        uniqueId(prefix?: string): string;
    }

    interface LoDashWrapper<T> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }

    //_.constant
    interface LoDashStatic {
        /**
         * Creates a function that returns value.
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        constant<T>(value: T): () => T;
    }

    interface LoDashWrapperBase<T, TWrapper> {
        /**
         * @see _.constant
         */
        constant<TResult>(): () => TResult;
    }

    interface ListIterator<T, TResult> {
        (value: T, index: number, collection: List<T>): TResult;
    }

    interface DictionaryIterator<T, TResult> {
        (value: T, key?: string, collection?: Dictionary<T>): TResult;
    }

    interface ObjectIterator<T, TResult> {
        (element: T, key?: string, collection?: any): TResult;
    }

    interface MemoVoidIterator<T, TResult> {
        (prev: TResult, curr: T, indexOrKey?: any, list?: T[]): void;
    }
    interface MemoIterator<T, TResult> {
        (prev: TResult, curr: T, indexOrKey?: any, list?: T[]): TResult;
    }

    interface MemoVoidArrayIterator<T, TResult> {
        (acc: TResult, curr: T, index?: number, arr?: T[]): void;
    }
    interface MemoVoidDictionaryIterator<T, TResult> {
        (acc: TResult, curr: T, key?: string, dict?: Dictionary<T>): void;
    }

    //interface Collection<T> {}

    // Common interface between Arrays and jQuery objects
    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface StringRepresentable {
        toString(): string;
    }
}

declare module "lodash" {
    export = _;
}
