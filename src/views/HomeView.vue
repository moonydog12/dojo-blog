<script setup></script>

<template>
  <main class="home">
    <h1>home</h1>
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
import Spinner from '../components/Spinner.vue';
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

<style scoped></style>
