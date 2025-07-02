<template>
  <section class="flex items-center justify-center py-20 h-screen w-screen">
    <div
      class="grid gap-10 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center"
    >
      <div class="image">
        <img
          class="w-full h-full object-cover"
          src="@/assets/img/auth.webp"
          alt="Login Thumb"
        />
      </div>
      <div class="form-warp">
        <div class="section-title">
          <div class="container">
            <div class="mx-auto">
              <h2 class="font-bold max-w-3xl">LOGIN</h2>
              <p class="max-w-xl mt-2 leading-7 text-18base"></p>
            </div>
          </div>
        </div>
        <form class="form-login mt-10" action="#">
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div class="single-fild">
            <input
              class="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="password"
              placeholder="password"
            />
          </div>
          <div class="button text-center">
            <button
              type="button"
              class="text-white font-exo inline-block text-center font-bold group hover:opacity-80 leading-11 h-12 w-32 sm:h-15 sm:w-40 sm:leading-12 rounded-22 bg-primary"
            >
              Login
            </button>
          </div>
          <div class="account-text mt-5 text-center">
            <p>
              Do not have any account,
              <a class="text-yellow-400 font-semibold" href="/register"
                >Signup here</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
