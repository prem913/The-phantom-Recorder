
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
        <input type = 'text' value = {regdoc} onChange={async(e)=>{
            setRegdoc(e.target.value)
        }}/>
        <button onClick={handleClick}>
            register doctor
        </button>
        <div>
            Doctors: {JSON.stringify(doctors)}
        </div>
        <button onClick={async()=>{
    const transactionResponse = await contract.getDoctors();
    console.log(transactionResponse) //ipfs hash
            setDoctors(transactionResponse)
        }}>
            get Doctors Information
        </button>
        <input type = 'text' value = {accessto} onChange={(e)=>{
            
            setAccessto(e.target.value)
        }} />
        <input type = 'text' value = {hash} onChange={(e)=>{
            
            setHash(e.target.value)
        }} />
        <button onClick={async()=>{
            console.log("accessto",accessto)
            const transactionResponse = await contract.giveAccesstoDoc("0xF9CA42b639000129e9bdD1F9a686dADFc9B6ECD0",hash)
            console.log(transactionResponse)
            await listentotx(transactionResponse,provider)
        }}>
            give access to
        </button>
        <div>
            Users that are given access: {JSON.stringify(users)}
        </div>
        <button onClick={async()=>{
    const transactionResponse = await contract.getDocUsers();
    console.log(transactionResponse) //ipfs hash
            
            setUsers(transactionResponse)
        }}>
            get doctor users
        </button>
        </>
    )
}

export default Accessmgnmt