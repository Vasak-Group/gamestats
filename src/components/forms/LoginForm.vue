<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import { authStore } from "@/stores/auth.store";
import { api } from "@/services/backendConnector";

const $toast = useToast();
const auth = authStore();
const credentials = ref({
  email: "",
  password: "",
});

const login = async () => {
  if (!credentials.value.email || !credentials.value.password) {
    $toast.error("Missing credentials", {
      position: "top",
      duration: 3000,
    });
    return;
  }

  try {
    const response = await api.POST("/auth/login", credentials.value, "");

    console.log("Login response:", response);

    if (response.status === 200) {
      const data = await response.json();

      auth.setSession(data.access_token);

      $toast.success("Login successful", {
        position: "top",
        duration: 3000,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      console.error("Login failed:", response);
      $toast.error("Login failed: Check your credentials", {
        position: "top",
        duration: 3000,
      });
    }
  } catch (e) {
    console.error("Login error:", e);

    $toast.error(
      "Login error: An unexpected error occurred. Please try again later.",
      {
        position: "top",
        duration: 3000,
      }
    );
  }
};
</script>

<template>
  <form class="form-login mt-10" @submit.prevent="login">
    <div class="single-fild">
      <input
        class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="email"
        placeholder="E-mail"
        v-model="credentials.email"
        required
        minlength="5"
        maxlength="50"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address."
        autocomplete="email"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        inputmode="email"
        aria-label="E-mail"
      />
    </div>
    <div class="single-fild">
      <input
        class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="password"
        placeholder="password"
        v-model="credentials.password"
        required
        autocorrect="off"
        autocapitalize="off"
        inputmode="text"
        aria-label="Password"
      />
    </div>
    <div class="button text-center">
      <button
        type="submit"
        class="text-white font-exo inline-block text-center rounded-2xl font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
      >
        Login
      </button>
    </div>
    <div class="account-text mt-5 text-center">
      <p>
        Do not have any account,
        <RouterLink class="text-yellow-400 font-semibold" to="/register">
          Signup here
        </RouterLink>
        or
        <RouterLink class="text-yellow-400 font-semibold" to="/">
          go to home
        </RouterLink>
      </p>
    </div>
  </form>
</template>
