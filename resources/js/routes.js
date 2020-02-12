import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent.vue';
import Profile from './components/Profile.vue';
import Vue from 'vue';

let routes = [
  
    {
        path: '/profile',
        component: Profile
    },
    {
        path:'/', 
        component:ExampleComponent
    }
];

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode:'history'
});