import express, {request, response} from 'express';
import ProcessoController from './controllers/ProcessoController';

const routes = express.Router();

const processoController = new ProcessoController();

routes.get('/processo', processoController.login);
routes.get('/processo/:id', processoController.show)

export default routes;