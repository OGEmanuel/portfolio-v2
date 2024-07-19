'use client';

import BriefcaseIcon from '@/components/briefcase-icon';
import LocationIcon from '@/components/location-icon';
import ClockIcon from '@/components/clock-icon';
import MailIcon from '@/components/mail-icon';
import DisplayTime from '@/components/display-time';
import Lottie from 'lottie-react';
import animationData from '@/animation.json';
import avatar from '@/public/images/Emmanuel.jpg';
import Image from 'next/image';

const Header = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 sm:w-auto">
      <div className="relative h-[9.375rem] w-[9.375rem] rounded-full">
        <Image
          src={avatar}
          alt="avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h1 className="text-center text-[1.75rem] font-semibold text-[#11181C]">
        Emmanuel Ogunmola
      </h1>
      <div className="flex w-full flex-col items-start gap-[1.75rem] sm:w-auto sm:items-center">
        <div className="flex gap-2 self-center rounded-[6.25rem] border border-[#889096] px-4 py-2 sm:items-center">
          <div className="h-[1.5rem] w-[1.5rem]">
            <Lottie animationData={animationData} autoplay={true} loop={true} />
          </div>
          <p className="font-medium text-[#11181C]">Available for work</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 px-4 py-2">
            <BriefcaseIcon />
            <p className="font-medium text-[#495057]">Frontend Engineer</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2">
            <LocationIcon />
            <p className="font-medium text-[#495057]">Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2">
            <ClockIcon />
            <DisplayTime />
          </div>
          <a
            href="mailto:emmanuelogunmola416@gmail.com"
            className="flex items-center gap-2 px-4 py-2 font-medium text-[#495057]"
          >
            <MailIcon />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
