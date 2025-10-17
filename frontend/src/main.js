import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import 'aos/dist/aos.css';
import AOS from 'aos'

const app = createApp(App);

app.use(router);
app.mount("#app");

setTimeout(() => {
    AOS.init({
        duration: 1000,    
        once: true,      
    });
}, 100);
