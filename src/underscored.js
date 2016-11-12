import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { trim } from './trim'

/**
 * 为字符串加上下划线
 * @private
 * @method addUnderscore
 * @param  {String}      match  与正则表达式匹配的字符串
 * @param  {String}      letter 与分组匹配的字符串
 * @param  {Number}      index  match在被匹配字符串中的索引号
 */
function addUnderscore(match, letter, index) {
  if (index === 0) {
    return letter.toLowerCase()
  }
  return '_' + letter.toLowerCase()
}

/**
 * 将驼峰形式或者是以破折号为分界的字符串转换成以下划线为分界的字符串。
 * @module str/underscored
 * @param  {String}    str 驼峰形式或者是以破折号为分界的字符串
 * @return {String}        下划线为分界的字符串
 * @example
 * str.underscored('the-underscored-string-method')   // 'the_underscored_string_method'
 * str.underscored('theUnderscoredStringMethod')      // 'the_underscored_string_method'
 * str.underscored('TheUnderscoredStringMethod')      // 'the_underscored_string_method'
 * str.underscored(' the underscored  string method') // 'the_underscored_string_method'
 */
export let underscored = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  // 对破折号进行处理
  str = str.replace(/[-\s]+([a-zA-Z])/g, addUnderscore)
  // 对驼峰形式进行处理
    .replace(/([A-Z])/g, addUnderscore)
  return decapitalize(trim(str))
}
