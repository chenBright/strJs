let expect = require('chai').expect,
  repeat = require('../src/repeat').repeat

describe('repeat', () => {
  it('foo', () => {
    expect(repeat('foo')).to.equal('')
    expect(repeat('foo', 3)).to.equal('foofoofoo')
    expect(repeat('foo', '3')).to.equal('foofoofoo')
    expect(repeat('foo', '3', '|')).to.equal('foo|foo|foo')
  })
  it('number', () => {
    expect(repeat(123, 2)).to.equal('123123')
    expect(repeat(123, 2, '*')).to.equal('123*123')
    expect(repeat(123, 2, 5)).to.equal('1235123')
  })
  it('empty string', () => {
    expect(repeat('', 2)).to.equal('')
  })
  it('null', () => {
    expect(repeat(null, 2)).to.equal('')
  })
  it('undefined', () => {
    expect(repeat(undefined, 2)).to.equal('')
  })
})
