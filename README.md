# The Phantom Recoder
Phantom recorder is a blockchain-based platform for managing medical records and facilitating secure communication between doctors and patients. By leveraging the Ethereum blockchain and smart contracts, Phantom Recorder ensures that only authorized individuals can access and modify medical records, while maintaining privacy and security.

## Features
- **Blockchain-based login and registration:** Users can register as either a patient or a doctor, and their wallet address is stored on the Ethereum blockchain via a smart contract.
- **Encrypted medical record storage:** Medical records are encrypted and stored on the InterPlanetary File System (IPFS), with the key for each file being stored on the blockchain with the respective user's wallet address.
- **Doctor-patient communication:** Patients can give access to specific doctors to view their medical records by encrypting a copy of the record with the doctor's public key. The doctor can then decrypt the record using their private key on the website.
- **Future Implementations**
    - **Telemedicine:** Patients can consult with doctors remotely using video conferencing or chat features.
    - **Health tracking:** Patients can track their health metrics, such as blood pressure, weight, and activity levels, and share this data with their doctors to inform treatment plans.
    - **Prescription management:** Patients can view and manage their prescription medications, including dosage, frequency, and refill requests.
Technologies Used

## Technologies Used
- **Ethereum blockchain and smart contracts(Solidity)**
- **InterPlanetary File System (IPFS)**
- **React.js** for front-end development
- **Node.js** for back-end development
- **Ethers.js** for interacting with the Ethereum blockchain

## Installation
To install and run Phantom Recorder, follow these steps:

- Clone the repository: ```git clone https://github.com/prem913/The-phantom-Recorder.git```
- Install dependencies: ```npm install```
- Run the application: ```npm start```

## Contributing
We welcome contributions from the community! To contribute to Phantom Recorder please follow these guidelines:

Fork the repository.
Create a new branch for your changes: git checkout -b (your branch name)
Make your changes and commit them: git commit -am 'Add some feature'
Push to the branch: git push origin [branch name]
Submit a pull request.

## License
Phantom Recorder is released under the MIT License.