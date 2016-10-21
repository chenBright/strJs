import { makeStr } from './helper/makeStr'

export let capitalize = (str, lowercaseRest = false) => {
  str = makeStr(str)
  let capStr = str.replace(/^[a-z]/, firstLetter => firstLetter.toUpperCase())
  if (!lowercaseRest) {
    capStr = capStr.replace(/(\s)+([a-z])/g, (match, blank, firstLetter) =>
      blank + firstLetter.toUpperCase()
    )
  }
  return capStr
}
