import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'

export let replaceAll = (str, find, replace, ignoreCase = false) => {
  str = makeStr(str)
  find = escapeRegexp(makeStr(find))
  replace = makeStr(replace)
  let findReg = ignoreCase ? new RegExp(find, 'gi') : new RegExp(find, 'g')
  return str.replace(findReg, replace)
}
