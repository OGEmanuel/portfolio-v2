import About from './about';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Header from './header';
import Projects from './projects';
import Skills from './skills';

export default function Home() {
  return (
    <main className="flex justify-center bg-[#FBFCFD]">
      <div className="flex w-full max-w-[880px] flex-col items-center justify-center px-6 py-20 sm:px-0 sm:pb-[11.25rem] sm:pt-20">
        <Header />
        <div className="py-[2.75rem]"></div>
        <div className="flex w-full flex-col gap-20 sm:px-6 lg:px-0">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}
