import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/rooms",
  name: "room-index",
  component: () =>
    import(/* webpackChunkName: "room-index" */ "@/views/room/index.vue"),
  children: [
    {
      path: "",
      name: "rooms-home",
      component: () =>
        import(/* webpackChunkName: "room-home" */ "@/views/room/Home.vue"),
    },
    {
      path: "create",
      name: "rooms-create",
      component: () =>
        import(/* webpackChunkName: "room-create" */ "@/views/room/Create.vue"),
    },
    {
      path: "join",
      name: "rooms-join",
      component: () =>
        import(/* webpackChunkName: "room-join" */ "@/views/room/Join.vue"),
    },
    {
      path: ":id",
      name: "rooms-single",
      props: true,
      component: () =>
        import(/* webpackChunkName: "room" */ "@/views/room/Room.vue"),
    },
  ],
};

export default route;
