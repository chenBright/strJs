let expect = require('chai').expect,
  underscored = require('../src/underscored').underscored

describe('underscored', () => {
  it('the-underscored-string-method', () => {
    expect(underscored('the-underscored-string-method')).to.equal('the_underscored_string_method')
  })
  it('theUnderscoredStringMethod', () => {
    expect(underscored('theUnderscoredStringMethod')).to.equal('the_underscored_string_method')
  })
  it('TheUnderscoredStringMethod', () => {
    expect(underscored('TheUnderscoredStringMethod')).to.equal('the_underscored_string_method')
  })
  it(' the underscored  string method', () => {
    expect(underscored(' the underscored  string method')).to.equal('the_underscored_string_method')
  })
  it('number', () => {
    expect(underscored(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(underscored('')).to.equal('')
  })
  it(null, () => {
    expect(underscored()).to.equal('')
  })
  it(undefined, () => {
    expect(underscored(undefined)).to.equal('')
  })
})
