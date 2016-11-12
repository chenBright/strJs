import { makeStr } from './helper/makeStr'

/**
 * 删除字符串的引用符。
 * @module str/unquote
 * @param  {String} str             需要删除引用符的字符串
 * @param  {String} [quoteChar='"'] 引用符
 * @return {String}                 已删除引用符的字符串
 * @example
 * str.unquote('"foo"')           // 'foo'
 * str.unquote('""foo""')         // '"foo"'
 * str.unquote('\'foo\'', '\'')   // 'foo'
 */
export let unquote = (str, quoteChar = '"') => {
  str = makeStr(str)
  quoteChar = makeStr(quoteChar)
  let firstQuoIndex = str.indexOf(quoteChar),
    lastQuoIndex = str.lastIndexOf(quoteChar)
  return str.slice(0, firstQuoIndex)
    + str.slice(firstQuoIndex + 1, lastQuoIndex)
    + str.slice(lastQuoIndex + 1)
}
