import {makeStr} from './helper/makeStr'

export let replaceAll = (str, find, replace, ignoreCase = false) => {
  str = makeStr(str)
  find = makeStr(find)
  replace = makeStr(replace)
  let findReg = ignoreCase ? new RegExp(find, 'gi') : new RegExp(find, 'g')
  return str.replace(findReg, replace)
}
