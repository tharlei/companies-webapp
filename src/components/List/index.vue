<script setup lang="ts">
import { Company } from '../../services/get-companies';
import NotFound from '../../assets/not-found.svg';
import Card from '../Card/index.vue';

defineProps<{
  companies: Company[];
  loading: boolean;
  resetFilters: () => void;
}>();
</script>

<template>
  <div v-if="!loading && companies.length" class="list-companies">
    <Card v-for="company in companies" :key="company.id" :company="company" />
  </div>
  <div v-else-if="loading" class="list-companies"></div>
  <div v-else class="flex flex-col justify-center items-center">
    <img
      :src="NotFound"
      alt="Bixinhos mostrando interrogação, representando que não encontrou nada"
    />
    <p class="text-2xl text-center text-gray-800 font-medium my-8">
      Nenhuma empresa encontrada :(
    </p>
    <button class="btn-custom" @click="resetFilters">Limpe os filtros</button>
  </div>
</template>

<style scoped>
.list-companies {
  @apply grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-8 gap-8 text-indigo-400 font-semibold;
}

.btn-custom {
  @apply bg-green py-4 px-14 text-xl rounded-lg text-white font-bold;
}
</style>
