<script setup lang="ts">
import { onUpdated, ref } from 'vue';

const name = ref('');
const federalUnit = ref('');
const city = ref('');
const loading = ref(true);

const headerTitle = 'Empresas ' + new Date().getFullYear();

onUpdated(() => {
  if (!federalUnit.value) {
    city.value = '';
  }
});
</script>

<template>
  <header className="w-full bg-gray-white py-6 px-4 lg:px-12">
    <h1 class="font-bold text-indigo-800 text-3xl">
      {{ headerTitle }}
    </h1>
  </header>
  <main className="py-14 min-h-screen bg-gray-200 flex justify-center">
    <div class="container px-4 lg:px-0">
      <div class="bg-white w-full py-10 px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mb-14">
          <div class="flex flex-col">
            <label class="text-gray-500 text-base -mb-10 ml-3 z-10 font-medium">
              Buscar
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="Digite nome"
              class="bg-gray-200 rounded text-lg pb-2 pt-10 px-3 placeholder-gray-500 text-gray-800 border-b-2 focus:border-b-4 border-indigo-400 transition-all duration-75"
            />
            <div class="flex justify-end -mt-12 mr-6">
              <fa
                :icon="['fas', 'search']"
                class="text-indigo-400 font-bold text-xl"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label class="text-gray-500 text-base -mb-10 ml-3 z-10 font-medium">
              Estado
            </label>
            <select
              v-model="federalUnit"
              class="cursor-pointer bg-gray-200 rounded text-lg pb-2 pt-11 px-2 placeholder-gray-500 text-indigo-400 border-b-2 focus:border-b-4 border-indigo-400 transition-all duration-75"
            >
              <option value="">Todos</option>
              <option value="SP">São Paulo</option>
            </select>
          </div>

          <div class="flex flex-col">
            <label class="text-gray-500 text-base -mb-10 ml-3 z-10 font-medium">
              Cidade
            </label>
            <select
              v-model="city"
              :disabled="!federalUnit"
              class="cursor-pointer bg-gray-200 rounded text-lg pb-2 pt-11 px-2 placeholder-gray-500 text-indigo-400 border-b-2 focus:border-b-4 border-indigo-400 transition-all duration-75"
            >
              <option value="">Todos</option>
              <option value="Araçatuba">Araçatuba</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-8 gap-8 text-indigo-400 font-semibold"
        >
          <div class="border border-gray-400 rounded p-4">
            <h2 class="text-2xl">Empresa A</h2>
            <p class="mt-2 text-base text-gray-800 font-normal">
              Dusi diuqh wquidh wqhd hqwdhqwuh udhqwhduqwhduqwud
            </p>
            <div class="flex items-center text-xl mt-8">
              <a href="mailto:" class="mr-8">Enviar email</a>
              <a href="https://wa.me/">Whatsapp</a>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="bg-green py-4 px-14 text-xl rounded-lg text-white"
            :disabled="loading"
          >
            <span v-if="loading">
              <fa
                :icon="['fas', 'circle-notch']"
                class="font-bold text-xl animate-spin mr-2"
              />
              Carregando...
            </span>
            <span v-else>Carregar mais</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
