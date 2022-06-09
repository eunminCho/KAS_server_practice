const CaverExtKAS = require('caver-js-ext-kas');
const dotenv = require('dotenv')
dotenv.config();

module.exports= () =>{
  const accessKeyId = process.env.ACCESS_KEY_ID;
  const secretAccessKey = process.env.SECRET_ACCESS_KEY;
  const chainId = process.env.CHAIN_ID
  const caver = new CaverExtKAS()
  caver.initKASAPI(chainId, accessKeyId, secretAccessKey);
  return caver;
} 