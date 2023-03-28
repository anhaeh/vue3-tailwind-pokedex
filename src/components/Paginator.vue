<script setup>
defineProps({
  page: {
    required: true,
    type: Number
  },
  pageCount: {
    required: true,
    type: Number
  }
})

const emit = defineEmits(['update:page'])

</script>
<template>
  <nav class="flex justify-center m-2 p-2">
    <ul class="inline-flex -space-x-px">
      <li>
        <a href="#"
           @click="emit('update:page', page - 1)"
           :class="{ 'bg-gray-300 pointer-events-none': page === 1 }"
           class="px-3 py-2 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </a>
      </li>
      <li v-for="number in pageCount">
        <a href="#"
           @click="emit('update:page', number)"
           :class="{ 'bg-gray-300': number === page }"
           class="px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          {{ number }}
        </a>
      </li>
      <li>
        <a href="#"
           @click="emit('update:page', page + 1)"
           :class="{ 'bg-gray-300 pointer-events-none': page === pageCount }"
           class="px-3 py-2 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>
