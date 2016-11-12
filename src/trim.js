import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

let nativeTrim = String.prototype.trim

/**
 * 删除字符串头尾的指定字符，默认删除空格。
 * @module str/trim
 * @param  {String} str       需删除头尾的指定字符的字符串
 * @param  {String} character 特定的删除字符，默认值为空格
 * @return {String}           已删除头尾的指定字符的字符串
 * @example
 * str.trim('   Hello World   ')        // 'Hello World'
 * str.trim('\t   Hello World   \t')    // 'Hello World'
 * str.trim('ollHello', 'oll')          // 'He'
 * str.trim('_-Hello-__-', '-_')        // 'Hello'
 * str.trim('http://hello/', '/')       // 'http://hello'
 */
export let trim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  // character为默认值，且支持原声trim方法
  if (!character && nativeTrim) {
    return nativeTrim.call(str)
  }
  // 转义
  character = escapeRegexp(character)
  let trimReg = new RegExp('^[' + character + ']+|[' + character + ']+$', 'g')
  return str.replace(trimReg, '')
}
