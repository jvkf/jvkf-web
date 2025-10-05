'use client';

import { Link, Pathnames } from '@/i18n/routing';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { rubik } from '../fonts';

type NavigationLinkProps = ComponentProps<typeof Link> & {
  href: Pathnames;
};

export default function NavigationLink({
  href,
  children,
  ...rest
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        rubik.className,
        'text-base text-off-white',
        isActive ? 'font-bold' : 'font-regular hover:underline'
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
