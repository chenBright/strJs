let expect = require('chai').expect,
  includes = require('../src/includes').includes

describe('includes', () => {
  it('hello includes llo', () => {
    expect(includes('hello', 'llo')).to.be.true
  })
  it('hello doesn\'t include lle', () => {
    expect(includes('hello', 'lle')).to.be.false
  })
  it('1234  includes 12', () => {
    expect(includes(1234, 12)).to.be.true
  })
  it('1234 doesn\'t include 56', () => {
    expect(includes(1234, 56)).to.be.false
  })
  it('null includes empty string', () => {
    expect(includes(null, '')).to.be.true
  })
  it('hello doesn\'t include 34', () => {
    expect(includes(null, 34)).to.be.false
  })
})
