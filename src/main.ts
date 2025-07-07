import { createApp } from "vue";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";
import App from "./App.vue";
import router from "./router";

import "vue-toast-notification/dist/theme-sugar.css";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(ToastPlugin);
app.use(router);
app.use(pinia);
app.mount("#app");
