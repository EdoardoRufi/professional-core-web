import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/UI/BaseCard.vue';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS (optional, only if you need Bootstrap's JavaScript plugins)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.component('base-card', BaseCard);

app.use(router);
app.use(store);

app.mount('#app');
