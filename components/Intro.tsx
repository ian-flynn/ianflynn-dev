import headshot from '@/public/Ian-Flynn-Headshot.jpg';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className='text-2xl h-screen flex flex-col justify-center items-center text-center'>
      <Image
        src={headshot}
        alt='Ian enjoying a hike'
        className='w-60 object-cover aspect-square rounded-full mb-3'
      />
      <p className='text-xl'>
        <span className='font-medium'>Hi!</span> My name is
      </p>
      <h1 className=' text-4xl font-bold'> Ian Flynn</h1>
      <p>
        I build full-stack web apps in Typscript, React, Next.js and Node.
        Currently living in Juno Beach, Florida!
      </p>
    </section>
  );
};

export default Intro;
