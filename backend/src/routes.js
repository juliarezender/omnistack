const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

/* GET: buscar informação do backend
   POST: criar uma nova informaçao no backend
   PUT: editar alguma informação
   DELETE: deletar alguma informção*/


//  req.query = Acessar query params (para filtros)
//  req.params =  Acessar route params (para edição, delete)
//  req.body = Acessar corpo da requisição (para criação, edição)

//  ta mandando uma requisição de post puxando as informações que estão dentro de SessionController.store
//  assim que chamar o localhost:3333/sessions a requisição é executada 

routes.post('/sessions', SessionController.store);

//  rota que faz a listagem
routes.get('/spots', SpotController.index);
//  rota que receberá o upload de imagem, .single pois é uma unica imagem, e passa o nome do campo 
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store)


module.exports = routes;