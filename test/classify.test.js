let expect = require('chai').expect,
  classify = require('../src/classify').classify

describe('classify', () => {
  it('some_class_name', () => {
    expect(classify('some_class_name')).to.equal('SomeClassName')
  })
  it('my wonderfull class_name', () => {
    expect(classify('my wonderfull class_name')).to.equal('MyWonderfullClassName')
  })
  it('my wonderfull.class.name', () => {
    expect(classify('my wonderfull.class.name')).to.equal('MyWonderfullClassName')
  })
  it('myLittleCamel', () => {
    expect(classify('myLittleCamel')).to.equal('MyLittleCamel')
  })
  it('myLittleCamel.class.name', () => {
    expect(classify('myLittleCamel.class.name')).to.equal('MyLittleCamelClassName')
  })
  it('number', () => {
    expect(classify(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(classify('')).to.equal('')
  })
  it('null', () => {
    expect(classify(null)).to.equal('')
  })
  it('undefined', () => {
    expect(classify(undefined)).to.equal('')
  })
})
