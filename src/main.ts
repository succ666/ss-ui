import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
import Button from './button'
import Sheep from '../build'

createApp(App).use(Sheep).mount('#app')
