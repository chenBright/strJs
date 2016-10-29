let expect = require('chai').expect,
  strRightBack = require('../src/strRightBack').strRightBack

describe('strRightBack', () => {
  it('This_is_a_test_string', () => {
    expect(strRightBack('This_is_a_test_string', '_')).to.equal('string')
    expect(strRightBack('This_is_a_test_string', 'string')).to.equal('')
    expect(strRightBack('This_is_a_test_string')).to.equal('This_is_a_test_string')
    expect(strRightBack('This_is_a_test_string', '')).to.equal('This_is_a_test_string')
    expect(strRightBack('This_is_a_test_string', '-')).to.equal('This_is_a_test_string')
  })
  it('number', () => {
    expect(strRightBack(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(strRightBack('', 'foo')).to.equal('')
  })
  it('null', () => {
    expect(strRightBack(null)).to.equal('')
  })
  it('undefined', () => {
    expect(strRightBack(undefined)).to.equal('')
  })
})
