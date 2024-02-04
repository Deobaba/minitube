import {config} from "dotenv"
// import path from "path"


config({ path :__dirname + "/../../.env"})

export const PORT = process.env.PORT || 3000
export const DB_NAME = process.env.DB_NAME || "postgres"
export const DB_USER = process.env.DB_USER || "postgres"
export const DB_PASSWORD = process.env.DB_PASSWORD || "postgres"
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_DIALECT = process.env.DB_DIALECT || "postgres"
// export const DB_POOL_MAX = process.env.DB_POOL_MAX || 5
// export const DB_POOL_MIN = process.env.DB_POOL_MIN || 0
// export const DB_POOL_ACQUIRE = process.env.DB_POOL_ACQUIRE || 30000
// export const DB_POOL_IDLE = process.env.DB_POOL_IDLE || 10000
// export const DB_LOGGING = process.env.DB_LOGGING || false
// export const DB_FORCE = process.env.DB_FORCE || false
