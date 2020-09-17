import { createApp } from 'vue'
import App from './App.vue'

import Plus from './pages/plus.vue'
import Minus from './pages/minus.vue'
import Times from './pages/times.vue'
import Dividing from './pages/dividing.vue'

if(window.location.pathname == "/"){
    createApp(App).mount('#app')
}else if(window.location.pathname == "/plus"){
    createApp(Plus).mount('#app')
}else if(window.location.pathname == "/minus"){
    createApp(Minus).mount('#app')
}else if(window.location.pathname == "/times"){
    createApp(Times).mount('#app')
}else if(window.location.pathname == "/dividing"){
    createApp(Dividing).mount('#app')
}