import './style.css';
import './assets/css/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const app = createApp(App);

// ใช้การกำหนดประเภท (TypeScript)
app.component<FontAwesomeIcon>('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(vuetify);
app.mount('#app');
