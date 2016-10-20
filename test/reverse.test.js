let expect = require('chai').expect,
  reverse = require('../src/reverse').reverse

describe('reverse', () => {
  it('foo bar', () => {
    expect(reverse('foo bar')).to.equal('rab oof')
  })
  it('number', () => {
    expect(reverse(123.45)).to.equal('54.321')
  })
  it('empty string', () => {
    expect(reverse('')).to.equal('')
  })
  it('null', () => {
    expect(reverse(null)).to.equal('')
  })
  it(undefined, () => {
    expect(reverse(undefined)).to.equal('')
  })
})
