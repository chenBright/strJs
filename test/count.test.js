let expect = require('chai').expect,
  count = require('../src/count').count

describe('count', () => {
  it('\'Hello World\' has 3 \'l\' ', () => {
    expect(count('Hello world', 'l')).to.equal(3)
  })
  it('\'Hello World\' has a \'Hello\'', () => {
    expect(count('Hello world', 'Hello')).to.equal(1)
  })
  it('\'Hello world\' doesn\'t have \'foo\'', () => {
    expect(count('Hello world', 'foo')).to.equal(0)
  })
  it('empty string doesn\'t have \'x\'', () => {
    expect(count('', 'x')).to.equal(0)
  })
  it('null doesn\'t have \'x\'', () => {
    expect(count(null, 'x')).to.equal(0)
  })
  it('undefined doesn\'t have \'x\'', () => {
    expect(count(undefined, 'x')).to.equal(0)
  })
  it('12345 has a 1', () => {
    expect(count(12345, 1)).to.equal(1)
  })
  it('\'Hello world\' doesn\'t have \'\'', () => {
    expect(count('Hello world', '')).to.equal(0)
  })
  it('\'Hello world\' doesn\'t have null', () => {
    expect(count('Hello world', null)).to.equal(0)
  })
  it('\'Hello world\' doesn\'t have undefined', () => {
    expect(count('Hello world', undefined)).to.equal(0)
  })
  it('escape character', () => {
    expect(count('function()', '()')).to.equal(1)
  })
  it('empty', () => {
    expect(count('', '')).to.equal(0)
  })
  it('null', () => {
    expect(count(null, null)).to.equal(0)
  })
  it('', () => {
    expect(count(undefined, undefined)).to.equal(0)
  })
})
