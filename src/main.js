import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import '@/assets/styles/style.scss'

createApp(App).use(store).use(router).use(Antd).mount('#app')
