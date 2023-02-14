import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { addtoIPFS, getFromIPFS } from "./ipfs";
import { initializeBlockchain, listentotx, getDetails } from "./utils";


//components
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
import Accessmgnmt from "./components/Accessmgmt";
import MedicalRecord from "./components/MedicalRecords/MedicalRecord";
import SnackBar from "./components/SnackBar";
import { Button } from "@mui/material";
import Loginpage from "./components/Loginpage";
import ThreeD_Face_Animation from "./imgs/home_img.png";
import { StyledContainer } from "./components/custom";



export const initialState = {
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
  gender: "male",
  health_issues: "Lorem ipsum dolor sitmet consectetur adipisicing elit. ",
};



function App() {
  const [value, setValue] = useState(initialState);
  const [hashvalue, setHashValue] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate()
  const [snackbar, setSnackbar] = useState({
    message: "dfd",
    type: 'info',
  })
  const [blockchain, setBlockchain] = useState({
    provider: null,
    accounts: [],
    contract: null,
    roles: []
  })
  const { accounts, provider, contract, roles } = blockchain;

  const handleSubmit = async (data) => {
    const stringified = JSON.stringify(data);
    const hash = await addtoIPFS(stringified);
    console.log("data hash", hash);
    const transactionResponse = await contract.storeHash(hash);
    console.log(transactionResponse);
    handleOpenSnackBar("Registered Successfully","success");
    setBlockchain(b=>({...b,roles:["user",""]}))
    await listentotx(transactionResponse, provider);
    navigate("/")

  };

  const handler = (s, hash = "") => {
    console.log(s);
    if (s === "success") {
      setHashValue(hash);
    }
  };
  const handleOpenSnackBar = (message = "", type = "") => {
    setSnackbar({
      message: message,
      type: type
    })
  }

  useEffect(() => {
    handleOpenSnackBar("Initializing", "info")
    initializeBlockchain(setBlockchain);
  }, []);
  useEffect(() => {
    const getdetails = async () => {
      if (roles[0] === "user" && contract) {
        handleOpenSnackBar("Getting Details", "info");
        setValue(await getDetails(contract));
        handleOpenSnackBar("Details fetched", "success");
      }
      else if (provider) {
        handleOpenSnackBar("User not registered", "error");
      }
    }
    getdetails();
  }, [blockchain])




  useEffect(() => {
    // window.ethereum.on('disconnect', (error)=>{
    //   handleOpenSnackBar("User Disconnected","error");
    // });
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        handleOpenSnackBar("Disconnected", "error");
      }
      else handleOpenSnackBar("User Account Changed", "info");
      setBlockchain(b => ({ ...b, accounts: accounts }));
      // initializeBlockchain()
    });
    // return ()=>{
    // window.ethereum.off("disconnect");
    // window.ethereum.off("accountChanged");
    // }
  }, [])
  if (accounts.length === 0 || !(roles[0] !== "" || roles[1]!=="")) return (<>
    <img src={ThreeD_Face_Animation} alt="" style={{
      position: "fixed",
      inset: "0",
      objectFit: 'contain',
      height: "100%",
      zIndex: '-1'
    }} />
    <Loginpage
    contract = { contract}
    provider  = {provider}
      handleSubmit={handleSubmit}
      getDetails={getDetails}
      value={value}
      setValue={setValue} handleOpenSnackBar={handleOpenSnackBar} setBlockchain={setBlockchain} accounts={accounts} roles={roles} />
    <SnackBar message={snackbar.message} type={snackbar.type} setOpen={setSnackbar} open={snackbar.message !== ""} />
  </>)
  return (
    <div className="App">
      <img src={ThreeD_Face_Animation} alt="" style={{
        position: "fixed",
        inset: "0",
        objectFit: 'contain',
        height: "100%",
        zIndex: '-1'
      }} />

      {/* <button
        onClick={() => {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractaddress, abi, signer);
          setContract(contract);
        }}
      >
        click
      </button> */}
      {/* <button
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
      </button> */}

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
          // loader={getDetails}
          element={
            <>
              <Navbar />
              <Forms edit={true}
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
              {/* <Profile /> */}
              {/* <MedicalRecord /> */}
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
              <VisitHistories />
              <VisitPopup showPopup={showPopup} setShowPopup={setShowPopup} />
            </>
          }
        />
        <Route
          exact
          path="/access"
          element={
            <>
            <Navbar />
              <Accessmgnmt setBlockchain = {setBlockchain} value={value} roles={roles} data={value} provider={provider} contract={contract} />
            </>
          }
        />
      </Routes>
      {/* <Forms handleSubmit={handleSubmit} getDetails={getDetails} value={value} setValue={setValue} /> */}
      {/* <Teams /> */}
      {/* <Accessmgnmt data={value} provider={provider} contract={contract} /> */}

      <SnackBar message={snackbar.message} type={snackbar.type} setOpen={setSnackbar} open={snackbar.message !== ""} />
    </div>
  );
}

export default App;
