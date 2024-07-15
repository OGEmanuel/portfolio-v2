import Card from '@/components/card';
import ItemSection from '@/components/item-section';

const Education = () => {
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

export default Education;
