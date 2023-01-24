<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
  <hr />
</template>

<script>
import {
  onBeforeUnmount,
  onUnmounted,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
  setup(props) {
    onBeforeUnmount(() => console.log("Component PostList: before unmounted"));
    onUnmounted(() => console.log("Component PostList: unmounted "));

    onBeforeMount(() => console.log("Component PostList: before mounted"));
    onMounted(() => console.log("Component PostList: mounted "));

    onBeforeUpdate(() => console.log("Component PostList: before update"));
    onUpdated(() => console.log("Component PostList: updated"));
  },
};
</script>
