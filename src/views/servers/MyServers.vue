<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import AddServer from "@/components/modals/AddServer.vue";
import { api } from "@/services/backendConnector";
import { onMounted, Ref, ref } from "vue";
import { authStore } from "@/stores/auth.store";


const auth = authStore();
const addServerModal = ref(false);
const filterServers = ref("");
const myServers: Ref<any[]> = ref([]); // This will hold the list of servers

const fetchMyServers = async () => {
  try {
    const response = await api.GET("/server/my", auth.token as string);
    if (response.status === 200) {
      myServers.value = await response.json();
    } else {
      console.error("Failed to fetch servers:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching servers:", error);
  }
};

const toggleModal = () => {
  addServerModal.value = !addServerModal.value;
};

onMounted(() => {
  fetchMyServers();
});
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
    <div class="flex flex-col mb-6 col-span-2">
      <ul>
        <li v-for="server in myServers" :key="server.id">{{ server.name }}</li>
      </ul>
    </div>
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
