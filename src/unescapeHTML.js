import { makeStr } from './helper/makeStr'
import htmlEntities from './helper/htmlEntities'

function unescape(entity, entityCode) {
  let match
  if (entityCode in htmlEntities) {
    return htmlEntities[entityCode]
  } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
    return String.fromCharCode(parseInt(match[1], 16))
  } else if (match = entityCode.match(/^#(\d+)$/)) {
    return String.fromCharCode(~~match[1])
  }
  return entity
}

export let unescapeHTML = str => {
  str = makeStr(str)
  if (str === '') {
    return ''
  } 
  return str.replace(/&([^;]+);/g, unescape)
}
