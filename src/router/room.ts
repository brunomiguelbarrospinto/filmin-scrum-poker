import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/room",
  name: "room-index",
  component: () =>
    import(/* webpackChunkName: "room-index" */ "@/views/room/index.vue"),
  children: [
    {
      path: "",
      name: "room-home",
      component: () =>
        import(/* webpackChunkName: "room-home" */ "@/views/room/Home.vue"),
    },
    {
      path: "create",
      name: "room-create",
      component: () =>
        import(/* webpackChunkName: "room-create" */ "@/views/room/Create.vue"),
    },
    {
      path: "join",
      name: "room-join",
      component: () =>
        import(/* webpackChunkName: "room-join" */ "@/views/room/Join.vue"),
    },
    {
      path: ":id",
      name: "room",
      props: true,
      component: () =>
        import(/* webpackChunkName: "room" */ "@/views/room/Room.vue"),
    },
  ],
};

export default route;
