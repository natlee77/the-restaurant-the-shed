import { useState } from "react";

const ConnectWeb3 = ({ web3 }) => {
  const [message, setMessage] = useState("");

  if (web3 && web3.status) {
    web3.eth.on("accountsChanged", async () => {
      const connect = await web3.connectToBlockchain();
      setMessage(connect);
    });
  }

  const connectMetamask = async (e) => {
    try {
      const connect = await web3.connectToBlockchain();
      setMessage(connect);
      if(connect === 'Download Metamask...'){
        e.target.textContent = 'No Provider'
        e.target.style.backgroundColor = 'red'
      }else{
        e.target.textContent = 'Connected'
        e.target.style.backgroundColor = 'green'
      }
    } catch (error) {
      console.error("Failed to connect to metamask!", error);
    }
  };

  return (
    <div className="web3">
      <div className="buttons">
        <button className="btn-mm" onClick={(e) => connectMetamask(e)}>
          Connect Web3
        </button>
        <div id="loader"></div>
      </div>
      <div className="info">{String(message)}</div>
    </div>
  );
};

export default ConnectWeb3;
