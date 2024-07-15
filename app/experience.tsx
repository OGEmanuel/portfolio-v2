import Card from '@/components/card';
import ItemSection from '@/components/item-section';
import { EXPERIENCE } from './projects-list';

const Experience = () => {
  return (
    <ItemSection title="Experience">
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map(experience => (
          <Card key={experience.id}>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-[#11181C]">
                {experience.title}
              </p>
              <p>
                {experience.company}, {experience.location}
              </p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <ul className="flex list-disc flex-col gap-3 p-0">
              {experience.description.map(desc => (
                <li key={desc.id} className="ml-4">
                  {desc.text}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </ItemSection>
  );
};

export default Experience;
