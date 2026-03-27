require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

const privateKey = process.env.BSC_TESTNET_PRIVATE_KEY;
const rpcUrl = process.env.BSC_TESTNET_RPC_URL || "https://data-seed-prebsc-1-s1.bnbchain.org:8545";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    bscTestnet: {
      url: rpcUrl,
      chainId: 97,
      accounts: privateKey ? [privateKey] : []
    }
  }
};
