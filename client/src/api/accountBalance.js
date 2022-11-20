export default async function getWalletBalance(walletAddress) {
  let balance = "";
  try {
    await fetch(`/account/balance/${walletAddress}`)
      .then((response) => response.json())
      .then((data) => (balance = data.balance));

    return balance;
  } catch (error) {
    console.log("Error :", error);
  }
}
