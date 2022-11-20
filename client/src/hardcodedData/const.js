const walletAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const transferReceipt = {
  transactionHash:
    "0xdfbc75b254db76ade94581ce4463dec284865148cce297cf512227d9e9e10fd2",
  blockHash:
    "0xcf6a288e5647c48c4ed82c821c1d5ac6da125c42a72b2aacb12d4b54e47c5bf8",
  blockNumber: 10,
  gasUsed: 21000,
};

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

export { walletAddress, transferReceipt, getSelectedPage, NavigationPages };
