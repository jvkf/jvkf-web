import MainLayout from '@/app/ui/main/main-layout';
import { unstable_setRequestLocale } from 'next-intl/server';
import Aside from './components/Aside';
import Experience from './components/Experience';

type Props = {
  params: { locale: string };
};

export default function WorkPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex-1 flex flex-col pb-2">
      <MainLayout AsideComponent={Aside} TextComponent={Experience} />
    </div>
  );
}
