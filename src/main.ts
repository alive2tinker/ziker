import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* Tailwind Sheet */
import './assets/tailwind.css';

const pinia = createPinia()
const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'ar',
  messages: {
    // set something locale messages ...
    ar: import('@/locales/ar.json'),
    en: import('@/locales/en.json')
  },
  legacy: false
})
const app = createApp(App)
  .use(IonicVue).use(i18n)
  .use(router).use(pinia);
  
router.isReady().then(() => {
  app.mount('#app');
});