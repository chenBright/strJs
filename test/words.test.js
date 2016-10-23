let expect = require('chai').expect,
  words = require('../src/words').words

describe('words', () => {
  it('I love you', () => {
    expect(words('I love you')).to.eql(['I', 'love', 'you'])
  })
  it('I  love   you', () => {
    expect(words('I  love   you')).to.eql(['I', 'love', 'you'])
  })
  it('I_love_you', () => {
    expect(words('I_love_you', '_')).to.eql(['I', 'love', 'you'])
  })
  it('I-love-you', () => {
    expect(words('I-love-you', /-/)).to.eql(['I', 'love', 'you'])
  })
  it('number', () => {
    expect(words(123)).to.eql(['123'])
  })
  it('empty string', () => {
    expect(words('')).to.eql([])
  })
  it('blank string', () => {
    expect(words('   ')).to.eql([])
  })
  it('null', () => {
    expect(words(null)).to.eql([])
  })
  it('undefined', () => {
    expect(words(undefined)).to.eql([])
  })
})
