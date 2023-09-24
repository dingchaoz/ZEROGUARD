/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { useManageView } from '@web3inbox/widget-react';
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';

const W3iWidget = dynamic(
  () => import('@web3inbox/widget-react').then((w3i) => w3i.W3iWidget),
  {
    ssr: false,
  }
);

export default function Page() {
  const { address, connector } = useAccount();
  const { open: openW3m } = useWeb3Modal();
  const { open: openW3i } = useManageView();
  const [account, setAccount] = useState<string | undefined>('');
  const { signMessageAsync } = useSignMessage();

  const isSSR = () => typeof window === 'undefined';

  useEffect(() => {
    setAccount(address);
    if (address) {
      openW3i();
    }
  }, [address, setAccount, openW3i]);

  const signMessage = useCallback(
    async (message: string) => {
      const res = await signMessageAsync({
        message,
      });

      return res as string;
    },
    [signMessageAsync]
  );

  const connect = useCallback(async () => {
    if (!connector) {
      openW3m();
      return;
    }

    const connected = await connector.connect({
      chainId: 1,
    });

    return Promise.resolve(connected.account!);
  }, [connector, openW3m]);

  return (
    <>
      <W3iWidget
        projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!}
        account={address ? `eip155:1:${address}` : null}
        domain='hackers.gm.walletconnect.com'
        onConnect={connect}
        onSign={signMessage}
      />
      <div>Hello World</div>
      <Web3Button />
    </>
  );
}