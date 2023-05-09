# Flash Blockchain Explorer Application
 
 ## Check out the application via the following link </br>
 [Flash Blockchain Application](https://flash-blockchain-explorer.onrender.com)
  <br/>
  
### Quick start 

```bash
# Clone repository
 git clone https://github.com/suryapranesh4/Flash-Blockchain-Explorer.git
 cd Flash-Blockchain-Explorer

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Install dependencies for hardhat-ethereum
npm run hardhat-install

# Add .env file
Include mongoDB local connection URI and server PORT (.env.example is available for reference)

# Run the client,server and local hardhat network concurrently
npm run dev


# Individual scripts to run local server :
# To Run the Hardhat server only
npm run hardhat

# To Run the Express server only
npm run server

# To Run the React client only
npm run client
```

Server runs on http://localhost:5000,
Hardhat runs on http://localhost:8545,
and client on http://localhost:3000 in the browser
  
  
The Application includes UI for transactions, block node addresses with transfer, transfer receipt and wallet details

## Screenshot of the application

#### Transaction history component: <br/>
![Blockchain Explorer Application](transaction.png "Blockchain Explorer Application") <br/>


#### Transfer and Receipt component : <br/>
![Blockchain Explorer Application](transfer.png "Blockchain Explorer Application") <br/>


#### Wallet component : <br/>
![Blockchain Explorer Application](wallet.png "Blockchain Explorer Application") <br/>
