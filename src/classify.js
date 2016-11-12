import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'

/**
 * 将字符串转换成类名（即每个单词的首字母为大写）。
 * @module str/classify
 * @param  {String} str 需转换成类名的字符串
 * @return {String}     已转换成类名的字符串
 * @example
 * str.classify('some_class_name')            // 'SomeClassName'
 * str.classify('my wonderfull class_name')   // 'MyWonderfullClassName'
 * str.classify('my wonderfull.class.name')   // 'MyWonderfullClassName'
 * str.classify('myLittleCamel.class.name')   // 'MyLittleCamelClassName'
 */
export let classify = (str) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  // 分割单词，并放到数组中
  // 将一切非字母和数字的字符看作单词分界
  let words = str.match(/([a-zA-Z0-9]+)/g)
  return words.map(val => {
    return capitalize(val)
  }).join('')
}
