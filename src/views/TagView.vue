<template>
  <div class="tag">Tags!!!</div>
  <div v-if="error">{{ error }}</div>

  <!-- use the postList component to output the required posts -->
  <div v-if="posts.length"><PostList :posts="postsWithTag" /></div>
  <div v-else>
    <!-- show the spinner until the data is loaded, and error if there is one -->
    <SpinnerComp />
  </div>
</template>

<script>
// Challenge
import SpinnerComp from '../components/SpinnerComp.vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  // create a tag route,which the tag as a route parameter(/tags/:tag)
  name: 'TagView',
  components: { PostList, SpinnerComp },
  setup() {
    // in the tag comp,make a request for all the posts
    const { posts, error, load } = getPosts();
    load();

    // use the useRoute function to access the tag route parameter
    const route = useRoute();

    // use a computed property to return an array of posts which have the current tag
    const postsWithTag = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag)),
    );

    return { posts, error, postsWithTag };
  },
};
</script>

<style lang="scss" scoped></style>
