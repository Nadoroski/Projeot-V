import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('pessoa').insert(
        {
            nomeCompleto: 'Unidade de Teste', 
            cpf:'12345678901', 
            endereco: 'Rua teste 0000', 
            telefone: '1234567890'
        }
    )
}