<template>
  <div type="button" class="pusher" v-if="showPusher" @click="stopTimer">
    <p>click quickly</p>
  </div>
</template>

<script>
export default {
  props: ["showPusher", "stopTimer"],
};
</script>

<style>
.pusher p {
  font-size: 20px;
}
</style>
