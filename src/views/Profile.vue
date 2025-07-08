<script setup lang="ts">
import md5 from "md5";
import { authStore } from "@/stores/auth.store";
import { computed, onMounted, ref } from "vue";

const auth = authStore();
const user = ref({} as any);

const gravatarUrl = computed(() => {
  const hash = md5(user.value.email || "");
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=370`;
});

onMounted(async () => {
  user.value = await auth.user();
});
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-24 bg-cover bg-bottom"
    style="background-image: url('@/assets/img/breadcrumbs-bg.webp')"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">Profile</span>
    </div>
  </section>

  <div class="pt-10">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-9 gap-8 lg:gap-14">
        <div
          class="col-span-1 md:col-span-4 lg:col-span-3 mx-auto md:max-w-none max-w-xs"
        >
          <div
            class="inline-block image border-4 border-secondary/90 bg-secondary border-opacity-100 rounded-4xl"
          >
              <img
                decoding="async"
                loading="lazy"
                :src="gravatarUrl"
                alt="{{ user.name || 'User Avatar' }}"
                class="w-full h-full rounded-4xl"
              />
          </div>
          <div
            class="players-card-info py-5 xl:py-7 text-center transition-all w-full z-10"
          >
            <h3 class="uppercase font-bold mb-3 logo">{{ user.username || 'User Name' }}</h3>
            <h5 class="level-text">{{ user.email || 'User Email' }}</h5>
          </div>
        </div>
        <div class="side__right col-span-1 md:col-span-5 lg:col-span-6">
          <div class="content">
            <h3
              class="logo font-bold mb-5 text-primary uppercase pl-24 relative after:absolute content-after after:bg-primary after:w-16 after:h-1 after:z-0 after:top-1/2 after:left-0 after:transform after:-translate-y-2/4 after:transition after:opacity-100"
            >
              PROFILE
            </h3>
            <p class="leading-8">
              It is a long established fact that a reader will be distracted
              readable content page when looking at it layout the point using
              lorem Ipsum that it has more-or-less normal distribution lette
              desktop packages and web page now editors.
            </p>
            <p class="leading-8">
              It's long established fact that a reader will be distracted
              readable content page when looking at it layout the point using
              lorem Ipsum that it has more-or-less normal distribution lette
              desktop packages and web page now editors.
            </p>
            <div class="mt-10">
              <a
                class="font-exo inline-block text-center font-bold group hover:opacity-80 text-22base h-73 w-230 leading-73 rounded-22 bg-primary"
                href="/contact-us"
                style="
                  background-image: url('data:image/webp;base64,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');
                  background-position: center center;
                  background-repeat: no-repeat;
                "
                >Contact Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
