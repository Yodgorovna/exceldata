import { createRouter, createWebHistory } from "vue-router";
import defaultLayout from "@/layouts/defualt.vue";
import emptyLayout from "@/layouts/empty.vue";
import HomeView from "@/views/HomeView.vue";
import User from "@/views/users/_id.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: defaultLayout,
      },
    },
    {
      path: "/users",
      name: "users",
      components: {
        default: () => import(/*for lazy load*/ "../views/users/index.vue"),
        modal: () => import("@/components/DeleteModal.vue"),
      },
      meta: {
        layout: defaultLayout,
      },
    },
    {
      path: "/users/:id",
      name: "userId",
      component: User,
      meta: {
        layout: defaultLayout,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        layout: emptyLayout,
      },
    },
  ],
});

export default router;
