export default async function getTransactionHistory() {
  let transactions = [];
  try {
    await fetch("/transaction/history")
      .then((response) => response.json())
      .then((data) => (transactions = data.transactions));

    return transactions;
  } catch (error) {
    console.log("Error :", error);
  }
}
