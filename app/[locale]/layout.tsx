import { inter } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer/footer';
import '@/app/ui/global.css';
import Navigation from '@/app/ui/navigation/navigation';
import type { Locale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'HomeLayout' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://www.p1pa.dev/',
      type: 'website',
      images: [
        {
          url: '/og-image.jpeg',
          width: 400,
          height: 400,
        },
      ],
    },
  };
}

export default async function HomeLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const lang = locale === 'en' ? 'en-US' : 'pt-BR';

  return (
    <html className="bg-[#1E1C23] text-white" lang={lang}>
      <body className={clsx(inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <div className="app_container">
            <Navigation />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
