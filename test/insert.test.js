let expect = require('chai').expect,
  insert = require('../src/insert').insert

describe('insert', () => {
  it('insert after', () => {
    expect(insert('Hello ', 6, 'chen')).to.equal('Hello chen')
  })
  it('insert before', () => {
    expect(insert('Hello', 0, 'chen ')).to.equal('chen Hello')
  })
  it('index > length', () => {
    expect(insert('Hello ', 100, 'chen')).to.equal('Hello chen')
  })
  it('empty string', () => {
    expect(insert('', 100, 'chen')).to.equal('chen')
  })
  it('null', () => {
    expect(insert(null, 100, 'chen')).to.equal('chen')
  })
  it('undefined', () => {
    expect(insert(undefined, 100, 'chen')).to.equal('chen')
  })
  it('12345 after', () => {
    expect(insert(12345, 5, 'chen')).to.equal('12345chen')
  })
  it('12345 middle', () => {
    expect(insert(12345, 3, 'chen')).to.equal('123chen45')
  })
})
