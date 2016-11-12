import { surround } from './surround'

/**
 * 引用字符串。
 * @module str/quote
 * @param  {String} str             被引用的字符串
 * @param  {String} [quoteChar='"'] 引用符
 * @return {String}                 引用后的字符串
 * @example
 * str.quote('foo')         // '"foo"'
 * str.quote('"foo"')       // '""foo""'
 * str.quote('foo', '\'')   // '\'foo\''
 * str.quote(123)           // '"123"'
 */
export let quote = (str, quoteChar = '"') => {
  // 用quoteChar包围str
  return surround(str, quoteChar)
}
