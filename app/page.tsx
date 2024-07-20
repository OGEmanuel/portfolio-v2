import Experience from './experience';
import Header from './header';
import Projects from './projects';
import {
  AboutSection,
  ContactSection,
  EducationSection,
  SkillsSection,
} from './other-sections';

export default function Home() {
  return (
    <main className="flex justify-center bg-[#FBFCFD]">
      <div className="flex w-full max-w-[880px] flex-col items-center justify-center px-6 py-20 sm:px-0 sm:pb-[11.25rem] sm:pt-20">
        <Header />
        <div className="py-[2.75rem]"></div>
        <div className="flex w-full flex-col gap-20 sm:px-6 lg:px-0">
          <AboutSection />
          <Projects />
          <Experience />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
