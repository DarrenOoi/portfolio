import Link from 'next/link';

const Footer = () => {
  return (
    <div className='px-4 md:px-16 pt-16 pb-6 bg-[#E5E4E2] text-[#0B3C49]'>
      <h1 className='text-xl md:text-4xl font-bold mb-4'>Contact</h1>
      <div className='flex flex-col md:flex-row mb-4'>
        <Link
          href='https://www.linkedin.com/in/darren-ooi'
          target='_blank'
          className='btn btn-ghost md:text-xl'
        >
          Linkedin
        </Link>
        <Link
          href='mailto:darrentyooi@gmail.com'
          target='_blank'
          className='btn btn-ghost md:text-xl'
        >
          Email
        </Link>
        <Link
          href='/resume'
          target='_blank'
          className='btn btn-ghost md:text-xl'
        >
          Resume
        </Link>
        <Link
          href='https://github.com/DarrenOoi/'
          target='_blank'
          className='btn btn-ghost md:text-xl'
        >
          Github
        </Link>
      </div>
    </div>
  );
};
export default Footer;
