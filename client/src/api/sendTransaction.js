export default async function sendTransaction(source, destination, value) {
  let transactionReceipt = {};
  try {
    await fetch("/transaction/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source,
        destination,
        value,
      }),
    })
      .then((response) => response.json())
      .then((data) => (transactionReceipt = data));
    return transactionReceipt;
  } catch (error) {
    console.log("Error :", error);
    return error;
  }
}
