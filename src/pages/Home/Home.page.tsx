import { useTranslation } from 'react-i18next'
import { FaHandPointUp } from 'react-icons/fa'

import { Empty } from 'src/components/Empty'

import { Title } from './components/Title.component'
import { Checking } from './sections/Checking.section'
import { Counting } from './sections/Counting.section'
import { useWordForm } from './hooks/useWordForm.hook'
import { WordForm } from './components/WordForm.component'

export function HomePage() {
  const { t } = useTranslation(['Home', 'Common'])

  const { query, words, setWords, handleQuery } = useWordForm()

  return (
    <main>
      <header>
        <Title title={t('Common:appName')} />
        <WordForm words={words} setWords={setWords} handleQuery={handleQuery} />
      </header>

      <div>
        {query ? (
          <>
            <Counting />
            <Checking />
          </>
        ) : (
          <Empty icon={<FaHandPointUp />} message={t('empty.message')} />
        )}
      </div>
    </main>
  )
}
