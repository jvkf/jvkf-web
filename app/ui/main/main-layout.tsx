import clsx from 'clsx';
import { rubik } from '../fonts';

type Props = {
  AsideComponent: React.FC;
  TextComponent: React.FC;
};

export default function MainLayout({ AsideComponent, TextComponent }: Props) {
  return (
    <main className="md:grid md:grid-cols-3 md:gap-5 my-auto px-4 md:px-0">
      <article
        className={clsx(
          'md:col-span-1 bg-lava-red bg-opacity-[0.075] rounded-sm w-full flex',
          rubik.className
        )}
      >
        <AsideComponent />
      </article>
      <article className="md:col-span-2 w-full">
        <TextComponent />
      </article>
    </main>
  );
}
