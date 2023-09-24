/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client';

import type { ISuccessResult } from '@worldcoin/idkit';
import { CredentialType, IDKitWidget } from '@worldcoin/idkit';

import { usePollStore } from '@/store/pollStore';

export default function VotingStep() {
  const { setVoted } = usePollStore();

  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert(
      'Successfully verified with World ID! Your nullifier hash is: ' +
        result.nullifier_hash
    );
    setVoted(true);
  };

  const handleProof = async (result: ISuccessResult) => {
    // eslint-disable-next-line no-console
    console.log('Proof received from IDKit:\n', JSON.stringify(result)); // Log the proof from IDKit to the console for visibility
    // TODO: Send the proof to your backend for verification
  };

  return (
    <div>
      <div className='relative flex flex-col items-start justify-start gap-[60px]'>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
            Rank the options from the best to worst.
          </p>
          <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
            <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g clip-path='url(#clip0_508_8955)'>
                    <path
                      d='M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z'
                      fill='white'
                      fill-opacity='0.87'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_508_8955'>
                      <rect width={24} height={24} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Option A
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g clip-path='url(#clip0_508_8960)'>
                    <path
                      d='M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z'
                      fill='white'
                      fill-opacity='0.87'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_508_8960'>
                      <rect width={24} height={24} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Option B
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g clip-path='url(#clip0_508_8965)'>
                    <path
                      d='M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z'
                      fill='white'
                      fill-opacity='0.87'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_508_8965'>
                      <rect width={24} height={24} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Option C
                </p>
              </div>
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2 pl-1'>
              <div className='h-4 w-4 flex-shrink-0 flex-grow-0 rounded-sm border border-white/[0.87]' />
              <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
                All answers are factually incorrect and cannot be ranked.
              </p>
            </div>
          </div>
        </div>
        <svg
          width={520}
          height={1}
          viewBox='0 0 520 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='flex-shrink-0 flex-grow-0'
          preserveAspectRatio='xMidYMid meet'
        >
          <line
            y1='0.5'
            x2={520}
            y2='0.5'
            stroke='white'
            strokeOpacity='0.12'
          />
        </svg>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-base text-[#65b7f1]'>
            Option A
          </p>
          <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-8'>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Is the completion factual?
              </p>
              <div className='flex h-5 w-[272px] flex-shrink-0 flex-grow-0 justify-between'>
                <div className='flex h-5 w-[45px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>Yes</p>
                </div>
                <div className='flex h-5 w-10 items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>No</p>
                </div>
                <div className='flex h-5 w-[99px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='whitespace-nowrap text-left text-sm text-white/[0.87]'>
                    I don’t know
                  </p>
                </div>
              </div>
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                How relevant is the completion to the prompt?
              </p>
              <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                <div className='absolute left-[3.5px] top-[53.5px] h-0.5 w-[380px] bg-white/[0.08]' />
                <svg
                  width={11}
                  height={11}
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute left-[194.5px] top-[48.5px]'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <circle cx='5.5' cy='5.5' r='5.5' fill='#65B7F1' />
                </svg>
                <p className='absolute left-[196px] top-[69px] text-left text-xs text-white/[0.87]'>
                  3
                </p>
                <p className='absolute left-0 top-[69px] text-left text-xs text-white/[0.87]'>
                  1
                </p>
                <p className='absolute left-24 top-[69px] text-left text-xs text-white/[0.87]'>
                  2
                </p>
                <p className='absolute left-[379px] top-[69px] text-left text-xs text-white/[0.87]'>
                  5
                </p>
                <p className='absolute left-[286px] top-[69px] text-left text-xs text-white/[0.87]'>
                  4
                </p>
                <p className='absolute left-1 top-8 text-left text-xs text-white/60'>
                  Irrelevant
                </p>
                <p className='absolute left-[333px] top-8 text-left text-xs text-white/60'>
                  Relevant
                </p>
                <div className='absolute left-[98.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[3.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[381.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[288.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
              </div>
            </div>
          </div>
        </div>
        <svg
          width={520}
          height={1}
          viewBox='0 0 520 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='flex-shrink-0 flex-grow-0'
          preserveAspectRatio='xMidYMid meet'
        >
          <line
            y1='0.5'
            x2={520}
            y2='0.5'
            stroke='white'
            strokeOpacity='0.12'
          />
        </svg>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-base text-[#65b7f1]'>
            Option B
          </p>
          <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-8'>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Is the completion factual?
              </p>
              <div className='flex h-5 w-[272px] flex-shrink-0 flex-grow-0 justify-between'>
                <div className='flex h-5 w-[45px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>Yes</p>
                </div>
                <div className='flex h-5 w-10 items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>No</p>
                </div>
                <div className='flex h-5 w-[99px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='whitespace-nowrap text-left text-sm text-white/[0.87]'>
                    I don’t know
                  </p>
                </div>
              </div>
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                How relevant is the completion to the prompt?
              </p>
              <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                <div className='absolute left-[3.5px] top-[53.5px] h-0.5 w-[380px] bg-white/[0.08]' />
                <svg
                  width={11}
                  height={11}
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute left-[194.5px] top-[48.5px]'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <circle cx='5.5' cy='5.5' r='5.5' fill='#65B7F1' />
                </svg>
                <p className='absolute left-[196px] top-[69px] text-left text-xs text-white/[0.87]'>
                  3
                </p>
                <p className='absolute left-0 top-[69px] text-left text-xs text-white/[0.87]'>
                  1
                </p>
                <p className='absolute left-24 top-[69px] text-left text-xs text-white/[0.87]'>
                  2
                </p>
                <p className='absolute left-[379px] top-[69px] text-left text-xs text-white/[0.87]'>
                  5
                </p>
                <p className='absolute left-[286px] top-[69px] text-left text-xs text-white/[0.87]'>
                  4
                </p>
                <p className='absolute left-1 top-8 text-left text-xs text-white/60'>
                  Irrelevant
                </p>
                <p className='absolute left-[333px] top-8 text-left text-xs text-white/60'>
                  Relevant
                </p>
                <div className='absolute left-[98.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[3.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[381.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[288.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
              </div>
            </div>
          </div>
        </div>
        <svg
          width={520}
          height={1}
          viewBox='0 0 520 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='flex-shrink-0 flex-grow-0'
          preserveAspectRatio='xMidYMid meet'
        >
          <line
            y1='0.5'
            x2={520}
            y2='0.5'
            stroke='white'
            strokeOpacity='0.12'
          />
        </svg>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-base text-[#65b7f1]'>
            Option C
          </p>
          <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-8'>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Is the completion factual?
              </p>
              <div className='flex h-5 w-[272px] flex-shrink-0 flex-grow-0 justify-between'>
                <div className='flex h-5 w-[45px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>Yes</p>
                </div>
                <div className='flex h-5 w-10 items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='text-left text-sm text-white/[0.87]'>No</p>
                </div>
                <div className='flex h-5 w-[99px] items-center justify-center gap-2'>
                  <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid meet'
                  >
                    <circle
                      cx={6}
                      cy={6}
                      r='5.5'
                      stroke='white'
                      strokeOpacity='0.6'
                    />
                  </svg>
                  <p className='whitespace-nowrap text-left text-sm text-white/[0.87]'>
                    I don’t know
                  </p>
                </div>
              </div>
            </div>
            <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                How relevant is the completion to the prompt?
              </p>
              <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                <div className='absolute left-[3.5px] top-[53.5px] h-0.5 w-[380px] bg-white/[0.08]' />
                <svg
                  width={11}
                  height={11}
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute left-[194.5px] top-[48.5px]'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <circle cx='5.5' cy='5.5' r='5.5' fill='#65B7F1' />
                </svg>
                <p className='absolute left-[196px] top-[69px] text-left text-xs text-white/[0.87]'>
                  3
                </p>
                <p className='absolute left-0 top-[69px] text-left text-xs text-white/[0.87]'>
                  1
                </p>
                <p className='absolute left-24 top-[69px] text-left text-xs text-white/[0.87]'>
                  2
                </p>
                <p className='absolute left-[379px] top-[69px] text-left text-xs text-white/[0.87]'>
                  5
                </p>
                <p className='absolute left-[286px] top-[69px] text-left text-xs text-white/[0.87]'>
                  4
                </p>
                <p className='absolute left-1 top-8 text-left text-xs text-white/60'>
                  Irrelevant
                </p>
                <p className='absolute left-[333px] top-8 text-left text-xs text-white/60'>
                  Relevant
                </p>
                <div className='absolute left-[98.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[3.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[381.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
                <div className='absolute left-[288.5px] top-[48.5px] h-3.5 w-0.5 bg-white/[0.08]' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <IDKitWidget
        action={`question ${Date.now()}`}
        // action='TEST'
        app_id={process.env.NEXT_PUBLIC_WLD_APP_ID!}
        onSuccess={onSuccess}
        handleVerify={handleProof}
        credential_types={[CredentialType.Orb, CredentialType.Phone]}
        autoClose
      >
        {({ open }) => (
          <button
            className='relative mx-auto mt-20 flex w-fit cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#65b7f1] px-12 py-4'
            onClick={open}
          >
            <p className='flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-black'>
              Submit
            </p>
          </button>
        )}
      </IDKitWidget>

      <p className='mt-4 text-center'>
        <span className='text-center text-sm font-medium text-[#efcb00]'>
          +4
        </span>
        <span className='text-center text-xs text-white/[0.87]'>
          {' '}
          point for every submission
        </span>
      </p>
    </div>
  );
}
