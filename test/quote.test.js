let expect = require('chai').expect,
  quote = require('../src/quote').quote

describe('quote', () => {
  it('foo', () => {
    expect(quote('foo')).to.equal('"foo"')
    expect(quote('"foo"')).to.equal('""foo""')
    expect(quote('foo', '\'')).to.equal('\'foo\'')
  })
  it('number', () => {
    expect(quote(123)).to.equal('"123"')
  })
})
