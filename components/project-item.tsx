import Image, { StaticImageData } from 'next/image';

const ProjectItem = ({
  title,
  image,
  url,
}: {
  title: string;
  image: StaticImageData;
  url: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="block w-full overflow-hidden rounded-xl border border-[#E6E8EB] sm:max-w-80"
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
