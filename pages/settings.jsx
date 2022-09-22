import React from 'react';
import { getSession } from 'next-auth/react';

const SettingsPage = () => {
  return <div>SettingsPage</div>;
};

export default SettingsPage;

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
