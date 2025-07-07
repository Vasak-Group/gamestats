import { defineStore } from "pinia";
import { ref } from "vue";

export const authStore = defineStore("auth", () => {
  const user = ref(JSON.parse(localStorage.getItem("user") || "null"));
  const token = ref(localStorage.getItem("token"));

  function setSession(userData: any, authToken: string) {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
    user.value = userData;
    token.value = authToken;
  }

  function clearUser() {
    user.value = null;
    token.value = "";
  }

  function isAuthenticated() {
    return !!token.value && !!user.value;
  }

  return {
    user,
    isAuthenticated,
    token,
    setSession,
    clearUser,
  };
});
