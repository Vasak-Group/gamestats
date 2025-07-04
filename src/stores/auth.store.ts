import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "@/services/backendConnector";

export const authStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref("");

  function setUser(newUser: any) {
    user.value = newUser;
  }

  function clearUser() {
    user.value = null;
    token.value = "";
  }

  function auth(email: string, password: string) {
    api
      .POST("/auth/login", { email, password }, token.value)
      .then((response: any) => {
        if (response.token) {
          token.value = response.token;
          user.value = response.user;
        } else {
          throw new Error("Authentication failed");
        }
      })
      .catch((error: any) => {
        console.error("Authentication error:", error);
        clearUser();
      });
  }

  function isAuthenticated() {
    return !!token.value && !!user.value;
  }

  return {
    user,
    isAuthenticated,
    token,
    setUser,
    clearUser,
  };
});
