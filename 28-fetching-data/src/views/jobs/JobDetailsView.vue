<template>
  <h1 v-if="job">{{ job.title }}</h1>
  <p>Job id: {{ this.id }}</p>
  <p v-if="job">Details: {{ job.details }}</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: {},
    };
  },

  created() {
    fetch(`http://localhost:8000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
