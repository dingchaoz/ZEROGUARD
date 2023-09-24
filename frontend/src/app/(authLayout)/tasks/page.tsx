/* eslint-disable no-console */
'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SumItem from '@/components/tasks/SumItem';
import TaskVotedDetailSider from '@/containers/TaskVotedDetailSider';
import TaskVotingDetailSider from '@/containers/TaskVotingDetailSider';
import TaskVotingWithContractDetailSider from '@/containers/TaskVotingWithContractDetailSider';
import UserNav from '@/containers/UserNav';

import { usePollStore } from '@/store/pollStore';

export default function TasksPage() {
  const router = useRouter();
  const [index, setIndex] = useState(-1);
  const { voted } = usePollStore();

  const tasks = [
    {
      title:
        'How can reinforcement learning algorithmss effectively incorporate human feedback to accelerate learning in complex environments?',
      subTitle: 'Vote #6 | Ends in 3 days',
      isOpen: true,
      isVoted: voted,
    },
  ];

  return (
    <div className='flex h-1 min-h-screen bg-slate-950'>
      <div className='flex-1  overflow-auto pb-10'>
        <div className='flex flex-1 justify-between px-8 py-4'>
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
        <div className='mt-10'>
          <div className='flex justify-between'>
            <div className='mx-auto max-w-2xl'>
              <div>
                {/* title & search */}
                <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch'>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-center gap-1 pl-4'>
                    <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-1'>
                      <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-1'>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='relative h-4 w-4 flex-shrink-0 flex-grow-0'
                          preserveAspectRatio='xMidYMid meet'
                        >
                          <path
                            d='M10 12.6663L5.33333 7.99967L10 3.33301'
                            stroke='#65B7F1'
                            stroke-width={2}
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </div>
                      <p
                        className='flex-shrink-0 flex-grow-0 cursor-pointer text-center text-base text-[#65b7f1]'
                        onClick={() => {
                          router.back();
                        }}
                      >
                        Back
                      </p>
                    </div>
                    <p className='flex-shrink-0 flex-grow-0 text-center text-2xl text-white'>
                      Rank Chatbot Replies
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch rounded-[100px] border border-white/[0.12] px-[15px] py-2'>
                    <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-1'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
                        preserveAspectRatio='xMidYMid meet'
                      >
                        <g clip-path='url(#clip0_319_191)'>
                          <path
                            d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
                            fill='white'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_319_191'>
                            <rect width={24} height={24} fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/60'>
                        Search
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
                      preserveAspectRatio='xMidYMid meet'
                    >
                      <g clip-path='url(#clip0_319_194)'>
                        <path
                          d='M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_319_194'>
                          <rect width={24} height={24} fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                {/* content */}
                <div className='space-y-2'>
                  {tasks.map((task, _index) => (
                    <SumItem
                      key={task.subTitle}
                      title={task.title}
                      subTitle={task.subTitle}
                      isOpen={task.isOpen}
                      isVoted={task.isVoted}
                      active={index === _index}
                      onClick={() => {
                        console.log('click');
                        setIndex(_index);
                        // setIsShowDetail(true);
                      }}
                    />
                  ))}
                </div>
                {/* pagination */}
                <div>
                  <div className='mt-10 flex items-center justify-center'>
                    <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start overflow-hidden rounded-sm p-1.5'>
                      <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='relative h-3 w-3 flex-shrink-0 flex-grow-0'
                        preserveAspectRatio='none'
                      >
                        <path
                          d='M8.83938 2.06646V1.03119C8.83938 0.941456 8.73625 0.891902 8.66661 0.946813L2.62911 5.66244C2.57781 5.70233 2.5363 5.75341 2.50775 5.81179C2.4792 5.87016 2.46436 5.93429 2.46436 5.99927C2.46436 6.06425 2.4792 6.12838 2.50775 6.18675C2.5363 6.24512 2.57781 6.29621 2.62911 6.3361L8.66661 11.0517C8.73759 11.1066 8.83938 11.0571 8.83938 10.9673V9.93208C8.83938 9.86646 8.80857 9.80351 8.75768 9.76333L3.93625 5.99994L8.75768 2.23521C8.80857 2.19503 8.83938 2.13208 8.83938 2.06646Z'
                          fill='#D9D9D9'
                        />
                      </svg>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2.5 overflow-hidden rounded-sm border border-[#65b7f1] px-2 py-px'>
                      <p className='w-2 flex-shrink-0 flex-grow-0 text-center text-sm font-medium text-[#65b7f1]'>
                        1
                      </p>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2.5 overflow-hidden rounded-sm px-2 py-px'>
                      <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                        2
                      </p>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2.5 overflow-hidden rounded-sm px-2 py-px'>
                      <p className='h-[22px] w-2 flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                        3
                      </p>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2.5 overflow-hidden rounded-sm px-2 py-px'>
                      <p className='h-[22px] w-2 flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                        4
                      </p>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2.5 overflow-hidden rounded-sm px-2 py-px'>
                      <p className='h-[22px] w-2 flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                        5
                      </p>
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start overflow-hidden rounded-sm p-1.5'>
                      <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='relative h-3 w-3 flex-shrink-0 flex-grow-0'
                        preserveAspectRatio='none'
                      >
                        <path
                          d='M9.39777 5.66233L3.36027 0.9467C3.34449 0.93428 3.32553 0.926562 3.30557 0.924431C3.2856 0.9223 3.26544 0.925844 3.2474 0.934655C3.22936 0.943466 3.21417 0.957188 3.20357 0.974243C3.19298 0.991299 3.18741 1.011 3.1875 1.03108V2.06634C3.1875 2.13197 3.2183 2.19491 3.2692 2.23509L8.09063 5.99983L3.2692 9.76456C3.21697 9.80474 3.1875 9.86768 3.1875 9.93331V10.9686C3.1875 11.0583 3.29063 11.1079 3.36027 11.053L9.39777 6.33733C9.44908 6.2973 9.4906 6.2461 9.51915 6.18761C9.5477 6.12913 9.56254 6.06491 9.56254 5.99983C9.56254 5.93475 9.5477 5.87052 9.51915 5.81204C9.4906 5.75356 9.44908 5.70235 9.39777 5.66233Z'
                          fill='white'
                          fill-opacity='0.87'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* detail */}
      <div
        className={clsx(
          'flex h-full w-[624px] justify-center overflow-auto bg-slate-900 pt-10',
          {
            hidden: !(index === 0 || index === 1 || index === 2),
          }
        )}
      >
        {index === 0 && <TaskVotingWithContractDetailSider />}
        {index === 1 && <TaskVotedDetailSider />}
        {index === 2 && <TaskVotingDetailSider />}
      </div>
    </div>
  );
}
