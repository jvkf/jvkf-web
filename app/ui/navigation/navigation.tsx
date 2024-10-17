import { useTranslations } from 'next-intl';
import NavigationLink from './navigation-link';
import NavigationSwitchBtn from './navigation-switch-btn';

export default function Navigation() {
  const t = useTranslations('Navigation');
  return (
    <header className="h-full flex items-center">
      <nav className="w-full px-6">
        <ul className="flex gap-5 items-center sm:justify-center relative">
          <li className="">
            <NavigationLink href="/">{t('about')}</NavigationLink>
          </li>
          <li aria-hidden="true" role="presentation">
            /
          </li>
          <li>
            <NavigationLink href="/work">{t('work')}</NavigationLink>
          </li>
          <li className="absolute right-0">
            <NavigationSwitchBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
}
