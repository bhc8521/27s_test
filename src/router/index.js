import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "start",
    component: () => import("../views/start.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../views/wallet.vue"),
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("../views/explore.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/detail.vue"),
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () => import("../views/user-profile.vue"),
  },
  {
    path: "/user-profile-edit",
    name: "UserProfileEdit",
    component: () => import("../views/user-profile-edit.vue"),
  },
  {
    path: "/create-list",
    name: "createList",
    component: () => import("../views/create-list.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/create-main.vue"),
    children: [
      {
        path: "mint",
        component: () => import("../views/create-mint.vue"),
      },
      {
        path: "airdrop",
        component: () => import("../views/create-airdrop.vue"),
      },
      {
        path: "reward",
        component: () => import("../views/create-reward.vue"),
      },
      {
        path: "post",
        component: () => import("../views/create-post.vue"),
      },
      {
        path: "lock",
        component: () => import("../views/create-lock.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
