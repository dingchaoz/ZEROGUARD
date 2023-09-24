import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import DetailStep from '@/containers/DetailStep';
import DiscussionStep from '@/containers/DiscussionStep';
import Vote4OptionsStep from '@/containers/Vote4OptionsStep';
import VotedStep from '@/containers/VotedStep';
import VotingWithContractStep from '@/containers/VotingWithContractStep';

import { usePollStore } from '@/store/pollStore';
interface TaskDetailSiderProps {
  isSimple?: boolean;
}

export default function TaskVotingWithContractDetailSider({
  isSimple,
}: TaskDetailSiderProps) {
  const { votedWithContract } = usePollStore();
  return (
    <div className='flex flex-col'>
      <div className={clsx({ hidden: isSimple })}>
        <div className='flex w-[520px] flex-col justify-between'>
          <div className='relative flex flex-col items-start justify-start gap-1'>
            <p className='w-[520px] text-xl font-medium text-white/[0.87] '>
              How can we ensure that reinforcement learning agents generalize
              well from limited human feedback to unseen scenarios?
            </p>
          </div>
          <div className='mt-2 flex flex-shrink-0 flex-grow-0 items-end justify-start gap-4'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-end justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/60'>
                Vote #6 | Ends in 3 days
              </p>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-[#0c9b66] px-2.5 py-1'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                  Open
                </p>
              </div>
              {votedWithContract && (
                <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-[#0d79cd] px-2.5 py-1'>
                  <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                    Voted
                  </p>
                </div>
              )}
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-1'>
              <a href='/tasks/2' target='_blank'>
                <div className='h-5 w-12 flex-shrink-0 flex-grow-0'>
                  <p className='absolute left-0 top-0 text-left text-sm text-[#65b7f1]'>
                    Expand
                  </p>
                </div>
              </a>

              <svg
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='relative h-5 w-5 flex-shrink-0 flex-grow-0'
                preserveAspectRatio='xMidYMid meet'
              >
                <g clip-path='url(#clip0_322_1496)'>
                  <path
                    d='M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z'
                    fill='#65B7F1'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_322_1496'>
                    <rect width={20} height={20} fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-1'>
              <div className='h-5 w-[37px] flex-shrink-0 flex-grow-0'>
                <p className='absolute left-0 top-0 text-left text-sm text-[#65b7f1]'>
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
                <g clip-path='url(#clip0_508_8433)'>
                  <path
                    d='M15 13.4003C14.3667 13.4003 13.8 13.6503 13.3667 14.042L7.425 10.5837C7.46667 10.392 7.5 10.2003 7.5 10.0003C7.5 9.80033 7.46667 9.60866 7.425 9.41699L13.3 5.99199C13.75 6.40866 14.3417 6.66699 15 6.66699C16.3833 6.66699 17.5 5.55033 17.5 4.16699C17.5 2.78366 16.3833 1.66699 15 1.66699C13.6167 1.66699 12.5 2.78366 12.5 4.16699C12.5 4.36699 12.5333 4.55866 12.575 4.75033L6.7 8.17533C6.25 7.75866 5.65833 7.50033 5 7.50033C3.61667 7.50033 2.5 8.61699 2.5 10.0003C2.5 11.3837 3.61667 12.5003 5 12.5003C5.65833 12.5003 6.25 12.242 6.7 11.8253L12.6333 15.292C12.5917 15.467 12.5667 15.6503 12.5667 15.8337C12.5667 17.1753 13.6583 18.267 15 18.267C16.3417 18.267 17.4333 17.1753 17.4333 15.8337C17.4333 14.492 16.3417 13.4003 15 13.4003Z'
                    fill='#65B7F1'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_508_8433'>
                    <rect width={20} height={20} fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8  flex w-[520px] flex-1 flex-col'>
        <Tab.Group defaultIndex={isSimple ? 1 : 0}>
          <Tab.List className='flex justify-between'>
            <Tab
              className={({ selected }) =>
                clsx('border-b-4 border-transparent px-2 pb-2 text-white', {
                  '!border-current !text-[#65B7F1]': selected,
                  hidden: isSimple,
                })
              }
            >
              Options
            </Tab>
            <Tab
              className={({ selected }) =>
                clsx('border-b-4 border-transparent px-2 pb-2 text-white', {
                  '!border-current !text-[#65B7F1]': selected,
                })
              }
            >
              Voting
            </Tab>
            <Tab
              className={({ selected }) =>
                clsx('border-b-4 border-transparent px-2 pb-2 text-white', {
                  '!border-current !text-[#65B7F1]': selected,
                })
              }
            >
              Details
            </Tab>
            <Tab
              className={({ selected }) =>
                clsx('border-b-4 border-transparent px-2 pb-2 text-white', {
                  '!border-current !text-[#65B7F1]': selected,
                })
              }
            >
              Discussion
            </Tab>
          </Tab.List>
          <Tab.Panels className='flex-1'>
            <Tab.Panel className='flex-1 py-9'>
              <Vote4OptionsStep />
            </Tab.Panel>
            <Tab.Panel className='flex-1 py-9'>
              {votedWithContract ? <VotedStep /> : <VotingWithContractStep />}
            </Tab.Panel>
            <Tab.Panel className='flex-1 py-9'>
              <DetailStep />
            </Tab.Panel>
            <Tab.Panel className='flex-1 py-9'>
              <DiscussionStep />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
