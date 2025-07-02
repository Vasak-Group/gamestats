import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: "WebSiteLayout",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
    meta: {
      layout: "CleanLayout",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/auth/Register.vue"),
    meta: {
      layout: "CleanLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
