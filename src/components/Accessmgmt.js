import { Button, Table, TableCell, TableHead, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Accessmgmt.css";
import React, { useState } from "react";
import { ContainerColumnBox, StyledButton, StyledPaper, StyledTable, StyledTableCell, StyledTableHead } from "./custom";
import { addtoIPFSen, generateKeyPair, getFromIPFSen } from "../ipfs";
import KeyPairPopUp from "./KeyPairPopUp";
import ReportPopUp from "./ReportPopUp";

const Accessmgnmt = ({ provider, contract,roles,value }) => {
  const [doctorprivatekey, setdoctorprivatekey] = useState("")
  const [doctors, setDoctors] = useState([]);
  const [regdoc, setRegdoc] = useState("");  
  const [report, setReport] = useState({});

  const [accessto, setAccessto] = useState("");
  const [hash, setHash] = useState("");
  const [users, setUsers] = useState([]);
  const [keypair,setKeyPair] = useState({})
  const [popup,setPopup] = useState(false)
  const handleGen = async(doctorpublickey,doctoraddress)=>{
    const keyPair = generateKeyPair()
    console.log(keyPair);
    setKeyPair(keyPair)
    const cid = await addtoIPFSen(JSON.stringify(value),keyPair.privateKey,doctorpublickey,keyPair.publicKey)
    console.log("accessto", doctoraddress);
    const transactionResponse = await contract.giveAccesstoDoc(
      doctoraddress,
      cid
    );
    console.log(transactionResponse);
    await listentotx(transactionResponse, provider);
  }
  const listentotx = (txres, provider) => {
    console.log("listentot", txres.hash);

    return new Promise((resolve, reject) => {
      provider.once(txres.hash, (txrecitp) => {
        console.log("result", txrecitp);
        resolve();
      });
    });
  };
  const handleViewReport = async(useraddress,cid)=>{
    const _report = await getFromIPFSen(cid,doctorprivatekey)
    setReport(_report)
    setPopup(true)
  }

  const handleClick = async () => {
    const transactionResponse = await contract.registerDoctor(regdoc);
    console.log(transactionResponse);
    await listentotx(transactionResponse, provider);
  };

  const handleGiveAccess = async () => {
    console.log("accessto", accessto);
    const transactionResponse = await contract.giveAccesstoDoc(
      "0xF9CA42b639000129e9bdD1F9a686dADFc9B6ECD0",
      hash
    );
    console.log(transactionResponse);
    await listentotx(transactionResponse, provider);

  }

  return (
    <>
    <ContainerColumnBox gap="3rem" width="80%" mx="auto" my="3rem">
    {roles[0]==="user"?
    <StyledPaper style={{
      border:'1px solid #A997DF',
    }}>
    <ContainerColumnBox gap="1rem">
        <Typography variant="h5" mb="1.3rem">All Doctors</Typography>
        {/* render doctors */}
        <ContainerColumnBox>
          {doctors.map((doc,index)=>
          <Container onClick={
            ()=>{
              handleGen(doc[1],doc[0])
            }
          } sx={{
            cursor: "pointer",
            width: '100%',
            transition: 'all 300ms ease',
            borderBottom:'1px solid #A997DF',
            ":hover":{
              backgroundColor:"#A997DF",
              color: "#FFFFFF",
            }
          }}>
            <Typography py="0.5rem" variant="body1" color="currentColor">
              {index+1}{".  "}{doc[0]}
            </Typography>
          </Container>)}
        </ContainerColumnBox>




        <StyledButton
          variant="contained"
          onClick={async () => {
            const transactionResponse = await contract.getDoctors();
            console.log(transactionResponse); //ipfs hash
            setDoctors(transactionResponse);
          }}
        >
          GET DOCTORS INFORMATION
        </StyledButton>
        </ContainerColumnBox>
      </StyledPaper>:""}
      
    {roles[1]==="doctor"?
    <StyledPaper style={{
      border:'1px solid #A997DF',
    }}>
    <ContainerColumnBox gap="1rem">
        <Typography variant="h5" mb="1.3rem">VIEW USER REPORTS</Typography>
        <TextField placeholder="Enter Private Key" value={doctorprivatekey} onChange={(e)=>{
          setdoctorprivatekey(e.target.value);
        }}  />
        <ContainerColumnBox>
          {users.map((doc,index)=>
          <Container key={doc} onClick={
            ()=>{
              handleViewReport(doc[0],doc[1])
            }
          } sx={{
            cursor: "pointer",
            width: '100%',
            transition: 'all 300ms ease',
            borderBottom:'1px solid #A997DF',
            ":hover":{
              backgroundColor:"#A997DF",
              color: "#FFFFFF",
            }
          }}>
            <Typography py="0.5rem" variant="body1" color="currentColor">
              {index+1}{".  "}{doc[0]}
            </Typography>
          </Container>)}
        </ContainerColumnBox>
        <Button
          variant="contained"
          onClick={async () => {
            const transactionResponse = await contract.getDocUsers();
            console.log(transactionResponse); //ipfs hash

            setUsers(transactionResponse);
          }}
        >
          GET USERS
        </Button>
        </ContainerColumnBox>
      </StyledPaper>:""}
      </ContainerColumnBox>      
      {/* <KeyPairPopUp open={popup} setOpen={setPopup} keyPair = {keypair} /> */}
        <ReportPopUp data = {report} setOpen={setPopup} open={popup} />
    </>
  );
};

export default Accessmgnmt;