import './globals.css'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {ThemeProvider} from './providers'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
})

export const metadata = {
  metadataBase: new URL('https://www.egxo.fyi'),
  title: {
    template: 'egxo.fyi | %s',
    default: 'egxo.fyi',
  },
  description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ethan_g, eg, EG, ethan-g, egarrisxn, egxo.fyi, ethangarrison, ethan-garrison, ethan_garrison, blog, nextjs, next, next14, sanity, sanityio, shadcn-ui, shadcn/ui, tailwindcss, javascript, react',
  ],
  creator: 'https://egxo.dev.',
  openGraph: {
    title: 'egxo.fyi',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    url: 'https://www.egxo.fyi/',
    siteName: 'egxo.fyi',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'egxo.fyi',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    creator: '@eg__xo',
    site: '@eg__xo',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#ffffff'},
    {media: '(prefers-color-scheme: dark)', color: '#0c0a09'},
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
