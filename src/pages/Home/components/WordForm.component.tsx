import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa'

import { Button, Input, TextField } from 'src/components'

import { UseWordFormReturn } from '../hooks/useWordForm.hook'

type WordFormProps = Pick<
  UseWordFormReturn,
  'words' | 'setWords' | 'handleQuery'
>

export function WordForm({ words, setWords, handleQuery }: WordFormProps) {
  const { t } = useTranslation('Home')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleQuery()
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField label={t('wordForm.label')}>
        <Input
          value={words}
          placeholder={t('wordForm.placeholder').toString()}
          onChange={(e) => setWords(e.target.value)}
        />
      </TextField>

      <Button>
        <div>{t('wordForm.button')}</div>
        <FaArrowRight />
      </Button>
    </form>
  )
}
