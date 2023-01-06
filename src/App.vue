<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>
