import { makeStr } from './helper/makeStr'

/**
 * 检测子字符串是否在主字符串的尾部。
 * @module str/endsWith
 * @param  {String}   str           主字符串
 * @param  {String}   subStr        子字符串
 * @param  {Number} [n=str.length]  表示检测前n项
 * @return {Boolean}                true，表示在尾部；false，表示不在尾部
 * @example
 * str.endsWith('foobar', 'bar')    // true
 * str.endsWith('foobar', 'f')      // false
 * str.endsWith('foobar', 'barr')   // false
 * str.endsWith('foobar', 'bar', 5) // false
 * str.endsWith('foobar', 'bar', 6) // true
 *
 * str.endsWith(12345, 45)          // true
 * str.endsWith(12345, 6)           // false
 * str.endsWith(12345, 34, 4)       // true
 * str.endsWith(12345, 45, 4)       // false
 */
export let endsWith = (str, subStr, n) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  if (n === undefined) {
    n = str.length
  }
  // lastIndexOf得到的是sunStr第一个字符的索引，而n表示最后一个字符的索引
  return str.lastIndexOf(subStr, n) + subStr.length === n
}
