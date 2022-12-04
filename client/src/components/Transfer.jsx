import React from "react";
import { useParams } from "react-router-dom";
import sendTransaction from "../api/sendTransaction";
import { walletAddress } from "../utils/const";
import Loader from "./Loader";

export default function Transfer() {
  const { address } = useParams();
  const [amount, setAmount] = React.useState();
  const [receipt, setReceipt] = React.useState({});
  const [showReceipt, setShowReceipt] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { transactionHash, blockHash, blockNumber, gasUsed } = receipt || {};

  async function handleSendTransaction() {
    setLoading(true);
    setShowReceipt(true);
    const sendTransactionRequest = await sendTransaction(
      walletAddress,
      address,
      amount
    );
    if (sendTransactionRequest.success)
      setReceipt(sendTransactionRequest.transactionReceipt);

    //Adding 2 second timeout to show loader :)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="transfer">
      <div className="title">Transfer</div>

      <div>
        <div className="transferWindow">
          <div className="transferData">
            <strong>From </strong>
            <span>{walletAddress}</span>
          </div>
          <div className="transferData">
            <strong>To </strong>
            <span>{address}</span>
          </div>
          <div className="transferData">
            <strong>Amount </strong>
            <span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendTransaction();
                }}
              >
                <div>
                  <input
                    type="number"
                    name="transferAmount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button
                    className="submitTransfer"
                    onClick={() => handleSendTransaction}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </span>
          </div>
        </div>
        <div>
          {showReceipt ? (
            <React.Fragment>
              <div className="transferReceipt">
                <div className="title">Reciept</div>
                {loading ? (
                  <Loader />
                ) : Object.keys(receipt).length ? (
                  <React.Fragment>
                    <div className="transactionData">
                      <strong>Transaction Hash </strong>
                      <span>{transactionHash}</span>
                    </div>
                    <div className="transactionData">
                      <strong>Block hash </strong>
                      <span>{blockHash}</span>
                    </div>
                    <div className="transactionData">
                      <strong>Block Number </strong>
                      <span>{blockNumber}</span>
                    </div>
                    <div className="transactionData">
                      <strong>From </strong>
                      <span>{walletAddress}</span>
                    </div>
                    <div className="transactionData">
                      <strong>To </strong>
                      <span>{address}</span>
                    </div>
                    <div className="transactionData">
                      <strong>Gas Used </strong>
                      <span>{gasUsed}</span>
                    </div>
                  </React.Fragment>
                ) : null}
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
}
