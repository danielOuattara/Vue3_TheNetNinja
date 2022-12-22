<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>Modal title</h1>
      <span @click="this.toggleModal()">&times</span>
      <p>modal content</p>
      <h2>{{ this.message }}</h2>
      <p>{{ this.text }}</p>
      <p>{{ list }}</p>
      <p>
        <button @click="showFunction">Show details</button>
      </p>
      <p>
        <button @click="sayHello('John')">Salutation</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'text', 'list', 'theme', 'toggleModal'],
  methods: {
    closeModal() {
      this.$emit('closeEvent')
    },

    showFunction() {
      console.log(this.toggleModal.toString())
    },
    sayHello(name) {
      console.log(` Hello ${name}`)
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
  top: 13rem;
  right: 11rem;
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
