'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import { FBC_LANDING_MEDIA } from '#data/fbcLandingMedia'
import { LOCALE_BCP47 } from '@/i18n'
import { useAppStrings } from '@/hooks/useAppStrings'

const FB_BLUE = '#0064e0'
/** Header 1 hàng cố định (đồng bộ scroll-mt nội dung) */
const HEADER_OFFSET_PT = 'pt-[64px]'
const SCROLL_MT = 'scroll-mt-[76px]'

const navLinkClass =
    'inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[13px] font-medium text-[#1c1e21] transition-colors hover:bg-[#f0f2f5] hover:text-[#0064e0] sm:text-[14px]'

type FbcMarketingLandingProps = {
    onSubmitApplication: () => void
    children: React.ReactNode
}

function ChevronDown({ className }: { className?: string }) {
    return (
        <svg className={className} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path fill="currentColor" d="M5 6.5 1.2 2.7l.6-.6L5 5.3l3.2-3.2.6.6L5 6.5Z" />
        </svg>
    )
}

export default function FbcMarketingLanding({ onSubmitApplication, children }: FbcMarketingLandingProps) {
    const t = useAppStrings()
    const locale = useAppSelector((s) => s.locale.locale)
    const currentDate = React.useMemo(
        () =>
            new Date().toLocaleDateString(LOCALE_BCP47[locale], {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }),
        [locale]
    )
    const dateIso = React.useMemo(() => new Date().toISOString().slice(0, 10), [])

    const scrollToApply = () => {
        document.getElementById('fbcm-submit-application')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="min-h-[100dvh] scroll-smooth bg-[#f6f7f9] text-[#1c1e21] antialiased">
            <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dfe3e8] bg-white shadow-[0_1px_2px_rgba(15,20,30,0.05)]">
                <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
                    <Link
                        href="/facebook-content-monetization#fbcm-hero"
                        className="flex shrink-0 items-center rounded-md p-1 transition hover:bg-[#f0f2f5]"
                        aria-label="Facebook"
                    >
                        <Image src="/images/meta/logo.svg" alt="" className="h-9 w-9 sm:h-10 sm:w-10" width={40} height={40} />
                    </Link>

                    <nav className="mx-auto hidden max-w-[min(100%,720px)] flex-1 items-center justify-center gap-0.5 md:flex md:gap-1" aria-label="Primary">
                        <a href="#fbcm-hero" className={navLinkClass}>
                            {t.main.landingNavWhatsNew}
                        </a>
                        <a href="#fbcm-thong-tin-ho-so" className={navLinkClass}>
                            {t.main.landingNavGetStarted}
                            <ChevronDown className="mt-0.5 shrink-0 opacity-55" />
                        </a>
                        <a href="#fbcm-get-started" className={navLinkClass}>
                            {t.main.landingNavLearn}
                            <ChevronDown className="mt-0.5 shrink-0 opacity-55" />
                        </a>
                        <a href="#fbcm-resources" className={navLinkClass}>
                            {t.main.landingNavCreators}
                        </a>
                    </nav>

                    <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
                        <time
                            dateTime={dateIso}
                            className="mr-1 hidden shrink-0 whitespace-nowrap text-[11px] leading-none text-[#606770] lg:block"
                        >
                            <span className="text-[#6b7280]">{t.main.releaseDate}</span>{' '}
                            <span className="font-semibold tabular-nums text-[#111827]">{currentDate}</span>
                        </time>
                        <a
                            href="#fbcm-thong-tin-ho-so"
                            className="rounded-full p-2.5 text-[#0A1317] opacity-85 transition hover:bg-[#f0f2f5] hover:opacity-100"
                            aria-label={t.info.title}
                        >
                            <Image src="/images/icons/ic_search.svg" alt="" className="h-[22px] w-[22px]" width={22} height={22} />
                        </a>
                        <a
                            href="#fbcm-resources"
                            className="hidden rounded-full p-2.5 text-[#0A1317] opacity-85 transition hover:bg-[#f0f2f5] hover:opacity-100 sm:inline-flex"
                            aria-label={t.main.benefitsTitle}
                        >
                            <Image src="/images/icons/ic_locked.svg" alt="" className="h-[22px] w-[22px]" width={22} height={22} />
                        </a>
                        <a
                            href="#fbcm-thong-tin-ho-so"
                            className="ml-1 inline-flex items-center rounded-full border border-[#ccd0d5] bg-white px-4 py-2 text-[13px] font-semibold text-[#1c1e21] transition hover:border-[#bcc0c4] hover:bg-[#fafbfc] sm:px-5 sm:text-[14px]"
                        >
                            {t.main.landingLogIn}
                        </a>
                    </div>
                </div>
            </header>

            <div className={HEADER_OFFSET_PT}>
                <section
                    id="fbcm-hero"
                    className={`border-b border-[#e8eaed] bg-[linear-gradient(180deg,#ffffff_0%,#f6f7f9_100%)] ${SCROLL_MT}`}
                >
                    <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
                        <div className="order-2 min-w-0 lg:order-1">
                            <div className="inline-block">
                                <p className="text-[12px] font-semibold tracking-[0.14em] text-[#8a8d91]">{t.main.landingKicker}</p>
                                <div className="mt-1 h-0.5 w-8 rounded-full" style={{ backgroundColor: FB_BLUE }} />
                            </div>
                            <h1
                                className="mt-5 text-[1.85rem] font-bold leading-[1.12] tracking-tight sm:text-[2.25rem] lg:text-[2.65rem]"
                                style={{ color: FB_BLUE }}
                            >
                                {t.main.landingHeadline}
                            </h1>
                            <p className="mt-4 max-w-[32rem] text-[16px] leading-relaxed text-[#3d4d66] sm:text-[17px]">
                                {t.main.landingSubhead}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={onSubmitApplication}
                                    className="min-h-[50px] rounded-full px-10 py-3 text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(0,100,224,0.24)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:brightness-95 sm:min-h-[52px] sm:px-11 sm:text-[16px]"
                                    style={{ backgroundColor: FB_BLUE, outlineColor: FB_BLUE }}
                                >
                                    {t.main.cta}
                                </button>
                                <button
                                    type="button"
                                    onClick={scrollToApply}
                                    className="inline-flex items-center gap-2 text-[15px] font-semibold transition hover:opacity-80"
                                    style={{ color: FB_BLUE }}
                                >
                                    <span className="border-b border-current pb-px">{t.main.landingHowJoin}</span>
                                    <span
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-white shadow-[0_4px_10px_rgba(0,100,224,0.2)]"
                                        style={{ backgroundColor: FB_BLUE }}
                                        aria-hidden="true"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 10 3 6h8L7 10Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="relative order-1 mx-auto aspect-[4/3] w-full max-w-[520px] lg:order-2 lg:max-w-[600px]">
                            <Image
                                src={FBC_LANDING_MEDIA.heroCollage}
                                alt=""
                                fill
                                className="object-contain object-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
                                sizes="(max-width: 1024px) 92vw, 600px"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </section>

                <section
                    className="border-b border-[#e8eaed] bg-white py-10 sm:py-12"
                    aria-labelledby="fbcm-video-caption"
                >
                    <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">
                        <p
                            id="fbcm-video-caption"
                            className="mx-auto mb-5 max-w-[40rem] text-center text-[14px] font-semibold leading-snug text-[#374151] sm:mb-6 sm:text-[15px]"
                        >
                            {t.main.landingVideoCaption}
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-[#0a0a0a] shadow-[0_8px_24px_rgba(15,20,30,0.10)] ring-1 ring-black/[0.04]">
                            <video
                                className="aspect-video w-full max-h-[min(72vh,520px)] bg-black object-contain"
                                controls
                                playsInline
                                preload="metadata"
                                poster={FBC_LANDING_MEDIA.getStartedStill}
                            >
                                <source src={FBC_LANDING_MEDIA.creatorOverviewVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <section
                    id="fbcm-submit-application"
                    className={`border-b border-[#e8eaed] bg-[#eef0f4] py-14 sm:py-16 lg:py-20 ${SCROLL_MT}`}
                    aria-labelledby="fbcm-cta-heading"
                >
                    <div className="mx-auto max-w-[640px] px-4 text-center sm:px-6">
                        <p
                            id="fbcm-cta-heading"
                            className="mx-auto max-w-[36rem] text-[15px] leading-relaxed text-[#4b5568] sm:text-[16px]"
                        >
                            {t.main.landingCtaIntro}
                        </p>
                        <a
                            href="#fbcm-thong-tin-ho-so"
                            className="mx-auto mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#0064e0] px-7 text-[14px] font-semibold text-[#0064e0] transition hover:bg-[#0064e0]/[0.06]"
                        >
                            {t.info.title}
                        </a>
                    </div>
                </section>

                <section id="fbcm-get-started" className={`border-b border-[#e8eaed] bg-white ${SCROLL_MT}`}>
                    <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
                        <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-[20px] shadow-[0_12px_32px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] sm:max-w-[340px] lg:mx-0 lg:max-w-[380px]">
                            <Image
                                src={FBC_LANDING_MEDIA.getStartedStill}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 320px, 380px"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                            <p className="absolute bottom-5 left-5 text-[13px] font-bold tracking-[0.2em] text-white">
                                MONEY MOVES
                            </p>
                        </div>
                        <div className="min-w-0 text-center lg:text-left">
                            <h2
                                className="text-[1.65rem] font-bold leading-tight sm:text-[2rem] lg:text-[2.15rem]"
                                style={{ color: FB_BLUE }}
                            >
                                {t.main.landingSecondTitle}
                            </h2>
                            <p className="mx-auto mt-4 max-w-[32rem] text-[16px] leading-relaxed text-[#3d4d66] lg:mx-0">
                                {t.main.lead1}
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                                <a
                                    href="#fbcm-thong-tin-ho-so"
                                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#ccd0d5] bg-white px-6 text-[14px] font-semibold text-[#1c1e21] transition hover:border-[#bcc0c4] hover:bg-[#fafbfc]"
                                >
                                    {t.main.landingNavGetStarted}
                                </a>
                                <a
                                    href="#fbcm-resources"
                                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#0064e0] bg-transparent px-6 text-[14px] font-bold text-[#0064e0] transition hover:bg-[#0064e0]/[0.06]"
                                >
                                    {t.main.landingNavLearn}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {children}
            </div>
        </div>
    )
}
