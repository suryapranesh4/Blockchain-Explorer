import React from "react";
import { useParams } from "react-router-dom";
import { walletAddress, transferReceipt } from "../hardcodedData/const";

export default function Transfer() {
  const { address } = useParams();
  let { transactionHash, blockHash, blockNumber, gasUsed } = transferReceipt;
  const [amount, setAmount] = React.useState();
  const [showReceipt, setShowReceipt] = React.useState(false);

  return (
    <div className="transfer">
      <div className="title">Transfer</div>
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
                amount && setShowReceipt(true);
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
                  onClick={() => amount && setShowReceipt(true)}
                >
                  Submit
                </button>
              </div>
            </form>
          </span>
        </div>
      </div>
      {showReceipt && (
        <div className="transferReceipt">
          <div className="title">Reciept</div>
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
        </div>
      )}
    </div>
  );
}
