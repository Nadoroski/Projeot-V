import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('pessoa').insert(
        [{
            nomeCompleto: 'João Silva', 
            dataNascimento: '10/01/1990',
            cpf:'12345678901', 
            endereco: 'Rua teste 0000', 
            telefone: '1234567890',
            nomeDaMae: 'Maria Silva',
            nomeDoPai: 'José Silva',
        },
        {
            nomeCompleto: 'Guilherme Jr Guedes', 
            dataNascimento: '10/01/1990',
            cpf:'12345678901', 
            endereco: 'Rua teste 0000', 
            telefone: '1234567890',
            nomeDaMae: 'Tacyane Guedes',
            nomeDoPai: 'Guilherme Guedes',
        }]
    )
}