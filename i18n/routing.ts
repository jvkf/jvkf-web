import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export type IntlRouting = typeof routing;

export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/work': {
      en: '/work',
      pt: '/experiencia',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
