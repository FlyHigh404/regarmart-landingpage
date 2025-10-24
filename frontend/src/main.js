import { createApp } from "vue";
import { createHead } from '@vueuse/head' 
import App from "./App.vue";
import router from "./router";
import "./style.css";
import 'aos/dist/aos.css';
import AOS from 'aos'

import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App)
const head = createHead()

app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true 
  }
})

app.use(head);
app.use(router);
app.mount("#app");

setTimeout(() => {
    AOS.init({
        duration: 1000,    
        once: true,      
    });
}, 100);