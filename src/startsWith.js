import { makeStr } from './helper/makeStr'

/**
 * 检测子字符串是否在主字符串的头部。
 * @module str/startsWith
 * @param  {String}   str       主字符串
 * @param  {String}   subStr    子字符串
 * @param  {Number}   [start=0] 开始检测的位置
 * @return {Boolean}             true，表示在头部；false，表示不在头部
 * @example
 * str.startsWith('foobar', 'foo')    // true
 * str.startsWith('foobar', 'boo')    // false
 *
 * str.startsWith('foobar', 'oo', 1)  // true
 * str.startsWith('foobar', 'foo', 0) // true
 * str.startsWith('foobar', 'foo', 1) // fa;se
 *
 * str.startsWith(12345, 123)         // true
 * str.startsWith(2345, 123)          // false
 *
 * str.startsWith('', '')             // true
 */
export let startsWith = (str, subStr, start = 0) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  return str.indexOf(subStr) === start
}
