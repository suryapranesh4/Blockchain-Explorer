import React, { useEffect, useState } from "react";
import getWalletBalance from "../api/accountBalance";
import { walletAddress } from "../hardcodedData/const";
import "./index.css";
import Loader from "./Loader";

export default function Wallet() {
  const [walletBalance, setWalletBalance] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getBalance() {
      setWalletBalance(await getWalletBalance(walletAddress));
    }
    getBalance();

    //Adding 2 second timeout to show loader :)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="wallet">
      <div className="title">My Wallet</div>
      {loading ? (
        <Loader />
      ) : (
        <div className="walletWindow">
          <div className="transferData">
            <strong>Address </strong>
            <span>{walletAddress}</span>
          </div>
          <div className="transferData">
            <strong>Balance </strong>
            <span>{walletBalance}</span>
          </div>
        </div>
      )}
    </div>
  );
}
