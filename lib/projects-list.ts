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
    title: 'Lead Design Engineer',
    company: 'Alvinn',
    location: 'Lagos',
    startDate: 'January 2026',
    endDate: 'Present',
    description: [
      {
        id: 1.1,
        text: 'Built a reusable design system with Shadcn, TypeScript, and Tailwind CSS, and supporting both light and dark themes',
      },
      {
        id: 1.2,
        text: 'Established TanStack Start as the frontend architecture, leveraging end-to-end type safety, server-side rendering, and SEO capabilities.',
      },
      {
        id: 1.3,
        text: "Defined the application's state architecture with Zustand for synchronous client state and TanStack Query for asynchronous server state",
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineer (Mobile & Web)',
    company: 'Zap Africa',
    location: 'Lagos',
    startDate: 'January 2025',
    endDate: 'December 2025',
    description: [
      {
        id: 2.1,
        text: 'Implemented TanStack Query for mobile data caching and background refetching, reducing redundant network requests by 32%.',
      },
      {
        id: 2.2,
        text: 'Designed a reusable mobile component system with TypeScript and Tailwind-style utility patterns, cutting UI development time for new screens by 45%.',
      },
      {
        id: 2.3,
        text: 'Integrated REST APIs with proper loading, error, and offline states, reducing crash reports caused by network failures by 60% during testing',
      },
    ],
  },
  {
    id: 3,
    title: 'Junior Frontend Engineer (Contract)',
    company: 'Shuttlers',
    location: 'Remote',
    startDate: 'August 2023',
    endDate: 'January 2025',
    description: [
      {
        id: 3.1,
        text: 'Deployed server-side rendering (SSR) using Next.js to improve page load times by 10% and SEO performance.',
      },
      {
        id: 3.2,
        text: 'Partnered with senior developers in reducing development time by 25%, making use of technologies like React.Js',
      },
      {
        id: 3.3,
        text: 'Coordinated with the product design team to design and implement an intuitive user interface and achieved a 20% increase in user engagement',
      },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Frontend Engineer Intern',
  //   company: 'Dev Career',
  //   location: 'Ibadan',
  //   startDate: 'September 2022',
  //   endDate: 'December 2022',
  //   description: [
  //     {
  //       id: 4.1,
  //       text: 'Worked jointly with senior developers to assist in developing responsive websites using HTML, CSS, and JavaScript.',
  //     },
  //     {
  //       id: 4.2,
  //       text: 'Assisted in developing and maintaining front-end components of web applications using modern frameworks like React.',
  //     },
  //     {
  //       id: 4.3,
  //       text: 'Collaborated with senior developers to develop responsive web applications that were optimised for different screen sizes.',
  //     },
  //   ],
  // },
];
