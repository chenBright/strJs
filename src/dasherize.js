import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { trim } from './trim'

function addDash(match, letter, index) {
  if (index === 0 && !/[A-Z]/.test(letter)) {
    return letter.toLowerCase()
  }
  return '-' + letter.toLowerCase()
}

export let dasherize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  str = str.replace(/[_\s]+([a-zA-Z])/g, addDash)
    .replace(/([A-Z])/g, addDash)
  return decapitalize(trim(str))
}
