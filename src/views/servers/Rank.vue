<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import { getGameImage } from "@/services/imageManager";
import { ServerGame } from "@/enums/games";
import { authStore } from "@/stores/auth.store";
import { api } from "@/services/backendConnector";
import { onMounted, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import { server } from "typescript";

const auth = authStore();
const route = useRoute();
const $toast = useToast();
const currentGame = ref(route.query.game as ServerGame | undefined);
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
      `/rank?page=${page.value}&limit=${itemsPerPage.value}&game=${
        currentGame.value || ""
      }`,
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
    class="breadcrumb-wrap relative pb-24 pt-12 lg:pt-24 mb-12 bg-cover bg-bottom"
    :style="{ backgroundImage: `url(${breadcrumbsIMG})` }"
  >
    <div class="text-center mt-12 transform">
      <span class="logo text-5xl uppercase">Servers Ranks</span>
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
            </div>
          </div>
          <div>
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
      </div>
      <div class="flex">
        <div class="w-full">
          <table class="w-full text-left">
            <thead>
              <tr>
                <th class="px-4 py-2">Rank</th>
                <th class="px-4 py-2">Server Name</th>
                <th class="px-4 py-2">Votes</th>
                <th class="px-4 py-2 text-center">Game</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(server, index) in serverList" :key="index">
                <td class="px-4 py-2">{{ index + 1 }}</td>
                <td class="px-4 py-2">{{ server.name }}</td>
                <td class="px-4 py-2">{{ server.voteCount }}</td>
                <td class="px-4 py-2">
                  <img
                    :src="getGameImage(server.game)"
                    :alt="server.game"
                    :title="server.game"
                    class="h-10 m-auto"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
