let expect = require('chai').expect,
  strLeft = require('../src/strLeft').strLeft

describe('strLeft', () => {
  it('This_is_a_test_string', () => {
    expect(strLeft('This_is_a_test_string', '_')).to.equal('This')
    expect(strLeft('This_is_a_test_string', 'This')).to.equal('')
    expect(strLeft('This_is_a_test_string')).to.equal('This_is_a_test_string')
    expect(strLeft('This_is_a_test_string', '')).to.equal('This_is_a_test_string')
    expect(strLeft('This_is_a_test_string', '-')).to.equal('This_is_a_test_string')
  })
  it('number', () => {
    expect(strLeft(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(strLeft('')).to.equal('')
  })
  it('null', () => {
    expect(strLeft(null)).to.equal('')
  })
  it('undefined', () => {
    expect(strLeft(undefined)).to.equal('')
  })
})
