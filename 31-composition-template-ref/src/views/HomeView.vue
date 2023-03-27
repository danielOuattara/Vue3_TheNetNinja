<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p_ref">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click</button>
    <button @click="addClass">Add Class</button>
    <button @click="changeContent">Change Content</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const p_ref = ref(null);
    console.log("p_ref (initial) = ", p_ref);
    console.log("p_ref (initial value) = ", p_ref.value);

    const name = "Daniel";
    const age = 39;

    function handleClick() {
      console.log("p_ref = ", p_ref);
      console.log("p_ref.value = ", p_ref.value);
    }

    function addClass() {
      p_ref.value.classList.add("test");
      console.log("p_ref = ", p_ref);
    }

    function changeContent() {
      p_ref.value.textContent = "I'am not the same again";
      console.log("p_ref = ", p_ref);
    }

    return { p_ref, name, age, handleClick, addClass, changeContent };
  },
};
</script>
