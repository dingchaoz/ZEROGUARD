'use client';
import clsx from 'clsx';

import TaskDetailSider from '@/containers/TaskVotedDetailSider';
import UserNav from '@/containers/UserNav';
import Vote4OptionsStep from '@/containers/Vote4OptionsStep';

export default function TaskPage() {
  return (
    <div className='flex h-1 min-h-screen bg-slate-950'>
      <div className='flex-1 overflow-auto pb-10'>
        <div className='flex flex-1 justify-between px-8 py-4'>
          <h2 className='text-xl font-medium text-red-300'>ZKAI Red Team</h2>
          <div>
            <UserNav />
          </div>
        </div>
        <div className='mx-auto mt-10 flex max-w-[560px] flex-col items-center justify-center'>
          <div className='relative mb-8 flex flex-shrink-0 flex-grow-0 items-end justify-between self-stretch'>
            <div className='relative h-[110px] flex-grow'>
              <p className='absolute left-0 top-0 w-[600px] text-left text-xl font-medium text-white/[0.87]'>
                How can we ensure that reinforcement learning agents generalize
                well from limited human feedback to unseen scenarios?
              </p>
            </div>
            <div className='flex w-[560px] flex-shrink-0 flex-grow-0 items-center justify-between'>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-end justify-start gap-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/60'>
                  Vote #5 | Ends in 3 days
                </p>
                <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-[#0c9b66] px-2.5 py-1'>
                  <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                    Open
                  </p>
                </div>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-1'>
                <div className='h-5 w-[37px] flex-shrink-0 flex-grow-0'>
                  <p className='absolute left-0 top-0 text-left text-sm text-[#90cbf5]'>
                    Share
                  </p>
                </div>
                <svg
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='relative h-5 w-5 flex-shrink-0 flex-grow-0'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g clip-path='url(#clip0_508_7833)'>
                    <path
                      d='M15 13.4003C14.3667 13.4003 13.8 13.6503 13.3667 14.042L7.425 10.5837C7.46667 10.392 7.5 10.2003 7.5 10.0003C7.5 9.80033 7.46667 9.60866 7.425 9.41699L13.3 5.99199C13.75 6.40866 14.3417 6.66699 15 6.66699C16.3833 6.66699 17.5 5.55033 17.5 4.16699C17.5 2.78366 16.3833 1.66699 15 1.66699C13.6167 1.66699 12.5 2.78366 12.5 4.16699C12.5 4.36699 12.5333 4.55866 12.575 4.75033L6.7 8.17533C6.25 7.75866 5.65833 7.50033 5 7.50033C3.61667 7.50033 2.5 8.61699 2.5 10.0003C2.5 11.3837 3.61667 12.5003 5 12.5003C5.65833 12.5003 6.25 12.242 6.7 11.8253L12.6333 15.292C12.5917 15.467 12.5667 15.6503 12.5667 15.8337C12.5667 17.1753 13.6583 18.267 15 18.267C16.3417 18.267 17.4333 17.1753 17.4333 15.8337C17.4333 14.492 16.3417 13.4003 15 13.4003Z'
                      fill='#90CBF5'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_508_7833'>
                      <rect width={20} height={20} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <Vote4OptionsStep />
        </div>
      </div>

      {/* detail */}
      <div
        className={clsx(
          'flex w-[624px] justify-center overflow-auto bg-slate-900 pt-10'
        )}
      >
        <TaskDetailSider isSimple isVoting />
      </div>
    </div>
  );
}
