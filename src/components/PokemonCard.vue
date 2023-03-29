<script setup>
import { usePokemon } from '@/composables/UsePokemon'

const props = defineProps({
  pokemon: {
    required: true,
    type: Object
  }
})

const { types, goToDetails } = usePokemon()

</script>
<template>
  <div class="pokemon-card rounded-xl border-2 p-3 border-gray-100 shadow-md hover:bg-neutral-100 hover:cursor-pointer"
       :title="pokemon.name"
       @click="goToDetails(pokemon)"
  >
    <img :src="pokemon.ThumbnailImage" :alt="pokemon.ThumbnailAltText">
    <div class="w-100 flex justify-between">
      <span class="font-medium">
        {{ pokemon.name }}
      </span>
      <span>
        N°{{ pokemon.number }}
      </span>
    </div>
    <div class="flex gap-2">
      <span v-for="type in pokemon.type" :class="`background-color-${type}`" class="px-2 rounded text-sm">
        {{ types[type] }}
      </span>
    </div>
  </div>
</template>
