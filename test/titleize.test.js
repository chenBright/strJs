let expect = require('chai').expect,
  titleize = require('../src/titleize').titleize

describe('titleize', () => {
  it('the titleize string method', () => {
    expect(titleize('the titleize string method')).to.equal('The Titleize String Method')
  })
  it('the titleize string  method', () => {
    expect(titleize('the titleize string  method')).to.equal('The Titleize String  Method')
  })
  it('let\'s have some fun', () => {
    expect(titleize('let\'s have some fun')).to.equal('Let\'s Have Some Fun')
  })
  it('a-dash-separated-string', () => {
    expect(titleize('a-dash-separated-string')).to.equal('A-Dash-Separated-String')
  })
  it('A-DASH-SEPARATED-STRING', () => {
    expect(titleize('A-DASH-SEPARATED-STRING')).to.equal('A-Dash-Separated-String')
  })
  it('number', () => {
    expect(titleize(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(titleize('')).to.equal('')
  })
  it('null', () => {
    expect(titleize(null)).to.equal('')
  })
  it('undefined', () => {
    expect(titleize(undefined)).to.equal('')
  })
})
