import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'

/**
 * 将每个单词的首字母转换成大写
 * @module str/titleize
 * @param  {String} str 包含一个或多个单词的字符串
 * @return {String}     已将每个单词的首字母转换成大写的字符串
 * @example
 * str.titleize('the titleize string  method')   // 'The Titleize String Method'
 * str.titleize('let\'s have some fun')          // 'Let\'s Have Some Fun'
 * str.titleize('a-dash-separated-string')       // 'A-Dash-Separated-String'
 * str.titleize('A-DASH-SEPARATED-STRING')       // 'A-Dash-Separated-String'
 */
export let titleize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  return str.replace(/[^\s+|^-]+/g, (word) => {
    return capitalize(word, true)
  })
}
