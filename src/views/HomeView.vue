<script setup></script>

<template>
  <main class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </main>
</template>

<script>
import PostList from '../components/PostList.vue';
import Spinner from '../components/SpinnerComp.vue';
import getPosts from '../composables/getPosts';
import TagCloud from '../components/TagCloud.vue';

export default {
  name: 'HomeView',

  components: { TagCloud, PostList, Spinner },

  setup() {
    // Externalize the function, make it reusable in other components
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style lang="scss">
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
