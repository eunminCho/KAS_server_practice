const caver = require('../caver/caver')


module.exports = async (req, res) => {

  try{
    const transaction = await caver().rpc.klay.getTransactionByHash(req.params.tx);
    res.send(transaction);
  }
  catch(e){
    console.log(e);
    res.send({state: 500})
  }

}