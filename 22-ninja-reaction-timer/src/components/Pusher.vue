<template>
  <button :disabled="disabledStartBtn" @click="play">play</button> <br>

  <div type=button class="pusher" v-if="showPusher" @click="stopTimer">
        <h1>Ninja !</h1>  
  </div>
</template>

<script>
export default {
    props: ['disabledStartBtn', 'play', 'showPusher', 'stopTimer'],   
}
</script>

<style >

</style>