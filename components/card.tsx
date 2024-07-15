import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-4 rounded-xl border border-[#E6E8EB] p-4 text-[#495057]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
