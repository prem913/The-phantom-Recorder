import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import crypto from 'crypto-js';
import tweetnacl from 'tweetnacl';
import tweetnaclutil from 'tweetnacl-util';
tweetnacl.util = tweetnaclutil;

export const addtoIPFS = async (data) => {
    const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
    console.log("request to add to ipfs", data);

    //encrypt data 
    const local = getDataFromLocalStorage()
    let encryptionKey = ""
    let iv = ""
    if (local) {
        encryptionKey = local.encryptionKey
        iv = local.iv
    }
    else {
        encryptionKey = "secret";
        iv = "secretiv";
        setDataToLocalStorage({ encryptionKey: encryptionKey, iv: iv })
    }
    const encryptedData = crypto.AES.encrypt(data, encryptionKey).toString();

    console.log("encrypted data", encryptedData)






    // const json = JSON.stringify(data)
    // console.log("send to ipfs", json)
    const buffer = Buffer.from(encryptedData);
    const result = await ipfs.add({ path: "report1.json", content: buffer });
    const cid = result.cid.toString()
    console.log("result of ipfs addtoipfs", cid);
    return cid;
}

export const addtoIPFSen = async (data, userprivatekey, doctorpublickey,userpublickey) => {
    const nacl = tweetnacl
    const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
    console.log("request to add to ipfs", data);
    const uintuserprivatekey = Buffer.from(userprivatekey, 'base64');
    const uintdoctorpublickey = Buffer.from(doctorpublickey, 'base64');
    //encrypt data
    const sharedKey = nacl.box.before(uintdoctorpublickey, uintuserprivatekey)

    // generating one time nonce for encryption
    const nonce = nacl.randomBytes(24)

    // Bob encrypt message for Alice
    const box = nacl.box.after(
        nacl.util.decodeUTF8(data),
        nonce,
        sharedKey // <-- using shared key
    )
    const message = { box:Buffer.from(box).toString('base64'), nonce:Buffer.from(nonce).toString('base64'),userpublickey:userpublickey }
    
    const json = JSON.stringify(message)

    console.log("send to ipfs", json)
    const buffer = Buffer.from(json);
    console.log("buffer", buffer)
    const result = await ipfs.add({ path: "report1.json", content: buffer });
    const cid = result.cid.toString()
    console.log("result of ipfs addtoipfs", cid);
    return cid;
}


async function getFromIPFS(hash) {
    const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
    // const client = makeStorageClient()
    // console.log(await ipfs.get(hash))
    // console.log(ipfs)async function docat() {
    let itr = ipfs.cat(hash)
    let resultobj = {}
    for await (const result of itr) {
        console.log("retrieved data", result)
        const raw = Buffer.from(result).toString('utf8')
        // const str = JSON.parse(raw)
        console.log("string: ", raw)
        resultobj = raw
    } // return str;
    //   const file = await ipfs.cat(hash);
    //   const json = file.toString();
    //   return json;
    const local = getDataFromLocalStorage()
    const decryptedData = crypto.AES.decrypt(resultobj, local.encryptionKey).toString(crypto.enc.Utf8);

    console.log("decrypted data", decryptedData)
    return decryptedData
}

async function getFromIPFSen(hash,doctorprivatekey) {
    const nacl = tweetnacl
    const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
    // const client = makeStorageClient()
    // console.log(await ipfs.get(hash))
    // console.log(ipfs)async function docat() {
    let itr = ipfs.cat(hash)
    let resultobj = {}
    for await (const result of itr) {
        console.log("retrieved data", result)
        const raw = Buffer.from(result).toString('utf8')
        resultobj = JSON.parse(raw)
    } // return str;
    console.log("retrieved data", resultobj)

    const message = {
        box:Buffer.from(resultobj.box,"base64"),
        nonce:Buffer.from(resultobj.nonce,"base64"),
        userpublickey:Buffer.from(resultobj.userpublickey,"base64")
    }

    console.log("box",message)
    const sharedKey = nacl.box.before(
        Buffer.from(message.userpublickey,"base64") // userpublickey
        , 
        Buffer.from(doctorprivatekey,"base64") //doctorprivatekey
    )
    const payload = nacl.box.open.after(
      message.box, 
      message.nonce, 
      sharedKey // <-- using shared key
    )

    return JSON.parse(nacl.util.encodeUTF8(payload))
    

}

