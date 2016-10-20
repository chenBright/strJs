let expect = require('chai').expect,
  rtrim = require('../src/rtrim').rtrim

describe('rtrim', () => {
  it('number', () => {
    expect(rtrim(123)).to.equal('123')
  })
  it('   Hello World', () => {
    expect(rtrim('   Hello World')).to.equal('   Hello World')
  })
  it('Hello World   ', () => {
    expect(rtrim('Hello World   ')).to.equal('Hello World')
  })
  it('Hello World\t   ', () => {
    expect(rtrim('Hello World\t   ')).to.equal('Hello World')
  })
  it('lloHello', () => {
    expect(rtrim('lloHello', 'llo')).to.equal('lloHe')
  })
  it('_-Hello-__-', () => {
    expect(rtrim('_-Hello-__-', '-_')).to.equal('_-Hello')
  })
  it('http://hello/', () => {
    expect(rtrim('http://hello/', '/')).to.equal('http://hello')
  })
  it('C:\\', () => {
    expect(rtrim('C:\\', '\\')).to.equal('C:')
  })
  it('123', () => {
    expect(rtrim(123, 3)).to.equal('12')
  })
  it('empty string', () => {
    expect(rtrim('')).to.equal('')
  })
  it('null', () => {
    expect(rtrim(null)).to.equal('')
  })
  it('undefined', () => {
    expect(rtrim(undefined)).to.equal('')
  })
})
