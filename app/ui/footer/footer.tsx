import { rubik } from '@/app/ui/fonts';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Bar from './bar';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="h-full">
      <Bar />
      <div className={clsx('pt-8 md:pt-16 text-center', rubik.className)}>
        <a
          className="font-medium text-lg text-off-white"
          target="_blank"
          href={t('cv-link')}
        >
          {t('cv-name')}
        </a>
      </div>
    </footer>
  );
}
