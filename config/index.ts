import {defaultTo} from "ramda";

const appConfig = {
    development: {
        vaultUrl: process.env.VAULT_URL,
        vaultRootToken: process.env.VAULT_TOKEN,
        port: process.env.PORT
    },
    production: {
        vaultUrl: process.env.VAULT_URL,
        vaultRootToken: process.env.VAULT_TOKEN,
        port: process.env.PORT
    },
};

export type AppConfigType = typeof appConfig;

export default defaultTo(
    appConfig[process.env.NODE_ENV],
    appConfig["development"]
)


