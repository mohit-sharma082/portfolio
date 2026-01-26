import type React from 'react';
import { Suspense } from 'react';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense
            fallback={
                <div className='p-8 text-lg animate-pulse'>Loading...</div>
            }>
            {children}
        </Suspense>
    );
}
