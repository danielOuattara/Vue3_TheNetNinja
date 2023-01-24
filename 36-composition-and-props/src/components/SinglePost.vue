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

  <hr />
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>
      {{ content }}
      <button @click="toggleMoreContent">
        {{ !moreContent ? "Read More" : "Read Less" }}
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
    const moreContent = ref(false);
    const snippet = computed(function () {
      return props.post.body.substring(0, 100);
    });
    const content = ref(snippet.value);

    function toggleMoreContent() {
      moreContent.value = !moreContent.value;
      content.value = moreContent.value ? props.post.body : snippet;
      return;
    }

    return {
      readMore,
      toggleReadMore,
      bodyContent,
      moreContent,
      snippet,
      toggleMoreContent,
      content,
    };
  },
};
</script>
