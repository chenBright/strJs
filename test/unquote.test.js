let expect = require('chai').expect,
  unquote = require('../src/unquote').unquote

describe('unquote', () => {
  it('foo', () => {
    expect(unquote('"foo"')).to.equal('foo')
    expect(unquote('""foo""')).to.equal('"foo"')
    expect(unquote('\'foo\'', '\'')).to.equal('foo')
  })
  it('number', () => {
    expect(unquote('"123"')).to.equal('123')
  })
})
