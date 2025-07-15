<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import AddServer from "@/components/modals/AddServer.vue";
import { ref } from "vue";

const addServerModal = ref(false);
const filterServers = ref("");

const toggleModal = () => {
  addServerModal.value = !addServerModal.value;
};
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-24 bg-cover bg-bottom"
    :style="{ backgroundImage: `url(${breadcrumbsIMG})` }"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">My Servers</span>
    </div>
  </section>
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3">
    <div class="flex mb-6 col-span-2"></div>
    <div class="col-span-1">
      <input
        type="text"
        placeholder="Search servers..."
        v-model="filterServers"
        class="px-6 h-14 w-full mb-6 border-secondary/90 bg-secondary hover:border-primary transition-all border-2 border-solid rounded-2xl focus:outline-none"
      />
      <button
        @click="toggleModal"
        class="px-6 h-14 bg-primary text-white rounded-2xl hover:bg-primary/80 transition-all w-full"
      >
        Add Server
      </button>
    </div>
  </div>
  <AddServer v-if="addServerModal" @close="toggleModal" />
</template>
