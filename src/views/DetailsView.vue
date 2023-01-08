<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/SpinnerComp.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectDojo } from '../firebase/config';

export default {
  props: ['id'],
  components: { Spinner },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const { post, error, load } = getPost(route.params.id);
    load();

    const handleClick = async () => {
      await projectDojo.collection('posts').doc(route.params.id).delete();
      router.push('/');
    };

    return { post, error, handleClick };
  },
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 1200px;

  p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .delete {
    margin: 10px auto;
  }
}

.pre {
  white-space: pre-wrap;
}
</style>
