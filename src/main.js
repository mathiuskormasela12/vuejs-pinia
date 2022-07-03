import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Setup Pinia
createApp(App).use(createPinia()).mount("#app");
