'use client';

interface image {
  src: string;
  caption: string;
}

interface projectProps {
  title: String;
  subtitle: String;
  description: String;
  video: string | null;
  images: image[] | null;
  icons: string[] | null;
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useScreenSize } from '@/hooks/useScreenSize';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Project = ({
  title,
  subtitle,
  description,
  video,
  images,
  icons,
}: projectProps) => {
  const { screenSize } = useScreenSize();

  const techStack = {
    'nextjs-plain': { name: 'Next.js', link: 'https://nextjs.org/' },
    'flask-original': {
      name: 'Flask',
      link: 'https://flask.palletsprojects.com/en/3.0.x/',
    },
    'typescript-plain': {
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
    'python-plain': { name: 'Python', link: 'https://www.python.org/' },
    'javascript-plain': {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    'react-plain': { name: 'React', link: 'https://react.dev/' },
    'express-original': { name: 'Express.js', link: 'https://expressjs.com/' },
    'mysql-plain': { name: 'MySQL', link: 'https://www.mysql.com/' },
    'postgresql-plain': {
      name: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
    },
    'docker-plain': { name: 'Docker', link: 'https://www.docker.com/' },
    'amazonwebservices-plain-wordmark': {
      name: 'AWS',
      link: 'https://aws.amazon.com/free/?gclid=CjwKCAjw1emzBhB8EiwAHwZZxSIxB277FUw92DjvfNSleuah12oXQTO0upnuQ6FhvaFRf__cVXOkDxoC1pMQAvD_BwE&trk=f181118c-0869-454a-84d2-63d0cf7146e3&sc_channel=ps&ef_id=CjwKCAjw1emzBhB8EiwAHwZZxSIxB277FUw92DjvfNSleuah12oXQTO0upnuQ6FhvaFRf__cVXOkDxoC1pMQAvD_BwE:G:s&s_kwcid=AL!4422!3!638125895456!e!!g!!aws!19068271377!141241695742&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all',
    },
  };

  return (
    <div className='flex flex-col px-4 md:px-44 pb-2'>
      <h1 className='text-5xl mb-2 font-bold'>{title}</h1>
      <p className='text-xl text-[#7895B1] mb-2'>{subtitle}</p>
      {icons && (
        <div className='flex flex-row mb-4'>
          {icons?.map((icon, index) => {
            const tech = techStack[icon as keyof typeof techStack];
            return (
              <a href={tech.link} key={index} title={tech.name} target='_blank'>
                <i
                  key={index}
                  className={`devicon-${icon} opacity-75 text-3xl mr-2 hover:text-blue-800`}
                ></i>
              </a>
            );
          })}
        </div>
      )}
      <p className='text-m mt-2 mb-4'>{description}</p>

      <div className='flex justify-center py-10 bg-[#E5E4E2] mb-10 rounded-xl'>
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
            <ScrollArea className='w-full rounded-md border'>
              <div className='flex space-x-4 p-4'>
                {images.map((image, index) => (
                  <figure key={index} className='shrink-0'>
                    <div className='overflow-hidden rounded-md '>
                      <img
                        src={image.src}
                        // alt={`Photo by ${artwork.artist}`}
                        //style below is critical for shrinking the images proportionately
                        className='max-w-xl md:max-w-4xl max-h-40 md:max-h-96 object-contain'
                      />
                    </div>
                    <figcaption className='pt-2 text-xs text-muted-foreground'>
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>

            // <Carousel className='w-full md:w-4/6 flex justify-center items-center rounded-lg shadow-2xl'>
            //   <CarouselContent>
            //     {images.map((src, index) => (
            //       <CarouselItem key={index}>
            //         <img
            //           src={src}
            //           alt={`Carousel slide ${index}`}
            //           className='w-full h-full'
            //         />
            //       </CarouselItem>
            //     ))}
            //   </CarouselContent>
            //   <CarouselPrevious />
            //   {screenSize === 'md' ||
            //   screenSize === 'lg' ||
            //   screenSize === 'xl' ||
            //   screenSize === '2xl' ? (
            //     <CarouselNext />
            //   ) : null}
            // </Carousel>
          )
        )}
      </div>
      <div className='w-5/6 h-0.5 bg-[#64748B] mx-auto mb-4' />
    </div>
  );
};

export default Project;
