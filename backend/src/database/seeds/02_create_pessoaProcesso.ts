import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('pessoaProcesso').insert({
        id_pessoa: 1,
        id_processo: 2,
    })
}