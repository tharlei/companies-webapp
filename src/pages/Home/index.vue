<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { City, getCities } from '../../services/get-cities';
import { FederalUnit, getFederalUnits } from '../../services/get-federal-units';
import { Company, getCompanies } from '../../services/get-companies';
import { debounce } from '../../shared/debounce';
import Header from '../../components/Header/index.vue';
import List from '../../components/List/index.vue';

const name = ref('');
const page = ref(1);
const federalUnit = ref('');
const city = ref('');
const loading = ref(true);
const federalUnits = ref<FederalUnit[]>([]);
const cities = ref<City[]>([]);
const companies = ref<Company[]>([]);
const canLoadMore = ref(false);

const limit = 15;

watch(federalUnit, async () => {
  page.value = 1;
  const promises = [handleCompanies()];

  if (!federalUnit.value) {
    city.value = '';
  }

  if (federalUnit.value) {
    promises.push(handleCities(federalUnit.value));
  }

  Promise.all(promises);
});

watch(city, async () => {
  page.value = 1;
  await handleCompanies();
});

watch(name, debounce(handleCompanies, 500));
watch(name, () => {
  page.value = 1;
});

onMounted(async () => {
  const [federalUnitsCollection] = await Promise.all([
    getFederalUnits(),
    handleCompanies(),
  ]);

  federalUnits.value = federalUnitsCollection;
});

async function handleCompanies() {
  loading.value = true;
  const { collection, existsNextPage } = await getCompanies({
    page: 1,
    limit: limit * page.value,
    federal_unit: federalUnit.value,
    city: city.value,
    name: name.value,
  });

  companies.value = collection;
  canLoadMore.value = existsNextPage;
  loading.value = false;
}

async function handleCities(federalUnit: string) {
  cities.value = await getCities(federalUnit);
}

async function loadingMoreCompanies() {
  page.value++;
  await handleCompanies();
}

function resetFilters() {
  federalUnit.value = '';
  city.value = '';
  name.value = '';
  page.value = 1;
}
</script>

<template>
  <Header />
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
              class="form-control-custom"
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
              class="form-control-custom cursor-pointer"
            >
              <option value="">Todos</option>
              <option
                v-for="item in federalUnits"
                :key="item.initials"
                :value="item.initials"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="flex flex-col">
            <label class="text-gray-500 text-base -mb-10 ml-3 z-10 font-medium">
              Cidade
            </label>
            <select
              v-model="city"
              :disabled="!federalUnit"
              :class="`form-control-custom ${
                federalUnit ? 'cursor-pointer' : 'cursor-not-allowed'
              }`"
            >
              <option value="">Todos</option>
              <option v-for="item in cities" :key="item.id" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>

        <List
          :companies="companies"
          :loading="loading"
          :reset-filters="resetFilters"
        />

        <div class="flex justify-center">
          <button
            v-if="canLoadMore && !loading"
            class="btn-custom"
            :disabled="loading"
            @click="loadingMoreCompanies"
          >
            Carregar mais
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-custom {
  @apply bg-green py-4 px-14 text-xl rounded-lg text-white font-bold;
}

.form-control-custom {
  @apply bg-gray-200 rounded text-lg pb-2 pt-10 px-3 placeholder-gray-500 text-gray-800 border-b-2 focus:border-b-4 border-indigo-400 transition-all duration-75;
}
</style>
