'use client';
import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GenerateQrCode() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const callApi = async () => {
      setIsLoading(true);
      const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/members/credentials`,
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/credential`,
        { method: 'POST' }
      );
      const data = await res.json();
      setQrUrl(data.qrUrl);
      setIsLoading(false);
    };
    callApi();
  }, []);

  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
          Generating QR code link.
        </p>
        <Spinner aria-label='Extra large spinner example' size='xl' />
      </div>
    );
  }

  return (
    <div>
      <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
        Successfully generated a QR code. Please click the link and use the
        Polygon ID app to scan the QR code.
      </p>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <button
            type='button'
            className='mb-4 mr-2 mt-8 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => {
              window.open(qrUrl);
            }}
          >
            Open QR Code Link
          </button>
          <button
            type='button'
            className='mb-2 mr-2 rounded-full bg-blue-700 px-20 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => {
              router.push('/tasks');
            }}
          >
            Continue to Vote
          </button>
        </div>
      </div>
    </div>
  );
}
