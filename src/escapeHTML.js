import { makeStr } from './helper/makeStr'
import escapeChar from './helper/escapeChar'

let spChars = Object.keys(escapeChar),
  regStr = '[' + spChars.reduce((pre, curr) => pre + curr, '') + ']',
  reg = new RegExp(regStr, 'g')

export let escapeHTML = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  return str.replace(reg, match => '&' + escapeChar[match] + ';')
}
