'use client'

import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { setLocale } from '@/app/store/slices/localeSlice'
import { LOCALE_BCP47 } from '@/i18n'
import { APP_LOCALES, type AppLocale } from '@/i18n/schema'
import { LOCALE_OPTION_LABELS } from '@/i18n/localeOptionLabels'
import { useAppStrings } from '@/hooks/useAppStrings'
import { readSessionDisplayLocale, writeSessionDisplayLocale } from '@/utils/facebookContentMonetizationDisplayLocale'

function applyDocumentLang(locale: AppLocale) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = LOCALE_BCP47[locale]
    document.documentElement.dataset.locale = locale
  }
}

const selectBase =
  'block w-full cursor-pointer border bg-white font-medium leading-tight text-[#1f2a45] outline-none transition duration-150 hover:border-[#1877f2] focus-visible:ring-2 focus-visible:ring-[#1877f2]/30'

export default function PrivacyLanguagePicker({
  variant = 'default',
}: {
  variant?: 'default' | 'header' | 'footer'
}) {
  const t = useAppStrings()
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector((s) => s.locale.locale)

  const [pickerValue, setPickerValue] = React.useState<AppLocale>(currentLocale)

  React.useEffect(() => {
    const sessionLocale = readSessionDisplayLocale()
    if (sessionLocale) {
      setPickerValue(sessionLocale)
      return
    }
    setPickerValue(currentLocale)
  }, [currentLocale])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value as AppLocale
    writeSessionDisplayLocale(locale)
    setPickerValue(locale)
    dispatch(setLocale(locale))
    applyDocumentLang(locale)
  }

  const isHeader = variant === 'header'
  const isFooter = variant === 'footer'
  const selectClass = isFooter
    ? `${selectBase} min-h-[36px] min-w-[160px] max-w-[220px] rounded-md border-[#CCD0D5] px-3 py-2 text-[12px] shadow-sm sm:text-[13px]`
    : isHeader
      ? `${selectBase} min-h-[32px] rounded-[8px] border-[#c5cad3] px-2 py-1 text-[10px] shadow-sm sm:min-h-[34px] sm:px-2.5 sm:text-[11px] md:text-[12px]`
      : `${selectBase} min-h-[34px] rounded-[10px] border-[#dbe9ff] px-[10px] py-[5px] text-[11px] shadow-sm sm:min-h-[36px] sm:px-[11px] sm:text-[12px]`

  return (
    <div className={isHeader || isFooter ? 'w-auto min-w-0' : 'mx-auto w-full'}>
      <div
        className={
          isFooter
            ? 'w-auto'
            : isHeader
              ? 'w-full min-w-[140px] max-w-[220px] sm:min-w-[160px]'
              : 'mx-auto w-full max-w-[220px] min-w-0 sm:max-w-[240px]'
        }
      >
        <select
          id="facebook-content-monetization-display-lang"
          value={pickerValue}
          onChange={handleChange}
          className={selectClass}
          aria-label={t.languagePicker.label}
        >
          {APP_LOCALES.map((code) => (
            <option key={code} value={code}>
              {LOCALE_OPTION_LABELS[code]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
