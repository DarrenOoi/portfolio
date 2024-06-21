import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='bg-white'>
      <div className='relative w-full h-screen'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover rotate-180 contrast-50'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='https://i.imgur.com/ySi24vG.mp4' type='video/mp4' />
        </video>
        <div className='relative z-10'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className='w-5/6 h-0.5 mx-auto my-4' />
      <Project
        title={'Quper'}
        subtitle={'Privacy Policy Analyser'}
        description={
          'A web-based privacy policy analyser that present users with a thorough analysis of a privacy policy by inputting a URL.  The user interface of this application is built using Next.js and Typescript, while the server-side of the application is developed using Python and Flask.'
        }
        video={null}
        images={['/q1.png', '/q2.png', '/q3.png', '/q4.png', '/q5.png']}
      />
      <Project
        title={'Pigeon'}
        subtitle={'E2EE Messaging App'}
        description={
          'A secure, end-to-end encrypted, real-time messaging web application. This application utilises web sockets to achieve two-way communication between the front end and the server. The front end was built with Next.js and TypeScript, while the back end was built using Python and Flask. Docker was used to containerise the application, and Terraform was used to automate deployment on AWS.'
        }
        video={null}
        images={['/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png']}
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
          'A web application that aims to provide users with a convenient way to view, analyse and visualise data from The World Happiness Report. With user authentication, data display, partial match search, and graphical representation features, the application offers a comprehensive and easy-to-use tool for exploring this information. The front-end is developed with React.js while the back-end is a Restful Express API that interacts with a MySQL.'
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
