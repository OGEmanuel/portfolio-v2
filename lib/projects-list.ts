import tester from '@/public/images/api-tester.png';

export const PROJECTS = [
  {
    id: 3,
    title: 'Alvinn',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1786891490/Screenshot_2026-08-16_at_18.41.58_lavgrl.png',
    url: 'https://alvinn.app/',
    description: 'The identity platform for the next generation of creators',
  },
  {
    id: 1,
    title: 'CEO Portfolio',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754913287/Screenshot_2025-08-11_at_12.54.30_rpixzx.png',
    url: 'https://mooredh.com/',
    description:
      'A portfolio website displaying the works and achievements of MooreDH.',
  },
  {
    id: 2,
    title: 'Martha AI',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912939/Screenshot_2025-08-11_at_12.48.41_mcybiv.png',
    url: 'https://www.askmartha.ai/',
    description:
      'A platform that allows businesses to track how their products are performing in the market, providing support with AI.',
  },
  {
    id: 4,
    title: 'Nerd Not Noob',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1786892037/Screenshot_2026-08-16_at_18.53.43_r3lu5p.png',
    url: 'https://www.nerdnotnoob.com/',
    description: 'A photo and video gallery for Nerd Not Noob',
  },
  // {
  //   id: 2,
  //   title: 'Home Radar',
  //   image:
  //     'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754913157/Screenshot_2025-08-11_at_12.52.06_moia4n.png',
  //   url: 'https://home-radar-ruby.vercel.app/',
  // },

  // {
  //   id: 4,
  //   title: 'BlackPride YYC',
  //   image:
  //     'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912768/Screenshot_2025-08-11_at_12.45.49_ltoyyg.png',
  //   url: 'https://www.blackprideyyc.org/',
  // },
  // {
  //   id: 5,
  //   title: 'Pluto Homes',
  //   image:
  //     'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912418/Screenshot_2025-08-11_at_12.38.54_akdx8z.png',
  //   url: 'https://www.plutohomes.org/',
  // },
  // {
  //   id: 6,
  //   title: 'The Infonerds Gallery',
  //   image: infonerds,
  //   url: 'https://the-infonerds.vercel.app/',
  // },
  // {
  //   id: 7,
  //   title: 'Shuttlers Voucher',
  //   image: vouchers,
  //   url: 'https://www.shuttlers.co/products/voucher',
  // },
  // {
  //   id: 8,
  //   title: 'Switch Online',
  //   image: switchOnline,
  //   url: 'https://www.switchonline.xyz/',
  // },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'Alvinn',
    location: 'Lagos',
    startDate: 'January 2026',
    endDate: 'Present',
    description: [
      {
        id: 1.1,
        text: 'Built a 10+ component design system (Shadcn, Typescript, Tailwind), using the React Composition pattern, cutting new-feature UI build time by 40% and eliminating inconsistent theming across the app',
      },
      {
        id: 1.2,
        text: 'Migrated the frontend to TanStack Start, reducing initial load time by 12% (Lighthouse) and improving SEO performance, with the application appearing on the first page of Google search results for “Alvinn.”',
      },
      {
        id: 1.3,
        text: 'Redesigned state architecture (Zustand + Tanstack Query), reducing state-related bugs by 25%, cutting onboarding time for new engineers.',
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineer (Web & Mobile)',
    company: 'Zap Africa',
    location: 'Lagos',
    startDate: 'January 2025',
    endDate: 'December 2025',
    description: [
      {
        id: 2.1,
        text: 'Implemented TanStack Query for mobile data caching and background refetching, reducing redundant network requests by 32% and improving screen-to-screen load times by 38% (Lighthouse) on average.',
      },
      {
        id: 2.2,
        text: 'Built Jest test suites covering 4+ reusable mobile components, raising regression coverage and ensuring consistent component behavior across new screens.',
      },
      {
        id: 2.3,
        text: 'Integrated 5+ REST APIs with proper loading, error, and offline states, reducing crash reports caused by network failures by 60% during testing.',
      },
    ],
  },
  {
    id: 3,
    title: 'Frontend Engineer (Contract)',
    company: 'Shuttlers',
    location: 'Remote',
    startDate: 'August 2023',
    endDate: 'January 2025',
    description: [
      {
        id: 3.1,
        text: 'Shipped 10 responsive UI components used across 4 products, reducing design-to-dev handoff time by 40%.',
      },
      {
        id: 3.2,
        text: 'Built Playwright end-to-end test suites covering 5+ critical user workflows, catching regressions before production, and improving confidence in feature releases.',
      },
      {
        id: 3.3,
        text: 'Reviewed 5+ PRs/week, cutting post-release bugs by 30%.',
      },
    ],
  },
];
