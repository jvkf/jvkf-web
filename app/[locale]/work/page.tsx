import MainLayout from '@/app/ui/main/main-layout';
import { setRequestLocale } from 'next-intl/server';
import Aside from './components/Aside';
import Experience from './components/Experience';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WorkPage(props: Props) {
  const params = await props.params;

  const {
    locale
  } = params;

  setRequestLocale(locale);

  return (
    <div className="flex-1 flex flex-col pb-2">
      <MainLayout AsideComponent={Aside} TextComponent={Experience} />
    </div>
  );
}
