<script setup lang="ts">
import { defineProps } from "vue";
import { getGameImage } from "@/services/imageManager";
import { ServerGame } from "@/enums/games";

const props = defineProps<{
  id: number;
  name: string;
  ip: string;
  port: number;
  game: ServerGame;
  description: string;
  status: "UNKNOWN" | "ONLINE" | "OFFLINE";
  lastStatus: string;
  createdAt: string;
  monitoring: boolean;
}>();

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>

<template>
  <div
    class="w-full p-4 bg-secondary rounded-2xl shadow-md flex flex-row justify-between items-center mb-6"
  >
    <div class="flex items-center">
      <div>
        <img
          :src="getGameImage(props.game)"
          alt="Server Icon"
          class="w-12 h-12 mr-4"
        />
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ props.name }}</h3>
        <p class="text-sm text-gray-500">{{ props.ip }}:{{ props.port }}</p>
        <p class="text-sm text-gray-400">{{ props.game }}</p>
      </div>
    </div>
    <div>tools</div>
    <div>
      <div class="flex items-center">
        <span
          :class="{
            'bg-green-500': props.status === 'ONLINE',
            'bg-red-500': props.status === 'OFFLINE',
            'bg-yellow-500': props.status === 'UNKNOWN',
          }"
          class="w-3 h-3 rounded-full mr-2"
        ></span>
        <p class="text-sm">
          {{ props.status }}<br />
          <span class="text-gray-400">{{ formatDate(props.lastStatus) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
