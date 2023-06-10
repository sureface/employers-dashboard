import App from 'App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export const elementPlusIcons = (app: App<Element>) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}
