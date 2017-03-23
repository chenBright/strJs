import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { trim } from './trim'

/**
 * 为字符串加上破折号
 * @private
 * @method addDash
 * @param  {String}      match  与正则表达式匹配的字符串
 * @param  {String}      letter 与分组匹配的字符串
 * @param  {Number}      index  match在被匹配字符串中的索引号
 * @return {String}             处理后的字符串
 */
function addDash(match, letter, index) {
  // 如果第一个单词的首字母为小写，则不作处理
  // 如果第一个单词的首字母为大写或其他单词，则将首字母转换成小写并加上破折号
  if (index === 0 && !/[A-Z]/.test(letter)) {
    return letter
  }
  return '-' + letter.toLowerCase()
}

/**
 * 将驼峰形式或者是以下划线为分界的字符串转换成以为破折号分界的字符串。
 * @module str/underscored
 * @param  {String}    str 驼峰形式或者是以下划线为分界的字符串
 * @return {String}        破折号为分界的字符串
 * @example
 * str.dasherize('the_dasherize_string_method')     // 'the-dasherize-string-method'
 * str.dasherize('the dasherize string method')     // 'the-dasherize-string-method'
 * str.dasherize('TheDasherizeStringMethod')       // '-the-dasherize-string-method'
 * str.dasherize('thisIsATest')                     // 'this-is-a-test'
 * str.dasherize('this Is A Test')                  // 'this-is-a-test'
 * str.dasherize('thisIsATest123')                  // 'this-is-a-test123'
 * str.dasherize('123thisIsATest')                  // '123this-is-a-test'
 */
export let dasherize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  // 对下划线进行处理
  str = str.replace(/[_\s]+([a-zA-Z])/g, addDash)
  // 对驼峰形式进行处理
    .replace(/([A-Z])/g, addDash)
  return decapitalize(trim(str))
}
