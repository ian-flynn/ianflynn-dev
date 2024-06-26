import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider, useLocale } from 'react-aria-components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ian Flynn',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
 