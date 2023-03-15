require("dotenv").config()

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {version: "0.8.7"},
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      defualt: 1
    }
  },
  networks: {
    localhost: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    goerli: {
      chainId: 5,
      url: process.env.GOERLI_RCP_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
        goerli: ETHERSCAN_API_KEY,
    },
    customChains: [
        {
            network: "goerli",
            chainId: 5,
            urls: {
                apiURL: "https://api-goerli.etherscan.io/api",
                browserURL: "https://goerli.etherscan.io",
            },
        },
    ],
},
 
};
