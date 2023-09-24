import { Spinner } from 'flowbite-react';
import { useTimeout } from 'react-use';

export default function VerifyZkpProof() {
  const [isReady] = useTimeout(2000);

  if (!isReady()) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
          Perform the verification of a zero-knowledge proof (zkp).
        </p>
        <Spinner aria-label='Extra large spinner example' size='xl' />
      </div>
    );
  }

  return (
    <p className='mx-auto mt-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
      Verification successful.
    </p>
  );
}
