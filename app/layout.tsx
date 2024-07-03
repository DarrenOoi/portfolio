import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Noto_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const merri = Noto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Darren Ooi | Portfolio',
  description: 'Portfolio by Darren Ooi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
        <meta
          name='google-site-verification'
          content='zPxGoq9mJ5ZtmoxgLnJj2eZGEJKC4JDVQ4hC36yFvmw'
        />
      </head>
      <body className={merri.className}>{children}</body>
    </html>
  );
}
