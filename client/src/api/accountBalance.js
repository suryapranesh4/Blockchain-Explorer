import { baseURL } from "../utils/const";

export default async function getWalletBalance(walletAddress) {
  let balance = "";
  try {
    await fetch(`${baseURL}/account/balance/${walletAddress}`)
      .then((response) => response.json())
      .then((data) => (balance = data.balance));

    return balance;
  } catch (error) {
    console.log("Error :", error);
  }
}
