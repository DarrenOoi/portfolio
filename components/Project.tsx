interface projectProps {
  title: String;
  subtitle: String;
  description: String;
  video: string | null;
  // images: string | null;
  images: string[] | null;
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Project = ({
  title,
  subtitle,
  description,
  video,
  images,
}: projectProps) => {
  return (
    <div className='flex flex-col px-4 md:px-44 pb-2 bg-white'>
      <h1 className='text-5xl mb-2 font-bold'>{title}</h1>
      <p className='text-xl text-[#7895B1]'>{subtitle}</p>
      <p className='text-m mt-2 mb-4'>{description}</p>
      <p className='mb-4'>Tech Stack</p>
      {/* <div className='mockup-browser border bg-base-300 mb-10'> */}
      {/* <div className='mockup-browser-toolbar'>
          <div className='input'></div>
        </div> */}
      <div className='flex justify-center py-10 bg-base-200 mb-10'>
        {video ? (
          <iframe
            className='rounded'
            width='700'
            height='400'
            src={video}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        ) : (
          images && (
            // images && <Carousel imageSources={images} />
            <Carousel className='w-full md:w-4/6 flex justify-center items-center rounded-lg shadow-2xl'>
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={src}
                      alt={`Carousel slide ${index}`}
                      className='w-full h-full'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )
        )}
        {/* </div> */}
      </div>
      <div className='w-5/6 h-0.5 bg-[#64748B] mx-auto mb-4' />
    </div>
  );
};

export default Project;
