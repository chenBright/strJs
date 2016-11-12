import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

let nativeTrimRight = String.prototype.trimRight

/**
 * 删除字符串头部的指定字符，默认删除空格。
 * @module str/trim
 * @param  {String} str       需删除头部的指定字符的字符串
 * @param  {String} character 特定的删除字符，默认值为空格
 * @return {String}           已删除头部的指定字符的字符串
 * @example
 * str.rtrim('Hello World   ')      // 'Hello World'
 * str.rtrim('Hello World\t    ')   // 'Hello World'
 * str.rtrim('lloHello', 'llo')     // 'lloHe'
 * str.rtrim('_-Hello-__-', '-_')   // '_-Hello'
 * str.rtrim('http://hello/', '/')  // 'http://hello'
 * str.rtrim(123, 3)                // '12'
 */
export let rtrim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  // character为默认值，且支持原声trimRight方法
  if (!character && nativeTrimRight) {
    return nativeTrimRight.call(str)
  }
  character = escapeRegexp(character)
  let trimReg = new RegExp('[' + character + ']+$', 'g')
  return str.replace(trimReg, '')
}
