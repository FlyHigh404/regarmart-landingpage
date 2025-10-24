import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import App from "@/App.vue";
import router from "@/router";
import "@/style.css";
import 'aos/dist/aos.css';
import AOS from 'aos'

import id from '@/locales/id.json'
import eng from '@/locales/eng.json'

import { VueReCaptcha } from 'vue-recaptcha-v3'

const i18n = createI18n({
  legacy: false, 
  locale: localStorage.getItem('lang') || 'id',
  fallbackLocale: 'eng', 
  escapeParameter: true,
  messages: {
    id,
    eng
  }
})

const app = createApp(App)

app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true 
  }
})
app.use(i18n);
app.use(router);
app.mount("#app");

setTimeout(() => {
    AOS.init({
        duration: 1000,    
        once: true,      
    });
}, 100);
