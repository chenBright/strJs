import { makeStr } from './helper/makeStr'

/**
 * 移除字符串两侧的空格，并将非两侧的连续空格替换成一个空格。
 * @module str/clean
 * @param  {String} str 需要移除空格的字符串
 * @return {String}     已移除空格的字符串
 * @example
 * str.clean('   string   js  ')    // 'string js'
 */
export let clean = str => {
  str = makeStr(str)
  let words = str.match(/\w+/g)
  if (words === null) {
    return ''
  }
  return words.join(' ')
}
