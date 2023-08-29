import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import User from "../views/users/_id.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/users/index.vue"),
    },
    { path: "/users/:id", component: User },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router
