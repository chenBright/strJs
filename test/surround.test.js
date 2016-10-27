let expect = require('chai').expect,
  surround = require('../src/surround').surround

describe('surround', () => {
  it('foo', () => {
    expect(surround('foo', 'ab')).to.equal('abfooab')
    expect(surround('foo', 1)).to.equal('1foo1')
    expect(surround('foo', '')).to.equal('foo')
    expect(surround('foo', null)).to.equal('foo')
  })
  it('number', () => {
    expect(surround(123, 'ab')).to.equal('ab123ab')
    expect(surround(123, 4)).to.equal('41234')
  })
  it('empty string', () => {
    expect(surround('', 2)).to.equal('22')
  })
  it('null', () => {
    expect(surround(null, 2)).to.equal('22')
  })
  it('undefined', () => {
    expect(surround(undefined, 2)).to.equal('22')
  })
})
