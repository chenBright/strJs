import { makeStr } from './helper/makeStr'

/**
 * 判断字符串是否为空白符
 * @module str/isBlank
 * @param  {String}  str 字符串
 * @return {Boolean}     true，表示str是空白符；false，表示str不是空白符
 * @example
 * str.isBlank('')        // true
 * str.isBlank(' ')       // true
 * str.isBlank('\n')      // true
 * str.isBlank(null)      // true
 * str.isBlank(undefined) // true
 */
export let isBlank = str => {
  str = makeStr(str)
  return /^\s*$/.test(str)
}
