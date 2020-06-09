import Knex from 'knex';

export async function up(kenx: Knex) {
    return kenx.schema.createTable('pessoaProcesso', table=>{
        table.increments('id').primary();
        table.integer('id_pessoa').notNullable().references('id').inTable('pessoa');
        table.integer('id_processo').notNullable().references('id').inTable('processo');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pessoaProcesso');
}