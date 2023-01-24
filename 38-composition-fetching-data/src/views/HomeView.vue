<template>
  <div class="home">
    <h1>Home</h1>

    <h2 v-if="!posts.length && !error">Loading...</h2>
    <h2 v-if="error">{{ error }}</h2>
    <PostList :posts="posts" v-else />
  </div>
</template>

<script>
import PostList from "./../components/PostList.vue";
import { ref, onBeforeMount } from "vue";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);
    async function loadData() {
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

    onBeforeMount(loadData);

    return { posts, error };
  },
};
</script>
