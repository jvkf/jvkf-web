import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const CV_REDIRECTS: Record<string, string> = {
  '/pt-cv.pdf': 'https://drive.google.com/file/d/1y92m5SnYa-AI30zZpu0RhG3UYZSjyDSD/view?usp=sharing',
  '/english-cv.pdf': 'https://drive.google.com/file/d/14aX-EhgWvhyhSQ0tlu71oc08sKjlFvzC/view?usp=sharing',
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (CV_REDIRECTS[pathname]) {
    return NextResponse.redirect(CV_REDIRECTS[pathname], 301);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/pt-cv.pdf',
    '/english-cv.pdf',
  ],
};
