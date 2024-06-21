'use client';

interface carouselProps {
  imageSources: string[];
}

const Carousel = ({ imageSources }: carouselProps) => {
  return (
    <div className='carousel'>
      {imageSources.map((src, index) => (
        <div
          key={`slide${index}`}
          id={`slide${index}`}
          className={'carousel-item relative w-full flex justify-center'}
        >
          <img src={src} className='w-full md:w-4/6 rounded-lg shadow-xl' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'></div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
