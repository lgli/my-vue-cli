import Vue from 'vue'
import App from './App.vue'
/*引入elementUI*/
import ElementUI from 'element-ui'
/*引入elementUI主题*/
import 'element-ui/lib/theme-chalk/index.css'

/*引入elementUI国际化*/
import locale from 'element-ui/lib/locale/lang/en'

/*引入element弹框消息*/
import MessageBox  from 'element-ui'

/*引入vue.router*/
import VueRouter from 'vue-router'








Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ElementUI,{locale});
Vue.use(MessageBox);
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
}).$mount('#app');
