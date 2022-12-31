import { Counter } from 'src/core'

describe('Counter', () => {
  it('should return the number of characters', () => {
    expect(Counter.getLength('123456')).toBe(6)
    expect(Counter.getLength('123.456')).toBe(7)
    expect(Counter.getLength('123 456')).toBe(7)
    expect(Counter.getLength(' 123456 ')).toBe(8)
  })
})
