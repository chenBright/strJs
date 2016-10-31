let expect = require('chai').expect,
  include = require('../src/include').include

describe('include', () => {
  it('foobar', () => {
    expect(include('foobar', 'bar')).to.be.true
    expect(include('foobar', 'buzz')).to.be.false
  })
  it('number', () => {
    expect(include(12345, 34)).to.be.true
    expect(include(12345, 6)).to.be.false
  })
  it('empty string', () => {
    expect(include('', 32)).to.be.false
  })
  it('null', () => {
    expect(include(null, 34)).to.be.false
    expect(include(null, '')).to.be.true
  })
  it('undefined', () => {
    expect(include(undefined, 34)).to.be.false
  })
})
