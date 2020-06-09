const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        //  buscando todos os spots cujo user == user_id, por meio do cabeçalho
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}