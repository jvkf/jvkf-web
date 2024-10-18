import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <p>
        {t('message')}{' '}
        <Link href="/" className="underline">
          {t('link-text')}
        </Link>
      </p>
    </main>
  );
}
