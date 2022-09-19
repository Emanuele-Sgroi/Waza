import { FaTrello, FaJira, FaFigma } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const DevelopmentToolsCard = ({ devTools }) => {
  return (
    <div>
      <ul className='space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400'>
        {devTools.figma && (
          <li className='flex items-center'>
            <FaFigma className='text-[#FF5630]' />
            <Link href={devTools.figma}>
              <a className='ml-1.5' target='_blank'>
                Figma
              </a>
            </Link>
          </li>
        )}
        {devTools.github && (
          <li className='flex items-center'>
            <BsGithub className='text-[#151013]' />
            <Link href={devTools.github}>
              <a className='ml-1.5' target='_blank'>
                GitHub
              </a>
            </Link>
          </li>
        )}
        {devTools.trello && (
          <li className='flex items-center'>
            <FaTrello className='text-[#0079bf]' />
            <Link href={devTools.trello}>
              <a className='ml-1.5' target='_blank'>
                Trello
              </a>
            </Link>
          </li>
        )}
        {devTools.jira && (
          <li className='flex items-center'>
            <FaJira className='text-[#0052CC]' />
            <Link href={devTools.jira}>
              <a className='ml-1.5' target='_blank'>
                Jira
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DevelopmentToolsCard;
