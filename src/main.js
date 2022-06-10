import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import { createWebHistory, createRouter } from "vue-router";
import Home from './components/HelloWorld.vue';
import MovieDetails from './components/MovieDetails.vue';
// import axios from 'axios';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/movie",
        name: "MovieDetails",
        component: MovieDetails
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.use(Antd).mount('#app');
