import { Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { StyledPaper,StyledButton, ContainerColumnBox } from './custom'
import {initializeBlockchain, listentotx} from '../utils'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Forms from './Form/Forms'
import { generateKeyPair } from '../ipfs'
import KeyPairPopUp from './KeyPairPopUp'

function Loginpage(props) {
  const navigate = useNavigate()
    const {contract,provider,accounts,roles,setBlockchain,handleOpenSnackBar,handleSubmit,getDetails,value,setValue} = props
    const [fromopen,setFormOpen] = useState(false)
    const [docopen,setDocOpen] = useState(false)
    const [regdocval,setRegdocval] = useState("")
    const [keypair,setKeyPair] = useState({})
    const [popup,setPopup] = useState(false)

    const handleRegister = async()=>{
      try{
      const transactionResponse = await contract.registerDoctor(regdocval);
      console.log(transactionResponse);
      handleOpenSnackBar("Registered Successfully","success")
      navigate("/access")
      setDocOpen(false);
      setBlockchain(b=>({...b,roles:["","doctor"]}))
      await listentotx(transactionResponse, provider);
      }catch(err){
        console.log(err);
        handleOpenSnackBar("An error occurred while Registering","error")
      }
      handleOpenSnackBar("Transaction successfully completed for registering","success")
    }

    const RegDocComponent = ()=>{
      const handleGen = ()=>{
        const keyPair = generateKeyPair()
        console.log(keyPair);
        setRegdocval(keyPair.publicKey)
        setKeyPair(keyPair)
        setPopup(true)
      }
      return (
        <StyledPaper style={{
          border:'1px solid #A997DF',
        }}>
          <ContainerColumnBox gap="1rem">
            <Typography variant="h5" mb="1.3rem">Register Doctor</Typography>
            <Typography variant='body1' color="primary">
              Generate a Public and Private Key pair and enter the Public Key below. Or 
              Click on "Generate Key Pair" to generate keypair for you.
            </Typography>
            <TextField
              value={regdocval}
              onChange={(e) => {
                setRegdocval(e.target.value);
              }}
            />
            <Button variant="contained" onClick={handleGen}>
              Generate Key Pair
            </Button>
            <Button disabled={!keypair.publicKey} variant="contained" onClick={handleRegister}>
              register doctor
            </Button>
            </ContainerColumnBox>
          </StyledPaper>

      )
    }

    return (
      <>
    <Container style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:"100vh",
        minwidth:"100vw",
        paddingTop:'3rem'
    }}>
      {docopen?
      RegDocComponent()
      :
        fromopen?
      <Forms
        handleSubmit={handleSubmit}
        getDetails={getDetails}
        value={value}
        setValue={setValue}
      />
          
          :
          <StyledPaper style={{
            border:'1px solid #A997DF',
            zIndex:'2'
          }}>
          <ContainerColumnBox gap="2rem">
        <Typography variant='h5' color="primary">Connect:</Typography>
        {accounts.length === 0?
        <StyledButton variant="contained" onClick={()=>{
          handleOpenSnackBar("initializing...","info")
          initializeBlockchain(setBlockchain,(error)=>{
            if(error) {
              handleOpenSnackBar(error,"error");
              return;
            }
            handleOpenSnackBar("Successfully initialized","success");
            navigate("/")
          })
        }}>
          Login With MetaMask
        </StyledButton>:
        <>
        <StyledButton
        variant="contained" onClick={()=>{
          setFormOpen(true)
        }}>
          Register As User
        </StyledButton>
        <StyledButton
        variant="contained" onClick={()=>{
          setDocOpen(true)
        }}>
          Register As Doctor
        </StyledButton></>
}
      </ContainerColumnBox>
      </StyledPaper>
      }
      </Container>
      <KeyPairPopUp open={popup} setOpen={setPopup} keyPair = {keypair} />
      </>
    )
    // if(roles[0] === "" && roles[1]==="") return(
    //   <div className="App">
    //     <Button variant="outlined">
    //       Register
    //     </Button>
    //   </div>
    // )
}

export default Loginpage