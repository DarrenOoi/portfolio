'use client';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='hero h-screen rounded-3xl text-white'>
      <div className='hero-content w-5/6 flex-col lg:flex-row-reverse'>
        <div>
          <h1 className='text-5xl font-bold '>Welcome.</h1>
          <div className='mt-52 mb-16 text-xl h-28'>
            <p>
              I'm Darren Ooi, a Software Engineering Graduate living in
              Brisbane, QLD, Australia. I am passionate about crafting web
              applications with{' '}
              <span className='font-bold text-[#63C132]'>
                <Typewriter
                  words={[
                    'rich functionalities.',
                    'captivating aesthetics.',
                    'intuitive user experience.',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>

          <p className='text-xl text-white'>
            View a collection of my projects below ⬇️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
