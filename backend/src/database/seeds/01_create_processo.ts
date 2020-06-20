import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('processo').insert({
        senha: '123456789',
        numeroProcesso: '0000002-00.2020.08.22.0000',
        penaTotal: '6 anos',
        remicoes: '1 ano,2 meses e 3 dias',
        penaCumprida: '3 anos, 2 meses e 15 dias',
        penaRemanescente: '0',
        regimeBeneficio: 'Regime Fechado',
        condicoesCumprimento: 'Solitaria',
        periodoApresentacoes: '--',
        ciclo: '--',
        documentosPendentes: 'Todos entregues'
    })
}