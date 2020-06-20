import { Request, Response } from "express";
import knex from '../database/conection';

class ProcessoController {
    
    // Query de Login no banco dedados
    // Recebe da tela os dados de numero do precesso e senha 
    // caso estejam corretos retorna para a tela o id do processo
    // senão irá retornar uma mensagem de erro para o usuario
    async login(request: Request, response: Response){
        const {nprocesso, psenha} = request.query;
        console.log(request.query)
        
        const processo = await 
            knex('processo')
            .where({
                numeroProcesso: String(nprocesso),
                senha: psenha
            })
            .select('processo.id').first();

        if (processo === undefined) {
            return response.json("erro")
        }

        return response.json(processo);
    }

    //Query para popular tela de detalhe
    // Com o id do processo pega todos os dados da tabela processo
    // faz um inner join com a tabela de pessoaProcesso para pegar os dados 
    // da pessoa e popular a tela de detalhe 
    async show(request: Request, response: Response){
        const {id} = request.params

        const processo = await 
            knex('processo')
            .where({
                id: id
            })
            .select('processo.*').first();

        const pessoa = await 
            knex ('pessoa')
            .join('pessoaProcesso', 'pessoa.id', '=', 'pessoaProcesso.id_pessoa')
            .where('pessoaProcesso.id_processo', processo.id)
            .select('pessoa.*').first();

        console.log(pessoa+processo)

        const pessoaProcesso = [pessoa,processo]

        console.log(pessoaProcesso)

            
        return response.json(pessoaProcesso);
    }
}

export default ProcessoController;