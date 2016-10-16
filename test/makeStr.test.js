let expect = require('chai').expect,
  makeStr = require('../src/helper/makeStr').makeStr

describe('makeStr', () => {
  it('input undefined to get \'\'', () => {
    expect(makeStr(undefined)).to.equal('')
  })
  it('input null to get \'\'', () => {
    expect(makeStr(null)).to.equal('')
  })
  it('input 1234 to get \'1234\'', () => {
    expect(makeStr(1234)).to.equal('1234')
  })
  it('input \'makeStr\' to get \'\'', () => {
    expect(makeStr('makeStr')).to.equal('makeStr')
  })
})
