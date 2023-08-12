import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import NavBarWrapper from '@/components/NavBarWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ai colorize',
  description: 'photo colorizer ai',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>
          <NavBarWrapper />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
