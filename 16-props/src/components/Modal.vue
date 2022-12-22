<template>
  <div class="backdrop" ref="backdrop" @click="handleBackdrop">
    <div class="modal" :class="{ saleStyle: theme === 'sale' }">
      <h1>{{ title2 }}</h1>
      <span @click="handleBackdrop">&times</span>
      <p>modal content</p>
      <h2>{{ this.message }}</h2>
      <p>{{ text }}</p>
      <p>{{ list }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'title', 'title2', 'text', 'list', 'theme'],
  methods: {
    handleBackdrop() {
      this.$refs.backdrop.remove()
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

.modal.saleStyle {
  background: rgba(143, 53, 69, 0.679);
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
