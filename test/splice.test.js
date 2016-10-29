let expect = require('chai').expect,
  splice = require('../src/splice').splice

describe('splice', () => {
  it('https://edtsech@bitbucket.org/edtsech/underscore.strings', () => {
    expect(splice('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30 , 7, 'epeli'))
      .to.equal('https://edtsech@bitbucket.org/epeli/underscore.strings')
  })
  it('12345', () => {
    expect(splice(12345, 1, 2, 321)).to.equal('132145')
  })
})
