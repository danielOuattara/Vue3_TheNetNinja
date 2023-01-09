<template>
  <h1>{{ title }}</h1>

  <Modal v-show="showModal" theme="sale" @closeEvent="toggleModal">
    <h1>Ninja 1 !</h1>
    <p>Show me your sword !</p>

    <template v-slot:links>
      <p>
        <a href="#">signup now</a>
        <a href="#">more infos</a>
      </p>
    </template>
  </Modal>
  <p><button @click="toggleModal">Toogle Modal</button> <br /></p>

  <Modal v-show="showModal2" theme="sale" @closeEvent="toggleModal2">
    <h1>Ninja 2 !</h1>
    <p>Show me your stars !</p>
  </Modal>
  <p>
    <button @click="toggleModal2">Toogle Modal 2</button>
  </p>
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
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
