import { ref } from 'vue';

const getPosts = function () {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay(don't do it in production!)
      await new Promise((resolve) => {
        // after 1.5 second, call the resolve function
        setTimeout(resolve, 1500);
      });

      let res = await fetch('http://localhost:3000/posts');
      if (!res.ok) {
        throw Error('no data available');
      }
      posts.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
