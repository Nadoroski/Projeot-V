import { Request, Response } from "express";
import knex from '../database/conection';

class ProcessoController {
    
    async login(request: Request, response: Response){
        const {nprocesso, psenha} = request.query;
        
        const processo = await 
            knex('processo')
            .where({
                numeroProcesso: String(nprocesso),
                senha: psenha
            })
            .select('processo.*').first();

            console.log(processo);

            if (Object.keys(processo).length === 0) {
                return response.json("seu login ou senha está errado")
            }

            return response.json(processo);
    }
}

export default ProcessoController;