import { adjacent } from './helper/adjacent'

/**
 * 获取字符的前一个字符
 * @module str/succ
 * @param  {String} str 字符
 * @return {String}     输入字符的后一个字符
 * @example
 * str.succ('a')    // 'b'
 * str.succ('A')    // 'B'
 * str.succ('+')    // ','
 * str.succ(1)      // '2'
 */
export let succ = (str) => adjacent(str, 1)
