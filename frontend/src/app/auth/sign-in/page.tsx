/* eslint-disable @next/next/no-img-element */
'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import PolygonIDVerifier from '@/containers/PolygonIDVerifier';

import { usePolygonIdLoginStore } from '@/store/polygonIdLogin';

export default function SignInPage() {
  const { isConnected } = useAccount();
  const { status } = useSession();
  const router = useRouter();
  const { open } = useWeb3Modal();
  const { isLogin: isLoginPolygonId, setIsLogin: setIsLoginPolygonId } =
    usePolygonIdLoginStore();

  useEffect(() => {
    if (status === 'authenticated' || isConnected || isLoginPolygonId) {
      router.push('/settings/polygon-id');
    }
  }, [status, isConnected, router, isLoginPolygonId]);

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        <a
          href='#'
          className='mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-red-300'
        >
          <img
            className='mr-2 h-8 w-8'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
          />
          ZKAI Red Team
        </a>
        <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
              Sign in to your account
            </h1>
            <div className='space-y-4 md:space-y-6'>
              <Link
                className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 block w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                href='/api/auth/signin'
                onClick={(e) => {
                  e.preventDefault();
                  signIn('worldcoin'); // when worldcoin is the only provider
                  // signIn() // when there are multiple providers
                }}
              >
                Sign in with Worldcoin
              </Link>
              <button
                className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 block w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                onClick={() => {
                  open();
                }}
              >
                Sign in with Wallet Connect
              </button>
              <PolygonIDVerifier
                publicServerURL={
                  process.env.NEXT_PUBLIC_VERIFICATION_SERVER_PUBLIC_URL
                }
                localServerURL={
                  process.env.NEXT_PUBLIC_VERIFICATION_SERVER_LOCAL_HOST_URL
                }
                credentialType='KYCAgeCredential'
                issuerOrHowToLink='https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4'
                onVerificationResult={() => {
                  // eslint-disable-next-line no-console
                  console.log('Verification result');
                  setIsLoginPolygonId(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
