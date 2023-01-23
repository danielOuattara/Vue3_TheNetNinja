<template>
  <div class="home">
    <h1>Home</h1>
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

    <p><button @click="stopWatch">Stop watch</button></p>
    <p><button @click="stopWatchEffect">Stop watchEffect</button></p>
  </div>
</template>

<script>
/* watch() and watchEffect()  are funciton to be executed when particular values update*/
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  setup() {
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

    const stopWatch = watch(search, () => console.log("watch function run"));

    const stopWatchEffect = watchEffect(() =>
      console.log("watchEffect function run", search.value),
    );

    const foundHeroName = computed(() => {
      // OK
      // return namesList.value.find((item) => item === search.value);

      // Ok
      // return namesList.value.filter((item) => {
      //   return item.includes(search.value);
      // });

      // OK
      return namesList.value.filter((item) => {
        return item.startsWith(search.value);
      });
    });

    return {
      namesList,
      heroName,
      foundHeroName,
      search,
      stopWatch,
      stopWatchEffect,
    };
  },
};
</script>
