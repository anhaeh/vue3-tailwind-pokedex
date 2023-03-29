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


<style scoped>
.background-color-bug {
  background-color: #729f3f;
  color: #fff
}

.background-color-dark {
  background-color: #707070;
  color: #fff
}

.background-color-dragon {
  background-color: #53a4cf;
  color: #fff
}

.background-color-electric {
  background-color: #eed535;
  color: #212121
}

.background-color-fairy {
  background-color: #fdb9e9;
  color: #212121
}

.background-color-fighting {
  background-color: #d56723;
  color: #fff
}

.background-color-fire {
  background-color: #fd7d24;
  color: #fff
}

.background-color-flying {
  background-color: #3dc7ef;
  color: #212121
}

.background-color-ghost {
  background-color: #7b62a3;
  color: #fff
}

.background-color-grass {
  background-color: #9bcc50;
  color: #212121
}

.background-color-ground {
  background-color: #f7de3f;
  color: #212121
}

.background-color-ice {
  background-color: #51c4e7;
  color: #212121
}

.background-color-normal {
  background-color: #a4acaf;
  color: #212121
}

.background-color-poison {
  background-color: #b97fc9;
  color: #fff
}

.background-color-psychic {
  background-color: #f366b9;
  color: #fff
}

.background-color-rock {
  background-color: #a38c21;
  color: #fff
}

.background-color-steel {
  background-color: #9eb7b8;
  color: #212121
}

.background-color-water {
  background-color: #4592c4;
  color: #fff
}
</style>
