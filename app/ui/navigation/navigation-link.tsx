'use client';

import { Link, Pathnames } from '@/i18n/routing';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';
import { rubik } from '../fonts';

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof Link<Pathname>>) {
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
