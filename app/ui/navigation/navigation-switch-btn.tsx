'use client';

import { Locale, usePathname, useRouter } from '@/i18n/routing';
import clsx from 'clsx';
import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

export default function NavigationSwitchBtn() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const nextLocale = locale === 'en' ? 'pt' : 'en';
  const t = useTranslations('Switch');

  const onClick = () => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={onClick}
      className={clsx([
        'bg-[#FD5F62] hover:bg-lava-red duration-300 ease-in transition-colors text-black flex items-center gap-2 px-4 py-1.5 rounded-md border-solid border-gray-200 border text-sm',
        isPending && 'opacity-30',
      ])}
      disabled={isPending}
    >
      <Languages size={16} />
      <p className="sr-only">{t('sr-text')}</p>
      {nextLocale}
    </button>
  );
}
