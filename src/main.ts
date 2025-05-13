import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Erstellen der App-Instanz
const app = createApp(App);

// Router einbinden
app.use(router);

// App am #app Element mounten
app.mount('#app');