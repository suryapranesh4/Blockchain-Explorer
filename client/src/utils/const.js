const walletAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const NavigationPages = {
  HOME: "/",
  TRANSACTIONS: "/transaction",
  ADDRESSES: "/addresses",
  WALLET: "/wallet",
};

const getSelectedPage = (route) => {
  switch (route) {
    case NavigationPages.TRANSACTIONS:
      return NavigationPages.TRANSACTIONS;
    case NavigationPages.ADDRESSES:
      return NavigationPages.ADDRESSES;
    case NavigationPages.WALLET:
      return NavigationPages.WALLET;
    default:
      return NavigationPages.HOME;
  }
};

const baseURL =
  process.env.NODE_ENV === "production"
    ? `https://flash-blockchain-explorer.onrender.com`
    : ``;

export { walletAddress, getSelectedPage, NavigationPages, baseURL };
