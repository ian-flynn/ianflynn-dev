import headshot from '@/public/Ian-Flynn-Headshot.jpg';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className='text-2xl bg-red-200 h-screen flex flex-col justify-center items-center'>
      <Image
        src={headshot}
        alt='Ian enjoying a hike'
        className='w-60 object-cover aspect-square rounded-full relative ml-auto'
      />
      <p className='mr-auto text-2xl'>Hi! My name is</p>
      <h1 className='mr-auto text-2xl font-bold'> Ian Flynn.</h1>
      <p>
        I build full-stack web apps in Typscript, React, Next.js and Node.
        Currently living in South Florida!
      </p>
    </section>
  );
};

export default Intro;
