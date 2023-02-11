import {create} from 'ipfs-http-client'
const ipfs = create({ host: '127.0.0.1', port: 5002, protocol: 'http' });

export const addtoIPFS = async(data,callback)=>{
const {path} = await ipfs.add(JSON.stringify(data))
callback("success",path)
}


export const getFromIPFS = async(hash)=>{
// const client = makeStorageClient()
console.log(await ipfs.get(hash))
console.log(ipfs)
}
