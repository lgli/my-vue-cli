import Vue from 'vue'
import App from './App.vue'
/*引入elementUI*/
import ElementUI from 'element-ui'
/*引入elementUI主题*/
import 'element-ui/lib/theme-chalk/index.css'
/*引入elementUI国际化*/
// import lang from 'element-ui/lib/locale/lang/en'
import Locale from 'element-ui/lib/locale/lang/en'

//引入vue-i18国际化
import VueI18n from 'vue-i18n'

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
Vue.use(ElementUI,{Locale});
Vue.use(MessageBox);
Vue.use(VueRouter);
// Vue.use(GlobalInfo);
Vue.use(VueI18n);
// Vue.use(Cf);

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('@/lang/zh'),   // 中文语言包
    'en-US': require('@/lang/en')    // 英文语言包
  }
})


new Vue({
  render: h => h(App),i18n
}).$mount('#app');
