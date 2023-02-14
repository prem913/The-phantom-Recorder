export const abi2 = [
    {
        "inputs": [],
        "name": "retrieveHash",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "storeHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const abi = [
    {
      "inputs": [],
      "name": "getDocUsers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "key",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "internalType": "struct IPFS.Data[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDoctors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "key",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "internalType": "struct IPFS.Data[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getRoles",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "docaddr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "giveAccesstoDoc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "pk",
          "type": "string"
        }
      ],
      "name": "registerDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieveHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "storeHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const contractaddress = "0xCF1f116Fa33D0e44C8152435051e390A68143B50"