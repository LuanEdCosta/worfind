import { useTranslation } from 'react-i18next'

import { useResult } from './hooks/useResult.hook'
import { useWordForm } from './hooks/useWordForm.hook'
import { Checking } from './sections/Checking.section'
import { Counting } from './sections/Counting.section'
import { Title } from './components/Title.component'
import { WordForm } from './components/WordForm.component'
import { HomeEmpty } from './components/HomeEmpty.component'

export function HomePage() {
  const { t } = useTranslation(['Home', 'Common'])

  const { query, words, setWords, handleQuery } = useWordForm()
  const { result } = useResult(query)

  return (
    <main className="min-h-full flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="flex flex-col p-6 max-w-6xl w-full mx-auto space-y-8">
          <Title title={t('Common:appName')} />

          <WordForm
            words={words}
            setWords={setWords}
            handleQuery={handleQuery}
          />
        </div>
      </header>

      <div className="flex flex-col flex-1 bg-gray-50">
        <div className="flex flex-col flex-1 p-6 max-w-6xl w-full mx-auto">
          {result ? (
            <div className="flex flex-col space-y-8">
              <Counting result={result} />
              <Checking result={result} />
            </div>
          ) : (
            <HomeEmpty />
          )}
        </div>
      </div>
    </main>
  )
}
