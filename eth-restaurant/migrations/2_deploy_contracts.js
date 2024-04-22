var Restaurants = artifacts.require("./../contracts/Restaurants.sol");

module.exports = function (deployer) {
  deployer.deploy(Restaurants);
};
