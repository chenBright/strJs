let expect = require('chai').expect,
  strLeftBack = require('../src/strLeftBack').strLeftBack

describe('strLeftBack', () => {
  it('This_is_a_test_string', () => {
    expect(strLeftBack('This_is_a_test_string', '_')).to.equal('This_is_a_test')
    expect(strLeftBack('This_is_a_test_string', 'This')).to.equal('')
    expect(strLeftBack('This_is_a_test_string')).to.equal('This_is_a_test_string')
    expect(strLeftBack('This_is_a_test_string', '')).to.equal('This_is_a_test_string')
    expect(strLeftBack('This_is_a_test_string', '-')).to.equal('This_is_a_test_string')
  })
  it('number', () => {
    expect(strLeftBack(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(strLeftBack('')).to.equal('')
  })
  it('null', () => {
    expect(strLeftBack(null)).to.equal('')
  })
  it('undefined', () => {
    expect(strLeftBack(undefined)).to.equal('')
  })
})
