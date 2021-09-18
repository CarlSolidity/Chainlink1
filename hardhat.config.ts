
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
};
export default config;