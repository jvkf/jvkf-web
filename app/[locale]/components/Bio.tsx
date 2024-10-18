import { Link } from '@/i18n/routing';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Bio() {
  const t = useTranslations('Bio');
  const paragraphs = t.raw('text') as string[];

  return (
    <div className="px-4 py-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 font-medium text-base  text-off-white">
          {paragraph}
        </p>
      ))}
      <p>
        {t('link-paragraph')}
        <Link href={'/work'} className="underline">
          {t('link-text')}
          <ExternalLink className="inline relative bottom-1.5" size={12} />
        </Link>
      </p>
    </div>
  );
}
