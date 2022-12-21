import { baseURL } from "../utils/const";

export default async function getAccountAddresses() {
  let addresses = [];

  try {
    await fetch(`${baseURL}/account/addresses`)
      .then((response) => response.json())
      .then((data) => (addresses = data.addresses));

    return addresses;
  } catch (error) {
    console.log("Error :", error);
  }
}
