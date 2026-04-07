import type { Knex } from "knex";

//função up cria a tabela
export async function up(knex: Knex): Promise<void> {
    //cria a tabela courses 
    await knex.schema.createTable('courses', (table) => {
        //coluna id auto incrementa e é chave primaria
        table.increments("id").primary();
        //coluna name texto não pode ser nula
        table.text("name").notNullable();
        //coluna created_at data e hora atual
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}

//função down deleta a tabela
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("courses");
}

