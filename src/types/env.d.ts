declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
