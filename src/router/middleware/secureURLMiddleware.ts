import { authStore } from "@/stores/auth.store";

export const secureMiddleware = (to: any, from: any, next: any) => {
  const store = authStore();
  const isAuthenticated = store.isAuthenticated();
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next("/login");
    } else if (to.path === "/login" || to.path === "/register") {
      next("/");
    } else {
      next();
    }
  } else {
    if (isAuthenticated && (to.path === "/login" || to.path === "/register")) {
      next("/");
    }
    next();
  }
};
