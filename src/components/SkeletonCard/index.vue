<script setup lang="ts">
function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const widthTitle = randomNumber(35, 80);
const lastDescriptionLine = randomNumber(20, 80);
</script>

<template>
  <div class="border border-gray-400 rounded p-4">
    <div
      class="bg-gray-300 h-8 animate-pulse rounded-md"
      :style="`width: ${widthTitle}%`"
    ></div>

    <div class="mt-4">
      <div class="mt-1 w-full bg-gray-300 h-3 animate-pulse rounded-md"></div>
      <div class="mt-1 w-full bg-gray-300 h-3 animate-pulse rounded-md"></div>
      <div
        class="mt-1 bg-gray-300 h-3 animate-pulse rounded-md"
        :style="`width: ${lastDescriptionLine}%`"
      ></div>
    </div>

    <div class="flex items-center mt-8">
      <div class="w-24 bg-gray-300 h-6 animate-pulse rounded-md mr-8"></div>
      <div class="w-24 bg-gray-300 h-6 animate-pulse rounded-md"></div>
    </div>
  </div>
</template>

<style scoped></style>
