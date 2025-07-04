<script lang="ts" setup>
import RegisterForm from "@/components/forms/RegisterForm.vue";
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
        <RegisterForm />
      </div>
    </div>
  </section>
</template>
