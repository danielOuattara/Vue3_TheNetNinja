<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>
      {{ bodyContent }}
      <button @click="toggleReadMore">
        {{ !readMore ? "Read More" : "Read Less" }}
      </button>
    </p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    //------------------------------------------------------------
    const readMore = ref(false);
    const bodyContent = ref(props.post.body.slice(0, 125) + " ...");

    function toggleReadMore() {
      readMore.value = !readMore.value;
      bodyContent.value = readMore.value
        ? props.post.body
        : props.post.body.slice(0, 150) + " ...";
    }

    //-------------------------------------------------------------
    const snippet = computed(function () {
      return props.post.body.substring(0, 100);
    });

    return { readMore, toggleReadMore, bodyContent, snippet };
  },
};
</script>
