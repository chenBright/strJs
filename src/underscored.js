import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { trim } from './trim'

function addUnderscore(match, letter, index) {
  if (index === 0) {
    return letter.toLowerCase()
  }
  return '_' + letter.toLowerCase()
}

export let underscored = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  str = str.replace(/[-\s]+([a-zA-Z])/g, addUnderscore)
    .replace(/([A-Z])/g, addUnderscore)
  return decapitalize(trim(str))
}
