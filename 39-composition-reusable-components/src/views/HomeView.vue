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
import { onBeforeMount } from "vue";
import getPosts from "../composables/getPosts";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, fetchPosts } = getPosts();
    // onBeforeMount(fetchPosts);  //: OK
    fetchPosts(); // OK

    return { posts, error };
  },
};
</script>
