export default function CreateVerifiedCredential() {
  return (
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
    </div>
  );
}
