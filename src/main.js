import {createApp} from 'vue'
import App from './App.vue';
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons'
import BoardView from './UI/BaseBoard.vue'
import '@fortawesome/fontawesome-free/css/all.css'

const app=createApp(App)
app.component('board-view',BoardView)

app.use(router)

app.mount('#app')