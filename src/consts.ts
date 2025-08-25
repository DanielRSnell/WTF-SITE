// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'WooThatsFast - WooCommerce Hosting & Optimization';
export const SITE_DESCRIPTION =
  'Specialized WooCommerce hosting and optimization service. Get lightning-fast performance, full server ownership, and expert WooCommerce developers. No managed hosting markups.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | WooThatsFast',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'WooCommerce Hosting',
    'WooCommerce Optimization',
    'Core Web Vitals',
    'WooCommerce Performance',
    'Self-Hosted WooCommerce',
    'WooCommerce Developers',
    'E-commerce Hosting',
    'WooCommerce Speed',
  ],
  authors: [{ name: 'WooThatsFast Team' }],
  creator: 'WooThatsFast Team',
  publisher: 'WooThatsFast',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'WooThatsFast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WooThatsFast - WooCommerce Hosting & Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@woothatsfast',
  },
};
