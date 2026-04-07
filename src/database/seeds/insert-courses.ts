import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        { name: "Node.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
        { name: "C#" },
        { name: "Go" }
    ]);
};
