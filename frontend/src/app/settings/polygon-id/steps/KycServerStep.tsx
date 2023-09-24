'use client';
import { Spinner } from 'flowbite-react';
import { useTimeout } from 'react-use';

export default function KycServerStep() {
  const [isReady] = useTimeout(2000);

  if (!isReady()) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
          Fetching response from kyc server
        </p>
        <Spinner aria-label='Extra large spinner example' size='xl' />
      </div>
    );
  }

  return (
    <div>
      <p className='mx-auto mb-5 mt-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
        Select the KYC fields for which you want to generate a ZKP proof.
      </p>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div className='flex w-full max-w-xl items-center rounded border border-gray-200 pl-4 dark:border-gray-700'>
          <input
            id='bordered-checkbox-1'
            defaultChecked
            type='checkbox'
            name='bordered-checkbox'
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='bordered-checkbox-1'
            className='ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            <div className='flex items-center px-4'>
              <span className='block text-left text-sm font-medium text-gray-900 dark:text-white'>
                Username:
              </span>
              <span className='ml-2 block text-left text-sm font-medium text-gray-900 dark:text-white'>
                Joe
              </span>
            </div>
          </label>
        </div>
        <div className='flex w-full max-w-xl items-center rounded border border-gray-200 pl-4 dark:border-gray-700'>
          <input
            id='bordered-checkbox-2'
            defaultChecked
            type='checkbox'
            name='bordered-checkbox'
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='bordered-checkbox-2'
            className='ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            <div className='flex items-center px-4'>
              <span className='block text-left text-sm font-medium text-gray-900 dark:text-white'>
                Date of birth:
              </span>
              <span className='ml-2 block text-left text-sm font-medium text-gray-900 dark:text-white'>
                2000/01/01
              </span>
            </div>
          </label>
        </div>
        <div className='flex w-full max-w-xl items-center rounded border border-gray-200 pl-4 dark:border-gray-700'>
          <input
            id='bordered-checkbox-3'
            defaultChecked
            type='checkbox'
            name='bordered-checkbox'
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='bordered-checkbox-3'
            className='ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            <div className='flex items-center px-4'>
              <span className='block text-left text-sm font-medium text-gray-900 dark:text-white'>
                Gender:
              </span>
              <span className='ml-2 block text-left text-sm font-medium text-gray-900 dark:text-white'>
                male
              </span>
            </div>
          </label>
        </div>
        <div className='flex w-full max-w-xl items-center rounded border border-gray-200 pl-4 dark:border-gray-700'>
          <input
            id='bordered-checkbox-4'
            defaultChecked
            type='checkbox'
            name='bordered-checkbox'
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor='bordered-checkbox-4'
            className='ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            <div className='flex items-center px-4'>
              <span className='block text-left text-sm font-medium text-gray-900 dark:text-white'>
                Compliant status:
              </span>
              <span className='ml-2 block text-left text-sm font-medium text-gray-900 dark:text-white'>
                compliant
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
