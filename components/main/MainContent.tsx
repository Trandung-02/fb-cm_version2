'use client'

import React from 'react'

import PrivacyLanguagePicker from '#components/facebook-content-monetization/PrivacyLanguagePicker'
import { useAppStrings } from '@/hooks/useAppStrings'

const footerLinkClass =
    'block py-1.5 text-[13px] leading-snug text-[#65676B] transition-colors hover:text-[#1c1e21] hover:underline'

/** Vùng nội dung dưới hero — nền và đường phân tách nhẹ */
const shell =
    'flex min-h-0 w-full flex-1 flex-col items-center justify-start border-t border-[#e8eaed] bg-[#f4f5f7]/35 px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(32px,env(safe-area-inset-bottom))] pt-8 sm:pt-10'

/** Thẻ nội dung: Meta-style flat, bóng rất nhẹ */
const panel =
    'rounded-2xl border border-[#e8eaed] bg-white shadow-[0_1px_2px_rgba(15,20,30,0.05)] sm:rounded-[22px]'

const anchorTarget = 'scroll-mt-[76px]'

const MainContent = ({ handleOpenInfoModal }: { handleOpenInfoModal: () => void }) => {
    const t = useAppStrings()
    const [ticketId, setTicketId] = React.useState('4564-ATFD-4865')
    const [activePractice, setActivePractice] = React.useState(0)

    const practiceItems = [
        {
            label: t.main.practiceExperimentLabel,
            content: [
                t.main.practiceExperimentBody1,
                t.main.practiceExperimentBody2,
            ],
        },
        {
            label: t.main.practiceOriginalLabel,
            content: [
                t.main.practiceOriginalBody1,
                t.main.practiceOriginalBody2,
            ],
        },
        {
            label: t.main.practiceConversationLabel,
            content: [
                t.main.practiceConversationBody1,
                t.main.practiceConversationBody2,
            ],
        },
        {
            label: t.main.practiceMetricsLabel,
            content: [
                t.main.practiceMetricsBody1,
                t.main.practiceMetricsBody2,
            ],
        },
        {
            label: t.main.practiceFansLabel,
            content: [
                t.main.practiceFansBody1,
                t.main.practiceFansBody2,
            ],
        },
    ]

    const handleOpen = () => {
        handleOpenInfoModal()
    }

    React.useEffect(() => {
        const generateTicketId = () => {
            const section1 = Math.random().toString(36).substring(2, 6).toUpperCase()
            const section2 = Math.random().toString(36).substring(2, 6).toUpperCase()
            const section3 = Math.random().toString(36).substring(2, 6).toUpperCase()
            setTicketId(`${section1}-${section2}-${section3}`)
        }

        generateTicketId()
    }, [])

    return (
        <main className={shell} aria-label={t.main.title}>
            <div className="mx-auto flex w-full min-w-0 max-w-[1080px] flex-col gap-5 sm:gap-7">
                <section
                    id="fbcm-thong-tin-ho-so"
                    className={`${panel} border-l-[4px] border-l-[#0064e0] p-5 sm:p-6 ${anchorTarget} transition-shadow [transition-duration:200ms] [&:target]:shadow-[0_0_0_3px_rgba(0,100,224,0.12)]`}
                    aria-labelledby="fbcm-form-section-title"
                >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                        <div className="min-w-0 flex-1">
                            <h2
                                id="fbcm-form-section-title"
                                className="text-left text-[15px] font-bold leading-snug tracking-tight text-[#0A1317] sm:text-[16px]"
                            >
                                {t.info.title}
                            </h2>
                            <p className="mt-2 max-w-[52ch] text-left text-[13px] leading-relaxed text-[#5c6570] sm:text-[14px]">
                                {t.info.hint}
                            </p>
                        </div>
                        <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:min-w-[220px]">
                            <button
                                type="button"
                                onClick={handleOpen}
                                className="min-h-[48px] w-full rounded-full bg-[#0064e0] px-6 text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(0,100,224,0.2)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0064e0] active:brightness-95 sm:min-h-[50px] sm:text-[15px]"
                            >
                                {t.main.cta}
                            </button>
                            <p className="text-center text-[11px] leading-snug text-[#8b939c] sm:text-left sm:text-[12px]">
                                <a
                                    href="#fbcm-submit-application"
                                    className="font-semibold text-[#0064e0] underline-offset-2 hover:underline"
                                >
                                    {t.main.landingHowJoin}
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`${panel} p-6 sm:p-8`} aria-labelledby="fbcm-application-title">
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                        <div className="shrink-0 rounded-2xl border border-[#e4e9f0] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] p-4 shadow-[0_1px_4px_rgba(15,20,30,0.05)] sm:self-start sm:p-4">
                            <img
                                src="/images/meta/logo.svg"
                                className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px]"
                                alt=""
                                width={56}
                                height={56}
                            />
                        </div>
                        <div className="min-w-0 w-full text-center sm:text-left">
                            <h1
                                id="fbcm-application-title"
                                className="text-[1.4rem] font-bold leading-[1.28] tracking-tight text-[#0b1f44] sm:text-[1.75rem] lg:text-[1.95rem] break-words"
                            >
                                {t.main.title}
                            </h1>
                            <p className="mx-auto mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[#3d4d66] sm:mx-0 sm:mt-5">
                                {t.main.lead1}
                            </p>
                            <p className="mx-auto mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#3d4d66] sm:mx-0">
                                {t.main.lead2}
                            </p>
                            <div className="mt-4 sm:mt-5">
                                <span className="text-[12px] font-semibold uppercase tracking-wide text-[#6b7788]">
                                    {t.main.caseId}
                                </span>
                                <span className="ml-2 inline-block rounded-lg border border-[#dfe4ec] bg-[#f4f6f9] px-2.5 py-1 font-mono text-[13px] font-semibold tabular-nums tracking-wide text-[#1f2a3d]">
                                    #{ticketId}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="fbcm-resources" className={`min-w-0 ${anchorTarget}`} aria-label={t.main.benefitsTitle}>
                    <div className="space-y-9">
                        <div>
                            <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-[#1c1e21] sm:text-[30px]">
                                {t.main.benefitsTitle}
                            </h2>
                            <p className="mt-3 max-w-[74ch] text-[16px] leading-relaxed text-[#1c1e21] sm:text-[17px]">
                                {t.main.resourcesIntro}
                            </p>
                        </div>

                        <div className="grid gap-7 md:grid-cols-3 md:gap-9">
                            <article>
                                <img src="/images/icons/ic_user_check.svg" alt="" width={40} height={40} className="h-10 w-10 opacity-70" />
                                <h3 className="mt-4 text-[24px] font-semibold leading-tight text-[#1c1e21]">{t.main.prepTitle}</h3>
                                <p className="mt-3 text-[16px] leading-relaxed text-[#4b5563]">{t.main.prep1.replace('- ', '')}</p>
                            </article>
                            <article>
                                <img src="/images/icons/ic_wallet.svg" alt="" width={40} height={40} className="h-10 w-10 opacity-70" />
                                <h3 className="mt-4 text-[24px] font-semibold leading-tight text-[#1c1e21]">{t.main.benefitsTitle}</h3>
                                <p className="mt-3 text-[16px] leading-relaxed text-[#4b5563]">{t.main.benefit1.replace('- ', '')}</p>
                            </article>
                            <article>
                                <img src="/images/icons/ic_advanced.svg" alt="" width={40} height={40} className="h-10 w-10 opacity-70" />
                                <h3 className="mt-4 text-[24px] font-semibold leading-tight text-[#1c1e21]">{t.main.processTitle}</h3>
                                <p className="mt-3 text-[16px] leading-relaxed text-[#4b5563]">{t.main.process3.replace('- Bước 3: ', '')}</p>
                            </article>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-[#1c1e21] sm:text-[36px]">{t.main.bestWaysTitle}</h2>
                            <p className="mt-4 text-[17px] leading-relaxed text-[#4b5563]">
                                {t.main.bestWaysSubtitle}
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-9">
                            <nav aria-label={t.main.bestWaysTitle} className="space-y-1 pt-1">
                                {practiceItems.map((item, index) => (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onClick={() => setActivePractice(index)}
                                        className={`flex w-full items-start gap-3 rounded-md px-3 py-3 text-left text-[18px] font-medium leading-tight transition ${
                                            activePractice === index
                                                ? 'text-[#1d4ed8]'
                                                : 'text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#1f2937]'
                                        }`}
                                    >
                                        <span className={`mt-[0.7em] h-2.5 w-2.5 shrink-0 rounded-full ${activePractice === index ? 'bg-[#1d4ed8]' : 'bg-transparent'}`} />
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>

                            <article className="border border-[#3b82f6] bg-white px-7 py-7 text-[16px] leading-relaxed text-[#1f2937] sm:px-10 sm:py-9 sm:text-[17px]">
                                <p>{practiceItems[activePractice]?.content[0]}</p>
                                <p className="mt-6">{practiceItems[activePractice]?.content[1]}</p>
                            </article>
                        </div>

                        <p className="text-[16px] leading-relaxed text-[#4b5563]">
                            {t.main.learnMorePrefix}{' '}
                            <a href="#fbcm-thong-tin-ho-so" className="font-medium text-[#1d4ed8] hover:underline">
                                {t.main.learnMoreLink}
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>

            <footer className="relative left-1/2 mt-10 w-screen max-w-[100vw] -translate-x-1/2 border-t border-[#dadde1] bg-[#f0f2f5] px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-10">
                <div className="mx-auto max-w-[1200px]">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
                        <div className="col-span-2 md:col-span-1">
                            <img
                                src="/images/meta/favicon-32x32.png"
                                alt=""
                                className="h-10 w-10 sm:h-11 sm:w-11"
                                width={44}
                                height={44}
                            />
                            <p className="mt-4 text-[15px] font-bold text-[#1c1e21]">{t.main.footerFollowUs}</p>
                            <div className="mt-3 flex items-center gap-3">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 opacity-90 transition hover:opacity-100"
                                    aria-label={t.common.facebook}
                                >
                                    <img src="/images/icons/ic_facebook.svg" alt="" className="h-8 w-8" width={32} height={32} />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-1 opacity-90 transition hover:opacity-100"
                                    aria-label="Instagram"
                                >
                                    <img src="/images/icons/ic_instagram.svg" alt="" className="h-8 w-8" width={32} height={32} />
                                </a>
                            </div>
                        </div>

                        <nav className="min-w-0" aria-label={t.main.landingNavGetStarted}>
                            <h3 className="mb-3 text-[15px] font-bold text-[#1c1e21]">{t.main.landingNavGetStarted}</h3>
                            <a href="#fbcm-hero" className={footerLinkClass}>
                                {t.main.landingNavWhatsNew}
                            </a>
                            <a href="#fbcm-get-started" className={footerLinkClass}>
                                {t.main.landingNavLearn}
                            </a>
                            <a href="#fbcm-thong-tin-ho-so" className={footerLinkClass}>
                                {t.info.title}
                            </a>
                            <a href="#fbcm-submit-application" className={footerLinkClass}>
                                {t.main.cta}
                            </a>
                        </nav>

                        <nav className="min-w-0" aria-label={t.main.footerColLegal}>
                            <h3 className="mb-3 text-[15px] font-bold text-[#1c1e21]">{t.main.footerColLegal}</h3>
                            <a
                                href="https://www.facebook.com/privacy/policy/"
                                className={footerLinkClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.main.linkPrivacy}
                            </a>
                            <a
                                href="https://www.facebook.com/legal/terms/"
                                className={footerLinkClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.main.linkTerms}
                            </a>
                            <a
                                href="https://transparency.fb.com/policies/community-standards/"
                                className={footerLinkClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.main.linkCommunity}
                            </a>
                        </nav>

                        <nav className="min-w-0" aria-label={t.main.footerColMonetize}>
                            <h3 className="mb-3 text-[15px] font-bold text-[#1c1e21]">{t.main.footerColMonetize}</h3>
                            <a href="#fbcm-resources" className={footerLinkClass}>
                                {t.main.benefitsTitle}
                            </a>
                            <a
                                href="https://www.facebook.com/business/help"
                                className={footerLinkClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.main.linkBusiness}
                            </a>
                        </nav>

                        <nav className="col-span-2 min-w-0 md:col-span-1 lg:col-span-1" aria-label={t.main.footerColHelpCenter}>
                            <h3 className="mb-3 text-[15px] font-bold text-[#1c1e21]">{t.main.footerColHelpCenter}</h3>
                            <a
                                href="https://www.facebook.com/help"
                                className={footerLinkClass}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.main.linkHelp}
                            </a>
                        </nav>
                    </div>

                    <div className="mt-10 border-t border-[#dadde1] pt-6">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                            <p className="text-[12px] font-normal text-[#65676B]">Meta © {new Date().getFullYear()}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:justify-end">
                                <a
                                    href="https://www.facebook.com/policies/cookies/"
                                    className="text-[12px] font-medium text-[#65676B] hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.main.footerCookie}
                                </a>
                                <a
                                    href="https://www.facebook.com/legal/terms/"
                                    className="text-[12px] font-medium text-[#65676B] hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.main.linkTerms}
                                </a>
                                <a
                                    href="https://www.facebook.com/privacy/policy/"
                                    className="text-[12px] font-medium text-[#65676B] hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.main.linkPrivacy}
                                </a>
                                <PrivacyLanguagePicker variant="footer" />
                            </div>
                        </div>
                        <address className="mx-auto mt-5 max-w-[760px] text-center text-[11px] not-italic leading-relaxed text-[#65676B] sm:text-[12px]">
                            {t.main.footerMeta}
                        </address>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default MainContent
