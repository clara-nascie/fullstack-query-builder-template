import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    //criação da tabela course_modules com id, nome e relação com a tabela courses
    return knex.schema.createTable("course_modules", (table) => {
        table.increments("id").primary();
        table.text("name").notNullable();

        //relação 1:N (um curso tem muitos módulos), relaciona o id do curso com o id da tabela courses
        table.integer("course_id").notNullable().references("id").inTable("courses").onDelete("CASCADE");
    });
}


export async function down(knex: Knex): Promise<void> {
    //remoção da tabela course_modules
    return knex.schema.dropTable("course_modules");
}

