import Link from 'next/link';

import UserNav from '@/containers/UserNav';

const tasks = [
  {
    icon: (
      <div className='absolute left-0 top-0 h-10 w-10 overflow-hidden rounded-md bg-[#42a7f0]'>
        <div className='absolute left-1 top-1 flex items-center justify-start gap-2.5 overflow-hidden'>
          <svg
            width={32}
            height={32}
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-8 w-8 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <g clip-path='url(#clip0_504_6507)'>
              <path
                d='M22.6666 13.907V2.66699H9.33325V13.907C9.33325 14.3737 9.57325 14.8137 9.98658 15.0537L15.5599 18.4003L14.2399 21.5203L9.69325 21.907L13.1466 24.8937L12.0933 29.3337L15.9999 26.9737L19.9066 29.3337L18.8666 24.8937L22.3199 21.907L17.7733 21.5203L16.4533 18.4003L22.0266 15.0537C22.4266 14.8137 22.6666 14.387 22.6666 13.907ZM17.3333 16.307L15.9999 17.107L14.6666 16.307V4.00033H17.3333V16.307Z'
                fill='white'
                fill-opacity='0.87'
              />
            </g>
            <defs>
              <clipPath id='clip0_504_6507'>
                <rect width={32} height={32} fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ),
    title: 'Rank Chatbot Replies',
    points: 4,
    url: '/tasks',
  },
  {
    icon: (
      <div className='absolute left-0 top-0 h-10 w-10 overflow-hidden rounded-md bg-[#1eb980]'>
        <div className='absolute left-1.5 top-[6.5px] flex items-center justify-center gap-2.5 overflow-hidden'>
          <svg
            width={28}
            height={29}
            viewBox='0 0 28 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-7 w-7 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <g clip-path='url(#clip0_504_6490)'>
              <path
                d='M23.333 2.83301H4.66634C3.38301 2.83301 2.34467 3.88301 2.34467 5.16634L2.33301 26.1663L6.99967 21.4997H23.333C24.6163 21.4997 25.6663 20.4497 25.6663 19.1663V5.16634C25.6663 3.88301 24.6163 2.83301 23.333 2.83301ZM6.99967 10.9997H20.9997V13.333H6.99967V10.9997ZM16.333 16.833H6.99967V14.4997H16.333V16.833ZM20.9997 9.83301H6.99967V7.49967H20.9997V9.83301Z'
                fill='white'
                fill-opacity='0.87'
              />
            </g>
            <defs>
              <clipPath id='clip0_504_6490'>
                <rect
                  width={28}
                  height={28}
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ),
    title: 'Compose a dialogue',
    points: 5,
  },
  {
    icon: (
      <svg
        width={40}
        height={40}
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative h-10 w-10 flex-shrink-0 flex-grow-0'
        preserveAspectRatio='none'
      >
        <rect width={40} height={40} rx={6} fill='#F1A31C' />
        <g clip-path='url(#clip0_504_6475)'>
          <path
            d='M27 17.5L28.25 14.75L31 13.5L28.25 12.25L27 9.5L25.75 12.25L23 13.5L25.75 14.75L27 17.5ZM19.5 18L17 12.5L14.5 18L9 20.5L14.5 23L17 28.5L19.5 23L25 20.5L19.5 18ZM27 23.5L25.75 26.25L23 27.5L25.75 28.75L27 31.5L28.25 28.75L31 27.5L28.25 26.25L27 23.5Z'
            fill='white'
            fill-opacity='0.87'
          />
        </g>
        <defs>
          <clipPath id='clip0_504_6475'>
            <rect
              width={24}
              height={24}
              fill='white'
              transform='translate(8 8.5)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Reply as Chatbot',
    points: 3,
  },
  {
    icon: (
      <div className='absolute left-0 top-0 h-10 w-10 overflow-hidden rounded-md bg-[#be3d69]'>
        <div className='absolute left-1.5 top-[6.5px] flex items-center justify-start gap-2.5 overflow-hidden'>
          <svg
            width={28}
            height={29}
            viewBox='0 0 28 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-7 w-7 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <g clip-path='url(#clip0_504_6512)'>
              <path
                d='M14.0003 14.5003C16.5787 14.5003 18.667 12.412 18.667 9.83366C18.667 7.25533 16.5787 5.16699 14.0003 5.16699C11.422 5.16699 9.33366 7.25533 9.33366 9.83366C9.33366 12.412 11.422 14.5003 14.0003 14.5003ZM14.0003 16.8337C10.8853 16.8337 4.66699 18.397 4.66699 21.5003V23.8337H23.3337V21.5003C23.3337 18.397 17.1153 16.8337 14.0003 16.8337Z'
                fill='white'
                fill-opacity='0.87'
              />
            </g>
            <defs>
              <clipPath id='clip0_504_6512'>
                <rect
                  width={28}
                  height={28}
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ),
    title: 'Reply as Prompter',
    points: 3,
  },
  {
    icon: (
      <svg
        width={40}
        height={40}
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative h-10 w-10 flex-shrink-0 flex-grow-0'
        preserveAspectRatio='none'
      >
        <rect width={40} height={40} rx={6} fill='#9D2CD2' />
        <g clip-path='url(#clip0_504_6480)'>
          <path
            d='M20 13.5C20 12.8583 19.475 12.3333 18.8333 12.3333H12.79L13.56 8.62333L13.5833 8.355C13.5833 7.99333 13.4317 7.66667 13.1983 7.42167L12.2767 6.5L6.51333 12.2633C6.19833 12.5783 6 13.0217 6 13.5V21.0833C6 22.0517 6.78167 22.8333 7.75 22.8333H15.625C16.3483 22.8333 16.9667 22.39 17.235 21.7717L19.8717 15.6C19.9533 15.4017 20 15.18 20 14.9583V13.5ZM32.25 18.1667H24.375C23.6517 18.1667 23.0333 18.61 22.765 19.2283L20.1283 25.4C20.0467 25.5983 20 25.82 20 26.0417V27.5C20 28.1417 20.525 28.6667 21.1667 28.6667H27.21L26.44 32.3767L26.4167 32.6567C26.4167 33.0183 26.5683 33.345 26.8017 33.59L27.7233 34.5L33.4867 28.7367C33.8017 28.4217 34 27.9783 34 27.5V19.9167C34 18.9483 33.2183 18.1667 32.25 18.1667Z'
            fill='white'
            fill-opacity='0.87'
          />
        </g>
        <defs>
          <clipPath id='clip0_504_6480'>
            <rect
              width={28}
              height={28}
              fill='white'
              transform='translate(6 6.5)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: 'Classify Chatbot Reply',
    points: 2,
  },
  {
    icon: (
      <div className='absolute left-0 top-0 h-10 w-10 overflow-hidden rounded-md bg-[#f06c42]'>
        <div className='absolute left-1.5 top-[6.5px] flex items-center justify-start gap-2.5 overflow-hidden'>
          <svg
            width={28}
            height={29}
            viewBox='0 0 28 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-7 w-7 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <g clip-path='url(#clip0_504_6515)'>
              <path
                d='M22.1667 4H5.83333C4.55 4 3.5 5.05 3.5 6.33333V22.6667C3.5 23.95 4.55 25 5.83333 25H22.1667C23.45 25 24.5 23.95 24.5 22.6667V6.33333C24.5 5.05 23.45 4 22.1667 4ZM10.5 20.3333H8.16667V12.1667H10.5V20.3333ZM15.1667 20.3333H12.8333V8.66667H15.1667V20.3333ZM19.8333 20.3333H17.5V15.6667H19.8333V20.3333Z'
                fill='white'
                fill-opacity='0.87'
              />
            </g>
            <defs>
              <clipPath id='clip0_504_6515'>
                <rect
                  width={28}
                  height={28}
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ),
    title: 'Classify Prompter Reply',
    points: 2,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className='flex justify-end px-5 py-4'>
        <UserNav />
      </div>
      <div className='mt-14 flex gap-10 px-8'>
        <div className='flex-1'>
          <div className='relative flex flex-col items-start justify-start gap-4'>
            <p className='flex-shrink-0 flex-grow-0 text-center text-xl font-medium text-white/[0.87]'>
              Tasks
            </p>
            <div className='flex flex-wrap justify-start gap-10'>
              {tasks.map((task) => (
                <Link key={task.title} href={task?.url ?? '#'}>
                  <div className='relative flex w-[300px] flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-start gap-3 rounded-2xl bg-white/5 px-6 py-8'>
                    <div className='relative h-10 w-10 flex-shrink-0 flex-grow-0'>
                      {task.icon}
                    </div>
                    <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-center gap-1'>
                      <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5'>
                        <p className='flex-shrink-0 flex-grow-0 text-center text-base text-white/[0.87]'>
                          {task.title}
                        </p>
                      </div>
                      <p className='flex-shrink-0 flex-grow-0 text-center'>
                        <span className='flex-shrink-0 flex-grow-0 text-center text-sm font-medium text-[#efcb00]'>
                          +{task.points}
                        </span>
                        <span className='flex-shrink-0 flex-grow-0 text-center text-xs text-white/[0.87]'>
                          {' '}
                        </span>
                        <span className='flex-shrink-0 flex-grow-0 text-center text-xs text-white/60'>
                          points
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='relative flex flex-col items-start justify-start gap-4'>
            <div className='h-6 w-[115px] flex-shrink-0 flex-grow-0'>
              <p className='absolute left-0 top-0 text-center text-xl font-medium text-white/[0.87]'>
                Leaderboard
              </p>
            </div>
            <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4 rounded-2xl border border-white/[0.12] p-6'>
              <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6'>
                <div className='flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2 rounded-2xl'>
                  <div className='relative flex h-[461px] flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <div className='h-[25px] w-[246.25px] flex-shrink-0 flex-grow-0'>
                      <p className='absolute left-0 top-0 w-[35px] text-center text-xs text-[#65b7f1]'>
                        Total
                      </p>
                      <p className='absolute left-[191px] top-0 w-[55px] text-center text-xs text-white/[0.87]'>
                        Monthly
                      </p>
                      <p className='absolute left-[114.25px] top-0 w-[57px] text-center text-xs text-white/[0.87]'>
                        Weekly
                      </p>
                      <p className='absolute left-[45.25px] top-0 w-[57px] text-center text-xs text-white/[0.87]'>
                        Daily
                      </p>
                      <svg
                        width={247}
                        height={1}
                        viewBox='0 0 247 1'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='absolute left-[-0.25px] top-[24.5px]'
                        preserveAspectRatio='xMidYMid meet'
                      >
                        <line
                          x1='0.25'
                          y1='0.5'
                          x2='246.25'
                          y2='0.499978'
                          stroke='white'
                          strokeOpacity='0.12'
                        />
                      </svg>
                    </div>
                    <div className='w-60 flex-grow'>
                      <div className='absolute left-[3.13px] top-[41px] flex h-[420px] w-60 items-start justify-between'>
                        <div className='flex h-[420px] w-[238.5px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6'>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                1
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              101
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                2
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              100
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                3
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              99
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                4
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              98
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                5
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              97
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                6
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              96
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                7
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              95
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                8
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              94
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                9
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              93
                            </p>
                          </div>
                          <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                            <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-6 self-stretch'>
                              <p className='w-6 flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                                10
                              </p>
                              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2'>
                                <div className='relative h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                                  <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
                                  <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
                                </div>
                                <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                                  0xEB4...a53a
                                </p>
                              </div>
                            </div>
                            <p className='flex-shrink-0 flex-grow-0 text-center text-sm text-white/[0.87]'>
                              92
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
