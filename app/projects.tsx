import Link from 'next/link';
import Nav from '../components/Nav';
import { NextPage } from 'next';

const ProjPage: NextPage = () => {
  return (
    <div>
        <Nav />
      <h1>My Projects</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default ProjPage;