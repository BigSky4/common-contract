const Migrations = artifacts.require("Migrations");
const MERC20 = artifacts.require("MERC20");
const BigNumber = require('bignumber.js')
const Bad = artifacts.require('Bad')

module.exports = async  function (deployer) {
  // await deployer.deploy(Migrations);

  // await deployer.deploy(MERC20, "GLToken1", "GLT1", BigNumber("10000e18"));
  // await deployer.deploy(MERC20, "GLToken2", "GLT2", BigNumber("20000e18"));
  // await deployer.deploy(MERC20, "GLToken3", "GLT3", BigNumber("30000e18"));
  // await deployer.deploy(MERC20, "GLToken4", "GLT4", BigNumber("40000e18"));
  await deployer.deploy(Bad)
};
