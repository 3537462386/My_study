import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import { createPinia } from "pinia";
import router from "./router";
import { createHead } from "@vueuse/head"


const head = createHead();


app
    .use(head)
    .use(router)
    .use(createPinia())
    .mount("#app");
