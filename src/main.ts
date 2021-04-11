import { createApp } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
