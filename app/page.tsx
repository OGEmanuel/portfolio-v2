import About from './about';
import Header from './header';

export default function Home() {
  return (
    <main className="flex justify-center bg-[#FBFCFD]">
      <div className="flex w-full max-w-[880px] flex-col items-center justify-center pt-20">
        <Header />
        <div className="py-[2.75rem]"></div>
        <About />
      </div>
    </main>
  );
}
