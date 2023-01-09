<template>
  <h1>{{ title }}</h1>
  <p>
    <button :disabled="isPlaying" @click="play">Play</button>
    <button :diabled="deltaTime > 0" @click="reset">Reset</button>
  </p>
  <Pusher v-if="isPlaying" :delay="delay" @receiveDeltaTime="storeDeltaTime">
  </Pusher>
  <Result v-if="showResult" :deltaTime="deltaTime"></Result>

  <!-- MY_TODO : finish result of the game -->
</template>

<script>
import Pusher from "./components/Pusher.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: {
    Result,
    Pusher,
  },
  data() {
    return {
      title: "Ninja Reaction Timer !",
      isPlaying: false,
      delay: null,
      deltaTime: null,
      showResult: false,
    };
  },
  methods: {
    play() {
      this.delay = 500 + Math.round(Math.random() * 1000);
      this.isPlaying = true;
      this.deltaTime = null;
    },
    storeDeltaTime(arg) {
      this.deltaTime = arg;
      this.showResult = true;
      this.isPlaying = false;
    },
    reset() {
      this.deltaTime = 0;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pusher {
  padding: 4rem;
  border: 1px solid grey;
  margin-top: 3rem;
  width: 10rem;
  margin: auto;
  background: lightblue;
  border-radius: 0.25rem;
  cursor: pointer;
}
h1 {
  border-bottom: 1px solid #dddd;
  display: inline-block;
  padding-bottom: 10px;
  color: blue;
}
button {
  color: rgb(255, 255, 255);
  background-color: #535353;
  padding: 8px 30px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  /* border: none; */
  border-style: none;
}
button[disabled] {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
