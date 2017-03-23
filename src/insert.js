import { makeStr } from './helper/makeStr'
import { chars } from './chars'

/**
 * 在主字符串的特定位置插入子字符串
 * @module str/insert
 * @param  {String} str    主字符串
 * @param  {Number} index  要插入子字符串的位置。例如，你要插入到‘a’的后面，index = indexOf(a) + 1
 * @param  {String} subStr 子字符串
 * @return {String}        插入子字符串后的字符串
 * @example
 * str.insert('Hello ', 6, 'chen')    // 'Hello chen'
 * str.insert('Hello', 0, 'chen ')    // 'chen Hello'
 * str.insert('Hello ', 100, 'chen')  // 'Hello chen'
 *
 * str.insert('', 100, 'chen')        // 'chen'
 *
 * str.insert(12345, 5, 'chen')       // '12345chen'
 * str.insert(12345, 3, 'chen')       // '123chen45'
 */
export let insert = (str, index, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  index = parseInt(index)
  let arr = chars(str)
  arr.splice(index, 0, subStr)
  return arr.join('')
}
