/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from "vue";
import VueCurrencyInput from "vue-currency-input";
import "focus-visible";

import App from "./App.vue";
import router from "./router";

import "./styles.css";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

const currencyPluginOptions = {
  globalOptions: {
    currency: null,
    valueAsInteger: true,
    allowNegative: false,
    locale: "en",
  },
};

Vue.config.productionTip = false;

Vue.use(VueCurrencyInput, currencyPluginOptions);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
