import {makeStr} from './helper/makeStr'
import {escapeRegexp} from './helper/escapeRegexp'

export let count = (str, subStr) => {
  str = makeStr(str)
  subStr = makeStr(subStr)
  if(subStr === '') {
    return 0
  }
  subStr = escapeRegexp(subStr)
  let subReg = new RegExp(subStr, 'g'),
    match = str.match(subReg)
  if(match === null) {
    return 0
  }
  return match.length
}
