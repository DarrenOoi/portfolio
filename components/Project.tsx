interface projectProps {
  title: String;
  subtitle: String;
  description: String;
  video: string | null;
  // images: string | null;
  images: string[] | null;
}
import Carousel from './Carousel';

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
      <div className='mockup-browser border bg-base-300 mb-10'>
        <div className='mockup-browser-toolbar'>
          <div className='input'></div>
        </div>
        <div className='flex justify-center py-10 bg-base-200'>
          {video ? (
            // <video className='rounded' controls width='700' height='400'>
            //   <source
            //     src={
            //       'https://drive.google.com/uc?id=1XHcdoDTtacoHE1LJkK3C3NcRAgidCQ7k'
            //     }
            //     type='video/mp4'
            //   />
            //   Your browser does not support the video tag.
            // </video>
            <iframe
              className='rounded'
              width='700'
              height='400'
              src={video}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          ) : (
            images &&
            // <img
            //   src={images}
            //   className='w-full md:w-4/6 rounded-lg shadow-2xl'
            // />
            images && <Carousel imageSources={images} />
          )}
        </div>
      </div>
      <div className='w-5/6 h-0.5 bg-[#64748B] mx-auto mb-4' />
    </div>
  );
};

export default Project;
