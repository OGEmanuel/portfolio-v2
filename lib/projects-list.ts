import switchOnline from '@/public/images/switch-online-home.png';
import tester from '@/public/images/api-tester.png';
import vouchers from '@/public/images/vouchers-project.png';
import infonerds from '@/public/images/infonerds.png';

export const PROJECTS = [
  {
    id: 1,
    title: 'CEO Portfolio',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754913287/Screenshot_2025-08-11_at_12.54.30_rpixzx.png',
    url: 'https://mooredh.com/',
  },
  {
    id: 2,
    title: 'Home Radar',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754913157/Screenshot_2025-08-11_at_12.52.06_moia4n.png',
    url: 'https://home-radar-ruby.vercel.app/',
  },
  {
    id: 3,
    title: 'Martha AI',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912939/Screenshot_2025-08-11_at_12.48.41_mcybiv.png',
    url: 'https://www.askmartha.ai/',
  },
  {
    id: 4,
    title: 'BlackPride YYC',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912768/Screenshot_2025-08-11_at_12.45.49_ltoyyg.png',
    url: 'https://www.blackprideyyc.org/',
  },
  {
    id: 5,
    title: 'Pluto Homes',
    image:
      'https://res.cloudinary.com/dl56ef7sx/image/upload/v1754912418/Screenshot_2025-08-11_at_12.38.54_akdx8z.png',
    url: 'https://www.plutohomes.org/',
  },
  {
    id: 6,
    title: 'The Infonerds Gallery',
    image: infonerds,
    url: 'https://the-infonerds.vercel.app/',
  },
  {
    id: 7,
    title: 'Shuttlers Voucher',
    image: vouchers,
    url: 'https://www.shuttlers.co/products/voucher',
  },
  {
    id: 8,
    title: 'Switch Online',
    image: switchOnline,
    url: 'https://www.switchonline.xyz/',
  },
  {
    id: 9,
    title: 'API Tester',
    image: tester,
    url: 'https://my-api-tester.vercel.app/',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Cognito Systems',
    location: 'Lagos',
    startDate: 'January 2025',
    endDate: 'Present',
    description: [
      {
        id: 1.1,
        text: 'Architected and optimized complex frontend systems, ensuring scalability, maintainability, and alignment with business goals.',
      },
      {
        id: 1.2,
        text: 'Mentored and guided junior engineers, fostering best practices in code quality, performance optimization, and collaborative development.',
      },
      {
        id: 1.3,
        text: 'Collaborated closely with cross-functional teams to translate product requirements into performant, accessible, and visually engaging user interfaces.',
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineer',
    company: 'Shuttlers',
    location: 'Lagos',
    startDate: 'August 2023',
    endDate: 'January 2025',
    description: [
      {
        id: 2.1,
        text: 'Led a cross-functional team comprising designers, backend developers, and QA engineers to overhaul the frontend architecture, resulting in a 15% reduction in page load times and a 20% increase in user engagement metrics.',
      },
      {
        id: 2.2,
        text: 'Spearheaded and implemented UI enhancement, resulting in a 20% reduction in page load times.',
      },
      {
        id: 2.3,
        text: 'Responsible for code reviews with a focus on identifying and addressing performance bottlenecks, leading to a 30% improvement in code quality.',
      },
    ],
  },
  {
    id: 3,
    title: 'Frontend Engineer',
    company: 'Capriquota',
    location: 'Remote',
    startDate: 'January 2023',
    endDate: 'August 2023',
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
