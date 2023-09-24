import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useContractWrite } from 'wagmi';

import { CommitRevealABI } from '@/abi/CommitRevealABI';

export default function DetailStep() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  const { data, writeAsync, isLoading } = useContractWrite({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    address: process.env.NEXT_PUBLIC_VOTING_CONTRACT_ADDRESS as any,
    abi: CommitRevealABI,
    functionName: 'revealVote',
    args: [4, 12345],
  });
  // eslint-disable-next-line no-console
  console.log('data', data);
  const handleRevealVote = async () => {
    await writeAsync();
    setOpenModal(undefined);
    window.open(`https://sepolia.etherscan.io/tx/${data?.hash}`);
  };

  return (
    <div className='flex flex-col items-start justify-start gap-12'>
      <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white'>
            Information
          </p>
        </div>
        <div className='flex h-[90px] w-[305px] flex-shrink-0 flex-grow-0 flex-col gap-2'>
          <div className='flex w-[304.64px] items-start justify-between'>
            <p className='w-[100.65px] flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              Start date
            </p>
            <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              Aug 24, 2024 2:38 AM
            </p>
          </div>
          <div className='flex w-[305px] items-start justify-between'>
            <p className='w-[89.64px] flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              End date
            </p>
            <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              Sep 24, 2024 2:38 AM
            </p>
          </div>
          <div className='flex w-[304.5px] items-start justify-between'>
            <p className='w-[155.7px] flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              Voting Strategy
            </p>
            <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
              Wallet-based
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
        <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
            <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white'>
              Voters (3)
            </p>
          </div>
        </div>
        <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4'>
          <div className='flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2 self-stretch'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#fa09e5]' />
                <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#4bc8ab]' />
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                0x0c2...368g
              </p>
            </div>
          </div>
          <div className='flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2 self-stretch'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#e5f8a1]' />
                <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#358daa]' />
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                0x382...8b3e
              </p>
            </div>
          </div>
          <div className='flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2 self-stretch'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
                <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#aa05e9]' />
                <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#126adb]' />
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white'>
                0x382...8b3e
              </p>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <Button onClick={() => props.setOpenModal('form-elements')}>
            Reveal Vote
          </Button>
          <Modal
            show={props.openModal === 'form-elements'}
            size='md'
            popup
            onClose={() => props.setOpenModal(undefined)}
          >
            <Modal.Header className='pl-6 pt-4'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Reveal Vote
              </h3>
            </Modal.Header>
            <Modal.Body>
              <div className='space-y-6'>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='password' value='Vote' />
                  </div>
                  <TextInput id='salt' required />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='salt' value='salt' />
                  </div>
                  <TextInput id='salt' type='password' required />
                </div>
                <Button
                  className='ml-auto'
                  disabled={isLoading}
                  onClick={handleRevealVote}
                >
                  {isLoading && (
                    <Spinner
                      className='mr-3'
                      aria-label='Spinner button example'
                      size='sm'
                    />
                  )}

                  <span>Confirm</span>
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
