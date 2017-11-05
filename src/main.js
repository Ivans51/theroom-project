import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Head from './Head.vue'
import Foot from './Foot.vue'
import NavOne from './NavOne.vue'
import Podcast from './Podcast.vue'
import RoomRated from './RoomRated.vue'
import Programming from './Programming.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/podcast/:id', name: 'podcast', component: Podcast},
    {path: '/roomrated', component: RoomRated},
    {path: '/programming', component: Programming},
    {path: '/home', component: Home},
    {path: '/', component: Home},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('home', Home)
Vue.component('headroom', Head)
Vue.component('footroom', Foot)
Vue.component('navone', NavOne)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
