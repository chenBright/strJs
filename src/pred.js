import { adjacent } from './helper/adjacent'

/**
 * 获取字符的前一个字符
 * @module str/pred
 * @param  {String} str 字符
 * @return {String}     输入字符的前一个字符
 * @example
 * str.pred('b')  // 'a'
 * str.pred('B')  // 'A'
 * str.pred(',')  // '+'
 * str.pred(2)    // '1'
 */
export let pred = (str) => adjacent(str, -1)
