import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalAgency - Digital Marketing & Web Design Services",
  description: "Transform your digital presence with our comprehensive digital marketing, web design, and content strategy services. Get measurable results and grow your business online.",
  keywords: "digital marketing, web design, content strategy, SEO, social media marketing, web development, digital agency",
  authors: [{ name: 'DigitalAgency Team' }],
  creator: 'DigitalAgency',
  publisher: 'DigitalAgency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalagency.com',
    title: 'DigitalAgency - Digital Marketing & Web Design Services',
    description: 'Transform your digital presence with our comprehensive digital marketing services.',
    siteName: 'DigitalAgency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalAgency - Digital Marketing & Web Design Services',
    description: 'Transform your digital presence with our comprehensive digital marketing services.',
    creator: '@digitalagency',
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
