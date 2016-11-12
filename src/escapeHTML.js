import { makeStr } from './helper/makeStr'
import escapeChar from './helper/escapeChar'

let spChars = Object.keys(escapeChar),
  regStr = '[' + spChars.reduce((pre, curr) => pre + curr, '') + ']',
  reg = new RegExp(regStr, 'g')

/**
 * 将HTML字符串编码，这个函数支持 cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos, nbsp。
 * @module str/escapeHTML
 * @param  {String}   str HTML字符串
 * @return {String}       编码后的字符串
 * @example
 * // '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;'
 * str.escapeHTML('<div>Blah & "blah" & \'blah\'</div>')
 *
 * str.escapeHTML('&lt;')           // '&amp;lt;'
 * str.escapeHTML('¢')              // '&cent;'
 * str.escapeHTML('¢ £ ¥ € © ®')    // '&cent; &pound; &yen; &euro; &copy; &reg;'
 */
export let escapeHTML = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  return str.replace(reg, match => '&' + escapeChar[match] + ';')
}
