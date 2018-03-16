import Vue from 'vue';
import App from './App.vue';
import Vuex from 'Vuex';
import HelloVuex from './store/HelloVuex';
Vue.use(Vuex);

new Vue({
    store:new Vuex.Store({
        modules:{HelloVuex}
    }),
    render: h=>h(App)
}).$mount('#root')