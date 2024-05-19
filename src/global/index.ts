
// 在一个ts文件中，编写一个全局注册的函数，该函数能够全局注册Element Plus组件和图标。

// 引入Element Plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 引入Element Plus 图标
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// import type { App } from 'vue'


// 一种写法
// export default{
//     install:(app:App)=>{
//         app.use(ElementPlus)
//     }
// }

// 另一种写法
// 全局注册
// export const registerGlobalComponent =(app:App)=>{
//     // app.use(ElementPlus)
//     // 全局注册Element Plus 图标
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }
// }


// 分开引入
import registerElenemtPlus from './registerElenemtPlus'
import registerElementPlusIcon from './registerElementPlusIcon'
import type {App} from "vue"
export const setRegisterGlobal =(app:App)=>{
    app.use(registerElenemtPlus)
    app.use(registerElementPlusIcon)
}