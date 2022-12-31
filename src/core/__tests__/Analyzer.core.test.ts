import { Analyzer } from 'src/core'

describe('Analyzer', () => {
  it('should be a palindrome', () => {
    const examples = [
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

    examples.forEach((example) => {
      expect(Analyzer.isPalindrome(example)).toBe(true)
      expect(Analyzer.isPalindrome(` ${example} `)).toBe(true)
      expect(Analyzer.isPalindrome(`${example}  `)).toBe(true)
    })
  })

  it('should not be a palindrome', () => {
    expect(Analyzer.isPalindrome('123')).toBe(false)
    expect(Analyzer.isPalindrome('abc')).toBe(false)
    expect(Analyzer.isPalindrome('teste')).toBe(false)
  })
})
