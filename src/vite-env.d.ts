//. <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_NAGER_API: string; 
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }