import React from 'react';
import { getSession } from 'next-auth/react';

const DashboardPage = () => {
  return <div>DashboardPage</div>;
};

export default DashboardPage;

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
