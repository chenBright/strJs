import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

/**
 * 将主字符串中所有指定的子字符串，替换成其他字符串。
 * @module str/replaceAll
 * @param  {String}   str                主字符串
 * @param  {String}   find               要被替换的字符串
 * @param  {String}   replace            用来替换的字符串
 * @param  {Boolean}  [ignoreCase=false] 是否忽略find的大小写
 * @return {String}                      替换后的字符串
 * @example
 * str.replaceAll('aca', 'a', 'b')        // 'bcb'
 * str.replaceAll('ccc', 'a', 'b')        // 'ccc'
 * str.replaceAll('Aa', 'a', 'b')         // 'Ab'
 * str.replaceAll('Aa', 'a', 'b', true)   // 'bb'
 */
export let replaceAll = (str, find, replace, ignoreCase = false) => {
  str = makeStr(str)
  find = escapeRegexp(makeStr(find))
  replace = makeStr(replace)
  let findReg = ignoreCase ? new RegExp(find, 'gi') : new RegExp(find, 'g')
  return str.replace(findReg, replace)
}
