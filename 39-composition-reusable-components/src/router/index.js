import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetail from "./../views/PostDetail.vue";
import NotFoundView from "./../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "PostDetails",
    component: PostDetail,
    props: true,
  },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
