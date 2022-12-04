import React from "react";
import { Link, useLocation } from "react-router-dom";
import explorerIcon from "./../images/explorer.ico";
import walletIcon from "./../images/wallet.png";
import transactionIcon from "./../images/transaction.png";
import copyrightIcon from "./../images/copyright.png";
import addressIcon from "./../images/address.png";
import "./index.css";
import { NavigationPages, getSelectedPage } from "../utils/const";

export default function Navigation() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = React.useState(
    getSelectedPage(location.pathname)
  );
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="navbar">
      <header>
        <div className="appTitle">
          <Link to="/" onClick={() => handlePageChange(NavigationPages.HOME)}>
            <div className="titleIcon">
              <img src={explorerIcon} alt="explorer" />
              <div className="headers">
                <div className="titleHeader">Flash</div>
                <div className="subtitle">Blockchain Explorer</div>
              </div>
            </div>
          </Link>
          <div className="copyrightIcon">
            <img src={copyrightIcon} alt="copyright" />
          </div>
        </div>
      </header>
      <div className="routes">
        <Link
          to="/transactions"
          className={
            selectedPage === NavigationPages.TRANSACTIONS ||
            selectedPage === NavigationPages.HOME
              ? "selectedRoute"
              : ""
          }
          onClick={() => handlePageChange(NavigationPages.TRANSACTIONS)}
        >
          <img src={transactionIcon} alt="transaction" />
          <div>Transactions</div>
        </Link>
        <Link
          to="/addresses"
          className={
            selectedPage === NavigationPages.ADDRESSES ? "selectedRoute" : ""
          }
          onClick={() => handlePageChange(NavigationPages.ADDRESSES)}
        >
          <img src={addressIcon} alt="address" />
          <div>Addresses</div>
        </Link>
        <Link
          to="/wallet"
          className={
            selectedPage === NavigationPages.WALLET ? "selectedRoute" : ""
          }
          onClick={() => handlePageChange(NavigationPages.WALLET)}
        >
          <img src={walletIcon} alt="wallet" />
          <div>Wallet</div>
        </Link>
      </div>
    </div>
  );
}
