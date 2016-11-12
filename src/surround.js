import { makeStr } from './helper/makeStr'

/**
 * 用已字符串包围另一字符串。
 * @module str/surround
 * @param  {String} str  被包围的字符串
 * @param  {String} wrap 用来包围的字符串
 * @return {String}      包围后的字符串
 * @example
 * str.surround('foo', 'ab')    // 'abfooab'
 * str.surround('foo', 1)       // '1foo1'
 * str.surround('foo', '')      // 'foo'
 * str.surround(123, 'ab')      // 'ab123ab'
 * str.surround(123, 4)         // '41234'
 * str.surround('', 2)          // '22'
 */
export let surround = (str, wrap) => {
  str = makeStr(str)
  wrap = makeStr(wrap)
  return wrap + str + wrap
}
