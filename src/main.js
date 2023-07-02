import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
import router from './router/index.js'
import front from './assets/js/front.js'
import "./assets/css/style.css";


// loadFonts()

createApp(App)
  .use(router)
  .use(front)
  .use(vuetify)
  .mount('#app')
