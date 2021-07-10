<template>
  <h1>{{title}}</h1> <br>
  <Pusher :disabledStartBtn="disabledStartBtn"
          :play="play"
          :showPusher="showPusher" 
          :stopTimer="stopTimer">
  </Pusher>
  <Result :showResult="showResult" :deltaTime="deltaTime"></Result>

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
      delay: null ,
      showPusher: false, 
      disabledStartBtn: false, 
      startTime: null, 
      deltaTime: 0, 
      showResult: false, 
    }
  },
  methods: {   
    play() {
      this.delay = 500 + Math.round(Math.random() * 5000);
      this.isPlaying = true;
      this.disabledStartBtn = true;
      setTimeout( this.startTimer, this.delay);
      this.showResult = false;
    },

    startTimer() {
      this.showPusher = true;
      this.startTime = new Date();
    },

    stopTimer() {
      this.endTime = new Date();
      this.deltaTime = this.endTime - this.startTime;
      this.showPusher = false;
      this.showResult = true;
      this.disabledStartBtn = false
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
