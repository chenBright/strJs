let expect = require('chai').expect,
  succ = require('../src/succ').succ

describe('succ', () => {
  it('a -> b', () => {
    expect(succ('a')).to.equal('b')
  })
  it('A -> B', () => {
    expect(succ('A')).to.equal('B')
  })
  it('+ -> ,', () => {
    expect(succ('+')).to.equal(',')
  })
  it('1 -> \'2\'', () => {
    expect(succ(1)).to.equal('2')
  })
  it('', () => {
    expect(succ('')).to.equal('')
  })
  it(null, () => {
    expect(succ()).to.equal('')
  })
  it(undefined, () => {
    expect(succ(undefined)).to.equal('')
  })
})
