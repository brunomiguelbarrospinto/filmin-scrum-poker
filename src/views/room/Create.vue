<template>
  <div>
    Create room
    <form @submit.prevent="submit">
      <input v-model="name" /> <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useRoom from "@/composables/useRoom";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const { createRoom } = useRoom();
    const router = useRouter();
    const name = ref("");
    async function submit() {
      await createRoom(name.value);
      name.value = "";
      router.push("/rooms");
    }
    return { name, submit };
  },
});
</script>
