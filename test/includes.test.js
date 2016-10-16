let expect = require('chai').expect,
  includes = require('../src/includes').includes

describe('includes', () => {
  it('hello includes llo', () => {
    expect(includes('hello', 'llo')).to.be.true
  })
  it('hello doesn\'t includes lle', () => {
    expect(includes('hello', 'lle')).to.be.false
  })
})
