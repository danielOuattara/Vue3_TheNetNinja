<template>
  <h1>{{ title }}</h1>
  <p>
    <input type="text" ref="name" />
    <button>click</button>
  </p>

  <Modal
    v-show="showModal"
    message="Sign up here"
    text="Grab your ninja code"
    v-bind:list="list"
    theme="sale"
    @closeModal="toggleModal"
    @shutModal="toggleModal"
    :toggleModal="toggleModal"
    :list="list"
    :sayHello="sayHello"
  />
  <p>Welcome !</p>
  <button @click="this.toggleModal">Toggle showModal</button>
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
      addedClassActive: false,
      list: ["aaa,", "bbb", "ccc"],
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    sayHello() {
      console.log("Hello Every body");
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
  border-bottom: 1px solid #dddd;
  display: inline-block;
  padding-bottom: 10px;
  color: blue;
}
</style>
