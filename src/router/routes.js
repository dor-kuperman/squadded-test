import Vue from "vue";
import VueRouter from "vue-router";
import mainPage from '../views/main-page.vue'
import userPage from '../views/user-page.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: mainPage
    },
    {
        path: '/user/:id',
        name: 'UserPage',
        component: userPage
    },

]
const router = new VueRouter({
    routes
})