import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

/**
 * 统计主字符串中包含多少个子字符串。
 * @module str/count
 * @param  {String} str    主字符串
 * @param  {String} subStr 子字符串
 * @return {Number}         个数
 * @example
 * str.count('Hello world', 'l')     // 3
 * str.count('Hello world', 'Hello') // 1
 * str.count('Hello world', 'foo')   // 0
 * str.count('Hello world', '')      // 0
 *
 * str.count('', 'x')                // 0
 * str.count('', '')                 // 0
 *
 * str.count(12345, 1)               // 1
 */
export let count = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  if (subStr === '') {
    return 0
  }
  // 将特殊字符转义
  subStr = escapeRegexp(subStr)
  let subReg = new RegExp(subStr, 'g'),
    // 如果不匹配，则match为null
    // 如果匹配，则match为一个包含匹配结果的数组
    match = str.match(subReg)
  if (match === null) {
    return 0
  }
  return match.length
}
