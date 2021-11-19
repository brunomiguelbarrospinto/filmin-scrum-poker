<template>
  <div>
    <router-link to="/rooms/create">Create room</router-link>
    <h3>Room list</h3>
    <ul v-if="rooms">
      <li :key="key" v-for="(room, key) in rooms">
        {{ room.name }} <button>Join</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useRoom from "@/composables/useRoom";
export default defineComponent({
  setup() {
    const { rooms } = useRoom();
    return { rooms };
  },
});
</script>
