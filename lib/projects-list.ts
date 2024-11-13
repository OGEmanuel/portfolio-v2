import switchOnline from '@/public/images/switch-online-home.png';
import dashboard from '@/public/images/dashboard.png';
import duwitt from '@/public/images/Duwitt.png';
import tester from '@/public/images/api-tester.png';
import awaskill from '@/public/images/Awaskill.png';
import codeEditor from '@/public/images/code-editor.png';
import vouchers from '@/public/images/vouchers-project.png';
import infonerds from '@/public/images/infonerds.png';

export const PROJECTS = [
  {
    id: 1,
    title: 'The Infonerds Gallery',
    image: infonerds,
    url: 'https://the-infonerds.vercel.app/',
  },
  {
    id: 2,
    title: 'Shuttlers Voucher',
    image: vouchers,
    url: 'https://voucher.shuttlers.co/',
  },
  {
    id: 3,
    title: 'Switch Online',
    image: switchOnline,
    url: 'https://www.switchonline.xyz/',
  },
  {
    id: 4,
    title: 'Dashboard Clone',
    image: dashboard,
    url: 'https://dashboard-cloned-by-emmanuel.vercel.app/',
  },
  {
    id: 5,
    title: 'Duwitt Landing Page',
    image: duwitt,
    url: 'https://duwitt-site.netlify.app/',
  },
  {
    id: 6,
    title: 'API Tester',
    image: tester,
    url: 'https://my-api-tester.vercel.app/',
  },
  {
    id: 7,
    title: 'Awaskill',
    image: awaskill,
    url: 'https://awaskill.vercel.app/',
  },
  {
    id: 8,
    title: 'Code Editor',
    image: codeEditor,
    url: 'https://my-code-editor-five.vercel.app/',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'Shuttlers',
    location: 'Lagos',
    startDate: 'August 2023',
    endDate: 'Present',
    description: [
      {
        id: 1.1,
        text: 'Led a cross-functional team comprising designers, backend developers, and QA engineers to overhaul the frontend architecture, resulting in a 15% reduction in page load times and a 20% increase in user engagement metrics.',
      },
      {
        id: 1.2,
        text: 'Spearheaded and implemented UI enhancement, resulting in a 20% reduction in page load times.',
      },
      {
        id: 1.3,
        text: 'Responsible for code reviews with a focus on identifying and addressing performance bottlenecks, leading to a 30% improvement in code quality.',
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineer',
    company: 'Capriquota',
    location: 'Remote',
    startDate: 'January 2023',
    endDate: 'August 2023',
    description: [
      {
        id: 2.1,
        text: 'Deployed server-side rendering (SSR) using Next.js to improve page load times by 10% and SEO performance.',
      },
      {
        id: 2.2,
        text: 'Partnered with senior developers in reducing development time by 25%, making use of technologies like React.Js',
      },
      {
        id: 2.3,
        text: 'Coordinated with the product design team to design and implement an intuitive user interface and achieved a 20% increase in user engagement',
      },
    ],
  },
  {
    id: 3,
    title: 'Frontend Engineer Intern',
    company: 'Dev Career',
    location: 'Ibadan',
    startDate: 'September 2022',
    endDate: 'December 2022',
    description: [
      {
        id: 3.1,
        text: 'Worked jointly with senior developers to assist in developing responsive websites using HTML, CSS, and JavaScript.',
      },
      {
        id: 3.2,
        text: 'Assisted in developing and maintaining front-end components of web applications using modern frameworks like React.',
      },
      {
        id: 3.3,
        text: 'Collaborated with senior developers to develop responsive web applications that were optimised for different screen sizes.',
      },
    ],
  },
];
