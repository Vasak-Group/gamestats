<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import AddServer from "@/components/modals/AddServer.vue";
import { ref } from "vue";

const addServerModal = ref(false);

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
  <div class="container mx-auto">
    <div class="flex justify-end mb-6">
      <button
        @click="toggleModal"
        class="px-6 h-14 bg-primary text-white rounded-2xl hover:bg-primary/80 transition-all"
      >
        Add Server
      </button>
    </div>
    
  </div>
  <AddServer v-if="addServerModal" @close="toggleModal" />
</template>
