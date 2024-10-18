import { useTranslations } from 'next-intl';

type Jobs = {
  title: string;
  period: string;
  description: string;
}[];

export default function Experience() {
  const t = useTranslations('Work.Experience');
  const jobs: Jobs = t.raw('jobs');

  return (
    <div className="p-5 max-w-[60ch]">
      <h2 className="font-bold text-lg mb-4">{t('title')}</h2>

      {jobs.map((job, index) => (
        <article key={index} className="mb-6">
          <h3 className="font-medium text-lg">{job.title}</h3>
          <p className="font-normal text-base mb-2">{job.period}</p>
          <p className="font-normal text-sm">{job.description}</p>
        </article>
      ))}
    </div>
  );
}
