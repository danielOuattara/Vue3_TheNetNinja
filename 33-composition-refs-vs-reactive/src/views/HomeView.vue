<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="udpateNinjaOne">Update Ninja One</button>

    <br />
    <hr />

    <p>My name is {{ ninjaTwo.name }} and my age is {{ ninjaTwo.age }}</p>
    <button @click="udpateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    //-------------------------------
    /* ref */
    const ninjaOne = ref({ name: "Mario", age: 30 });
    console.log("ninjaOne = ", ninjaOne);

    function udpateNinjaOne() {
      return (ninjaOne.value.age = 40);
    }

    //-------------------------------
    /* reactive */
    // reactive does not accept primitives variables
    const ninjaTwo = reactive({ name: "Luigi", age: 28 });
    console.log("ninjaTwo = ", ninjaTwo);

    function udpateNinjaTwo() {
      return (ninjaTwo.age = 30);
    }

    //--------------------------------

    return { ninjaOne, udpateNinjaOne, ninjaTwo, udpateNinjaTwo };
  },
};
</script>
