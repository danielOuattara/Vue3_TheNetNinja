<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p_ref">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="changeName">Click to change Name</button>
  </div>

  <p>
    <input type="text" placeholder="name" v-model="name" />
  </p>
  <p>
    <button @click="age--">decrease age</button>
    <button @click="age++">increase age</button>
  </p>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = ref("Daniel");
    console.log("name = ", name);
    let age = ref(39);

    function changeName() {
      name.value = "Julie";
      age.value = 38;
      console.log("name = ", name.value, "age = ", age.value);
      return 0;
    }

    return { name, age, changeName };
  },
};
</script>
