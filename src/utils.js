import {ethers} from 'ethers';
import { contractaddress,abi } from './constants';
import { getFromIPFS } from './ipfs';


const getDetails = async (contract) => {
  const transactionResponse = await contract.retrieveHash();
  console.log(transactionResponse); //ipfs hash
  const parsedData = JSON.parse(await getFromIPFS(transactionResponse));
  console.log("parsed data", parsedData);
  return parsedData;
  // await listentotx(transactionResponse, provider)
};

const initializeBlockchain = async (setBlockchain,callback = (error = "")=>{})=>{
    const accounts = await window.ethereum.send('eth_requestAccounts',[])
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractaddress, abi, signer);
    try{
    const roles = await contract.getRoles(accounts.result[0]);
    console.log("roles",roles); // array of roles
    setBlockchain({accounts,provider,contract,roles})
    callback();
    }
    catch(err){
      console.log("error getting roles",err);
      callback("Cannot get roles");
    }
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

export {listentotx,initializeBlockchain,getDetails}