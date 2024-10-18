type InfoItemProps = {
  title: string;
  subtitle: string;
};

export default function HeadingItem({ title, subtitle }: InfoItemProps) {
  return (
    <div className="flex flex-col flex-auto text-center basis-1/3 md:text-left md:basis-auto">
      <p className="font-semibold text-xl">{title}</p>
      <p className="font-medium text-sm tracking-wide">{subtitle}</p>
    </div>
  );
}
