import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      {/* <Carousel imageSources={['/Screenshot Quper.png', '/jtf.png']} /> */}
      <div className='w-5/6 h-0.5 mx-auto my-4' />
      <Project
        title={'Quper'}
        subtitle={'Privacy Policy Analyser'}
        description={
          'A web-based privacy policy analyser that present users with a thorough analysis of a privacy policy by inputting a URL.  The user interface of this application is built using Next.js and Typescript, while the server-side of the application is developed using Python and Flask. This project is a part of a research under the supervision of Associate Professor Guangdong Bai at UQ.'
        }
        video={null}
        images={['/Screenshot Quper.png']}
      />
      <Project
        title={'Just The Facts'}
        subtitle={'News Bias Minimiser'}
        description={
          'Just The Facts is an initiative designed to combat bias in news reporting using the capabilities of a large language model. It aims to purge emotionally charge language from news content, ensuring that readers are presented with comprehensive, unbiased facts. It enables users to make independent choices with minimal influence from publication biases'
        }
        video={'https://www.youtube.com/embed/mT5PTYNs8Bw?si=bSLBcH5c5uAkL_VQ'}
        images={null}
      />
      <Project
        title={'World Happiness Ranking'}
        subtitle={'World Happiness Data Visualiser'}
        description={
          'This project is a web application that aims to provide users with a convenient way to view, analyse and visualise data from The World Happiness Report. With user authentication, data display, partial match search, and graphical representation features, the application offers a comprehensive and easy-to-use tool for exploring this information. The front-end is developed with React.js while the back-end is a Restful Express API that interacts with a MySQL. The API enables access to World Happiness Rankings data with filtering, authentication and profile management features. SwaggerUI is utilised for ease of understanding, interacting and testing the API.'
        }
        video={null}
        // images='/whr2.png'
        images={['/whr1.png', '/whr2.png', '/whr3.png', '/whr4.png']}
      />
      {/* <div className='w-5/6 h-0.5 bg-[#64748B] mx-auto mt-4' /> */}
      <Footer />
    </div>
  );
}
