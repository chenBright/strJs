import { chars } from './chars'

/**
 * 插入、删除或者替换字符串的字符。（使用方法跟Array.splice一样）
 * @module str/splice
 * @param  {String} str       需要插入、删除或者替换字符的字符串
 * @param  {Number} [start=0] 开始插入和（或）删除处的字符的索引值
 * @param  {String} delCount  要删除的字符的个数
 * @param  {String} subStr    要插入的字符串
 * @return {String}           已插入、删除或者替换字符的字符串
 * @example
 * // 'https://edtsech@bitbucket.org/epeli/underscore.strings'
 * str.splice('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30 , 7, 'epeli')
 *
 * str.splice(12345, 1, 2, 321)   // '132145'
 */
export let splice = (str, start = 0, delCount, subStr) => {
  let arr = chars(str)
  if (!arr) {
    return ''
  }
  start = parseInt(start)
  delCount = parseInt(delCount)
  if (!delCount) {
    arr.splice(start)
  } else if (!subStr) {
    arr.splice(start, delCount)
  } else {
    arr.splice(start, delCount, subStr)
  }
  return arr.join('')
}
