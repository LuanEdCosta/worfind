import { useState } from 'react'

import { Query } from '../Home.types'

export function useWordForm() {
  const [words, setWords] = useState('')
  const [query, setQuery] = useState<Query | null>(null)

  const handleQuery = () => {
    setQuery({ words })
  }

  return {
    query,
    words,
    setWords,
    handleQuery,
  }
}

export type UseWordFormReturn = ReturnType<typeof useWordForm>
