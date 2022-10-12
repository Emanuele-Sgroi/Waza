import React from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const UpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>page</div>;
};

export default UpdatePage;

export const getServerSideProps = async context => {
  const session = await getSession(context);

  // Check if user if logged in - if not send to login page
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
