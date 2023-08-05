import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/HomePage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
