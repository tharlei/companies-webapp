<script setup lang="ts">
const headerTitle = 'Empresas ' + new Date().getFullYear();
</script>

<template>
  <header className="w-full bg-gray-white py-6 px-4 lg:px-12">
    <h1 class="font-bold text-indigo-800 text-3xl">
      {{ headerTitle }}
    </h1>
  </header>
</template>

<style scoped></style>
