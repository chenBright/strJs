let expect = require('chai').expect,
  chars = require('../src/chars').chars

describe('chars', () => {
  it('input \'abc\' to get an array which length is 3', () => {
    expect(chars('abc')).has.lengthOf(3)
  })
  it('input 1234 to get an array which length is 4', () => {
    expect(chars(1234)).has.lengthOf(4)
  })
  it('input \'\' to get an array which length is 0', () => {
    expect(chars('')).has.lengthOf(0)
  })
  it('input null to get an array which length is 0', () => {
    expect(chars(null)).has.lengthOf(0)
  })
  it('input undefined to get an array which length is 0', () => {
    expect(chars(undefined)).has.lengthOf(0)
  })
})
