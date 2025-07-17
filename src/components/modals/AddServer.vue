<script setup lang="ts">
import { ServerGame } from "@/enums/games";
import { api } from "@/services/backendConnector";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import { authStore } from "@/stores/auth.store";

const $emit = defineEmits(["close"]);
const $toast = useToast();
const auth = authStore();
const serverName = ref("");
const ip = ref("");
const port = ref();
const game = ref<ServerGame | undefined>(undefined);
const description = ref("");

const addServer = async () => {
  if (!serverName.value || !ip.value || !port.value || !game.value) {
    $toast.error("Please fill in all required fields.", {
      position: "top",
      duration: 3000,
    });
    return;
  }

  try {
    const serverData = {
      name: serverName.value,
      ip: ip.value,
      port: port.value,
      game: game.value,
      description: description.value,
    };

    const response = await api.POST(
      "/server",
      serverData,
      auth.token as string
    );

    if (response.status !== 201) {
      $toast.error(`Failed to add server: ${response.statusText}`, {
        position: "top",
        duration: 3000,
      });
    } else {
      $toast.success("Server added successfully!", {
        position: "top",
        duration: 3000,
      });
    }

    $emit("close");
  } catch (error) {
    $toast.error(`Error adding server: ${error}`, {
      position: "top",
      duration: 3000,
    });
  }
};
</script>

<template>
  <div
    class="absolute inset-0 bg-black/70 top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50"
  >
    <div
      class="bg-secondary/100 border-2 border-solid rounded-2xl border-secondary/90 p-12"
    >
      <h2 class="text-xl font-bold mb-6">Add Server</h2>
      <form class="grid grid-cols-2 gap-4" @submit.prevent="addServer">
        <div>
          <input
            type="text"
            id="serverName"
            placeholder="Server Name"
            v-model="serverName"
            required
            class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
          />
        </div>

        <div>
          <input
            type="text"
            id="game"
            placeholder="Game"
            v-model="game"
            required
            class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
            list="games"
          />
          <datalist id="games">
            <option v-for="game in Object.values(ServerGame)" :value="game">
              {{ game }}
            </option>
          </datalist>
        </div>
        <div>
          <input
            type="text"
            id="ip"
            placeholder="IP Address"
            v-model="ip"
            required
            pattern="^((25[0-5]|(2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|(2[0-4][0-9]|[01]?[0-9][0-9]?))(:\d+)?$"
            title="Please enter a valid IP address (e.g., 192.168.1.1)"
            class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            id="port"
            placeholder="Port"
            v-model="port"
            required
            max="65535"
            min="1"
            class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
          />
        </div>
        <div class="col-span-2">
          <textarea
            rows="4"
            id="description"
            placeholder="Description"
            v-model="description"
            required
            class="px-6 py-4 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-2xl w-full focus:outline-none"
          />
        </div>
        <div class="flex justify-end col-span-2">
          <button
            type="button"
            @click="$emit('close')"
            class="text-white font-exo inline-block text-center rounded-2xl font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 bg-red-500 mr-4"
          >
            Close
          </button>
          <button
            type="submit"
            class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
          >
            Add Server
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
