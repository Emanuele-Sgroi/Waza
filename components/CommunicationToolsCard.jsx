import { AiFillTwitterCircle, AiOutlineSlack } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitch } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import Link from 'next/link';

const CommunicationToolsCard = ({ commTools }) => {
  return (
    <div>
      <ul className='space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400'>
        {commTools.website && (
          <li className='flex items-center'>
            <TbWorld className='text-black' />
            <Link href={commTools.website}>
              <a className='ml-1.5' target='_blank'>
                Website
              </a>
            </Link>
          </li>
        )}
        {commTools.discord && (
          <li className='flex items-center'>
            <FaDiscord className='text-[#7289da]' />
            <Link href={commTools.discord}>
              <a className='ml-1.5' target='_blank'>
                Discord
              </a>
            </Link>
          </li>
        )}
        {commTools.slack && (
          <li className='flex items-center'>
            <AiOutlineSlack className='text-[#E01E5A]' />
            <Link href={commTools.slack}>
              <a className='ml-1.5' target='_blank'>
                Slack
              </a>
            </Link>
          </li>
        )}
        {commTools.twitch && (
          <li className='flex items-center'>
            <BsTwitch className='text-[#6441a5]' />
            <Link href={commTools.twitch}>
              <a className='ml-1.5' target='_blank'>
                Twitch
              </a>
            </Link>
          </li>
        )}
        {commTools.twitter && (
          <li className='flex items-center'>
            <AiFillTwitterCircle className='text-[#1D9BF0]' />
            <Link href={commTools.twitter}>
              <a className='ml-1.5' target='_blank'>
                Twitter
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CommunicationToolsCard;
