const express = require("express");
const router = express.Router();

const Transaction = require("./../../models/transactions");

router.get("/history", async (req, res) => {
  console.log("GET /transaction/history Route called");

  try {
    let transactions = await Transaction.find();
    console.log("Transaction History :", transactions);
    return res.send({ transactions, success: true }).status(200);
  } catch (error) {
    console.log("ERROR while retrieving transaction history : ", error.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
