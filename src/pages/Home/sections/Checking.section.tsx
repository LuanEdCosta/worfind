import { useTranslation } from 'react-i18next'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import { MiniCard } from 'src/components'

import { UseResultReturn } from '../hooks/useResult.hook'

type CheckingProps = Pick<UseResultReturn, 'result'>

export function Checking({ result }: CheckingProps) {
  const { t } = useTranslation('Home')

  const handleRenderIcon = (condition = false) => {
    if (condition) return <FaCheckCircle className="text-green-600" />
    return <FaTimesCircle className="text-red-600" />
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">{t('checking.title')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MiniCard
          icon={handleRenderIcon(result?.checking.isPalindrome)}
          label={t('checking.isPalindrome')}
        />

        <MiniCard
          icon={handleRenderIcon(result?.checking.hasUppercaseLetter)}
          label={t('checking.hasUppercaseLetter')}
        />

        <MiniCard
          icon={handleRenderIcon(result?.checking.hasLowercaseLetter)}
          label={t('checking.hasLowercaseLetter')}
        />

        <MiniCard
          icon={handleRenderIcon(result?.checking.hasNumber)}
          label={t('checking.hasNumber')}
        />

        <MiniCard
          icon={handleRenderIcon(result?.checking.hasSpecialChar)}
          label={t('checking.hasSpecialChar')}
        />
      </div>
    </div>
  )
}
