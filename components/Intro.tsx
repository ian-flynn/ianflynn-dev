import headshot from '@/public/Ian-Flynn-Headshot.jpg';
import Image from 'next/image';

const Intro = () => {
  return (
    <section>
      <Image
        src={headshot}
        alt='Ian enjoying a hike'
        className='h-60 w-60 object-cover aspect-square w-5/6 rounded-full border border-black '
      />
      <h1>Ian Flynn</h1>

      <p className=''>Fullstack Software Engineer</p>
      <p>Crafting useful, maintainable, and captivating web products.</p>
    </section>
  );
};

export default Intro;
