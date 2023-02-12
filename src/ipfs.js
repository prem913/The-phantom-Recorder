import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import crypto  from 'crypto-js';

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
        setDataToLocalStorage({encryptionKey: encryptionKey, iv: iv})
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

// export const addtoIPFSen = async (data,encryptionKey) => {
//     const ipfs = await create({ host: '127.0.0.1', port: 5002, protocol: 'http' });
//     console.log("request to add to ipfs", data);

//     //encrypt data 
//     const encryptedData = CryptoJS.ED25519.encrypt(message, encryptionKey, key).toString();

//     console.log("encrypted data", encryptedData)






//     // const json = JSON.stringify(data)
//     // console.log("send to ipfs", json)
//     const buffer = Buffer.from(encryptedData);
//     const result = await ipfs.add({ path: "report1.json", content: buffer });
//     const cid = result.cid.toString()
//     console.log("result of ipfs addtoipfs", cid);
//     return cid;
// }


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

export { getFromIPFS }



const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("secrets")
    if (data) {
        return JSON.parse(data)
    }
    return null;
}

const setDataToLocalStorage = (data) => {
    const json = JSON.stringify(data)
    localStorage.setItem("secrets",json)
}

const generateKeyPair = ()=>{
    var key = crypto.lib.WordArray.random(256/8);
    
    var pair = crypto.ED25519.generateKeyPair();

    console.log(pair,key);

}

// console.log(generateKeyPair());