import LandingPage from '../components/LandingPage';
import { useRouter } from 'next/router';
import { isMobileDevice } from '../utils/device';

export default function Home() {
  const router = useRouter();

  if (isMobileDevice(router.req)) {
    return <div>Sorry, this website is not available on mobile devices.</div>;
  }

  return (
    <>
      <div className='gradient'>
        <LandingPage />
      </div>
    </>
  );
}
