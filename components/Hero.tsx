'use client';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <div className='hero h-screen rounded-3xl text-white'>
      <div className='hero-content w-5/6 flex-col lg:flex-row-reverse'>
        <div>
          <h1 className='text-5xl font-bold text-[#013220]'>Welcome.</h1>
          <div className='py-6 text-xl mt-44'>
            <p>
              I'm Darren Ooi, a Software Engineering Graduate living in
              Brisbane, QLD, Australia. I am passionate about crafting web
              applications with{' '}
              <span className='font-bold text-[#22C55E]'>
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

          <p className='py-6 text-xl'>
            View a collection of my projects below ⬇️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
