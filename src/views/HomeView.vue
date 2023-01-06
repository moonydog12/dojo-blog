<script setup></script>

<template>
  <main class="home">
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="handleClick">Stop watchers</button>
  </main>
</template>

<script>
// Option API's data are reactive, but in composition api, we need to use 'ref' to make data reactive

// Composition API
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',

  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    // Will fire whenever the parameter value changed
    const stopWatch = watch(search, () => {
      console.log('watch function fired');
    });

    // Run initially when the component first load, or run when any dependency changed
    // In the case,search.value is the dependency
    const stopEffect = watchEffect(() => {
      console.log('watch effect function fired', search.value);
    });

    // Stop the watchers by invoke them!
    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => names.value.filter((name) => name.includes(search.value)));

    return { names, search, matchingNames, handleClick };
  },
};
</script>

<style scoped></style>
