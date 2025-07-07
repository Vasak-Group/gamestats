<script setup lang="ts">
import { api } from "@/services/backendConnector";
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const registerSuccess = ref(false);
const registerError = ref(false);
const errorTitle = ref("");
const errorInfo = ref("");
const formData = ref({
  username: "",
  email: "",
  repeatEmail: "",
  password: "",
  repeatPassword: "",
});

const validEmail = computed(() => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return (
    regex.exec(formData.value.email) &&
    formData.value.email === formData.value.repeatEmail
  );
});

const validPassword = computed(() => {
  const regex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
  );
  return (
    regex.exec(formData.value.password) &&
    formData.value.password === formData.value.repeatPassword
  );
});

const register = () => {
  if (!validEmail.value) {
    errorTitle.value = "Invalid email";
    errorInfo.value = "Please check your email and try again.";
    if (formData.value.email !== formData.value.repeatEmail) {
      errorInfo.value += " Emails do not match.";
    }
    if (!formData.value.email || !formData.value.repeatEmail) {
      errorInfo.value += " Email fields cannot be empty.";
    }
    console.error("Email validation failed:", errorInfo.value);
    errorInfo.value = errorInfo.value.trim();
    if (errorInfo.value === "") {
      errorInfo.value = "Please enter a valid email address.";
    }

    console.error("Email validation error:", errorInfo.value);
    registerError.value = true;
    return;
  }
  if (!validPassword.value) {
    console.error("Password validation failed:", formData.value);
    errorTitle.value = "Invalid password";
    errorInfo.value = "Please check your password and try again.";
    registerError.value = true;
    return;
  }
  const data = {
    username: formData.value.username,
    email: formData.value.email,
    password: formData.value.password,
  };

  api
    .POST("/users", data, "")
    .then((response) => {
      if (response.status == 201) {
        registerSuccess.value = true;
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        console.error("Registration failed:", response);
        errorTitle.value = "Registration failed";
        errorInfo.value = "Please try again later.";
        registerError.value = true;
      }
    })
    .catch((error) => {
      console.error("Registration error:", error);
      errorTitle.value = "Registration failed";
      errorInfo.value = "Please try again later.";
      registerError.value = true;
    });
};
</script>

<template>
  <form class="form-login mt-10" @submit.prevent="register">
    <div class="single-fild">
      <input
        class="px-6 h-14 mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="text"
        placeholder="Username"
        v-model="formData.username"
        required
        minlength="4"
        maxlength="20"
        pattern="^[a-zA-Z0-9_]+$"
        title="Username must be 4-20 characters long and can only contain letters, numbers, and underscores."
        autocomplete="username"
        autofocus
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        inputmode="text"
        aria-label="Username"
      />
    </div>
    <div class="single-fild">
      <input
        class="px-6 h-14 mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="email"
        placeholder="E-mail"
        v-model="formData.email"
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
        class="px-6 h-14 mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="email"
        placeholder="Repeat E-mail"
        v-model="formData.repeatEmail"
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
        class="px-6 h-14 mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="password"
        placeholder="password"
        v-model="formData.password"
        required
        minlength="8"
        maxlength="15"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$"
        title="Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
        autocomplete="new-password"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        inputmode="text"
        aria-label="Password"
      />
    </div>
    <div class="single-fild">
      <input
        class="px-6 h-14 mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
        type="password"
        placeholder="Retype Password"
        v-model="formData.repeatPassword"
        required
        minlength="8"
        maxlength="15"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$"
        title="Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
        autocomplete="new-password"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        inputmode="text"
        aria-label="Password"
      />
    </div>
    <div class="button text-center">
      <button
        type="submit"
        class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
      >
        Register
      </button>
    </div>
    <div class="account-text mt-5 text-center">
      <p>
        Already have account,
        <RouterLink class="font-semibold text-yellow-400" to="/login">
          Login here
        </RouterLink>
        or
        <RouterLink class="text-yellow-400 font-semibold" to="/">
          go to home
        </RouterLink>
      </p>
    </div>
  </form>
</template>
