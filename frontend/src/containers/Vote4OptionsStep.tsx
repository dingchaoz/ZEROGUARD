export default function Vote4OptionsStep() {
  return (
    <div className='relative w-[520px]'>
      <div className='flex w-[520px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-12'>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch'>
          <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-between self-stretch rounded-br-md rounded-tr-md bg-white/[0.07] pr-4'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-2.5 border-b-0 border-l-[3px] border-r-0 border-t-0 border-[#ecbd3b] bg-white/[0.12] p-3'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white/[0.87]'>
                  #1
                </p>
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Option A
              </p>
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
              <g clip-path='url(#clip0_508_8911)'>
                <path
                  d='M18 14.0002L16.59 15.4102L12 10.8302L7.41 15.4102L6 14.0002L12 8.00016L18 14.0002Z'
                  fill='white'
                  fill-opacity='0.87'
                />
              </g>
              <defs>
                <clipPath id='clip0_508_8911'>
                  <rect
                    width={24}
                    height={24}
                    transform='matrix(0 -1 -1 0 24 24)'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className='w-[520px] flex-shrink-0 flex-grow-0 self-stretch text-left text-base text-white/80'>
            To ensure that reinforcement learning agents generalize effectively
            from limited human feedback to unseen scenarios, it's crucial to
            expose them to a wide variety of training data. This diversity helps
            agents learn robust and adaptable policies that can handle different
            situations. By including a broad range of scenarios, environments,
            and perturbations in the training data, agents are more likely to
            develop a deeper understanding of underlying dynamics, leading to
            better generalization when encountering new and unanticipated
            scenarios.
          </p>
        </div>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch'>
          <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-between self-stretch rounded-br-md rounded-tr-md bg-white/[0.07] pr-4'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-2.5 border-b-0 border-l-[3px] border-r-0 border-t-0 border-[#ecbd3b] bg-white/[0.12] p-3'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white/[0.87]'>
                  #2
                </p>
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Option B
              </p>
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
              <g clip-path='url(#clip0_508_8921)'>
                <path
                  d='M18 14.0002L16.59 15.4102L12 10.8302L7.41 15.4102L6 14.0002L12 8.00016L18 14.0002Z'
                  fill='white'
                  fill-opacity='0.87'
                />
              </g>
              <defs>
                <clipPath id='clip0_508_8921'>
                  <rect
                    width={24}
                    height={24}
                    transform='matrix(0 -1 -1 0 24 24)'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className='w-[520px] flex-shrink-0 flex-grow-0 self-stretch text-left text-base text-white/80'>
            Generalization in reinforcement learning can be improved through the
            use of regularization techniques. These methods help prevent
            overfitting to the training data, which is essential when the human
            feedback is limited. Techniques like dropout, weight decay, and
            reward clipping add constraints to the learning process, encouraging
            agents to learn more broadly applicable policies rather than
            memorizing specific experiences. This ensures that the agents'
            behavior remains stable and effective when they encounter novel
            situations.
          </p>
        </div>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-6 self-stretch'>
          <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-between self-stretch rounded-br-md rounded-tr-md bg-white/[0.07] pr-4'>
            <div className='relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-4'>
              <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-2.5 border-b-0 border-l-[3px] border-r-0 border-t-0 border-[#ecbd3b] bg-white/[0.12] p-3'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white/[0.87]'>
                  #3
                </p>
              </div>
              <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                Option C
              </p>
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
              <g clip-path='url(#clip0_508_8931)'>
                <path
                  d='M18 14.0002L16.59 15.4102L12 10.8302L7.41 15.4102L6 14.0002L12 8.00016L18 14.0002Z'
                  fill='white'
                  fill-opacity='0.87'
                />
              </g>
              <defs>
                <clipPath id='clip0_508_8931'>
                  <rect
                    width={24}
                    height={24}
                    transform='matrix(0 -1 -1 0 24 24)'
                    fill='white'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className='w-[520px] flex-shrink-0 flex-grow-0 self-stretch text-left text-base text-white/80'>
            One effective strategy for improving generalization is transfer
            learning. By pre-training reinforcement learning agents on related
            tasks or environments with richer human feedback or simulated
            experiences, agents can acquire valuable knowledge that can be
            applied to the target scenario with limited feedback. Transfer
            learning enables agents to bootstrap from prior learning, adapting
            and fine-tuning their policies more efficiently when faced with
            previously unseen situations. This approach promotes efficient
            generalization while reducing the need for extensive human feedback
            in each specific scenario.
          </p>
        </div>
      </div>
      ;
    </div>
  );
}
