let expect = require('chai').expect,
  camelize = require('../src/camelize').camelize

describe('camelize', () => {
  it('the_camelize_string_method', () => {
    expect(camelize('the_camelize_string_method')).to.equal('theCamelizeStringMethod')
  })
  it('webkit-transform', () => {
    expect(camelize('webkit-transform')).to.equal('webkitTransform')
  })
  it('-the-camelize-string-method', () => {
    expect(camelize('-the-camelize-string-method')).to.equal('TheCamelizeStringMethod')
  })
  it('The-camelize-string-method', () => {
    expect(camelize('The-camelize-string-method')).to.equal('TheCamelizeStringMethod')
  })
  it(' the camelize  string method', () => {
    expect(camelize(' the camelize  string method')).to.equal('theCamelizeStringMethod')
  })
  it('_som eWeird---name-', () => {
    expect(camelize('_som eWeird---name-')).to.equal('SomEWeirdName')
  })
  it('number', () => {
    expect(camelize(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(camelize('')).to.equal('')
  })
  it('null', () => {
    expect(camelize(null)).to.equal('')
  })
  it('undefined', () => {
    expect(camelize(undefined)).to.equal('')
  })

  it('the_camelize_string_method with true', () => {
    expect(camelize('the_camelize_string_method', true)).to.equal('theCamelizeStringMethod')
  })
  it('webkit-transform with true', () => {
    expect(camelize('webkit-transform', true)).to.equal('webkitTransform')
  })
  it('-the-camelize-string-method with true', () => {
    expect(camelize('-the-camelize-string-method', true)).to.equal('theCamelizeStringMethod')
  })
  it('The-camelize-string-method with true', () => {
    expect(camelize('The-camelize-string-method', true)).to.equal('theCamelizeStringMethod')
  })
  it(' the camelize  string method with true', () => {
    expect(camelize(' the camelize  string method', true)).to.equal('theCamelizeStringMethod')
  })
  it('_som eWeird---name- with true', () => {
    expect(camelize('_som eWeird---name-', true)).to.equal('somEWeirdName')
  })
  it('number with true', () => {
    expect(camelize(123, true)).to.equal('123')
  })
  it('empty string with true', () => {
    expect(camelize('', true)).to.equal('')
  })
  it('null with true', () => {
    expect(camelize(null, true)).to.equal('')
  })
  it('undefined with true', () => {
    expect(camelize(undefined, true)).to.equal('')
  })
})
