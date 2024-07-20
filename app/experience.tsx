'use client';

import Card from '@/components/card';
import ItemSection from '@/components/item-section';
import { EXPERIENCE } from '../lib/projects-list';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 1024;
    const experience = document.querySelector('.experience') as HTMLElement;
    const firstExperience = document.querySelector('.shuttlers') as HTMLElement;
    const secondExperience = document.querySelector(
      '.capriquota',
    ) as HTMLElement;
    const thirdExperience = document.querySelector('.dev') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;

    if (!isMobile) {
      if (
        !experience ||
        !firstExperience ||
        !secondExperience ||
        !thirdExperience ||
        !container
      )
        return;
      ScrollTrigger.create({
        trigger: '.experience',
        start: 'top 20%',
        end: 'bottom 20%',
        scrub: true,
        pin: true,
      });

      ScrollTrigger.create({
        trigger: '.container',
        start: 'top 20%',
        end: '+=682.64',
        scrub: true,
        pin: '.shuttlers',
      });

      ScrollTrigger.create({
        trigger: '.capriquota',
        start: 'top 20%',
        end: '+=341.32',
        scrub: true,
        pin: true,
      });

      ScrollTrigger.create({
        trigger: '.dev',
        start: 'top 20%',
        end: 'top 20%',
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    }
  });

  return (
    <ItemSection title="Experience" titleClassName="experience">
      <div className="container flex flex-col gap-4">
        {EXPERIENCE.map(experience => (
          <Card
            key={experience.id}
            className={`${experience.company.toLowerCase()} bg-white xl:min-h-[20.3325rem]`}
          >
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-[#11181C]">
                {experience.title}
              </p>
              <p>
                {experience.company}, {experience.location}
              </p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <ul className="flex list-disc flex-col gap-3 p-0">
              {experience.description.map(desc => (
                <li key={desc.id} className="ml-4">
                  {desc.text}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </ItemSection>
  );
};

export default Experience;
