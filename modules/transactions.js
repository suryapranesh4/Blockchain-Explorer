const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");

const sendTransaction = async (source, destination, value) => {
  console.log(`sendTransaction method called`);
  const transactionReceipt = await web3.eth
    .sendTransaction({
      from: source,
      to: destination,
      value,
    })
    .then((receipt) => {
      console.log("receipt :", receipt);
      return receipt;
    })
    .catch((err) => {
      console.error("err", err);
      return err;
    });
  return transactionReceipt;
};

module.exports = {
  sendTransaction,
};
