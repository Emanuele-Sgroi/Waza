import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

import { HiDotsHorizontal } from 'react-icons/hi';

export default function SettingsBar({ session, data, id, openModal }) {
  return (
    <div className='top-16 w-56 text-right'>
      {session && session.user.email == data.user.email ? (
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              Options
              <HiDotsHorizontal
                className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <div>
                      <Link href={`/projects/update/${id}`}>
                        <button
                          className={`${
                            active
                              ? 'bg-orange-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </div>

              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <div>
                      <button
                        onClick={openModal}
                        className={`${
                          active ? 'bg-red-500 text-white' : 'text-red-500'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : null}
    </div>
  );
}

// <div>
//   {session && session.user.email == data.user.email ? (
//     <div className='mt-10'>
//       <h2 className='font-semibold text-orange-500'>Project settings</h2>{' '}
//       <div className='ml-10 mt-5'>
//         <ul>
//           <li>
//             <span className='mr-5'>Update project</span>
//             <Link href={`/projects/update/${id}`}>
//               <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
//                 <a>Update</a>
//               </button>
//             </Link>
//           </li>
//           <li className='mt-2'>
//             <span className='mr-5 text-red-700 font-bold'>DELETE PROJECT</span>

//             <button
//               onClick={openModal}
//               type='button'
//               className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
//             >
//               <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
//                 <a>Delete</a>
//               </span>
//             </button>
//             <Transition appear show={isOpen} as={Fragment}>
//               <Dialog as='div' className='relative z-10' onClose={closeModal}>
//                 <Transition.Child
//                   as={Fragment}
//                   enter='ease-out duration-300'
//                   enterFrom='opacity-0'
//                   enterTo='opacity-100'
//                   leave='ease-in duration-200'
//                   leaveFrom='opacity-100'
//                   leaveTo='opacity-0'
//                 >
//                   <div className='fixed inset-0 bg-black bg-opacity-25' />
//                 </Transition.Child>

//                 <div className='fixed inset-0 overflow-y-auto'>
//                   <div className='flex min-h-full items-center justify-center p-4 text-center'>
//                     <Transition.Child
//                       as={Fragment}
//                       enter='ease-out duration-300'
//                       enterFrom='opacity-0 scale-95'
//                       enterTo='opacity-100 scale-100'
//                       leave='ease-in duration-200'
//                       leaveFrom='opacity-100 scale-100'
//                       leaveTo='opacity-0 scale-95'
//                     >
//                       <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
//                         <Dialog.Title
//                           as='h3'
//                           className='text-lg font-medium leading-6 text-gray-900'
//                         >
//                           Delete Project
//                         </Dialog.Title>
//                         <Dialog.Description>
//                           This will permanently deactivate your project
//                         </Dialog.Description>
//                         <div className='mt-2'>
//                           <p className='text-sm text-gray-500'>
//                             Are you sure you want to delete your project? All of
//                             the data will be permanently removed. This action
//                             cannot be undone.
//                           </p>
//                         </div>

//                         <div className='mt-4'>
//                           <button
//                             className='mr-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
//                             onClick={mutation.mutate}
//                           >
//                             Delete
//                           </button>
//                           <button
//                             className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
//                             onClick={closeModal}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </Dialog.Panel>
//                     </Transition.Child>
//                   </div>
//                 </div>
//               </Dialog>
//             </Transition>
//           </li>
//         </ul>
//       </div>
//     </div>
//   ) : null}
// </div>;
