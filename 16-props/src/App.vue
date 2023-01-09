<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />

  <Modal
    :title2="title2"
    message="Sign up here"
    text="Grab your ninja code"
    :list="list"
    theme="sale"
  />
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue App :)",
      title2: "Your Vue App :)",
      addedClassActive: false,
      list: ["aaa,", "bbb", "ccc"],
    };
  },
  methods: {},
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
  border-bottom: 1px solid #dddd;
  display: inline-block;
  padding-bottom: 10px;
  color: blue;
}
</style>
