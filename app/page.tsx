import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={montserrat.className + ' px-6'}>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
};

export default Home;
