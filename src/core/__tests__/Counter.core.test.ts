import { Counter } from 'src/core'

describe('Counter', () => {
  it('should return the number of characters', () => {
    expect(Counter.getLength('123456')).toBe(6)
    expect(Counter.getLength('123.456')).toBe(7)
    expect(Counter.getLength('123 456')).toBe(7)
    expect(Counter.getLength(' 123456 ')).toBe(8)
  })

  it('should return the number of words', () => {
    expect(Counter.getNumberOfWords('')).toBe(0)
    expect(Counter.getNumberOfWords(' ')).toBe(0)
    expect(Counter.getNumberOfWords('@#$')).toBe(0)
    expect(Counter.getNumberOfWords('test')).toBe(1)
    expect(Counter.getNumberOfWords('abc 123 def')).toBe(3)
    expect(Counter.getNumberOfWords(' abc 123 def ')).toBe(3)
    expect(Counter.getNumberOfWords(' ab_ 1_3 _cd ')).toBe(3)
    expect(Counter.getNumberOfWords(' abc_____cde ')).toBe(1)
    expect(Counter.getNumberOfWords('1 @ 2 # 3')).toBe(3)
    expect(Counter.getNumberOfWords('a 1 2 b 3 c')).toBe(6)
  })

  it('should return the number of letters', () => {
    expect(Counter.getNumberOfLetters('')).toBe(0)
    expect(Counter.getNumberOfLetters('abc123')).toBe(3)
    expect(Counter.getNumberOfLetters('abc 123')).toBe(3)
    expect(Counter.getNumberOfLetters('ABC123')).toBe(3)
    expect(Counter.getNumberOfLetters('ABC 123')).toBe(3)
    expect(Counter.getNumberOfLetters('a b c')).toBe(3)
    expect(Counter.getNumberOfLetters('A B C')).toBe(3)
    expect(Counter.getNumberOfLetters('123456')).toBe(0)
    expect(Counter.getNumberOfLetters('@#$%*!')).toBe(0)
  })

  it('should return the number of numbers', () => {
    expect(Counter.getNumberOfNumbers('')).toBe(0)
    expect(Counter.getNumberOfNumbers('abc')).toBe(0)
    expect(Counter.getNumberOfNumbers('123')).toBe(3)
    expect(Counter.getNumberOfNumbers('abc123')).toBe(3)
    expect(Counter.getNumberOfNumbers(' abc 123 ')).toBe(3)
    expect(Counter.getNumberOfNumbers(' a@c 123 ')).toBe(3)
    expect(Counter.getNumberOfNumbers('1234567890')).toBe(10)
  })

  it('should return the number of spaces', () => {
    expect(Counter.getNumberOfSpaces('')).toBe(0)
    expect(Counter.getNumberOfSpaces('abc')).toBe(0)
    expect(Counter.getNumberOfSpaces('a b')).toBe(1)
    expect(Counter.getNumberOfSpaces('a b c')).toBe(2)
    expect(Counter.getNumberOfSpaces(' a b c ')).toBe(4)
  })

  it('should return the number of special characters', () => {
    expect(Counter.getNumberOfSpecialChars('')).toBe(0)
    expect(Counter.getNumberOfSpecialChars(' ')).toBe(0)
    expect(Counter.getNumberOfSpecialChars('1a2b3c')).toBe(0)
    expect(Counter.getNumberOfSpecialChars('1@#$2')).toBe(3)
    expect(Counter.getNumberOfSpecialChars(' @#$ ')).toBe(3)
    expect(Counter.getNumberOfSpecialChars('__-__')).toBe(1)
  })
})
