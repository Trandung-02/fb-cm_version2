'use client'

import React from 'react'

export type FakeRecaptchaWidgetTexts = {
  notRobot: string
  privacyTerms: string
  a11yVerifying: string
  a11yVerified: string
}

type FakeRecaptchaWidgetProps = {
  texts: FakeRecaptchaWidgetTexts
  /** Sau khi tick xanh xong và chờ một nhịp, gọi callback (vd. sang bước tiếp theo). */
  onVerified: () => void
  /** Thời gian hiển thị tick trước khi gọi onVerified (ms). */
  dwellAfterVerifiedMs?: number
  /** Thời gian chờ kiểu “đang xác minh” (ms). */
  verifyingDurationMs?: number
  /** prefix id cho input (nhiều instance trên cùng trang). */
  idPrefix?: string
}

/** Ô kiểm phong cách reCAPTCHA (mô phỏng)—dùng chung modal hồ sơ và trang /[slug]. */
export default function FakeRecaptchaWidget({
  texts,
  onVerified,
  dwellAfterVerifiedMs = 550,
  verifyingDurationMs = 1650,
  idPrefix = 'recaptcha',
}: FakeRecaptchaWidgetProps) {
  const uid = React.useId().replace(/:/g, '')
  const inputId = `${idPrefix}-${uid}`
  const [isLoading, setIsLoading] = React.useState(false)
  const [isVerified, setIsVerified] = React.useState(false)
  const verifyTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const dwellTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const onVerifiedRef = React.useRef(onVerified)
  onVerifiedRef.current = onVerified

  React.useEffect(() => {
    return () => {
      if (verifyTimerRef.current) clearTimeout(verifyTimerRef.current)
      if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current)
    }
  }, [])

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked || isLoading || isVerified) return

    setIsLoading(true)
    if (verifyTimerRef.current) clearTimeout(verifyTimerRef.current)
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current)

    verifyTimerRef.current = setTimeout(() => {
      verifyTimerRef.current = null
      setIsLoading(false)
      setIsVerified(true)

      dwellTimerRef.current = setTimeout(() => {
        dwellTimerRef.current = null
        onVerifiedRef.current()
      }, dwellAfterVerifiedMs)
    }, verifyingDurationMs)
  }

  const statusId = `${inputId}-live`

  return (
    <div className="flex w-full flex-col items-stretch justify-start bg-cover bg-center py-1 font-helvetica">
      {(isLoading || isVerified) && (
        <p id={statusId} role="status" aria-live="polite" className="sr-only">
          {isLoading ? texts.a11yVerifying : texts.a11yVerified}
        </p>
      )}
      <div
        className="flex w-full flex-row items-center justify-between rounded-md border-2 border-[#eaeaea] bg-[#f9f9f9] pr-2 text-[#4c4a4b]"
        aria-busy={isLoading}
      >
        <div className="ml-[1rem] flex flex-row items-center justify-start">
          <div
            className="relative flex h-[30px] w-[30px] items-center justify-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <label
              className={`recaptcha-check ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
              htmlFor={inputId}
            >
              <input
                type="checkbox"
                checked={isVerified}
                id={inputId}
                onChange={handleCheckboxChange}
                aria-label={texts.notRobot}
                aria-describedby={isLoading || isVerified ? statusId : undefined}
                disabled={isLoading || isVerified}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`recaptcha-icon ${isLoading ? 'is-loading' : ''} ${isVerified ? 'is-verified' : ''}`}
              >
                {isLoading && (
                  <>
                    <span className="recaptcha-spinner-track" />
                    <span className="recaptcha-spinner-segment" />
                  </>
                )}
                {isVerified && (
                  <svg viewBox="0 0 24 24" className="recaptcha-checkmark">
                    <path d="M4.5 12.5L9.2 17.1L20 6.3" />
                  </svg>
                )}
              </span>
            </label>
          </div>
          <label htmlFor={inputId} className="ml-1 mr-4 cursor-pointer text-left text-[14px] font-semibold tracking-normal text-gray-500">
            {texts.notRobot}
          </label>
        </div>
        <div className="mb-[2px] flex flex-col items-center text-[#9d9ba7]">
          <img src="/images/meta/recaptcha.png" alt="" className="mt-[0.5rem] h-[40px] w-[40px]" width={40} height={40} />
          <span className="text-[10px] font-bold">reCAPTCHA</span>
          <div className="text-[8px]">{texts.privacyTerms}</div>
        </div>
      </div>
    </div>
  )
}
