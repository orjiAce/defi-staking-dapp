
const Tether = artifacts.require('Tether')

module.exports = async function(deployer, network, accounts) {
  
  // Deploy Mock Tether Token
  await deployer.deploy(Tether)

}