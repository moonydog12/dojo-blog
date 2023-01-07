<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <RouterLink :to="{ name: 'Tag', params: { tag: tag } }">#{{ tag }}</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import useTags from '../composables/useTags';

export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
  components: { RouterLink },
};
</script>

<style lang="scss" scoped>
.tag-cloud {
  padding: 10px;

  h3 {
    border-bottom: 1px solid #eee;
  }

  div {
    display: inline-block;
    padding: 10px;
  }

  a {
    color: #ccc;
    text-decoration: none;

    &:hover {
      color: #ff8800;
    }
  }

  .router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
}
</style>
