import { makeStr } from './helper/makeStr'

/**
 * 将字符串重复count次。
 * @module str/repeat
 * @param  {String} str            需要重复的字符串
 * @param  {Number} [count=0]      重复次数
 * @param  {String} [separator=''] 分隔符
 * @return {String}                已重复了的字符串
 * @example
 * str.repeat('foo')              // ''
 * str.repeat('foo', 3)           // 'foofoofoo'
 * str.repeat('foo', '3', 'bar')  // 'foobarfoobarfoo'
 *
 * str.repeat(123, 2, '*')        // '123*123'
 * str.repeat(123, 2, 4)          // '1234123'
 */
export let repeat = (str, count = 0, separator = '') => {
  str = makeStr(str)
  count = parseInt(count)
  if (str === '' || count === 0) {
    return ''
  }
  let repeatStr = str
  for (let i = 1; i <= count - 1; i += 1) {
    repeatStr += separator + str
  }
  return repeatStr
}
