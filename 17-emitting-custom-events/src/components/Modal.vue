<template>
  <div class="backdrop" @click="closeModal_1">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>Modal title</h1>
      <span @click="closeModal_2">&times</span>
      <p>modal content</p>
      <h2>{{ this.message }}</h2>
      <p>{{ this.text }}</p>
      <p>{{ list }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'text', 'list', 'theme', 'toggleModal'],
  methods: {
    closeModal_1() {
      this.$emit('closeEvent')
    },
    closeModal_2() {
      this.toggleModal()
    },
  },
}
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
  border-radius: 5px;
  /* position: absolute; */
  /* top: 40%; */
  /* left: 30% */
}
span {
  cursor: pointer;
  position: fixed;
  top: 12.75rem;
  right: 22.75rem;
  font-size: 1.75rem;
  width: 30px;
}
span:hover {
  border: 1px solid grey;
  /* padding: -3px; */
  border-radius: 5px;
}

.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
