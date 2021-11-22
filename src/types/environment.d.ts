declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string,
            VAULT_URL: string,
            VAULT_TOKEN: string,
        }
    }
}

export {};
