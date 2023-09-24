/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
'use client';

import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useContractRead, useContractWrite } from 'wagmi';

import { CommitRevealABI } from '@/abi/CommitRevealABI';

export default function VotingWithContractStep() {
  // const { setVotedWithContract } = usePollStore();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const props = { openModal, setOpenModal, email, setEmail };
  const [isMockLoading, setIsMockLoading] = useState(false);
  const [step, setStep] = useState<
    'setPassword' | 'verify' | 'verified' | 'group'
  >('group');

  const { data } = useContractRead({
    address: process.env.NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS as any,
    abi: CommitRevealABI,
    functionName: 'getHash',
    args: ['4', '12345'],
  });

  const {
    writeAsync,
    isLoading: isContractLoading,
    isSuccess,
  } = useContractWrite({
    address: process.env.NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS as any,
    abi: CommitRevealABI,
    functionName: 'commitVote',
    args: [data],
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      setStep('verify');
      setIsMockLoading(true);
      timer = setTimeout(() => {
        setIsMockLoading(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  const handleSubmit = async () => {
    console.log('submit');
    console.log(
      'process.env.NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS',
      process.env.NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS
    );
    console.log('data', data);
    await writeAsync();
    // setVotedWithContract(true);
  };

  let modalContent;
  if (isContractLoading || isMockLoading) {
    modalContent = (
      <div className='flex flex-col items-center justify-center py-10'>
        <Spinner aria-label='Extra large spinner example' size='xl' />
        <p className='mx-auto mt-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
          {step === 'verify' && 'Generating zkp proof'}
          {step === 'verified' && 'Verification in progress.'}
          {step === 'group' && 'Joining the group.'}
        </p>
      </div>
    );
  } else {
    switch (step) {
      case 'group':
        modalContent = (
          <>
            <div>
              <div className='mb-2 block'>
                <Label
                  htmlFor='group'
                  value='Here is your semaphore identity: 9332663527862709610616009715800254142772436825222910251631161
                Join the alignment action group: 1'
                />
              </div>
            </div>
            <Button
              className='ml-auto'
              onClick={() => {
                setIsMockLoading(true);
                setTimeout(() => {
                  setIsMockLoading(false);
                  setStep('setPassword');
                }, 2000);
              }}
            >
              Continue
            </Button>
          </>
        );
        break;
      case 'setPassword':
        modalContent = (
          <>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password' value='Input a voting salt' />
              </div>
              <TextInput id='password' type='password' required />
            </div>
            <Button className='ml-auto' onClick={handleSubmit}>
              Confirm
            </Button>
          </>
        );
        break;
      case 'verify':
        modalContent = (
          <div>
            <p className='text-slate-100'>ZKP proof has been generated.</p>
            <div className='mt-4 overflow-auto rounded bg-slate-800 p-4'>
              <code className=' whitespace-normal text-xs text-slate-300'>
                {`{
merkleTreeRoot: '1333655691524148443286467111991503804132753242659507761779616352728945493655',
nullifierHash: '11703462062340478073033289578086784600760824971435292972037465337686619480973',
signal: '0',
externalNullifier: '1333655691524148443286467111991503804132753242659507761779616352728945493655',
proof: [
'6109482141503456189171990000798878637693994639151745339217243106399716627657',
'11957906922266333721514549588637100991150456149953170461916746771771873379199',
'4996169550739392056702687914095168992283775980607118990941216098783537914343',
'13034016044046332574419872408221328478229868347708787233891709094798489896148',
'19589098060183620756410596473928327229103208468366813760666098701409041058399',
'5357290623914042708848956240316362064325729925446729809945488402499949905986',
'15957531883613811560492868943497291796546986388906713464256988710860435883331',
'11441297280631913020828074820186637163235686112122566765496215786589789946858'
]
}`}
              </code>
            </div>
            <Button
              className='ml-auto mt-6'
              // onClick={() => props.setOpenModal(undefined)}
              onClick={() => {
                setIsMockLoading(true);
                setStep('verified');
                setTimeout(() => {
                  setIsMockLoading(false);
                }, 2000);
              }}
            >
              Verify
            </Button>
          </div>
        );
        break;
      case 'verified':
        modalContent = (
          <div>
            <p className='text-lg text-slate-100'>Verification successful.</p>
            <Button
              className='ml-auto mt-6'
              onClick={() => props.setOpenModal(undefined)}
            >
              Close
            </Button>
          </div>
        );
    }
  }

  return (
    <>
      <Modal
        show={props.openModal === 'form-elements'}
        // size='xl'
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className='pl-6 pt-4'>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
            Cast your vote
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6'>{modalContent}</div>
        </Modal.Body>
      </Modal>
      <div>
        <div className='relative flex flex-col items-start justify-start gap-[40px]'>
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
              <div className='flex items-center'>
                <input
                  id='default-checkbox'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label
                  htmlFor='default-checkbox'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  All answers are factually incorrect and cannot be ranked.
                </label>
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
                <div>
                  <div className='flex gap-10'>
                    <div className='flex items-center'>
                      <input
                        id='default-radio-1'
                        type='radio'
                        name='default-radio'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default-radio-1'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Yes
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default-radio-2'
                        type='radio'
                        name='default-radio'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default-radio-2'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        No
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default-radio-3'
                        type='radio'
                        name='default-radio'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default-radio-3'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        I don’t know
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  How relevant is the completion to the prompt?
                </p>
                <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                  <div>
                    <input
                      id='steps-range'
                      type='range'
                      min={0}
                      max={4}
                      defaultValue='2'
                      step='1'
                      className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
                    />
                  </div>
                  <div className='mt-2 flex w-full justify-between px-1 text-xs text-white'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
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
                <div>
                  <div className='flex gap-10'>
                    <div className='flex items-center'>
                      <input
                        id='default2-radio-1'
                        type='radio'
                        name='default-radio2'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default2-radio-1'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Yes
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default2-radio-2'
                        type='radio'
                        name='default-radio2'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default2-radio-2'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        No
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default2-radio-3'
                        type='radio'
                        name='default-radio2'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default2-radio-3'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        I don’t know
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  How relevant is the completion to the prompt?
                </p>
                <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                  <div>
                    <input
                      id='steps-range'
                      type='range'
                      min={0}
                      max={4}
                      defaultValue='2'
                      step='1'
                      className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
                    />
                  </div>
                  <div className='mt-2 flex w-full justify-between px-1 text-xs text-white'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
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
                <div>
                  <div className='flex gap-10'>
                    <div className='flex items-center'>
                      <input
                        id='default3-radio-1'
                        type='radio'
                        name='default-radio3'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default3-radio-1'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Yes
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default3-radio-2'
                        type='radio'
                        name='default-radio3'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default3-radio-2'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        No
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='default3-radio-3'
                        type='radio'
                        name='default-radio3'
                        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                      />
                      <label
                        htmlFor='default3-radio-3'
                        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        I don’t know
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  How relevant is the completion to the prompt?
                </p>
                <div className='h-[53px] w-[386px] flex-shrink-0 flex-grow-0'>
                  <div>
                    <input
                      id='steps-range'
                      type='range'
                      min={0}
                      max={4}
                      defaultValue='2'
                      step='1'
                      className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
                    />
                  </div>
                  <div className='mt-2 flex w-full justify-between px-1 text-xs text-white'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className='relative mx-auto mt-20 flex w-fit cursor-pointer items-center justify-center gap-2.5 rounded-[100px] bg-[#65b7f1] px-12 py-4'
          onClick={() => props.setOpenModal('form-elements')}
        >
          <p className='flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-black'>
            Submit
          </p>
        </button>
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
    </>
  );
}
