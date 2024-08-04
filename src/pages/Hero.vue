<script setup>
import Headset from "/src/assets/headset.png";
</script>
<template>
  <div
    class="w-full h-[80%] flex flex-col-reverse sm:flex-row items-center sm:justify-between justify-center"
  >
    <div class="space-y-10">
      <h1 class="text-5xl md:text-6xl lg:text-7xl text-black font-light">
        The Westmire <br />
        <span class="font-medium">A56 Headset</span>
      </h1>
      <div class="flex gap-4 justify-center sm:justify-start">
        <button
          class="px-5 md:px-6 lg:px-7 py-2 rounded-full bg-white hover:bg-white/70 text-black font-medium duration-300"
        >
          Buy Now
        </button>
        <button
          class="px-5 md:px-6 lg:px-7 py-2 rounded-full bg-white/70 hover:bg-white text-gray-800 font-normal duration-300"
        >
          Shop All
        </button>
      </div>
    </div>
    <div>
      <img
        :src="Headset"
        alt="picture"
        class="w-[20rem] md:w-[30rem] lg:w-[35rem] select-none animate-bounce"
      />
    </div>
  </div>
</template>
