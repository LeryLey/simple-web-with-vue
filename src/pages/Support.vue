<script setup>
import Image from "/src/assets/type-c.jpg";
</script>
<template>
  <div class="flex flex-col sm:flex-row gap-20 lg:gap-0 items-center justify-between w-full">
    <div class="gap-10 flex flex-col">
      <div class="block space-y-4">
        <h2 class=" text-2xl lg:text-3xl text-black">Expert Support</h2>
        <p class="text-gray-800 w-full sm:w-[20rem] md:w-[25rem] lg:w-[30rem] text-base md:text-lg">
          Faulty phone battery? Slow laptop? We have in-house tech experts who
          can assist you. 
        </p>
        <p class="text-gray-800 text-lg">Visit us in stores!</p>
      </div>
      <div class="space-y-4">
        <h3 class="text-black font-bold">OUR LOCATIONS</h3>
        <div class="space-y-2">
          <p>123 Anywhere St.</p>
          <p>Any City, State, Any County</p>
          <p>(123) 456 7890</p>
        </div>
      </div>
    </div>
    <div>
      <img
        :src="Image"
        alt="picture"
        class="  w-full lg:w-[25rem] h-[25rem] lg:h-[30rem] object-cover rounded-tr-[7rem] border-8 border-gray-100"
      />
    </div>
  </div>
</template>
