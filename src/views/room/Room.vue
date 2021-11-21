<template>
  <div v-if="room">
    Room: {{ room.id }} - {{ room.name }}
    <hr />
    <div>{{ room.users }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import useRoom from "@/composables/useRoom";
import useUser from "@/composables/useUser";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { currentUser } = useUser();
    const router = useRouter();
    watch(currentUser, (value) => {
      if (!value) {
        router.push("/rooms");
      }
    });
    const { getRoomById } = useRoom();
    const room = computed(() => getRoomById(props.id));
    return { room };
  },
});
</script>
