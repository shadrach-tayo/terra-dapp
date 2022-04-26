import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { Link } from "react-router-dom";
import "./App.css";
import WalletAddress from "./components/WalletAddress";
import Menu from "./Menu";

function App() {
  const { status, connect, disconnect } = useWallet();

  const renderConnection = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-Extension`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={disconnect}
          className="cta-button connect-wallet-button"
        >
          disconnect
        </button>
      );
    }
  };

  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>⚔ Goblin War ⚔</h1>
            <p>Only you can save us from Goblin town</p>
          </div>
        </Link>
        <WalletAddress />
      </header>

      {/* If not connected show goblin  */}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src="https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif"
            alt="Goblin gif"
          />
        </div>
      )}

      {/* If not connected show goblin  */}
      {status === WalletStatus.WALLET_CONNECTED && (
        <div className="game-menu-container">
          <Menu />
        </div>
      )}
      {renderConnection()}
    </main>
  );
}

export default App;
