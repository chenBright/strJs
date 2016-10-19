let expect = require('chai').expect,
  join = require('../src/join').join

describe('join', () => {
  it('basic join', () => {
    expect(join('', 'Hello', 'World')).to.equal('HelloWorld')
  })
  it('join numbers and strings', () => {
    expect(join('', 1, 'Hello', 520)).to.equal('1Hello520')
  })
  it('join with spaces', () => {
    expect(join(' ', 'Hello', 'World')).to.equal('Hello World')
  })
  it('join numbers', () => {
    expect(join(2, 5, 0)).to.equal('520')
  })
  it('join null with string returns string', () => {
    expect(join('', 'Hello', null)).to.equal('Hello')
  })
  it('join null with number returns string', () => {
    expect(join('', 123, null)).to.equal('123')
  })
  it('separate with \'|\'', () => {
    expect(join('|', 'Hello', 'World', '!')).to.equal('Hello|World|!')
  })
  it('null as separate', () => {
    expect(join(null, 2, 3)).to.equal('23')
  })
})
