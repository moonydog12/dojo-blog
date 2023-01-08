import { ref } from 'vue';
import { projectDojo } from '../firebase/config';

const getPosts = function () {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectDojo.collection('posts').get();
      posts.value = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
