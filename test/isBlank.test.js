let expect = require('chai').expect,
  isBlank = require('../src/isBlank').isBlank

describe('isBlank', () => {
  it('empty string is blank', () => {
    expect(isBlank('')).to.be.true
  })
  it('space is balnk', () => {
    expect(isBlank(' ')).to.be.true
  })
  it('\\n is blank', () => {
    expect(isBlank('\n')).to.be.true
  })
  it('non empty string isn\'t blank', () => {
    expect(isBlank('str')).to.be.false
  })
  it('number isn\'t blank', () => {
    expect(isBlank(0)).to.be.false
  })
  it('null is blank', () => {
    expect(isBlank(null)).to.be.true
  })
  it('undefined i  blank', () => {
    expect(isBlank(undefined)).to.be.true
  })
  it('false isn\'t blank', () => {
    expect(isBlank(false)).to.be.false
  })
})
