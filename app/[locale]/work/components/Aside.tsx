import { useTranslations } from 'next-intl';

type SkillsList = {
  title: string;
  tech: string;
}[];

export default function AsideInfo() {
  const t = useTranslations('Work.Skills');
  const skills: SkillsList = t.raw('list');

  return (
    <div className="p-5">
      <h2 className="font-bold text-lg mb-4">{t('title')}</h2>
      <ul className="flex flex-col gap-4">
        {skills.map((category, index) => (
          <li key={index}>
            <h3 className="font-medium text-lg">{category.title}</h3>
            <p className="font-regular text-base">{category.tech}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
