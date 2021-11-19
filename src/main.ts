import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useFirebase from "@/composables/useFirebase";
useFirebase();
createApp(App).use(router).mount("#app");
