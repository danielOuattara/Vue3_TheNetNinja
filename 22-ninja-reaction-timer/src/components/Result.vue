
<template>
  <div class="result">
    <p v-if="showResult"> 
      <span v-if="deltaTime >0"> {{deltaTime}} miliseconds</span>
     </p>
  </div>
</template>

<script>
export default {
    props: ["showResult", "deltaTime"]
}
</script>