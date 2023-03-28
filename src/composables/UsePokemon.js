import { ref } from 'vue'

export const usePokemon = () => {

  const filterByType = (typeName) => {
    if (!typeName) {
      return pokemons.value
    }
    return pokemons.value.filter(x => x.type.includes(typeName))
  }

  const goToDetails = (pokemon) => {
    const detailsUrl = `https://www.pokemon.com/el/pokedex/${pokemon.slug}`
    window.open(detailsUrl, '_blank')
  }

  const pokemons = ref([]);


  const types = {
    bug: 'Bicho',
    dark: 'Oscuro',
    dragon: 'Dragón',
    electric: 'Electrico',
    fairy: 'Hada',
    fighting: 'Lucha',
    fire: 'Fuego',
    flying: 'Volador',
    ghost: 'Fantasma',
    grass: 'Hierba',
    ground: 'Tierra',
    ice: 'Hielo',
    normal: 'Normal',
    poison: 'Veneno',
    psychic: 'Psiquico',
    rock: 'Roca',
    steel: 'Metal',
    water: 'Agua'
  }

  import('@/composables/pokemons.json').then(r => {
    pokemons.value = r.default
  })

  return {
    pokemons,
    types,
    filterByType,
    goToDetails
  }
}