// async function getFromIPFSen(hash,privatekey) {
//     const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
//     // const client = makeStorageClient()
//     // console.log(await ipfs.get(hash))
//     // console.log(ipfs)async function docat() {
//     let itr = ipfs.cat(hash)
//     let resultobj = {}
//     for await (const result of itr) {
//         console.log("retrieved data", result)
//         const raw = Buffer.from(result).toString('utf8')
//         // const str = JSON.parse(raw)
//         console.log("string: ", raw)
//         resultobj = raw
//     } // return str;
//     //   const file = await ipfs.cat(hash);
//     //   const json = file.toString();
//     //   return json;

//     const decryptedData = crypto.ED25519.decrypt(encrypted, privatekey, key).toString();

//     console.log("decrypted data", decryptedData)
//     return decryptedData
// }

var utf8ArrayToStr = (function () {
    var charCache = new Array(128);  // Preallocate the cache for the common single byte chars
    var charFromCodePt = String.fromCodePoint || String.fromCharCode;
    var result = [];

    return function (array) {
        var codePt, byte1;
        var buffLen = array.length;

        result.length = 0;

        for (var i = 0; i < buffLen;) {
            byte1 = array[i++];

            if (byte1 <= 0x7F) {
                codePt = byte1;
            } else if (byte1 <= 0xDF) {
                codePt = ((byte1 & 0x1F) << 6) | (array[i++] & 0x3F);
            } else if (byte1 <= 0xEF) {
                codePt = ((byte1 & 0x0F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
            } else if (String.fromCodePoint) {
                codePt = ((byte1 & 0x07) << 18) | ((array[i++] & 0x3F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
            } else {
                codePt = 63;    // Cannot convert four byte code points, so use "?" instead
                i += 3;
            }

            result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)));
        }

        return result.join('');
    };
})();

// const GiveAccesstoDoctor = async (docaddress,docpublickey,data)=>{
//     const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
//     console.log("request to add to ipfs", data);
//     const encryptedData = ""
//     //encrypt data 
//     // const encryptedData = crypto.ED25519.encrypt(message, encryptionKey, key).toString();

//     console.log("encrypted data", encryptedData)






//     // const json = JSON.stringify(data)
//     // console.log("send to ipfs", json)
//     const buffer = Buffer.from(encryptedData);
//     const result = await ipfs.add({ path: "report1.json", content: buffer });
//     const cid = result.cid.toString()
//     console.log("result of ipfs addtoipfs", cid);

//     const transactionResponse = await contract.giveAccesstoDoc(
//       docaddress,
//       cid
//     );
//     return transactionResponse
// }


const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("secrets")
    if (data) {
        return JSON.parse(data)
    }
    return null;
}

const setDataToLocalStorage = (data) => {
    const json = JSON.stringify(data)
    localStorage.setItem("secrets", json)
}

export const generateKeyPair = () => {
    const keyPair = tweetnacl.box.keyPair();

    return {
        publicKey: Buffer.from(keyPair.publicKey).toString('base64'),
        privateKey: Buffer.from(keyPair.secretKey).toString('base64'),
    }

}


export { getFromIPFS,getFromIPFSen }

// console.log(generateKeyPair());const { generateKeyPairSync } = require('crypto');

// console.log(generateKeyPair())
    //   const KEYUTIL = new KJUR.crypto.KeyUtil();
    //   const keypair = KEYUTIL.generateKeypair("RSA", 1024);
    //   const privateKey = KEYUTIL.getPEM(keypair.prvKeyObj, "PKCS1PRV");
    //   const publicKey = KEYUTIL.getPEM(keypair.pubKeyObj);
    //   console.log("Private Key:", privateKey);
    //   console.log("Public Key:", publicKey);