# Flash Blockchain Explorer Application
 
 ## Check out the application via the following link </br>
 [Flash Blockchain Application](https://flash-blockchain-explorer.herokuapp.com)
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

# Add .env file
Include mongoDB local connection URI and server PORT (.env.example is available for reference)

# Run the client & server with concurrently
npm run dev

# To Run the Express server only (optional)
npm run server

# To Run the React client only (optional)
npm run client
```

Server runs on http://localhost:5000 and client on http://localhost:3000 in the browser
  
  
The Application includes UI for transactions, block node addresses with transfer, transfer receipt and wallet details

## Screenshot of the application

#### Transaction history component: <br/>
![Blockchain Explorer Application](transaction.png "Blockchain Explorer Application") <br/>


#### Transfer and Receipt component : <br/>
![Blockchain Explorer Application](transfer.png "Blockchain Explorer Application") <br/>


#### Wallet component : <br/>
![Blockchain Explorer Application](wallet.png "Blockchain Explorer Application") <br/>
