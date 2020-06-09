import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('processo', table=> {
        table.increments('id').primary();
        table.string('senha').notNullable();
        table.string('numeroProcesso').notNullable();
        table.string('penaTotal').notNullable();
        table.string('remicoes').notNullable();
        table.string('penaCumprida').notNullable();
        table.string('penaRemanescente').notNullable();
        table.string('regimeBeneficio').notNullable();
        table.string('condicoesCumprimento').notNullable();
        table.string('ciclo').notNullable();
        table.string('periodoApresentacoes').notNullable();
        table.string('documentosPendentes').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('processo');
}