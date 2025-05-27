import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/all.js';
import './assets/main.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');