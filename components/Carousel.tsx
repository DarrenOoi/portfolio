'use client';
import { useState } from 'react';

interface carouselProps {
  imageSources: string[];
}

const Carousel = ({ imageSources }: carouselProps) => {
  return (
    <div className='carousel'>
      {imageSources.map((src, index) => (
        <div
          id={`slide${index}`}
          className={'carousel-item relative w-full flex justify-center'}
        >
          <img src={src} className='w-4/6 rounded-lg shadow-2xl' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href={`#slide${
                index === 0 ? imageSources.length - 1 : index - 1
              }`}
              className='invisible'
            >
              ❮
            </a>
            <a
              href={`#slide${
                index === imageSources.length - 1 ? 0 : index + 1
              }`}
              className='invisible'
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
