import { makeStr } from './helper/makeStr'
import { decapitalize } from './decapitalize'
import { capitalize } from './capitalize'

export let camelize = (str, decap = false) => {
  str = makeStr(str)
  if (str === '') {
    return ''
  }
  let firstChar = str[0],
    words = str.match(/([a-zA-Z0-9]+)/g),
    came = words.map((val, index) => {
      if (index === 0) {
        return val
      }
      return capitalize(val)
    }).join('')
  if (decap) {
    return decapitalize(came)
  } else if (/[-_]/.test(firstChar)) {
    return capitalize(came)
  }
  return came
}
