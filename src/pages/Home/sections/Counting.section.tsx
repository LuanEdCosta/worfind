import { useTranslation } from 'react-i18next'
import {
  FaAt,
  FaFont,
  FaPlus,
  FaTextWidth,
  FaAlignJustify,
  FaGripLinesVertical,
} from 'react-icons/fa'

import { Card } from 'src/components'

import { UseResultReturn } from '../hooks/useResult.hook'

type CountingProps = Pick<UseResultReturn, 'result'>

export function Counting({ result }: CountingProps) {
  const { t } = useTranslation('Home')

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">{t('counting.title')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          icon={<FaTextWidth />}
          label={t('counting.length')}
          value={result?.counting.length}
        />

        <Card
          icon={<FaAlignJustify />}
          label={t('counting.numberOfWords')}
          value={result?.counting.numberOfWords}
        />

        <Card
          icon={<FaFont />}
          label={t('counting.numberOfLetters')}
          value={result?.counting.numberOfLetters}
        />

        <Card
          icon={<FaPlus />}
          label={t('counting.numberOfNumbers')}
          value={result?.counting.numberOfNumbers}
        />

        <Card
          icon={<FaGripLinesVertical />}
          label={t('counting.numberOfSpaces')}
          value={result?.counting.numberOfSpaces}
        />

        <Card
          icon={<FaAt />}
          label={t('counting.numberOfSpecialChars')}
          value={result?.counting.numberOfSpecialChars}
        />
      </div>
    </div>
  )
}
