<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "./../components/PostList.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
        id: 1,
      },
      // {
      //   title: "the top 5 css tips that change everything",
      //   body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
      //   id: 2,
      // },
      // {
      //   title: "magic tips in javascript",
      //   body: "Non ad non id dolor fugiat Lorem. Eiusmod cupidatat sint consequat minim laboris ad laborum tempor eu pariatur officia sint aute. Dolore aliquip aliquip pariatur eu cillum. Laborum quis enim magna esse anim magna sint exercitation.Aliqua enim in id amet nulla amet amet. Occaecat labore officia elit veniam aliqua eu cupidatat adipisicing do fugiat duis. Officia quis quis commodo sunt ad exercitation nostrud eu mollit ipsum pariatur aliquip quis.Ullamco commodo nostrud do occaecat aliquip non cillum et culpa. Tempor anim voluptate irure nisi qui. Excepteur culpa id nisi irure ullamco ipsum sint adipisicing occaecat. Commodo Lorem eu anim fugiat veniam duis non commodo commodo ad laborum Lorem nostrud. Et officia ut elit aliquip eu eu ex eiusmod fugiat et.Occaecat quis mollit culpa dolor enim cupidatat. Voluptate laborum qui eu velit reprehenderit ex anim exercitation ut fugiat. Pariatur nostrud non tempor veniam. Exercitation adipisicing do voluptate est nulla nisi ea dolore pariatur amet officia. Ad amet proident ad sit aute exercitation sit cupidatat aliqua ex. Nostrud dolore labore duis nisi eiusmod ad occaecat do occaecat officia anim. Nostrud ea et consequat labore ea consequat in",
      //   id: 3,
      // },
    ]);

    return { posts };
  },
};
</script>
