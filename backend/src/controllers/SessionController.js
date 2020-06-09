const User = require('../models/User');

/* index: criando um metodo que retorna uma listagem de sessões
 show: listar uma unica sessão,
 store: criar uma sessão, 
 update: alterar uma sessão, 
 destroy: remover/deletar uma sessão */

//  metodos disponiveis que a gente pode ter dentro de um controller (PADRAO)

module.exports = {
    async store(req, res) {
        const email = req.body.email;  //   se fizer { email } = req.body; funciona tb
        
        let user = await User.findOne({ email: email});

        //  só vai criar um novo usuário se ele nao existir ainda
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};