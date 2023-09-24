'use client';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
// 1. Get projectId
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

// 2. Create wagmiConfig
// const chains = [mainnet, sepolia];
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID needs to be provided');
}

const chains = [mainnet, polygon, optimism, arbitrum];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

// 3. Create modal
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {return (
  <WagmiConfig config={wagmiConfig}>
    {children}
    <Web3Modal ethereumClient={ethereumClient} projectId={projectId!} />
  </WagmiConfig>
);
}