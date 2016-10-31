let expect = require('chai').expect,
  endsWith = require('../src/endsWith').endsWith

describe('endsWith', () => {
  it('foobar', () => {
    expect(endsWith('foobar', 'bar')).to.be.true
    expect(endsWith('foobar', 'f')).to.be.false
    expect(endsWith('foobar', 'barr')).to.be.false
  })
  it('foobar with a start number', () => {
    expect(endsWith('foobar', 'bar', 5)).to.be.false
    expect(endsWith('foobar', 'bar', 6)).to.be.true
  })
  it('special string', () => {
    expect(endsWith('foobä', 'ä')).to.be.true
  })
  it('number', () => {
    expect(endsWith(12345, 45)).to.be.true
    expect(endsWith(12345, 6)).to.be.false
    expect(endsWith(12345, 34, 4)).to.be.true
    expect(endsWith(12345, 45, 4)).to.be.false
  })
  it('empty string', () => {
    expect(endsWith('', '')).to.be.true
  })
  it('null', () => {
    expect(endsWith(null, 'foo')).to.be.false
    expect(endsWith(null, '')).to.be.true
  })
  it('undefined', () => {
    expect(endsWith(undefined, 'foo')).to.be.false
  })
})
