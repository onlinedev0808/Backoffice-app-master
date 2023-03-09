import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import Vuex from '@/vuex'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import 'vue-toastification/dist/index.css'
import './assets/styles/index.scss'
import vClickOutside from 'click-outside-vue3'
import Cloudinary from 'cloudinary-vue'
import mitt from 'mitt'
import Toast, { POSITION, useToast } from 'vue-toastification'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";    
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(PrimeVue);
app.use(Router)
app.use(Vuex)
app.use(VueTelInput)
app.use(vClickOutside)
app.use(Cloudinary, {
  configuration: {
    cloudName: 'mediacloudfor247paintings'
  }
})
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  draggable: false,
  hideProgressBar: false,
  icon: true
})

app.provide('$emitter', mitt())
app.provide('$toast', useToast())

app.mount('#app')
