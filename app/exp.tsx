import Link from 'next/link';
import Nav from '../components/Nav';
import { NextPage } from 'next';

const ExpPage: NextPage = () => {
  return (
    <div>
        <Nav />
      <h1>My Experience</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default ExpPage;