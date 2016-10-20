let expect = require('chai').expect,
  ltrim = require('../src/ltrim').ltrim

describe('ltrim', () => {
  it('number', () => {
    expect(ltrim(123)).to.equal('123')
  })
  it('   Hello World', () => {
    expect(ltrim('   Hello World')).to.equal('Hello World')
  })
  it('Hello World   ', () => {
    expect(ltrim('Hello World   ')).to.equal('Hello World   ')
  })
  it('\t   Hello World', () => {
    expect(ltrim('\t   Hello World')).to.equal('Hello World')
  })
  it('lloHello', () => {
    expect(ltrim('lloHello', 'llo')).to.equal('Hello')
  })
  it('-__-Hello-_', () => {
    expect(ltrim('-__-Hello-_', '-_')).to.equal('Hello-_')
  })
  it('/hello', () => {
    expect(ltrim('/hello', '/')).to.equal('hello')
  })
  it('123', () => {
    expect(ltrim(123, 1)).to.equal('23')
  })
  it('empty string', () => {
    expect(ltrim('')).to.equal('')
  })
  it('null', () => {
    expect(ltrim(null)).to.equal('')
  })
  it('undefined', () => {
    expect(ltrim(undefined)).to.equal('')
  })
})
