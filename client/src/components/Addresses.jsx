import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAccountAddresses from "../api/accountAddresses";
import "./index.css";
import Loader from "./Loader";

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getAddress() {
      setAddresses(await getAccountAddresses());
    }
    getAddress();

    //Adding 2 second timeout to show loader :)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="addresses">
      <div className="title">Blockchain Node Addresses</div>
      {loading ? (
        <Loader />
      ) : addresses && addresses.length > 0 ? (
        <div className="nodeAddresses">
          {addresses.map((address, i) => {
            return (
              <div className="addressLink" key={i}>
                <Link to={`/transfer/${address}`}>{address}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Node addresses found</div>
      )}
    </div>
  );
}
