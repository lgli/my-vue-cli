import Vue from 'vue'
import App from './App.vue'
/*引入elementUI主题*/
import 'element-ui/lib/theme-chalk/index.css'
/*引入elementUI国际化*/
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale';
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
Vue.use(MessageBox);
Vue.use(VueRouter);
Vue.use(VueI18n);
// Vue.use(Cf);



const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  messages: {
    zh: Object.assign(require("./lang/zh"), zhLocale),
    en: Object.assign(require("./lang/en"), enLocale)
  }
});
locale.i18n((key, value) => i18n.t(key, value));

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app');
