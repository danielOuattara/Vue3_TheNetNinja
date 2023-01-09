<template>
  <h1>{{ title }}</h1>
  <p>
    <button :disabled="disabledStartBtn" @click="play">Click to play</button>
  </p>
  <Pusher :showPusher="showPusher" :stopTimer="stopTimer" />

  <Result :showResult="showResult" :deltaTime="deltaTime"></Result>
</template>

<script>
import Pusher from "./components/Pusher.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: {
    Pusher,
    Result,
  },
  data() {
    return {
      title: "Ninja Reaction Timer !",
      disabledStartBtn: false,
      showPusher: false,
      delay: null,
      startTime: null,
      deltaTime: 0,
      showResult: false,
    };
  },
  methods: {
    play() {
      this.delay = 500 + Math.round(Math.random() * 2000);
      this.disabledStartBtn = true;
      setTimeout(this.startTimer, this.delay);
      this.showResult = false;
    },

    startTimer() {
      this.showPusher = true;
      this.startTime = new Date();
    },

    stopTimer() {
      this.deltaTime = new Date() - this.startTime;
      this.showPusher = false;
      this.showResult = true;
      this.disabledStartBtn = false;
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
button:hover {
  cursor: pointer;
}
</style>
