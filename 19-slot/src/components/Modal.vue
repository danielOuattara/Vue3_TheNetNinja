<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <!-- <slot>default content</slot> -->
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("closeEvent");
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

.modal p {
  font-size: normal;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: rgb(232, 184, 184);
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>
