/* eslint-disable no-console */
'use client';
import clsx from 'clsx';
import { useState } from 'react';

import CreateVerifiedCredential from '@/app/settings/polygon-id/steps/CreateVerifiedCredential';
import GenerateQrCode from '@/app/settings/polygon-id/steps/GenerateQrCode';
import GenerateZkpProofStep from '@/app/settings/polygon-id/steps/GenerateZkpProofStep';
import KycServerStep from '@/app/settings/polygon-id/steps/KycServerStep';
import VerifyZkpProof from '@/app/settings/polygon-id/steps/VerifyZkpProof';

const qrCodeSteps = [
  {
    title: 'KYC Server',
    description: '',
    delay: 3000,
    content: <KycServerStep />,
    buttonTxt: 'Next',
  },
  {
    title: 'Generate zkp proof',
    description: '',
    content: <GenerateZkpProofStep />,
    buttonTxt: 'Next',
  },
  {
    title: 'Verify zkp proof',
    description: '',
    buttonTxt: 'Next',
    content: <VerifyZkpProof />,
  },
  {
    title: 'Create a verified credential',
    description:
      'Your kyc information has been zkp verified and it is authentic, would out like to create a verified credential using the flowing verified information',
    content: <CreateVerifiedCredential />,
    buttonTxt: 'Create',
  },
  {
    title: 'Generate a QR Code',
    description: '',
    buttonTxt: 'Open QR Code Link',
    content: <GenerateQrCode />,
  },
];

export default function GenerateQrCodeStep() {
  const [qrCodeStepIndex, setQrCodeStepIndex] = useState(0);

  let stepStyleWidth = 0;
  if (qrCodeStepIndex === 0) {
    stepStyleWidth = 5;
  } else if (qrCodeStepIndex === qrCodeSteps.length - 1) {
    stepStyleWidth = 100;
  } else {
    stepStyleWidth = qrCodeStepIndex * 20 + 10;
  }

  return (
    <div>
      <div className='mx-auto rounded-lg border border-gray-200 bg-white p-4 px-10 text-left shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
        <div className='mt-6' aria-hidden='true'>
          <div className='overflow-hidden rounded-full bg-gray-700'>
            <div
              className='h-2 rounded-full bg-blue-500'
              style={{ width: `${stepStyleWidth}%` }}
            />
          </div>
          <div className='mt-6 hidden grid-cols-5 text-sm font-medium text-gray-500 sm:grid'>
            {qrCodeSteps.map((step, i) => {
              return (
                <div
                  key={step.title}
                  className={clsx(
                    {
                      'text-center': !(i === 0 || i === qrCodeSteps.length - 1),
                    },
                    { 'text-right': i === qrCodeSteps.length - 1 },
                    { 'text-blue-500': qrCodeStepIndex >= i }
                  )}
                >
                  {step.title}{' '}
                  {/* {qrCodeStepIndex === i &&
                    qrCodeStepIndex !== qrCodeSteps.length - 1 && (
                      <svg
                        aria-hidden='true'
                        role='status'
                        className='ml-1 mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                          fill='currentColor'
                        />
                        <path
                          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                          fill='#1C64F2'
                        />
                      </svg>
                    )} */}
                </div>
              );
            })}
          </div>
        </div>
        <div className='mt-10 text-center'>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            {qrCodeSteps[qrCodeStepIndex].title}
          </h5>
          <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            {qrCodeSteps[qrCodeStepIndex].description}{' '}
          </p>
          <div>{qrCodeSteps[qrCodeStepIndex].content}</div>

          {qrCodeSteps.length - 1 > qrCodeStepIndex && (
            <button
              type='button'
              className='mb-2 mr-2 mt-8 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => setQrCodeStepIndex((i) => i + 1)}
            >
              {qrCodeSteps[qrCodeStepIndex].buttonTxt}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}