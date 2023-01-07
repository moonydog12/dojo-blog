<script setup>
import NavigationBar from './components/NavigationBar.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>
