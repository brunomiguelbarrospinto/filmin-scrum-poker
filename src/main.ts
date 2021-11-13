import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useFirebase from "@/composables/useFirebase";
const { init } = useFirebase();
init();
createApp(App).use(store).use(router).mount("#app");
