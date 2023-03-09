<script setup>
import TopHeader from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TopHeader />
  <main class="container mx-auto px-4 flex flex-col">
    <RouterView />
  </main>
</template>

<style lang="sass">
</style>
