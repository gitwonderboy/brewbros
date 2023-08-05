<template>
  <div class="container-fluid p-0 nav-bar">
    <nav
      class="relative navbar px-8 py-3 md:py-4 lg:py-5 flex justify-between items-center text-white"
    >
      <router-link to="/">
        <h1
          class="text-lg md:text-2xl font-extrabold text-uppercase text-white"
          style="font-family: cursive"
        >
          {{ companyname }}
        </h1></router-link
      >
      <div class="lg:hidden">
        <button
          class="navbar-burger flex items-center p-3 focus:outline-none hover:text-green-500 focus:text-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-8"
      >
        <li v-for="(item, index) in links" :key="index">
          <a
            class="text-lg font-bold hover:text-green-500 items-center hover:border border-green-600 px-2 py-2 rounded hover:shadow"
            :href="item.url"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>

      <div class="dropdown dropdown-end hidden lg:inline-block">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="../assets/images/logo.png" alt="techmanifest_logo" />
          </div>
        </label>
        <ul
          tabindex="0"
          style="background-color: #33211d"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
        >
          <li>
            <router-link to="/" class="justify-between">
              <span class="badge p-2">Brew Bro's Cafe</span>
            </router-link>
          </li>
          <li class="disabled">
            <router-link to="/" class="justify-between"> Settings </router-link>
          </li>
          <li class="disabled">
            <router-link to="/" class="justify-between"> Login </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a
            class="mr-auto text-3xl font-bold leading-none hover:text-green-600"
            href="#"
          >
            <h1 class="text-xl font-extrabold">BB CAFÉ</h1>
          </a>
          <button class="navbar-close focus:outline-none">
            <svg
              class="h-6 w-6 text-gray-700 cursor-pointer hover:text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <img
                  src="../assets/images/service-4.jpg"
                  class="w-full h-44 rounded-3xl"
                  alt="..."
                />
              </div>
            </li>
            <li>
              <div class="-mt-8 ml-4">
                <img
                  src="../assets/images/logo.png"
                  class="rounded-full w-20 border-2 border-white"
                  alt="Avatar"
                />
              </div>
            </li>
            <li
              v-for="(item, index) in links"
              :key="index"
              class="mb-1 inline-flex group hover:bg-green-50 rounded w-full"
            >
              <div
                class="flex w-1 group-hover:bg-green-500 scale-y-0 group-hover:scale-100 transition-transform origin-top rounded-full duration-400 ease-in"
              ></div>
              <a
                class="flex pl-5 p-3 text-lg font-bold text-gray-700 group-hover:text-green-600"
                href="#"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <button
              class="w-full rounded-full py-3 px-4 bg-white hover:bg-green-600 text-sm text-center text-gray-800 hover:text-black font-bold border-2 border-gray-800 hover:border-green-600 hover:shadow-md transform active:scale-75 transition-transform focus:border-4 focus:border-green-300 duration-700 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
    <!-- Back to Top -->
    <a
      href="#"
      class="btn btn-md btn-primary rounded-full back-to-top text-gray-700 animate-bounce border-none"
      ><i class="fa fa-angle-double-up"></i
    ></a>
  </div>
</template>
<script>
import "../plugins/navbar";
export default {
  data() {
    return {
      companyname: "BREW BRO'S CAFÉ",
      links: [
        { name: "About Us", url: "#aboutus" },
        { name: "Our Services", url: "#services" },
        { name: "Menu", url: "#menu" },
        { name: "Our Clients", url: "#clients" },
      ],
    };
  },
};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.back-to-top {
  display: none;
}
</style>
