import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'
import { isBlank } from './isBlank'

/**
 * 分割字符串为单词数组。
 * @module str/words
 * @param  {String} str              需要分割的字符串
 * @param  {RegExp} [delimiter=/s+/] 单词分界
 * @return {Array}                  单词数组
 * @example
 * str.words('I love you')        // ['I', 'love', 'you']
 * str.words('I  love   you')     // ['I', 'love', 'you']
 * str.words('I_love_you', '_')   // ['I', 'love', 'you']
 * str.words('I-love-you', /-/)   // ['I', 'love', 'you']
 * str.words(123)                 // ['123']
 * str.words('   ')               // []
 */
export let words = (str, delimiter = /\s+/) => {
  str = makeStr(str)
  if (isBlank(str)) {
    return []
  }
  delimiter = delimiter instanceof RegExp ? delimiter : new RegExp(escapeRegexp(delimiter))
  return str.split(delimiter)
}
