import { createRouter, createWebHistory } from "vue-router";
import DesignerView from "../views/DesignerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "designer",
      component: DesignerView,
    },
    {
      path: "/describe",
      name: "describe",
      component: () => import("../views/DescribeView.vue"),
    },
  ],
});

export default router;
