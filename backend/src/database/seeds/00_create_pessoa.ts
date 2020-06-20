import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('pessoa').insert(
        {
            nomeCompleto: 'Unidade de Teste', 
            dataNascimento: '10/01/1990',
            cpf:'12345678901', 
            endereco: 'Rua teste 0000', 
            telefone: '1234567890',
            nomeDaMae: 'Unidade Teste Mae',
            nomeDoPai: 'Unidade Teste Pai',
        }
    )
}