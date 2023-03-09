<script setup>
import PokemonCard from '@/components/PokemonCard.vue'
import  { usePokemon } from '@/composables/UsePokemon'
import { computed, ref, watch } from 'vue'
import Paginator from '@/components/Paginator.vue'

const { filterByType, types } = usePokemon()

const page = ref(1)
const pageSize = 54
const filterValue = ref('')
const pageCount = computed(() => Math.ceil(showPokemons.value.length / pageSize))
const showPokemons = computed(() => filterByType(filterValue.value))


watch(filterValue, () => page.value = 1)
</script>

<template>
    <div class="container py-10">
      <label class="text-sm" for="filter">Filtrar</label>
      <select id="filter"
              class="block rounded-md border-2 bg-transparent w-1/4 text-gray-700 sm:text-sm p-2 mb-2"
              v-model="filterValue"
      >
        <option value="">Todos</option>
        <option v-for="type in Object.keys(types)" :value="type">{{ types[type] }}</option>
      </select>
      <paginator v-model:page="page" :page-count="pageCount" />

      <div class="flex justify-center flex-wrap gap-2">
        <div v-for="item in showPokemons.slice((page - 1) * pageSize, page * pageSize)" :key="item.id">
          <pokemon-card :pokemon="item"></pokemon-card>
        </div>
      </div>
      <paginator v-model:page="page" :page-count="pageCount" />
    </div>
</template>
