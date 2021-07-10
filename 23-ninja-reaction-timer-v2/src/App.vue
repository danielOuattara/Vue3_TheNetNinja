<template>
  <h1>{{title}}</h1> <br>
  <button :disabled="isPlaying" @click="play">Play</button>
  <button :diabled="deltaTime > 0" @click="reset">Reset</button> <br>
  <Pusher v-if="isPlaying" :delay="delay" @receiveDeltaTime="storeDeltaTime"  >
  </Pusher>
  <Result v-if="showResult" :deltaTime="deltaTime"></Result>

  <!-- MY_TODO : finish result of the game -->

</template>

<script>
import Pusher from './components/Pusher.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Result,
    Pusher,
  },
  data() {
    return {
      title: "Ninja Reaction Timer !",
      isPlaying: false,
      delay: null ,
      deltaTime: null,
      showResult: false,
    }
  },
  methods: {   
    play() {
      this.delay = 500 + Math.round(Math.random() * 5000);
      this.isPlaying = true;
      this.deltaTime = null;
    },
    storeDeltaTime(arg) {
      this.deltaTime = arg;
      this.showResult = true;
      this.isPlaying = false;
    }, 
    reset() {
      this.deltaTime = 0
    }
  }
}
</script>

<style >
#app, .modals {
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
  border-bottom: 1px solid  #dddd;
  display: inline-block;
  padding-bottom: 10px;
  color: blue;
}


</style>
