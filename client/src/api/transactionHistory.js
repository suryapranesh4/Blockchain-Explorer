import { baseURL } from "../utils/const";

export default async function getTransactionHistory() {
  let transactions = [];
  try {
    await fetch(`${baseURL}/transaction/history`)
      .then((response) => response.json())
      .then((data) => (transactions = data.transactions));

    return transactions;
  } catch (error) {
    console.log("Error :", error);
  }
}
