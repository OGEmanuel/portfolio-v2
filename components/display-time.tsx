'use client';

import { formatTime } from '@/lib/utils';
import { useEffect, useState } from 'react';

const DisplayTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`font-medium text-[#495057]`}>
      {formatTime(currentTime.toString())}
    </p>
  );
};

export default DisplayTime;
