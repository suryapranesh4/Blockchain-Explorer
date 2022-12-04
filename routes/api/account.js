const express = require("express");
const router = express.Router();

const { getAddress, getBalance } = require("../../modules/accounts");

router.get("/addresses", async (req, res) => {
  console.log("GET /account/addresses Route called");

  try {
    let nodeAddresses = await getAddress();
    console.log("Node Addresses :", nodeAddresses);
    return res.send({ addresses: nodeAddresses }).status(200);
  } catch (error) {
    console.log("ERROR while retrieving node addresses : ", error.message);
    return res.status(500).send("Server Error");
  }
});

router.get("/balance/:address", async (req, res) => {
  const address = req.params.address;
  console.log("GET /account/balance Route called");
  console.log("Retrieving balance of account : ", address);

  try {
    let walletBalance = await getBalance(address);
    console.log("Wallet Balance :", walletBalance);
    return res.send({ balance: walletBalance }).status(200);
  } catch (error) {
    console.log("ERROR while retrieving wallet balance : ", error.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
