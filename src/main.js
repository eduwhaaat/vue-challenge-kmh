import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

import VueRouter from "vue-router";
Vue.use(VueMaterial, VueRouter);

Vue.config.productionTip = false;

import AddUser from "./components/users/AddUser.vue";
import EditUser from "./components/users/EditUser.vue";
import UsersTable from "./components/users/UsersTable.vue";
import SecurityComponent from "./components/security/SecurityComponent.vue";

const routes = [
  {
    name: "users",
    path: "/users/",
    component: UsersTable
  },
  {
    name: "security",
    path: "/security/",
    component: SecurityComponent
  },
  {
    name: "add",
    path: "/users/add",
    component: AddUser
  },
  {
    name: "edit",
    path: "/users/edit/:id",
    component: EditUser
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");

/* new Vue({
  render: h => h(App),
}).$mount('#app') */
