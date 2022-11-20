import React, { useEffect, useState } from "react";
import moment from "moment";
import "./index.css";

import getTransactionHistory from "../api/transactionHistory";
import Loader from "../components/Loader";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getTransactions() {
      setTransactions(await getTransactionHistory());
    }
    getTransactions();

    //Adding 2 second timeout to show loader :)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="transactions">
      <div className="title">Transaction History</div>
      <div className="transactionHistory">
        {loading ? (
          <Loader />
        ) : transactions && transactions.length > 0 ? (
          transactions.map((eachTransaction, index) => {
            let {
              receiptHash,
              status,
              timestamp,
              source,
              destination,
              amount,
              gasUsed,
            } = eachTransaction;
            return (
              <div className="eachTransaction" key={index}>
                <div className="transactionData">
                  <strong>Transaction Hash </strong>
                  <span>{receiptHash}</span>
                </div>
                <div className="transactionData">
                  <strong>Status </strong>
                  <span>{status}</span>
                </div>
                <div className="transactionData">
                  <strong>Timestamp </strong>
                  <span>
                    {moment(timestamp).format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
                </div>
                <div className="transactionData">
                  <strong>From </strong>
                  <span>{source}</span>
                </div>
                <div className="transactionData">
                  <strong>To </strong>
                  <span>{destination}</span>
                </div>
                <div className="transactionData">
                  <strong>Value </strong>
                  <span>{amount} ETH</span>
                </div>
                <div className="transactionData">
                  <strong>Gas Used </strong>
                  <span>{gasUsed} ETH</span>
                </div>
              </div>
            );
          })
        ) : (
          <div>No transactions history</div>
        )}
      </div>
    </div>
  );
}
