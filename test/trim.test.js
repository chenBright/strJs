let expect = require('chai').expect,
  trim = require('../src/trim').trim

describe('trim', () => {
  it('number', () => {
    expect(trim(123)).to.equal('123')
  })
  it('   Hello World   ', () => {
    expect(trim('   Hello World   ')).to.equal('Hello World')
  })
  it('\t   Hello World  \t ', () => {
    expect(trim('\t   Hello World   \t')).to.equal('Hello World')
  })
  it('ollHello', () => {
    expect(trim('ollHello', 'oll')).to.equal('He')
  })
  it('_-Hello-__-', () => {
    expect(trim('_-Hello-__-', '-_')).to.equal('Hello')
  })
  it('http://hello/', () => {
    expect(trim('http://hello/', '/')).to.equal('http://hello')
  })
  it('C:\\', () => {
    expect(trim('C:\\', '\\')).to.equal('C:')
  })
  it('123', () => {
    expect(trim(123, 3)).to.equal('12')
  })
  it('empty string', () => {
    expect(trim('')).to.equal('')
  })
  it('null', () => {
    expect(trim(null)).to.equal('')
  })
  it('undefined', () => {
    expect(trim(undefined)).to.equal('')
  })
})
