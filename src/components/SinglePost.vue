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

<style lang="scss" scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed orangered;

  h3 {
    display: inline-block;
    position: relative;
    font-size: 25px;
    color: #fff;
    margin-bottom: 10px;
    max-width: 400px;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: #ff8800;
      position: absolute;
      z-index: -1;
      padding-right: 40px;
      left: -30px;
      transform: rotateZ(-1deg);
    }
  }
}
</style>
