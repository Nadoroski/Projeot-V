import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

// express é um framework para lidar com as rotas da aplicação
const app = express();

// cors é usado para quem pode ou quem n pode acessar o back-end
app.use(cors());

// é para usar o formato de json nas respostas e nas requisições
app.use(express.json());

// é para acessar as rotas da aplicação
app.use(routes);

// informar o servidor em qual porta ele irá funcionar
app.listen(3333)