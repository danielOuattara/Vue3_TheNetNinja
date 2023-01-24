import { ref } from "vue";

function getPosts() {
  const posts = ref([]);
  const error = ref(null);

  async function fetchPosts() {
    try {
      const response = await fetch(`http://localhost:8000/posts`);
      if (!response.ok) {
        throw Error(`${response.status} : ${response.statusText}`);
      }
      const data = await response.json();
      posts.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  }

  // const fetchPosts = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/posts`);
  //     if (!response.ok) {
  //       throw Error(`${response.status} : ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     posts.value = data;
  //   } catch (err) {
  //     error.value = err.message;
  //     console.log(err.message);
  //   }
  // };

  return { posts, error, fetchPosts };
}
export default getPosts;
