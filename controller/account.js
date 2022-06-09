const caver = require('../caver/caver')

module.exports = async (req, res) => {
  try{
    const account = await caver().rpc.klay.getAccount(req.params.tx);
    res.send(account);
  }catch(e){
    console.log(e);
    res.send({state: 500})
  }
}