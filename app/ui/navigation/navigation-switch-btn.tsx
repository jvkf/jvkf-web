'use client';

import { Locale, usePathname, useRouter } from '@/i18n/routing';
import clsx from 'clsx';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function NavigationSwitchBtn() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const nextLocale = locale === 'en' ? 'pt' : 'en';

  const onClick = () => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={onClick}
      className={clsx([
        'bg-lava-red text-black flex items-center gap-2 px-4 py-2 rounded-md border-solid border-gray-200 border',
        isPending && 'opacity-30',
      ])}
      disabled={isPending}
    >
      <Languages size={20} />
      <p className="sr-only">Click to change to language:</p>
      {nextLocale}
    </button>
  );
}
