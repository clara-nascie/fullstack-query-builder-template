export default {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.db',
    },

    pool: {
        //garante que as chaves estrangeiras estejam habilitadas
        afterCreate: (connection: any, done: any) => {
            connection.run("PRAGMA foreign_keys = ON")
            done()
        }
    },
    //ignora valores undefinied e transforma em null
    useNullAsDefault: true,
    //habilita o uso de campos auto incrementais
    migrations: {
        extension: "ts",
        directory: "./src/database/migrations",
    },
    seeds: {
        extension: "ts",
        directory: "./src/database/seeds",
    }
}