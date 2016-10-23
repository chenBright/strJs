import { makeStr } from './helper/makeStr'
import { escapeRegexp } from './helper/escapeRegexp'
import { isBlank } from './isBlank'

export let words = (str, delimiter = /\s+/) => {
  str = makeStr(str)
  if (isBlank(str)) {
    return []
  }
  delimiter = delimiter instanceof RegExp ? delimiter : new RegExp(escapeRegexp(delimiter))
  return str.split(delimiter)
}
