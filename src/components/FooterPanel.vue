<script lang="ts" setup></script>
<template>
  <footer>
    <div
      class="py-16 md:py-24 lg:py-24 xxl:py-32 bg-secondary/70 flex content-center justify-center"
    >
      <div class="container">
        <div
          class="grid gap-8 md:gap-6 lg:gap-6 xxl:gap-16 grid-cols-1 sm:grid-cols-12"
        >
          <div class="sm:col-span-6 lg:col-span-4 lg:mr-12">
            <a class="block logo text-center text-5xl" href="/"> GAMESTATS </a>
            <p class="mt-7">
              GameStats is a platform that provides detailed statistics and
              insights for various games. Our mission is to enhance the gaming
              experience by offering comprehensive data analysis and community
              engagement.
            </p>
          </div>

          <div class="sm:col-span-6 lg:col-span-3">
            <h3 class="uppercase font-bold mb-8 lg:mb-14">CONTACT</h3>

            <div class="mb-5 last:mb-0">
              <span class="text-primary mb-3 block">Email:</span>
              <p>info@vasak.net.ar</p>
            </div>
          </div>

          <div class="sm:col-span-6 lg:col-span-3">
            <h3 class="uppercase font-bold mb-8 lg:mb-14">Information</h3>
            <div class="flex">
              <div class="grid gap-2 grid-cols-3">
                  <a
                  class="w-16 h-16 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl"
                  href="/"
                >
                  <div class="w-8">
                    <div style="max-width: 97px; display: block">
                      <img
                        alt=""
                        role="presentation"
                        aria-hidden="true"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='119' width='97' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                        style="
                          max-width: 100%;
                          display: block;
                          position: static;
                        "
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="sm:col-span-6 lg:col-span-2">
            <h3 class="uppercase font-bold mb-8 lg:mb-14">Follow Us</h3>
            <ul>
              <a
                href="https://vasak.net.ar/"
                class="block text-white mb-3 last:mb-0 hover:text-primary"
              >
                Vasak WebSite
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom bg-secondary/90">
      <div
        class="flex flex-col md:flex-row md:justify-between items-center p-6"
      >
        <div class="">
          © {{ new Date().getFullYear() }} made with
          <i class="icofont-heart"></i> by
          <a
            href="https://vasak.net.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vasak Group
          </a>
        </div>
        <div class="footer-copyright-right">
          <div class="flex">
            <a
              href="https://hasthemes.com/"
              class="text-white hover:text-primary"
            >
              Terms &amp; Condition
            </a>
            <span class="mx-3"> || </span>
            <a
              href="https://hasthemes.com/"
              class="text-white hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
