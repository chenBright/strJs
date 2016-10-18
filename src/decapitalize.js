import {makeStr} from './helper/makeStr'

export let decapitalize = str => {
  str = makeStr(str)
  let decapStr = str.replace(/^[A-Z]/, firstLetter => firstLetter.toLowerCase())
  return decapStr
}
