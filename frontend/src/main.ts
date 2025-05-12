import './assets/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import { TemplateParamsPlugin } from 'unhead/plugins'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead({
  plugins: [TemplateParamsPlugin],
  init: [
    {
      htmlAttrs: {
        lang: 'en',
      },
    },
  ],
})

head.push({
  templateParams: {
    brand: 'Yeap Crew',
  },
  titleTemplate: '%s %separator %brand',
})

app.use(head)

app.use(createPinia())
app.use(router)

app.mount('#app')
