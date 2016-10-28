let expect = require('chai').expect,
  unescapeHTML = require('../src/unescapeHTML').unescapeHTML

describe('unescapeHTML', () => {
  it('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;', () => {
    expect(unescapeHTML('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;')).to.equal('<div>Blah & "blah" & \'blah\'</div>')
  })
  it('&amp;lt;', () => {
    expect(unescapeHTML('&amp;lt;')).to.equal('&lt;')
  })
  it('&apos;', () => {
    expect(unescapeHTML('&apos;')).to.equal('\'')
  })
  it('&#39;', () => {
    expect(unescapeHTML('&#39;')).to.equal('\'')
  })
  it('&#0039;', () => {
    expect(unescapeHTML('&#0039;')).to.equal('\'')
  })
  it('&#x4a;', () => {
    expect(unescapeHTML('&#x4a;')).to.equal('J')
  })
  it('&#x04A;', () => {
    expect(unescapeHTML('&#x04A;')).to.equal('J')
  })
  it('&#X4A;', () => {
    expect(unescapeHTML('&#X4A;')).to.equal('&#X4A;')
  })
  it('&_#39;', () => {
    expect(unescapeHTML('&_#39;')).to.equal('&_#39;')
  })
  it('&amp;#38;', () => {
    expect(unescapeHTML('&amp;#38;')).to.equal('&#38;')
  })
  it('&#38;amp;', () => {
    expect(unescapeHTML('&#38;amp;')).to.equal('&amp;')
  })
  it('&#39;', () => {
    expect(unescapeHTML('&#39;')).to.equal('\'')
  })
  it('&nbsp;', () => {
    expect(unescapeHTML('&nbsp;')).to.equal(' ')
  })
  it('what is the &yen; to &pound; to &euro; conversion process?', () => {
    expect(unescapeHTML('what is the &yen; to &pound; to &euro; conversion process?')).to.equal('what is the ¥ to £ to € conversion process?')
  })
  it('&reg; trademark', () => {
    expect(unescapeHTML('&reg; trademark')).to.equal('® trademark')
  })
  it('&copy; 1992. License available for 50 &cent;', () => {
    expect(unescapeHTML('&copy; 1992. License available for 50 &cent;')).to.equal('© 1992. License available for 50 ¢')
  })
  it('&nbsp;', () => {
    expect(unescapeHTML('&nbsp;')).to.equal(' ')
  })
  it('number', () => {
    expect(unescapeHTML(12345)).to.equal('12345')
  })
  it('enpty string', () => {
    expect(unescapeHTML('')).to.equal('')
  })
  it('null', () => {
    expect(unescapeHTML(null)).to.equal('')
  })
  it('undefined', () => {
    expect(unescapeHTML(undefined)).to.equal('')
  })
})
