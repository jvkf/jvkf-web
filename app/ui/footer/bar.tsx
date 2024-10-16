import clsx from 'clsx';

export default function Bar() {
  return (
    <div className="w-full h-[10px] flex px-8 md:px-0">
      <div className={clsx('h-full', 'w-[45%]', 'bg-[#FD925F]')}></div>
      <div className={clsx('h-full', 'w-[60%]', 'bg-[#FD4336]')}></div>
    </div>
  );
}
