import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aqar-modern.vercel.app'
const siteTitle = 'عقار مودرن | امتلك وحدتك السكنية في القاهرة الجديدة'
const siteDescription = 'اكتشف أرقى المشروعات العقارية في القاهرة الجديدة والشيخ زايد والعاصمة الإدارية، بأنظمة سداد مرنة واستشارات مجانية.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | عقار مودرن',
  },
  description: siteDescription,
  applicationName: 'عقار مودرن',
  generator: 'Next.js',
  keywords: ['عقارات القاهرة الجديدة', 'مشروعات عقارية', 'شقق للبيع', 'فلل للبيع', 'عقار مودرن'],
  authors: [{ name: 'Ehab George' }],
  creator: 'Ehab George',
  publisher: 'Ehab George',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: siteUrl,
    siteName: 'عقار مودرن',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-fFBzVfG80YOiSq2C5fdXV9Q3b7PPMF.png', width: 827, height: 2048, alt: 'عقار مودرن - مشروعات عقارية في القاهرة الجديدة' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-fFBzVfG80YOiSq2C5fdXV9Q3b7PPMF.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#111a15',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'عقار مودرن',
              url: siteUrl,
              description: siteDescription,
              author: {
                '@type': 'Person',
                name: 'Ehab George',
              },
              areaServed: ['القاهرة الجديدة', 'الشيخ زايد', 'العاصمة الإدارية'],
              availableLanguage: ['ar'],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
