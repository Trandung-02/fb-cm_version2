import type { Metadata } from 'next'

const OG_IMAGE = 'https://i.postimg.cc/Y2dN0B2t/social-preview.png'
const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Facebook content monetization — Apply for your Page'

export const facebookContentMonetizationMetadata: Metadata = {
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Your Page may qualify for Facebook content monetization programs. Submit your application for review and next steps toward eligible earnings.',
  openGraph: {
    images: OG_IMAGE,
    title: DEFAULT_TITLE,
    description:
      'Apply for Facebook content monetization on your Page. Complete the review request so our team can assess eligibility.',
  },
  twitter: {
    images: OG_IMAGE,
    title: DEFAULT_TITLE,
    description:
      'Apply for Facebook content monetization on your Page. Complete the review request so our team can assess eligibility.',
  },
}
