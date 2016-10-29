let expect = require('chai').expect,
  strRight = require('../src/strRight').strRight

describe('strRight', () => {
  it('This_is_a_test_string', () => {
    expect(strRight('This_is_a_test_string', '_')).to.equal('is_a_test_string')
    expect(strRight('This_is_a_test_string', 'string')).to.equal('')
    expect(strRight('This_is_a_test_string')).to.equal('This_is_a_test_string')
    expect(strRight('This_is_a_test_string', '')).to.equal('This_is_a_test_string')
    expect(strRight('This_is_a_test_string', '-')).to.equal('This_is_a_test_string')
  })
  it('number', () => {
    expect(strRight(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(strRight('')).to.equal('')
  })
  it('null', () => {
    expect(strRight(null)).to.equal('')
  })
  it('undefined', () => {
    expect(strRight(undefined)).to.equal('')
  })
})
