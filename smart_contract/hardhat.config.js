//https://eth-goerli.g.alchemy.com/v2/57SxJ80Sg9XRFWXSF6JkaK-aDGZb37Zn
require('@nomicfoundation/hardhat-chai-matchers');

module.exports ={
  solidity: '0.8.0',
  networks:{
    goerli : {
      url:'https://eth-goerli.g.alchemy.com/v2/QDtFx909CyztC9Tig1x_cK9uF4uNqjy_n',
      accounts:['71c9c8875a3103a7874601f1f653abb36b2a74eac1a082b7762e998e61aecf59']
    }
  }
}