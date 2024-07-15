import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ItemSection = ({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      className={cn(
        `flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-0`,
        className,
      )}
    >
      <h2 className="text-lg font-semibold text-[#11181C]">{title}</h2>
      <div className="w-full max-w-[41rem] text-[#495057] md:flex md:max-w-none md:items-center md:justify-center lg:block lg:max-w-[41rem]">
        {children}
      </div>
    </section>
  );
};

export default ItemSection;
