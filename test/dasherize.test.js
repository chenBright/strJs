let expect = require('chai').expect,
  dasherize = require('../src/dasherize').dasherize

describe('dasherize', () => {
  it('the_dasherize_string_method', () => {
    expect(dasherize('the_dasherize_string_method')).to.equal('the-dasherize-string-method')
  })
  it('TheDasherizeStringMethod', () => {
    expect(dasherize('TheDasherizeStringMethod')).to.equal('-the-dasherize-string-method')
  })
  it('thisIsATest', () => {
    expect(dasherize('thisIsATest')).to.equal('this-is-a-test')
  })
  it('this Is A Test', () => {
    expect(dasherize('this Is A Test')).to.equal('this-is-a-test')
  })
  it('thisIsATest123', () => {
    expect(dasherize('thisIsATest123')).to.equal('this-is-a-test123')
  })
  it('123thisIsATest', () => {
    expect(dasherize('123thisIsATest')).to.equal('123this-is-a-test')
  })
  it('the dasherize string method', () => {
    expect(dasherize('the dasherize string method')).to.equal('the-dasherize-string-method')
  })
  it('the  dasherize string method  ', () => {
    expect(dasherize('the  dasherize string method  ')).to.equal('the-dasherize-string-method')
  })
  it('téléphone', () => {
    expect(dasherize('téléphone')).to.equal('téléphone')
  })
  it('foo$bar', () => {
    expect(dasherize('foo$bar')).to.equal('foo$bar')
  })
  it('input with a-dash', () => {
    expect(dasherize('input with a-dash')).to.equal('input-with-a-dash')
  })
  it('number', () => {
    expect(dasherize(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(dasherize('')).to.equal('')
  })
  it(null, () => {
    expect(dasherize()).to.equal('')
  })
  it(undefined, () => {
    expect(dasherize(undefined)).to.equal('')
  })
})
