<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
import { ServerGame } from "@/enums/games";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentGame = ref(route.query.game as ServerGame | undefined);
const serverName = ref(route.query.serverName as string | undefined);
const pageParam = ref(route.query.page);
const page = ref(
  typeof pageParam.value === "string" ? Number(pageParam.value) : 0
);
const itemsPerPageParam = ref(route.query.itemsPerPage);
const itemsPerPage = ref(
  typeof itemsPerPageParam.value === "string"
    ? Number(itemsPerPageParam.value)
    : 10
);
</script>

<template>
  <section
    class="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-24 bg-cover bg-bottom"
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
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary/100 border-2 border-solid rounded-lg focus:outline-none"
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
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary/100 border-2 border-solid rounded-lg focus:outline-none"
                v-model="itemsPerPage"
                @change="
                  $router.push({
                    query: { ...$route.query, itemsPerPage: itemsPerPage },
                  })
                "
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div class="search-bx">
            <form action="#" class="relative">
              <input
                type="text"
                placeholder="Search"
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary border-2 border-solid rounded-lg focus:outline-none"
              /><button
                type="submit"
                class="absolute px-5 top-0 right-0 bg-transparent transition-all inline-block h-full hover:text-primary"
              >
                <i class="icofont-search-1"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </section>
</template>
