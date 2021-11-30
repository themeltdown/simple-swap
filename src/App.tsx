import React, { useState, useEffect } from "react";
import { AccountInput } from "./components/AccountInput";
import ConnectWallet from "./components/ConnectWallet";
import Layout from "./components/Layout";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import { useWallet } from "./hooks/useWallet";
import { useWeb3Listener } from "./hooks/useWeb3Listener";
import { injected } from "./lib/connectors";
import { AccountInfo } from "./components/AccountInfo";

//Adding multiple connectors is a thing
enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

function App() {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const [balance, setBalance] = useState("");

  useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(formatEther(balance));
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(formatEther(0));
          }
        });

      return () => {
        stale = true;
        setBalance("");
      };
    }
  }, [account, library, chainId]);

  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useWallet();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useWeb3Listener(!triedEager || !!activatingConnector);

  return (
    <Layout>
      <div className="flex flex-col items-center mb-1">
        <h1 className="text-2xl font-bold">Simple account transfer</h1>
        <p className="text-sm text-center">
          A simple, easy to use, erc20 token transfer tool.
        </p>
      </div>

      {!active && (
        <ConnectWallet
          onClick={() => activate(connectorsByName[ConnectorNames.Injected])}
        />
      )}

      {active && <AccountInfo account={account as string} balance={balance} />}

      <AccountInput label="Account from" />
      <AccountInput label="Account to" />
    </Layout>
  );
}

export default App;
