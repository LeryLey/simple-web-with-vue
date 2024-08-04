<script setup>
import Image from "/src/assets/img2.jpg";
</script>
<template>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-y-10">
    <div class="space-y-4">
      <h2 class="text-2xl md:text-3xl lg:text-4xl text-black font-normal">
        All New Technology
      </h2>
      <p
        class="w-full sm:w-60 md:w-80 lg:w-96 font-normal text-gray-800 text-base lg:text-lg"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        quibusdam. Eius odio dolor ex error dolores unde illo cumque aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error
        sequi, eius numquam sint, ducimus totam ullam exercitationem vero
        voluptatum quo ipsa a inventore.
      </p>
      <div>
        <button
          class="px-5 md:px-6 lg:px-7 py-2 text-sm lg:text-base rounded-full bg-white hover:bg-white/70 text-black font-medium duration-300"
        >
          See More
        </button>
      </div>
    </div>
    <div>
      <img
        :src="Image"
        alt="picture"
        class="sm:w-[20rem] md:w-[25rem] lg:w-[30rem] h-[25rem] md:h-[30rem] lg:h-[35rem] rounded-tr-[7rem] border-8 border-gray-100"
      />
    </div>
  </div>
</template>
