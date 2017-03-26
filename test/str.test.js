let expect = require('chai').expect,
  str = require('../src/str')

describe('str', () => {
  it('static function', () => {
    expect(str.trim('   abc   ')).to.equal('abc')
  })
  it('chain call', () => {
    expect(str(" foobar ").trim().startsWith("foo")).to.be.true
  })
})
