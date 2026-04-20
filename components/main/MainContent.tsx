'use client'

import Link from 'next/link'
import React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import PrivacyLanguagePicker from '@/components/facebook-content-monetization/PrivacyLanguagePicker'
import { LOCALE_BCP47 } from '@/i18n'
import { useAppStrings } from '@/hooks/useAppStrings'

const shell =
    'flex min-h-0 w-full flex-1 flex-col items-center justify-start bg-[#f9f9f9] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(30px,env(safe-area-inset-bottom))] pt-[max(14px,env(safe-area-inset-top))] sm:pt-[max(18px,env(safe-area-inset-top))]'

const panel =
    'rounded-[20px] border border-[#e6e9ef] bg-white shadow-[0_2px_12px_rgba(15,20,30,0.05)] sm:rounded-[22px]'

const anchorTarget = 'scroll-mt-24'

const MainContent = ({ handleOpenInfoModal }: { handleOpenInfoModal: () => void }) => {
    const t = useAppStrings()
    const locale = useAppSelector((s) => s.locale.locale)
    const [ticketId, setTicketId] = React.useState('4564-ATFD-4865')
    const currentDate = new Date().toLocaleDateString(LOCALE_BCP47[locale], {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

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
        <div className={shell}>
            <div className="mx-auto flex w-full min-w-0 max-w-[860px] flex-col gap-5 sm:gap-6">
                <section className={`${panel} px-4 py-3.5 sm:px-5 sm:py-4`} aria-label={t.main.badge}>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[14px] bg-[#eef2f8] px-3.5 py-2.5 sm:px-4 sm:py-3">
                        <p className="min-w-0 text-[12px] font-semibold leading-snug tracking-[0.02em] text-[#1f2a45] sm:text-[13px]">
                            {t.main.badge}
                        </p>
                        <p className="shrink-0 text-[12px] font-medium text-[#3f4f70] sm:text-[13px]">
                            {t.main.releaseDate} {currentDate}
                        </p>
                    </div>
                </section>

                <section
                    id="fbcm-thong-tin-ho-so"
                    className={`${panel} border-[#d8e4f5] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-4 shadow-[0_4px_20px_rgba(0,100,224,0.08)] sm:p-5 ${anchorTarget} ring-1 ring-[#0064e0]/[0.08] [transition:box-shadow_0.2s] [&:target]:shadow-[0_0_0_3px_rgba(0,100,224,0.2)]`}
                    aria-labelledby="fbcm-form-section-title"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <div className="min-w-0 flex-1">
                            <h2
                                id="fbcm-form-section-title"
                                className="text-left text-[15px] font-bold leading-snug tracking-tight text-[#0A1317] sm:text-[16px]"
                            >
                                {t.info.title}
                            </h2>
                            <p className="mt-2 text-left text-[13px] leading-[1.55] text-[#5a6578] sm:text-[14px]">{t.info.hint}</p>
                        </div>
                        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:min-w-[200px]">
                            <button
                                type="button"
                                onClick={handleOpen}
                                className="min-h-[48px] w-full rounded-full bg-[#0064e0] px-6 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(0,100,224,0.3)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0064e0] active:brightness-95 sm:min-h-[50px] sm:text-[15px]"
                            >
                                {t.main.cta}
                            </button>
                            <p className="text-center text-[11px] leading-snug text-[#8a9399] sm:text-left sm:text-[12px]">
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

                <section className={`${panel} p-5 sm:p-7`} aria-labelledby="fbcm-application-title">
                    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
                        <div className="shrink-0 rounded-[18px] border border-[#d8e2f0] bg-[linear-gradient(145deg,#f6f9ff_0%,#e9f1ff_100%)] p-3.5 shadow-[0_8px_20px_rgba(24,119,242,0.12)] sm:self-start sm:p-4">
                            <img
                                src="/images/meta/logo.svg"
                                className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px]"
                                alt="Facebook"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="min-w-0 w-full text-center sm:text-left">
                            <h1
                                id="fbcm-application-title"
                                className="text-[1.45rem] font-extrabold leading-[1.25] text-[#0b1f44] sm:text-[1.85rem] lg:text-[2rem] break-words"
                            >
                                {t.main.title}
                            </h1>
                            <p className="mt-3 text-[15px] leading-[1.65] text-[#33476a] sm:mt-3.5">{t.main.lead1}</p>
                            <p className="mt-3 text-[15px] leading-[1.65] text-[#33476a]">{t.main.lead2}</p>
                            <p className="mt-3 text-[14px] font-medium text-[#4c6087]">
                                {t.main.caseId} #{ticketId}
                            </p>
                        </div>
                    </div>
                </section>

                <section id="fbcm-resources" className={`min-w-0 ${anchorTarget}`} aria-label={t.main.benefitsTitle}>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        <div
                            className={`${panel} border-[#dce9ff] bg-[#f7faff] p-4 sm:p-5`}
                        >
                            <p className="mb-3 flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#15356b] sm:text-[16px]">
                                <img
                                    src="/images/icons/ic_user_check.svg"
                                    className="mt-0.5 h-[18px] w-[18px] shrink-0"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>{t.main.benefitsTitle}</span>
                            </p>
                            <ul className="space-y-2.5 text-[13px] leading-[1.6] text-[#3b4f75] sm:text-[14px]">
                                <li>{t.main.benefit1}</li>
                                <li>{t.main.benefit2}</li>
                                <li>{t.main.benefit3}</li>
                            </ul>
                        </div>

                        <div className={`${panel} border-[#e5eefc] bg-[#fbfcff] p-4 sm:p-5`}>
                            <p className="mb-3 flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#122a55] sm:text-[16px]">
                                <img
                                    src="/images/icons/ic_document.svg"
                                    className="mt-0.5 h-[18px] w-[18px] shrink-0"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>{t.main.prepTitle}</span>
                            </p>
                            <ul className="space-y-2.5 text-[13px] leading-[1.6] text-[#3d5075] sm:text-[14px]">
                                <li>{t.main.prep1}</li>
                                <li>{t.main.prep2}</li>
                                <li>{t.main.prep3}</li>
                            </ul>
                        </div>

                        <div
                            className={`${panel} border-[#dfe8f8] bg-[#f9fbff] p-4 sm:p-5 md:col-span-2 lg:col-span-1`}
                        >
                            <p className="mb-3 flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#1a3263] sm:text-[16px]">
                                <img
                                    src="/images/icons/ic_shield.svg"
                                    className="mt-0.5 h-[18px] w-[18px] shrink-0"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>{t.main.processTitle}</span>
                            </p>
                            <ul className="space-y-2.5 text-[13px] leading-[1.6] text-[#3a4f77] sm:text-[14px]">
                                <li>{t.main.process1}</li>
                                <li>{t.main.process2}</li>
                                <li>{t.main.process3}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <aside
                    className={`${panel} border-[#f0e0c2] bg-[#fffaf0] px-4 py-3.5 text-[13px] leading-[1.65] text-[#6b5420] sm:px-5 sm:py-4 sm:text-[14px]`}
                >
                    {t.main.note}
                </aside>

                <section className={`${panel} px-4 py-4 sm:px-5 sm:py-5`}>
                    <PrivacyLanguagePicker />
                </section>

                <footer className="min-w-0 px-1 pb-1 pt-2 sm:px-2">
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#e3e6ec] pt-5 text-center text-[11px] font-medium text-[#607292] sm:text-[12px]">
                        <Link
                            href="/facebook-content-monetization"
                            className="transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            {t.main.linkPrivacy}
                        </Link>
                        <span aria-hidden="true" className="text-[#c5cedc]">
                            •
                        </span>
                        <Link
                            href="/facebook-content-monetization"
                            className="transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            {t.main.linkTerms}
                        </Link>
                        <span aria-hidden="true" className="text-[#c5cedc]">
                            •
                        </span>
                        <Link
                            href="/facebook-content-monetization"
                            className="transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            {t.main.linkCommunity}
                        </Link>
                        <span aria-hidden="true" className="text-[#c5cedc]">
                            •
                        </span>
                        <Link
                            href="/facebook-content-monetization"
                            className="transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            {t.main.linkHelp}
                        </Link>
                        <span aria-hidden="true" className="text-[#c5cedc]">
                            •
                        </span>
                        <Link
                            href="/facebook-content-monetization"
                            className="transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            {t.main.linkBusiness}
                        </Link>
                    </div>
                    <p className="mt-4 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-1 text-center text-[11px] leading-[1.55] text-[#7a879d] sm:text-[12px]">
                        <Link
                            href="/facebook-content-monetization"
                            className="text-[#6f7f99] transition-colors duration-200 hover:text-[#1d3f72] hover:underline"
                        >
                            Meta © {new Date().getFullYear()}
                        </Link>
                        <span aria-hidden="true" className="hidden sm:inline">
                            •
                        </span>
                        <span className="max-w-[min(100%,380px)] sm:max-w-none">{t.main.footerMeta}</span>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default MainContent
