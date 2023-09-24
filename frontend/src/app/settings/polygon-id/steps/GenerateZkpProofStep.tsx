import { Spinner } from 'flowbite-react';
import { useTimeout } from 'react-use';

import proofJson from './proof.json';

export default function GenerateZkpProofStep() {
  const [isReady] = useTimeout(2000);
  if (!isReady()) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <p className='mx-auto mb-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
          Generating a zkp proof using tlsnotary
        </p>
        <Spinner aria-label='Extra large spinner example' size='xl' />
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-3xl'>
      <div className=' h-72 overflow-auto rounded bg-slate-900 p-4'>
        <p className='text-left text-blue-500'>
          {JSON.stringify(proofJson, null, '\t')}
        </p>
      </div>
    </div>
  );
}
