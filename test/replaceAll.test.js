let expect = require('chai').expect,
  replaceAll = require('../src/replaceAll').replaceAll

describe('replaceAll', () => {
  it('aca become bcb', () => {
    expect(replaceAll('aca', 'a', 'b')).to.equal('bcb')
  })
  it('ccc unchange', () => {
    expect(replaceAll('ccc', 'a', 'b')).to.equal('ccc')
  })
  it('Aa become Ab', () => {
    expect(replaceAll('Aa', 'a', 'b')).to.equal('Ab')
  })
  it('Aa become bb', () => {
    expect(replaceAll('Aa', 'a', 'b', true)).to.equal('bb')
  })
  it('foo bar foo', () => {
    expect(replaceAll('foo bar foo', 'foo', 'moo')).to.equal('moo bar moo')
  })
  it('foo bar\n foo', () => {
    expect(replaceAll('foo bar\n foo', 'foo', 'moo')).to.equal('moo bar\n moo')
  })
  it('escape character', () => {
    expect(replaceAll('()[]', '[]', '()')).to.equal('()()')
  })
  it('empty string', () => {
    expect(replaceAll('', 'a', 'b')).to.equal('')
  })
  it('null', () => {
    expect(replaceAll(null, 'a', 'b')).to.equal('')
  })
  it('undefined', () => {
    expect(replaceAll(undefined, 'a', 'b')).to.equal('')
  })
  it('number', () => {
    expect(replaceAll(12345, 3, 'b')).to.equal('12b45')
  })
})
