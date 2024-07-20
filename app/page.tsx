import ItemSection from '@/components/item-section';
import Experience from './experience';
import Header from './header';
import Projects from './projects';
import TwitterIcon from '@/components/icons/twitter-icon';
import Card from '@/components/card';

export default function Home() {
  return (
    <main className="flex justify-center bg-[#FBFCFD]">
      <div className="flex w-full max-w-[880px] flex-col items-center justify-center px-6 py-20 sm:px-0 sm:pb-[11.25rem] sm:pt-20">
        <Header />
        <div className="py-[2.75rem]"></div>
        <div className="flex w-full flex-col gap-20 sm:px-6 lg:px-0">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export const About = () => {
  return (
    <ItemSection title="About">
      <div>
        <p>
          With a strong background in frontend development, I have consistently
          demonstrated my proficiency in building intuitive user interfaces and
          delivering high-quality web applications. My hands-on experience with
          React and NextJS has allowed me to tackle complex challenges and drive
          impactful results.
        </p>
        <div className="py-[9px]"></div>
        <p>
          My track record of successfully collaborating with cross-functional
          teams and my commitment to continuous improvement make me a valuable
          asset to any organization seeking to elevate its frontend development
          capabilities.
        </p>
      </div>
    </ItemSection>
  );
};

export const Contact = () => {
  return (
    <ItemSection title="Contact">
      <div className="flex w-full flex-col gap-3 self-start font-medium text-[#11181C]">
        <p>
          Email:{' '}
          <a
            href="mailto:emmanuelogunmola416@gmail.com"
            className="font-normal text-[#495057] hover:underline"
          >
            emmanuelogunmola416@gmail.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <span className="font-normal text-[#495057]">+234 818 486 5896</span>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/emmanuel-ogunmola-a5007a1a6/"
            target="_blank"
            className="font-normal text-[#495057] hover:underline"
          >
            emmanuelogunmola
          </a>
        </p>
        <div className="flex items-center gap-3">
          <p className="">Social Media: </p>
          <a
            href="https://x.com/its_GODwithMe"
            target="_blank"
            className="rounded-full border border-[#E6E8EB] p-2"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </ItemSection>
  );
};

export const Education = () => {
  return (
    <ItemSection title="Education">
      <Card className="w-full self-start">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-[#11181C]">
            Bachelors Degree
          </p>
          <p>University of Ibadan</p>
          <p>February, 2017 - December, 2021</p>
        </div>
      </Card>
    </ItemSection>
  );
};

export const Skills = () => {
  return (
    <ItemSection title="Skills">
      <ul className="flex w-full list-disc flex-col gap-3 self-start p-0">
        <li className="ml-4">React JS</li>
        <li className="ml-4">Next JS</li>
        <li className="ml-4">Tailwind CSS</li>
        <li className="ml-4">JavaScript</li>
        <li className="ml-4">Typescript</li>
        <li className="ml-4">Framer-motion</li>
        <li className="ml-4">GSAP</li>
        <li className="ml-4">Redux Toolkit</li>
        <li className="ml-4">SCSS</li>
        <li className="ml-4">Version Control</li>
      </ul>
    </ItemSection>
  );
};
