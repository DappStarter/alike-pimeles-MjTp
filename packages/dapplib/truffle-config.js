require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strike cruise remain pulse grace office army gasp'; 
let testAccounts = [
"0xeab9f30444ebbcf047999b1807b8c0d44a3f1e50cca8e5ae1962c41ee258f8f5",
"0xff8e07fa574be0f838a9a74cf4b0bb3851a6552a1d8d5bb2b8a50eb0147b991b",
"0x0d55289274e969795c6005566bd295e3f5a664ab26b838986df05708099d9b9f",
"0xd3765733d8d68e161dde592f3f0c743d23112c1841aec6cdb936cb4f6678b672",
"0x7a8783cdf3373a16079b280e5f9a6b8c8a0a9af9a636672e841da832a5d6dca5",
"0x9195442f96536d21effa9c2f65ac74adc4fdcd5edec38d5f8dcdba97165437b8",
"0xd3bdd13344ccd9ea56c5013aa0e1c00b0d0cd542ccc6d6e25471d6c5be758617",
"0x3b9680c9c8dbd3f67a5814e0a1fe0e45fb3cd132064fb0304e05b913ab572d1f",
"0x31af053aa31b1a3d7e1c9fb9da981d5ce34bb02d4c332bbf204d890e23438b5d",
"0x5ebb8256c41c26fcc2e4f1e6fa79972d9b45be1ce2fa23bddb2ea5e8174e3a42"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


