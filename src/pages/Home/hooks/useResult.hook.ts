import { useMemo } from 'react'

import { Counter, Analyzer } from 'src/core'

import { Query } from '../Home.types'

export function useResult(query: Query | null) {
  const result = useMemo(() => {
    if (!query) return null

    const text = query.words

    return {
      counting: {
        length: Counter.getLength(text),
        numberOfWords: Counter.getNumberOfWords(text),
        numberOfLetters: Counter.getNumberOfLetters(text),
        numberOfNumbers: Counter.getNumberOfNumbers(text),
        numberOfSpaces: Counter.getNumberOfSpaces(text),
        numberOfSpecialChars: Counter.getNumberOfSpecialChars(text),
      },

      checking: {
        isPalindrome: Analyzer.isPalindrome(text),
        hasUppercaseLetter: Analyzer.hasUppercaseLetter(text),
        hasLowercaseLetter: Analyzer.hasLowercaseLetter(text),
        hasNumber: Analyzer.hasNumber(text),
        hasSpecialChar: Analyzer.hasSpecialChar(text),
      },
    }
  }, [query])

  return { result }
}

export type UseResultReturn = ReturnType<typeof useResult>
