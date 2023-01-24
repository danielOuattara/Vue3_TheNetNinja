import { ref } from "vue";

function getOnePost(id) {
  const post = ref(null);
  const error = ref(null);

  async function fetchOnePost() {
    try {
      const response = await fetch(`http://localhost:8000/posts/${id}`);
      if (!response.ok) {
        throw Error(`${response.status} : ${response.statusText}`);
      }
      const data = await response.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  }

  return { post, error, fetchOnePost };
}
export default getOnePost;
