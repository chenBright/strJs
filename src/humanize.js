import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'
import { clean } from './clean'

/**
 * 为字符串加上破折号
 * @private
 * @method addSpace
 * @param  {String}      match  与正则表达式匹配的字符串
 * @param  {String}      letter 与分组匹配的字符串
 * @param  {Number}      index  match在被匹配字符串中的索引号
 */
function addSpace(match, letter, index) {
  // 如果第一个单词的首字母为小写，则将首字母转换成大写
  // 如果第一个单词的首字母为大写或其他单词，则将首字母转换成小写
  if (index === 0 && !/[A-Z]/.test(letter)) {
    return letter.toUpperCase()
  }
  return ' ' + letter.toLowerCase()
}

/**
 * 将字符串转换成句子，即只有第一个单词的首字母为大写，头部和尾部没有空格，单词分界为一个空格。
 * 处理传入的字符串时，下划线和破折号也被看作是单词分界。
 * @module str/humanize
 * @param  {String} str 需转换成句子的字符串
 * @return {String}     已转换成句子的字符串
 * @example
 * str.humanize('the_humanize_string_method')                     // 'The humanize string method'
 * str.humanize('ThehumanizeStringMethod')                        // 'Thehumanize string method'
 * str.humanize('-ThehumanizeStringMethod')                       // 'Thehumanize string method'
 * str.humanize('the  humanize string method  ')                  // 'The humanize string method'
 * str.humanize('the humanize_id string method')                  // 'The humanize id string method'
 */
export let humanize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  str = str.replace(/[_-]+([a-zA-Z])/g, addSpace)
    .replace(/([A-Z])/g, addSpace)
  return capitalize(clean(str))
}
