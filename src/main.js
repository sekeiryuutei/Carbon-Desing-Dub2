import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'carbon-components/css/carbon-components.css';
//import CarbonComponentsVue from '@carbon/vue/src/index';
//Vue.use(CarbonComponentsVue);
Vue.config.productionTip = false;
import CarbonComponentsVue from "@carbon/vue";
Vue.use(CarbonComponentsVue);
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");