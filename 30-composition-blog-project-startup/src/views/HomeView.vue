<template>
  <div class="home">{{ name }} - {{ age }}</div>
  <button @click="handleClick">click</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "Daniel";
    let age = 39;

    function handleClick() {
      console.log("You clicked !");
    }

    return { name, age, handleClick };
  },
};
</script>
