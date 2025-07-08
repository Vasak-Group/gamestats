import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "@/services/backendConnector";

export const authStore = defineStore("auth", () => {
  const userData = ref(null);
  const token = ref(localStorage.getItem("token"));

  async function setSession(authToken: string) {
    localStorage.setItem("token", authToken);
    token.value = authToken;
    await setUser();
  }

  async function user() {
    if (userData.value === null && token.value !== "" && token.value !== null) {
      try {
        await setUser();
      } catch (error) {
        console.error("Error fetching user data:", error);
        clearUser();
      }
    }
    return userData.value;
  }

  async function setUser() {
    const userResponse = await api.GET("/user/me", token.value as string);

    if (userResponse.status !== 200) {
      throw new Error("Failed to fetch user data");
    }

    const userResponseData = await userResponse.json();
    userData.value = userResponseData.user;
  }

  function clearUser() {
    userData.value = null;
    token.value =  null;
    localStorage.removeItem("token");
  }

  function isAuthenticated() {
    return !!token.value && token.value !== "" && token.value !== null;
  }

  return {
    user,
    isAuthenticated,
    token,
    setSession,
    clearUser,
  };
});
