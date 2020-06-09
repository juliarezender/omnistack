const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    //  retornar lista de spots
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech })

        return res.json(spots);
    },

    async store(req, res) {

        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; //  contexto da nossa aplicação, na autenticação ele é sempre utilizado

        const user = await User.findById(user_id);

        //  se não tiver usuario envia uma mensagem de erro
        if (!user) {
            return res.status(400).json({ error: 'User does not exists'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), //  percorre o array e divide ele onde tem virgula
                                                            //  o map é pra eliminar o espaço nas virgulas
            price
        })


        return res.json(spot);
    }
};