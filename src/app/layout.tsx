import './globals.css';

import type { Metadata } from 'next';

import AccountBar from '@/components/AccountBar';
import DefaultLayout from '@/components/DefaultLayout';

export const metadata: Metadata = {
  title: 'nextjs lyne app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout account={<AccountBar />}>{children}</DefaultLayout>
        <div id="modals"></div>
      </body>
    </html>
  );
}
