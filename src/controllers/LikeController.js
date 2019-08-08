const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    const { devId } = req.params;
    const { user } = req.headers;

    // busca instancia do usuario logado pelo id.
    const loggedDev = await Dev.findById(user);
    // busca instancia do usuario que ira receber o like.
    const targetDev = await Dev.findById(devId);

    

    return res.json({ likeDev });
  }

}