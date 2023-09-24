/* eslint-disable no-console */
'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import UserNav from '@/containers/UserNav';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: ProfileLayoutProps) {
  const router = useRouter();
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <div className='flex h-1 min-h-screen bg-slate-950'>
      <div className='flex flex-1 flex-col'>
        <div className='flex justify-between border-b border-gray-600 px-8 py-4'>
          <h2
            className='cursor-pointer text-xl font-medium text-red-300'
            onClick={() => {
              router.push('/dashboard');
            }}
          >
            ZKAI Red Team
          </h2>
          <div>
            <UserNav />
          </div>
        </div>
        <div className='flex flex-1'>
          <aside className='flex h-full transition-transform sm:translate-x-0'>
            <div
              id='secondary-sidenav'
              className='relative h-full w-64 overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700'
            >
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/settings/profile'
                    className={clsx(
                      'group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                      { 'bg-gray-700': selectedLayoutSegment === 'profile' }
                    )}
                  >
                    <span className='ml-3'>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/settings/polygon-id'
                    className={clsx(
                      'group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                      { 'bg-gray-700': selectedLayoutSegment === 'polygon-id' }
                    )}
                  >
                    <span className='ml-3'>Polygon Id</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </div>
  );
}
