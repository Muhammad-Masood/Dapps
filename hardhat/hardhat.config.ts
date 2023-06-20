import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-toolbox/network-helpers";
import "chai";
import "mocha";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";


const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
