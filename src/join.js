import { makeStr } from './helper/makeStr'

/**
 * 连接给定字符串，并用给定分隔符分隔字符串
 * @module str/join
 * @param  {String} separator     分隔符
 * @param  {String} ...strings    可传入多个参数（结构赋值）
 * @return {String}               连接后的字符串
 * @example
 * str.join('', 'Hello', 'World')         // 'HelloWorld'
 * str.join(' ', 'Hello', 'World')        // 'Hello World'
 * str.join('', 1, 'Hello', 520)          // '1Hello520'
 * str.join(2, 5, 0)                      // '520'
 * str.join('', 'Hello', null)            // 'Hello'
 * str.join('', 123, null)                // '123'
 * str.join('|', 'Hello', 'World', '!')   // 'Hello|World|!'
 */
export let join = (separator, ...strings) => {
  return strings.join(makeStr(separator))
}
