let expect = require('chai').expect,
  humanize = require('../src/humanize').humanize

describe('humanize', () => {
  it('the_humanize_string_method', () => {
    expect(humanize('the_humanize_string_method')).to.equal('The humanize string method')
  })
  it('ThehumanizeStringMethod', () => {
    expect(humanize('ThehumanizeStringMethod')).to.equal('Thehumanize string method')
  })
  it('-ThehumanizeStringMethod', () => {
    expect(humanize('-ThehumanizeStringMethod')).to.equal('Thehumanize string method')
  })
  it('the humanize_id string method_id', () => {
    expect(humanize('the humanize_id string method')).to.equal('The humanize id string method')
  })
  it('the  humanize string method  ', () => {
    expect(humanize('the  humanize string method  ')).to.equal('The humanize string method')
  })
  it('   capitalize dash-CamelCase_underscore trim  ', () => {
    expect(humanize('   capitalize dash-CamelCase_underscore trim  ')).to.equal('Capitalize dash camel case underscore trim')
  })
  it('number', () => {
    expect(humanize(123)).to.equal('123')
  })
  it('empty string', () => {
    expect(humanize('')).to.equal('')
  })
  it(null, () => {
    expect(humanize()).to.equal('')
  })
  it(undefined, () => {
    expect(humanize(undefined)).to.equal('')
  })
})
