let expect = require('chai').expect,
  pred = require('../src/pred').pred

describe('pred', () => {
  it('b -> a', () => {
    expect(pred('b')).to.equal('a')
  })
  it('B -> A', () => {
    expect(pred('B')).to.equal('A')
  })
  it(', -> +', () => {
    expect(pred(',')).to.equal('+')
  })
  it('2 -> \'1\'', () => {
    expect(pred(2)).to.equal('1')
  })
  it('', () => {
    expect(pred('')).to.equal('')
  })
  it(null, () => {
    expect(pred()).to.equal('')
  })
  it(undefined, () => {
    expect(pred(undefined)).to.equal('')
  })
})
