import { makeStr } from './helper/makeStr'
import htmlEntities from './helper/htmlEntities'

// 详情见 https://github.com/epeli/underscore.string/blob/master/unescapeHTML.js
function unescape(entity, entityCode) {
  let match
  if (entityCode in htmlEntities) {
    return htmlEntities[entityCode]
  } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
    return String.fromCharCode(parseInt(match[1], 16))
  } else if (match = entityCode.match(/^#(\d+)$/)) {
    return String.fromCharCode(~~match[1])
  }
  return entity
}

/**
 * 将HTML字符串解码，这个函数支持 cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos, nbsp。
 * @module str/unescapeHTML
 * @param  {String}     str 需要解码的HTML字符串
 * @return {String}         已解码的HTML字符串
 * @example
 * // '<div>Blah & "blah" & \'blah\'</div>'
 * str.unescapeHTML('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;')
 *
 * str.unescapeHTML('&amp;lt;')   // '&lt;'
 * str.unescapeHTML('&apos;')     // '\''
 * str.unescapeHTML('&#39;')      // '\''
 * str.unescapeHTML('&#0039;')    // '\''
 * str.unescapeHTML('&#x4a;')     // 'J'
 * str.unescapeHTML('&#x04A;')    // 'J'
 * str.unescapeHTML('&#X4A;')     // '&#X4A;'
 * str.unescapeHTML('&_#39;')     // '&_#39;'
 * str.unescapeHTML('&amp;#38;')  // '&#38;'
 * str.unescapeHTML('&#38;amp;')  // '&amp;'
 * str.unescapeHTML('&nbsp;')     // ' '
 *
 * // 'what is the ¥ to £ to € conversion process?'
 * str.unescapeHTML('what is the &yen; to &pound; to &euro; conversion process?')
 *
 * // '© 1992. License available for 50 ¢'
 * str.unescapeHTML('&copy; 1992. License available for 50 &cent;')
 */
export let unescapeHTML = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  return str.replace(/&([^;]+);/g, unescape)
}
