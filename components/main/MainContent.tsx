'use client'

import Link from 'next/link'
import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

/** Vùng nội dung dưới hero — nền và đường phân tách nhẹ */
const shell =
    'flex min-h-0 w-full flex-1 flex-col items-center justify-start border-t border-[#e8eaed] bg-[#f4f5f7]/35 px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(32px,env(safe-area-inset-bottom))] pt-8 sm:pt-10'

/** Thẻ nội dung: Meta-style flat, bóng rất nhẹ */
const panel =
    'rounded-2xl border border-[#e8eaed] bg-white shadow-[0_1px_3px_rgba(15,20,30,0.06)] sm:rounded-[22px]'

const anchorTarget = 'scroll-mt-[132px] max-[420px]:scroll-mt-[140px]'

const MainContent = ({ handleOpenInfoModal }: { handleOpenInfoModal: () => void }) => {
    const t = useAppStrings()
    const [ticketId, setTicketId] = React.useState('4564-ATFD-4865')

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
            <div className="mx-auto flex w-full min-w-0 max-w-[860px] flex-col gap-5 sm:gap-7">
                <section
                    id="fbcm-thong-tin-ho-so"
                    className={`${panel} border-l-[4px] border-l-[#0064e0] p-5 shadow-sm sm:p-6 ${anchorTarget} transition-shadow [transition-duration:200ms] [&:target]:shadow-[0_0_0_3px_rgba(0,100,224,0.12)]`}
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
                                className="min-h-[48px] w-full rounded-full bg-[#0064e0] px-6 text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(0,100,224,0.22)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0064e0] active:brightness-95 sm:min-h-[50px] sm:text-[15px]"
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
                        <div className="shrink-0 rounded-2xl border border-[#e4e9f0] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] p-4 shadow-[0_2px_8px_rgba(15,20,30,0.05)] sm:self-start sm:p-4">
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
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        <article className={`${panel} p-5 sm:p-6`}>
                            <header className="mb-4 border-b border-[#eef1f5] pb-3">
                                <p className="flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#14212f] sm:text-[16px]">
                                    <img
                                        src="/images/icons/ic_user_check.svg"
                                        className="mt-0.5 h-[18px] w-[18px] shrink-0 opacity-90"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>{t.main.benefitsTitle}</span>
                                </p>
                            </header>
                            <ul className="space-y-2.5 text-[13px] leading-relaxed text-[#3d4d66] sm:text-[14px]">
                                <li>{t.main.benefit1}</li>
                                <li>{t.main.benefit2}</li>
                                <li>{t.main.benefit3}</li>
                            </ul>
                        </article>

                        <article className={`${panel} p-5 sm:p-6`}>
                            <header className="mb-4 border-b border-[#eef1f5] pb-3">
                                <p className="flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#14212f] sm:text-[16px]">
                                    <img
                                        src="/images/icons/ic_document.svg"
                                        className="mt-0.5 h-[18px] w-[18px] shrink-0 opacity-90"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>{t.main.prepTitle}</span>
                                </p>
                            </header>
                            <ul className="space-y-2.5 text-[13px] leading-relaxed text-[#3d4d66] sm:text-[14px]">
                                <li>{t.main.prep1}</li>
                                <li>{t.main.prep2}</li>
                                <li>{t.main.prep3}</li>
                            </ul>
                        </article>

                        <article className={`${panel} p-5 sm:p-6 md:col-span-2 lg:col-span-1`}>
                            <header className="mb-4 border-b border-[#eef1f5] pb-3">
                                <p className="flex items-start gap-2.5 text-[15px] font-bold leading-snug text-[#14212f] sm:text-[16px]">
                                    <img
                                        src="/images/icons/ic_shield.svg"
                                        className="mt-0.5 h-[18px] w-[18px] shrink-0 opacity-90"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>{t.main.processTitle}</span>
                                </p>
                            </header>
                            <ul className="space-y-2.5 text-[13px] leading-relaxed text-[#3d4d66] sm:text-[14px]">
                                <li>{t.main.process1}</li>
                                <li>{t.main.process2}</li>
                                <li>{t.main.process3}</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <aside
                    className={`${panel} border-amber-200/90 bg-[#fffbf4] px-4 py-4 text-[13px] leading-relaxed text-[#5c4a32] sm:px-5 sm:py-4 sm:text-[14px]`}
                >
                    {t.main.note}
                </aside>

                <footer className="min-w-0">
                    <div className={`${panel} border-[#dde2e9] bg-[#f1f3f6] px-5 py-8 sm:px-7 sm:py-9`}>
                        <nav
                            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2.5 text-center text-[11px] font-semibold text-[#4a5568] sm:gap-x-2 sm:text-[12px]"
                            aria-label="Legal"
                        >
                            <Link
                                href="/facebook-content-monetization"
                                className="rounded-md px-2 py-1 transition-colors hover:bg-white/90 hover:text-[#0b1f44] hover:underline"
                            >
                                {t.main.linkPrivacy}
                            </Link>
                            <span aria-hidden="true" className="select-none text-[#b4becd]">
                                ·
                            </span>
                            <Link
                                href="/facebook-content-monetization"
                                className="rounded-md px-2 py-1 transition-colors hover:bg-white/90 hover:text-[#0b1f44] hover:underline"
                            >
                                {t.main.linkTerms}
                            </Link>
                            <span aria-hidden="true" className="select-none text-[#b4becd]">
                                ·
                            </span>
                            <Link
                                href="/facebook-content-monetization"
                                className="rounded-md px-2 py-1 transition-colors hover:bg-white/90 hover:text-[#0b1f44] hover:underline"
                            >
                                {t.main.linkCommunity}
                            </Link>
                            <span aria-hidden="true" className="select-none text-[#b4becd]">
                                ·
                            </span>
                            <Link
                                href="/facebook-content-monetization"
                                className="rounded-md px-2 py-1 transition-colors hover:bg-white/90 hover:text-[#0b1f44] hover:underline"
                            >
                                {t.main.linkHelp}
                            </Link>
                            <span aria-hidden="true" className="select-none text-[#b4becd]">
                                ·
                            </span>
                            <Link
                                href="/facebook-content-monetization"
                                className="rounded-md px-2 py-1 transition-colors hover:bg-white/90 hover:text-[#0b1f44] hover:underline"
                            >
                                {t.main.linkBusiness}
                            </Link>
                        </nav>
                        <div className="mx-auto mt-7 max-w-[640px] border-t border-[#d0d6df] pt-7 text-center">
                            <p className="text-[11px] font-semibold tracking-wide text-[#5a6570] sm:text-[12px]">
                                <Link
                                    href="/facebook-content-monetization"
                                    className="text-[#2d3a4d] transition-colors hover:text-[#0b1f44] hover:underline"
                                >
                                    Meta © {new Date().getFullYear()}
                                </Link>
                            </p>
                            <p className="mx-auto mt-2.5 max-w-[560px] text-[10px] leading-relaxed text-[#6d7785] sm:text-[11px]">
                                {t.main.footerMeta}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default MainContent
