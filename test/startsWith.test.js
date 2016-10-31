let expect = require('chai').expect,
  startsWith = require('../src/startsWith').startsWith

describe('startsWith', () => {
  it('foobar', () => {
    expect(startsWith('foobar', 'foo')).to.be.true
    expect(startsWith('foobar', 'f')).to.be.true
    expect(startsWith('foobar', 'boo')).to.be.false
  })
  it('foobar with a start number', () => {
    expect(startsWith('foobar', 'oo', 1)).to.be.true
    expect(startsWith('foobar', 'foo', 0)).to.be.true
    expect(startsWith('foobar', 'foo', 1)).to.be.false
  })
  it('special string', () => {
    expect(startsWith('Äpfel', 'Ä')).to.be.true
  })
  it('number', () => {
    expect(startsWith(12345, 123)).to.be.true
    expect(startsWith(2345, 123)).to.be.false
  })
  it('empty string', () => {
    expect(startsWith('', '')).to.be.true
  })
  it('null', () => {
    expect(startsWith(null, 'foo')).to.be.false
    expect(startsWith(null, '')).to.be.true
  })
  it('undefined', () => {
    expect(startsWith(undefined, 'foo')).to.be.false
  })
})
