import { searchStr } from './helper/searchStr'

export let strLeft = (str, pattern = '') => searchStr(str, pattern, 'left', false)
