'use client';

export default function ProfilePage() {
  return (
    <div className='pt-20'>
      <div className='mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
        <div className='flex flex-col items-center pb-10 pt-6'>
          <div className='mb-3 h-24 w-24 rounded-full bg-slate-400 shadow-lg' />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Bonnie Green
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Visual Designer
          </span>
          <div className='mt-4 flex space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Add friend
            </a>
            <a
              href='#'
              className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
