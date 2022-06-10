const caver = require('../caver/caver')
const dotenv = require('dotenv')
const CaverExtKAS = require('caver-js-ext-kas')
dotenv.config()

module.exports = async (req, res) => {
  const callArguments = [
    {
      type: 'address',
      value: '0xD54636956239d597A608217A3380dF97ffd13FCA'
    },
    // {
    //   type: 'uint8',
    //   value: 1
    // },
    // {
    //   type: 'string',
    //   value: '20220315'
    // }
  ]
  const sendOptions = {
    from: process.env.USING_ACCOUNT,
    gas: 300000,
    value: 0
  }
  const tx = {
    from: process.env.USING_ACCOUNT,
    to: '0x7d728f6f2c539b82da18eb911382c015fb894b7b',
    value: 0,
    //임의의 input data 
    input: '',
    gas: 500000,
    submit: true
  }
  try{
    const receipt = await caver().kas.wallet.callContract('0x7d728f6f2c539b82da18eb911382c015fb894b7b', 'getCertificate', callArguments, sendOptions);
    console.log(receipt)
    tx.input = receipt.data
    const result = await caver().kas.wallet.requestSmartContractExecution(tx);
    res.send(result);
  }catch(e){
    console.log(e);
    res.send({state: 500})
  }
}