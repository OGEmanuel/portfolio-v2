import ItemSection from '@/components/item-section';

const Skills = () => {
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

export default Skills;
