<template>
  <div>
    <router-link v-if="currentUser" to="/rooms/create">Create room</router-link>
    <h3>Room list</h3>
    <ul v-if="rooms">
      <li :key="key" v-for="(room, key) in rooms">
        {{ room.name }}
        <button v-if="currentUser" @click="joinRoom(key as string)">
          Join
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useRoom from "@/composables/useRoom";
import useUser from "@/composables/useUser";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const { currentUser } = useUser();

    const { rooms, joinRoom: _joinRoom } = useRoom();

    async function joinRoom(id: string) {
      await _joinRoom(id);
      router.push("/rooms/" + id);
    }
    return { rooms, joinRoom, currentUser };
  },
});
</script>
