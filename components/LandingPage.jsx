import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaDiscord, FaExpandArrowsAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { TbMessages } from 'react-icons/tb';
import { MdOutlineCampaign, MdOutlineDesignServices } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import Image from 'next/image';
import code_thinking from '../assets/images/code_thinking.svg';
import pair_programming from '../assets/images/pair_programming.svg';

const LandingPage = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='p-60'>
          <h1 className='md:text-center font-semibold text-7xl'>
            Make your project.{' '}
            <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>
              Reality
            </span>
          </h1>
        </div>
        <div className='flex flex-row bg-[#F9FBFD] pb-40 pt-40'>
          <Image src={code_thinking} height={250} width={600} />
          <div className='flex flex-col'>
            <h1 className='flex flex-row text-center basis-1/2'>
              Let's build that dreaming project with the help of other
              developers.
            </h1>
            <button
              type='button'
              class='mx-auto w-40 h-12  m-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg '
            >
              Create Account
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 pb-40 pt-40'>
          <div className='row-span-3 mt-20 text-center'>
            <h1>Learn coding by doing a project!</h1>
            <p>
              Whether you are a guru developer or a newbie, coding can be
              daunting. Pair programming can help you build that missing skill.
            </p>
            <button
              type='button'
              class='mx-auto w-40 h-12  m-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg '
            >
              Explore Projects
            </button>
          </div>
          <Image src={pair_programming} height={250} width={600} />
        </div>
        <div className='bg-[#F9FBFD] pb-40 pt-40'>
          <h1 className='md:text-center'>
            Everything you’ll need. Nothing you won’t.
          </h1>
          <div className='grid text-center grid-cols-3 gap-4 mt-5'>
            <div>
              <BsCodeSlash className='m-auto w-40 h-12' />
              <p className='text-lg font-bold'>Pair Programming</p>
              <p className='text-gray-500 text-lg '>
                Use Discord, Twitch, or you favorite instant messaging app to
                discuss the development of the project.
              </p>
            </div>
            <div>
              <MdOutlineCampaign className='m-auto w-40 h-12' />
              <p className='text-lg font-bold '>Promote Your Project</p>
              <p className='text-gray-500 text-lg'>
                Do not hide your dreaming project, share it worldwide.
              </p>
            </div>
            <div>
              <MdOutlineDesignServices className='m-auto w-40 h-12' />
              <p className='text-lg font-bold'>Design to Prototype</p>
              <p className='text-gray-500 text-lg'>
                Collaborate with designer to build wonderful websites.
              </p>
            </div>
            <div>
              <FaExpandArrowsAlt className='m-auto w-40 h-12' />
              <p className='text-lg font-bold'>Scales Your Team and Project</p>
              <p className='text-gray-500 text-lg'>
                As your project grow you might want to scale your team.
              </p>
            </div>
            <div>
              <GrGroup className='m-auto w-40 h-12' />
              <p className='text-lg font-bold'>A Worldwide Community</p>
              <p className='text-gray-500 text-lg'>
                Connect with hundreds of agencies and thousands of developers
                around the world.
              </p>
            </div>
            <div>
              <TbMessages className='m-auto w-40 h-12' />
              <p className='text-lg font-bold'>Instant Messaging Power</p>
              <p className='text-gray-500 text-lg'>
                Use Discord, Twitch, or you favorite instant messaging app to
                discuss the development of the project.
              </p>
            </div>
          </div>
        </div>
        <div className='ml-50 text-center md:text-center mb-40 mt-40'>
          <h1>Join the Movement.</h1>
          <p>Join the global community of developers on Twitter and Discord.</p>
          <div className='grid grid-cols-2 place-items-center pt-10'>
            <button className='w-55 h-12 px-5 ml-24 mt-5 text-white text-center inline-flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg py-2.5 mr-2 mb-2'>
              <AiFillTwitterCircle className='mr-2 -ml-1 w-6 h-5' />
              Follow @Waza
            </button>
            <button className='w-45 h-12 px-5 mr-24 mt-5 text-white  text-center inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg py-2.5 mb-2'>
              <FaDiscord className='mr-2 -ml-1 w-6 h-5' />
              Join us on Discord
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
