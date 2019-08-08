const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    const { devId } = req.params;
    const { user } = req.headers;

    // busca instancia do usuario logado pelo id.
    const loggedDev = await Dev.findById(user);
    // busca instancia do usuario que ira receber o dislike.
    const targetDev = await Dev.findById(devId);

    if(!targetDev){
      return res.status(400).json({ error: 'Dev não existe' });
    }

    loggedDev.dislikes.push(targetDev._id);
    await loggedDev.save();

    return res.json(loggedDev);
  }

}