import Vue from "vue";
import VueRouter from "vue-router";
import TestComponent from "@/views/TestComponent.vue";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: TestComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
