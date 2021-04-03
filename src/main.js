import Vue from 'vue'
import App from './App.vue'
/*引入elementUI*/
import ElementUI from 'element-ui'
/*引入elementUI主题*/
import 'element-ui/lib/theme-chalk/index.css'

/*引入elementUI国际化*/
// import lang from 'element-ui/lib/locale/lang/en'

import locale from 'element-ui/lib/locale/lang/en'


/*引入element弹框消息*/
import MessageBox  from 'element-ui'

/*引入vue.router*/
import VueRouter from 'vue-router'

/*引入全局变量*/
import GlobalInfo from '@/global/Global'
// import Cf from '@/global/CommonFunction'



// locale.use(lang);

/*绑定全局变量到vue中，方便所有模块儿使用*/
Vue.prototype.GlobalInfo = GlobalInfo;


Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(ElementUI,{locale});
Vue.use(MessageBox);
Vue.use(VueRouter);
// Vue.use(Cf);


new Vue({
  render: h => h(App),
}).$mount('#app');
