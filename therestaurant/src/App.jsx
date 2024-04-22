import "./App.scss";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { initAdmin } from "./utilities/localUtils";
import { router } from "./Router";

// The Web3Explorer is put into context, so it can be reached from all components...
import { ExplorerContext } from "./contexts/context";
import Web3Explorer from "./service/Web3Explorer";

import ConnectWeb3 from "./components/Tools/ConnectWeb3";

function App() {
  const [web3, setWeb3] = useState(null)
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    setWeb3(new Web3Explorer())
  }, [])

  initAdmin()
  return <>
      <ConnectWeb3 web3={web3} />
      <ExplorerContext.Provider value={{ web3: web3 }}>
        <RouterProvider router={router} />
      </ExplorerContext.Provider>
  </>
}

export default App;
