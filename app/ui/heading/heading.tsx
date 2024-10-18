import { useTranslations } from 'next-intl';
import React from 'react';
import HeadingItem from './heading-item';

export default function Heading() {
  const t = useTranslations('Heading');

  return (
    <aside className="flex items-center justify-center text-off-white w-full">
      <div className="w-[15%] h-px bg-off-white flex-shrink"></div>
      <div className="flex flex-row flex-wrap flex-auto gap-x-8 gap-y-4 px-6">
        <HeadingItem title={t('exp-title')} subtitle={t('exp-subtitle')} />
        <HeadingItem title={t('stack-title')} subtitle={t('stack-subtitle')} />
        <HeadingItem
          title={t('location-title')}
          subtitle={t('location-subtitle')}
        />
        <HeadingItem
          title={t('languages-title')}
          subtitle={t('languages-subtitle')}
        />
      </div>
      <div className="w-[15%] h-px bg-off-white flex-shrink"></div>
    </aside>
  );
}
