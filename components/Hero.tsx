'use client';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='hero h-screen bg-base-200 rounded-3xl'>
      <div className='hero-content w-5/6 flex-col lg:flex-row-reverse'>
        {/* <img src='/linkedin.jpg' className='max-w-xs roundedcd shadow-2xl' /> */}
        <div>
          <h1 className='text-5xl font-bold'>Welcome.</h1>
          <div className='py-6 text-xl'>
            <p>
              I'm Darren Ooi, a Software Engineering Student living in Brisbane,
              QLD, Australia. I am passionate about crafting web applications
              with{' '}
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
                  typeSpeed={70}
                  deleteSpeed={70}
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
