<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  serverName: string;
  game: string;
  players: number;
}>();
</script>

<template>
  <div class="my-server-card">
    <h3 class="server-name">{{ props.serverName }}</h3>
    <p class="game">{{ props.game }}</p>
    <p class="players">Players: {{ props.players }}</p>
  </div>
</template>