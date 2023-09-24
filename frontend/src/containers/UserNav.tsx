import UserButton from '@/containers/UserButton';

export default function UserNav() {
  return (
    <div className='relative flex items-center justify-start gap-3'>
      <div className='h-8 w-[85px] flex-shrink-0 flex-grow-0'>
        <div className='absolute left-0 top-0 flex items-center justify-center gap-2.5 rounded-md border border-white/[0.12] px-3 py-1.5'>
          <p className='flex-shrink-0 flex-grow-0 text-right text-sm text-white'>
            40 points
          </p>
        </div>
      </div>
      {/* <svg
        width={32}
        height={32}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative h-8 w-8 flex-shrink-0 flex-grow-0'
        preserveAspectRatio='xMidYMid meet'
      >
        <g clip-path='url(#clip0_324_72)'>
          <path
            d='M16.0002 29.333C17.4668 29.333 18.6668 28.133 18.6668 26.6663H13.3335C13.3335 28.133 14.5335 29.333 16.0002 29.333ZM24.0002 21.333V14.6663C24.0002 10.573 21.8268 7.14634 18.0002 6.23967V5.33301C18.0002 4.22634 17.1068 3.33301 16.0002 3.33301C14.8935 3.33301 14.0002 4.22634 14.0002 5.33301V6.23967C10.1868 7.14634 8.00016 10.5597 8.00016 14.6663V21.333L5.3335 23.9997V25.333H26.6668V23.9997L24.0002 21.333ZM21.3335 22.6663H10.6668V14.6663C10.6668 11.3597 12.6802 8.66634 16.0002 8.66634C19.3202 8.66634 21.3335 11.3597 21.3335 14.6663V22.6663Z'
            fill='white'
            fill-opacity='0.87'
          />
        </g>
        <defs>
          <clipPath id='clip0_324_72'>
            <rect width={32} height={32} fill='white' />
          </clipPath>
        </defs>
      </svg> */}
      <div>
        <UserButton />
      </div>
      {/* <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl bg-white'>
        <div className='absolute left-[-1px] top-[-1px] h-6 w-3 bg-[#d1e5ee]' />
        <div className='absolute left-[-1px] top-[11px] h-3 w-6 bg-[#a8c5da]' />
      </div> */}
    </div>
  );
}
