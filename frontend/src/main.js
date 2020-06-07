import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

//Importa home para criar a rota
import Home from "./components/Home";

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
];

//Instacia o router do vue
const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: (h) => h(App),
  router, //Passa para o vue as configurações das rotas
}).$mount("#app");
