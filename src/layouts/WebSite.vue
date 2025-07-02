<script lang="ts" setup>
import FooterPanel from '@/components/FooterPanel.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main>
    <slot />
  </main>
  <FooterPanel />
</template>
