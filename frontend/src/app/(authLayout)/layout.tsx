'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { usePolygonIdLoginStore } from '@/store/polygonIdLogin';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();
  const { isConnected } = useAccount();
  const { isLogin: isLoginPolygonId } = usePolygonIdLoginStore();

  useEffect(() => {
    if (status !== 'loading') {
      if (!(status === 'authenticated' || isConnected || isLoginPolygonId)) {
        router.push('/auth/sign-in');
      }
    }
  }, [status, isConnected, router, isLoginPolygonId]);

  return <div>{children}</div>;
}
