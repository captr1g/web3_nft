
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
