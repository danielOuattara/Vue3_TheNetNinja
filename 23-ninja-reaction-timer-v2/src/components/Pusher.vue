<template>
  <div type=button class="pusher" v-if="showPusher" @click="stopTimer" >
        <h1>Ninja !</h1>  
  </div>
</template>

<script>
export default {
    props: ['delay',/*  'play', 'showPusher', 'stopTimer' */],
    data() {
      return {
        showPusher: false,
        stopTime: null,
        deltaTime: null,
      }
    },

    mounted() {
        setTimeout( this.startTimer, this.delay)
    },

    methods: {  
      startTimer() {
        this.showPusher = true;
        this.startTime = new Date();
      },

      stopTimer() {
        this.stopTime = new Date();
        this.deltaTime = this.stopTime - this.startTime;
        this.$emit('receiveDeltaTime', this.deltaTime);
      }
    }
    
}
</script>

<style >

</style>