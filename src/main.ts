import { createApp } from 'vue'
import { setupElementPlus } from './plugins/elementPlus'
import 'element-plus/dist/index.css'
import './style.scss'
import 'animate.css';
import App from './App.vue'
import { setupStore } from './store'
import {elementPlusIcons} from "./plugins/elementPlusIcons";
import {setupRouter} from "./router";

const setupAll = () => {
    const app = createApp(App)

    setupStore(app)

    setupElementPlus(app)

    elementPlusIcons(app)

    setupRouter(app)

    app.mount('#app')
}

setupAll()