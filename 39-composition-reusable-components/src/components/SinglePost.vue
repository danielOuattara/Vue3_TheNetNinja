<template>
  <div class="post">
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>
      {{ snippet }}
    </p>

    <span v-for="tag in post.tags" :key="post.id">&nbsp;#{{ tag }}</span>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    //------------------------------------------------------------
    const readMore = ref(false);
    const bodyContent = ref(props.post.body.slice(0, 90));

    const snippet = computed(function () {
      return `${props.post.body.substring(0, 100)} ...`;
    });

    //-------------------------------------------------------------

    return { readMore, snippet };
  },
};
</script>
