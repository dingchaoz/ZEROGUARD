/* eslint-disable @next/next/no-img-element */
export default function VotedStep() {
  return (
    <div>
      <div className='flex items-end justify-between'>
        <div>
          <div className='relative flex flex-col items-start justify-start gap-4'>
            <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white'>
              Your answer
            </p>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2'>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-md bg-white/[0.08] px-3 py-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option A
                </p>
              </div>
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
                  d='M6 3.33366L10.6667 8.00033L6 12.667'
                  stroke='white'
                  strokeOpacity='0.87'
                  stroke-width={2}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-md bg-white/[0.08] px-3 py-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option B
                </p>
              </div>
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
                  d='M6 3.33366L10.6667 8.00033L6 12.667'
                  stroke='white'
                  strokeOpacity='0.87'
                  stroke-width={2}
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-md bg-white/[0.08] px-3 py-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option C
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative -top-1'>
          <p className='text-left text-sm'>
            <span className='text-left text-sm font-medium text-[#ecbd3b]'>
              +2
            </span>
            <span className='text-left text-sm text-[#6dc2ff]'> </span>
            <span className='text-left text-sm text-white'>extra points!</span>
          </p>
        </div>
      </div>
      <div>
        <div className='relative mt-12 flex flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white'>
            Results
          </p>
          <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-[25px]'>
            <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-end gap-8 rounded-2xl bg-white/[0.08] p-6'>
                <div className='flex flex-shrink-0 flex-grow-0 items-end justify-start gap-8'>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Rank
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      1
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      2
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      3
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Choice
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Option A
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Option B
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Option C
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      Times #1
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      2
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      1
                    </p>
                    <p className='w-[8.67px] flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      0
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      Times #2
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      1
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      2
                    </p>
                    <p className='w-[8.67px] flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      0
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Times #3
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      0
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      0
                    </p>
                    <p className='w-[8.67px] flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                      3
                    </p>
                  </div>
                  <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      Score
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      8
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      7
                    </p>
                    <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                      3
                    </p>
                  </div>
                </div>
                <p className='w-[388px] flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                  *All answers are factually incorrect and cannot be ranked: 0
                </p>
              </div>
            </div>
            <div className='h-[228px] w-full'>
              <img
                src='/images/chart.png'
                alt='chart'
                className='h-[228px] w-full rounded-2xl object-cover'
              />
            </div>

            <div className='flex w-[516px] flex-shrink-0 flex-grow-0 items-start justify-between rounded-2xl bg-white/[0.08] p-6'>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Metric
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Factual
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Relevancy
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option A
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option B
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-4'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  Option C
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
