import { makeStr } from './helper/makeStr'

/**
 * 将字符串第一个字母转换成大写。当lowercaseRest为true时，将除了第一个字母之外的其他字母转换成小写。
 * @module str/capitalize
 * @param  {String}   str                   需要转换的字符串
 * @param  {Boolean}  [lowercaseRest=false] 是否将除了第一个字母之外的其他字母转换成小写
 * @return {String}                         已转换的字符串
 * @example
 * str.capitalize('strjs')                      // 'Strjs'
 * str.capitalize('STRJS')                      // 'STRJS'
 *
 * str.capitalize('STRJS', false)               // 'STRJS'
 * str.capitalize('STRJS', true)                // 'Strjs'
 *
 * str.capitalize('strJS', false)               // 'StrJS'
 * str.capitalize('strJS', true)                // 'Strjs'
 *
 * str.capitalize('strJS is excellent')         // 'StrJS is excellent'
 * str.capitalize('strJS is excellent', false)  // 'StrJS is excellent'
 * str.capitalize('strJS is excellent', true)   // 'Strjs is excellent'
 */
export let capitalize = (str, lowercaseRest = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  // 获取除了第一个字母之外的其他字母
  let rest = str.slice(1)
  rest = lowercaseRest ? rest.toLowerCase() : rest
  return str.charAt(0).toUpperCase() + rest
}
