<script setup></script>

<template>
  <main>
    <h2>Ref</h2>
    <p ref="p">{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja 1</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja 2</button>

    <p>{{ name }}</p>
  </main>
</template>

<script>
// Option API's data are reactive, but in composition api, we need to use 'ref' to make data reactive

// Composition API
import { ref, reactive } from 'vue';

export default {
  name: 'Home',

  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 });

    // Can not use primitive type value in reactive
    const ninjaTwo = reactive({ name: 'luigi', age: 35 });

    const updateNinjaOne = () => {
      ninjaOne.value.age++;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age++;
    };

    return { ninjaOne, ninjaTwo, name, updateNinjaOne, updateNinjaTwo };
  },
};
</script>

<style scoped>
.test {
  color: red;
}
</style>
