<script setup lang="ts">
import breadcrumbsIMG from "@/assets/img/breadcrumbs-bg.webp";
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
            <div class="filter-option">
              <select
                id="cats"
                class="px-5 h-14 sm:w-64 border-secondary/90 text-white bg-secondary/100 border-2 border-solid rounded-lg focus:outline-none"
              >
                <option value="all" class="bg-black">All Category</option>
                <option value="drawing">Drawing</option>
                <option value="alien-space">Alien Space</option>
                <option value="hunter-sniper">Hunter Sniper</option>
                <option value="collage">Collage</option>
                <option value="game-one">Game one</option>
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
