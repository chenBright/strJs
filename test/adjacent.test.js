let expect = require('chai').expect,
  adjacent = require('../src/helper/adjacent').adjacent

describe('adjacent', () => {
  it('input \'b\' and 1 to get \'c\'', () => {
    expect(adjacent('b', 1)).to.equal('c')
  })
  it('input \'b\' and -1 to get \'a\'', () => {
    expect(adjacent('b', -1)).to.equal('a')
  })
})
