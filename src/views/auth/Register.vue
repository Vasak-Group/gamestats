<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex items-center justify-center py-20 h-screen w-screen">
    <div
      class="grid gap-10 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center"
    >
      <div>
        <img src="@/assets/img/auth.webp" alt="Register Thumb" />
      </div>
      <div class="form-warp">
        <div class="section-title">
          <div class="container">
            <div class="mx-auto">
              <h2 class="font-bold max-w-3xl">Register</h2>
              <p class="max-w-xl mt-2 leading-7 text-18base"></p>
            </div>
          </div>
        </div>
        <form class="form-login mt-10" action="#">
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="password"
              placeholder="password"
            />
          </div>
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="password"
              placeholder="Retype Password"
            />
          </div>
          <div class="button text-center">
            <button
              type="button"
              class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-22 bg-primary"
            >
              Login
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
      </div>
    </div>
  </section>
</template>
