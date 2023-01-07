<script setup></script>

<template>
  <main class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
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

export default {
  name: 'HomeView',

  components: { PostList, Spinner },

  setup() {
    // Externalize the function, make it reusable in other components
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
