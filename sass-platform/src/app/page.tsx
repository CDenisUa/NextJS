// Types
import MaxWidthWrapper from '@/components/max-width-wrapper/MaxWidthWrapper';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <MaxWidthWrapper className="bg-red-500">Home page</MaxWidthWrapper>
    </main>
  );
};

export default Home;
