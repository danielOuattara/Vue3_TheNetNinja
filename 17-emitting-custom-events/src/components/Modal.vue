<template>
  <div class="backdrop" @click="this.closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>Modal title</h1>
      <span class="close1" type="button" @click="this.toggleModal"
        >&times1</span
      >
      <span class="close2" @click="this.shutModal">&times2</span>
      <p>modal content</p>
      <h2>{{ this.message }}</h2>
      <p>{{ this.text }}</p>
      <ul>
        <li v-for="item in this.list" :key="item">{{ item }}</li>
      </ul>
      <button @click="sayHello">Say Hello</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    text: String,
    list: Array,
    theme: String,
    toggleModal: Function,
    sayHello: Function,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    shutModal() {
      this.$emit("shutModal");
    },
  },
};
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
.close1,
.close2 {
  cursor: pointer;
  position: fixed;
  font-size: 1.5rem;
  width: 30px;
  border: 1px solid rgb(56, 56, 56);
  border-radius: 5px;
}
.close1 {
  top: 12.75rem;
  right: 23.75rem;
}
.close2 {
  top: 12.75rem;
  right: 20.75rem;
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
