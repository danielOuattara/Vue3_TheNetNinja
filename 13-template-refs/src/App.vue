<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="firstName" />
  <input type="text" ref="lastName" />
  <button @click="handleClick">Click to Add Class</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "My first Vue App :)",
      addedClassActive: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs);
      console.log(this.$refs.lastName);
      this.addedClassActive = !this.addedClassActive;
      // this.$refs.lastName.classList.add("active");
      this.$refs.lastName.classList.toggle("active");
      this.$refs.firstName.focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
