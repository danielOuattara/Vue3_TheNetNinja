<template>
  <div class="result">
    <p v-if="showResult && deltaTime > 0">{{ deltaTime }} miliseconds</p>
  </div>
</template>

<script>
export default {
  props: ["showResult", "deltaTime"],
};
</script>
