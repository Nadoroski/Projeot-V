import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('processo').insert([{
        senha: '123456789',
        numeroProcesso: '0000001-00.2019.08.16.0000',
        penaTotal: '3 anos e 2 dias',
        remicoes: '0 dias',
        penaCumprida: '1 ano, 3 meses e 20 dias',
        penaRemanescente: '1 ano e 9 meses',
        regimeBeneficio: 'Aberto',
        condicoesCumprimento: '----',
        periodoApresentacoes: '10/03/2019 - 29/03/2022',
        ciclo: 'Mensal',
        documentosPendentes: 'Nenhum'
    },{
        senha: '123456789',
        numeroProcesso: '0000002-00.2012.08.16.0000',
        penaTotal: '10 anos, 3 meses e 14 dias',
        remicoes: '7 meses e 18 dias',
        penaCumprida: '9 anos e 18 dias',
        penaRemanescente: '1 ano, 2 meses e 26 dias',
        regimeBeneficio: 'Livramento condicional',
        condicoesCumprimento: '----',
        periodoApresentacoes: '30/01/2012 - 25/09/2021',
        ciclo: 'Mensal',
        documentosPendentes: 'Comprovante de trabalho'
    }])
}