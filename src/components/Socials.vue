<script setup>
import { CoBrandFacebookF } from "@kalimahapps/vue-icons";
import { AkTwitterFill } from "@kalimahapps/vue-icons";
import { AkTwitchFill } from "@kalimahapps/vue-icons";
import { AkInstagramFill } from "@kalimahapps/vue-icons";
import { AnFilledCaretRight } from "@kalimahapps/vue-icons";
</script>
<template>
  <div class="flex flex-col gap-4">
    <button
      class="grid place-content-center text-base text-gray-800 hover:text-black bg-transparent hover:bg-gray-400 w-7 h-7 p-1 rounded-full duration-300"
    >
      <CoBrandFacebookF class="peer" />
      <div
        class="absolute top-0 right-full flex items-center pointer-events-none peer-hover:pointer-events-auto opacity-0 peer-hover:opacity-100 -translate-x-3 peer-hover:-translate-x-0 duration-300 ease-out"
      >
        <p class="bg-white px-3 py-px rounded-sm text-gray-600 text-sm">Facebook</p>
        <span class="text-gray-500"><AnFilledCaretRight /></span>
      </div>
    </button>
    <button
      class="grid place-content-center text-base text-gray-800 hover:text-black bg-transparent hover:bg-gray-400 w-7 h-7 p-1 rounded-full duration-300"
    >
      <AkTwitterFill class="peer" />
      <div
        class="absolute  right-full flex items-center pointer-events-none peer-hover:pointer-events-auto opacity-0 peer-hover:opacity-100 -translate-x-3 peer-hover:-translate-x-0 duration-300 ease-out"
      >
        <p class="bg-white px-3 py-px rounded-sm text-gray-600 text-sm">Twitter</p>
        <span class="text-gray-500"><AnFilledCaretRight /></span>
      </div>
    </button>
    <button
      class="grid place-content-center text-base text-gray-800 hover:text-black bg-transparent hover:bg-gray-400 w-7 h-7 p-1 rounded-full duration-300"
    >
      <AkTwitchFill class="peer" />
      <div
        class="absolute  right-full flex items-center pointer-events-none peer-hover:pointer-events-auto opacity-0 peer-hover:opacity-100 -translate-x-3 peer-hover:-translate-x-0 duration-300 ease-out"
      >
        <p class="bg-white px-3 py-px rounded-sm text-gray-600 text-sm">Twitch</p>
        <span class="text-gray-500"><AnFilledCaretRight /></span>
      </div>
    </button>
    <button
      class="grid place-content-center text-base text-gray-800 hover:text-black bg-transparent hover:bg-gray-400 w-7 h-7 p-1 rounded-full duration-300"
    >
      <AkInstagramFill class="peer" />
      <div
        class="absolute  right-full flex items-center pointer-events-none peer-hover:pointer-events-auto opacity-0 peer-hover:opacity-100 -translate-x-3 peer-hover:-translate-x-0 duration-300 ease-out"
      >
        <p class="bg-white px-3 py-px rounded-sm text-gray-600 text-sm">Instagram</p>
        <span class="text-gray-500"><AnFilledCaretRight /></span>
      </div>
    </button>
  </div>
</template>
