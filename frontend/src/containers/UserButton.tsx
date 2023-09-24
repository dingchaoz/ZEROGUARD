'use client';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Fragment, SVGProps, useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

import { truncateEthAddress } from '@/utils/truncateString';

export default function UserButton() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const { data: session } = useSession();

  const handleLogout = () => {
    if (isConnected) {
      disconnect();
    } else {
      signOut();
    }
  };

  const addressTxt = useMemo(() => {
    let tempAddress = '';
    if (session?.user?.email) {
      tempAddress = session.user?.email;
    } else if (session?.user?.name) {
      tempAddress = session.user?.name;
    } else if (address) {
      tempAddress = address;
    }
    return truncateEthAddress(tempAddress);
  }, [session, address]);

  return (
    <div className='relative'>
      <Menu as='div' className='relative z-10 inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            {domLoaded && <div className=' inline-block'>{addressTxt}</div>}
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100'
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
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push('/settings/profile')}
                  >
                    <UserIcon
                      className='mr-2 h-5 w-5 text-[#A78BFA]'
                      aria-hidden='true'
                    />
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleLogout()}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 18'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z'
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  );
}

function ArchiveActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  );
}
