export default {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.db',
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