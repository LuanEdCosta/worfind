import { Analyzer } from 'src/core'

describe('Analyzer', () => {
  it('should return if is a palindrome or not', () => {
    const palindromes = [
      '123321',
      'deified',
      'civic',
      'radar',
      'level',
      'rotor',
      'kayak',
      'reviver',
      'madam',
      'refer',
    ]

    palindromes.forEach((example) => {
      expect(Analyzer.isPalindrome(example)).toBe(true)
      expect(Analyzer.isPalindrome(` ${example} `)).toBe(true)
      expect(Analyzer.isPalindrome(`${example}  `)).toBe(true)
    })

    expect(Analyzer.isPalindrome('123')).toBe(false)
    expect(Analyzer.isPalindrome('abc')).toBe(false)
    expect(Analyzer.isPalindrome('teste')).toBe(false)
  })

  it('should return if contains an uppercase letter', () => {
    expect(Analyzer.hasUppercaseLetter('')).toBe(false)
    expect(Analyzer.hasUppercaseLetter(' ')).toBe(false)
    expect(Analyzer.hasUppercaseLetter('abc')).toBe(false)
    expect(Analyzer.hasUppercaseLetter('Abc')).toBe(true)
    expect(Analyzer.hasUppercaseLetter('ABC')).toBe(true)
    expect(Analyzer.hasUppercaseLetter('a B c')).toBe(true)
  })

  it('should return if contains a lowercase letter', () => {
    expect(Analyzer.hasLowercaseLetter('')).toBe(false)
    expect(Analyzer.hasLowercaseLetter(' ')).toBe(false)
    expect(Analyzer.hasLowercaseLetter('ABC')).toBe(false)
    expect(Analyzer.hasLowercaseLetter('ABc')).toBe(true)
    expect(Analyzer.hasLowercaseLetter('abc')).toBe(true)
    expect(Analyzer.hasLowercaseLetter('A b C')).toBe(true)
  })

  it('should return if contains a number', () => {
    expect(Analyzer.hasNumber('')).toBe(false)
    expect(Analyzer.hasNumber(' ')).toBe(false)
    expect(Analyzer.hasNumber('abc')).toBe(false)
    expect(Analyzer.hasNumber('ABC')).toBe(false)
    expect(Analyzer.hasNumber('A 1 B')).toBe(true)
    expect(Analyzer.hasNumber('123456')).toBe(true)
  })

  it('should return if contains a special character', () => {
    const specialChars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '¨',
      '&',
      '*',
      '(',
      ')',
      '-',
      '+',
      '=',
    ]

    specialChars.forEach((specialChar) => {
      expect(Analyzer.hasSpecialChar(specialChar)).toBe(true)
    })

    expect(Analyzer.hasSpecialChar('')).toBe(false)
    expect(Analyzer.hasSpecialChar(' ')).toBe(false)
    expect(Analyzer.hasSpecialChar('abcABC123')).toBe(false)
  })
})
