<script lang="ts" setup>
import LoginForm from "@/components/forms/LoginForm.vue";
</script>

<template>
  <section class="flex items-center justify-center py-20 h-screen w-screen">
    <div
      class="grid gap-10 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center"
    >
      <div class="image">
        <img
          class="w-full h-full object-cover"
          src="@/assets/img/auth.webp"
          alt="Login Thumb"
        />
      </div>
      <div class="form-warp">
        <div class="section-title">
          <div class="container">
            <div class="mx-auto">
              <h2 class="font-bold max-w-3xl">LOGIN</h2>
              <p class="max-w-xl mt-2 leading-7 text-18base"></p>
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  </section>
</template>
