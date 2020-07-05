import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//Importa os serviços de requição
import donoService from "../services/donoService";
import { Search } from "../Search";

Vue.prototype.$donoService = donoService;
Vue.prototype.$server = Search;

//Importa componentes para criar a rota
import Home from "./components/Home";
import Donos from "./components/Donos";
import Dono from "./components/Dono";
import Register from "./components/Register.vue";
import "./quasar";

//Usar o VueRouter
Vue.use(VueRouter);

Vue.config.productionTip = false;

//Cria os objetos para as rotas
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Donos",
    path: "/donos",
    component: Donos,
  },
  {
    name: "Dono",
    path: "/donos/:id",
    component: Dono,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
];

//Instacia o router do vue
const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: (h) => h(App),
  router, //Passa para o vue as configurações das rotas
}).$mount("#app");
