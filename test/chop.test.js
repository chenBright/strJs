let expect = require('chai').expect,
  chop = require('../src/chop').chop

describe('chop', () => {
  it('whitespace', () => {
    expect(chop('whitespace')).to.eql(['whitespace'])
    expect(chop('whitespace', 2)).to.eql(['wh', 'it', 'es', 'pa', 'ce'])
    expect(chop('whitespace', 3)).to.eql(['whi', 'tes', 'pac', 'e'])
  })
  it('12345', () => {
    expect(chop(12345, 1)).to.eql(['1', '2', '3', '4', '5'])
  })
  it('empty string', () => {
    expect(chop('', 2)).to.eql([])
  })
  it('null', () => {
    expect(chop(null, 2)).to.eql([])
  })
  it('undefined', () => {
    expect(chop(undefined, 2)).to.eql([])
  })
})
