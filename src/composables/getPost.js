import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      // simulate delay(don't do it in production!)
      await new Promise((resolve) => {
        // after 1.5 second, call the resolve function
        setTimeout(resolve, 1500);
      });

      const data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw Error('that post does not exist');
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
