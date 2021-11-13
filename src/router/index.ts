import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RoomRoutes from "./room";

const routes: Array<RouteRecordRaw> = [RoomRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
