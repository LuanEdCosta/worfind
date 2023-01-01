import { useTranslation } from 'react-i18next'
import { FaHandPointUp } from 'react-icons/fa'

import { Empty } from 'src/components/Empty'

export function HomeEmpty() {
  const { t } = useTranslation('Home')

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Empty icon={<FaHandPointUp />} message={t('empty.message')} />
    </div>
  )
}
