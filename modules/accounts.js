const Web3 = require("web3");
const web3 = new Web3("https://flash-blockchain-explorer-hardhat.onrender.com");

async function getAddress() {
  console.log("Get Node addresses called");
  const nodeAddresses = await web3.eth.getAccounts((err, accounts) => {
    if (err) {
      console.error("Error while retrieving node addresses :", err);
      return [];
    }
    console.log("Accounts : ", accounts);
    return accounts;
  });
  return nodeAddresses;
}

async function getBalance(accountAddress) {
  console.log("Get Account balance called", accountAddress);
  const balanceInWei = await web3.eth.getBalance(
    accountAddress,
    (err, balance) => {
      if (err) {
        console.error("Error while retrieving account balance :", err);
        return 0;
      }
      console.log("Balance : ", web3.utils.fromWei(balance, "ether"), " ETH");
      return balance;
    }
  );
  return web3.utils.fromWei(balanceInWei, "ether");
}

module.exports = {
  getAddress,
  getBalance,
};
