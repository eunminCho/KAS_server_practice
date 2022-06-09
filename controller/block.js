const caver = require('../caver/caver')


module.exports = async (req, res) => {
  try{
    const tx = req.params.tx;
    if(tx.slice(0,2) === '0x'){
      const block = await caver().rpc.klay.getBlockByHash(req.params.tx);
      res.send(block);
    }
    else{
      const block = await caver().rpc.klay.getBlockByNumber(req.params.tx);
      res.send(block);
    }
  }
  catch(e){
    console.log(e);
    res.send({status:500})
  }

}
