require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      port: "7545",
      host: "127.0.0.1",
      network_id: "*", //connect to any network
    },
  },
  contracts_directory: './src/contracts/', 
  contracts_build_directory: './src/truffle_abis/',
  compilers:{ 
      //solidity compiler Version: "0.5.0",
      solc:{
          version: "^0.5.0",
          optimizer: {
              enabled: true, 
              runs:200
          }
      }

  }

};
