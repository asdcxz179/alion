/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GOOGLE_API_KEY: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}