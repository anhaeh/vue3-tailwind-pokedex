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
const showPokemonsPage = computed(() => showPokemons.value.slice((page.value - 1) * pageSize, page.value * pageSize))


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
        <div v-for="item in showPokemonsPage" :key="item.id">
          <pokemon-card :pokemon="item"></pokemon-card>
        </div>
      </div>
      <paginator v-model:page="page" :page-count="pageCount" />
    </div>
</template>

<style scoped lang="sass">
:deep()
  .background-color-bug
    background-color: #729f3f
    color: #fff

  .background-color-dark
    background-color: #707070
    color: #fff

  .background-color-dragon
    background-color: #53a4cf
    color: #fff

  .background-color-electric
    background-color: #eed535
    color: #212121

  .background-color-fairy
    background-color: #fdb9e9
    color: #212121

  .background-color-fighting
    background-color: #d56723
    color: #fff

  .background-color-fire
    background-color: #fd7d24
    color: #fff

  .background-color-flying
    background-color: #3dc7ef
    color: #212121

  .background-color-ghost
    background-color: #7b62a3
    color: #fff

  .background-color-grass
    background-color: #9bcc50
    color: #212121

  .background-color-ground
    background-color: #f7de3f
    color: #212121

  .background-color-ice
    background-color: #51c4e7
    color: #212121

  .background-color-normal
    background-color: #a4acaf
    color: #212121

  .background-color-poison
    background-color: #b97fc9
    color: #fff

  .background-color-psychic
    background-color: #f366b9
    color: #fff

  .background-color-rock
    background-color: #a38c21
    color: #fff

  .background-color-steel
    background-color: #9eb7b8
    color: #212121

  .background-color-water
    background-color: #4592c4
    color: #fff
</style>
