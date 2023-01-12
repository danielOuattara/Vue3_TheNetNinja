<template>
 <h1 v-if="job">{{ job.title }}</h1>
 <p>Job id: {{ this.id}}</p>
 <p v-if="job">Details: {{ job.details }}</p>
</template>

<script>
export default {
 props: ["id"],
 data() {
  return {
   // No need no more to get the id. Props are best.
   // id: this.$route.params.id,
   job: null,
  };
 },

 created() {
  fetch(`http://localhost:3000/jobs/${this.id}`)
   .then((response) => response.json())
   .then((data) => (this.job = data))
   .catch((error) => console.log(error));
 },
};
</script>

<style>
</style>