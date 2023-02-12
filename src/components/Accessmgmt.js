
import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React,{useState} from 'react';


const Accessmgnmt = ({provider,contract})=>{
    const [doctors,setDoctors] = useState([])
    const [regdoc,setRegdoc] = useState("")
    const [accessto,setAccessto] = useState("")
    const [hash,setHash] = useState("")
    const [users,setUsers] = useState([])
    const listentotx = (txres,provider)=>{
      console.log("listentot",txres.hash)
  
      return new Promise((resolve,reject)=>{
        provider.once(txres.hash,(txrecitp)=>{
          console.log("result",txrecitp)
          resolve()
        })
      })
    }

    const handleClick = async ()=>{
            const transactionResponse = await contract.registerDoctor(regdoc)
            console.log(transactionResponse)
            await listentotx(transactionResponse,provider)
    }

    return(
        <>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'3rem'

        }}>
        <Typography>Register Doctor</Typography>
        <TextField value = {regdoc} onChange={async(e)=>{
            setRegdoc(e.target.value)
        }}
        />
        <Button variant='outlined' onClick={handleClick}>
            register doctor
        </Button>
        </div>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'3rem'

        }}>
        <Typography>All Doctors</Typography>
        <div>
            Doctors: {JSON.stringify(doctors)}
        </div>
        <Button variant='outlined'  onClick={async()=>{
    const transactionResponse = await contract.getDoctors();
    console.log(transactionResponse) //ipfs hash
            setDoctors(transactionResponse)
        }}>
            get Doctors Information
        </Button></div>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'3rem'

        }}>
        <Typography>Give access</Typography>
        <TextField placeholder='Doctor Address' value = {accessto} onChange={(e)=>{
            
            setAccessto(e.target.value)
        }} />
        <TextField placeholder='Ipfs Hash' value = {hash} onChange={(e)=>{
            
            setHash(e.target.value)
        }} />
        <Button variant='outlined'  onClick={async()=>{
            console.log("accessto",accessto)
            const transactionResponse = await contract.giveAccesstoDoc("0xF9CA42b639000129e9bdD1F9a686dADFc9B6ECD0",hash)
            console.log(transactionResponse)
            await listentotx(transactionResponse,provider)
        }}>
            give access to
        </Button>
        </div>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            justifyContent:'center',
            alignItems: 'center',
            marginTop:'3rem'

        }}>
        <Typography>Users that are given access to</Typography>
        <div>
            {JSON.stringify(users)}
        </div>
        <Button outline="outlined" onClick={async()=>{
    const transactionResponse = await contract.getDocUsers();
    console.log(transactionResponse) //ipfs hash
            
            setUsers(transactionResponse)
        }}>
            get doctor users
        </Button>
        </div>
        </>
    )
}

export default Accessmgnmt