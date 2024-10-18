import Heading from '@/app/ui/heading/heading';
import { unstable_setRequestLocale } from 'next-intl/server';

import MainLayout from '@/app/ui/main/main-layout';
import Aside from './components/Aside';
import Bio from './components/Bio';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex-1 flex flex-col pt-4 md:py-12 pb-2">
      <Heading />
      <MainLayout AsideComponent={Aside} TextComponent={Bio} />
    </div>
  );
}
