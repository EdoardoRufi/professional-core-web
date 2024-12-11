import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/UI/BaseCard.vue';


const app = createApp(App)

app.component('base-card', BaseCard);

app.use(router);
app.use(store);

window.bootstrap = require("bootstrap")

app.mount('#app');
