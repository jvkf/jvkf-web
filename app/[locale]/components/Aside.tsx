import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AsideInfo() {
  const t = useTranslations('Profile');

  return (
    <div className="flex md:flex-col items-center justify-evenly md:justify-center flex-1 gap-4 md:gap-0 px-4 py-3">
      <Image
        src="/profile.jpg"
        alt="Profile Photo"
        width={150}
        height={150}
        className="h-auto w-auto max-h-[150px] max-w-[150px] min-h-[100px] min-w-[100px] rounded-full md:my-4"
      />
      <div className="flex flex-col items-center justify-center flex-shrink-0">
        <h1 className="font-medium text-xl sm:text-2xl">João Vítor Ferraz</h1>
        <h2 className="sm:text-lg tracking-wide text-lava-red">
          {t('subtitle')}
        </h2>
        <ul className="flex gap-3 py-4">
          <li>
            <a href={t('email-address')}>
              <img
                src="/envelope.svg"
                alt=""
                width={14}
                height={14}
                className="w-4 h-4"
              />
              <p className="sr-only">{t('email-text')}</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/jvkf" target="_blank">
              <img
                src="/github.svg"
                alt=""
                width={14}
                height={14}
                className="w-4 h-4"
              />
              <p className="sr-only">{t('github-text')}</p>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jvkf">
              <img
                src="/linkedin.svg"
                alt=""
                width={14}
                height={14}
                className="w-4 h-4"
              />
              <p className="sr-only">{t('linkedin-text')}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
