import { createApp } from 'vue'
import './style.css'
import router from './routers'
import App from './App.vue'
// UI框架 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import "@/styles/element-dark.scss";
// 引入阿里图标库
// import "@/assets/iconfont/iconfont.css";
// import "@/assets/iconfont/iconfont.js";


const app = createApp(App)
app.use(router)
app.use(ElementPlus).mount('#app')