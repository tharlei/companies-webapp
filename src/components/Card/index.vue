<script setup lang="ts">
import { Company } from '../../services/get-companies';

defineProps<{
  company: Company;
}>();
</script>

<template>
  <div class="border border-gray-400 rounded p-4">
    <h2 class="text-2xl">{{ company.name }}</h2>
    <p class="mt-2 text-base text-gray-800 font-normal">
      {{ company.description }}
    </p>
    <div class="flex items-center text-xl mt-8">
      <a
        target="_blank"
        rel="noreferrer"
        :href="`mailto:${company.email}`"
        class="mr-8"
        >Enviar email</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        :href="`https://wa.me/${company.phone}`"
        >Whatsapp</a
      >
    </div>
  </div>
</template>

<style scoped></style>
