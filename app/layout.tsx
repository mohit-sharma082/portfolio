import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
// @ts-ignore
import './globals.css';

const font = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Mohit - Software Developer',
    description:
        'Exploring the intersection of software engineering, people, and creativity.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${font.variable} ${font.variable} ${font.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
