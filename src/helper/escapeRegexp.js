import { makeStr } from './makeStr'

/**
 * 当我们调用RegExp的构造函数创建正则表达式是，需要对字符串中的“.*+?^=!:${}()|[]/\”转义。这个函数就是用来对这些特殊的字符进行转义的。
 * @method escapeRegexp
 * @param  {String}     character 需要转义的字符串
 * @return {String}               转义后的字符串
 */
export let escapeRegexp = character => makeStr(character).replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1')
