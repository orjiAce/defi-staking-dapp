
const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

module.exports = async function(deployer, network, accounts) {
  
  // Deploy Mock Tether Token
  await deployer.deploy(Tether)

    // Deploy Reward  Token
    await deployer.deploy(RWD)

    await deployer.deploy(DecentralBank)
}