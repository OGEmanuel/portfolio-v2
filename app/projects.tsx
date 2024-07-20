'use client';

import ItemSection from '@/components/item-section';
import ProjectItem from '@/components/project-item';
import { PROJECTS } from '../lib/projects-list';
import { useEffect, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const Projects = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`xl:cursor-none`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <ItemSection title="Projects">
        <div className="flex flex-wrap items-center gap-3 md:w-full md:justify-center lg:w-auto lg:justify-normal">
          {PROJECTS.map(project => (
            <ProjectItem
              key={project.id}
              setIsProject={setIsProject}
              title={project.title}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
        {isVisible && (
          <div
            className={`hidden items-center xl:flex`}
            style={{
              position: 'fixed',
              top: `${position.y}px`,
              left: `${position.x}px`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <div
              className={`flex origin-center items-center gap-2 rounded-full border border-[#E6E8EB] bg-white py-2 pl-3 pr-2 transition-transform delay-75 ${isProject ? 'scale-100 self-start shadow-[0px_12px_24px_rgba(16,_24,_40,_0.25)]' : 'scale-0'}`}
            >
              <div className={`font-medium`}>View Page</div>
              <FaArrowRight className={`h-6 w-6 transition-all`} />
            </div>
            <div
              className={`${isProject ? 'scale-0' : ''} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 transition-all delay-75`}
            >
              <FaRegArrowAltCircleRight
                className={`h-6 w-6 transition-all ${clicked && '-rotate-45'}`}
              />
            </div>
          </div>
        )}
      </ItemSection>
    </div>
  );
};

export default Projects;
