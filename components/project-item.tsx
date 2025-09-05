import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import GithubIcon from './icons/github-icon';

const ProjectItem = ({
  title,
  image,
  url,
  setIsProject,
  github,
  description,
}: {
  title: string;
  image: StaticImageData | string;
  setIsProject: Dispatch<SetStateAction<boolean>>;
  url: string;
  github?: string;
  description: string;
}) => {
  return (
    <a
      onMouseEnter={() => setIsProject(true)}
      onMouseLeave={() => setIsProject(false)}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block w-full cursor-none overflow-hidden rounded-xl border border-[#E6E8EB] transition-all hover:border-[#889096] sm:max-w-80"
    >
      <div className="relative h-[11.25rem] w-full border-b border-[#E6E8EB]">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-[calc(100%-180px)] flex-col justify-between gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[#11181C]">{title}</p>
          {github && (
            <a
              onMouseEnter={() => setIsProject(false)}
              onMouseLeave={() => setIsProject(true)}
              href={github}
              target="_blank"
              className="z-20 block rounded-full border border-[#E6E8EB] p-2"
            >
              <GithubIcon />
            </a>
          )}
        </div>
        <p className="text-xs">{description}</p>
      </div>
    </a>
  );
};

export default ProjectItem;
