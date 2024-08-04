<script setup>
import { BsArrowRightShort } from "@kalimahapps/vue-icons";
</script>
<template>
  <div class="">
    <article
      class="w-72 h-96 bg-gray-100 p-4 rounded-tr-3xl rounded-bl-3xl shadow border-2 border-transparent hover:border-gray-600 group"
    >
      <div
        class="w-full rounded-tr-xl rounded-bl-3xl h-44 object-cover overflow-hidden"
      >
        <img
          :src="img"
          alt="Product Image"
          class="w-full h-full object-cover select-none group-hover:scale-105 duration-300"
        />
      </div>
      <div class="mt-4 space-y-2">
        <div class="flex flex-col gap-2 items-center justify-center">
          <h2 class="text-2xl text-center font-medium">{{ title }}</h2>
          <span class="w-20 h-px flex bg-gray-700"></span>
        </div>
        <p class="w-auto text-gray-700">{{ desc }}</p>
        <button class="flex items-center float-right text-blue-600 hover:underline">
          See More
        </button>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: ["title", "img", "desc"],
};
</script>
