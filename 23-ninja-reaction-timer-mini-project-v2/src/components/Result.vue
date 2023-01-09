<template>
  <div class="result">
    <p>
      <span v-if="deltaTime > 0"> {{ deltaTime }} miliseconds</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["deltaTime"],
  data() {
    return {};
  },

  methods: {
    stopTimer() {
      this.endTime = new Date();
      this.deltaTime = this.endTime - this.startTime;
      this.showPusher = false;
      this.showResult = true;
      this.isPlaying = false;
    },
  },
};
</script>
