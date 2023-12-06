import Link from 'next/link';

const Footer = () => {
  return (
    <div className='md:px-20 pt-16 pb-6 bg-base-200'>
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
        <a className='btn btn-ghost md:text-xl'>Resume</a>
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
