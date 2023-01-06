<script setup></script>

<template>
  <main class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </main>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPost';

export default {
  name: 'HomeView',

  components: { PostList },

  setup() {
    // Externalize the function, make it reusable in other components
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style scoped></style>
