import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

let nativeTrimLeft = String.prototype.trimLeft

/**
 * 删除字符串头部的指定字符，默认删除空格。
 * @module str/trim
 * @param  {String} str       需删除头部的指定字符的字符串
 * @param  {String} character 特定的删除字符，默认值为空格
 * @return {String}           已删除头部的指定字符的字符串
 * @example
 * str.ltrim('   Hello World')    // 'Hello World'
 * str.ltrim('\t   Hello World')  // 'Hello World'
 * str.ltrim('lloHello', 'llo')   // 'Hello'
 * str.ltrim('-__-Hello-_', '-_') // 'Hello-_'
 * str.ltrim(123, 1)              // '23'
 */
export let ltrim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  // character为默认值，且支持原声trimLeft方法
  if (!character && nativeTrimLeft) {
    return nativeTrimLeft.call(str)
  }
  // 头部
  character = escapeRegexp(character)
  let trimReg = new RegExp('^[' + character + ']+', 'g')
  return str.replace(trimReg, '')
}
