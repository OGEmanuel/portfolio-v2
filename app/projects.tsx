import ItemSection from '@/components/item-section';
import switchOnline from '@/public/images/switch-online-home.png';
import ProjectItem from '@/components/project-item';
import { PROJECTS } from './projects-list';

const Projects = () => {
  return (
    <ItemSection title="Projects">
      <div className="flex flex-wrap items-center gap-3 md:w-full md:justify-center lg:w-auto lg:justify-normal">
        {PROJECTS.map(project => (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </ItemSection>
  );
};

export default Projects;
