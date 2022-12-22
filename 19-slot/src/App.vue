<template>
  <h1>{{ title }}</h1>
  <p>
    <input type="text" ref="name" />
  </p>

  <Modal v-if="showModal" theme="" @closeEvent="toggleModal">
    <h1>Ninja !</h1>
    <p>Show me your sword !</p>

    <template v-slot:links>
      <p>
        <a href="#">signup now</a>
        <a href="#">more infos</a>
      </p>
    </template>
  </Modal>
  <button @click="toggleModal">Toogle Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue App :)',
      addedClassActive: false,
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
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
