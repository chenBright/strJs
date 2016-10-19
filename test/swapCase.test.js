let expect = require('chai').expect,
  swapCase = require('../src/swapCase').swapCase

describe('swapCase', () => {
  it('AaBbCcDdEe', () => {
    expect(swapCase('AaBbCcDdEe')).to.equal('aAbBcCdDeE')
  })
  it('Hello World', () => {
    expect(swapCase('Hello World')).to.equal('hELLO wORLD')
  })
  it('empty string', () => {
    expect(swapCase('')).to.equal('')
  })
  it('null', () => {
    expect(swapCase(null)).to.equal('')
  })
  it('undefined', () => {
    expect(swapCase(undefined)).to.equal('')
  })
})
