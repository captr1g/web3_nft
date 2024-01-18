// // utils/web3.js
// import Web3 from 'web3';

// const getWeb3 = () => {
//   return new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions
//     window.addEventListener('load', async () => {
//       // Modern dapp browsers
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access
//           await window.ethereum.enable();
//           resolve(web3);
//         } catch (error) {
//           reject(error);
//         }
//       }
//       // Legacy dapp browsers
//       else if (window.web3) {
//         const web3 = new Web3(window.web3.currentProvider);
//         resolve(web3);
//       }
//       // Non-dapp browsers
//       else {
//         reject('Non-Ethereum browser detected. Install MetaMask!');
//       }
//     });
//   });
// };

// export default getWeb3;
import Web3 from 'web3';

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => resolve(web3))
        .catch(reject);
    } else if (window.web3) {
      try {
        const web3 = new Web3(window.web3.currentProvider);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } else {
      reject({
        error: 'NonEthereumBrowser',
        message: 'Install MetaMask or a compatible Ethereum browser extension.'
      });
    }
  });
};

export default getWeb3;
