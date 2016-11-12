import { makeStr } from './helper/makeStr'

/**
 * 检测主字符串中是否包含子字符串。（注：ES6中已经实现了includes方法）
 * @module str/include
 * @param  {String} str    主字符串
 * @param  {String} subStr 子字符串
 * @return {Boolean}        true，表示包含；false，，表示不包含
 * @example
 * str.include('foobar', 'bar')   // true
 * str.include('foobar', 'buzz')  // false
 *
 * str.include(12345, 34)         // true
 */
export let include = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  // ~-1 = 0
  // !! 是为了将数字转换成布尔值
  return !!(~str.indexOf(subStr))
}
