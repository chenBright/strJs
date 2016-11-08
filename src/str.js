'use strict'

// import 'babel-polyfill'
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

function S(str) {
  if (!(this instanceof S)) {
    return new S(str)
  }
  this.value = str
}
S.version = '0.1.0'
S.prototype.val = function val() {
  return this.value
}

let methodsObj = {}
function fn2method(key, fn) {
  if (typeof fn !== 'function') {
    return
  }
  methodsObj[key] = {
    value: function(...args) {
      let str = this.value
      args.unshift(str)
      return fn.apply(null, args)
    },
    writable: false,
    configurable: false
  }
}

let prototypeObj = {}
function fn2prototype(key, fn) {
  if (typeof fn !== 'function') {
    return
  }
  prototypeObj[key] = {
    value: function(...args) {
      let str = this.value
      args.unshift(str)
      let res = fn.apply(null, args)
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
Object.defineProperties(S, methodsObj)
Object.defineProperties(S.prototype, prototypeObj)

let str = S

export default str
