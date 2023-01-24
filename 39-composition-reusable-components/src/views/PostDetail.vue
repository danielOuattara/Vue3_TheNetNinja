<template>
  <h2 v-if="!post && !error">Loading...</h2>
  <h2 v-else-if="error">{{ error }}</h2>
  <div class="post" v-else>
    <h3>{{ post.title }}</h3>
    <p>
      {{ post.body }}
    </p>

    <span v-for="tag in post.tags" :key="post.id">&nbsp;#{{ tag }}</span>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import getOnePost from "@/composables/getOnePost";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, fetchOnePost } = getOnePost(props.id);
    onBeforeMount(fetchOnePost);
    return { post, error };
  },
};
</script>

<style lang="scss" scoped></style>
