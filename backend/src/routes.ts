import express, {request, response} from 'express';
import ProcessoController from './controllers/processoController';

const routes = express.Router();

const processoController = new ProcessoController();

routes.get('/processo', processoController.login);

export default routes;