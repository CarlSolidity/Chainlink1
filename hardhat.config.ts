
//import "@nomiclabs/hardhat-waffle"; 
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//module.exports = {
//  solidity: "0.8.7",
//};


import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.7", settings: {} }],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_MAINNET_RPC_URL // ADD URL FROM ALCHEMY/INFURA
      }
    },
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL, //add url to env
      accounts: {
        mnemonic: process.env.MNEMONIC //Add mnemonic to environment TEST ONLY
      }
    }
  }
};
export default config;