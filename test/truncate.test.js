let expect = require('chai').expect,
  truncate = require('../src/truncate').truncate

describe('truncate', () => {
  it('Hello world', () => {
    expect(truncate('Hello world', 6, 'bad boy')).to.equal('Hello bad boy')
    expect(truncate('Hello world', 5)).to.equal('Hello...')
    expect(truncate('Hello world', 15)).to.equal('Hello world')
  })
  it('empty string', () => {
    expect(truncate('', 5)).to.equal('')
  })
  it('null', () => {
    expect(truncate(null, 5)).to.equal('')
  })
  it('undefined', () => {
    expect(truncate(undefined, 5)).to.equal('')
  })
  it('number', () => {
    expect(truncate(1234567, 5)).to.equal('12345...')
  })
})
