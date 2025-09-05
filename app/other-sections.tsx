import Card from '@/components/card';
import GithubIcon from '@/components/icons/github-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import ItemSection from '@/components/item-section';

export const AboutSection = () => {
  return (
    <ItemSection title="About">
      <div>
        <p>
          Hey...hey...Emmanuel here 👋🏾,{' '}
          {`I’m a Senior Frontend Engineer who’s passionate about building simple, intuitive, and engaging interfaces. My day-to-day toolkit revolves around React and Next.js, and I care deeply about building scalable, maintainable frontends that balance clean architecture with delightful interactions. For that extra spark of delight, I enjoy experimenting with motion using GSAP and Framer (you might even notice some of it on this page 🤪).`}{' '}
          <br /> <br />
          {`          Over the years, I’ve had the chance to collaborate with designers, product managers, and engineers to ship products that not only work well but feel great to use. I take pride in writing clean, maintainable code, mentoring teammates, and thinking ahead about scalability and user experience — the details that make a project truly stand out.`}{' '}
          <br />
          <br />
          {`Outside of coding, you’ll probably find me singing (strictly for fun!) or watching football…Up the Chels 💙.`}
        </p>
      </div>
    </ItemSection>
  );
};

export const ContactSection = () => {
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
          <a
            href="https://github.com/OGEmanuel"
            target="_blank"
            className="rounded-full border border-[#E6E8EB] p-2"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </ItemSection>
  );
};

export const EducationSection = () => {
  return (
    <ItemSection title="Education">
      <Card className="w-full self-start bg-white">
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

export const SkillsSection = () => {
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
        <li className="ml-4">Tanstack Query</li>
        <li className="ml-4">SCSS</li>
        <li className="ml-4">Version Control</li>
      </ul>
    </ItemSection>
  );
};
