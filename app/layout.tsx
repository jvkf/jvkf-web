import { ReactNode } from 'react';
import './globals.css';
import Script from 'next/script'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>);
}
