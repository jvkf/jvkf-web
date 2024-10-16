import '@/app/ui/global.css';
import type { Metadata } from 'next';
import './globals.css';
import { inter, rubik } from './ui/fonts';

export const metadata: Metadata = {
  title: 'João Vítor Ferraz (p1pa)- Fullstack Developer',
  description: 'Fullstack developer',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
