import { Analyzer } from 'src/core'

describe('Analyzer', () => {
  it('should return the number of characters', () => {
    expect(Analyzer.getLength('123456')).toBe(6)
    expect(Analyzer.getLength('123.456')).toBe(7)
    expect(Analyzer.getLength('123 456')).toBe(7)
    expect(Analyzer.getLength(' 123456 ')).toBe(8)
  })
})
