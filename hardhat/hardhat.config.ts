import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-toolbox/network-helpers";
import "chai";
import "mocha";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

// const privateKey:string = process.env.PRIVATE_KEY || '';

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/iz6zhu5BXvt5fjvQ27j8VxQowoercGeK",
      accounts:["116ae709ce0aec39c7e86b5aecf75525cae95eca6d6094a4a50c66a579e702b7"]
    }
  }
};

export default config;
