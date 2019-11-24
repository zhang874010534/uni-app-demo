import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$defaultUrl='https://diandian.ngrok2.xiaomiqiu.cn'

const app = new Vue({
    ...App
})
app.$mount()
