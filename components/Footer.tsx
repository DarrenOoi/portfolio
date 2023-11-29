import Link from 'next/link';

const Footer = () => {
  return (
    <div className='px-16 pt-16 pb-6 bg-base-200'>
      <h1 className='text-4xl font-bold mb-4'>Contact</h1>
      <div className='flex flex-row mb-4'>
        <Link
          href='https://www.linkedin.com/in/darren-ooi'
          target='_blank'
          className='btn btn-ghost text-xl'
        >
          Linkedin
        </Link>
        <Link
          href='mailto:darrentyooi@gmail.com'
          target='_blank'
          className='btn btn-ghost text-xl'
        >
          Email
        </Link>
        <a className='btn btn-ghost text-xl'>Resume</a>
        <Link
          href='https://github.com/DarrenOoi/'
          target='_blank'
          className='btn btn-ghost text-xl'
        >
          Github
        </Link>
      </div>
    </div>
  );
};
export default Footer;
