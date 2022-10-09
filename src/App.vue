<script setup lang="ts">
import Home from './pages/Home/index.vue';
</script>

<template>
  <Home />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'DM Sans', sans-serif;
}

input,
select {
  outline: 0;
}
</style>
