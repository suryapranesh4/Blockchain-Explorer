const express = require("express");
const router = express.Router();

const Transaction = require("./../../models/transactions");
const { sendTransaction } = require("./../../modules/transactions");

router.get("/history", async (req, res) => {
  console.log("GET /transaction/history Route called");

  try {
    let transactions = await Transaction.find().sort({ _id: -1 });
    console.log("Transaction History :", transactions);
    return res.send({ transactions, success: true }).status(200);
  } catch (error) {
    console.log("ERROR while retrieving transaction history : ", error.message);
    return res.status(500).send("Server Error");
  }
});

router.post("/send", async (req, res) => {
  console.log("POST /transaction/send Route called");
  const { source, destination, value } = req.body;

  console.log("Source :", source, "\n");
  console.log("Destination :", destination, "\n");
  console.log("Value :", value, "\n");

  try {
    let transactionReceipt = await sendTransaction(source, destination, value);
    console.log("Transaction Receipt :", transactionReceipt);

    // Save the transaction receipt in Mongo DB Transaction model

    //Create instance of a new transaction
    let newTransaction = new Transaction({
      source,
      destination,
      amount: value,
      status: transactionReceipt.status,
      gasUsed: transactionReceipt.gasUsed,
      receiptHash: transactionReceipt.transactionHash,
    });

    console.log("new Transaction", newTransaction);

    //Create the player
    await newTransaction.save();
    console.log("New Transaction is added in DB");

    return res.send({ transactionReceipt, success: true }).status(200);
  } catch (error) {
    console.log("ERROR while sending transaction : ", error.message);
    return res.status(500).send({ msg: "Server Error", success: false });
  }
});

module.exports = router;
