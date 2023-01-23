<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <ul>
      <li>
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
        <!-- <router-link to="/jobs/" + job.id> {{job.title }} {{job.id}} </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },

  created() {
    fetch("http://localhost:8000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
</style>
