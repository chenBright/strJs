import { makeStr } from './helper/makeStr'

export let capitalize = (str, lowercaseRest = false) => {
  str = makeStr(str)
  if(str === '') {
    return ''
  }
  let rest = str.slice(1)
  rest = lowercaseRest ? rest.toLowerCase() : rest
  return str.charAt(0).toUpperCase() + rest
}
