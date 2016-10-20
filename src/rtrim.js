import {makeStr} from './helper/makeStr'
import {escapeRegexp} from './helper/escapeRegexp'

let nativeTrimRight = String.prototype.trimRight

export let rtrim = (str, character) => {
  str = makeStr(str)
  character = makeStr(character)
  if(!character && nativeTrimRight) {
    return nativeTrimRight.call(str)
  }
  character = escapeRegexp(character)
  let trimReg = new RegExp('[' + character + ']+$', 'g')
  return str.replace(trimReg, '')
}
