import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
};

export default Nav;
//<Link href="/music">Music</Link>
//<Link href="/food">Food</Link>
//<Link href="/resume">Resume</Link>