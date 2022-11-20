import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Transactions from "./components/Transactions";
import Addresses from "./components/Addresses";
import Wallet from "./components/Wallet";
import Transfer from "./components/Transfer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Transactions />} exact />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/transfer/:address" element={<Transfer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
