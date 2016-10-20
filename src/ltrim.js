import {makeStr} from './helper/makeStr'
import {escapeRegexp} from './helper/escapeRegexp'

let nativeTrimLeft = String.prototype.trimLeft

export let ltrim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  if(!character && nativeTrimLeft) {
    return nativeTrimLeft.call(str)
  }
  character = escapeRegexp(character)
  let trimReg = new RegExp('^[' + character + ']+', 'g')
  return str.replace(trimReg, '')
}
