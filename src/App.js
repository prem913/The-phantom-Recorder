import "./App.css";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import { ethers } from "ethers";
import { abi, contractaddress } from "./constants";
import { addtoIPFS, getFromIPFS } from "./ipfs";
import Content from "./components/content/Content";
import Home from "./components/Home/Home";
import Forms from "./components/Form/Forms.js";
import Navbar from "./components/Navbar/Navbar";
import Teams from "./components/Teams/Teams";

import Profile from "./components/profile/Profile";
import VisitHistories from "./components/VisitHistory/VisitHistories";
import VisitPopup from "./components/VisitHistory/VisitPopup";
import Info from "./components/ShowInfo/Info";
import Medication from "./components/Medication/Medication";

import { Form, Navigate, Route, Routes } from "react-router-dom";
import Accessmgnmt from "./components/Accessmgmt";
const initialState = {
  email: "",
  mobNo: "",
  fname: "",
  lname: "",
  city: "",
  district: "",
  state: "",
  pinCode: null,
  date: "21-04-2000",
  bloodGroup: "A+",
  gender: "Male",
  health_issues: "Lorem ipsum dolor sitmet consectetur adipisicing elit. ",
};


function App() {
  const [value, setValue] = useState(initialState);
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

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (data) => {
    const stringified = JSON.stringify(data);
    const hash = await addtoIPFS(stringified);
    console.log("data hash", hash);
    const transactionResponse = await contract.storeHash(hash);
    console.log(transactionResponse);
    await listentotx(transactionResponse, provider);
  };
  const getDetails = async () => {
    const transactionResponse = await contract.retrieveHash();
    console.log(transactionResponse); //ipfs hash
    const parsedData = JSON.parse(await getFromIPFS(transactionResponse));
    console.log("parsed data", parsedData);
    setValue(parsedData);
    // await listentotx(transactionResponse, provider)
  };
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
        <Route
          exact
          path="/form"
          element={
            <>
              <Navbar />
              <Forms
                handleSubmit={handleSubmit}
                getDetails={getDetails}
                value={value}
                setValue={setValue}
              />
            </>
          }
        />
        <Route
          exact
          path="/edit_form"
          // loader: async ({  }) => {
          //   return fetch(`/api/teams/${}.json`);
          // },
          loader={getDetails}
          element={
            <>
              <Navbar />
              <Forms edit = {true}
                handleSubmit={handleSubmit}
                getDetails={getDetails}
                value={value}
                setValue={setValue}
              />
            </>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <>
              <Navbar />
              <Info data={value} />
              <Profile />
            </>
          }
        />
        <Route
          exact
          path="/medication"
          element={
            <>
              <Navbar />
              <Medication />
            </>
          }
        />
        <Route
          exact
          path="/visit_history"
          element={
            <>
              <Navbar />
              <VisitHistories
                showPopup={showPopup}
                setShowPopup={setShowPopup}
              />
              <VisitPopup showPopup={showPopup} setShowPopup={setShowPopup} />
            </>
          }
        />
      </Routes>
      {/* <Forms handleSubmit={handleSubmit} getDetails={getDetails} value={value} setValue={setValue} /> */}
      {/* <Teams /> */}
<<<<<<< HEAD
      <Accessmgnmt data = {value} provider = {provider} contract = {contract} />
=======
      <Accessmgnmt provider={provider} contract={contract} />
>>>>>>> 3feb88ca735563207d59abf8b28d955b1e3a2985
    </div>
  );
}

export default App;
