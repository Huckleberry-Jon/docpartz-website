import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DocPartz | The Future of Parts Is Coming',
  description: 'DocPartz is building a smarter, more connected parts network. Join the founding parts rep network or sign up for launch updates.',
  applicationName: 'DocPartz',
  openGraph: { title: 'DocPartz | The Future of Parts Is Coming', description: 'A smarter, more connected parts network—coming soon.', type: 'website' },
  twitter: { card: 'summary', title: 'DocPartz | Coming Soon', description: 'A smarter, more connected parts network—coming soon.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
