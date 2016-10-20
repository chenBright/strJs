import {makeStr} from './helper/makeStr'
import {escapeRegexp} from './helper/escapeRegexp'

let nativeTrim = String.prototype.trim

export let trim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  if(!character && nativeTrim) {
    return nativeTrim.call(str)
  }
  character = escapeRegexp(character)
  let trimReg = new RegExp('^[' + character + ']+|[' + character + ']+$', 'g')
  return str.replace(trimReg, '')
}
