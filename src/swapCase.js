import { makeStr } from './helper/makeStr'
import { chars } from './chars'

export let swapCase = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  let lowerCaseReg = /[a-z]/,
    upperCaseReg = /[A-Z]/,
    strings = chars(str),
    swapCases = strings.map(function (val) {
      if (lowerCaseReg.test(val)) {
        return val.toUpperCase()
      } else if (upperCaseReg.test(val)) {
        return val.toLowerCase()
      }
      return val
    })
  return swapCases.join('')
}
