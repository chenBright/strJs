'use strict'

import { capitalize } from './capitalize'
import { chars } from './chars'
import { clean } from './clean'
import { count } from './count'
import { decapitalize } from './decapitalize'
import { insert } from './insert'
import { isBlank } from './isBlank'
import { join } from './join'
import { ltrim } from './ltrim'
import { pred } from './pred'
import { replaceAll } from './replaceAll'
import { reverse } from './reverse'
import { rtrim } from './rtrim'
import { succ } from './succ'
import { swapCase } from './swapCase'
import { trim } from './trim'
import { truncate } from './truncate'
import { words } from './words'
import { classify } from './classify'
import { titleize } from './titleize'
import { camelize } from './camelize'
import { surround } from './surround'
import { quote } from './quote'
import { unquote } from './unquote'
import { map } from './map'
import { escapeHTML } from './escapeHTML'
import { unescapeHTML } from './unescapeHTML'
import { splice } from './splice'
import { underscored } from './underscored'
import { dasherize } from './dasherize'
import { humanize } from './humanize'
import { strLeft } from './strLeft'
import { strLeftBack } from './strLeftBack'
import { strRight } from './strRight'
import { strRightBack } from './strRightBack'
import { include } from './include'
import { startsWith } from './startsWith'
import { endsWith } from './endsWith'
import { chop } from './chop'

let fns = {
  capitalize,
  chars,
  clean,
  count,
  decapitalize,
  insert,
  isBlank,
  join,
  ltrim,
  pred,
  replaceAll,
  reverse,
  rtrim,
  succ,
  swapCase,
  trim,
  truncate,
  words,
  classify,
  titleize,
  camelize,
  surround,
  quote,
  unquote,
  map,
  escapeHTML,
  unescapeHTML,
  splice,
  underscored,
  dasherize,
  humanize,
  strLeft,
  strLeftBack,
  strRight,
  strRightBack,
  include,
  startsWith,
  endsWith,
  chop
}

/**
 * str是一个包含了很多操作字符串的静态方法的对象。<br/>
 *
 * 同时，str也是一个构造函数，既可以通过new操作得到实例，也可以通过直接调用得到实例。
 * 实例化的对象包含的方法与str的静态方法的作用一样。<br/>
 *
 * 通过构造函数实例化的对象的方法可以进行链式调用，但只能在当前调用方法返回的值的类型为String时，才能链式调用下一个方法。
 * 此时，你不能直接得到该String值，需要通过链式调用val方法才能得到该String值。<br/>
 *
 * 当前调用方法返回的值的类型为非String，如Array、Boolean、Number时，会立即返回该非String值，不需要也不能链式调用val方法，否则，会抛出错误。
 * @module str
 * @param  {String} str 需要操作的字符串
 * @example
 * // str是一个对象，可以直接调用静态方法
 * str.trim('   abc   ')                      // 'abc'
 * str.succ('a')                              // 'b'
 *
 * // 实例化、链式调用
 * var s1 = str('   foo  ')
 * s1.trim().capitalize().val()               // 'Foo'
 *
 * var s2 = new str('   foo  ')
 * s2.trim().capitalize().val()               // 'Foo'
 *
 * // 当链式调用方法返回的值的类型为非String时，不能调用val方法
 * str(" foobar ").trim().startsWith("foo")   // true
 * str(" foobar ").trim().chars()             // ['f', 'o', 'o', 'b', 'a', 'r']
 */
function S(str) {
  if (!(this instanceof S)) {
    return new S(str)
  }
  this.value = str
}
S.version = '0.1.0'

/**
 * 链式调用时，可返回当前String值。
 * @module str#val
 * @return {String} 调用val前的调用方法的返回值。
 * @example
 * str('   foo  ').trim().capitalize().val()   // 'Foo'
 */
S.prototype.val = function val() {
  return this.value
}

// 静态方法集合
let methodsObj = {}
/**
 * 将函数添加为对象的静态方法
 * @private
 * @method fn2method
 * @param  {String}   key 作为对象属性
 * @param  {Function} fn  作为静态方法
 */
function fn2method(key, fn) {
  if (typeof fn !== 'function') {
    return
  }
  // 将静态方法定义为不可配置和不可写
  methodsObj[key] = {
    value: function(...args) {
      let str = this.value
      let reallyArgs = [str].concat(args)
      return fn.apply(null, reallyArgs)
    },
    writable: false,
    configurable: false
  }
}

// 实例方法集合
let prototypeObj = {}
/**
 * 将函数添加为对象的实例方法
 * @private
 * @method fn2method
 * @param  {String}   key 作为对象属性
 * @param  {Function} fn  作为实例方法
 */
function fn2prototype(key, fn) {
  if (typeof fn !== 'function') {
    return
  }
  // 将实例方法定义为不可配置和不可写
  prototypeObj[key] = {
    value: function(...args) {
      let reallyArgs = [this.value].concat(args)
      let res = fn.apply(null, reallyArgs)
      if (typeof res === 'string') {
        this.value = res
        return this
      }
      return res
    },
    writable: false,
    configurable: false
  }
}

for (let key in fns) {
  if ({}.hasOwnProperty.call(fns, key)) {
    fn2method(key, fns[key])
    fn2prototype(key, fns[key])
  }
}
// 为S对象添加静态方法和实例方法
Object.defineProperties(S, methodsObj)
Object.defineProperties(S.prototype, prototypeObj)

let str = S

export default str
