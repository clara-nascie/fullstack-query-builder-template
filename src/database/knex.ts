import {knex as KnexConfig} from "knex"
import config from "../../knexfile.ts"

// Configuração do knex
export const knex = KnexConfig(config)
