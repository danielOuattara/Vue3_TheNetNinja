<template>
  <div class="home">
    <h1>Home</h1>
    <p><button @click="toggleshowPosts">Toggle Posts</button></p>
    <p><button @click="posts.pop()">Delete a post</button></p>
    <PostList :posts="posts" v-if="showPosts" />
  </div>
</template>

<script>
import PostList from "./../components/PostList.vue";
import {
  ref,
  onBeforeUnmount,
  onUnmounted,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    onBeforeUnmount(() =>
      console.log("Composition API HomeView: before unmounted"),
    );
    onUnmounted(() => console.log("Composition API HomeView: unmounted"));

    onBeforeMount(() =>
      console.log("Composition API HomeView: before mounted"),
    );
    onMounted(() => console.log("Composition API HomeView: mounted"));

    onBeforeUpdate(() =>
      console.log("Composition API HomeView: before update"),
    );
    onUpdated(() => console.log("Composition API HomeView: updated"));

    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
        id: 1,
      },
      {
        title: "the top 5 css tips that change everything",
        body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
        id: 2,
      },
      {
        title: "magic tips in javascript",
        body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
        id: 3,
      },
    ]);

    const showPosts = ref(true);
    function toggleshowPosts() {
      return (showPosts.value = !showPosts.value);
    }

    return { posts, showPosts, toggleshowPosts };
  },

  beforeCreate() {
    console.log("Option API HomeView: before created");
  },
  created() {
    console.log("Option API HomeView: created");
  },
  beforeMount() {
    console.log("Option API HomeView: before mounted");
  },
  mounted() {
    console.log("Option API HomeView: mounted");
  },
  beforeUpdate() {
    console.log("Option API HomeView: before updated");
  },
  updated() {
    console.log("Option API HomeView: updated");
  },
  beforeUnmount() {
    console.log("Option API HomeView: before unmount");
  },
  unmounted() {
    console.log("Option API HomeView:  unmounted");
  },
};
</script>
