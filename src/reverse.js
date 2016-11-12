import { chars } from './chars'

/**
 * 颠倒字符串中字符的顺序
 * @module str/reverse
 * @param  {String} str 需要颠倒字符的顺序的字符串
 * @return {String}     已颠倒字符的顺序的字符串
 * @example
 * str.reverse('foo bar')   // 'rab oof'
 * str.reverse(123.45)      // '54.321'
 */
export let reverse = str => chars(str).reverse().join('')
