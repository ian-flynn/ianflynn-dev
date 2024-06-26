import AboutMe from '@/components/AboutMe';
import Intro from '@/components/Intro';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={montserrat.className + ' px-6'}>
      <Intro />
      <AboutMe />
    </main>
  );
};

export default Home;
