let expect = require('chai').expect,
  capitalize = require('../src/capitalize').capitalize

describe('capitalize', () => {
  it('First letter is upper case', () => {
    expect(capitalize('strjs')).to.equal('Strjs')
  })
  it('Other letters unchanged', () => {
    expect(capitalize('STRJS')).to.equal('STRJS')
  })
  it('Other letters unchanged', () => {
    expect(capitalize('STRJS', false)).to.equal('STRJS')
  })
  it('Other letters unchanged', () => {
    expect(capitalize('strJS', false)).to.equal('StrJS')
  })
  it('Other letters unchanged', () => {
    expect(capitalize('STRJS', true)).to.equal('Strjs')
  })
  it('Other letters unchanged', () => {
    expect(capitalize('strJS', true)).to.equal('Strjs')
  })
  it('first letter of each word is upper case', () => {
    expect(capitalize('strJS is excellent')).to.equal('StrJS is excellent')
  })
  it('first letter of each word is upper case', () => {
    expect(capitalize('strJS is excellent', false)).to.equal('StrJS is excellent')
  })
  it('only First letter of the first word is upper case', () => {
    expect(capitalize('strJS is excellent', true)).to.equal('Strjs is excellent')
  })
  it('Non string', () => {
    expect(capitalize('123')).to.equal('123')
  })
  it('Non string', () => {
    expect(capitalize('123', false)).to.equal('123')
  })
  it('Non string', () => {
    expect(capitalize('123', true)).to.equal('123')
  })
  it('Capitalizing empty string returns empty string', () => {
    expect(capitalize('')).to.equal('')
  })
  it('Capitalizing empty string returns empty string', () => {
    expect(capitalize('', false)).to.equal('')
  })
  it('Capitalizing empty string returns empty string', () => {
    expect(capitalize('', true)).to.equal('')
  })
  it('Capitalizing null returns empty string', () => {
    expect(capitalize(null)).to.equal('')
  })
  it('Capitalizing null returns empty string', () => {
    expect(capitalize(null, false)).to.equal('')
  })
  it('Capitalizing null returns empty string', () => {
    expect(capitalize(null,true)).to.equal('')
  })
  it('Capitalizing undefined returns empty string', () => {
    expect(capitalize(undefined)).to.equal('')
  })
  it('Capitalizing undefined returns empty string', () => {
    expect(capitalize(undefined, false)).to.equal('')
  })
  it('Capitalizing undefined returns empty string', () => {
    expect(capitalize(undefined, true)).to.equal('')
  })
})
