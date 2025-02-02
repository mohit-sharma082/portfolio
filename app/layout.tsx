import { ReactNode } from 'react';
import Link from "next/link";
import type { Metadata } from 'next';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Mohit - Portfolio',
  description: 'A minimal portfolio showcasing my projects and skills.',
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className='flex flex-col items-center min-h-[100vh] w-[100vw] relative'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className='bg-background w-full border-b min-h-[5vh] flex items-center justify-center sticky top-0 z-10'>
            <Navbar />
          </header>
          <main className='w-full flex flex-col items-center md:w-3/5 border-r border-l flex-1 '>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
