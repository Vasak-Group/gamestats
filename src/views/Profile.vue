<script setup lang="ts">
import md5 from "md5";
import { computed, onMounted, ref } from "vue";
import { useToast } from "vue-toast-notification";
import { authStore } from "@/stores/auth.store";
import { api } from "@/services/backendConnector";
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import gamingUpdateIMG from "@/assets/img/gaming-update.webp";

const auth = authStore();
const user = ref({} as any);
const $toast = useToast();

const gravatarUrl = computed(() => {
  const hash = md5(user.value.email || "");
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=370`;
});

const updateProfile = async () => {
  try {
    const response = await api.PATCH(
      `/users/${user.value.id}`,
      {
        username: user.value.username,
      },
      auth.token as string
    );

    if (response.status === 200) {
      const updatedUser = await response.json();
      user.value = updatedUser;
      $toast.success("Profile updated successfully!", {
        position: "top",
        duration: 3000,
      });
    } else {
      $toast.error("Failed to update profile:", {
        position: "top",
        duration: 3000,
      });
    }
  } catch (error) {
    $toast.error("Error updating profile:", {
      position: "top",
      duration: 3000,
    });
  }
};

onMounted(async () => {
  user.value = await auth.user();
});
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-24 bg-cover bg-bottom"
    :style="{ backgroundImage: `url(${breadcrumbsIMG})` }"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">Profile</span>
    </div>
  </section>

  <div class="pt-10">
    <div class="grid grid-cols-1 md:grid-cols-9 gap-8 lg:gap-14 p-10">
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
          <h3 class="uppercase font-bold mb-3 logo">
            {{ user.username || "User Name" }}
          </h3>
          <h5 class="level-text">{{ user.email || "User Email" }}</h5>
        </div>
      </div>
      <div class="side__right col-span-1 md:col-span-5 lg:col-span-6">
        <div class="content">
          <h3
            class="logo font-bold mb-5 text-primary uppercase pl-24 relative after:absolute content-after after:bg-primary after:w-16 after:h-1 after:z-0 after:top-1/2 after:left-0 after:transform after:-translate-y-2/4 after:transition after:opacity-100"
          >
            PROFILE
          </h3>
          <form
            class="flex flex-col items-center"
            @submit.prevent="updateProfile"
          >
            <input
              type="text"
              v-model="user.username"
              placeholder="Username"
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
            />
            <input
              type="email"
              v-model="user.email"
              placeholder="Email"
              readonly
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
            />
            <button
              type="submit"
              class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <section class="">
    <div class="mt-16 mb-16 md:mt-28 flex justify-center items-center">
      <div
        class="z-10 relative py-15 px-8 w-4xl md:py-24 md:px-24 flex justify-between items-center flex-col lg:flex-row bg-cover bg-center rounded-2xl"
        :style="{ backgroundImage: `url(${gamingUpdateIMG})` }"
      >
        <h2 class="uppercase font-bold text-center md:text-left">
          Upload your servers <br />to get new users.
        </h2>
        <div class="mt-8 mx-6">
          <RouterLink
            class="text-white inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
            to="servers/my"
          >
            My Servers
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
