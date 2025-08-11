import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

const ProjectItem = ({
  title,
  image,
  url,
  setIsProject,
}: {
  title: string;
  image: StaticImageData | string;
  setIsProject: Dispatch<SetStateAction<boolean>>;
  url: string;
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
      <p className="p-4 font-semibold text-[#11181C]">{title}</p>
    </a>
  );
};

export default ProjectItem;
