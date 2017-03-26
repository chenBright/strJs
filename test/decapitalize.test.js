let expect = require('chai').expect,
  decapitalize = require('../src/decapitalize').decapitalize

describe('decapitalize', () => {
  it('First letter is lower case', () => {
    expect(decapitalize('StrJs')).to.equal('strJs')
  })
  it('Non string', () => {
    expect(decapitalize(123)).to.equal('123')
  })
  it('Decapitalizing empty string returns empty string', () => {
    expect(decapitalize('')).to.equal('')
  })
  it('Decapitalizing null returns empty string', () => {
    expect(decapitalize(null)).to.equal('')
  })
  it('Decapitalizing undefined returns empty string', () => {
    expect(decapitalize(undefined)).to.equal('')
  })
})
