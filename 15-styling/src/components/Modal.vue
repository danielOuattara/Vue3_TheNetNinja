<template>
  <div class="backdrop" ref="backdrop" @click="handleBackdrop">
    <div class="modal">
      <h1>Modal title</h1>
      <span>&times</span>
      <p>modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBackdrop() {
      // this.$refs.backdrop.cla
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
.modal span {
  cursor: pointer;
  position: fixed;
  top: 13rem;
  right: 17rem;
  font-size: 1.75rem;
  width: 30px;
}
.modal span:hover {
  border: 1px solid grey;
  /* padding: -3px; */
  border-radius: 5px;
}

.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
</style>
