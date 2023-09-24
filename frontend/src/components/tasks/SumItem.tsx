import clsx from 'clsx';

interface SumItemProps {
  title: string;
  subTitle: string;
  isVoted?: boolean;
  isOpen?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export default function SumItem({
  title,
  subTitle,
  isVoted,
  isOpen,
  active,
  onClick,
}: SumItemProps) {
  return (
    <div
      className={clsx(
        'relative flex cursor-pointer items-center justify-between rounded-2xl border border-transparent px-4 py-6',
        { '!border-sky-500 bg-white/5': active }
      )}
      onClick={onClick}
    >
      <div className='relative flex w-[540px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2'>
        <p className='w-[540px] flex-shrink-0 flex-grow-0 self-stretch text-left text-base text-white/[0.87]'>
          {title}
        </p>
        <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-sm text-white/60'>
            {subTitle}
          </p>
          {isOpen ? (
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-[#0c9b66] px-2.5 py-1'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                Open
              </p>
            </div>
          ) : (
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-white/[0.16] px-2.5 py-1'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                Closed
              </p>
            </div>
          )}

          {isVoted && (
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded-[100px] bg-[#0d79cd] px-2.5 py-1'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/[0.87]'>
                Voted
              </p>
            </div>
          )}
        </div>
      </div>
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative h-6 w-6 flex-shrink-0 flex-grow-0'
        preserveAspectRatio='xMidYMid meet'
      >
        <g clip-path='url(#clip0_508_7522)'>
          <path
            d='M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z'
            fill='white'
            fill-opacity='0.87'
          />
        </g>
        <defs>
          <clipPath id='clip0_508_7522'>
            <rect width={24} height={24} fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
