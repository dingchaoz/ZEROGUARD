'use client';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { sepolia, WagmiConfig } from 'wagmi';

// 1. Get projectId
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

// 2. Create wagmiConfig
// const chains = [mainnet, sepolia];
const chains = [sepolia];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: 'test',
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
