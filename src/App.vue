<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "/src/pages/Hero.vue";
import New from "/src/pages/New.vue";
import Support from "./pages/Support.vue";
import Contact from "./pages/Contact.vue";
import Categories from "/src/pages/Categories.vue";
import { categories } from "./constants";
import Socials from "./components/Socials.vue";
</script>
<template>
  <div
    class="flex items-center justify-center h-screen w-full overflow-x-hidden"
  >
    <div class="w-[80%] h-[80%]">
      <header>
        <Navbar />
      </header>
      <main class="w-full h-full">
        <section id="hero" class="h-screen w-full">
          <Hero />
          <div class="absolute right-4 top-1/2">
            <Socials />
          </div>
        </section>
        <section id="new" class="h-screen w-full">
          <New />
        </section>
        <section
          id="category"
          class="h-[270vh] sm:w[200vh] md:h-[150vh] lg:h-screen w-full flex flex-col items-center justify-center space-y-20"
        >
          <div class="flex items-center justify-center flex-col gap-4">
            <h1 class="text-3xl font-medium">Shop By Categories</h1>
            <span class="w-40 h-px rounded-full flex bg-gray-700"></span>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20"
          >
            <Categories
              v-for="category in categories"
              :key="category.id"
              :img="category.img"
              :title="category.title"
              :desc="category.desc"
            />
          </div>
        </section>
        <section id="support" class="h-screen w-full flex items-center">
          <Support />
        </section>
        <section id="Contact" class="h-screen w-full flex items-center">
          <Contact />
        </section>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories,
    };
  },
};
</script>
