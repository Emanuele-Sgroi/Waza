import { getProviders, signIn } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';

export default function SignIn({ providers }) {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='flex justify-center h-screen'>
        <div
          className='hidden bg-cover lg:block lg:w-2/3'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
          }}
        >
          <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
            <div>
              <h2 className='text-4xl font-bold text-white'>技 | Waza</h2>

              <p className='max-w-xl mt-3 text-gray-300'>
                Start building your dream project. For free.
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                技 | Waza
              </h2>

              <p className='mt-3 text-gray-500 dark:text-gray-300'>
                Sign in to access or create your account
              </p>
            </div>

            <div className='mt-8'>
              {Object.values(providers).map(provider => (
                <div key={provider.name}>
                  <div className='my-6 place-items-center'>
                    <button
                      onClick={() =>
                        signIn(provider.id, { callbackUrl: '/dashboard' })
                      }
                      className='w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500'
                    >
                      <BsGithub className='mr-2 w-10 object-fill' />
                      Continue with {provider.name}
                    </button>
                  </div>
                </div>
              ))}

              {/* <p className='mt-6 text-sm text-center text-gray-400'>
                Don&#x27;t have an account yet?{' '}
                <a
                  href='#'
                  className='text-blue-500 focus:outline-none focus:underline hover:underline'
                >
                  Sign up
                </a>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
