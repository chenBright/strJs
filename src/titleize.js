import { makeStr } from './helper/makeStr'
import { capitalize } from './capitalize'

export let titleize = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  return str.replace(/[^\s+|^-]+/g, (word) => {
    return capitalize(word, true)
  })
}
