import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'

export let classify = (str) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  let words = str.match(/([a-zA-Z0-9]+)/g)
  return words.map(val => {
    return capitalize(val)
  }).join('')
}
