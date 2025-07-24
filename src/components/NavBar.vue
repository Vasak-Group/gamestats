<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faClose,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { authStore } from "@/stores/auth.store";
import { useToast } from "vue-toast-notification";
import md5 from "md5";

const auth = authStore();
const isOpen = ref(false);
const $toast = useToast();
const user = ref({} as any);

const fetchUser = async () => {
  const userData = await auth.user();
  user.value = userData || {};
};

const menuItemsInvited = [
  { name: "Home", path: "/" },
  {
    name: "Servers",
    path: "/servers",
    children: [
      { name: "List", path: "/servers/list" },
      { name: "Rank", path: "/servers/rank" },
    ],
  },
];

const menuItemsUser = [
  { name: "Home", path: "/" },
  {
    name: "Servers",
    path: "/servers",
    children: [
      { name: "List", path: "/servers/list" },
      { name: "Rank", path: "/servers/rank" },
      { name: "My Servers", path: "/servers/my" },
    ],
  },
];

const menuItems = computed(() => {
  if (auth.isAuthenticated()) {
    return menuItemsUser;
  } else {
    return menuItemsInvited;
  }
});

const profileImage = computed(() => {
  return `https://www.gravatar.com/avatar/${md5(
    user.value.email || ""
  )}?d=identicon`;
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const openSubmenu = (name: string) => {
  const submenu = document.getElementById(`submenu-${name}`);
  if (submenu) {
    submenu.classList.toggle("hidden");
  }
};

const logout = () => {
  auth.clearUser();
  $toast.success("Logout successful", {
    position: "top",
    duration: 3000,
  });
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
};

onMounted(() => {
  fetchUser();
});
</script>

<template>
  <header class="bg-transparent absolute w-full mx-auto z-40">
    <div class="fixed top-0 bg-secondary/90 w-full z-50 px-4">
      <nav class="bg-transparent flex justify-between items-center py-3">
        <RouterLink
          aria-current="page"
          class="block logo text-3xl leading-none"
          to="/"
        >
          TOPGAMES
        </RouterLink>

        <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
          >
            <RouterLink class="font-semibold uppercase" :to="item.path">
              {{ item.name }}
            </RouterLink>
            <FontAwesomeIcon
              v-if="item.children"
              :icon="faAngleDown"
              class="text-white text-lg cursor-pointer"
            />
            <ul
              v-if="item.children"
              class="submenu-nav absolute left-0 z-50 bg-secondary/90 rounded-2xl mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 p-4 w-44"
            >
              <li v-for="child in item.children" :key="child.name">
                <RouterLink
                  class="menu-sub-item text-sm font-medium block py-1 hover:text-primary"
                  :to="child.path"
                >
                  {{ child.name }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>

        <div class="header-right-action flex items-center">
          <ul
            v-if="auth.isAuthenticated()"
            class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12"
          >
            <li
              class="group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              {{ user.username }}
              <img
                :src="profileImage"
                alt="Profile Image"
                class="inline-block w-8 h-8 rounded-full ml-2"
              />
              <ul
                class="submenu-nav absolute left-0 z-50 bg-secondary/90 rounded-2xl mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 p-4 w-44"
              >
                <li>
                  <RouterLink
                    class="menu-sub-item text-sm font-medium block py-1 hover:text-primary"
                    to="/profile"
                    >Profile
                  </RouterLink>
                </li>
                <li>
                  <span
                    class="menu-sub-item text-sm font-medium block py-1 hover:text-primary"
                    @click="logout"
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <RouterLink
            v-else
            class="text-white hidden xs:block inline-block text-center font-bold group hover:opacity-80 leading-11 sm:leading-12 rounded-2xl bg-primary px-4"
            to="/register"
            >SIGN UP
          </RouterLink>

          <button
            @click="toggleMenu"
            class="flex flex-col space-y-1.5 ml-8 lg:hidden"
          >
            <FontAwesomeIcon :icon="faBars" class="text-white text-2xl" />
          </button>

          <div
            v-if="isOpen"
            id="mobile-menu"
            class="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto transition-all z-50 bg-secondary/70"
          >
            <div
              class="transition-all bg-secondary/90 relative h-full px-8 py-8 w-310 sm:w-96 overflow-x-hidden overflow-y-auto"
            >
              <button
                @click="toggleMenu"
                class="flex justify-end items-center ml-auto"
              >
                <FontAwesomeIcon :icon="faClose" class="text-white text-2xl" />
              </button>
              <ul class="mt-10 mb-10">
                <li
                  v-for="item in menuItems"
                  class="relative font-medium block pb-3 mb-3 border-b"
                >
                  <RouterLink
                    aria-current="page"
                    class="active"
                    :to="item.path"
                    @click="toggleMenu"
                    >{{ item.name }}</RouterLink
                  >
                  <button
                    v-if="item.children"
                    @click="openSubmenu(item.name)"
                    class="absolute right-0 justify-center cursor-pointer bg-transparent"
                  >
                    <FontAwesomeIcon
                      :icon="faAngleDown"
                      class="text-white text-lg"
                    />
                  </button>
                  <ul
                    v-if="item.children"
                    :id="`submenu-${item.name}`"
                    class="submenu-nav hidden mt-4"
                  >
                    <li v-for="child in item.children" :key="child.name">
                      <RouterLink
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0 hover:text-primary"
                        :to="child.path"
                        @click="toggleMenu"
                      >
                        {{ child.name }}
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>

              <div class="action-button text-center">
                <ul class="mt-10 mb-10">
                  <li class="relative font-medium block pb-3 mb-3">
                    {{ user.username }}

                    <img
                      :src="profileImage"
                      alt="Profile Image"
                      class="inline-block w-8 h-8 rounded-full ml-2"
                    />
                    <button
                      @click="openSubmenu(user.username)"
                      class="justify-center cursor-pointer bg-transparent"
                    >
                      <FontAwesomeIcon
                        :icon="faAngleDown"
                        class="text-white text-lg ml-4"
                      />
                    </button>
                    <ul
                      :id="`submenu-${user.username}`"
                      class="submenu-nav hidden mt-4"
                    >
                      <li>
                        <RouterLink
                          class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0 hover:text-primary"
                          to="/profile"
                          @click="toggleMenu"
                        >
                          Profile
                        </RouterLink>
                      </li>
                      <li>
                        <span
                          class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0 hover:text-primary"
                          @click="logout"
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <RouterLink
                  aria-current="page"
                  class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 px-4 sm:leading-12 rounded-2xl bg-primary"
                  to="/register"
                  @click="toggleMenu"
                >
                  SIGN UP
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
