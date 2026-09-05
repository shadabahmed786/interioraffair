import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { SITE_CONFIG } from '@/lib/constants';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://interioraffairs.pk'),
  title: {
    default: 'Interior Affairs — Turnkey Interior Solutions Nationwide Pakistan',
    template: '%s | Interior Affairs',
  },
  description: 'Complete turnkey interior solutions across Pakistan, from raw grey structure to fully finished residences. Designer walls, modular kitchens, wardrobes, flooring, false ceilings, and blinds.',
  keywords: [
    'Interior Design Islamabad',
    'Interior Decorator Rawalpindi',
    'Grey Structure Finishing Pakistan',
    'Modular Kitchens Islamabad',
    'Custom Wardrobes Rawalpindi',
    'False Ceiling Design Pakistan',
    'Turnkey Interior Fitout Pakistan'
  ],
  authors: [{ name: 'Interior Affairs Studio' }],
  creator: 'Interior Affairs',
  publisher: 'Interior Affairs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://interioraffairs.pk',
    title: 'Interior Affairs — Turnkey Interior Solutions Nationwide Pakistan',
    description: 'Everything after Grey Structure. Designer Walls, Kitchens, Wardrobes, Wall Papers, Floors, PVC Panels, Blinds, Grass, Ceilings & Golden Strips.',
    siteName: 'Interior Affairs',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Interior Affairs Turnkey Finishing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Affairs — Turnkey Interior Solutions Nationwide Pakistan',
    description: 'From Grey Structure to Finished Space. Designer Walls, Custom Kitchens, False Ceilings, and Flooring.',
    images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#F5F2EC] text-[#24221F] antialiased selection:bg-[#24221F] selection:text-[#FAF8F5]">
        <Navbar />
        <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
        <WhatsAppCTA />
        <Footer />
      </body>
    </html>
  );
}
