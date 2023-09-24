'use client';

import { useState } from 'react';

import GenerateQrCodeStep from '@/app/settings/polygon-id/GenerateQrCodeStep';

export default function PolygonIdPage() {
  const [step, setStep] = useState(0);

  return (
    <div className='p-10'>
      {step === 0 && (
        <div className='mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            Create Credentials
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            Create a verifiable certificate with a Polygon ID.
          </p>
          <div className='items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0'></div>
          <button
            type='button'
            className='mb-2 mr-2 mt-8 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setStep(1)}
          >
            Continue
          </button>
        </div>
      )}
      {step === 1 && (
        <div className='mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            Connect to KYC server
          </h5>
          <div className='mx-auto mt-8 max-w-xl text-left'>
            {/* <p className='mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
              Create a verifiable certificate with a Polygon ID.
            </p> */}
            <div>
              <label
                htmlFor='url'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Please enter your KYC server URL link.
              </label>
              <input
                type='text'
                id='url'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='https://tokenbricks/api/kyc/...'
                required
              />
            </div>
          </div>

          <div className='items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0'></div>
          <button
            type='button'
            className='mb-2 mr-2 mt-12 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setStep(2)}
          >
            Continue
          </button>
        </div>
      )}
      {step === 2 && <GenerateQrCodeStep />}
      {step === 3 && (
        <div className='mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            Authorize KYC Data
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            Authorize the following KYC data for use by the Polygon ID.
          </p>
          <div className='items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0'></div>
          <div className=' px-20 pt-6'>
            <div className='mb-4 grid gap-4 sm:grid-cols-1'>
              <div>
                <label
                  htmlFor='username'
                  className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'
                >
                  Username
                </label>
                <input
                  disabled
                  type='text'
                  name='username'
                  id='username'
                  className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  placeholder='Joe'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'
                >
                  Date of birth
                </label>
                <input
                  disabled
                  type='email'
                  name='email'
                  id='email'
                  className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  placeholder='2000/01/01'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'
                >
                  Gender
                </label>
                <input
                  disabled
                  name='password'
                  id='password'
                  className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  placeholder='male'
                  required
                />
              </div>{' '}
              <div>
                <label
                  htmlFor='confirm-password'
                  className='mb-2 block text-left text-sm font-medium text-gray-900 dark:text-white'
                >
                  Compliant status
                </label>
                <input
                  disabled
                  className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  placeholder='compliant'
                  required
                />
              </div>
            </div>
          </div>
          <button
            type='button'
            className='mb-2 mr-2 mt-8 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setStep(2)}
          >
            Authorize
          </button>
        </div>
      )}
    </div>
  );
}
