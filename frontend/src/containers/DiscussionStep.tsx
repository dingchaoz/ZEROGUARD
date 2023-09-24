export default function DiscussionStep() {
  return (
    <div>
      <div className='flex w-[509px] flex-col items-start justify-start gap-2.5 rounded-md border border-white/[0.12] px-2.5 py-2'>
        <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2'>
          <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
            <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
            <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
          </div>
          <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
            Add a comment...
          </p>
        </div>
      </div>
      <div className='mt-4 flex justify-between'>
        <p className='text-left text-sm text-white/[0.87]'>0 responses</p>
        <div className='relative flex items-center justify-start gap-1'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/[0.87]'>
            All
          </p>
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <g clip-path='url(#clip0_320_7897)'>
              <path
                d='M18 9.99984L16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_320_7897'>
                <rect
                  width={24}
                  height={24}
                  fill='white'
                  transform='matrix(0 1 -1 0 24 0)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className='mt-20 flex justify-center'>
        <svg
          width={96}
          height={96}
          viewBox='0 0 96 96'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='relative h-24 w-24'
          preserveAspectRatio='none'
        >
          <g clip-path='url(#clip0_320_7894)'>
            <path
              d='M16 16H80V64H20.68L16 68.68V16ZM16 8C11.6 8 8.04 11.6 8.04 16L8 88L24 72H80C84.4 72 88 68.4 88 64V16C88 11.6 84.4 8 80 8H16ZM24 48H56V56H24V48ZM24 36H72V44H24V36ZM24 24H72V32H24V24Z'
              fill='white'
              fill-opacity='0.12'
            />
          </g>
          <defs>
            <clipPath id='clip0_320_7894'>
              <rect width={96} height={96} fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
