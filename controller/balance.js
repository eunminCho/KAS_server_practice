const caver = require('../caver/caver')


module.exports = async (req, res) => {

  const hexToDecimal = hex => parseInt(hex, 16)
  try{
    let balance = await caver().rpc.klay.getBalance(req.params.tx);
    res.send({data: parseFloat(hexToDecimal(balance)/1000000000000000000)});
  }
  catch(e){
    console.log(e);
    res.send({state: 500})
  }

}