<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ fullName }}</p>
    <ul>
      <li v-for="name in namesList" :key="name">{{ name }}</li>
    </ul>
    <p><input type="text" v-model="search" /></p>
    <p>Hero name is : {{ heroName }}</p>

    <p>Found Hero in namesList</p>
    <ul>
      <li v-if="search" v-for="name in foundHeroName" :key="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "HomeView",
  setup() {
    const fullName = computed(function () {
      return "Joe Doe";
    });

    const namesList = ref([
      "Mario",
      "Maria",
      "Roger",
      "Rogers",
      "Andrea",
      "Julie",
      "Saly",
      "Lola",
    ]);

    const search = ref("");
    const heroName = ref("");

    const foundHeroName = computed(() => {
      // return namesList.value.find((item) => item === search.value);

      // return namesList.value.filter((item) => {
      //   return item.includes(search.value);
      // });

      return namesList.value.filter((item) => {
        return item.startsWith(search.value);
      });
    });

    return { fullName, namesList, heroName, foundHeroName, search };
  },
};
</script>
