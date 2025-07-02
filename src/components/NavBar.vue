<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="bg-transparent absolute w-full mx-auto z-40">
    <div class="fixed top-0 bg-secondary/90 w-full z-50">
      <div class="container px-4">
        <nav class="bg-transparent flex justify-between items-center py-3">
          <a
            aria-current="page"
            class="block logo text-3xl leading-none"
            href="/"
          >
            GAMESTATS
          </a>

          <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
            <li
              class="group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              <a
                aria-current="page"
                class="font-semibold uppercase active"
                href="/"
                >Home</a
              >
            </li>
            <li
              class="group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              <a class="font-semibold uppercase" href="/match">Match</a>
            </li>
            <li
              class="has-submenu group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              <a class="font-semibold uppercase" href="/faq">Pages</a>
              <ul
                class="submenu-nav absolute left-0 z-50 bg-white rounded-lg mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 p-4 border border-gray-100 w-64"
              >
                <li>
                  <a
                    class="menu-sub-item text-sm font-medium text-black block py-1 hover:text-primary"
                    href="/about-us"
                    >About Us Page</a
                  >
                </li>
              </ul>
            </li>
            <li
              class="has-submenu group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              <a
                class="font-semibold uppercase"
                href="/blog-grid-without-sidebar"
                >blog</a
              >
              <ul
                class="submenu-nav absolute left-0 z-50 bg-white rounded-lg mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500 min-w-200 p-4 border border-gray-100 w-64"
              >
                <li>
                  <a
                    class="menu-sub-item text-sm font-medium text-black block py-1 hover:text-primary"
                    href="/blog-without-sidebar"
                    >Blog Without Sidebar Page</a
                  >
                </li>
                <li>
                  <a
                    class="menu-sub-item text-sm font-medium text-black block py-1 hover:text-primary"
                    href="/blog-left-sidebar"
                    >Blog Left Sidebar Page</a
                  >
                </li>
              </ul>
            </li>
            <li
              class="group relative pt-4 pb-4 cursor-pointer text-white font-bold z-10 before:bg-nav-shape before:empty-content before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100"
            >
              <a class="font-semibold uppercase" href="/contact-us">Contact</a>
            </li>
          </ul>
          <div class="header-right-action flex items-center">
            <a
              class="text-white hidden xs:block font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
              href="/login"
              style="
                background-image: url('data:image/webp;base64,UklGRqAFAABXRUJQVlA4WAoAAAAQAAAAnAAAOwAAQUxQSIUBAAAJkINt27E3V/Ijtm3bdkY7m1NO9ma3U7ZqtNvNtvHFyVYztjN9z9GtETEBLNBqvUucjwUq/7v79Y2Lv1m8/5FPm+sjLVB7q+jaE1+OhSzGdL/SYIwU9XVvD5ouKPDpGg2S1Kx6GrSAhPuhAH29b/6q3einN8/7AULvJc0TfM0e6Hth4hVpoXY658g44xd9gP2V4DnML9gDrcRqkKEmllbA/oL5rN1BwNsgc+RoHvQWCNoJhC4DlAhkGdEKrAyFzRroc0Oabn1guBXbKqDNQhzmbUC57VId9EUhz6h+0JdGAq0agWgUICcC0CNRPRDpDbiLxAPwNQMsRGIOmAFoRaLlv///vfaLpr8LmBTJJND1BhgXyTjw5iZgIBID4Ob5UdCIRAOj53+cRa5nf7BtQiwT2+BDi1haPgCbWoXSugmgr+SbSL6V9M1CKfgmkG8FCnM/Tv8gjp70x8zfmnhoQhTjJ5NaWWj/6vDrE2IYORFR84VFfsz3OXz21W/V+/3qRK1j3UfmBQBWUDgg9AMAAJAcAJ0BKp0APAA+USaPRSOiIRGqBjg4BQSzNjOo/xx2AbOdxf0TlcWo39mfWX6QD9letE9ADpT/269GYwJszTyMiIp9eut94PI5nJNfr2AC6H//zbBh/2f/GTVieA0gGYe/9bm+zoS17Z8MtYE6ahrVoWCfS80BD9eeGPPUWunQfaaxa2aiVjsR571323obXYzsUgwU+cS0mJnOphaWOlYlS0dP3fbjL/zIx+7bfWGvWef6ae4kuzOOLs2yd7rOsZ9y9IwS8dituBhSi9fQ5k0CB0IxQBqmM+0S7pGlh1Bd6pgP08dC7xjFR79IAAD++W0m/iOmYd/eNnXeDs2EAojQOl6D50WbWlxn6LZbXC+my9n0W2tUlryqWwTNq0t6XN6hUpgUt8f53Pa7f5rRkH9L/GAiXeMN/ximit0dKHpofryNBFrUVe82iC0yLgQHxoxsmFH9XytA4H4/u4Wze8Eteq0TKrf6JtoT/tI7+37eu8/71gMsdcRNKJucCMyYv0cTKD7yNk78uJz4imcvDPii/QfSsEmn3WIdoXfWHqCJ5xjjnzE1HHb1b5iRCczZ83KBVrj7GEwnYJCVILgAy+a3MpfkI2venUFUXHMc6R7+aI+Fv+W+DpXaQFBIfVkYScHT7t6wMpgFQg8oUKLEBUOlp6bvemenxcC3Xus/T44iDWT1frY8Mtn8zpw+5gY6wL48G62K2xZwfozyfWpm0fNVdLkfqT2CI+vhTBSTduFrk4kaAwM8/ISnV8wNIkMeosNC4nK108hkHxRFVVk5VIYMJHHUVaNDOZLku6aUQBF7UiCMMzywco2PiiX+i1vgTEdGMlEncUzzbopBgVJN2c5C+m5FFGHlIjIj5W04Epl81PLfQBagN26LkI0s9XbegqasWe2fCszighKOo/Cw7mzNzZHJ8cX1p5T2FjvnbTCyD/bgRnJWs+GID3m5djX9QcBMwrUxDQf7nVIBv9pPYcW40BM4D8WzItIdwg33K/NgfNpcL2fHq2yxJuu9fgJ78O2U4T6/LLe+8O99nGtLI+kt/z8Dmb6on8NZlrCdc5It/6q4Mj8Dfl5T8ytKd442ehbDfITKK1RCN9ZsqmE0KsIqdPLlPLWENeHZEgNaFhlcR4Xgq/ZSvD1EuLxvHDZq4kb7/xcwyh8pe3vw+oD82d8K/X4rJnPL7oOWutkNhpIsxnMP8Ftnx+ruoHX9g1H7EdtQVT+YGW8ZJiRzo8KliNddtT8tER4tH5wlXCHe5Rplwktg2Y6nYd+uqcC0NFPbxUK6o8ao5P//wJ7WJD+Lntimprkx3HVfAHvnbcl/+Oa1xbvaV01xNjNNV27VFCKLyJyAAAA=');
                background-position: center center;
                background-repeat: no-repeat;
              "
              >SIGN UP
            </a>

            <button
              @click="toggleMenu"
              class="flex flex-col space-y-1.5 ml-8 lg:hidden"
            >
              <span class="line h-0.5 w-6 inline-block bg-white"></span
              ><span class="line h-0.5 w-6 inline-block bg-white"></span
              ><span class="line h-0.5 w-6 inline-block bg-white"></span>
            </button>

            <div
              v-if="isOpen"
              id="mobile-menu"
              class="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto transition-all z-50 bg-secondary/90"
            >
              <div
                class="transition-all text-black bg-white relative h-full px-8 py-8 w-310 sm:w-96 overflow-x-hidden overflow-y-auto"
              >
                <button @click="toggleMenu" class="flex justify-end items-center ml-auto">
                  Close <i class="icofont-close"></i>
                </button>
                <ul class="mt-10 mb-10">
                  <li class="relative font-medium block pb-3 mb-3 border-b">
                    <a aria-current="page" class="active" href="/">Home</a>
                  </li>
                  <li class="relative font-medium block pb-3 mb-3 border-b">
                    <a href="/match">Match</a>
                  </li>
                  <li
                    class="has-submenu-dropdown relative font-medium block pb-3 mb-3 border-b"
                  >
                    <a href="/faq">Pages</a
                    ><button
                      class="menu-toggle menu-expand absolute right-0 justify-center cursor-pointer bg-transparent"
                    >
                      <i class="icofont-rounded-down"></i>
                    </button>
                    <ul class="submenu-nav hidden mt-4">
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/about-us">About Us Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/games">Games Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/faq">FAQ's Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/players">Game players</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/404">404 not found!</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/login">Login Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/register">Register Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/bettle-teams">Bettle team Page</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    class="has-submenu-dropdown relative font-medium block pb-3 mb-3 border-b"
                  >
                    <a href="/blog-grid-without-sidebar">blog</a
                    ><button
                      class="menu-toggle menu-expand absolute right-0 justify-center cursor-pointer bg-transparent"
                    >
                      <i class="icofont-rounded-down"></i>
                    </button>
                    <ul class="submenu-nav hidden mt-4">
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-without-sidebar"
                          >Blog Without Sidebar Page</a
                        >
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-left-sidebar">Blog Left Sidebar Page</a>
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-right-sidebar"
                          >Blog Right Sidebar Page</a
                        >
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-grid-left-sidebar"
                          >Blog Grid Left Sidebar Page</a
                        >
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-grid-without-sidebar"
                          >Blog Grid Without Sidebar</a
                        >
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-grid-left-sidebar"
                          >Blog Grid Left Sidebar</a
                        >
                      </li>
                      <li
                        class="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0"
                      >
                        <a href="/blog-grid-right-sidebar"
                          >Blog Grid Right Sidebar</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="relative font-medium block pb-3 mb-3 border-b">
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
                <div class="action-button text-center">
                  <a
                    aria-current="page"
                    class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-2xl bg-primary"
                    href="/"
                    style="
                      background-image: url('data:image/webp;base64,UklGRqAFAABXRUJQVlA4WAoAAAAQAAAAnAAAOwAAQUxQSIUBAAAJkINt27E3V/Ijtm3bdkY7m1NO9ma3U7ZqtNvNtvHFyVYztjN9z9GtETEBLNBqvUucjwUq/7v79Y2Lv1m8/5FPm+sjLVB7q+jaE1+OhSzGdL/SYIwU9XVvD5ouKPDpGg2S1Kx6GrSAhPuhAH29b/6q3einN8/7AULvJc0TfM0e6Hth4hVpoXY658g44xd9gP2V4DnML9gDrcRqkKEmllbA/oL5rN1BwNsgc+RoHvQWCNoJhC4DlAhkGdEKrAyFzRroc0Oabn1guBXbKqDNQhzmbUC57VId9EUhz6h+0JdGAq0agWgUICcC0CNRPRDpDbiLxAPwNQMsRGIOmAFoRaLlv///vfaLpr8LmBTJJND1BhgXyTjw5iZgIBID4Ob5UdCIRAOj53+cRa5nf7BtQiwT2+BDi1haPgCbWoXSugmgr+SbSL6V9M1CKfgmkG8FCnM/Tv8gjp70x8zfmnhoQhTjJ5NaWWj/6vDrE2IYORFR84VFfsz3OXz21W/V+/3qRK1j3UfmBQBWUDgg9AMAAJAcAJ0BKp0APAA+USaPRSOiIRGqBjg4BQSzNjOo/xx2AbOdxf0TlcWo39mfWX6QD9letE9ADpT/269GYwJszTyMiIp9eut94PI5nJNfr2AC6H//zbBh/2f/GTVieA0gGYe/9bm+zoS17Z8MtYE6ahrVoWCfS80BD9eeGPPUWunQfaaxa2aiVjsR571323obXYzsUgwU+cS0mJnOphaWOlYlS0dP3fbjL/zIx+7bfWGvWef6ae4kuzOOLs2yd7rOsZ9y9IwS8dituBhSi9fQ5k0CB0IxQBqmM+0S7pGlh1Bd6pgP08dC7xjFR79IAAD++W0m/iOmYd/eNnXeDs2EAojQOl6D50WbWlxn6LZbXC+my9n0W2tUlryqWwTNq0t6XN6hUpgUt8f53Pa7f5rRkH9L/GAiXeMN/ximit0dKHpofryNBFrUVe82iC0yLgQHxoxsmFH9XytA4H4/u4Wze8Eteq0TKrf6JtoT/tI7+37eu8/71gMsdcRNKJucCMyYv0cTKD7yNk78uJz4imcvDPii/QfSsEmn3WIdoXfWHqCJ5xjjnzE1HHb1b5iRCczZ83KBVrj7GEwnYJCVILgAy+a3MpfkI2venUFUXHMc6R7+aI+Fv+W+DpXaQFBIfVkYScHT7t6wMpgFQg8oUKLEBUOlp6bvemenxcC3Xus/T44iDWT1frY8Mtn8zpw+5gY6wL48G62K2xZwfozyfWpm0fNVdLkfqT2CI+vhTBSTduFrk4kaAwM8/ISnV8wNIkMeosNC4nK108hkHxRFVVk5VIYMJHHUVaNDOZLku6aUQBF7UiCMMzywco2PiiX+i1vgTEdGMlEncUzzbopBgVJN2c5C+m5FFGHlIjIj5W04Epl81PLfQBagN26LkI0s9XbegqasWe2fCszighKOo/Cw7mzNzZHJ8cX1p5T2FjvnbTCyD/bgRnJWs+GID3m5djX9QcBMwrUxDQf7nVIBv9pPYcW40BM4D8WzItIdwg33K/NgfNpcL2fHq2yxJuu9fgJ78O2U4T6/LLe+8O99nGtLI+kt/z8Dmb6on8NZlrCdc5It/6q4Mj8Dfl5T8ytKd442ehbDfITKK1RCN9ZsqmE0KsIqdPLlPLWENeHZEgNaFhlcR4Xgq/ZSvD1EuLxvHDZq4kb7/xcwyh8pe3vw+oD82d8K/X4rJnPL7oOWutkNhpIsxnMP8Ftnx+ruoHX9g1H7EdtQVT+YGW8ZJiRzo8KliNddtT8tER4tH5wlXCHe5Rplwktg2Y6nYd+uqcC0NFPbxUK6o8ao5P//wJ7WJD+Lntimprkx3HVfAHvnbcl/+Oa1xbvaV01xNjNNV27VFCKLyJyAAAA=');
                      background-position: center center;
                      background-repeat: no-repeat;
                    "
                    >SIGN UP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
