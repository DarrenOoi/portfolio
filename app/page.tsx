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
          'QuPer is a web application designed to safeguard user privacy in the ever-evolving domain of Virtual Personal Assistants (VPAs). It provides a platform for assessing the privacy policies of VPA apps, aiming to eliminate uncertainty surrounding these policies and empower users with the knowledge needed to make informed decisions. QuPer offers an overview of the quality of inputted privacy policies based on four key metrics: Completeness, Readability, Availability, and Timeliness.'
        }
        video={null}
        images={['/q1.png', '/q2.png', '/q3.png', '/q4.png', '/q5.png']}
        icons={[
          'nextjs-plain',
          'flask-original',
          'typescript-plain',
          'python-plain',
        ]}
      />
      <Project
        title={'Pigeon'}
        subtitle={'E2EE Messaging App'}
        description={
          'A secure, end-to-end encrypted, real-time messaging web application for your secret communications. This application utilises web sockets to achieve two-way communication between the front end and the server. It supports addition of contacts, one-on-one chat, multimedia messages and viewing of chat history. Docker was used to containerise the application, and Terraform was used to automate deployment on AWS.'
        }
        video={null}
        images={['/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png']}
        icons={[
          'nextjs-plain',
          'flask-original',
          'typescript-plain',
          'python-plain',
          'postgresql-plain',
          'docker-plain',
          'amazonwebservices-plain-wordmark',
        ]}
      />
      <Project
        title={'Just The Facts'}
        subtitle={'News Bias Minimiser'}
        description={
          'Just The Facts is an initiative designed to combat bias in news reporting using the capabilities of a large language model. It aims to purge emotionally charge language from news content, ensuring that readers are presented with comprehensive, unbiased facts. It enables users to make independent choices with minimal influence from publication biases.'
        }
        video={'https://www.youtube.com/embed/mT5PTYNs8Bw?si=bSLBcH5c5uAkL_VQ'}
        images={null}
        icons={[
          'nextjs-plain',
          'flask-original',
          'javascript-plain',
          'python-plain',
        ]}
      />
      <Project
        title={'World Happiness Ranking'}
        subtitle={'World Happiness Data Visualiser'}
        description={
          'A web application that aims to provide users with a convenient way to view, analyse and visualise data from The World Happiness Report. With user authentication, data display, partial match search, and graphical representation features, the application offers a comprehensive and easy-to-use tool for exploring this information. The front-end is developed with React.js while the back-end is a RESTful Express API that interacts with a MySQL database.'
        }
        video={null}
        // images='/whr2.png'
        images={['/whr1.png', '/whr2.png', '/whr3.png', '/whr4.png']}
        icons={['react-plain', 'express-original', 'mysql-plain']}
      />
      {/* <div className='w-5/6 h-0.5 bg-[#64748B] mx-auto mt-4' /> */}
      <Footer />
    </div>
  );
}
