<script lang="ts" setup>
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import { authStore } from "@/stores/auth.store";
import { api } from "@/services/backendConnector";
import { onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";

const auth = authStore();
const server: Ref<any> = ref({});
const route = useRoute();

async function fetchServers() {
  try {
    const response = await api.GET(`/server/${route.params.id}`, auth.token as string);
    server.value = await response.json();
  } catch (error) {
    console.error("Error fetching servers:", error);
  }
}

onMounted(() => {
  fetchServers();
});
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-12 pt-24 lg:pt-36 mb-6 bg-cover bg-bottom"
    :style="{ backgroundImage: `url(${breadcrumbsIMG})` }"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">Server {{ server.name }}</span>
    </div>
  </section>

  <div class="container mx-auto px-4">
    <div class="server-details">
      <h2 class="text-3xl font-bold mb-4">{{ server.name }}</h2>
      <p class="text-lg">{{ server.description }}</p>
      {{ server }}
    </div>
  </div>
</template>
