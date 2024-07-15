import ItemSection from '@/components/item-section';
import TwitterIcon from '@/components/twitter-icon';

const Contact = () => {
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

export default Contact;
