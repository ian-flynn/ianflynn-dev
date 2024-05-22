import Intro from '@/components/Intro';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={montserrat.className + ' px-6'}>
      <Intro />
    </main>
  );
};

export default Home;
