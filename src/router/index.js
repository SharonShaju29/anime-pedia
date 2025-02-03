import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AnimeDetailPage from "../pages/AnimeDetailPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/detail",
    name:"Detail",
    component: AnimeDetailPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
