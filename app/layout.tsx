import type React from 'react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
    title: 'Mohit - Software Developer',
    description:
        'Exploring the intersection of software engineering, people, and AI.',
    generator: 'mohit',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={`${jetBrainsMono.variable} ${jetBrainsMono.className}`}>
            <body className='antialiased'>{children}</body>
        </html>
    );
}
