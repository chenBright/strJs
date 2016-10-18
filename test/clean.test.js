let expect = require('chai').expect,
  clean = require('../src/clean').clean

describe('clean', () => {
  it('clean unnecessary spaces', () => {
    expect(clean('   string   js  ')).to.equal('string js')
  })
  it('123', () => {
    expect(clean(123)).to.equal('123')
  })
  it('claning empty string returns empty string', () => {
    expect(clean('')).to.equal('')
  })
  it('claning null returns empty string', () => {
    expect(clean(null)).to.equal('')
  })
  it('claning undefined returns empty string', () => {
    expect(clean(undefined)).to.equal('')
  })
})
