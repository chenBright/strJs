import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { capitalize } from './capitalize'

/**
 * 将带有下划线或者破折号的字符串转换成驼峰形式的字符串（以下划线或者破折号为单词分界）。
 * 除了首字符是下划线、破折号或者是大写字母的时候，转换后的字符首字母需为大写；其他情况，转换后的字符首字母为小写。
 * @module str/camelize
 * @param  {String}  str           需转换成驼峰形式的字符串
 * @param  {Boolean} [decap=false] true，表示将首字母转换成小写；false，表示不作处理
 * @return {String}                转换成驼峰形式的字符串
 * @example
 * str.camelize('the_camelize_string_method')         // 'theCamelizeStringMethod'
 * str.camelize('the_camelize_string_method', true)   // 'theCamelizeStringMethod'
 *
 * str.camelize(' the camelize  string method')       // 'theCamelizeStringMethod'
 * str.camelize(' the camelize  string method', true) // 'theCamelizeStringMethod'
 *
 * str.camelize('-the-camelize-string-method')        // 'TheCamelizeStringMethod'
 * str.camelize('-the-camelize-string-method', true)  // 'theCamelizeStringMethod'
 *
 * str.camelize('The-camelize-string-method')         // 'TheCamelizeStringMethod'
 * str.camelize('The-camelize-string-method', true)   // 'theCamelizeStringMethod'
 *
 * str.camelize('_som eWeird---name-')                // 'SomEWeirdName'
 * str.camelize('_som eWeird---name-', true)          // 'somEWeirdName'
 */
export let camelize = (str, decap = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  let firstChar = str[0],
    // 分割单词，并放到数组中
    words = str.match(/([a-zA-Z0-9]+)/g),
    came = words.map((val, index) => {
      // 第一个单词不作处理
      if (index === 0) {
        return val
      }
      // 将单词首字母转换成大写
      return capitalize(val)
    }).join('')
  // decap为true，则将首字母转换成小写
  // decap为false、传入的字符串首字符是“-_”并且came的首字母为小写，则将came的首字母转换成大写
  if (decap) {
    return decapitalize(came)
  } else if (/[-_]/.test(firstChar) && /[a-z]/.test(came[0])) {
    return capitalize(came)
  }
  return came
}
