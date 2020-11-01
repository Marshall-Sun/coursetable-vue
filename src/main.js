import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";

import { Layout } from "ant-design-vue";
import { Cascader } from "ant-design-vue";
import { Table } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Layout);
Vue.use(Cascader);
Vue.use(Table);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
