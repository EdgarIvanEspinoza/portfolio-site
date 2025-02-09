import { Providers } from './Providers';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Edgar Ivan Espinoza',
  description: 'Portfolio and CV of Edgar Ivan Espinoza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children} <Analytics />
        </Providers>
      </body>
    </html>
  );
}
