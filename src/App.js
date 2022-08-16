import { useState } from "react";
import Login from "./components/Login/Login";
import Web3 from "web3";
import Account from "./components/Account/Account";
import { Card } from "react-bootstrap";

//import Account from "./components/Account/Account";
function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };
  return (
    <div>
      <header className="main-header">
        <h1>Nammon Wallet 🦖🎮</h1>
        <nav className="nav">
          <ul>
            <li>{currentAccount}</li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
          {isConnected && <Account />}
        </div>
        {/* {JSON.stringify(props.walletAccount)} */}
      </main>
      <footer className="main-footer">
        <h3>
          this is trust wallet project for generate and transac ERC20 token in
          test account💵
        </h3>
        <h3 className="colorWraning">
          keep you private key 🔑 at safe don't use real account for security
          you asset
        </h3>

        <p>
          implement by{" "}
          <a href="https://web3js.readthedocs.io/en/v1.7.5/">Web3 js</a> git
          repository <a href="https://github.com/supamongkonR">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
