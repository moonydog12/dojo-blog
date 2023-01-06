<script setup></script>

<template>
  <main class="home">
    <h1>home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </main>
</template>

<script>
import PostList from '../components/PostList.vue';
import { ref } from 'vue';

export default {
  name: 'HomeView',

  components: { PostList },

  setup() {
    const posts = ref([
      {
        title: 'Welcome to the blog',
        body: 'My heart a stereo, it beats for you just listen close',
        id: 1,
      },
      {
        title: 'Top 5 CSS tips',
        body: 'qu labore, veritatis earum minima quos eius. Esse nulla et assumenda natus dolores, inventore optio excepturi sed, alias facilis rerum ullam. Aliquam pariatur consectetur eaque?',
        id: 2,
      },
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>

<style scoped></style>
