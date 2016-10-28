let expect = require('chai').expect,
  escapeHTML = require('../src/escapeHTML').escapeHTML

describe('escapeHTML', () => {
  it('<div>Blah & "blah" & \'blah\'</div>', () => {
    expect(escapeHTML('<div>Blah & "blah" & \'blah\'</div>')).to.equal('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;')
  })
  it('&lt;', () => {
    expect(escapeHTML('&lt;')).to.equal('&amp;lt;')
  })
  it('blank string', () => {
    expect(escapeHTML(' ')).to.equal(' ')
  })
  it('¢', () => {
    expect(escapeHTML('¢')).to.equal('&cent;')
  })
  it('¢ £ ¥ € © ®', () => {
    expect(escapeHTML('¢ £ ¥ € © ®')).to.equal('&cent; &pound; &yen; &euro; &copy; &reg;')
  })
  it('number', () => {
    expect(escapeHTML(12345)).to.equal('12345')
  })
  it('empty string', () => {
    expect(escapeHTML('')).to.equal('')
  })
  it('null', () => {
    expect(escapeHTML(null)).to.equal('')
  })
  it('undefined', () => {
    expect(escapeHTML(undefined)).to.equal('')
  })
})
