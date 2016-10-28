let expect = require('chai').expect,
  map = require('../src/map').map

describe('map', () => {
  it('Hello world', () => {
    expect(map('Hello world', val => val)).to.equal('Hello world')
    expect(map('Hello world', val => val.toUpperCase())).to.equal('HELLO WORLD')
    expect(map('Hello world', '')).to.equal('Hello world')
    expect(map('Hello world', null)).to.equal('Hello world')
    expect(map('Hello world', undefined)).to.equal('Hello world')
  })
  it('12345', () => {
    expect(map(12345, val => val)).to.equal('12345')
  })
  it('empty string', () => {
    expect(map('', val => val)).to.equal('')
    expect(map('', '')).to.equal('')
  })
  it('null', () => {
    expect(map(null, val => {})).to.equal('')
    expect(map(null, '')).to.equal('')
  })
  it('undefined', () => {
    expect(map(undefined, val => val)).to.equal('')
    expect(map(undefined, '')).to.equal('')
  })
})
