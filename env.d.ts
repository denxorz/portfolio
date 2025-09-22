/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts-next/client" />

// Clicky Analytics global declarations
declare global {
  interface Window {
    clicky: {
      log: (path: string, title: string, type: string) => void
    }
  }
}