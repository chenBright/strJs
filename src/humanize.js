import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'
import { clean } from './clean'

function addSpace(match, letter, index) {
  if (index === 0 && !/[A-Z]/.test(letter)) {
    return letter.toUpperCase()
  }
  return ' ' + letter.toLowerCase()
}

export let humanize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  str = str.replace(/[_-]+([a-zA-Z])/g, addSpace)
    .replace(/([A-Z])/g, addSpace)
  return capitalize(clean(str))
}
