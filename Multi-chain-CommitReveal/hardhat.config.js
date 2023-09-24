require("@nomicfoundation/hardhat-toolbox");
// require("hardhat-celo");
require('dotenv').config();
const { LINEASCAN_API_KEY, PRIVATE_KEY, NEON_RPC_URL,FILECOIN_RPC_URL, SCROLL_RPC_URL,RPC_URL,GORLIE_RPC_URL, CELO_RPC_URL, GNOSIS_RPC_URL, ETHERSCAN_API } = process.env;
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
        "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [PRIVATE_KEY] // Uses the private key from the .env file
    },
    goerli: {
      url: GORLIE_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    celo: {
      url: CELO_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    alfajores: {
      // can be replaced with the RPC url of your choice.
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [
        PRIVATE_KEY
      ],
  },
  chiado: {
      url: GNOSIS_RPC_URL,
      gasPrice: 1000000000,
      accounts: [PRIVATE_KEY],
    },
    // arbitrum: {
    //   url: ARB_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    // polygon: {
    //   url: POLYGON_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    scrollSepolia: {
      url: SCROLL_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    // base: {
    //   url: BASE_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    // mantle: {
    //   url: MANTLE_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    // xdc : {
    //   url: XDC_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    linea_testnet: {
      url: 'https://linea-goerli.infura.io/v3/35aa766e632e4c5abfe82af214c4e6eb',
      accounts: [PRIVATE_KEY],
    },
    calibrationnet: {
      chainId: 314159,
      accounts: [PRIVATE_KEY],
      url: "https://api.calibration.node.glif.io/rpc/v1",
      },
    neon : {
      url: NEON_RPC_URL,
      accounts: [PRIVATE_KEY],
    },


  },
  etherscan: {
  //   apiKey: ETHERSCAN_API,
  // },
  apiKey: {
    scrollSepolia: 'D62920783A4311EE9D6600155D570C742E',
    chiado:'0xb106ed7587365a16b6691a3D4B2A734f4E8268a2',
    linea_testnet: 'CTACKMXSUJGXK8Q2WWJ1I95U9MMBRQ3ZGJ'
  },
  customChains: [
    {
      network: 'scrollSepolia',
      chainId: 534351,
      urls: {
        apiURL: 'https://api-sepolia.scrollscan.dev/api', 
        browserURL: 'https://sepolia.scrollscan.dev',
      },
    },
    {
      network: 'chiado',
      chainId: 10200,
      urls: {
        apiURL: 'https://gnosis-chiado.blockscout.com/api', 
        browserURL: 'https://gnosis-chiado.blockscout.com/',
      },
    },
    {
      network: "linea_testnet",
      chainId: 59140,
      urls: {
        apiURL: "https://api-testnet.lineascan.build/api",
        browserURL: "https://goerli.lineascan.build/address"
      }
    }
  ],
}
};
