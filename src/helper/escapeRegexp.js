import {makeStr} from './makeStr'

export let escapeRegexp = character => makeStr(character).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
