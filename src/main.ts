import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'

const app = createApp(App).use(store)
app.use(Antd)
app.mount('#app')
