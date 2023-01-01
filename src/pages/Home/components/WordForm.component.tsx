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
    <form
      className="flex flex-col items-stretch space-y-4 sm:flex-row sm:items-end sm:space-x-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <TextField className="sm:flex-1" label={t('wordForm.label')}>
        <Input
          value={words}
          placeholder={t('wordForm.placeholder').toString()}
          onChange={(e) => setWords(e.target.value)}
        />
      </TextField>

      <Button className="w-full sm:max-w-[250px]">
        <div>{t('wordForm.button')}</div>
        <FaArrowRight />
      </Button>
    </form>
  )
}
