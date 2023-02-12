import "./App.css";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import { ethers } from "ethers";
import { abi, contractaddress } from "./constants";
import { addtoIPFS, getFromIPFS } from "./ipfs";
import Content from "./components/content/Content";
import Forms from "./components/Form/Forms";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Teams from "./components/Teams/Teams";
import Profile from "./components/profile/Profile";
import VisitHistories from "./components/VisitHistory/VisitHistories";
import VisitPopup from "./components/VisitHistory/VisitPopup";
import Info from "./components/ShowInfo/Info";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [contract, setContract] = useState(null);
  const [hashvalue, setHashValue] = useState(null);
  const [provider, setProvider] = useState(null);
  const report = {
    name: "name",
    age: "23",
  };
  const handler = (s, hash = "") => {
    console.log(s);
    if (s === "success") {
      setHashValue(hash);
    }
  };

  const listentotx = (txres, provider) => {
    console.log("listentot", txres.hash);

    return new Promise((resolve, reject) => {
      provider.once(txres.hash, (txrecitp) => {
        console.log("result", txrecitp);
        resolve();
      });
    });
  };
  useEffect(() => {
    const provider = window.ethereum;
    provider.enable();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractaddress, abi, signer);
          setContract(contract);
        }}
      >
        click
      </button>
      <button
        onClick={async () => {
          const transactionResponse = await contract.storeHash("prem");
          console.log(transactionResponse);
        }}
      >
        sethash
      </button>
      <button
        onClick={async () => {
          const tx = await contract.retrieveHash();
          await listentotx(tx, provider);
          // const rc = listentotx(tx,provider);
          // const event = rc.events.find(event => event.event === 'Transfer');
          // const [from, to, value] = event.args;
          // console.log(from, to, value);
        }}
      >
        gethash {hashvalue}
      </button>
      <button
        onClick={() => {
          addtoIPFS({ name: "name" }, handler);
        }}
      >
        store
      </button>
      <button
        onClick={() => {
          getFromIPFS(hashvalue);
        }}
      >
        getfile
      </button>
      {/* <Navbar />
      <Home />
      <Content />
      <Forms />
      <Profile />
      <VisitHistories /> */}
      {/* <VisitPopup /> */}
      {/* <Teams /> */}
      {/* <Info /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Content />
              <Teams />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
