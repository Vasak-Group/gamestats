<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import ServerCard from "@/components/cards/ServerCard.vue";
import { ServerGame } from "@/enums/games";
import { api } from "@/services/backendConnector";
import { authStore } from "@/stores/auth.store";
import { onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";

const auth = authStore();
const route = useRoute();
const $toast = useToast();
const currentGame = ref(route.query.game as ServerGame | "");
const serverName = ref(route.query.serverName as string | "");
const pageParam = ref(route.query.page);
const page = ref(
  typeof pageParam.value === "string" ? Number(pageParam.value) : 1
);
const itemsPerPageParam = ref(route.query.itemsPerPage);
const itemsPerPage = ref(
  typeof itemsPerPageParam.value === "string"
    ? Number(itemsPerPageParam.value)
    : 10
);
const itemsPerPageOptions = [10, 20, 50, 100];
const serverList: Ref<any[]> = ref([]);

const getServers = async () => {
  try {
    const response = await api.GET(
      `/server?page=${page.value}&limit=${itemsPerPage.value}&game=${
        currentGame.value || ""
      }&serverName=${serverName.value || ""}`,
      auth.token as string
    );
    if (!response.ok) {
      console.error("Error fetching servers:", response);
      throw new Error(`Error fetching servers: ${response.statusText}`);
    }
    serverList.value = await response.json();
  } catch (error) {
    $toast.error(`Error fetching servers: ${error}`, {
      position: "top",
      duration: 5000,
    });
  }
};

onMounted(() => {
  getServers();
});
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-24 bg-cover bg-bottom"
    :style="{ backgroundImage: `url(${breadcrumbsIMG})` }"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">Servers List</span>
    </div>
  </section>

  <section class="games-section pt-16 md:pt-24 pb-16 md:pb-28">
    <div class="container m-auto">
      <div class="filter-wrap bg-secondary/70 rounded-2xl px-5 py-7 mb-10">
        <div class="flex justify-between">
          <div class="category-filter">
            <div class="flex items-center gap-4">
              <input
                id="cats"
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary/100 border-2 border-solid rounded-2xl focus:outline-none"
                list="games"
                placeholder="Select a game"
                v-model="currentGame"
                @change="
                  $router.push({
                    query: { ...$route.query, game: currentGame },
                  })
                "
              />
              <datalist id="games">
                <option v-for="game in Object.values(ServerGame)" :value="game">
                  {{ game }}
                </option>
              </datalist>
              <select
                name="itemsPerPage"
                id=""
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary/100 border-2 border-solid rounded-2xl focus:outline-none"
                v-model="itemsPerPage"
                @change="
                  $router.push({
                    query: { ...$route.query, itemsPerPage: itemsPerPage },
                  })
                "
              >
                <option v-for="option in itemsPerPageOptions" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
          <div class="search-bx">
            <form action="#" class="relative">
              <input
                type="text"
                placeholder="Search"
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary border-2 border-solid rounded-2xl focus:outline-none"
              />
              <button
                type="button"
                @click.prevent="getServers"
                class="absolute px-5 top-0 right-0 bg-transparent transition-all inline-block h-full hover:text-primary"
              >
                SEARCH
                <i class="icofont-search-1"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <ServerCard
          v-for="server in serverList"
          :key="server.id"
          v-bind="server"
        />
      </div>
    </div>
  </section>
</template>
