<template>
  <div class="post">
    <RouterLink :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </RouterLink>

    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => props.post.body.substring(0, 100) + '...');
    return { snippet };
  },
  components: { RouterLink },
};
</script>

<style lang="scss" scoped></style>
