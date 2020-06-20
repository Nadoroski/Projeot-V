import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pessoa', table => {
        table.increments('id').primary();
        table.string('nomeCompleto').notNullable();
        table.string('dataNascimento').notNullable();
        table.string('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.string('nomeDaMae').notNullable();
        table.string('nomeDoPai').notNullable();

    }) 
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pessoa');
}