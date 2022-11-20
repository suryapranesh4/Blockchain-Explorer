export default async function getAccountAddresses() {
  let addresses = [];
  try {
    await fetch("/account/addresses")
      .then((response) => response.json())
      .then((data) => (addresses = data.addresses));

    return addresses;
  } catch (error) {
    console.log("Error :", error);
  }
}
