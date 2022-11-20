const { nodeAddresses, walletBalance } = require("../hardcodedData/index.js");

function getAddress() {
  console.log("Get Addresses called :", nodeAddresses);
  return nodeAddresses;
}
function getBalance() {
  console.log("Get Wallet Balance called :", walletBalance);
  return walletBalance;
}

module.exports = {
  getAddress,
  getBalance,
};
