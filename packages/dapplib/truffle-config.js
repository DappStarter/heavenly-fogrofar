require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain social guess nature sunset select'; 
let testAccounts = [
"0xdcd903ce24f607ab459f041e21a03b587b2109409c1ff5673ecef70ccf114b83",
"0xefdc7b2545ba87b6aadb56d164f08b8d3d106e825da1c91f013a3446e69c6aa5",
"0x7f27bb7566cdbc3c93e62e6bdb2e084d5bc00352057cee9f0d26e8dd6b0d5424",
"0x9c2ecd73634070576403cb8165a40701796bed0a8053892a8858c8f521521d16",
"0x9928c148d5b5310e593de0cdbe5c88d4db18127fa8494cad27404274ca50ddb6",
"0x3f8ff05407543184e5710be79f181fd5c1700ae3fb19520986cc05ea52397651",
"0x420275c447d385cb9ed1fa5f332ef67da8942f95b708c0448d53c6afb70fe430",
"0x97ce894e44d853b848b92c383c7fcf1fb9a589a72e2a5ae10aead00c6de2adf4",
"0x63cf6b5c45218db7796ee9fd6d871431ea72152eed36b22a25bc9d4db39c7a65",
"0x0b08bfe29ea83556c9aafe283506742c86e2ce2cd18f85592aabc961691905e7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
