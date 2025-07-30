import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";
import { secureMiddleware } from "@/router/middleware/secureURLMiddleware";

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
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      layout: "WebSiteLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/servers",
    name: "Servers",
    redirect: { name: "ServerRank" },
    meta: {
      layout: "WebSiteLayout",
    },
    children: [
      {
        path: "my",
        name: "MyServers",
        component: () => import("@/views/servers/MyServers.vue"),
        meta: {
          layout: "WebSiteLayout",
          requiresAuth: true,
        },
      },
      {
        path: "rank",
        name: "ServerRank",
        component: () => import("@/views/servers/Rank.vue"),
        meta: {
          layout: "WebSiteLayout",
        },
      },
      {
        path: "list",
        name: "ServerList",
        component: () => import("@/views/servers/Servers.vue"),
        meta: {
          layout: "WebSiteLayout",
        },
      },
      {
        path: ":id",
        name: "ServerDetails",
        component: () => import("@/views/servers/Server.vue"),
        meta: {
          layout: "WebSiteLayout",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(loadLayoutMiddleware);
router.beforeEach(secureMiddleware);

export default router;
