import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home1",
    component: () =>
      import(/* webpackChunkName: "home1" */ "../views/Home1.vue"),
  },
  {
    path: "/home2",
    name: "Home2",
    component: () => import(/* webpackChunkName: "home2" */ "../views/Home2"),
  },
  {
    path: "/home3",
    name: "Home3",
    component: () => import(/* webpackChunkName: "home3" */ "../views/Home3"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
